import { Button } from '@/components/ui/moving-border';
import React from 'react';


const GradientBackgroundSection = () => {
    return (
        <div
            className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center"
            style={{
                backgroundImage: "url('https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-l from-black via-black/50 to-transparent"></div>

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col justify-center items-end p-6 md:p-12 text-white">
                <h1 className="text-xl md:text-3xl font-bold">
                    Plans That Fit Your Needs, Pricing You Can Trust
                </h1>
                <p className="mt-4 max-w-lg text-lg md:text-xl text-gray-700 dark:text-gray-300">
                    Choose from flexible, customized packages crafted to deliver maximum value—no hidden fees, no surprises.
                </p>

            </div>
        </div>
    );
};

export default GradientBackgroundSection;
