
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-light mb-4 text-blue-400">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text tracking-tight">
                        {portfolioData.name}
                    </h1>
                    <h3 className="text-2xl md:text-4xl font-semibold mb-8 text-gray-400">
                        {portfolioData.title}
                    </h3>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 mb-10 leading-relaxed dark:text-gray-300">
                        {portfolioData.bio}
                    </p>

                    <div className="flex justify-center gap-6">
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                        </a>
                        <a href="#contact" className="px-6 py-3 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all font-semibold">
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
