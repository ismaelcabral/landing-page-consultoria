import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils'; // Assuming you have a utils file, if not I'll just use template literals or install clsx/tailwind-merge if needed, but for now standard template literals or local helper. 
// Actually I checked the file list earlier and didn't see lib/utils.ts in `src`. I saw it in `financas-futebol`.
// `consultoria-landing-page` structure showed `src` with components, App.tsx, main.tsx. 
// I will create a simple utility or just use string interpolation.

interface ColorfulButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const ColorfulButton: React.FC<ColorfulButtonProps> = ({ children, className, ...props }) => {
    return (
        <button
            className={cn(
                "group relative inline-flex items-center gap-2 px-8 py-4 bg-rich-black text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 border-2 border-neon-red",
                className
            )}
            {...props}
        >
            {/* Search-light/Gradient effect */}
            < div className="absolute inset-0 -z-10 bg-gradient-to-r from-neon-red/0 via-neon-red/50 to-neon-red/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out opacity-20 blur-lg" />

            {/* Border Gradient */}
            < div className="absolute inset-0 -z-10 rounded-full p-[1px] bg-gradient-to-r from-transparent via-neon-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Background glow */}
            < div className="absolute inset-0 -z-20 bg-neon-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

            <span className="font-bold tracking-wide relative z-10">{children}</span>
            <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-45 group-hover:text-neon-red" />
        </button >
    );
};

export default ColorfulButton;
