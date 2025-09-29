import React from 'react';

const statsData = [
  { id: 1, value: "1k+", label: "Contracts" },
  { id: 2, value: "900+", label: "Successful Projects" },
  { id: 3, value: "479", label: "Locations" },
  { id: 4, value: "245", label: "Satisfied Clients" },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <h2 className="font-heading text-[2.5rem] leading-[1.2] font-semibold text-text-dark">
      {value}
    </h2>
    <p className="font-body text-lg text-primary">
      {label}
    </p>
  </div>
);

const StatsSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 w-full mt-[70px]">
      {statsData.map((stat, index) => (
        <React.Fragment key={stat.id}>
          <StatItem value={stat.value} label={stat.label} />
          {index < statsData.length - 1 && (
            <div className="hidden md:block w-1.5 h-1.5 bg-primary rounded-full" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StatsSection;