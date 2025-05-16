import { useState } from 'react';

const FakeSignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    acceptTerms: false,
  });

  const handleNext = () => {
    // Simulate DB submit
    console.log('📝 Step 1 Data:', {
      fullName: formData.fullName,
      email: formData.email,
    });

    // Show next step
    setStep(2);
  };

  const handleFinalSubmit = () => {
    // Simulate final DB submit
    console.log('✅ Final Signup Data:', formData);
    alert("Fake signup complete!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 rounded-md bg-white shadow-md">
      <h2 className="text-2xl font-semibold text-center text-sky-900 mb-6">
        Sign Up
      </h2>

      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleNext}
            className="w-full bg-sky-900 text-white py-2 rounded-md hover:bg-sky-700 transition"
          >
            Next
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <select
            value={formData.role}
            onChange={(e) =>
              setFormData({ ...formData, role: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Role</option>
            <option value="learner">Learner</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  acceptTerms: e.target.checked,
                })
              }
              className="border border-gray-300"
            />
            <span className="text-sm text-gray-700">
              I accept the terms and conditions
            </span>
          </label>
          <button
            onClick={handleFinalSubmit}
            className="w-full bg-sky-900 text-white py-2 rounded-md hover:bg-sky-700 transition"
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default FakeSignUp;
