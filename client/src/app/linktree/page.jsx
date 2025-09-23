"use client";
import Link from "next/link";

const linkData = [
  {
    category: "Coding",
    links: [
      { name: "LeetCode", url: "https://leetcode.com/" },
      { name: "HackerRank", url: "https://www.hackerrank.com/" },
      { name: "Codeforces", url: "https://codeforces.com/" },
      { name: "CodeChef", url: "https://www.codechef.com/" },
      { name: "Codepen", url: "https://codepen.io/" },
      { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/" },
      { name: "Exercism", url: "https://exercism.org/" },
      { name: "Replit", url: "https://replit.com/" },
      { name: "Buy me a Coffee", url: "https://www.buymeacoffee.com/" },
    ],
  },
  {
    category: "Dev Social",
    links: [
      { name: "GitHub", url: "https://github.com/" },
      { name: "GitLab", url: "https://gitlab.com/" },
      { name: "Bitbucket", url: "https://bitbucket.org/" },
      { name: "Stack Overflow", url: "https://stackoverflow.com/" },
      { name: "Dev.to", url: "https://dev.to/" },
      { name: "Medium", url: "https://medium.com/" },
      { name: "Reddit", url: "https://www.reddit.com/" },
      { name: "Quora", url: "https://www.quora.com/" },
    ],
  },
  {
    category: "Design",
    links: [
      { name: "Dribbble", url: "https://dribbble.com/" },
      { name: "Behance", url: "https://www.behance.net/" },
      { name: "Figma", url: "https://www.figma.com/" },
      { name: "Portfolio", url: "#" },
      { name: "Notion", url: "https://www.notion.so/" },
      { name: "Polywork", url: "https://www.polywork.com/" },
      { name: "Gumroad", url: "https://gumroad.com/" },
      { name: "ProductHunt", url: "https://www.producthunt.com/" },
      { name: "Personal Portfolio", url: "#" },
    ],
  },
  {
    category: "Communication",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/" },
      { name: "Twitter (X)", url: "https://twitter.com/" },
      { name: "Discord", url: "https://discord.com/" },
      { name: "Telegram", url: "https://telegram.org/" },
      { name: "Email", url: "mailto:example@email.com" },
    ],
  },
  {
    category: "Media",
    links: [
      { name: "YouTube", url: "https://youtube.com/" },
      { name: "Instagram", url: "https://instagram.com/" },
      { name: "Twitch", url: "https://www.twitch.tv/" },
    ],
  },
];

export default function Linktree() {
  return (
    <div className="relative min-h-screen bg-[#121212] text-white px-6 py-12 overflow-hidden">
      <h1 className="text-center text-4xl font-bold mb-12 text-lime-400">My Links</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {linkData.map((category) => (
          <div key={category.category} className="space-y-4">
            <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 text-gray-300">{category.category}</h2>
            <ul className="space-y-3">
              {category.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 hover:bg-lime-400/30 transition-all duration-300 font-medium text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
