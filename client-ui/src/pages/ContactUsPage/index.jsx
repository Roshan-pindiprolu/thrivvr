'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'
import Navigation from '../../components/Navigation'


const ContactUsPage = () => {

    const [agreed, setAgreed] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!agreed) return alert('Please agree to our privacy policy.');
      
        try {
          const res = await fetch('http://localhost:1000/api/contact/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
      
          if (res.ok) {
            alert('Message sent successfully!');
            setFormData({ firstName: '', lastName: '', email: '', message: '' });
            setAgreed(false);
          } else {
            alert('Failed to send message.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Something went wrong. Please try again later.');
        }
    };
      

    return (
        <>
            <Navigation />
            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl mt-20 font-monts">Contact Us</h2>
                    <p className="mt-7 text-lg/8 text-gray-600 font-lato">Have a question, idea, or just want to say hi? Fill out the form and we’ll get back to you as soon as possible.</p>
                </div>
                <form action="#" method="POST" className="mx-auto mt-10 max-w-xl sm:mt-14 text-left" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                        First name
                        </label>
                        <div className="mt-2.5">
                        <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-800"
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                        Last name
                        </label>
                        <div className="mt-2.5">
                        <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            autoComplete="family-name"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-800"
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                        Email
                        </label>
                        <div className="mt-2.5">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-800"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                        Message
                        </label>
                        <div className="mt-2.5">
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-800"
                            defaultValue={''}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                        </div>
                    </div>
                    <Field className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                        <Switch
                            checked={agreed}
                            onChange={setAgreed}
                            className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800 data-checked:bg-slate-800"
                        >
                            <span className="sr-only">Agree to policies</span>
                            <span
                            aria-hidden="true"
                            className="size-4 transform rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                            />
                        </Switch>
                        </div>
                        <Label className="text-sm/6 text-gray-600">
                        By selecting this, you agree to our{' '}
                        <a href="#" className="font-semibold text-slate-800">
                            privacy&nbsp;policy
                        </a>
                        .
                        </Label>
                    </Field>
                    </div>
                    <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-slate-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
                    >
                        Let's talk
                    </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactUsPage;