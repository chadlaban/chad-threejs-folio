import projects from "../assets/data/projects.json";
import ExpandableString from "../components/ui/ExpandableString";
import { SlideTransition } from "../components/ux/SlideTransition";

export const Projects = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="font-mt text-4xl font-bold text-center text-customGray mb-6">
        WORK & PERSONAL PROJECTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <SlideTransition key={index} index={index}>
            <div
              key={index}
              className="bg-customWhite h-full shadow-lg rounded-lg p-6 border border-gray-200"
            >
              <h2 className="font-mt text-xl font-semibold mb-2">
                {project.project_title}
              </h2>
              <p className="font-js text-lg font-medium text-customGray mb-4">
                <a
                  href={project.association_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-customGray hover:text-blue-500 "
                >
                  {project.association}
                </a>
              </p>
              <p className="font-js text-lg font-medium text-customGray mb-4">
                <ExpandableString text={project.description} limit={80} />
              </p>
              <div>
                <h3 className="font-mt font-semibold mb-2">Tech Stack:</h3>
                <ul className="list-disc pl-6 font-js text-lg font-medium text-customGray">
                  {project.tech_stack.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-mt font-semibold mb-2">Tools:</h3>
                <ul className="list-disc pl-6 font-js text-lg font-medium text-customGray">
                  {project.tools.map((tool, idx) => (
                    <li key={idx}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SlideTransition>
        ))}
      </div>
    </div>
  );
};
