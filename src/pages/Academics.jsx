import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Lightbulb, Users, Briefcase, ChevronRight,Globe, GraduationCap, Code, Banknote, Landmark } from 'lucide-react';

// --- Utility Components (Included for self-contained functionality) ---

// Button component that handles navigation
const Button = ({ children, primary = true, linkTo = '#', onClick = () => {} }) => {
  const commonClasses = `px-6 py-3 font-semibold transition-all duration-300 rounded-full shadow-lg transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2`;
  const primaryClasses = 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl focus:ring-blue-500';
  const secondaryClasses = 'bg-white text-blue-600 border border-blue-600 hover:bg-gray-100 focus:ring-blue-500';

  const classes = primary ? primaryClasses : secondaryClasses;
  
  return (
    <Link 
      to={linkTo} 
      onClick={onClick}
      className={`${commonClasses} ${classes}`}
    >
      {children}
    </Link>
  );
};

// Component for a Program Card
const ProgramCard = ({ title, description, icon: Icon, path }) => (
    <Link 
        to={path}
        className="block p-6 bg-white rounded-xl shadow-lg border-t-4 border-blue-500 transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
    >
        <div className="flex items-center space-x-4 mb-3">
            <Icon size={32} className="text-blue-600 p-1 bg-blue-50 rounded-lg" />
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex items-center text-blue-600 font-semibold mt-4">
            View Degrees <ChevronRight size={16} className="ml-1" />
        </div>
    </Link>
);


// --- Academics Page Component ---

const AcademicsPage = () => {
    const [activeTab, setActiveTab] = useState('engineering');

    const programAreas = {
        'engineering': [
            { title: "Computer Science & AI", icon: Code, description: "Focus on machine learning, data science, and advanced software systems." },
            { title: "Renewable Energy Systems", icon: Lightbulb, description: "Developing sustainable solutions for power generation and energy efficiency." },
            { title: "Aerospace & Robotics", icon: GraduationCap, description: "Designing future aerial systems and autonomous mobile robotics." },
        ],
        'arts-sciences': [
            { title: "Global History & Policy", icon: Landmark, description: "Analyzing world events to shape ethical and effective public policy." },
            { title: "Computational Biology", icon: Users, description: "Integrating computing methods with biological research and genetics." },
            { title: "Creative Writing & Media", icon: BookOpen, description: "Mastering storytelling across digital, print, and cinematic platforms." },
        ],
        'business': [
            { title: "Data-Driven Finance", icon: Banknote, description: "Leveraging financial modeling and quantitative analysis for modern markets." },
            { title: "Innovation Management", icon: Briefcase, description: "Leading teams and organizations through periods of rapid technological change." },
            { title: "Global Marketing Strategy", icon: Globe, description: "Developing multinational campaigns sensitive to diverse cultural contexts." },
        ],
    };

    const tabClasses = (tab) => 
        `px-4 py-2 font-semibold rounded-t-lg transition-colors duration-200 ${
            activeTab === tab 
            ? 'text-blue-600 border-b-4 border-blue-600 bg-white'
            : 'text-gray-600 hover:text-blue-600 border-b-4 border-gray-100 hover:border-blue-300'
        }`;

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            {/* 1. Academics Hero Header */}
            <header className="py-20 md:py-32 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-3">
                        The Future of <span className="text-green-400">Learning</span>
                    </h1>
                    <p className="text-xl opacity-80 max-w-4xl mx-auto">
                        IAMR's academic framework is built on interdisciplinary collaboration, cutting-edge research, and real-world application, preparing you for the next decade.
                    </p>
                    <div className="mt-8">
                        <Button primary={false} linkTo="/admissions" className="bg-white text-gray-900 hover:bg-gray-200">
                            Apply for a Program <ArrowRight size={20} className="inline ml-2" />
                        </Button>
                    </div>
                </div>
            </header>

            <main>
                {/* 2. Program Areas Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                            Explore Our <span className="text-blue-600">Program Areas</span>
                        </h2>

                        {/* Tabs Navigation */}
                        <div className="flex justify-center mb-10 border-b border-gray-200">
                            <button 
                                onClick={() => setActiveTab('engineering')} 
                                className={tabClasses('engineering')}
                            >
                                Engineering & Tech
                            </button>
                            <button 
                                onClick={() => setActiveTab('arts-sciences')} 
                                className={tabClasses('arts-sciences')}
                            >
                                Arts & Sciences
                            </button>
                            <button 
                                onClick={() => setActiveTab('business')} 
                                className={tabClasses('business')}
                            >
                                Business & Policy
                            </button>
                        </div>

                        {/* Program Cards Display */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {programAreas[activeTab].map((program, index) => (
                                <ProgramCard 
                                    key={index}
                                    title={program.title}
                                    icon={program.icon}
                                    description={program.description}
                                    path={`/academics/${activeTab}/${index}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Research Focus Banner */}
                <section className="py-16 bg-blue-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h3 className="text-3xl font-bold text-blue-800 mb-4">
                            Driven by Discovery
                        </h3>
                        <p className="text-lg text-blue-700 max-w-4xl mx-auto">
                            IAMR faculty and students collaborate on $100M in annual sponsored research, focusing on sustainability, artificial intelligence, and urban development. Join us in making the next breakthrough.
                        </p>
                        <div className="mt-6">
                            <Button primary linkTo="/contact">
                                Learn About Research <ArrowRight size={18} className="inline ml-2" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 4. Academic Life and Resources */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                            Student Academic Life
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="p-6 bg-gray-50 rounded-xl shadow-md border-l-4 border-indigo-600">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                                    <BookOpen size={24} className="mr-2 text-indigo-600" /> Library & Archives
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Access millions of digital and physical resources. Our libraries are open 24/7 during the academic year, supported by dedicated subject matter experts.
                                </p>
                                <Button primary={false} linkTo="/contact">View Hours</Button>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-xl shadow-md border-l-4 border-indigo-600">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                                    <Users size={24} className="mr-2 text-indigo-600" /> Student Advising
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Every student is assigned a dedicated faculty advisor to guide their academic path, career planning, and personal development from day one.
                                </p>
                                <Button primary linkTo="/contact">Contact Advisor</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Final CTA Banner */}
                <section className="py-12 bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h2 className="text-3xl font-bold mb-3">Ready to shape your expertise?</h2>
                        <p className="text-lg opacity-80 mb-6">Start exploring the degree that will define your future.</p>
                        <Button primary={false} linkTo="/admissions" className="bg-green-400 text-gray-900 hover:bg-green-300">
                            Begin Application Process
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AcademicsPage;