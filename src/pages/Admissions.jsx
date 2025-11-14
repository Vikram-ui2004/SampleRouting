import React from 'react';
import { Link } from 'react-router-dom';
// Icons from lucide-react
import { Calendar, FileText, DollarSign, ArrowRight, BookOpen, Clock, CheckCircle, Upload } from 'lucide-react';

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

// Component for a Step in the Application Process
const StepCard = ({ number, title, description, icon: Icon }) => (
    <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-500 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-start">
        <div className="flex-shrink-0 text-blue-600">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center font-extrabold text-xl border-2 border-blue-200">
                {number}
            </div>
        </div>
        <div className="flex-grow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);


// --- Admissions Page Component ---

const AdmissionsPage = () => {
    const steps = [
        { number: 1, title: "Review Program Requirements", icon: BookOpen, description: "Ensure you meet the prerequisite GPA, test scores, and major-specific requirements for your desired program." },
        { number: 2, title: "Prepare Application Materials", icon: FileText, description: "Gather transcripts, letters of recommendation, personal essays, and standardized test results." },
        { number: 3, title: "Submit Online Application", icon: Upload, description: "Fill out the official IAMR application form and pay the application fee before the deadline." },
        { number: 4, title: "Await Decision & Financial Aid", icon: DollarSign, description: "Your application will be reviewed. We will notify you of the decision and any offered financial aid package." },
    ];

    const deadlines = [
        { name: "Early Action Deadline", date: "November 15, 2025", status: "Upcoming", details: "Non-binding early submission for priority review." },
        { name: "Regular Decision Deadline", date: "January 5, 2026", status: "Open", details: "Standard application submission deadline." },
        { name: "Financial Aid (FAFSA/CSS)", date: "February 1, 2026", status: "Open", details: "Deadline for all financial aid documentation." },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            {/* 1. Admissions Hero Header */}
            <header className="py-20 md:py-32 bg-indigo-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-3">
                        Join the Next <span className="text-yellow-400">Generation</span>
                    </h1>
                    <p className="text-xl opacity-90 max-w-4xl mx-auto">
                        Your journey at the Institute of Applied Modern Research begins here. Explore our process and start your application today.
                    </p>
                    <div className="mt-8">
                        <Button primary={false} linkTo="https://apply.iamr.edu" className="bg-green-400 text-gray-900 hover:bg-green-300">
                            Start Your Application <ArrowRight size={20} className="inline ml-2" />
                        </Button>
                    </div>
                </div>
            </header>

            <main>
                {/* 2. Key Deadlines Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
                            <Clock size={36} className="mr-3 text-blue-600" /> Important Deadlines
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {deadlines.map((item, index) => (
                                <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-lg border-t-4 border-red-500/80 transition-shadow hover:shadow-xl">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${item.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                                            {item.status}
                                        </span>
                                    </div>
                                    <p className="text-3xl font-extrabold text-red-600 mb-3">{item.date}</p>
                                    <p className="text-sm text-gray-600">{item.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* 3. Application Process Steps */}
                <section className="py-20 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                            The 4-Step Application Process
                        </h2>
                        <div className="space-y-8">
                            {steps.map((step) => (
                                <StepCard 
                                    key={step.number}
                                    number={step.number}
                                    title={step.title}
                                    icon={step.icon}
                                    description={step.description}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* 4. Contact/Financial Aid CTA */}
                <section className="py-16 bg-blue-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">Questions about Financial Aid or Requirements?</h3>
                        <p className="text-xl mb-8 opacity-90">
                            Our admissions team is here to guide you through scholarships, grants, and loans.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Button primary={false} linkTo="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                                Contact Admissions Office
                            </Button>
                            <Button primary={false} linkTo="/academics" className="bg-transparent border border-white text-white hover:bg-white/10">
                                Explore Programs First
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdmissionsPage;
