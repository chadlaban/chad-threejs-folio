import { CertificationCard } from "../components/ui/CertificationCard";
import certifications from "../assets/data/certifications.json";
import { SlideTransition } from "../components/ux/SlideTransition";

export const Certifications = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="font-mt text-4xl font-bold text-center text-customGray mb-6">
        CERTIFICATIONS
      </h1>
      {certifications.map((certificate, index) => (
        <SlideTransition key={index} index={index}>
          <CertificationCard certificate={certificate} />
        </SlideTransition>
      ))}
    </div>
  );
};
