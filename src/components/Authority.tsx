import { motion } from 'framer-motion';

const Authority = () => {
    return (
        <section className="py-20 px-6 bg-rich-black/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-subtle-purple/5 blur-3xl -z-10"></div>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative group shrink-0"
                >
                    <div className="absolute inset-0 bg-neon-red/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <img
                        src="/perfil.png"
                        alt="Ismael Cabral"
                        className="w-full max-w-[320px] h-auto rounded-2xl object-cover border border-white/10 relative z-10 shadow-2xl transition-all duration-500 bg-gradient-to-b from-transparent to-black/50"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 space-y-6 text-center md:text-left"
                >
                    <div>
                        <span className="text-neon-red font-medium tracking-wide text-sm uppercase mb-2 block">
                            Quem será seu Assessor
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Ismael Cabral</h2>
                        <p className="text-subtle-purple font-medium text-lg">Especialista em Tecnologia Comercial</p>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-lg">
                        Uma empresa que depende da "inspiração" do vendedor ou da presença do dono não é um negócio, é uma aposta.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg mt-4">
                        Minha missão é <strong className="text-white">Estruturar sua Operação</strong>. Eu pego o que funciona (sua visão) e transformo em um ecossistema onde Processos e Inteligência Artificial trabalham juntos para garantir previsibilidade de receita.
                    </p>

                    <div className="pt-4 border-l-4 border-neon-red pl-6 py-2 bg-white/5 rounded-r-lg">
                        <p className="text-gray-200 italic font-medium text-lg">
                            "Parceiro Oficial <strong className="text-white">Funil de Vendas</strong>."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Authority;
