
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                        I'm currently open to new opportunities and freelance projects.
                        Whether you have a question or just want to say hi, feel free to reach out!
                    </p>

                    <a
                        href={`mailto:${portfolioData.email}`}
                        className="btn btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 mb-12 shadow-lg shadow-blue-500/30"
                    >
                        Say Hello
                    </a>

                    <div className="flex justify-center gap-8">
                        {portfolioData.socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-gray-500 hover:text-blue-500 transition-colors transform hover:scale-110"
                            >
                                <link.icon />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
