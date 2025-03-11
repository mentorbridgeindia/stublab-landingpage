import React from 'react';
import './VideoSection.scss';

interface VideoSection {
    demoLink: string;
}

const VideoSection: React.FC<VideoSection> = ({ demoLink }) => {
    return (
        <div className="h-screen flex items-center bg-gray-100 p-8 pt-40">
            <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="flex flex-col justify-center text-center md:text-right">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 mt-4">Have a Glimpse of the Workflow</h2>
                    <p className="text-base md:text-lg text-white mb-4">
                        See how StubLab streamlines API development with flexible stubbing and instant mock data generation.
                    </p>
                </div>
                <div style={{ position: 'relative', boxSizing: 'content-box', maxHeight: '80vh', width: '100%', aspectRatio: '2.090308370044053', padding: '40px 0' }}>
                    <iframe 
                        src="https://app.supademo.com/embed/cm7k4wzk4012e360ip79gzyd2?embed_v=2" 
                        loading="lazy" 
                        title="Product demo for StubLab" 
                        allow="clipboard-write" 
                        frameBorder="0" 
                        allowFullScreen 
                        style={{ position: 'relative', top: 0, left: 0, width: '90%', height: '90%' }}
                    ></iframe>
                </div>

            </section>
        </div>
    );
};

export default VideoSection;
