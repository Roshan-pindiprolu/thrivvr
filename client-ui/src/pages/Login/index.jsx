import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    
    const [formData, setFormData] = useState({
        fullName: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        fullName: false,
        password: false
    });
      

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const res = await axios.post('http://localhost:1000/api/auth/login', {
            fullName: formData.fullName,
            password: formData.password
          });
      
          alert(res.data.message);
          setErrors({ fullName: false, password: false }); // clear errors on success
        } catch (err) {
            const message = err?.response?.data?.error || '';
          
            // Start fresh
            let newErrors = { fullName: false, password: false };
          
            // If it's something generic or unexpected, mark both
            if (!newErrors.fullName && !newErrors.password) {
              newErrors = { fullName: true, password: true };
            }
          
            setErrors(newErrors);
            alert(message || 'Something went wrong');
          }
    };

    console.log(errors);
      
    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="my-5 text-2xl/9 text-center tracking-normal text-sky-900 font-sans selection:bg-cyan-800 selection:text-stone-200">
                    LOGIN
                </h2>
            </div>
            <div className="flex">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="first-name" className="block text-sm/6 text-sky-900 text-left font-monts selection:bg-cyan-800 selection:text-stone-200">
                                Full name
                            </label>
                            <div className="mt-1 basis-1/3">
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    autoComplete="given-name"
                                    className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-cyan-800 focus:text-sky-900 outline-1 -outline-offset-1 ${
                                        errors.fullName ? 'outline-red-500' : 'outline-gray-300'
                                    } placeholder:text-sky-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-900 sm:text-sm/6 font-monts`}
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                                {errors.fullName && (<p className="text-xs text-left text-red-500 mt-1">Name not found</p>)}
                            </div>
                        </div>

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
                                    className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-cyan-800 focus:text-sky-900 outline-1 -outline-offset-1 ${
                                        errors.password ? 'outline-red-500' : 'outline-gray-300'
                                    } placeholder:text-sky-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-900 sm:text-sm/6`}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                {errors.password && ( <p className="text-xs text-left text-red-500 mt-1">Incorrect password</p> )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-sky-900 px-3 py-1.5 text-sm/6 font-semibold text-stone-200 shadow-xs hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900 selection:bg-cyan-800 selection:text-stone-200 mt-8"
                            >
                                Log in
                            </button>
                        </div>

                    </form>
                    <p className="mt-5 text-left text-cyan-800 font-sans selection:bg-cyan-800 selection:text-stone-200">
                        Not registered, yet?{' '}
                        <Link
                            to="/signup"
                            className="font-semibold text-sky-900 hover:text-sky-700 ml-1 font-sans selection:bg-cyan-800 selection:text-stone-200"
                        >
                            Signup
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login;