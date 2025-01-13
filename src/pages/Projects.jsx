import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import projects from "../assets/data/projects.json";
import ExpandableString from "../components/ui/ExpandableString";

export const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });

  const scaleXStyle = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={ref}
      style={{ overflow: "overlay" }}
      className="container mx-auto h-screen snap-y text-customGray"
    >
      <motion.div
        className="fixed inset-0 top-0 h-2 bg-customGray z-0"
        style={{ scaleX: scaleXStyle }}
      />
      {/* title */}
      <motion.div
        className="snap-start h-screen flex flex-col justify-center items-center p-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <article className="text-center">
          <p className="font-js text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Projects
          </p>
          <p className="font-nts text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            ᜉ᜔ᜇᜓᜑ᜔ᜁᜃ᜔ᜆ᜔ᜐ᜔
          </p>
        </article>
      </motion.div>
      {/* works and projects */}
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-customWhite snap-start h-full shadow-lg rounded-lg p-6 m-6 border border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.section
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.article>
                <h2 className="font-mt text-xl font-semibold mb-2">
                  {project.project_title}
                </h2>
                <div className="font-js text-lg font-medium text-customGray mb-4">
                  <a
                    href={project.association_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-customGray hover:text-blue-500 "
                  >
                    {project.association}
                  </a>
                </div>
                <motion.div className="font-mt text-md text-customGray mb-4">
                  <ExpandableString text={project.description} limit={80} />
                </motion.div>
              </motion.article>

              {/* stack */}
              {Array.isArray(project.stack) && (
                <div className="mt-4 grid grid-cols-3 gap-2 items-center justify-center">
                  {project.stack.map((tech) => (
                    <motion.img
                      key={tech.id}
                      src={tech.src_path}
                      alt={tech.tech}
                    />
                  ))}
                </div>
              )}
            </motion.section>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
