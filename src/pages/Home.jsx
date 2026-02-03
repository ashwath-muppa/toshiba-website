import React from 'react';
import { ArrowDown, Wind, Factory, Beaker, Leaf, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Section from '../components/Section';

const Home = () => {
    return (
        <div className="w-full">
            {/* SECTION 1: HERO */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
                <div className="absolute inset-0 decorative-grid opacity-50"></div>

                {/* Decorative Blobs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 max-w-5xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-8"
                    >
                        <Sparkles size={16} className="text-secondary" />
                        <span className="text-sm font-medium text-gray-700">Climate Innovation for 2036</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
                        <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                            CARBONWEAR
                        </span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-6">
                        Carbon Capture You Can Wear
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
                        By 2036, your clothing will fight climate change while you live your life.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button to="/how-it-works" variant="primary" className="text-lg">
                            Explore How It Works
                        </Button>
                        <Button to="/the-science" variant="outline" className="text-lg">
                            See The Science
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm text-gray-400">Scroll to explore</span>
                        <ArrowDown size={24} className="text-primary/50 animate-bounce" />
                    </div>
                </motion.div>
            </section>

            {/* SECTION 2: THE CHALLENGE */}
            <Section className="bg-white relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-600 text-sm font-semibold mb-6">
                            The Climate Challenge
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            We Need <span className="text-red-500">Bold Solutions</span> for Carbon Removal
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-6">
                            Atmospheric CO₂ has reached <span className="font-bold text-red-500">420 ppm</span>, the highest in 3 million years. Current direct air capture facilities are effective but expensive and slow to scale.
                        </p>
                        <p className="text-xl font-semibold text-primary">
                            What if billions of people could participate in carbon removal without changing their daily routines?
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* SECTION 3: WHAT IS CARBONWEAR? */}
            <Section className="bg-gradient-to-br from-blue-50 to-green-50 relative">
                <div className="absolute inset-0 decorative-grid opacity-30"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 relative z-10"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        The Solution
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Everyday Clothing, <span className="gradient-text">Extraordinary Impact</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        CarbonWear transforms ordinary garments into distributed carbon-removal platforms. Water-stable metal-organic framework (MOF) nanoparticles embedded in fabric fibers passively capture atmospheric CO₂ during wear.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16 flex justify-center relative z-10"
                >
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img
                            src="/assets/images/system_overview.png"
                            alt="System Overview Diagram showing MOF nanoparticles embedded in fabric fibers"
                            className="relative rounded-2xl shadow-2xl max-w-full h-auto md:max-w-3xl border border-white/50"
                        />
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 relative z-10">
                    {[
                        { title: 'WEAR', icon: Leaf, description: 'Air flows through fabric, MOFs capture CO₂', color: 'from-green-500 to-emerald-400' },
                        { title: 'WASH', icon: Zap, description: 'Routine laundering releases captured carbon', color: 'from-blue-500 to-cyan-400' },
                        { title: 'REPEAT', icon: Sparkles, description: 'Fabric regenerates for continuous use', color: 'from-purple-500 to-pink-400' }
                    ].map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50"
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <step.icon size={28} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12 relative z-10"
                >
                    <p className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-lg font-semibold text-gray-700 border border-white/50">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        No batteries. No maintenance. No behavior change.
                    </p>
                </motion.div>
            </Section>

            {/* SECTION 4: THREE KEY FEATURES */}
            <Section className="bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
                        Why It Works
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Built for <span className="text-secondary">Real-World Impact</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Wind, title: 'PASSIVE OPERATION', description: 'Body movement creates airflow through fabric. No external power required.', color: 'from-blue-500 to-blue-400' },
                        { icon: Factory, title: 'SCALABLE MANUFACTURING', description: 'Integrates with existing textile production. Billions of garments annually.', color: 'from-green-500 to-green-400' },
                        { icon: Beaker, title: 'VALIDATED SCIENCE', description: 'DFT calculations confirm favorable CO₂ binding. Builds on emerging MOF research.', color: 'from-purple-500 to-purple-400' }
                    ].map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group text-center p-8"
                        >
                            <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                <feature.icon size={36} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* SECTION 5: IMPACT AT SCALE */}
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
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-accent text-sm font-semibold mb-6 backdrop-blur-sm">
                            Scale Matters
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            From Individual to <span className="text-accent">Global</span>
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

                    <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
                        {[
                            { value: '10-30g', label: 'CO₂ removed daily per shirt' },
                            { value: '0.5 tons', label: 'Removed annually per person' },
                            { value: '1 Billion', label: 'Users = Meaningful global impact' }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-center text-gray-400 max-w-2xl mx-auto text-lg">
                        CarbonWear doesn't replace industrial solutions. It complements them through distributed action.
                    </p>
                </div>
            </Section>

            {/* SECTION 6: CALL TO ACTION */}
            <Section className="text-center pb-32 bg-gradient-to-br from-white to-blue-50">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        Ready to Learn More?
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button to="/how-it-works" variant="primary" className="text-lg px-10 py-4">
                            How It Works
                        </Button>
                        <Button to="/the-science" variant="accent" className="text-lg px-10 py-4">
                            See The Science
                        </Button>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
};

export default Home;
