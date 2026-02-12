import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
    const phoneNumber = "5585999999999";

    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-1 hover:scale-110 flex items-center justify-center"
            aria-label="Fale conosco no WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
        </a>
    );
};

export default FloatingWhatsApp;
