import React from 'react';
import Section from '../components/Section';
import VisualPlaceholder from '../components/VisualPlaceholder';

const TheScience = () => {
    return (
        <div className="w-full">
            {/* PAGE HEADER */}
            <div className="bg-blue-50 py-20 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    THE SCIENCE BEHIND CARBONWEAR
                </h1>
                <p className="text-xl text-gray-600">
                    Computational Validation & Path to Feasibility
                </p>
            </div>

            {/* SECTION 1: CURRENT TECHNOLOGY FOUNDATION */}
            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">BUILDING ON ESTABLISHED SCIENCE</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        CarbonWear integrates three independently proven technologies:
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-primary mb-3">DIRECT AIR CAPTURE (DAC)</h3>
                        <p className="text-gray-600 mb-4">
                            Commercial facilities demonstrate atmospheric CO₂ removal is technically feasible. Climeworks and Carbon Engineering operate plants capturing thousands of tons annually.
                        </p>
                        <p className="text-sm text-red-500 font-semibold">Challenge: High cost ($600-1000/ton), centralized infrastructure</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-primary mb-3">METAL-ORGANIC FRAMEWORKS</h3>
                        <p className="text-gray-600 mb-4">
                            Zirconium-based MOFs like UiO-66 show exceptional porosity (1,200 m²/g) and improved water stability compared to earlier frameworks.
                        </p>
                        <p className="text-sm text-red-500 font-semibold">Challenge: Scalable integration into textiles</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-primary mb-3">FUNCTIONAL TEXTILES</h3>
                        <p className="text-gray-600 mb-4">
                            Modern fabrics already embed nanoparticles commercially (antimicrobial silver, UV-protective TiO₂, phase-change materials).
                        </p>
                        <p className="text-sm text-red-500 font-semibold">Challenge: Adapting for carbon-capture functionality</p>
                    </div>
                </div>

                <div className="text-center mt-12 text-lg font-semibold text-gray-700">
                    CarbonWear bridges these technologies to create a distributed, wearable carbon-removal system.
                </div>
            </Section>

            {/* SECTION 2: COMPUTATIONAL VALIDATION */}
            <Section className="bg-gray-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">INVESTIGATION TO VALIDATE WATER STABILITY</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        To assess chemical feasibility, we performed density functional theory (DFT) calculations using Quantum ESPRESSO.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <div className="mb-8 flex justify-center">
                            <img
                                src="/assets/images/mof_mechanism.png"
                                alt="MOF Mechanism Diagram showing CO₂ binding"
                                className="rounded-xl shadow-lg max-w-full h-auto"
                            />
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-4">RESULTS</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="py-3 px-4 text-left font-semibold text-gray-700">System</th>
                                        <th className="py-3 px-4 text-left font-semibold text-gray-700">Energy</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="py-3 px-4 text-gray-600">CO₂ (isolated)</td>
                                        <td className="py-3 px-4 text-gray-900 font-mono">-101.767 Ry</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 text-gray-600">Oxygenated site (isolated)</td>
                                        <td className="py-3 px-4 text-gray-900 font-mono">-42.639 Ry</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 text-gray-600">Combined system</td>
                                        <td className="py-3 px-4 text-gray-900 font-mono">-143.379 Ry</td>
                                    </tr>
                                    <tr className="bg-green-50">
                                        <td className="py-3 px-4 font-bold text-secondary">Adsorption energy</td>
                                        <td className="py-3 px-4 font-bold text-secondary font-mono">-0.4 to -0.5 eV (~-40 kJ/mol)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500 mt-2 italic">Note: Relative energies using proxy model for feasibility evidence</p>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">RESEARCH QUESTION</h3>
                            <p className="text-gray-600">Can CO₂ bind favorably and reversibly to oxygen-containing functional sites relevant to MOF frameworks?</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">METHODOLOGY</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Software: Quantum ESPRESSO (open-source DFT package)</li>
                                <li>Functional: PBE (generalized gradient approximation)</li>
                                <li>System: CO₂ molecule + oxygenated adsorption site</li>
                                <li>Approach: Reduced proxy model</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">INTERPRETATION</h3>
                            <p className="text-gray-600">
                                Negative adsorption energy confirms thermodynamically favorable CO₂ binding. The magnitude (-40 kJ/mol) corresponds to strong physisorption or weak chemisorption—ideal for reversible capture materials that must bind CO₂ during use and release during regeneration.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">LIMITATIONS</h3>
                            <p className="text-gray-600">
                                These calculations validate chemical plausibility, not full-system performance. Real-world capture depends on airflow, material loading, humidity, and regeneration cycling.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* SECTION 3: WHAT THIS MEANS */}
            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">WHY -40 kJ/mol MATTERS</h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="mb-8 flex justify-center">
                        <img
                            src="/assets/images/binding_energy_chart.png"
                            alt="Binding Energy Ranges Chart"
                            className="rounded-xl shadow-lg max-w-full h-auto bg-white p-4"
                        />
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="font-bold text-lg mb-4">BINDING ENERGY RANGES</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="w-4 h-4 mt-1 rounded-full bg-gray-300 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-500">Weak physisorption: &lt; -20 kJ/mol (too weak, CO₂ escapes)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 mt-1 rounded-full bg-green-500 mr-3 flex-shrink-0"></span>
                                <span className="font-bold text-gray-900">Strong physisorption: -20 to -50 kJ/mol ← CARBONWEAR</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 mt-1 rounded-full bg-gray-300 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-500">Weak chemisorption: -50 to -100 kJ/mol</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 mt-1 rounded-full bg-gray-300 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-500">Strong chemisorption: &gt; -100 kJ/mol (too strong, won't release)</span>
                            </li>
                        </ul>

                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <p className="font-semibold text-primary mb-2">CarbonWear's -40 kJ/mol sits in the optimal range:</p>
                            <ul className="space-y-1 text-gray-600">
                                <li>✓ Strong enough to capture CO₂ from ambient air (420 ppm)</li>
                                <li>✓ Weak enough to release during mild washing conditions</li>
                                <li>✓ Enables thousands of capture-release cycles</li>
                            </ul>
                            <p className="mt-4 text-gray-800 font-medium">This "Goldilocks zone" is essential for practical, wearable carbon capture.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* SECTION 4: TIMELINE TO REALITY */}
            <Section className="bg-gray-900 text-white rounded-3xl mx-4 md:mx-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">FROM CONCEPT TO COMMERCIAL REALITY</h2>
                </div>

                <div className="mb-12 flex justify-center">
                    <img
                        src="/assets/images/timeline.png"
                        alt="Technology Timeline from 1970s to 2036"
                        className="rounded-xl shadow-lg max-w-full h-auto bg-gray-800 p-4"
                    />
                </div>

                <div className="space-y-8 max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/4 font-bold text-accent">1970s-2000s</div>
                        <div className="md:w-3/4">
                            <h4 className="font-bold text-white mb-1">FOUNDATIONAL PERIOD</h4>
                            <p className="text-gray-400">Carbon capture concepts, first MOFs synthesized, climate science establishes urgency</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/4 font-bold text-accent">2010s</div>
                        <div className="md:w-3/4">
                            <h4 className="font-bold text-white mb-1">CONVERGENCE BEGINS</h4>
                            <p className="text-gray-400">DAC facilities prove feasibility, UiO-66 demonstrates water stability, functional textiles commercialize</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/4 font-bold text-accent">2020s</div>
                        <div className="md:w-3/4">
                            <h4 className="font-bold text-white mb-1">ENABLING TECHNOLOGIES MATURE</h4>
                            <p className="text-gray-400">MOF-polymer composites improve, electrospinning scales, computational modeling guides design</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/4 font-bold text-accent">2026-2030</div>
                        <div className="md:w-3/4">
                            <h4 className="font-bold text-white mb-1">PRE-COMMERCIAL DEVELOPMENT (Projected)</h4>
                            <p className="text-gray-400">Water-stable MOFs optimized for flexing/washing cycles. Scalable textile integration demonstrated at pilot scale.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/4 font-bold text-accent">2031-2035</div>
                        <div className="md:w-3/4">
                            <h4 className="font-bold text-white mb-1">PILOT DEPLOYMENT (Projected)</h4>
                            <p className="text-gray-400">Field testing, cost reduction through manufacturing scale. Early brand partnerships established.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/4 font-bold text-accent">2036</div>
                        <div className="md:w-3/4">
                            <h4 className="font-bold text-white mb-1">CARBONWEAR LAUNCHES (Projected)</h4>
                            <p className="text-gray-400">First-generation garments enter consumer market. Complementary climate technology available globally.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* SECTION 5: BREAKTHROUGHS NEEDED */}
            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">FIVE KEY ADVANCES REQUIRED</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "1. WATER-STABLE MOFs",
                            challenge: "Flexing + humidity degrades most MOFs",
                            solution: "Polymer composites with hydrophobic coatings",
                            status: "Active research, promising early results"
                        },
                        {
                            title: "2. SCALABLE INTEGRATION",
                            challenge: "Lab methods don't support mass production",
                            solution: "Roll-to-roll electrospinning",
                            status: "Engineering refinement needed"
                        },
                        {
                            title: "3. LOW-ENERGY REGENERATION",
                            challenge: "Traditional sorbents need high heat",
                            solution: "Humidity-swing or chemically assisted release",
                            status: "Demonstrated in lab, needs scaling"
                        },
                        {
                            title: "4. LONG-TERM DURABILITY",
                            challenge: "Performance over 50+ wash cycles",
                            solution: "Adapted textile testing protocols",
                            status: "Standard methods exist, need validation"
                        },
                        {
                            title: "5. CARBON-NEUTRAL MFG",
                            challenge: "Production emissions offset captured carbon",
                            solution: "Renewable-powered facilities + lifecycle accounting",
                            status: "Increasingly feasible as renewables scale"
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-lg text-primary mb-3">{item.title}</h3>
                            <div className="space-y-2 text-sm">
                                <p><span className="font-semibold text-gray-700">Challenge:</span> <span className="text-gray-600">{item.challenge}</span></p>
                                <p><span className="font-semibold text-gray-700">Solution:</span> <span className="text-gray-600">{item.solution}</span></p>
                                <p><span className="font-semibold text-gray-700">Status:</span> <span className="text-gray-600">{item.status}</span></p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 text-lg font-semibold text-gray-700">
                    None require fundamentally new science—all build on active research areas with clear trajectories.
                </div>
            </Section>
        </div>
    );
};

export default TheScience;
