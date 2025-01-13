import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import experience from "../assets/data/employment.json";

export const Employment = () => {
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
      className="container mx-auto h-screen snap-y snap-proximity text-customWhite"
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
            Employment Timeline
          </p>
          <p className="font-nts text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            ᜁᜋ᜔ᜉ᜔ᜎᜓᜌ᜔ᜋᜒᜈ᜔ᜆ᜔ ᜆᜒᜋᜒᜎᜒᜈᜒ
          </p>
        </article>
      </motion.div>
      {/* employment details */}
      {experience.map((job) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex h-screen justify-center items-center snap-start text-customWhite">
            <motion.div
              className="w-1/3 p-4 flex flex-col text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h3 className="font-mt font-semibold text-xl ">
                {job.job_title}
              </motion.h3>
              <motion.a
                href={job.company_link}
                target="_blank"
                className="text-sm hover:underline mt-2"
              >
                {job.company}
              </motion.a>
              <motion.p className="text-sm mt-2 text-center">
                {job.employment_duration}
              </motion.p>
            </motion.div>
            <motion.div
              className="w-2/3 p-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.p className="text-basic text-customWhite leading-relaxed sm:text-md md:text-lg lg:text-xl">
                {job.responsibilities}
              </motion.p>
              {/* stack */}
              <motion.div>
                {Array.isArray(job.stack) && (
                  <div className="mt-4 grid grid-cols-3 gap-2 items-center justify-center">
                    {job.stack.map((tech) => (
                      <motion.img
                        key={tech.id}
                        src={tech.src_path}
                        alt={tech.tech}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
