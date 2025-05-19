// src/components/Layout.jsx
import Navbar from '../NavigationTopBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="px-4 py-6">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
