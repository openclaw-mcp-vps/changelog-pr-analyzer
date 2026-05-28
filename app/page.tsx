export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate changelogs from{" "}
          <span className="text-[#58a6ff]">pull request data</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect GitHub or GitLab, fetch merged PRs, and let AI rewrite technical commits into clean, user-facing changelog entries — ready to publish in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $25/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Features strip */}
      <section className="border-t border-[#21262d] bg-[#161b22]">
        <div className="max-w-4xl mx-auto px-6 py-12 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: "⚡", title: "Real-time webhooks", desc: "Auto-triggered on every merged PR via GitHub/GitLab webhooks." },
            { icon: "🤖", title: "AI categorization", desc: "Commits are rewritten into Features, Fixes, and Improvements automatically." },
            { icon: "📋", title: "Edit & publish", desc: "Review, tweak, and publish changelogs from a clean dashboard." }
          ].map((f) => (
            <div key={f.title}>
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$25</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited repositories",
              "GitHub & GitLab integration",
              "AI-powered changelog generation",
              "Webhook automation",
              "Edit & publish dashboard",
              "Public changelog page"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Subscribe now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which Git platforms are supported?",
              a: "GitHub and GitLab are fully supported. Connect via OAuth and we handle the rest, including webhook setup."
            },
            {
              q: "How does the AI categorization work?",
              a: "We analyze PR titles, descriptions, and labels to classify each change as a Feature, Bug Fix, or Improvement, then rewrite it in plain language for end users."
            },
            {
              q: "Can I edit the generated changelog before publishing?",
              a: "Yes. Every generated entry goes into a draft state. You review, edit, reorder, or delete entries before publishing to your public changelog page."
            }
          ].map((item) => (
            <div key={item.q} className="border-b border-[#21262d] pb-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Changelog PR Analyzer. All rights reserved.
      </footer>
    </main>
  );
}
