import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function FloatingPathsInternal({ position }: { position: number }) {
    const [paths, setPaths] = useState<Array<{
        id: number;
        d: string;
        color: string;
        width: number;
        duration: number;
    }>>([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setPaths(Array.from({ length: 36 }, (_, i) => ({
                id: i,
                d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
                    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
                    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
                    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
                color: `rgba(15,23,42,${0.1 + i * 0.03})`,
                width: 0.5 + i * 0.03,
                duration: 20 + Math.random() * 10,
            })));
        }, 0);
        return () => clearTimeout(timeoutId);
    }, [position]);

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-neon-red/20 dark:text-neon-red/20"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: path.duration,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

const FloatingPaths = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <FloatingPathsInternal position={1} />
            <FloatingPathsInternal position={-1} />
        </div>
    );
};

export default FloatingPaths;
