import { motion, spring } from "motion/react";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
    return (
        <section
            className="h-screen bg-gradient-to-b from-violet-900 to-black flex flex-col-reverse items-center justify-between px-10 
        xl:flex-row lg:px-24 relative overflow-hidden"
        >
            {/* info */}
            <div className="z-40 xl:mb-0 mb-[10%] ">
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: spring,
                        stiffness: 40,
                        damping: 25,
                        delay: 1.3,
                        duration: 1.5,
                    }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 "
                >
                    Building Fast <br />
                    Reliable Results
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: spring,
                        stiffness: 40,
                        damping: 25,
                        delay: 1.8,
                        duration: 1.5,
                    }}
                    className="text-xl lg:text-2xl max-w-2xl"
                >
                    I deliver robust, production-ready websites and web apps
                    with speed and precision. Every project is backed by clean
                    code, clear communication, and a commitment to getting it
                    done, on time, every time.
                </motion.p>
            </div>

            {/* 3d model */}
            <Spline
                scene="https://prod.spline.design/B8RULiF7iu0HiZXv/scene.splinecode"
                className="absolute xl:right-[-28%] xl:top-0 right-0 top-[-20%]"
            />
        </section>
    );
};

export default HeroSection;
