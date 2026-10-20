"use client";
import { useEffect, useState, useRef } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import logo from "../assets/images/logo-dark.png";

const MIN_DURATION = 1800;

function waitForPage() {
  const loaded =
    document.readyState === "complete"
      ? Promise.resolve()
      : new Promise<void>((resolve) =>
          window.addEventListener("load", () => resolve(), { once: true })
        );
    const fonts = document.fonts?.ready ?? Promise.resolve();
    return Promise.all([loaded, fonts]);
}

interface PreloaderProps {
onReveal?: () => void;
  onDone?: () => void;
}

function Preloader({ onDone, onReveal }: PreloaderProps) {
    const revealRef = useRef(onReveal);
    const [visible, setVisible] = useState(true);

    revealRef.current = onReveal;
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.round(v));
    const barWidth = useTransform(count, (v) => `${v}%`);

    useEffect(() => {
        document.body.style.overflow = visible ? "hidden" : "";
        if (visible) window.scrollTo(0, 0);
        return () => {
            document.body.style.overflow = "";
        };
    }, [visible]);

    useEffect(() => {
        let cancelled = false;

        const crawl = animate(count, 90, {
            duration: MIN_DURATION / 1000,
            ease: "easeOut",
        });
        const minTime = new Promise((r) => setTimeout(r, MIN_DURATION));


        Promise.all([waitForPage(), minTime]).then(() => {
        if (cancelled) return;
        crawl.stop();
            animate(count, 100, {
                duration: 0.5,
                ease: "easeInOut",
                onComplete: () => {
                    setTimeout(() => {
                    if (!cancelled) {
                        revealRef.current?.();
                        setVisible(false);
                    }
                    }, 250);
                },
            });
        });

        return () => {
            cancelled = true;
            crawl.stop();
        };
    }, [count]);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          key="preloader"
          role="status"
          aria-label="Loading"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white font-poppins"
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <motion.div
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src={logo} alt="" className="h-14 w-auto" />

            <div className="relative h-[2px] w-40 rounded-full bg-neutral-200 sm:w-56">
              <motion.div
                style={{ width: barWidth }}
                className="relative h-full rounded-full bg-[#37BC7D]"
              >

                <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#37BC7D] shadow-[0_0_8px_2px_#37BC7D,0_0_20px_6px_rgba(55,188,125,0.5)]" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-6 right-6 flex items-baseline leading-none tabular-nums text-neutral-900 md:bottom-10 md:right-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span className="text-7xl font-light md:text-9xl">
              {rounded}
            </motion.span>
            <span className="text-2xl text-[#37BC7D] md:text-4xl">%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;