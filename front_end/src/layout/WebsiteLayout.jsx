import React, { useState, useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Popup from '../components/Popup';
const WebsiteLayout = () => {
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-1 p-5 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-5 gap-4">
          <h2 className="text-xl font-bold border-b-2 border-gray-800 pb-1">Phim Mới</h2>
        </div>
        
        <section>
          <Popup/>
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;