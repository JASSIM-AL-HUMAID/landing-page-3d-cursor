import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null);

    // hide on small screen
    const isMobile =
        typeof window !== "undefined" &&
        window.matchMedia("(max-width:768px)").matches;

    if (isMobile) return null;

    useEffect(() => {
        const cursor = cursorRef.current;
        const border = cursorBorderRef.current;

        gsap.set([cursor, border], {
            xPercent: -50,
            yPercent: -50,
        });

        const xTo = gsap.quickTo(cursor, "x", {
            duration: 0.2,
            ease: "power3.out",
        });
        const yTo = gsap.quickTo(cursor, "y", {
            duration: 0.2,
            ease: "power3.out",
        });

        const xToBorder = gsap.quickTo(border, "x", {
            duration: 0.5,
            ease: "power.out",
        });
        const yToBorder = gsap.quickTo(border, "y", {
            duration: 0.5,
            ease: "power3.out",
        });

        const handleMouseMove = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
            xToBorder(e.clientX);
            yToBorder(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        document.addEventListener("mousedown", () => {
            gsap.to([cursor, border], {
                scale: 0.6,
                duration: 0.2,
            });
        });
        document.addEventListener("mouseup", () => {
            gsap.to([cursor, border], {
                scale: 1,
                duration: 0.2,
            });
        });
    });

    return (
        <>
            {/* main dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
            />
            <div
                ref={cursorBorderRef}
                className="fixed top-0 left-0 w-[40px] h-[40px] border border-white rounded-full pointer-events-none z-[999] mix-blend-difference opacity-50"
            />
        </>
    );
};

export default CustomCursor;
