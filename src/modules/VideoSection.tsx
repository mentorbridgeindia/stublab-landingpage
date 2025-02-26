import React from 'react';

interface VideoSection {
    videoId: string;
}

const VideoSection: React.FC<VideoSection> = ({ videoId }) => {
    return (
        <div className="h-screen flex items-center bg-gray-100 p-8 pt-40">
            <section className="w-full max-w-7xl grid grid-cols-2 gap-20">
            <div className="flex flex-col justify-center text-right ">
                    <h2 className="text-4xl font-bold text-white mb-2 mt-4">Have a Glimpse of the Workflow</h2>
                    <p className="text-lg text-white mb-4">See how StubLab streamlines API development with flexible stubbing and instant mock data generation.</p>
                </div>
                <div className="flex justify-startmb-4">
                    <iframe width={800} height={500}
                        className="w-[700px] h-[400px] rounded-2xl shadow-lg border-4 border-gray-300"
                        src="https://www.youtube.com/embed/9bxKKA2yYyY?si=O9qaOSewJkZ1-DEy" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
               
            </section>
        </div>
    );
};

export default VideoSection;
