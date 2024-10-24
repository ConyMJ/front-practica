import React from 'react';
import { Link } from 'react-router-dom';

const Layout2 = ({ children, isLogout }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#DAEDF2] font-ubuntu">
            {/* Header */}
            <header className="bg-[#0092BC] text-white p-6">
                <div className="flex justify-between items-center mx-auto">
                    <Link to="/search" className="text-5xl font-bold italic">ULINK</Link>
                    <div>
                        {!isLogout ? (
                            <>
                                <Link
                                    to="/user-profile"
                                    className="bg-[#A3D9D3] text-[#0092BC] px-3 py-2 rounded mr-4 font-bold text-lg hover:bg-[#0092BC] transition duration-300"
                                >
                                    Perfil
                                </Link>
                                <Link
                                    to="/logout"
                                    className="bg-red-600 text-white px-3 py-2 rounded font-bold text-lg hover:bg-red-700 transition duration-300"
                                >
                                    Salir
                                </Link>
                            </>
                        ) : null}
                    </div>
                </div>
            </header>

            {/* Body */}
            <main className="flex-grow">
                {children} {/* Aquí se renderiza el contenido principal */}
            </main>

            {/* Footer */}
            <footer className="bg-[#0092BC] text-white text-center p-2">
                <p>Desarrollado por estudiantes UTEM</p>
                <p>tallersistemasdesoftware@utem.cl / Teléfono (---) --- --- ---</p>
                <p>&copy; 2024 ULINK. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Layout2;
