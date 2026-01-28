import React from 'react';
import { Download } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

const Bibliography = () => {
    return (
        <div className="w-full">
            {/* PAGE HEADER */}
            <div className="bg-blue-50 py-20 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    BIBLIOGRAPHY
                </h1>
                <p className="text-xl text-gray-600">
                    Research Foundations & Sources
                </p>
            </div>

            {/* SECTION 1: INTRODUCTION */}
            <Section>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">RESEARCH FOUNDATIONS</h2>
                    <p className="text-gray-700 leading-relaxed">
                        CarbonWear builds on decades of research across materials science, climate science, computational chemistry, and textile engineering.
                        <br /><br />
                        Below are the key sources that informed our project design, feasibility analysis, and performance projections.
                    </p>
                </div>
            </Section>

            {/* CITATION SECTIONS */}
            <Section className="bg-gray-50">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* SECTION 2: MOFs */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-4">
                            METAL-ORGANIC FRAMEWORKS
                        </h2>
                        <ul className="space-y-4 text-gray-600">
                            <li className="pl-4 border-l-4 border-blue-100">
                                Cavka, J. H., Jakobsen, S., Olsbye, U., Guillou, N., Lamberti, C., Bordiga, S., & Lillerud, K. P. (2008). A new zirconium inorganic building brick forming metal organic frameworks with exceptional stability. <span className="italic">Journal of the American Chemical Society</span>, 130(42), 13850-13851.
                            </li>
                            {/* Add more MOF citations as needed */}
                        </ul>
                    </div>

                    {/* SECTION 3: DAC & CLIMATE SCIENCE */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-4">
                            DIRECT AIR CAPTURE & CLIMATE SCIENCE
                        </h2>
                        <ul className="space-y-4 text-gray-600">
                            <li className="pl-4 border-l-4 border-green-100">
                                Climeworks AG. (2024). Direct Air Capture Technology. https://climeworks.com/technology
                            </li>
                            <li className="pl-4 border-l-4 border-green-100">
                                Carbon Engineering. (2024). How Direct Air Capture Works. https://carbonengineering.com/how-dac-works
                            </li>
                            <li className="pl-4 border-l-4 border-green-100">
                                IPCC. (2021). Climate Change 2021: The Physical Science Basis. Contribution of Working Group I to the Sixth Assessment Report of the Intergovernmental Panel on Climate Change. Cambridge University Press.
                            </li>
                        </ul>
                    </div>

                    {/* SECTION 4: FUNCTIONAL TEXTILES */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-4">
                            FUNCTIONAL TEXTILES & MATERIALS
                        </h2>
                        <ul className="space-y-4 text-gray-600">
                            <li className="pl-4 border-l-4 border-purple-100">
                                Outlast Technologies. (2024). Phase Change Materials for Textiles. https://outlast.com/technology
                            </li>
                        </ul>
                    </div>

                    {/* SECTION 5: COMPUTATIONAL CHEMISTRY */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-4">
                            COMPUTATIONAL CHEMISTRY TOOLS
                        </h2>
                        <ul className="space-y-4 text-gray-600">
                            <li className="pl-4 border-l-4 border-orange-100">
                                Giannozzi, P., Andreussi, O., Brumme, T., Bunau, O., Buongiorno Nardelli, M., Calandra, M., ... & Baroni, S. (2017). Advanced capabilities for materials modelling with Quantum ESPRESSO. <span className="italic">Journal of Physics: Condensed Matter</span>, 29(46), 465901.
                            </li>
                        </ul>
                    </div>

                    {/* SECTION 6: AI TOOLS */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-4">
                            ARTIFICIAL INTELLIGENCE TOOLS
                        </h2>
                        <ul className="space-y-4 text-gray-600">
                            <li className="pl-4 border-l-4 border-gray-200">
                                OpenAI ChatGPT. (2026). Brainstorming assistance for project structure and research organization. Accessed January 17-24, 2026.
                            </li>
                        </ul>
                        <p className="mt-6 text-sm text-gray-500 italic">
                            Note: All technical content derives from peer-reviewed literature and original computational work.
                        </p>
                    </div>

                </div>
            </Section>

            {/* SECTION 7: DOWNLOAD SECTION */}
            <Section className="text-center py-20">
                <h2 className="text-3xl font-bold text-primary mb-4">COMPLETE BIBLIOGRAPHY</h2>
                <p className="text-gray-600 mb-8">
                    The complete bibliography contains 40+ sources with full academic citations in APA format.
                </p>
                <Button variant="primary" className="gap-2">
                    <Download size={20} />
                    Download Full Bibliography PDF
                </Button>
            </Section>
        </div>
    );
};

export default Bibliography;
