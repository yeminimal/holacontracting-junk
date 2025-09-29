import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <section id="about-us" className="bg-background py-20 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/j7X0kt2oOjqwT9rcsgk0uNQNqw.png"
              alt="A team of three construction workers engaged in a demolition project inside a house."
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 90vw, 45vw"
            />
          </div>

          <div className="flex flex-col gap-5 items-start">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#b89c6a] rounded-full" />
              <p className="font-body text-sm font-semibold uppercase tracking-wider text-[#b89c6a]">
                About us
              </p>
            </div>
            
            <h2 className="font-heading text-4xl font-semibold text-text-dark !leading-tight max-w-lg">
              We are committed to delivering straightforward solutions
            </h2>
            
            <p className="max-w-lg">
              We recycle, donate, and responsibly dispose of waste whenever possible, helping to create a cleaner environment while providing top-tier service.
            </p>
            
            <a
              href="mailto:holacontractors@gmail.com"
              className="group mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-button-primary text-button-primary-foreground font-body font-semibold px-8 py-4 text-base transition-colors hover:bg-amber-500"
            >
              Email us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;