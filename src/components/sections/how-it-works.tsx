import React from 'react';

const stepsData = [
  {
    number: '01',
    description: 'Call us or request a free quote online and tell us what you need removed, cleaned, or remodeled.',
  },
  {
    number: '02',
    description: 'Our insured team shows up on time with the right equipment, ready to handle the job quickly and safely.',
  },
  {
    number: '03',
    description: 'We haul everything away, recycle or donate when possible, and leave your space clean, clear, and ready to use.',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-background py-[120px]">
      <div className="container mx-auto flex flex-col items-center px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#b89c6a]" />
            <p className="font-body text-sm font-medium uppercase tracking-[1.4px] text-[#b89c6a]">
              How it works
            </p>
          </div>
          <h2 className="max-w-[580px] font-heading text-[40px] font-semibold leading-tight text-foreground">
            We simplify clean up & contracting with a clear process
          </h2>
        </div>

        <div className="mt-20 flex w-full max-w-6xl flex-col items-center gap-y-10 md:flex-row md:items-start md:gap-x-0">
          {stepsData.flatMap((step, index) => {
            const stepElement = (
              <div key={step.number} className="flex max-w-[320px] flex-col items-center gap-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <h6 className="font-body text-xl font-semibold text-primary-foreground">
                    {step.number}
                  </h6>
                </div>
                <p className="font-body text-lg leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );

            if (index < stepsData.length - 1) {
              const lineElement = (
                <div key={`line-${index}`} className="hidden md:mt-8 md:block md:h-px md:flex-1 md:bg-border" />
              );
              return [stepElement, lineElement];
            }
            return [stepElement];
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;