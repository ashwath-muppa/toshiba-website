import React from 'react';
import Section from '../components/Section';

const AboutUs = () => {
    return (
        <div className="w-full">
            {/* PAGE HEADER */}
            <div className="bg-blue-50 py-20 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    ABOUT THE PROJECT
                </h1>
                <p className="text-xl text-gray-600">
                    Design Process, Alternatives, and Lessons Learned
                </p>
            </div>

            {/* SECTION 1: PROJECT ORIGIN */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">WHY CARBONWEAR?</h2>
                    <div className="space-y-6 text-gray-700 text-lg">
                        <p>
                            Climate change demands solutions that work at scale—but most carbon removal technologies require massive infrastructure, high costs, or significant behavior change.
                        </p>
                        <p className="font-semibold text-primary">
                            We asked: What if carbon capture could integrate into something billions of people already do every day?
                        </p>
                        <p>
                            Clothing offered a unique opportunity:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Universal need (everyone wears clothes)</li>
                            <li>Large surface area (much more than shoes or masks)</li>
                            <li>Regular replacement cycle (fashion industry produces 100B+ garments annually)</li>
                            <li>Existing global supply chains (no new infrastructure needed)</li>
                        </ul>
                        <p>
                            Modern textiles already incorporate advanced materials—antimicrobial silver, UV-protective titanium dioxide, phase-change materials for temperature regulation. Adding carbon-capture functionality felt like a natural evolution of textile engineering.
                        </p>
                        <p className="italic">
                            The challenge: Could we make it scientifically feasible, economically viable, and genuinely impactful?
                        </p>
                    </div>
                </div>
            </Section>

            {/* SECTION 2: DESIGN ALTERNATIVES */}
            <Section className="bg-gray-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">ALTERNATIVES WE CONSIDERED</h2>
                    <p className="text-gray-600">Before settling on wearable textiles, we evaluated several other approaches.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Alternative 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">FOOTWEAR</h3>
                        <p className="text-sm text-gray-500 mb-4">Embed MOF materials in shoe soles</p>

                        <div className="space-y-3">
                            <div>
                                <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Pros</span>
                                <p className="text-sm text-gray-600">High durability, concentrated airflow</p>
                            </div>
                            <div>
                                <span className="text-xs font-bold text-red-500 uppercase tracking-wide">Cons</span>
                                <ul className="text-sm text-gray-600 list-disc list-inside">
                                    <li>Limited surface area</li>
                                    <li>Moisture/sweat degradation</li>
                                    <li>Infrequent replacement</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Alternative 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">FACE MASKS</h3>
                        <p className="text-sm text-gray-500 mb-4">Integrate into masks for high CO₂ breath</p>

                        <div className="space-y-3">
                            <div>
                                <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Pros</span>
                                <p className="text-sm text-gray-600">100x higher CO₂ concentration</p>
                            </div>
                            <div>
                                <span className="text-xs font-bold text-red-500 uppercase tracking-wide">Cons</span>
                                <ul className="text-sm text-gray-600 list-disc list-inside">
                                    <li>Limited wear time</li>
                                    <li>Comfort/breathing resistance</li>
                                    <li>"Mask fatigue"</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Alternative 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">BUILDING MATERIALS</h3>
                        <p className="text-sm text-gray-500 mb-4">Exterior coatings or construction materials</p>

                        <div className="space-y-3">
                            <div>
                                <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Pros</span>
                                <p className="text-sm text-gray-600">Enormous surface area, long life</p>
                            </div>
                            <div>
                                <span className="text-xs font-bold text-red-500 uppercase tracking-wide">Cons</span>
                                <ul className="text-sm text-gray-600 list-disc list-inside">
                                    <li>Slow renovation cycles</li>
                                    <li>Fixed locations</li>
                                    <li>Less personal engagement</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 bg-green-50 p-8 rounded-xl border border-green-100 max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-secondary mb-4 text-center">WHY CLOTHING WON</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✓</span> Large surface area</li>
                            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✓</span> Extended wear time (12-16 hours)</li>
                            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✓</span> Regular replacement cycle</li>
                            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✓</span> Global manufacturing scale</li>
                        </ul>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✓</span> Personal connection</li>
                            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✓</span> Rapid adoption potential</li>
                            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✓</span> Existing supply chains</li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* SECTION 3: OUR INVESTIGATION */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">VALIDATING THE CONCEPT</h2>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-primary">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">COMPUTATIONAL VALIDATION</h3>
                                <p className="text-gray-600">
                                    We performed density functional theory (DFT) calculations using Quantum ESPRESSO. Results showed -40 kJ/mol adsorption energy—ideal for reversible capture.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-primary">2</div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">LITERATURE RESEARCH</h3>
                                <p className="text-gray-600">
                                    We reviewed 40+ peer-reviewed papers on MOF stability, textile integration, and DAC systems. Key finding: All enabling technologies exist independently.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-primary">3</div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">DESIGN ITERATIONS</h3>
                                <p className="text-gray-600">
                                    We pivoted from in-fabric mineralization (complex) to a simpler adsorption-release cycle for the first generation to ensure commercial viability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* SECTION 4: CHALLENGES & CONSIDERATIONS */}
            <Section className="bg-gray-900 text-white rounded-3xl mx-4 md:mx-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">WHAT WE LEARNED</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "MOF WATER STABILITY",
                            text: "Most MOFs degrade in humidity. Polymer encapsulation is critical.",
                        },
                        {
                            title: "MANUFACTURING SCALE",
                            text: "Lab methods don't scale. Partnership with textile manufacturers is essential.",
                        },
                        {
                            title: "CARBON ACCOUNTING",
                            text: "Renewable-powered production is fundamental to net-negative impact.",
                        },
                        {
                            title: "EQUITY & ACCESS",
                            text: "Subsidized distribution must be designed in from the start.",
                        },
                        {
                            title: "REALISTIC CLAIMS",
                            text: "Honesty about limitations (10-30g vs 100g+) builds trust.",
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-xl">
                            <h3 className="font-bold text-accent mb-2">{item.title}</h3>
                            <p className="text-gray-300 text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* SECTION 5: PERSONAL REFLECTION */}
            <Section className="text-center py-20">
                <h2 className="text-3xl font-bold text-primary mb-8">PERSONAL REFLECTION</h2>
                <div className="max-w-3xl mx-auto text-lg text-gray-700 italic space-y-6">
                    <p>
                        "Climate change feels overwhelming because solutions often demand sacrifice—less travel, less consumption, more cost, more effort."
                    </p>
                    <p>
                        "CarbonWear represents a different approach: What if climate action could be passive? What if fighting climate change required nothing more than getting dressed?"
                    </p>
                    <p>
                        "This project taught us that feasibility isn't just about science—it's about human behavior, economic systems, and equitable access."
                    </p>
                    <p className="font-bold text-primary not-italic mt-8">
                        If CarbonWear succeeds, it won't be because the MOF chemistry is revolutionary. It'll be because we made carbon removal so easy that billions of people could participate without thinking about it.
                    </p>
                </div>
            </Section>
        </div>
    );
};

export default AboutUs;
