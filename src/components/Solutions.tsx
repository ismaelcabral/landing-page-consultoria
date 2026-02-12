import { Bot, Database, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
    {
        icon: Bot,
        title: "IA de qualificação",
        text: "Atendimento 24/7 que entrega o lead pronto para fechar."
    },
    {
        icon: Database,
        title: "Automação de CRM",
        text: "Seu time nunca mais esquecerá um follow-up."
    },
    {
        icon: CheckCircle2,
        title: "Processo validado",
        text: "Metodologia Funil de Vendas instalada no seu comercial."
    }
];

const Solutions = () => {
    return (
        <section className="py-24 px-6 bg-deep-grey relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neon-red/5 via-transparent to-transparent -z-10"></div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        O sistema de aceleração de vendas
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Não entrego apenas um PDF com dicas. Eu implemento uma "máquina" na sua empresa:
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-rich-black/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-neon-red/30 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-neon-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-red/20 transition-colors">
                                <item.icon className="w-7 h-7 text-neon-red" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
