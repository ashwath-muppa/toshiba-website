import React from 'react';
import { ArrowRight, User, Wind, Layers, RefreshCw, Shield, Droplets, Recycle } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/Section';

const HowItWorks = () => {
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
                        Technology Deep Dive
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        How <span className="gradient-text">CarbonWear</span> Works
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        From Atmospheric CO₂ to Safe Carbon Storage
                    </p>
                </motion.div>
            </div>

            {/* SECTION 1: FABRIC ARCHITECTURE */}
            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
                        Fabric Design
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Three-Layer <span className="text-secondary">Architecture</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src="/assets/images/fabric_cross_section.png"
                                alt="Fabric Cross-Section Diagram"
                                className="relative rounded-2xl shadow-2xl max-w-full h-auto border border-gray-100"
                            />
                            <p className="text-sm text-gray-500 mt-3 italic text-center">
                                Conceptual illustration of the proposed layered CarbonWear fabric architecture, showing the outer textile layer, active capture layer, and inner comfort layer. Illustration generated with AI assistance for visualization purposes only.
                            </p>
                        </div>
                    </motion.div>
                    <div className="space-y-6">
                        {[
                            {
                                title: 'OUTER LAYER',
                                color: 'from-gray-600 to-gray-500',
                                description: 'Conventional cotton-polyester or synthetic textile. Provides mechanical protection and aesthetics. Micro-scale porosity allows air diffusion. Indistinguishable from normal clothing.'
                            },
                            {
                                title: 'ACTIVE CAPTURE LAYER',
                                color: 'from-green-500 to-emerald-400',
                                description: 'Electrospun polymer nanofibers with embedded MOF particles. Zirconium-based MOFs (UiO-66-NH₂ derivatives) selected for water stability and CO₂ affinity.'
                            },
                            {
                                title: 'INNER COMFORT LAYER',
                                color: 'from-blue-500 to-cyan-400',
                                description: 'Moisture-wicking textile. Separates active layer from skin. Ensures comfort and safety. Prevents irritation or material exposure.'
                            }
                        ].map((layer, index) => (
                            <motion.div
                                key={layer.title}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-3 h-12 rounded-full bg-gradient-to-b ${layer.color} flex-shrink-0`}></div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{layer.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{layer.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* SECTION 2: THE CAPTURE PROCESS */}
            <Section className="bg-gradient-to-br from-gray-50 to-blue-50 relative">
                <div className="absolute inset-0 decorative-grid opacity-30"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 relative z-10"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        The Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        The Carbon <span className="text-primary">Capture Cycle</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-4 gap-6 relative z-10">
                    {[
                        { step: 1, icon: User, title: 'YOU MOVE', description: 'Natural body movement creates airflow through fabric. Ambient air (420 ppm CO₂) passes through micro-pores.', color: 'from-blue-500 to-blue-400' },
                        { step: 2, icon: Wind, title: 'CO₂ BINDS', description: 'Carbon dioxide molecules diffuse into porous MOF structures. Selective adsorption through physical interactions.', color: 'from-green-500 to-green-400' },
                        { step: 3, icon: Layers, title: 'STORED', description: 'Captured CO₂ accumulates during wear. No power required. Visual indicator shows saturation level.', color: 'from-purple-500 to-purple-400' },
                        { step: 4, icon: RefreshCw, title: 'WASHING', description: 'Routine laundering releases CO₂. Optional household/municipal systems collect carbon. Fabric regenerates.', color: 'from-orange-500 to-orange-400' }
                    ].map((item, index) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center border border-white/50">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon size={32} className="text-white" />
                                </div>
                                <span className="text-xs font-bold text-gray-400 mb-2">STEP {item.step}</span>
                                <h3 className="font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                            {index < 3 && (
                                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                                    <ArrowRight className="text-gray-300" size={24} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* SECTION 3: WHAT ARE MOFs? */}
            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 md:order-1"
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-primary text-sm font-semibold mb-6">
                            Key Technology
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Metal-Organic Frameworks: <span className="gradient-text">The Secret</span>
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            MOFs are crystalline porous materials formed from metal clusters linked by organic molecules.
                        </p>

                        <div className="mb-6">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Layers size={18} className="text-primary" />
                                </span>
                                Key Properties
                            </h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Exceptionally high surface area (1,200 m²/g for UiO-66)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Tunable pore sizes (8-12 Angstroms, perfect for CO₂)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Selective gas adsorption
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Water-stable variants available
                                </li>
                            </ul>
                        </div>

                        <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                            <h3 className="font-bold text-secondary mb-2">Why UiO-66-NH₂?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Traditional MOFs degrade in humid conditions. Zirconium-based UiO-66 exhibits improved water stability due to strong Zr-O coordination. Amine functionalization enhances CO₂ selectivity.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-1 md:order-2 flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src="/assets/images/mof_structure.png"
                                alt="MOF Crystal Structure"
                                className="relative rounded-2xl shadow-2xl max-w-full h-auto border border-gray-100"
                            />
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* SECTION 4: PERFORMANCE SPECS */}
            <Section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl"></div>
                <div className="absolute inset-0 decorative-grid opacity-10"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
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
                            First Generation
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            Projected <span className="text-accent">Performance</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 text-center mb-12">
                        {[
                            { label: 'CAPTURE RATE', value: '10-30g', sub: 'CO₂ per garment per day' },
                            { label: 'DURABILITY', value: '50+', sub: 'Wash cycles' },
                            { label: 'REGENERATION', value: 'Routine', sub: 'Washing (no special equipment)' }
                        ].map((spec, index) => (
                            <motion.div
                                key={spec.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <h3 className="text-sm font-bold text-accent mb-2 tracking-wider">{spec.label}</h3>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{spec.value}</div>
                                <p className="text-blue-200 text-sm">{spec.sub}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
                        <h3 className="font-bold text-lg text-white mb-2">User Experience</h3>
                        <p className="text-blue-200">Identical to conventional clothing. Same comfort, aesthetics, and care requirements.</p>
                    </div>
                </div>
            </Section>

            {/* SECTION 5: SAFETY & DESIGN */}
            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
                        Safety First
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Safety by <span className="text-secondary">Design</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: Shield, title: 'ENCAPSULATION', description: 'MOF nanoparticles fully contained within polymer fibers. No direct exposure during manufacturing, wear, or disposal.', color: 'from-blue-500 to-blue-400' },
                        { icon: Droplets, title: 'SKIN SEPARATION', description: 'Inner comfort layer creates barrier between active materials and skin. Prevents irritation or contact.', color: 'from-green-500 to-green-400' },
                        { icon: Recycle, title: 'ENVIRONMENTAL SAFETY', description: 'Materials avoid toxic metals. End-of-life garments designed for controlled recycling to prevent ecosystem contamination.', color: 'from-purple-500 to-purple-400' }
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon size={28} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default HowItWorks;
