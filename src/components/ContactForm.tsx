import { useState, type FormEvent } from 'react';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ColorfulButton from './ui/ColorfulButton';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        revenue: '',
        challenge: ''
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const message = `Olá Ismael! Gostaria de aplicar para o diagnóstico comercial.
*Nome:* ${formData.name}
*Empresa/Email:* ${formData.email}
*WhatsApp:* ${formData.whatsapp}
*Faturamento:* ${formData.revenue}
*Desafio:* ${formData.challenge}`;

        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "5585999999999";

        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact-form" className="py-24 px-6 bg-rich-black/30 backdrop-blur-sm relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-neon-red/5 via-transparent to-transparent -z-10"></div>

            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-rich-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Shine effect */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-neon-red/5 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="text-center mb-10 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Sua empresa pronta para escalar (com ou sem você na sala).
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Vamos fazer uma <strong className="text-white">Sessão de Alinhamento (15 min)</strong>? Quero entender o gargalo atual da sua operação.
                        </p>

                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm italic">
                            <AlertCircle className="w-4 h-4 text-neon-red" />
                            <span>Ideal para empresas com faturamento acima de R$ 10 mil/mês.</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-rich-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-red/50 focus:ring-1 focus:ring-neon-red/50 transition-colors"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div>
                                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
                                <input
                                    type="text"
                                    id="whatsapp"
                                    name="whatsapp"
                                    required
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    className="w-full bg-rich-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-red/50 focus:ring-1 focus:ring-neon-red/50 transition-colors"
                                    placeholder="(DDD) 99999-9999"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email corporativo</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-rich-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-red/50 focus:ring-1 focus:ring-neon-red/50 transition-colors"
                                placeholder="empresa@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="revenue" className="block text-sm font-medium text-gray-300 mb-2">Faturamento mensal</label>
                            <select
                                id="revenue"
                                name="revenue"
                                required
                                value={formData.revenue}
                                onChange={handleChange}
                                className="w-full bg-rich-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon-red/50 focus:ring-1 focus:ring-neon-red/50 transition-colors appearance-none"
                            >
                                <option value="" disabled>Selecione uma faixa</option>
                                <option value="10k-50k">R$ 10.000 - R$ 50.000</option>
                                <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                                <option value="100k-300k">R$ 100.000 - R$ 300.000</option>
                                <option value="+300k">Acima de R$ 300.000</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="challenge" className="block text-sm font-medium text-gray-300 mb-2">Principal desafio</label>
                            <textarea
                                id="challenge"
                                name="challenge"
                                required
                                rows={3}
                                value={formData.challenge}
                                onChange={handleChange}
                                className="w-full bg-rich-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-red/50 focus:ring-1 focus:ring-neon-red/50 transition-colors resize-none"
                                placeholder="Resuma seu maior gargalo hoje..."
                            ></textarea>
                        </div>

                        <ColorfulButton
                            type="submit"
                            className="w-full justify-center"
                        >
                            APLICAR PARA ASSESSORIA
                        </ColorfulButton>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
