import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { signInWithPopup, auth, googleProvider } from '../../firebase';
import { githubProvider } from '../../firebase';
import { fetchSignInMethodsForEmail, GithubAuthProvider } from 'firebase/auth';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import Fab from '@mui/material/Fab';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

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
      
        const fullNameEmpty = formData.fullName.trim() === '';
        const passwordEmpty = formData.password.trim() === '';
      
        if (fullNameEmpty || passwordEmpty) {
          setErrors({
            fullName: fullNameEmpty,
            password: passwordEmpty
          });
          return;
        }
      
        try {
          const res = await axios.post('http://localhost:1000/api/auth/login', {
            fullName: formData.fullName,
            password: formData.password
          });
      
          alert(res.data.message);
          setErrors({ fullName: false, password: false }); // clear errors on success
        } catch (err) {
          const message = err?.response?.data?.error || '';
      
          let newErrors = { fullName: false, password: false };
      
          if (message.includes("User not found")) {
            newErrors.fullName = true;
          } else if (message.includes("Invalid password")) {
            newErrors.password = true;
          } else {
            newErrors = { fullName: true, password: true };
          }
      
          setErrors(newErrors);
        }
    };

    const handleGoogleLogin = async () => {
        try {
          const result = await signInWithPopup(auth, googleProvider);
          const user = result.user;
      
          const checkRes = await axios.post('http://localhost:1000/api/auth/check-google-user', {
            email: user.email,
          });
      
          alert(checkRes.data.message); // "Google user exists"
        } catch (err) {
          alert(err?.response?.data?.error || 'Google login failed.');
        }
    };
      

    const handleGithubLogin = async () => {
        try {
          const result = await signInWithPopup(auth, githubProvider);
          const user = result.user;
      
          const checkRes = await axios.post('http://localhost:1000/api/auth/check-github-user', {
            email: user.email,
          });
      
          alert(checkRes.data.message); // "GitHub user exists"
        } catch (err) {
          alert(err?.response?.data?.error || 'GitHub login failed.');
        }
    };
      
      
      
    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-20">
                <h2 className="my-5 text-2xl/9 text-left tracking-normal text-sky-900 font-sans selection:bg-cyan-800 selection:text-stone-200 font-bold max-sm:text-center">
                    Login
                </h2>
            </div>
            <div className="flex max-sm:ml-15">
                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
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
                                {errors.fullName && (
                                    <p className="text-xs text-left text-red-500 mt-1">
                                        {formData.fullName.trim() === '' ? 'Full name is required' : 'Name not found'}
                                    </p>
                                )}
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
                                Log In
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
                    <div className="mt-8">
                            {/* OR separator */}
                        <div className="flex items-center justify-center">
                            <div className="w-full border-t border-cyan-800"></div>
                            <span className="px-3 text-sm text-cyan-800 font-semibold selection:bg-cyan-800 selection:text-stone-200">OR</span>
                            <div className="w-full border-t border-cyan-800"></div>
                        </div>

                        {/* Label below OR */}
                        <p className="text-center text-cyan-800 font-sans selection:bg-cyan-800 selection:text-stone-200 my-10 ">
                            Also login using
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
            </div>
        </>
    )
}

export default Login;