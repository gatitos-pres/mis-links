import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import profileImage from 'public/profile.png';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Gatitos Presidenciales</h1>
        <img
          src={profileImage}
          alt="Perfil"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h2 className="text-2xl mb-4">Sígueme en todas mis redes (:</h2>
        <div className="space-y-4">
          <a href="https://www.facebook.com/gatitos.presidenciales/" className="flex items-center justify-center text-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full">
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a href="https://www.youtube.com/@GatitosPresidenciales" className="flex items-center justify-center text-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full">
            <FaYoutube />
            <span>YouTube</span>
          </a>
          <a href="https://instagram.com/GatitosPresidenciales" className="flex items-center justify-center text-center space-x-2 bg-pink-600 text-white px-4 py-2 rounded-full">
            <FaInstagram />
            <span>Instagram (En construcción)</span>
          </a>
        </div>
      </div>
      <footer className="text-gray-600 mt-8 flex items-center justify-center text-center">
        Derechos reservados: Gatitos Presidenciales ®
      </footer>
    </div>
  );
};

export default App;
