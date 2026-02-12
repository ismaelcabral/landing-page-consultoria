import { motion } from 'framer-motion';
import { Target, TrendingUp, Settings } from 'lucide-react';

const Differentiation = () => {
    return (
        <section className="py-24 px-6 bg-transparent relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        POR QUE UMA ASSESSORIA?
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Item 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-rich-black/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-subtle-purple/30 transition-colors"
                    >
                        <div className="w-12 h-12 bg-subtle-purple/10 rounded-lg flex items-center justify-center mb-6">
                            <TrendingUp className="w-6 h-6 text-subtle-purple" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4">Visão de Negócio, não de TI</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Não vendo software. Vendo eficiência operacional. A ferramenta serve ao processo de vendas, e não o contrário.
                        </p>
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-rich-black/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-neon-red/30 transition-colors"
                    >
                        <div className="w-12 h-12 bg-neon-red/10 rounded-lg flex items-center justify-center mb-6">
                            <Target className="w-6 h-6 text-neon-red" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4">O Fim do "Achismo"</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Transformamos a arte de vender em ciência. Métricas claras, funil auditável e rotina estabelecida.
                        </p>
                    </motion.div>

                    {/* Item 3 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-rich-black/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-gold/30 transition-colors"
                    >
                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6">
                            <Settings className="w-6 h-6 text-white" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4">Implementação "Done-for-you"</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Eu lidero a estruturação do início ao fim. Você aprova a estratégia, eu garanto a execução técnica e tática.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Differentiation;
