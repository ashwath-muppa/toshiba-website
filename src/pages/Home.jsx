import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Section from '../components/Section';
import VisualPlaceholder from '../components/VisualPlaceholder';

const Home = () => {
    return (
        <div className="w-full">
            {/* SECTION 1: HERO */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 max-w-4xl mx-auto"
                >
                    <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4 tracking-tight">
                        CARBONWEAR
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-8">
                        Carbon Capture You Can Wear
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12">
                        By 2036, your clothing will fight climate change while you live your life.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
                >
                    <ArrowDown size={48} className="text-primary/50" />
                </motion.div>
            </section>

            {/* SECTION 2: THE CHALLENGE */}
            <Section className="bg-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                    THE CLIMATE CHALLENGE
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Atmospheric CO₂ has reached 420 ppm—the highest in 3 million years. Current direct air capture facilities are effective but expensive and slow to scale.
                    <br /><br />
                    <span className="font-semibold text-primary">What if billions of people could participate in carbon removal—without changing their daily routines?</span>
                </p>
            </Section>

            {/* SECTION 3: WHAT IS CARBONWEAR? */}
            <Section className="bg-blue-50/50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        EVERYDAY CLOTHING, EXTRAORDINARY IMPACT
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        CarbonWear transforms ordinary garments into distributed carbon-removal platforms. Water-stable metal-organic framework (MOF) nanoparticles embedded in fabric fibers passively capture atmospheric CO₂ during wear.
                    </p>
                </div>

                <div className="mb-16 flex justify-center">
                    <img
                        src="/assets/images/system_overview.png"
                        alt="System Overview Diagram showing MOF nanoparticles embedded in fabric fibers"
                        className="rounded-xl shadow-lg max-w-full h-auto md:max-w-3xl"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-secondary mb-3">WEAR</h3>
                        <p className="text-gray-600">Air flows through fabric, MOFs capture CO₂</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-secondary mb-3">WASH</h3>
                        <p className="text-gray-600">Routine laundering releases captured carbon</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-secondary mb-3">REPEAT</h3>
                        <p className="text-gray-600">Fabric regenerates for continuous use</p>
                    </div>
                </div>

                <div className="text-center mt-12 text-lg font-semibold text-gray-500">
                    No batteries. No maintenance. No behavior change.
                </div>
            </Section>

            {/* SECTION 4: THREE KEY FEATURES */}
            <Section>
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
                    WHY CARBONWEAR WORKS
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-3xl">🌬️</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">PASSIVE OPERATION</h3>
                        <p className="text-gray-600">Body movement creates airflow through fabric. No external power required.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-3xl">🏭</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">SCALABLE MANUFACTURING</h3>
                        <p className="text-gray-600">Integrates with existing textile production. Billions of garments annually.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-3xl">🔬</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">VALIDATED SCIENCE</h3>
                        <p className="text-gray-600">DFT calculations confirm favorable CO₂ binding. Builds on emerging MOF research.</p>
                    </div>
                </div>
            </Section>

            {/* SECTION 5: IMPACT AT SCALE */}
            <Section className="bg-gray-900 text-white rounded-3xl my-12 mx-4 md:mx-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        FROM INDIVIDUAL TO GLOBAL
                    </h2>
                </div>

                <div className="mb-12 flex justify-center">
                    <img
                        src="/assets/images/impact_scale.png"
                        alt="Impact Scale Visualization from one shirt to one billion users"
                        className="rounded-xl shadow-lg max-w-full h-auto md:max-w-3xl bg-white p-4"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
                    <div>
                        <div className="text-4xl font-bold text-accent mb-2">10-30g</div>
                        <div className="text-gray-400">CO₂ removed daily per shirt</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-accent mb-2">0.5 tons</div>
                        <div className="text-gray-400">Removed annually per person</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-accent mb-2">1 Billion</div>
                        <div className="text-gray-400">Users = Meaningful global impact</div>
                    </div>
                </div>

                <p className="text-center text-gray-400 max-w-2xl mx-auto">
                    CarbonWear doesn't replace industrial solutions—it complements them through distributed action.
                </p>
            </Section>

            {/* SECTION 6: CALL TO ACTION */}
            <Section className="text-center pb-32">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button to="/how-it-works" variant="primary" className="w-full sm:w-auto text-lg px-10 py-4">
                        How It Works →
                    </Button>
                    <Button to="/the-science" variant="outline" className="w-full sm:w-auto text-lg px-10 py-4">
                        See The Science →
                    </Button>
                </div>
            </Section>
        </div>
    );
};

export default Home;
