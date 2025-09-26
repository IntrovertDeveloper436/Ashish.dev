"use client";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
    return (
        <div className="relative min-h-screen text-white overflow-hidden">
            {/* Global grid background */}
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 -z-50"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Navbar */}
            <Navbar />

            {/* Hero section */}
            <section className="relative flex flex-col items-start justify-center min-h-screen px-12">
                <p className="text-lg z-10">Hey, 👋 I'm a Full Stack Developer</p>

                <div className="relative w-full flex flex-col items-center justify-center my-8">
                    <h1
                        className="w-full text-lime-400 font-extrabold leading-tight z-10 text-center"
                        style={{
                            fontSize: "clamp(2.5rem, 14vw, 12rem)",
                            letterSpacing: "-0.04em",
                            whiteSpace: "nowrap",
                        }}
                    >
                        ASHISH KUMAR
                    </h1>

                    {/* Center image */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center w-full">
                        <div className="relative flex items-center justify-center w-[350px] h-[420px] md:w-[480px] md:h-[540px]">
                            <div className="absolute inset-0 rounded-2xl w-full h-full bg-lime-400 opacity-30 blur-3xl z-10" />
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-20">
                                <Image
                                    src="/ashish.png"
                                    alt="Ashish Kumar"
                                    fill
                                    style={{ objectFit: "contain" }}
                                    className="rounded-2xl"
                                    priority
                                />
                                <div className="absolute bottom-4 left-4 bg-lime-400 text-black px-4 py-2 rounded-full font-bold text-sm md:text-base shadow-lg z-30">
                                    Connect
                                </div>
                                <a
                                    href="/linktree"
                                    className="absolute bottom-4 right-4 text-lime-400 font-mono bg-black/60 px-3 py-1 rounded-md text-xs md:text-sm shadow-lg z-30"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    / linktree
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-end z-10">
                    <div className="max-w-xl text-sm leading-relaxed text-right pr-8 md:pr-16 lg:pr-32">
                        <p>
                            I craft fast, scalable, and user-friendly web applications with modern
                            JavaScript frameworks — combining React on the frontend with robust
                            server-side solutions using Node.js.
                        </p>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute flex items-center gap-3 right-12 bottom-[180px] md:bottom-[220px] z-10">
                    <div className="relative h-24 w-2 flex-shrink-0" style={{ height: "calc(1.5em + 4rem)" }}>
                        <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-lime-400 rounded-full"></div>
                        <div className="absolute left-1/2 -translate-x-1/2 w-1 h-6 bg-white rounded-full animate-scroll-segment"></div>
                    </div>
                    <span className="rotate-90 text-gray-400 text-base md:text-lg select-none">
                        SCROLL
                    </span>
                </div>

                <style jsx global>{`
                    @keyframes scroll-segment {
                        0% { top: 0; }
                        100% { top: calc(100% - 1.5rem); }
                    }
                    .animate-scroll-segment {
                        animation: scroll-segment 1.5s linear infinite alternate;
                    }
                `}</style>
            </section>
        </div>
    );
}
