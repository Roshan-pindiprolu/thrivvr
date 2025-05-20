import axios from 'axios';
import { signInWithPopup, auth, googleProvider } from '../../firebase';
import { githubProvider } from '../../firebase';
import { fetchSignInMethodsForEmail, GithubAuthProvider } from 'firebase/auth';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const SignUp = () => {
    
    const roles = [
        {
          id: 1,
          name: 'Learner',
          avatar:
            'LR',
        },
        {
          id: 2,
          name: 'Teacher',
          avatar:
            'TH',
        },
        {
          id: 3,
          name: 'Admin',
          avatar:
            'AD',
        }
    ]
    const [selected, setSelected] = useState(roles[0]);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: roles[0].name,
        acceptTerms: false
    });
    const [errors, setErrors] = useState({
        fullName: false,
        email: false,
        password: false,
        confirmPassword: false
    });
      

    const handleNext = () => {
        if (step === 1) {
          const nameError = formData.fullName.trim() === '' ? 'Full name is required' : '';
          const emailError = formData.email.trim() === '' ? 'Email is required' : '';
          setErrors({ ...errors, fullName: nameError, email: emailError });
          if (!nameError && !emailError) setStep(2);
        } else if (step === 2) {
          const passwordError = formData.password.trim() === '' ? 'Password is required' : '';
          const confirmPasswordError = formData.confirmPassword.trim() === '' ? 'Confirm your password' : '';
          const mismatchError = formData.password !== formData.confirmPassword ? 'Passwords do not match' : '';
          setErrors({
            ...errors,
            password: passwordError || mismatchError,
            confirmPassword: confirmPasswordError || mismatchError
          });
          if (!passwordError && !confirmPasswordError && !mismatchError) setStep(3);
        }
    };
      

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };
      
      

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
            ...formData,
            role: selected.name
            };
            await axios.post('http://localhost:1000/api/auth/signup', payload);
            alert("Registration completed");
        } catch (err) {
            alert(err?.response?.data?.error || 'Something went wrong');
        }
    };

    const handleGoogleLogin = async () => {
        try {
          const result = await signInWithPopup(auth, googleProvider);
          const user = result.user;
      
          const payload = {
            fullName: user.displayName,
            email: user.email,
            googleId: user.uid,
            role: "Learner" // optional default
          };
      
          const res = await axios.post('http://localhost:1000/api/auth/social-gmail-login', payload);
      
          alert(res.data.message || "Logged in via Google!");
        } catch (err) {
          console.error("Google login error:", err);
          alert(err?.response?.data?.error || "Login failed.");
        }
    };

    const handleGithubLogin = async () => {
        try {
          const result = await signInWithPopup(auth, githubProvider);
          const user = result.user;
      
          const payload = {
            fullName: user.displayName || user.email.split('@')[0],
            email: user.email,
            githubId: user.uid,
            role: "Learner"
          };
      
          await axios.post('http://localhost:1000/api/auth/social-github-login', payload);
      
          alert("Logged in via GitHub!");
        } catch (error) {
          if (error.code === 'auth/account-exists-with-different-credential') {
            const email = error.customData.email;
            const pendingCred = GithubAuthProvider.credentialFromError(error);
      
            // Step 1: Find which provider is already linked
            const methods = await fetchSignInMethodsForEmail(auth, email);
      
            if (methods.includes('google.com')) {
              alert(`This email is already linked with Google. Please login via Google first.`);
              // Optional: trigger Google login here and then link accounts manually
            } else {
              alert(`Account exists with a different provider`);
            }
      
            // Optional advanced: once Google login succeeds, link the pending GitHub:
            // await linkWithCredential(user, pendingCred);
          } else {
            console.error("GitHub login error:", error);
            alert("GitHub login failed.");
          }
        }
    };
      

      
    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-20">
                <h2 className="my-5 text-2xl/9 text-left font-bold tracking-normal text-sky-900 font-sans selection:bg-cyan-800 selection:text-stone-200 max-sm:text-center">
                    Become our Memeber
                </h2>
            </div>
            <div className="flex max-sm:ml-15">
                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm mb-10">
                {step === 1 && (
                    <div className="space-y-6">
                        <div>
                        <label htmlFor="first-name" className="block text-sm/6 text-sky-900 text-left font-monts selection:bg-cyan-800 selection:text-stone-200">
                            Full name
                        </label>
                        <div className="mt-1 basis-1/3">
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-cyan-800 
                                focus:text-sky-900 outline-1 -outline-offset-1 
                                ${errors.fullName ? 'outline-red-500' : 'outline-gray-300'} 
                                placeholder:text-sky-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-900 sm:text-sm/6 font-monts`}
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                        {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}

                        </div>
                        </div>

                        <div>
                        <label htmlFor="email" className="block text-left text-sm/6 font-medium text-sky-900 font-monts selection:bg-cyan-800 selection:text-stone-200">
                            Email address
                        </label>
                        <div className="mt-1">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-cyan-800 focus:text-sky-900 outline-1 -outline-offset-1 outline-gray-300 ${errors.email ? 'outline-red-500' : 'outline-gray-300'} placeholder:text-sky-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-900 sm:text-sm/6 font-monts`}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                        </div>
                        </div>

                        <button
                        type="button"
                        onClick={handleNext}
                        className="flex w-full justify-center rounded-md bg-sky-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-sky-700 mt-8"
                        >
                        Next
                        </button>

                        <p className="mt-5 text-left text-cyan-800 font-sans selection:bg-cyan-800 selection:text-stone-200">
                        Already a member?{' '}
                            <Link
                                to="/login"
                                className="font-semibold text-sky-900 hover:text-sky-700 ml-1 font-sans selection:bg-cyan-800 selection:text-stone-200"
                            >
                                Login
                            </Link>
                        </p>

                        <div className="mt-8">
                            {/* OR separator */}
                            <div className="flex items-center justify-center">
                                <div className="w-full border-t border-gray-300"></div>
                                <span className="px-3 text-sm text-gray-500 font-semibold">OR</span>
                                <div className="w-full border-t border-gray-300"></div>
                            </div>

                            {/* Label below OR */}
                            <p className="text-center text-cyan-800 font-sans selection:bg-cyan-800 selection:text-stone-200 my-10">
                                Also signup using
                            </p>

                            {/* Social buttons */}
                            <div className="flex justify-center gap-4 mt-4">
                                <Fab
                                aria-label="Google"
                                size="medium"
                                sx={{
                                    bgcolor: 'oklch(39.1% 0.09 240.876)',
                                    color: 'oklch(92.3% 0.003 48.717)',
                                    '&:hover': {
                                    color: 'oklch(39.1% 0.09 240.876)',
                                    backgroundColor: 'oklch(92.3% 0.003 48.717)',
                                    },
                                }}
                                onClick={handleGoogleLogin}
                                >
                                <GoogleIcon />
                                </Fab>
                                <Fab
                                aria-label="GitHub"
                                size="medium"
                                sx={{
                                    bgcolor: 'oklch(39.1% 0.09 240.876)',
                                    color: 'oklch(92.3% 0.003 48.717)',
                                    '&:hover': {
                                    color: 'oklch(39.1% 0.09 240.876)',
                                    backgroundColor: 'oklch(92.3% 0.003 48.717)',
                                    },
                                }}
                                onClick={handleGithubLogin}
                                >
                                <GitHubIcon />
                                </Fab>
                            </div>
                        </div>


                    </div>
                )}

                {step == 2 && (
                    <div>
                    <p
                    onClick={handleBack}
                    className="text-sm mb-5 text-sky-900 font-semibold cursor-pointer hover:text-sky-700 transition duration-150 ease-in-out  selection:bg-cyan-800 selection:text-stone-200"
                    >
                        ← Back
                    </p>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-sky-900 font-monts selection:bg-cyan-800 selection:text-stone-200">
                            Password
                            </label>
                        </div>
                        <div className="mt-1">
                            <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-cyan-800 focus:text-sky-900 outline-1 -outline-offset-1 outline-gray-300 ${errors.password ? 'outline-red-500' : 'outline-gray-300'}placeholder:text-sky-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-900 sm:text-sm/6 max-sm:w-65`}
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                        {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-sky-900 font-monts selection:bg-cyan-800 selection:text-stone-200">
                            Confirm Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            required
                            autoComplete="current-password"
                            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-cyan-800 focus:text-sky-900 outline-1 -outline-offset-1 outline-gray-300 ${errors.confirmPassword ? 'outline-red-500' : 'outline-gray-300'}placeholder:text-sky-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-900 sm:text-sm/6`}
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            />
                        </div>
                        {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>}
                    </div>

                    <button
                    type="button"
                    onClick={handleNext}
                    className="flex w-full justify-center rounded-md bg-sky-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-sky-700 mt-8"
                    >
                    Next
                    </button>
                </div>
                )}

                {step == 3 && (
                    <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                        <p
                        onClick={handleBack}
                        className="text-sm mb-5 text-sky-900 font-semibold cursor-pointer hover:text-sky-700 transition duration-150 ease-in-out  selection:bg-cyan-800 selection:text-stone-200"
                        >
                            ← Back
                        </p>

                        <div>
                        <Listbox value={selected} onChange={setSelected}>
                            <Label className="block text-sm/6 text-sky-900 text-left font-monts selection:bg-cyan-800 selection:text-stone-200">Role</Label>
                            <div className="relative mt-2">
                                <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-sky-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-900 sm:text-sm/6">
                                <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                                    <Avatar sx={{ width: 24, height: 24, fontSize: 10, backgroundColor: 'oklch(92.3% 0.003 48.717)', color: 'oklch(39.1% 0.09 240.876)' }}>{selected.avatar}</Avatar>
                                    <span className="block truncate selection:bg-cyan-800 selection:text-stone-200">{selected.name}</span>
                                </span>
                                <ChevronUpDownIcon
                                    aria-hidden="true"
                                    className="col-start-1 row-start-1 size-5 self-center justify-self-end text-sky-900 sm:size-4"
                                />
                                </ListboxButton>

                                <ListboxOptions
                                transition
                                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                                >
                                {roles.map((role) => (
                                    <ListboxOption
                                    key={role.id}
                                    value={role}
                                    className="group relative cursor-default py-2 pr-9 pl-3 text-sky-900 select-none data-focus:bg-sky-900 data-focus:text-stone-200 data-focus:outline-hidden selection:bg-cyan-800 selection:text-stone-200"
                                    >
                                    <div className="flex items-center">
                                        <Avatar sx={{ width: 24, height: 24, fontSize: 10, backgroundColor: 'oklch(92.3% 0.003 48.717)', color: 'oklch(39.1% 0.09 240.876)'}}>{role.avatar}</Avatar>
                                        <span className="ml-3 block truncate font-normal group-data-selected:font-medium font-monts selection:bg-cyan-800 selection:text-stone-200">{role.name}</span>
                                    </div>

                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-sky-900 group-not-data-selected:hidden group-data-focus:text-stone-200">
                                        <CheckIcon aria-hidden="true" className="size-5" />
                                    </span>
                                    </ListboxOption>
                                ))}
                                </ListboxOptions>
                            </div>
                            </Listbox>
                        </div>

                        <div className="mt-1 space-y-10">
                        <fieldset>
                            <div className="mt-1 space-y-6 mb-5">
                                <div className="flex gap-3">
                                <div className="flex h-6 shrink-0 items-center">
                                    <div className="group grid size-4 grid-cols-1">
                                    <input
                                        id="candidates"
                                        name="candidates"
                                        type="checkbox"
                                        aria-describedby="candidates-description"
                                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-sky-900 checked:bg-sky-900 indeterminate:border-sky-900 indeterminate:bg-sky-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                        checked={formData.acceptTerms}
                                        onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                                    />
                                    <svg
                                        fill="none"
                                        viewBox="0 0 14 14"
                                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                    >
                                        <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-checked:opacity-100"
                                        />
                                        <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-indeterminate:opacity-100"
                                        />
                                    </svg>
                                    </div>
                                </div>
                                <div className="text-sm/6">
                                    <div className="text-sm/6 text-left">
                                        <p id="comments-description" className="text-cyan-800 text-left font-monts selection:bg-cyan-800 selection:text-stone-200">
                                            Accept our terms&emsp;
                                            <a href="#" className="font-semibold text-sky-900 hover:text-sky-700 font-monts">
                                                Click here
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-sky-900 px-3 py-1.5 text-sm/6 font-semibold text-stone-200 shadow-xs hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900 selection:bg-cyan-800 selection:text-stone-200 mt-8"
                            >
                                Sign In
                            </button>
                        </div>
                        </fieldset>
                        </div>
                    </form>
                )}
                {step > 1 && (
                    <p className="mt-5 text-left text-cyan-800 font-sans selection:bg-cyan-800 selection:text-stone-200">
                    Already a member?{' '}
                    <Link
                        to="/login"
                        className="font-semibold text-sky-900 hover:text-sky-700 ml-1 font-sans selection:bg-cyan-800 selection:text-stone-200"
                    >
                        Login
                    </Link>
                </p>
                )}
                </div>
                
            </div>
        </>
    )
}

export default SignUp;