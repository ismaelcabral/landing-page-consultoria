import { Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-rich-black/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2 text-center md:text-left">
                    <div className="text-gray-500 text-sm">
                        © 2026 Ismael Cabral. Todos os direitos reservados.
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                        <span className="w-2 h-2 rounded-full bg-neon-red/50 animate-pulse"></span>
                        <span className="text-xs text-gray-600 uppercase tracking-widest font-medium">Parceiro Oficial Funil de Vendas</span>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <a href="#" className="text-gray-400 hover:text-neon-red transition-colors flex items-center gap-2 text-sm group">
                        <MessageCircle className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                    <a href="mailto:contato@ismaelcabral.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                        <span className="hidden sm:inline">Email</span>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-subtle-purple transition-colors flex items-center gap-2 text-sm group">
                        <Linkedin className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
