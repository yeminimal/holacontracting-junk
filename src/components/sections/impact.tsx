import Image from "next/image";

const services = [
  "Demolition & Junk Removal",
  "Pallet Recycling & Resale",
  "Post-Construction Cleaning",
];

const ImpactSection = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#b89c6a]" />
              <p className="font-medium text-[#b89c6a] tracking-wider uppercase text-base">
                Impact
              </p>
            </div>
            
            <h2 className="font-heading text-[40px] font-semibold leading-[1.2] text-foreground">
              Delivering dependable contracting services with a focus on efficiency and sustainability.
            </h2>
            
            <div className="flex flex-col gap-5">
              {services.map((service) => (
                <div key={service} className="border-b-2 border-[#A2896A] pb-5">
                  <p className="text-2xl font-medium text-foreground">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full aspect-square relative">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4966c86b-92db-494f-a36d-2146fc7ba6de-holacontracting-junk-ca/assets/images/NwZdg5dZk5OdgIl78OvN6UUGvtk-7.jpg"
              alt="Workers loading junk onto a truck"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;