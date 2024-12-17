import { EmploymentCard } from "../components/ui/EmploymentCard";
import experience from "../assets/data/employment.json";
import { SlideTransition } from "../components/ux/SlideTransition";

export const Employment = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="font-mt text-4xl font-bold text-center text-customWhite mb-6">
        EMPLOYMENT HISTORY
      </h1>
      {experience.map((work) => (
        <SlideTransition key={work.id} index={work.id}>
          <EmploymentCard key={work.id} work={work} />
        </SlideTransition>
      ))}
    </div>
  );
};
