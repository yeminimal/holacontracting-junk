import React from 'react';

const servicesData = [
  {
    number: "01",
    title: "Junk Removal",
    description: "We help with removing furniture, appliances, construction debris, residential junk, and general building cleanouts. We'll take the junk off your hands.",
  },
  {
    number: "02",
    title: "Post-Construction Cleaning",
    description: "Whether it's after renovations or new construction, we make your space spotless and ready to enjoy.",
  },
  {
    number: "03",
    title: "Demolition Services",
    description: "We provide safe, efficient, and hassle-free demolition for both residential and commercial properties.",
  },
  {
    number: "04",
    title: "Remodeling Services",
    description: "Looking to upgrade your basement, kitchen, or home? Hola Contracting Inc. also offers custom remodeling services.",
  },
  {
    number: "05",
    title: "Pallet Removal & Sales",
    description: "Hola Inc. offers pallet removal, recycling, and resale services to businesses across Canada, focusing on eco-friendly practices. Affordable, quality used pallets are also available for purchase.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center gap-6 text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[#b89c6a]" />
            <p className="font-body text-sm font-medium uppercase text-[#b89c6a] tracking-[0.84px]">
              services
            </p>
          </div>
          <h2 className="font-heading text-[50px] font-semibold leading-[1.2] text-foreground max-w-2xl">
            What We Do at Hola Contracting Inc.
          </h2>
        </div>
        
        <div className="flex flex-col">
          {servicesData.map((service, index) => (
            <React.Fragment key={service.number}>
              <div className="grid grid-cols-1 lg:grid-cols-[200px_320px_1fr] items-start lg:items-center gap-x-6 gap-y-4 py-8">
                <p className="font-body text-lg text-muted-foreground">
                  {service.number}
                </p>
                <h3 className="font-heading text-[28px] font-semibold text-foreground leading-tight">
                  {service.title}
                </h3>
                <p className="font-body text-lg text-muted-foreground leading-relaxed lg:col-start-3">
                  {service.description}
                </p>
              </div>
              {index < servicesData.length - 1 && (
                <div className="h-px w-full bg-border" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}