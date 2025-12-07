
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
    // Animation variants for container
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    // Animation variants for items
    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" className="section bg-transparent">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text"
                >
                    Featured Projects
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {portfolioData.projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={item}
                            className="glass-card p-6 flex flex-col h-full relative overflow-hidden group"
                            style={{ borderTop: `4px solid ${project.color}` }}
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>

                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 rounded-lg bg-white/10 text-2xl" style={{ color: project.color }}>
                                    <project.icon />
                                </div>
                                <div className="flex gap-3">
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors text-xl"
                                        title="View Code"
                                    >
                                        <FaGithub />
                                    </a>
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-blue-500 transition-colors text-xl"
                                            title="View Live Demo"
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-semibold px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
