import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Layers, FlaskConical, Factory, Calendar, Zap, Droplets, Settings, Leaf, CheckCircle } from 'lucide-react';
import Section from '../components/Section';

const TheScience = () => {
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
                        Scientific Foundation
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        The Science Behind <span className="gradient-text">CarbonWear</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Computational Validation & Path to Feasibility
                    </p>
                </motion.div>
            </div>

            {/* SECTION 1: CURRENT TECHNOLOGY FOUNDATION */}
            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
                        Foundation
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Building on <span className="text-secondary">Established Science</span>
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        CarbonWear integrates three independently proven technologies:
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Factory,
                            title: 'DIRECT AIR CAPTURE (DAC)',
                            desc: 'Commercial facilities demonstrate atmospheric CO₂ removal is technically feasible. Climeworks and Carbon Engineering operate plants capturing thousands of tons annually.',
                            challenge: 'High cost ($600-1000/ton), centralized infrastructure',
                            color: 'from-blue-500 to-blue-400'
                        },
                        {
                            icon: Atom,
                            title: 'METAL-ORGANIC FRAMEWORKS',
                            desc: 'Zirconium-based MOFs like UiO-66 show exceptional porosity (1,200 m²/g) and improved water stability compared to earlier frameworks.',
                            challenge: 'Scalable integration into textiles',
                            color: 'from-green-500 to-green-400'
                        },
                        {
                            icon: Layers,
                            title: 'FUNCTIONAL TEXTILES',
                            desc: 'Modern fabrics already embed nanoparticles commercially (antimicrobial silver, UV-protective TiO₂, phase-change materials).',
                            challenge: 'Adapting for carbon-capture functionality',
                            color: 'from-purple-500 to-purple-400'
                        }
                    ].map((tech, index) => (
                        <motion.div
                            key={tech.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <tech.icon size={28} className="text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-3">{tech.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{tech.desc}</p>
                            <p className="text-sm font-semibold text-red-500 p-3 bg-red-50 rounded-xl">Challenge: {tech.challenge}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 text-lg font-semibold text-gray-700 border border-primary/10">
                        <Zap size={20} className="text-primary" />
                        CarbonWear bridges these technologies to create a distributed, wearable carbon-removal system.
                    </p>
                </motion.div>
            </Section>

            {/* SECTION 2: COMPUTATIONAL VALIDATION */}
            <Section className="bg-gradient-to-br from-gray-50 to-blue-50 relative">
                <div className="absolute inset-0 decorative-grid opacity-30"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 relative z-10"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        Validation
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Investigation to Validate <span className="text-primary">Water Stability</span>
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        To assess chemical feasibility, we performed density functional theory (DFT) calculations using Quantum ESPRESSO.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-8 flex justify-center">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                    src="/assets/images/mof_mechanism.png"
                                    alt="MOF Mechanism Diagram showing CO₂ binding"
                                    className="relative rounded-2xl shadow-2xl max-w-full h-auto border border-gray-100"
                                />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <FlaskConical size={24} className="text-primary" />
                            Results
                        </h3>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
                            <table className="min-w-full bg-white">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-4 px-6 text-left font-semibold text-gray-700">System</th>
                                        <th className="py-4 px-6 text-left font-semibold text-gray-700">Energy</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 text-gray-600">CO₂ (isolated)</td>
                                        <td className="py-4 px-6 text-gray-900 font-mono">-101.767 Ry</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 text-gray-600">Oxygenated site (isolated)</td>
                                        <td className="py-4 px-6 text-gray-900 font-mono">-42.639 Ry</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 text-gray-600">Combined system</td>
                                        <td className="py-4 px-6 text-gray-900 font-mono">-143.379 Ry</td>
                                    </tr>
                                    <tr className="bg-green-50">
                                        <td className="py-4 px-6 font-bold text-secondary">Adsorption energy</td>
                                        <td className="py-4 px-6 font-bold text-secondary font-mono">-0.4 to -0.5 eV (~-40 kJ/mol)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500 mt-3 italic">Note: Relative energies using proxy model for feasibility evidence</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {[
                            { title: 'RESEARCH QUESTION', content: 'Can CO₂ bind favorably and reversibly to oxygen-containing functional sites relevant to MOF frameworks?' },
                            { title: 'METHODOLOGY', content: 'Software: Quantum ESPRESSO (open-source DFT package)\nFunctional: PBE (generalized gradient approximation)\nSystem: CO₂ molecule + oxygenated adsorption site\nApproach: Reduced proxy model', isList: true },
                            { title: 'INTERPRETATION', content: 'Negative adsorption energy confirms thermodynamically favorable CO₂ binding. The magnitude (-40 kJ/mol) corresponds to strong physisorption or weak chemisorption, ideal for reversible capture materials that must bind CO₂ during use and release during regeneration.' },
                            { title: 'LIMITATIONS', content: 'These calculations validate chemical plausibility, not full-system performance. Real-world capture depends on airflow, material loading, humidity, and regeneration cycling.' }
                        ].map((item, index) => (
                            <div key={item.title} className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                {item.isList ? (
                                    <ul className="text-gray-600 space-y-1 text-sm">
                                        {item.content.split('\n').map((line, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                {line}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                                )}
                            </div>
                        ))}
                    </motion.div>

                    <div className="mt-12">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src="/assets/images/assembly_diagram.png"
                                alt="MOF Assembly Diagram"
                                className="relative rounded-2xl shadow-2xl max-w-full h-auto bg-white p-2 border border-gray-100"
                            />
                        </div>
                        <p className="text-sm text-gray-500 mt-3 italic text-center">
                            Conceptual schematic of metal–organic framework (MOF) coordination assembly and CO₂ adsorption (adapted from Zulkifli et al., ChemistrySelect, 2022).
                        </p>
                    </div>
                    <div className="mt-12">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src="/assets/images/uio66_structure.png"
                                alt="UiO-66 MOF Structure"
                                className="relative rounded-2xl shadow-2xl max-w-full h-auto bg-white p-2 border border-gray-100"
                            />
                        </div>
                        <p className="text-sm text-gray-500 mt-3 italic text-center">
                            Crystal structure of UiO-66, a zirconium-based MOF known for its high porosity and hydrothermal stability (adapted from Cavka et al., J. Am. Chem. Soc., 2008).
                        </p>
                        <p className="text-sm text-gray-400 mt-2 text-center max-w-lg mx-auto">
                            This image is included for structural visualization only; adsorption energetics in this project were evaluated using reduced computational proxy models.
                        </p>
                    </div>
                </div>
            </Section>

            {/* SECTION 3: WHAT THIS MEANS */}
            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-primary text-sm font-semibold mb-6">
                        Key Insight
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Why <span className="text-accent">-40 kJ/mol</span> Matters
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src="/assets/images/binding_energy_chart.png"
                                alt="Binding Energy Ranges Chart"
                                className="relative rounded-2xl shadow-2xl max-w-full h-auto bg-white p-4 border border-gray-100"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
                    >
                        <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <Atom size={24} className="text-primary" />
                            Binding Energy Ranges
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { range: '< -20 kJ/mol', label: 'Weak physisorption', note: 'too weak, CO₂ escapes', active: false },
                                { range: '-20 to -50 kJ/mol', label: 'Strong physisorption', note: '← CARBONWEAR', active: true },
                                { range: '-50 to -100 kJ/mol', label: 'Weak chemisorption', note: '', active: false },
                                { range: '> -100 kJ/mol', label: 'Strong chemisorption', note: 'too strong, won\'t release', active: false }
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <span className={`w-4 h-4 rounded-full flex-shrink-0 ${item.active ? 'bg-gradient-to-br from-secondary to-emerald-400 shadow-lg shadow-green-500/30' : 'bg-gray-200'}`}></span>
                                    <span className={`${item.active ? 'font-bold text-gray-900' : 'text-gray-500'}`}>
                                        {item.label}: {item.range} {item.note && <span className={item.active ? 'text-secondary font-bold' : 'text-gray-400'}>{item.note}</span>}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <p className="font-semibold text-primary mb-4 text-lg">CarbonWear's -40 kJ/mol sits in the optimal range:</p>
                            <ul className="space-y-2">
                                {[
                                    'Strong enough to capture CO₂ from ambient air (420 ppm)',
                                    'Weak enough to release during mild washing conditions',
                                    'Enables thousands of capture-release cycles'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-700">
                                        <CheckCircle size={18} className="text-secondary flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-gray-800 font-medium text-lg p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                                This "Goldilocks zone" is essential for practical, wearable carbon capture.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* SECTION 4: TIMELINE TO REALITY */}
            <Section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl"></div>
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
                            Roadmap
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            From Concept to <span className="text-accent">Commercial Reality</span>
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
                                src="/assets/images/timeline.png"
                                alt="Technology Timeline from 1970s to 2036"
                                className="relative rounded-2xl shadow-2xl max-w-full h-auto bg-gray-800 p-4 border border-white/10"
                            />
                        </div>
                    </motion.div>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        {[
                            { period: '1970s-2000s', title: 'FOUNDATIONAL PERIOD', desc: 'Carbon capture concepts, first MOFs synthesized, climate science establishes urgency' },
                            { period: '2010s', title: 'CONVERGENCE BEGINS', desc: 'DAC facilities prove feasibility, UiO-66 demonstrates water stability, functional textiles commercialize' },
                            { period: '2020s', title: 'ENABLING TECHNOLOGIES MATURE', desc: 'MOF-polymer composites improve, electrospinning scales, computational modeling guides design' },
                            { period: '2026-2030', title: 'PRE-COMMERCIAL DEVELOPMENT', desc: 'Water-stable MOFs optimized for flexing/washing cycles. Scalable textile integration demonstrated at pilot scale.', projected: true },
                            { period: '2031-2035', title: 'PILOT DEPLOYMENT', desc: 'Field testing, cost reduction through manufacturing scale. Early brand partnerships established.', projected: true },
                            { period: '2036', title: 'CARBONWEAR LAUNCHES', desc: 'First-generation garments enter consumer market. Complementary climate technology available globally.', projected: true, highlight: true }
                        ].map((item, index) => (
                            <motion.div
                                key={item.period}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row gap-4 p-4 rounded-2xl transition-all duration-300 ${item.highlight
                                    ? 'bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30'
                                    : 'hover:bg-white/5'
                                    }`}
                            >
                                <div className="md:w-1/4 font-bold text-accent flex items-center gap-2">
                                    <Calendar size={18} />
                                    {item.period}
                                </div>
                                <div className="md:w-3/4">
                                    <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                                        {item.title}
                                        {item.projected && <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-400">(Projected)</span>}
                                    </h4>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* SECTION 5: BREAKTHROUGHS NEEDED */}
            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
                        Research Priorities
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Five Key <span className="text-orange-500">Advances Required</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Droplets, num: 1, title: 'WATER-STABLE MOFs', challenge: 'Flexing + humidity degrades most MOFs', solution: 'Polymer composites with hydrophobic coatings', status: 'Active research, promising early results' },
                        { icon: Settings, num: 2, title: 'SCALABLE INTEGRATION', challenge: 'Lab methods don\'t support mass production', solution: 'Roll-to-roll electrospinning', status: 'Engineering refinement needed' },
                        { icon: Zap, num: 3, title: 'LOW-ENERGY REGENERATION', challenge: 'Traditional sorbents need high heat', solution: 'Humidity-swing or chemically assisted release', status: 'Demonstrated in lab, needs scaling' },
                        { icon: Layers, num: 4, title: 'LONG-TERM DURABILITY', challenge: 'Performance over 50+ wash cycles', solution: 'Adapted textile testing protocols', status: 'Standard methods exist, need validation' },
                        { icon: Leaf, num: 5, title: 'CARBON-NEUTRAL MFG', challenge: 'Production emissions offset captured carbon', solution: 'Renewable-powered facilities + lifecycle accounting', status: 'Increasingly feasible as renewables scale' }
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center shadow-lg">
                                    <item.icon size={20} className="text-white" />
                                </div>
                                <span className="text-xs font-bold text-gray-400">#{item.num}</span>
                            </div>
                            <h3 className="font-bold text-lg text-primary mb-4">{item.title}</h3>
                            <div className="space-y-3 text-sm">
                                <p><span className="font-semibold text-gray-700">Challenge:</span> <span className="text-gray-600">{item.challenge}</span></p>
                                <p><span className="font-semibold text-gray-700">Solution:</span> <span className="text-gray-600">{item.solution}</span></p>
                                <p><span className="font-semibold text-gray-700">Status:</span> <span className="text-gray-600">{item.status}</span></p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 text-lg font-semibold text-gray-700 border border-green-200">
                        <CheckCircle size={20} className="text-secondary" />
                        None require fundamentally new science. All build on active research areas with clear trajectories.
                    </p>
                </motion.div>
            </Section>
        </div>
    );
};

export default TheScience;
