import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { aboutMeParaLines } from "../utils/QualityOfLife";

export const AboutMe = () => {
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
            My Journey So Far
          </p>
          <p className="font-nts text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            ᜀᜅ᜔ ᜀᜃᜒᜅ᜔ ᜃ᜔ᜏᜒᜈ᜔ᜆᜓ ᜐ ᜅᜌᜓᜈ᜔
          </p>
        </article>
      </motion.div>
      {/* paragraphs */}
      {aboutMeParaLines.map((line, index) => (
        <motion.div
          key={index}
          className="snap-start h-screen flex justify-center items-center p-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="font-mt font-medium text-wrap leading-loose text-basic sm:text-lg md:text-xl lg:text-2xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {line}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};
