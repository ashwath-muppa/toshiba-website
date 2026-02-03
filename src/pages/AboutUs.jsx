import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Footprints, Cpu, Building, FileText, TestTube, Droplets, Factory, Calculator, Users, Award, Quote } from 'lucide-react';
import Section from '../components/Section';

const AboutUs = () => {
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
                        Behind The Scenes
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        About <span className="gradient-text">The Project</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Design Process, Alternatives, and Lessons Learned
                    </p>
                </motion.div>
            </div>

            {/* SECTION 1: PROJECT ORIGIN */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
                            The Origin
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Why <span className="text-secondary">CarbonWear</span>?
                        </h2>
                    </motion.div>

                    <div className="space-y-6 text-gray-700 text-lg">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Climate change demands solutions that work at scale, but most carbon removal technologies require massive infrastructure, high costs, or significant behavior change.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10"
                        >
                            <p className="font-semibold text-primary text-xl">
                                We asked: What if carbon capture could integrate into something billions of people already do every day?
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <p className="mb-4">Clothing offered a unique opportunity:</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { icon: Users, text: 'Universal need (everyone wears clothes)' },
                                    { icon: Cpu, text: 'Large surface area (much more than shoes or masks)' },
                                    { icon: Award, text: 'Regular replacement cycle (100B+ garments annually)' },
                                    { icon: Factory, text: 'Existing global supply chains (no new infrastructure)' }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-emerald-400 flex items-center justify-center flex-shrink-0">
                                            <item.icon size={20} className="text-white" />
                                        </div>
                                        <span className="text-gray-700">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Modern textiles already incorporate advanced materials: antimicrobial silver, UV-protective titanium dioxide, and phase-change materials for temperature regulation. Adding carbon-capture functionality felt like a natural evolution of textile engineering.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="italic text-gray-600 p-4 border-l-4 border-primary/30 bg-gray-50 rounded-r-xl"
                        >
                            The challenge: Could we make it scientifically feasible, economically viable, and genuinely impactful?
                        </motion.p>
                    </div>
                </div>
            </Section>

            {/* SECTION 2: DESIGN ALTERNATIVES */}
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
                        Design Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Alternatives We <span className="text-primary">Considered</span>
                    </h2>
                    <p className="text-gray-600">Before settling on wearable textiles, we evaluated several other approaches.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 relative z-10">
                    {[
                        {
                            icon: Footprints,
                            title: 'FOOTWEAR',
                            desc: 'Embed MOF materials in shoe soles',
                            pros: 'High durability, concentrated airflow',
                            cons: ['Limited surface area', 'Moisture/sweat degradation', 'Infrequent replacement']
                        },
                        {
                            icon: Cpu,
                            title: 'FACE MASKS',
                            desc: 'Integrate into masks for high CO₂ breath',
                            pros: '100x higher CO₂ concentration',
                            cons: ['Limited wear time', 'Comfort/breathing resistance', '"Mask fatigue"']
                        },
                        {
                            icon: Building,
                            title: 'BUILDING MATERIALS',
                            desc: 'Exterior coatings or construction materials',
                            pros: 'Enormous surface area, long life',
                            cons: ['Slow renovation cycles', 'Fixed locations', 'Less personal engagement']
                        }
                    ].map((alt, index) => (
                        <motion.div
                            key={alt.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                                <alt.icon size={24} className="text-gray-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{alt.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{alt.desc}</p>

                            <div className="space-y-3">
                                <div>
                                    <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Pros</span>
                                    <p className="text-sm text-gray-600">{alt.pros}</p>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-red-500 uppercase tracking-wide">Cons</span>
                                    <ul className="text-sm text-gray-600 space-y-1 mt-1">
                                        {alt.cons.map((con, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="w-1 h-1 rounded-full bg-red-400"></span>
                                                {con}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 max-w-4xl mx-auto relative z-10"
                >
                    <h3 className="text-xl font-bold text-secondary mb-6 text-center flex items-center justify-center gap-2">
                        <Award size={24} />
                        Why Clothing Won
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            'Large surface area',
                            'Extended wear time (12-16 hours)',
                            'Regular replacement cycle',
                            'Global manufacturing scale',
                            'Personal connection',
                            'Rapid adoption potential',
                            'Existing supply chains'
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-2 text-gray-700">
                                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-green-500 text-sm">✓</span>
                                </span>
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            {/* SECTION 3: OUR INVESTIGATION */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
                            Validation
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Validating <span className="text-purple-600">The Concept</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                step: 1,
                                icon: Calculator,
                                title: 'COMPUTATIONAL VALIDATION',
                                desc: 'We performed density functional theory (DFT) calculations using Quantum ESPRESSO. Results showed -40 kJ/mol adsorption energy, ideal for reversible capture.',
                                color: 'from-blue-500 to-blue-400'
                            },
                            {
                                step: 2,
                                icon: FileText,
                                title: 'LITERATURE RESEARCH',
                                desc: 'We reviewed 40+ peer-reviewed papers on MOF stability, textile integration, and DAC systems. Key finding: All enabling technologies exist independently.',
                                color: 'from-green-500 to-green-400'
                            },
                            {
                                step: 3,
                                icon: TestTube,
                                title: 'DESIGN ITERATIONS',
                                desc: 'We pivoted from in-fabric mineralization (complex) to a simpler adsorption-release cycle for the first generation to ensure commercial viability.',
                                color: 'from-purple-500 to-purple-400'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6 items-start"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                    <item.icon size={28} className="text-white" />
                                </div>
                                <div className="flex-1 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                                    <div className="text-xs font-bold text-gray-400 mb-1">STEP {item.step}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* SECTION 4: CHALLENGES & CONSIDERATIONS */}
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
                            Key Learnings
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            What We <span className="text-accent">Learned</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Droplets, title: 'MOF WATER STABILITY', text: 'Most MOFs degrade in humidity. Polymer encapsulation is critical.' },
                            { icon: Factory, title: 'MANUFACTURING SCALE', text: 'Lab methods don\'t scale. Partnership with textile manufacturers is essential.' },
                            { icon: Calculator, title: 'CARBON ACCOUNTING', text: 'Renewable-powered production is fundamental to net-negative impact.' },
                            { icon: Users, title: 'EQUITY & ACCESS', text: 'Subsidized distribution must be designed in from the start.' },
                            { icon: Award, title: 'REALISTIC CLAIMS', text: 'Honesty about limitations (10-30g vs 100g+) builds trust.' }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-4">
                                    <item.icon size={20} className="text-white" />
                                </div>
                                <h3 className="font-bold text-accent mb-2">{item.title}</h3>
                                <p className="text-gray-300 text-sm">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* SECTION 5: PERSONAL REFLECTION */}
            <Section className="text-center py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        Reflection
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
                        Personal <span className="gradient-text">Reflection</span>
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {[
                        "Climate change feels overwhelming because solutions often demand sacrifice: less travel, less consumption, more cost, more effort.",
                        "CarbonWear represents a different approach: What if climate action could be passive? What if fighting climate change required nothing more than getting dressed?",
                        "This project taught us that feasibility isn't just about science. It's about human behavior, economic systems, and equitable access."
                    ].map((quote, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <Quote size={24} className="absolute -left-8 top-0 text-primary/20" />
                            <p className="text-lg md:text-xl text-gray-600 italic leading-relaxed pl-4 border-l-2 border-primary/20">
                                "{quote}"
                            </p>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10"
                    >
                        <p className="font-bold text-primary text-xl leading-relaxed">
                            If CarbonWear succeeds, it won't be because the MOF chemistry is revolutionary. It'll be because we made carbon removal so easy that billions of people could participate without thinking about it.
                        </p>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default AboutUs;
