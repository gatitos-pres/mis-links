import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaHeart } from 'react-icons/fa';
import profileImage from 'public/profile.png';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between justify-center text-center bg-gray-100 p-4 parallax">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-4 mb-4 justify-center text-center">Gatitos Presidenciales</h1>
        <img
          src={profileImage}
          alt="Perfil"
          className="w-32 h-32 rounded-full mb-4 shadow-xl"
        />
        <h3 className="text-lg mb-4">Nos apoyas mucho siguiendonos <FaHeart className="inline text-red-600 text-lg" /></h3>
        <div className="space-y-4">
          <a href="https://www.facebook.com/gatitos.presidenciales/" className="flex items-center justify-center text-center space-x-2 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white bg-white text-black hover:shadow-xl shadow-md">
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a href="https://www.youtube.com/@GatitosPresidenciales" className="flex items-center justify-center text-center space-x-2 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white bg-white text-black hover:shadow-xl shadow-md">
            <FaYoutube />
            <span>YouTube</span>
          </a>
          <a href="https://instagram.com/GatitosPresidenciales" className="flex items-center justify-center text-center space-x-2 px-4 py-2 rounded-full hover:bg-pink-600 hover:text-white bg-white text-black hover:shadow-xl shadow-md">
            <FaInstagram />
            <span>Instagram (En construcción)</span>
          </a>
        </div>
      </div>
      <footer className="text-gray-600 mt-8 flex items-center justify-center text-center">
        Propiedad de los gatitos de palacio nacional
      </footer>
    </div>
  );
};

export default App;
