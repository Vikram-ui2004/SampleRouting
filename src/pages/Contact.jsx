import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Icons from lucide-react
import { Mail, Phone, MapPin, Send, MessageSquare, Briefcase, GraduationCap } from 'lucide-react';

// --- Utility Components (Required by ContactPage) ---

const Button = ({ children, primary = true, type = 'link', linkTo = '#', onClick = () => {} }) => {
  const commonClasses = `px-6 py-3 font-semibold transition-all duration-300 rounded-full shadow-lg transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2`;
  const primaryClasses = 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl focus:ring-blue-500';
  const secondaryClasses = 'bg-white text-blue-600 border border-blue-600 hover:bg-gray-100 focus:ring-blue-500';

  const classes = primary ? primaryClasses : secondaryClasses;

  if (type === 'submit') {
    return (
      <button 
        type="submit" 
        onClick={onClick}
        className={`${commonClasses} ${classes}`}
      >
        {children}
      </button>
    );
  }
  
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


// --- Contact Page Component ---

const ContactPage = () => {
    // State for the form (for demonstration, not actually submitting anywhere)
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus(null);

        // Simulate an API call
        setTimeout(() => {
            setIsSubmitting(false);
            // Simulate success 
            setSubmissionStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            // Clear success message after a few seconds
            setTimeout(() => setSubmissionStatus(null), 5000); 

            // If we wanted to simulate an error: setSubmissionStatus('error');
        }, 1500);
    };

    const contactInfo = [
        { title: "Admissions Office", icon: GraduationCap, detail: "(555) 123-4567", email: "admissions@iamr.edu", description: "Inquiries about applications, enrollment, and campus tours." },
        { title: "General Inquiries", icon: Phone, detail: "(555) 987-6543", email: "info@iamr.edu", description: "For general questions about the institute and operations." },
        { title: "Career Services", icon: Briefcase, detail: "(555) 555-0000", email: "careers@iamr.edu", description: "For employer relations, job postings, and alumni career support." },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            {/* Contact Hero Header */}
            <header className="py-16 md:py-24 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-3">
                        Get In <span className="text-yellow-300">Touch</span>
                    </h1>
                    <p className="text-xl opacity-90 max-w-3xl mx-auto">
                        We're here to help you every step of the way. Find the right department or send us a direct message.
                    </p>
                </div>
            </header>

            <main>
                {/* Contact Details Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                            Departmental Contacts
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="p-8 bg-gray-50 rounded-xl shadow-lg border-t-4 border-blue-600 transition-shadow duration-300 hover:shadow-xl">
                                    <div className="text-blue-600 mb-4">
                                        <item.icon size={36} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                                    <div className="space-y-2 text-gray-700">
                                        <p className="flex items-center text-sm">
                                            <Phone size={16} className="mr-2 text-blue-500" /> 
                                            <a href={`tel:${item.detail}`} className="hover:underline">{item.detail}</a>
                                        </p>
                                        <p className="flex items-center text-sm">
                                            <Mail size={16} className="mr-2 text-blue-500" /> 
                                            <a href={`mailto:${item.email}`} className="hover:underline">{item.email}</a>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Inquiry Form and Location Section */}
                <section className="py-20 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
                        
                        {/* Contact Form */}
                        <div className="p-8 bg-white rounded-xl shadow-2xl">
                            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                                <MessageSquare size={28} className="mr-2 text-blue-600" /> Send Us a Message
                            </h3>
                            
                            {submissionStatus === 'success' && (
                                <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg flex items-center" role="alert">
                                    <CheckCircle size={20} className="mr-2" />
                                    Your message has been successfully sent! We will respond shortly.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="jane.doe@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        name="subject" 
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="Question about Academics"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        rows="4" 
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="Type your detailed message here..."
                                    ></textarea>
                                </div>
                                <Button type="submit" primary disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : (
                                        <>
                                            Send Message <Send size={20} className="inline ml-2" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                        
                        {/* Location Details */}
                        <div className="p-8 bg-white rounded-xl shadow-2xl">
                            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                                <MapPin size={28} className="mr-2 text-blue-600" /> Visit Our Campus
                            </h3>
                            <div className="space-y-4 text-gray-700">
                                <p className="text-lg font-semibold">IAMR Global Headquarters</p>
                                <p>123 Innovation Drive, Tech City, Global 90210</p>
                                
                                {/* Placeholder Map */}
                                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden border border-gray-300 flex items-center justify-center text-gray-500 font-medium my-6">
                                    [Image of Campus Location Map Placeholder]
                                </div>

                                <p className="text-sm">
                                    Our campus is open for prospective students and visitors. Please use the admissions contact above to schedule an official campus tour.
                                </p>
                                
                                <div className="pt-4">
                                    <Button primary={false} linkTo="/admissions">Schedule a Tour</Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
};

export default ContactPage;