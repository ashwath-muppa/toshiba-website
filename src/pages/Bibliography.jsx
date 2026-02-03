import React from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen, FlaskConical, Globe, Cpu, Layers, Sparkles } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

const Bibliography = () => {
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
                        References
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        <span className="gradient-text">Bibliography</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Research Foundations & Sources
                    </p>
                </motion.div>
            </div>

            {/* SECTION 1: INTRODUCTION */}
            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <BookOpen size={32} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Foundations</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        CarbonWear builds on decades of research across materials science, climate science, computational chemistry, and textile engineering.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Below are the key sources that informed our project design, feasibility analysis, and performance projections.
                    </p>
                </motion.div>
            </Section>

            {/* CITATION SECTIONS */}
            <Section className="bg-gradient-to-br from-gray-50 to-blue-50 relative">
                <div className="absolute inset-0 decorative-grid opacity-30"></div>

                <div className="max-w-4xl mx-auto space-y-8 relative z-10">

                    {/* SECTION 2: MOFs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center shadow-lg">
                                <FlaskConical size={24} className="text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">
                                Metal-Organic Frameworks
                            </h2>
                        </div>
                        <ul className="space-y-4 text-gray-600">
                            <li className="pl-4 border-l-4 border-blue-200 bg-blue-50/50 p-4 rounded-r-xl">
                                Zulkifli, Z. I., Lim, K. L., & Teh, L. P. (2022). Metal-organic frameworks (MOFs) and their applications in CO₂ adsorption and conversion. <span className="italic">ChemistrySelect</span>, 7(22), e202200572. <a href="https://doi.org/10.1002/slct.202200572" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary underline decoration-primary/30 underline-offset-2 transition-colors">https://doi.org/10.1002/slct.202200572</a>
                            </li>
                            <li className="pl-4 border-l-4 border-blue-200 bg-blue-50/50 p-4 rounded-r-xl">
                                Cavka, J. H., Jakobsen, S., Olsbye, U., Guillou, N., Lamberti, C., Bordiga, S., & Lillerud, K. P. (2008). A new zirconium inorganic building brick forming metal organic frameworks with exceptional stability. <span className="italic">Journal of the American Chemical Society</span>, 130(42), 13850-13851.
                            </li>
                            <li className="pl-4 border-l-4 border-blue-200 bg-blue-50/50 p-4 rounded-r-xl">
                                ChemTube3D. (n.d.). UiO-66 metal–organic framework structure. Retrieved from <a href="https://www.chemtube3D.com/mof-uio66/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary underline decoration-primary/30 underline-offset-2 transition-colors">https://www.chemtube3D.com/mof-uio66/</a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* SECTION 3: DAC & CLIMATE SCIENCE */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-400 flex items-center justify-center shadow-lg">
                                <Globe size={24} className="text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">
                                Direct Air Capture & Climate Science
                            </h2>
                        </div>
                        <ul className="space-y-4 text-gray-600">
                            <li className="pl-4 border-l-4 border-green-200 bg-green-50/50 p-4 rounded-r-xl">
                                Climeworks AG. (2024). Direct Air Capture Technology. https://climeworks.com/technology
                            </li>
                            <li className="pl-4 border-l-4 border-green-200 bg-green-50/50 p-4 rounded-r-xl">
                                Carbon Engineering. (2024). How Direct Air Capture Works. https://carbonengineering.com/how-dac-works
                            </li>
                            <li className="pl-4 border-l-4 border-green-200 bg-green-50/50 p-4 rounded-r-xl">
                                IPCC. (2023). <span className="italic">Climate Change 2023: Synthesis Report</span>. Contribution of Working Groups I, II and III to the Sixth Assessment Report of the Intergovernmental Panel on Climate Change. Geneva, Switzerland.
                            </li>
                        </ul>
                    </motion.div>

                    {/* SECTION 4: FUNCTIONAL TEXTILES */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-400 flex items-center justify-center shadow-lg">
                                <Layers size={24} className="text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">
                                Functional Textiles & Materials
                            </h2>
                        </div>
                        <ul className="space-y-4 text-gray-600">
                            <li className="pl-4 border-l-4 border-purple-200 bg-purple-50/50 p-4 rounded-r-xl">
                                Outlast Technologies. (2024). Phase Change Materials for Textiles. https://outlast.com/technology
                            </li>
                        </ul>
                    </motion.div>

                    {/* SECTION 5: COMPUTATIONAL CHEMISTRY */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center shadow-lg">
                                <Cpu size={24} className="text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">
                                Computational Chemistry Tools
                            </h2>
                        </div>
                        <ul className="space-y-4 text-gray-600">
                            <li className="pl-4 border-l-4 border-orange-200 bg-orange-50/50 p-4 rounded-r-xl">
                                Giannozzi, P., Andreussi, O., Brumme, T., Bunau, O., Buongiorno Nardelli, M., Calandra, M., ... & Baroni, S. (2017). Advanced capabilities for materials modelling with Quantum ESPRESSO. <span className="italic">Journal of Physics: Condensed Matter</span>, 29(46), 465901.
                            </li>
                        </ul>
                    </motion.div>

                    {/* SECTION 6: AI TOOLS */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center shadow-lg">
                                <Sparkles size={24} className="text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">
                                Artificial Intelligence Tools
                            </h2>
                        </div>
                        <ul className="space-y-4 text-gray-600">
                            <li className="pl-4 border-l-4 border-gray-200 bg-gray-50/50 p-4 rounded-r-xl">
                                OpenAI ChatGPT. (2026). Brainstorming assistance for project structure and research organization. Accessed January 17-24, 2026.
                            </li>
                        </ul>
                        <p className="mt-6 text-sm text-gray-500 italic p-3 bg-gray-50 rounded-xl">
                            Note: All technical content derives from peer-reviewed literature and original computational work.
                        </p>
                    </motion.div>

                </div>
            </Section>

            {/* SECTION 7: DOWNLOAD SECTION */}
            <Section className="text-center py-24 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        Download
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Bibliography</h2>
                    <Button variant="primary" className="gap-2 text-lg px-8 py-4">
                        <Download size={20} />
                        Download Full Bibliography PDF
                    </Button>
                </motion.div>
            </Section>
        </div>
    );
};

export default Bibliography;
