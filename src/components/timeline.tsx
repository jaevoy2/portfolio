"use client";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  MotionValue
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import '../css/index.css'
import { Reveal } from './reveal'

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const TimelineItem = ({
  item,
  index,
  containerRef,
  progress
}: {
  item: TimelineEntry;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  progress: MotionValue<number>;
}) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(Infinity);
  const [active, setActive] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const measure = () => {
      if (!titleRef.current || !containerRef.current) return;
      const t = titleRef.current.getBoundingClientRect();
      const c = containerRef.current.getBoundingClientRect();
      setTop(t.top - c.top + 28);
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [containerRef]);

  useMotionValueEvent(progress, "change", (v) => setActive(v >= top));

  useEffect(() => {
    setActive(progress.get() >= top);
  }, [top, progress]);


  const titleColor = active ? "text-[#37BC7D]" : "text-neutral-500";

  return (
    <Reveal direction={isLeft ? "right" : "left"} delay={index * 0.2}>
      <div
        ref={titleRef}
        className="grid grid-cols-1 md:grid-cols-2 pb-10 md:pb-0 md:pt-5 md:gap-10"
      >
        {/* Content column.
            Mobile: always shown, left-aligned, indented (pl-16) to clear the line at left-8.
            md+: alternates left/right of the centered line. */}
        <div
          className={`block pl-16 pr-4 text-left md:row-start-1 md:px-4 ${
            !isLeft ? "md:col-start-2 md:text-left" : "md:col-start-1 md:text-right"
          }`}
        >
          <h4
            className={`text-lg font-semibold transition-colors duration-300 ${titleColor}`}
          >
            {item.title}
          </h4>
          {item.content}
        </div>
      </div>
    </Reveal>
  );
}


export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Re-measure when the content height changes (e.g. text wrapping on narrow screens)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setHeight(el.getBoundingClientRect().height);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const headOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div
      className="w-full bg-white font-poppins md:px-10 mt-20"
      ref={containerRef}
    >
      <Reveal
        delay={0.1}
      >
        <div className="flex gap-4 max-w-7xl mx-auto pt-20 pb-15 px-4 place-content-center md:px-8 lg:px-10">
          <h2 className="text-2xl md:text-4xl mb-4 text-black max-w-4xl">
            My
          </h2>
          <h2 style={{ color: '#37BC7D' }} className="text-2xl md:text-4xl mb-4 max-w-4xl">
            Experience
          </h2>
        </div>
      </Reveal>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 md:w-full">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            containerRef={ref}
            progress={heightTransform}
          />
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1/2 left-8 md:-translate-x-1/2 top-0 w-[2px] "
        >
          <div
            className="absolute inset-0 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#37BC7D] via-[#37BC7D] to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
          <motion.div
            style={{
              top: heightTransform,
              opacity: headOpacity,
              x: "-50%",
              y: "-50%"
            }}
            className="absolute left-1/2 h-2 w-2 rounded-full bg-[#37BC7D] shadow-[0_0_8px_2px_#37BC7D,0_0_20px_6px_rgba(55,188,125,0.5)]"
          >
            <span className="absolute inset-0 rounded-full bg-[#37BC7D] animate-ping opacity-60" />
          </motion.div>

        </div>
      </div>
    </div>
  );
};