import React from 'react';
import Section from '../components/Section';
import VisualPlaceholder from '../components/VisualPlaceholder';

const Impact = () => {
    return (
        <div className="w-full">
            {/* PAGE HEADER */}
            <div className="bg-blue-50 py-20 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    GLOBAL IMPACT
                </h1>
                <p className="text-xl text-gray-600">
                    Distributed Climate Action at Unprecedented Scale
                </p>
            </div>

            {/* SECTION 1: THE CLIMATE CHALLENGE */}
            <Section className="text-center">
                <h2 className="text-3xl font-bold text-primary mb-8">THE URGENCY OF CARBON REMOVAL</h2>
                <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
                    <p>
                        Atmospheric CO₂ has reached <span className="font-bold text-red-500">420 parts per million</span>—the highest concentration in over 3 million years.
                    </p>
                    <p>
                        To limit warming to 1.5°C, the world needs to remove approximately <span className="font-bold">10 gigatons</span> of CO₂ annually by 2050.
                    </p>
                    <p>
                        Current direct air capture facilities remove only ~10,000 tons per year globally. The gap between need and capacity is enormous.
                    </p>
                    <p className="font-semibold text-primary">
                        Scaling carbon removal requires solutions that integrate seamlessly into existing systems and behaviors.
                    </p>
                </div>
            </Section>

            {/* SECTION 2: CARBONWEAR'S CONTRIBUTION */}
            <Section className="bg-gray-900 text-white rounded-3xl mx-4 md:mx-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">FROM INDIVIDUAL SHIRTS TO GLOBAL SCALE</h2>
                </div>

                <div className="mb-12 flex justify-center">
                    <img
                        src="/assets/images/impact_scale.png"
                        alt="Impact Scale Visualization from one shirt to one billion users"
                        className="rounded-xl shadow-lg max-w-full h-auto md:max-w-3xl bg-white p-4"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
                    <div className="p-6 bg-gray-800 rounded-xl">
                        <h3 className="text-xl font-bold text-accent mb-2">ONE GARMENT</h3>
                        <div className="text-3xl font-bold mb-2">10-30g</div>
                        <p className="text-gray-400 text-sm">CO₂ removed daily</p>
                        <p className="text-gray-500 text-xs mt-2">Equivalent to: A small plant's daily photosynthesis</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-xl">
                        <h3 className="text-xl font-bold text-accent mb-2">ONE PERSON</h3>
                        <div className="text-3xl font-bold mb-2">0.3-0.5 tons</div>
                        <p className="text-gray-400 text-sm">CO₂ removed annually (20 items)</p>
                        <p className="text-gray-500 text-xs mt-2">Equivalent to: Planting 8-12 trees per year</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-xl">
                        <h3 className="text-xl font-bold text-accent mb-2">ONE BILLION USERS</h3>
                        <div className="text-3xl font-bold mb-2">300-500 MT</div>
                        <p className="text-gray-400 text-sm">CO₂ removed annually</p>
                        <p className="text-gray-500 text-xs mt-2">Equivalent to: Taking 60-100 million cars off the road</p>
                    </div>
                </div>

                <div className="text-center max-w-3xl mx-auto space-y-4 text-gray-300">
                    <p>
                        While CarbonWear alone won't solve climate change, it provides a meaningful, scalable contribution that requires no lifestyle changes.
                    </p>
                    <p>
                        At full adoption, CarbonWear could remove 3-5% of annual emissions—significant when combined with industrial solutions and decarbonization efforts.
                    </p>
                </div>
            </Section>

            {/* SECTION 3: WHY DISTRIBUTED MATTERS */}
            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">THE POWER OF DISTRIBUTED ACTION</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-gray-50 p-8 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                            TRADITIONAL APPROACH: CENTRALIZED DAC
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span> Massive facilities ($600M+ each)
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span> Limited geographic locations
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span> High operational costs ($600-1000 per ton CO₂)
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span> Slow deployment (years per facility)
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span> Infrastructure-heavy
                            </li>
                        </ul>
                    </div>

                    <div className="bg-green-50 p-8 rounded-xl border border-green-100">
                        <h3 className="text-xl font-bold text-secondary mb-6 border-b border-green-200 pb-4">
                            CARBONWEAR APPROACH: DISTRIBUTED CAPTURE
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span> Leverages existing textile manufacturing
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span> Global distribution through established supply chains
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span> Lower barriers to participation (no new infrastructure)
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span> Rapid scaling potential (100B+ items/year)
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span> Integrates into daily life seamlessly
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-12 text-lg text-gray-700 max-w-3xl mx-auto">
                    <p>
                        Think of it as the difference between building giant solar farms versus putting solar panels on every roof—both matter, but distributed approaches accelerate adoption.
                    </p>
                </div>
            </Section>

            {/* SECTION 4: COMPLEMENTARY APPROACH */}
            <Section className="bg-blue-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">PART OF A COMPREHENSIVE SOLUTION</h2>
                    <p className="text-gray-600">CarbonWear is designed as a complement, not a replacement:</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="text-sm font-bold text-gray-400 mb-2">PRIORITY 1</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">EMISSIONS REDUCTION</h3>
                        <p className="text-gray-600 text-sm">Renewable energy, efficiency, electrification</p>
                        <div className="mt-4 pt-4 border-t border-gray-100 text-green-600 font-semibold text-sm">
                            Goal: Prevent CO₂ from entering atmosphere
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="text-sm font-bold text-gray-400 mb-2">PRIORITY 2</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">INDUSTRIAL CARBON CAPTURE</h3>
                        <p className="text-gray-600 text-sm">Large DAC facilities, point-source capture</p>
                        <div className="mt-4 pt-4 border-t border-gray-100 text-blue-600 font-semibold text-sm">
                            Goal: Remove gigatons at centralized scale
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-secondary transform scale-105">
                        <div className="text-sm font-bold text-secondary mb-2">PRIORITY 3</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">CARBONWEAR</h3>
                        <p className="text-gray-600 text-sm">Distributed, passive, wearable capture</p>
                        <div className="mt-4 pt-4 border-t border-gray-100 text-secondary font-semibold text-sm">
                            Goal: Enable billions to participate
                        </div>
                    </div>
                </div>
            </Section>

            {/* SECTION 5: EQUITY & ACCESS */}
            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">ENSURING GLOBAL AVAILABILITY</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Climate solutions must be accessible to all, not just wealthy nations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">TIERED PRICING</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                                <span className="font-semibold">Premium markets</span>
                                <span className="text-primary font-bold">$60-80 <span className="text-xs text-gray-500 font-normal">(funds R&D)</span></span>
                            </li>
                            <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                                <span className="font-semibold">Mass market</span>
                                <span className="text-primary font-bold">$40-50 <span className="text-xs text-gray-500 font-normal">(economies of scale)</span></span>
                            </li>
                            <li className="flex justify-between items-center bg-green-50 p-4 rounded-lg border border-green-100">
                                <span className="font-semibold">Developing nations</span>
                                <span className="text-secondary font-bold">$20-30 <span className="text-xs text-gray-500 font-normal">(subsidized)</span></span>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">PARTNERSHIPS & SUBSIDIES</h3>
                            <p className="text-gray-600 text-sm">
                                Collaborate with NGOs for distribution. Partner with governments for public procurement. Carbon credit revenue supports subsidy programs.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">TRANSPARENT IMPACT TRACKING</h3>
                            <p className="text-gray-600 text-sm">
                                Every garment includes lifetime CO₂ removal data. Users see their personal contribution clearly.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">LOCAL MANUFACTURING</h3>
                            <p className="text-gray-600 text-sm">
                                Support textile industries in developing nations. Create jobs while distributing climate technology.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* SECTION 6: A FUTURE WORTH WEARING */}
            <Section className="bg-gradient-to-br from-blue-900 to-green-900 text-white text-center py-32 rounded-3xl mx-4 md:mx-8 mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">IMAGINE 2036</h2>
                <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-blue-100 leading-relaxed">
                    <p>
                        You wake up, get dressed, and start your day.
                    </p>
                    <p>
                        Your clothing—comfortable, stylish, indistinguishable from what you wore yesterday—quietly removes carbon from the air as you move through the world.
                    </p>
                    <p>
                        Across the globe, billions of people do the same. Small actions compound into meaningful change.
                    </p>
                    <p className="font-bold text-white text-2xl mt-8">
                        By 2036, fashion becomes more than self-expression—it becomes climate action.
                    </p>
                </div>
            </Section>
        </div>
    );
};

export default Impact;
