import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';
import axios from 'axios';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavigationTopBar = () => {

    const [navigation, setNavigation] = useState([]);

    useEffect(() => {
        const fetchNav = async () => {
        try {
            const res = await axios.get('https://thrivvr.onrender.com/api/nav');
            setNavigation(res.data);
        } catch (err) {
            console.error("❌ Navigation fetch error", err);
        }
        };

        fetchNav();
    }, []);

    return (
        <Disclosure as="nav" className="bg-slate-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-stone-200 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                <img
                    alt="Your Company"
                    src="/ThrivvrNewLogo.png"
                    className="h-8 w-auto"
                />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                        item.current ? 'text-white' : 'text-stone-200 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium font-rale',
                        )}
                    >
                        {item.name}
                    </a>
                    ))}
                </div>
                </div>
            </div>
            </div>
        </div>

        <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
                <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-stone-200 hover:bg-slate-800 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium font-rale',
                )}
                >
                {item.name}
                </DisclosureButton>
            ))}
            </div>
        </DisclosurePanel>
        </Disclosure>
    )
}

export default NavigationTopBar;
