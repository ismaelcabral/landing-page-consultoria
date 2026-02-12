import { motion } from 'framer-motion';
import { UserX, Clock, MessageSquareX } from 'lucide-react';

const problems = [
    {
        icon: Clock,
        title: "Microgerenciamento Diário",
        text: "Você gasta energia cobrando o básico (CRM, follow-up, resposta rápida). Seu papel virou fiscal de vendedor em vez de estrategista do negócio."
    },
    {
        icon: UserX,
        title: "Dependência de Talentos",
        text: "O resultado depende da boa vontade individual. Se o 'vendedor estrela' sair, ele leva o método e o faturamento com ele."
    },
    {
        icon: MessageSquareX,
        title: "Dinheiro pelo Ralo",
        text: "Sem um processo blindado, leads valiosos são esquecidos e o CAC (Custo de Aquisição) dispara. A desorganização drena sua margem de lucro."
    }
];

const Problems = () => {
    return (
        <section className="py-24 px-6 bg-transparent relative">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neutral-900/50 to-transparent -z-10"></div>

            <div className="max-w-2xl mx-auto">
                <div className="flex flex-col gap-6">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-rich-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-neon-red/30 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="flex items-start gap-5">
                                <div className="shrink-0 text-neon-red">
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-neon-red/10 transition-colors">
                                        <problem.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {problem.text}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problems;
