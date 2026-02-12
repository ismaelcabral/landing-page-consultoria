import { motion } from 'framer-motion';
import ColorfulButton from './ui/ColorfulButton';

const Hero = () => {
    const scrollToForm = () => {
        const form = document.getElementById('contact-form');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-transparent">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-subtle-purple-900/10 via-transparent to-transparent -z-10"></div>

            <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6">
                        Você é refém da sua própria <span className="text-neon-red">equipe de vendas</span>?
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                >
                    Se você não estiver na empresa, a meta é batida? Eu transformo sua visão comercial em um <strong className="text-white">Processo Autônomo</strong>, onde a tecnologia garante a execução e você fica livre do microgerenciamento.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col items-center justify-center gap-4 pt-8"
                >
                    <ColorfulButton onClick={scrollToForm} className="w-full sm:w-auto">
                        QUERO UMA OPERAÇÃO AUTÔNOMA
                    </ColorfulButton>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
