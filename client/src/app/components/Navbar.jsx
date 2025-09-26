"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full sticky top-0 z-50 px-6 py-4 flex items-center justify-between bg-transparent">
            {/* Left Logo/Name */}
            <div className="flex-shrink-0 pl-2">
                <h1 className="text-lg font-bold text-white">Ashish Kumar</h1>
            </div>

            {/* Center Links */}
            <div className="flex-1 flex justify-center">
                <div className="flex gap-8 items-center px-6 py-1 rounded-full bg-white/10 border border-white/30 shadow-lg">
                    <Link
                        href="/"
                        className="text-white font-medium transition-colors duration-200 px-3 py-1 rounded-full hover:text-lime-400 hover:bg-white/20"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="text-white font-medium transition-colors duration-200 px-3 py-1 rounded-full hover:text-lime-400 hover:bg-white/20"
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        className="text-white font-medium transition-colors duration-200 px-3 py-1 rounded-full hover:text-lime-400 hover:bg-white/20"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/blogs"
                        className="text-white font-medium transition-colors duration-200 px-3 py-1 rounded-full hover:text-lime-400 hover:bg-white/20"
                    >
                        Blogs
                    </Link>

                    {/* Connect Button with subtle blinking dot */}
                    <div className="relative flex items-center">
                        <Link
                            href="/login"
                            className="bg-lime-400 text-black font-semibold rounded-full px-5 py-1 shadow-md transition-colors duration-200 relative z-10"
                        >
                            Login
                        </Link>
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-lime-400 rounded-full shadow-[0_0_8px_2px_rgba(163,230,53,0.8)] animate-slow-blink z-0"></span>
                    </div>
                </div>
            </div>

            <div className="w-32" /> {/* Spacer for symmetry */}

            {/* Global CSS for slow blinking dot */}
            <style jsx global>{`
                @keyframes slow-blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; } /* subtle fade for slow blink */
                }
                .animate-slow-blink {
                    animation: slow-blink 2s infinite;
                }
            `}</style>
        </nav>
    );
}
