import React from 'react';
import Image from 'next/image';
import { Star, ArrowRight, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <header className="bg-hero-background text-hero-foreground">
      <div className="container mx-auto px-6 py-16 sm:py-20 lg:py-[120px]">
        <div className="grid lg:grid-cols-2 items-center gap-8 sm:gap-12">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-y-6 text-left items-start">
            {/* Star Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 text-white" fill="currentColor" />
                <Star className="h-5 w-5 text-white" fill="currentColor" />
                <Star className="h-5 w-5 text-white" fill="currentColor" />
                <Star className="h-5 w-5 text-white" fill="currentColor" />
                <Star className="h-5 w-5 text-white" fill="currentColor" />
              </div>
              <p className="font-body text-base text-white">5.0 (245 Reviews)</p>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-bold text-[60px] leading-tight tracking-tight text-white">
              Hola Contracting Inc.,<br />Junk it Now!
            </h1>

            {/* Subtext */}
            <p className="font-body text-lg text-accent max-w-lg">
              At Hola Contracting Inc., we make junk removal and cleanup stress-free.
            </p>

            {/* CTA Buttons */}
            <div className="mt-4 sm:mt-6 flex flex-row flex-wrap items-center gap-3 sm:gap-5">
              <a 
                href="tel:+17805048160" 
                className="bg-accent text-primary font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-full flex items-center gap-2 hover:brightness-95 transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                Call us today
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="mailto:holacontractors@gmail.com" 
                className="text-white font-medium flex items-center gap-2 hover:text-accent transition-colors text-sm sm:text-base"
              >
                <Mail className="h-5 w-5" />
                Email us
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative mt-8 flex justify-center lg:justify-end items-center">
            <Image
              src="https://framerusercontent.com/images/1c7sPQWpfLoWeyil8jWcUGnRXZE.png"
              alt="Professional contractor smiling"
              width={512}
              height={600}
              className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[512px] h-auto rounded-[30px] object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-hero-foreground/10 backdrop-blur-[8px] rounded-[20px] p-4 sm:p-6 border border-white/20 w-[220px] sm:w-[260px]">
              <div className="flex justify-center -space-x-3 mb-4 sm:mb-6">
                <Image src="https://framerusercontent.com/images/9gWTUVQzk3BjdSg3XFzhqCbB8A.png" alt="Business partner avatar 1" width={44} height={44} className="rounded-full border-2 border-hero-foreground object-cover" />
                <Image src="https://framerusercontent.com/images/qx15mJaHFvyUJc3aEnwRO0TTmv4.jpg" alt="Business partner avatar 2" width={44} height={44} className="rounded-full border-2 border-hero-foreground object-cover" />
                <Image src="https://framerusercontent.com/images/6xeIYwix5hvtWiai9YbMil6X5IU.png" alt="Business partner avatar 3" width={44} height={44} className="rounded-full border-2 border-hero-foreground object-cover" />
                <Image src="https://framerusercontent.com/images/KZuLrzoH8eSGObQOOSora4kbDjI.webp" alt="Business partner avatar 4" width={44} height={44} className="rounded-full border-2 border-hero-foreground object-cover" />
              </div>
              <div className="text-center text-hero-foreground">
                <h2 className="font-heading text-4xl sm:text-[50px] font-bold leading-none">150+</h2>
                <p className="font-body text-sm sm:text-base">Business partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;