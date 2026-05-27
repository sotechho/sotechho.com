import React, { useState, useEffect, useRef } from "react";

const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold },
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, vis };
};

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => {
  const { ref, vis } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const WHAT = [
  {
    icon: "→",
    label: "Open Source Projects",
    desc: "We build tools that solve real problems — in the open, for everyone.",
  },
  {
    icon: "→",
    label: "Collaborative Culture",
    desc: "No gatekeeping. Every skill level is welcome and every voice matters.",
  },
  {
    icon: "→",
    label: "Mentorship & Learning",
    desc: "Experienced members help newcomers grow through code reviews and pair sessions.",
  },
  {
    icon: "→",
    label: "Global Somali Network",
    desc: "Connecting technologists from Mogadishu to Minneapolis through shared purpose.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Explore our repos",
    desc: "Browse our GitHub organization and find a project that interests you.",
  },
  {
    n: "2",
    title: "Introduce yourself",
    desc: "Join our community, say hello, and tell us what you'd like to work on.",
  },
  {
    n: "3",
    title: "Start contributing",
    desc: "Open issues, submit PRs, write docs. Every contribution is valued.",
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [, setMenu] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        background: "#fff",
        color: "#111",
        minHeight: "100vh",
      }}
    >
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        ::selection { background: #111; color: #fff; }
        a { color: inherit; text-decoration: none; }
        .pill { display:inline-flex; align-items:center; gap:6px; padding:6px 14px; border-radius:999px; border:1px solid #e5e5e5; font-size:13px; color:#555; font-weight:500; }
        .btn-dark { display:inline-flex; align-items:center; gap:8px; padding:13px 28px; background:#111; color:#fff; border-radius:999px; font-size:15px; font-weight:600; cursor:pointer; transition:opacity .2s; }
        .btn-dark:hover { opacity:.85; }
        .btn-ghost { display:inline-flex; align-items:center; gap:8px; padding:13px 28px; border:1.5px solid #ddd; border-radius:999px; font-size:15px; font-weight:600; color:#333; cursor:pointer; transition:border-color .2s,color .2s; }
        .btn-ghost:hover { border-color:#111; color:#111; }
        .nav-link { font-size:14px; color:#666; font-weight:500; cursor:pointer; transition:color .2s; background:none; border:none; }
        .nav-link:hover { color:#111; }
        .card { border:1px solid #ebebeb; border-radius:16px; padding:28px 24px; transition:border-color .2s,box-shadow .2s; }
        .card:hover { border-color:#ccc; box-shadow:0 4px 24px rgba(0,0,0,.06); }
        .divider { border:none; border-top:1px solid #f0f0f0; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:none; } }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(255,255,255,0.92)" : "#fff",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid #f0f0f0"
            : "1px solid transparent",
          transition: "all .3s",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 28,
                height: 28,
                background: "#111",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 13,
                fontWeight: 800,
              }}
            >
              S
            </div>
            <span
              style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.3px" }}
            >
              SoTechHo
            </span>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: 32 }}
            className="desktop-nav"
          >
            {["About", "What We Do", "Join Us"].map((l) => (
              <button
                key={l}
                className="nav-link"
                onClick={() => go(l.toLowerCase().replace(/ /g, "-"))}
              >
                {l}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a
              href="https://github.com/sotechho"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: 14,
                color: "#666",
                fontWeight: 500,
                padding: "8px 16px",
                border: "1px solid #e5e5e5",
                borderRadius: 999,
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#111";
                e.currentTarget.style.color = "#111";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e5e5e5";
                e.currentTarget.style.color = "#666";
              }}
            >
              GitHub
            </a>
            <a
              href="https://sotechho.com"
              target="_blank"
              rel="noreferrer"
              className="btn-dark"
              style={{ padding: "8px 20px", fontSize: 14 }}
            >
              Visit Site
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "140px 24px 100px",
          textAlign: "center",
        }}
      >
        <div style={{ animation: "fadeUp .6s ease both" }}>
          <span className="pill">
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
              }}
            />
            Open Source · Open to Everyone
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(44px, 8vw, 88px)",
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: "-3px",
            marginTop: 28,
            marginBottom: 24,
            animation: "fadeUp .65s ease both .1s",
            opacity: 0,
          }}
        >
          Somali Technology
          <br />
          <span style={{ color: "#aaa" }}>Handson.</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(17px, 2vw, 20px)",
            color: "#666",
            maxWidth: 520,
            margin: "0 auto 40px",
            lineHeight: 1.65,
            fontWeight: 400,
            animation: "fadeUp .65s ease both .18s",
            opacity: 0,
          }}
        >
          A community-driven open-source organization for Somali technologists
          worldwide. Build real things, learn together, and leave your mark on
          the global tech landscape.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "fadeUp .65s ease both .26s",
            opacity: 0,
          }}
        >
          <button className="btn-dark" onClick={() => go("join-us")}>
            Join the community
            <span style={{ fontSize: 18 }}>→</span>
          </button>
          <a
            href="https://github.com/sotechho"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "48px",
            marginTop: 72,
            flexWrap: "wrap",
            animation: "fadeUp .65s ease both .34s",
            opacity: 0,
          }}
        >
          {[
            ["100%", "Open Source"],
            ["∞", "Contributors welcome"],
            ["0", "Barriers to entry"],
          ].map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div
                style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-1px" }}
              >
                {v}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#999",
                  marginTop: 4,
                  fontWeight: 500,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ABOUT */}
      <section
        id="about"
        style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 24px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <Reveal>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#999",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              About
            </p>
            <h2
              style={{
                fontSize: "clamp(30px,4vw,44px)",
                fontWeight: 800,
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Built by Somalis.
              <br />
              For the world.
            </h2>
            <p
              style={{
                color: "#666",
                lineHeight: 1.75,
                fontSize: 16,
                marginBottom: 16,
              }}
            >
              SoTechHo is an open-source organization founded to cultivate a
              thriving technology ecosystem rooted in Somali identity and global
              ambition.
            </p>
            <p style={{ color: "#666", lineHeight: 1.75, fontSize: 16 }}>
              We believe great software is built by diverse, passionate
              communities. Whether you're a seasoned engineer or writing your
              first line of code — there's a place for you here.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {[
                [
                  "🔓",
                  "Open Source First",
                  "Everything we build is public and permissively licensed.",
                ],
                [
                  "🤝",
                  "No Gatekeeping",
                  "All skill levels are equally valued and welcomed.",
                ],
                [
                  "🌍",
                  "Global Reach",
                  "Somalis in every timezone, contributing every day.",
                ],
                [
                  "💡",
                  "Purpose Driven",
                  "We build things that matter to our community.",
                ],
              ].map(([ico, t, d]) => (
                <div
                  key={t}
                  style={{
                    padding: "20px",
                    border: "1px solid #ebebeb",
                    borderRadius: 14,
                    background: "#fafafa",
                  }}
                >
                  <div style={{ fontSize: 20, marginBottom: 10 }}>{ico}</div>
                  <div
                    style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}
                  >
                    {t}
                  </div>
                  <div style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>
                    {d}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="divider" />

      {/* WHAT WE DO */}
      <section
        id="what-we-do"
        style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 24px" }}
      >
        <Reveal>
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#999",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            What We Do
          </p>
          <h2
            style={{
              fontSize: "clamp(30px,4vw,44px)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              marginBottom: 60,
            }}
          >
            Where code meets
            <br />
            community.
          </h2>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 16,
          }}
        >
          {WHAT.map((w, i) => (
            <Reveal key={w.label} delay={i * 70}>
              <div className="card" style={{ height: "100%" }}>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 20,
                    color: "#bbb",
                    marginBottom: 16,
                  }}
                >
                  {w.icon}
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    marginBottom: 10,
                    letterSpacing: "-0.3px",
                  }}
                >
                  {w.label}
                </h3>
                <p style={{ fontSize: 14, color: "#888", lineHeight: 1.65 }}>
                  {w.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* JOIN */}
      <section
        id="join-us"
        style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 24px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <Reveal>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#999",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              How to Join
            </p>
            <h2
              style={{
                fontSize: "clamp(30px,4vw,44px)",
                fontWeight: 800,
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              Three steps.
              <br />
              Zero barriers.
            </h2>
            <p
              style={{
                color: "#888",
                lineHeight: 1.75,
                fontSize: 15,
                marginBottom: 36,
              }}
            >
              No application, no waitlist, no gatekeepers. Show up, introduce
              yourself, and start building. It's that simple.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="https://github.com/sotechho"
                target="_blank"
                rel="noreferrer"
                className="btn-dark"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                Start on GitHub
              </a>
              <a
                href="https://sotechho.com"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Visit sotechho.com
              </a>
            </div>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div
                  style={{
                    display: "flex",
                    gap: 20,
                    padding: "28px 0",
                    borderBottom:
                      i < STEPS.length - 1 ? "1px solid #f0f0f0" : "none",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      border: "1px solid #e5e5e5",
                      borderRadius: 999,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#bbb",
                      flexShrink: 0,
                    }}
                  >
                    {s.n}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 16,
                        marginBottom: 6,
                        letterSpacing: "-0.3px",
                      }}
                    >
                      {s.title}
                    </div>
                    <div
                      style={{ fontSize: 14, color: "#888", lineHeight: 1.65 }}
                    >
                      {s.desc}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* CTA */}
      <section
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "96px 24px",
          textAlign: "center",
        }}
      >
        <Reveal>
          <h2
            style={{
              fontSize: "clamp(32px,5vw,60px)",
              fontWeight: 900,
              letterSpacing: "-2px",
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            Everyone is welcome.
            <br />
            <span style={{ color: "#ccc" }}>No exceptions.</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "#888",
              maxWidth: 440,
              margin: "0 auto 36px",
              lineHeight: 1.65,
            }}
          >
            Whether you code, design, write, or just have ideas — the Somali
            tech movement has room for you.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://github.com/sotechho"
              target="_blank"
              rel="noreferrer"
              className="btn-dark"
            >
              Join SoTechHo →
            </a>
            <a
              href="https://sotechho.com"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Learn more
            </a>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #f0f0f0", padding: "32px 24px" }}>
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 24,
                height: 24,
                background: "#111",
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 11,
                fontWeight: 800,
              }}
            >
              S
            </div>
            <span style={{ fontSize: 14, fontWeight: 600 }}>SoTechHo</span>
            <span style={{ fontSize: 13, color: "#bbb" }}>
              · Somali Technology Handson
            </span>
          </div>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a
              href="https://sotechho.com"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: 13,
                color: "#999",
                fontWeight: 500,
                transition: "color .2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
            >
              sotechho.com
            </a>
            <a
              href="https://github.com/sotechho"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: 13,
                color: "#999",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "color .2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
          <p style={{ fontSize: 12, color: "#ccc" }}>
            © {new Date().getFullYear()} SoTechHo. Open Source with ♥
          </p>
        </div>
      </footer>
    </div>
  );
}
