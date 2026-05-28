import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog PR Analyzer — Auto-generate changelogs from pull requests",
  description: "Analyzes merged PRs and generates user-facing changelogs with proper categorization. Built for product managers and engineering leads."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="009903bc-f691-44f6-b455-2c7efdc0a03e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
