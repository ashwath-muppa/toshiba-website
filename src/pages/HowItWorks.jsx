import React from 'react';
import { ArrowRight, User, Wind, Layers, RefreshCw } from 'lucide-react';
import Section from '../components/Section';
import VisualPlaceholder from '../components/VisualPlaceholder';

const HowItWorks = () => {
    return (
        <div className="w-full">
            {/* PAGE HEADER */}
            <div className="bg-blue-50 py-20 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    HOW CARBONWEAR WORKS
                </h1>
                <p className="text-xl text-gray-600">
                    From Atmospheric CO₂ to Safe Carbon Storage
                </p>
            </div>

            {/* SECTION 1: FABRIC ARCHITECTURE */}
            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">THREE-LAYER DESIGN</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        <img
                            src="/assets/images/fabric_cross_section.png"
                            alt="Fabric Cross-Section Diagram"
                            className="rounded-xl shadow-lg max-w-full h-auto"
                        />
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">OUTER LAYER</h3>
                            <p className="text-gray-600">
                                Conventional cotton-polyester or synthetic textile. Provides mechanical protection and aesthetics. Micro-scale porosity allows air diffusion. Indistinguishable from normal clothing.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-2">ACTIVE CAPTURE LAYER</h3>
                            <p className="text-gray-600">
                                Electrospun polymer nanofibers with embedded MOF particles. Zirconium-based MOFs (UiO-66-NH₂ derivatives) selected for water stability and CO₂ affinity. Particles encapsulated to prevent loss.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">INNER COMFORT LAYER</h3>
                            <p className="text-gray-600">
                                Moisture-wicking textile. Separates active layer from skin. Ensures comfort and safety. Prevents irritation or material exposure.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* SECTION 2: THE CAPTURE PROCESS */}
            <Section className="bg-gray-50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">THE CARBON CAPTURE CYCLE</h2>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="relative">
                        <div className="bg-white p-6 rounded-xl shadow-sm h-full flex flex-col items-center text-center z-10 relative">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-primary">
                                <User size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">STEP 1: YOU MOVE</h3>
                            <p className="text-sm text-gray-600">
                                Natural body movement creates airflow through fabric. Ambient air (420 ppm CO₂) passes through micro-pores.
                            </p>
                        </div>
                        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                            <ArrowRight className="text-gray-300" size={32} />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                        <div className="bg-white p-6 rounded-xl shadow-sm h-full flex flex-col items-center text-center z-10 relative">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-secondary">
                                <Wind size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">STEP 2: CO₂ BINDS</h3>
                            <p className="text-sm text-gray-600">
                                Carbon dioxide molecules diffuse into porous MOF structures. Selective adsorption through physical interactions.
                            </p>
                        </div>
                        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                            <ArrowRight className="text-gray-300" size={32} />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative">
                        <div className="bg-white p-6 rounded-xl shadow-sm h-full flex flex-col items-center text-center z-10 relative">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                                <Layers size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">STEP 3: STORED</h3>
                            <p className="text-sm text-gray-600">
                                Captured CO₂ accumulates during wear. No power required. Visual indicator shows saturation level.
                            </p>
                        </div>
                        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                            <ArrowRight className="text-gray-300" size={32} />
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative">
                        <div className="bg-white p-6 rounded-xl shadow-sm h-full flex flex-col items-center text-center z-10 relative">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                                <RefreshCw size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">STEP 4: WASHING</h3>
                            <p className="text-sm text-gray-600">
                                Routine laundering releases CO₂. Optional household/municipal systems collect carbon. Fabric regenerates.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* SECTION 3: WHAT ARE MOFs? */}
            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            METAL-ORGANIC FRAMEWORKS: THE KEY TECHNOLOGY
                        </h2>
                        <p className="text-gray-700 mb-6">
                            MOFs are crystalline porous materials formed from metal clusters linked by organic molecules.
                        </p>

                        <h3 className="font-bold text-gray-900 mb-2">KEY PROPERTIES:</h3>
                        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                            <li>Exceptionally high surface area (1,200 m²/g for UiO-66)</li>
                            <li>Tunable pore sizes (8-12 Angstroms—perfect for CO₂)</li>
                            <li>Selective gas adsorption</li>
                            <li>Water-stable variants available</li>
                        </ul>

                        <h3 className="font-bold text-gray-900 mb-2">WHY UiO-66-NH₂?</h3>
                        <p className="text-gray-600">
                            Traditional MOFs degrade in humid conditions. Zirconium-based UiO-66 exhibits improved water stability due to strong Zr-O coordination. Amine functionalization enhances CO₂ selectivity.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                        <img
                            src="/assets/images/mof_structure.png"
                            alt="MOF Crystal Structure"
                            className="rounded-xl shadow-lg max-w-full h-auto"
                        />
                    </div>
                </div>
            </Section>

            {/* SECTION 4: PERFORMANCE SPECS */}
            <Section className="bg-blue-900 text-white rounded-3xl mx-4 md:mx-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">PROJECTED PERFORMANCE</h2>
                    <p className="text-blue-200">First Generation</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
                    <div className="p-6 bg-blue-800/50 rounded-xl">
                        <h3 className="text-xl font-bold text-accent mb-2">CAPTURE RATE</h3>
                        <div className="text-3xl font-bold mb-2">10-30g</div>
                        <p className="text-blue-200 text-sm">CO₂ per garment per day</p>
                    </div>
                    <div className="p-6 bg-blue-800/50 rounded-xl">
                        <h3 className="text-xl font-bold text-accent mb-2">DURABILITY</h3>
                        <div className="text-3xl font-bold mb-2">50+</div>
                        <p className="text-blue-200 text-sm">Wash cycles</p>
                    </div>
                    <div className="p-6 bg-blue-800/50 rounded-xl">
                        <h3 className="text-xl font-bold text-accent mb-2">REGENERATION</h3>
                        <div className="text-3xl font-bold mb-2">Routine</div>
                        <p className="text-blue-200 text-sm">Washing (no special equipment)</p>
                    </div>
                </div>

                <div className="text-center border-t border-blue-800 pt-8">
                    <h3 className="font-bold text-lg mb-2">USER EXPERIENCE</h3>
                    <p className="text-blue-200">Identical to conventional clothing. Same comfort, aesthetics, and care requirements.</p>
                </div>
            </Section>

            {/* SECTION 5: SAFETY & DESIGN */}
            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary">SAFETY BY DESIGN</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 border border-gray-100 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">ENCAPSULATION</h3>
                        <p className="text-gray-600">MOF nanoparticles fully contained within polymer fibers. No direct exposure during manufacturing, wear, or disposal.</p>
                    </div>
                    <div className="p-6 border border-gray-100 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">SKIN SEPARATION</h3>
                        <p className="text-gray-600">Inner comfort layer creates barrier between active materials and skin. Prevents irritation or contact.</p>
                    </div>
                    <div className="p-6 border border-gray-100 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">ENVIRONMENTAL SAFETY</h3>
                        <p className="text-gray-600">Materials avoid toxic metals. End-of-life garments designed for controlled recycling to prevent ecosystem contamination.</p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default HowItWorks;
