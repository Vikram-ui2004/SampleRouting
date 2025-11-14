import React from 'react';
import { Link } from 'react-router-dom';
// Icons from lucide-react
import { User, ArrowRight, CheckCircle, GraduationCap, Lightbulb, Zap, Users, Globe, MapPin, Briefcase } from 'lucide-react';

// --- Utility Components (Required by AboutPage) ---

const Button = ({ children, primary = true, linkTo = '#', onClick = () => {} }) => (
  <Link 
    to={linkTo} 
    onClick={onClick}
    className={`
      px-6 py-3 font-semibold transition-all duration-300 rounded-full shadow-lg 
      ${primary 
        ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl'
        : 'bg-white text-blue-600 border border-blue-600 hover:bg-gray-100'
      }
      transform hover:scale-[1.02] active:scale-[0.98]
    `}
  >
    {children}
  </Link>
);

const Card = ({ title, icon: Icon, children }) => (
  <div className="p-6 bg-white rounded-xl shadow-2xl border border-gray-100 transition-transform duration-300 hover:scale-[1.01] hover:shadow-blue-200/50">
    <div className="text-blue-600 mb-4">
      <Icon size={32} className="p-1 rounded-lg bg-blue-50" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{children}</p>
  </div>
);


// --- About Page Component ---

const AboutPage = () => {
    const values = [
        { title: "Innovation", icon: Lightbulb, description: "Fostering creative problem-solving and embracing future technologies." },
        { title: "Integrity", icon: CheckCircle, description: "Upholding the highest standards of ethics, honesty, and accountability." },
        { title: "Inclusion", icon: Users, description: "Cultivating a diverse, welcoming, and equitable community for all learners." },
        { title: "Impact", icon: Globe, description: "Driving meaningful, positive change in local and global communities." },
    ];

    const history = [
        { year: 1975, event: "IAMR is founded as a specialized institute for applied technology." },
        { year: 1990, event: "Expanded curriculum to include Liberal Arts and Sciences." },
        { year: 2010, event: "Launched the Global Research Initiative, achieving Top 10 ranking." },
        { year: 2024, event: "Completed the state-of-the-art Innovation Campus expansion." },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            {/* About Hero Header */}
            <header className="py-20 md:py-32 bg-indigo-50 border-b-4 border-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-3">
                        Our Story, Our <span className="text-blue-600">Vision</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        For nearly five decades, IAMR has shaped the leaders who define the modern world. Discover the mission that guides us.
                    </p>
                </div>
            </header>

            <main>
                {/* Mission and Vision Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
                                <Zap size={28} className="mr-2" /> Our Mission
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To provide an unparalleled educational experience focused on applied research and interdisciplinary knowledge. We empower students to critically analyze complex global issues and create innovative solutions that serve humanity.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-indigo-700 mb-4 flex items-center">
                                <GraduationCap size={28} className="mr-2" /> Our Vision
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To be globally recognized as the leading institute for integrating technological advancement with ethical leadership, setting the standard for future-proof education and societal impact.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                            The IAMR <span className="text-blue-600">Core Values</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <Card key={index} title={value.title} icon={value.icon}>
                                    {value.description}
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Leadership Spotlight and History */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
                        {/* Leadership */}
                        <div className="p-6 bg-blue-50 rounded-xl shadow-lg">
                            <h3 className="text-3xl font-bold text-gray-800 mb-6">IAMR Leadership</h3>
                            <div className="flex items-center space-x-6">
                                <img 
                                    src="https://placehold.co/120x120/E0E7FF/1E40AF?text=DEAN" 
                                    alt="Dean Placeholder" 
                                    className="w-28 h-28 object-cover rounded-full shadow-md border-4 border-blue-200"
                                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x120/E0E7FF/1E40AF?text=DEAN"; }}
                                />
                                <div>
                                    <p className="text-xl font-semibold text-gray-900">Dr. Helena Vance</p>
                                    <p className="text-blue-600 font-medium mb-2">President & CEO</p>
                                    <p className="text-sm text-gray-600">
                                        Leading the institute since 2018 with a focus on sustainable technology and global partnerships.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <Button primary={false} linkTo="/contact">Meet Our Board</Button>
                            </div>
                        </div>

                        {/* History Timeline */}
                        <div className="p-6">
                            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Legacy</h3>
                            <ol className="relative border-l border-blue-200 ml-4">                  
                                {history.map((item, index) => (
                                    <li key={index} className="mb-6 ml-6">
                                        <span className="absolute flex items-center justify-center w-3 h-3 bg-blue-600 rounded-full -left-1.5 ring-4 ring-white"></span>
                                        <h4 className="text-lg font-semibold text-gray-900">{item.year}</h4>
                                        <p className="text-sm text-gray-600">{item.event}</p>
                                    </li>
                                ))}       
                            </ol>
                        </div>
                    </div>
                </section>
                
                {/* Final CTA */}
                <section className="py-12 bg-blue-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <p className="text-2xl font-semibold mb-4">Interested in becoming part of the IAMR story?</p>
                        <Button primary={false} linkTo="/admissions" className="bg-white text-blue-600 hover:bg-gray-100">
                            View Admissions Process <ArrowRight size={20} className="inline ml-2" />
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutPage;