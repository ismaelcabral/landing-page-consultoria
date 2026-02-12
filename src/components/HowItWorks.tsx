
import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Mapeamento e Playbook",
        description: "Documentamos a cultura comercial. Definimos as regras do jogo, os scripts e os fluxos que tornam a venda replicável por qualquer pessoa."
    },
    {
        number: "02",
        title: "Integração Tecnológica (O Diferencial)",
        description: "A tecnologia entra para blindar o processo. A IA atua na qualificação e na cadência, garantindo que nenhum lead seja desperdiçado por falha humana."
    },
    {
        number: "03",
        title: "Validação e Cultura",
        description: "Não entrego e vou embora. Acompanho a operação rodando para garantir que o time absorveu o novo ritmo e a máquina está performando."
    }
];

const HowItWorks = () => {
    return (
        <section className="py-24 px-6 bg-rich-black/30 backdrop-blur-sm relative">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-neon-red font-medium tracking-wide text-sm uppercase mb-4 block">
                        A Metodologia "Engenharia de Vendas"
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        O Protocolo de Estruturação em 3 Fases
                    </h2>
                </div>

                <div className="relative">
                    <div className="space-y-12 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content Side */}
                                <div className="flex-1 w-full md:w-1/2 pl-0 md:px-12">
                                    <div className={`bg-rich-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-subtle-purple/30 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                        }`}>
                                        <h3 className="text-xl font-bold text-white mb-2 flex flex-col md:block">
                                            <span className="text-neon-red text-sm md:hidden mb-1">Passo {step.number}</span>
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="flex-1 w-full md:w-1/2 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
