import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Building2, Sun, DollarSign, Handshake, Target, Sparkles } from 'lucide-react';
import Section from '../components/Section';

const Impact = () => {
    return (
        <div className="w-full">
            {/* PAGE HEADER */}
            <div className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-24 text-center px-4 overflow-hidden">
                <div className="absolute inset-0 decorative-grid opacity-30"></div>
                <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        Global Scale
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        <span className="gradient-text">Global Impact</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Distributed Climate Action at Unprecedented Scale
                    </p>
                </motion.div>
            </div>

            {/* SECTION 1: THE CLIMATE CHALLENGE */}
            <Section className="text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-600 text-sm font-semibold mb-6">
                        The Urgency
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                        The Urgency of <span className="text-red-500">Carbon Removal</span>
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl"
                    >
                        Atmospheric CO₂ has reached <span className="font-bold text-red-500 text-2xl">420 parts per million</span>, the highest concentration in over 3 million years.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        To limit warming to 1.5°C, the world needs to remove approximately <span className="font-bold">10 gigatons</span> of CO₂ annually by 2050.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Current direct air capture facilities remove only ~10,000 tons per year globally. The gap between need and capacity is enormous.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="font-semibold text-primary text-xl"
                    >
                        Scaling carbon removal requires solutions that integrate seamlessly into existing systems and behaviors.
                    </motion.p>
                </div>
            </Section>

            {/* SECTION 2: CARBONWEAR'S CONTRIBUTION */}
            <Section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl"></div>
                <div className="absolute inset-0 decorative-grid opacity-10"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-accent text-sm font-semibold mb-6 backdrop-blur-sm">
                            Our Impact
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            From Individual Shirts to <span className="text-accent">Global Scale</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12 flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src="/assets/images/impact_scale.png"
                                alt="Impact Scale Visualization from one shirt to one billion users"
                                className="relative rounded-2xl shadow-2xl max-w-full h-auto md:max-w-3xl bg-white p-4 border border-white/10"
                            />
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 text-center mb-12">
                        {[
                            { icon: Target, title: 'ONE GARMENT', value: '10-30g', label: 'CO₂ removed daily', sub: 'Equivalent to: A small plant\'s daily photosynthesis' },
                            { icon: Users, title: 'ONE PERSON', value: '0.3-0.5 tons', label: 'CO₂ removed annually (20 items)', sub: 'Equivalent to: Planting 8-12 trees per year' },
                            { icon: Globe, title: 'ONE BILLION USERS', value: '300-500 MT', label: 'CO₂ removed annually', sub: 'Equivalent to: Taking 60-100 million cars off the road' }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mx-auto mb-4">
                                    <stat.icon size={24} className="text-white" />
                                </div>
                                <h3 className="text-sm font-bold text-accent mb-2 tracking-wider">{stat.title}</h3>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                                <p className="text-gray-500 text-xs">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center max-w-3xl mx-auto space-y-4 text-gray-300">
                        <p>While CarbonWear alone won't solve climate change, it provides a meaningful, scalable contribution that requires no lifestyle changes.</p>
                        <p>At full adoption, CarbonWear could remove 3-5% of annual emissions, significant when combined with industrial solutions and decarbonization efforts.</p>
                    </div>
                </div>
            </Section>

            {/* SECTION 3: WHY DISTRIBUTED MATTERS */}
            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
                        Distributed Advantage
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        The Power of <span className="text-secondary">Distributed Action</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 bg-gray-50 rounded-2xl border border-gray-200"
                    >
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                            <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
                                <Building2 size={20} className="text-gray-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-700">Traditional Approach: Centralized DAC</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Massive facilities ($600M+ each)',
                                'Limited geographic locations',
                                'High operational costs ($600-1000 per ton CO₂)',
                                'Slow deployment (years per facility)',
                                'Infrastructure-heavy'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-600">
                                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200"
                    >
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-green-200">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center">
                                <Globe size={20} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary">CarbonWear Approach: Distributed Capture</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Leverages existing textile manufacturing',
                                'Global distribution through established supply chains',
                                'Lower barriers to participation (no new infrastructure)',
                                'Rapid scaling potential (100B+ items/year)',
                                'Integrates into daily life seamlessly'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-700">
                                    <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-green-500 text-sm">✓</span>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mt-12 max-w-3xl mx-auto"
                >
                    <p className="text-lg text-gray-700 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                        Think of it as the difference between building giant solar farms versus putting solar panels on every roof. Both matter, but distributed approaches accelerate adoption.
                    </p>
                </motion.div>
            </Section>

            {/* SECTION 4: COMPLEMENTARY APPROACH */}
            <Section className="bg-gradient-to-br from-blue-50 to-green-50 relative">
                <div className="absolute inset-0 decorative-grid opacity-30"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 relative z-10"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        Comprehensive Solution
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Part of a <span className="text-primary">Comprehensive Solution</span>
                    </h2>
                    <p className="text-gray-600">CarbonWear is designed as a complement, not a replacement</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 text-center relative z-10">
                    {[
                        { priority: 1, icon: Sun, title: 'EMISSIONS REDUCTION', desc: 'Renewable energy, efficiency, electrification', goal: 'Prevent CO₂ from entering atmosphere', goalColor: 'text-green-600', highlight: false },
                        { priority: 2, icon: Building2, title: 'INDUSTRIAL CARBON CAPTURE', desc: 'Large DAC facilities, point-source capture', goal: 'Remove gigatons at centralized scale', goalColor: 'text-blue-600', highlight: false },
                        { priority: 3, icon: Sparkles, title: 'CARBONWEAR', desc: 'Distributed, passive, wearable capture', goal: 'Enable billions to participate', goalColor: 'text-secondary', highlight: true }
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-8 rounded-2xl transition-all duration-300 ${item.highlight
                                    ? 'bg-white shadow-xl border-2 border-secondary transform md:scale-105'
                                    : 'bg-white/80 shadow-lg border border-gray-100 hover:shadow-xl'
                                }`}
                        >
                            <div className={`text-xs font-bold mb-2 ${item.highlight ? 'text-secondary' : 'text-gray-400'}`}>
                                PRIORITY {item.priority}
                            </div>
                            <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${item.highlight
                                    ? 'bg-gradient-to-br from-secondary to-emerald-400'
                                    : 'bg-gray-100'
                                }`}>
                                <item.icon size={24} className={item.highlight ? 'text-white' : 'text-gray-600'} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                            <div className={`pt-4 border-t border-gray-100 font-semibold text-sm ${item.goalColor}`}>
                                Goal: {item.goal}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* SECTION 5: EQUITY & ACCESS */}
            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
                        Equity & Access
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Ensuring <span className="text-purple-600">Global Availability</span>
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Climate solutions must be accessible to all, not just wealthy nations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <DollarSign size={24} className="text-primary" />
                            Tiered Pricing
                        </h3>
                        <div className="space-y-4">
                            {[
                                { market: 'Premium markets', price: '$60-80', note: '(funds R&D)', bg: 'bg-gray-50', border: 'border-gray-200' },
                                { market: 'Mass market', price: '$40-50', note: '(economies of scale)', bg: 'bg-blue-50', border: 'border-blue-200' },
                                { market: 'Developing nations', price: '$20-30', note: '(subsidized)', bg: 'bg-green-50', border: 'border-green-200', highlight: true }
                            ].map((tier, index) => (
                                <div key={tier.market} className={`flex justify-between items-center p-4 rounded-xl ${tier.bg} border ${tier.border}`}>
                                    <span className="font-semibold text-gray-800">{tier.market}</span>
                                    <span className={`font-bold ${tier.highlight ? 'text-secondary' : 'text-primary'}`}>
                                        {tier.price} <span className="text-xs text-gray-500 font-normal">{tier.note}</span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {[
                            { icon: Handshake, title: 'PARTNERSHIPS & SUBSIDIES', desc: 'Collaborate with NGOs for distribution. Partner with governments for public procurement. Carbon credit revenue supports subsidy programs.' },
                            { icon: TrendingUp, title: 'TRANSPARENT IMPACT TRACKING', desc: 'Every garment includes lifetime CO₂ removal data. Users see their personal contribution clearly.' },
                            { icon: Globe, title: 'LOCAL MANUFACTURING', desc: 'Support textile industries in developing nations. Create jobs while distributing climate technology.' }
                        ].map((item, index) => (
                            <div key={item.title} className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-400 flex items-center justify-center flex-shrink-0">
                                    <item.icon size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Section>

            {/* SECTION 6: A FUTURE WORTH WEARING */}
            <Section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 rounded-3xl"></div>
                <div className="absolute inset-0 decorative-grid opacity-10"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 text-center py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Imagine <span className="text-accent">2036</span>
                        </h2>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-blue-100 leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            You wake up, get dressed, and start your day.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Your clothing, comfortable, stylish, indistinguishable from what you wore yesterday, quietly removes carbon from the air as you move through the world.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Across the globe, billions of people do the same. Small actions compound into meaningful change.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="font-bold text-white text-2xl md:text-3xl mt-8 pt-8 border-t border-white/20"
                        >
                            By 2036, fashion becomes more than self-expression. It becomes climate action.
                        </motion.p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Impact;
