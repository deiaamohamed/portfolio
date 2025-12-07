
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
    return (
        <section id="about" className="section relative">
            <div className="absolute center-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[20%] right-[5%] w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-[20%] left-[5%] w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center gradient-text">About Me</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="glass-card p-8 md:p-12">
                            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                                {portfolioData.longBio}
                            </p>
                            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                                When I'm not coding, I enjoy exploring new tech trends, contributing to open-source projects, and enhancing my skills in game development and AI.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Technical Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {portfolioData.skills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="px-4 py-2 rounded-full glass bg-white/50 text-gray-700 dark:text-gray-200 font-medium text-sm border border-white/20 hover:scale-105 cursor-default transition-transform"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
