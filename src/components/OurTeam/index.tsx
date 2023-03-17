import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Team = () => {
  const headingVariants = {
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    hidden: { x: 0, y: 80, scale: 1, opacity: 0 },
  };
  const square1Variants = {
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 1, delay: 0.2 },
    },
    hidden: { x: 0, y: 100, scale: 1, opacity: 0 },
  };
  const square2Variants = {
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 1, delay: 0.4 },
    },
    hidden: { x: 0, y: 100, scale: 1, opacity: 0 },
  };

  const square3Variants = {
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 1, delay: 0.6 },
    },
    hidden: { x: 0, y: 100, scale: 1, opacity: 0 },
  };
  function Heading() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.h2
        className="mb-5 pt-12 uppercase text-[color:var(--main-text-color)]  text-2xl text-center md:text-3xl"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={headingVariants}
      >
        Our Team
      </motion.h2>
    );
  }

  function Square1() {
    const controls = useAnimation();
    const [refSquare1, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        className="bg-[color:var(--body-color-main)] flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3"
        ref={refSquare1}
        initial="hidden"
        animate={controls}
        variants={square1Variants}
      >
        {/* <div className="flex justify-center">
              <img src="src/tanveer.webp" alt="Chrome Image" />
            </div> */}
        <h5 className="text-white  pt-6 text-xl font-bold">Bishwaraj Paul</h5>
        <p className="text-gray-400"> SDE at Brillio</p>
        {/* Dots */}
        <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
          <div className="w-full flex justify-around">
            <a href="https://www.facebook.com/bishwaraj.paul">
              <img
                src="/facebook.svg"
                alt=""
                className="w-[24px] hover:cursor-pointer hover:scale-110"
              />
            </a>
            <a href="https://www.linkedin.com/in/bishwarajpaul/">
              <img
                src="/linkedin.svg"
                alt=""
                className="w-[32px] hover:cursor-pointer hover:scale-110"
              />
            </a>
            <a href="https://github.com/Verathagnus">
              <img
                src="/github.svg"
                alt=""
                className="w-[24px] hover:cursor-pointer hover:scale-110"
              />
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
  function Square2() {
    const controls = useAnimation();
    const [refSquare1, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        className=" bg-bodyColorMain flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3"
        ref={refSquare1}
        initial="hidden"
        animate={controls}
        variants={square2Variants}
      >
        {/* <div className="flex justify-center">
            <img src="/tanveer.webp" alt="Chrome Image" />
          </div> */}
        <h5 className="text-white pt-6 text-xl font-bold">Chinmoy Talukdar</h5>
        <p className="text-gray-400"> SDE at is Sapient</p>
        {/* Dots */}
        <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
          <div className="w-full flex justify-around">
            <a href="https://www.facebook.com/chinmoytalukdar.chinmoy">
              <img
                src="/facebook.svg"
                alt=""
                className="w-[24px] hover:cursor-pointer hover:scale-110"
              />
            </a>
            <a href="https://www.linkedin.com/in/chinmoy-talukdar-sde/">
              <img
                src="/linkedin.svg"
                alt=""
                className="w-[32px] hover:cursor-pointer hover:scale-110"
              />
            </a>
            <a href="https://github.com/Chinmoy222">
              <img
                src="/github.svg"
                alt=""
                className="w-[24px] hover:cursor-pointer hover:scale-110"
              />
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
  function Square3() {
    const controls = useAnimation();
    const [refSquare1, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        className="bg-bodyColorMain hover:cursor-pointer hover:translate-y-11  flex flex-col w-full py-6  space-y-4 text-center rounded-lg md:w-1/3"
        ref={refSquare1}
        initial="hidden"
        animate={controls}
        variants={square3Variants}
      >
        {/* <div className="flex justify-center">
            <img src="/tanveer.webp" alt="Chrome Image" />
          </div> */}
        <h5 className="text-white pt-6 text-xl font-bold">Tanveer Ahmed</h5>
        <p className="text-gray-400"> SDE at Brillio</p>
        {/* Dots */}
        <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
          <div className="w-full flex justify-around">
            <a href="https://www.facebook.com/profile.php?id=100017390656704">
              <img
                src="/facebook.svg"
                alt=""
                className="w-[24px] hover:cursor-pointer hover:scale-110"
              />
            </a>
            <a href="https://www.linkedin.com/in/tanveer-ahmed-589055112/">
              <img
                src="/linkedin.svg"
                alt=""
                className="w-[32px] hover:cursor-pointer hover:scale-110"
              />
            </a>
            <a href="https://github.com/tanveer-98">
              <img
                src="/github.svg"
                alt=""
                className="w-[24px] hover:cursor-pointer hover:scale-110"
              />
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
  return (
    <section id="ourTeam" className="bg-bgcolormain py-16">
      <div className="container mx-auto font-semibold text-center md:text-4xl">
        <Heading />
      </div>
      {/* Boxes Container */}
      <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
        {/* Box 1 */}

        
        <Square2 />
        
      </div>
    </section>
  );
};

export default Team;
