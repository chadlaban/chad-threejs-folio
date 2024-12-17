import { aboutMeParaLines } from "../utils/QualityOfLife";
import { SlideTransition } from "../components/ux/SlideTransition";

export const AboutMe = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="font-mt text-4xl font-bold text-center text-customGray mb-6">
        MY TECH JOURNEY
      </h1>
      <article className="m-2 p-2 rounded-lg font-js text-xl font-semibold text-customWhite leading-relaxed space-y-4">
        {aboutMeParaLines.map((line, index) => (
          <SlideTransition key={index} index={index}>
            {line}
          </SlideTransition>
        ))}
      </article>
    </div>
  );
};
