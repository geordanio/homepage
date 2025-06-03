import React from 'react';
import { Facebook, Linkedin, Instagram, Mail, ExternalLink, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <div className="space-y-8">
          {/* Profile Section */}
          <div className="text-center animate-fade-in">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img
                src="https://i.ibb.co/KphXTdDm/Minha-foto.jpg"
                alt="Profile"
                className="rounded-full w-full h-full object-cover shadow-2xl ring-4 ring-white/10"
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Geordanio Almeida</h1>
            <p className="text-lg text-white/80">Programador, Desenvolvedor e Gestão Pública</p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <a
              href="https://instagram.com/geor.almeida"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl p-4 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Instagram className="w-6 h-6 text-white" />
                  <span className="text-white font-medium">Fotos do Instagram</span>
                </div>
                <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </div>
            </a>

            <a
              href="https://www.facebook.com/GeordanioAlmeida/?ref=tn_tnmn"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl p-4 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Facebook className="w-6 h-6 text-white" />
                  <span className="text-white font-medium">Perfil do Facebook</span>
                </div>
                <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/geordanio-almeida-7316167b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl p-4 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Linkedin className="w-6 h-6 text-white" />
                  <span className="text-white font-medium">Perfil do LinkedIn</span>
                </div>
                <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </div>
            </a>

            <a
              href="https://wa.me/5588999359065?text=Geordanio%20Almeida!"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl p-4 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                  <span className="text-white font-medium">WhatsApp</span>
                </div>
                <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </div>
            </a>

            <a
              href="mailto:geordanio1980@gmail.com"
              className="group block bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl p-4 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-white" />
                  <span className="text-white font-medium">Contate-me</span>
                </div>
                <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </div>
            </a>
          </div>

          {/* Footer */}
          <footer className="text-center text-white/60 text-sm mt-12">
            <p>© 2025 Geordanio Almeida. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;