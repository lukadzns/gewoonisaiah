import Header from "@/components/Header";
import Work from "@/components/Work";
import { person, categories } from "@/lib/content";

export default function Home() {
  const hasContact = Boolean(person.email);
  const links = [
    { href: "#werk", label: "Werk" },
    { href: "#over", label: "Over" },
    ...(hasContact ? [{ href: "#contact", label: "Contact" }] : []),
  ];
  const socials = [
    person.instagram && { href: person.instagram, label: "Instagram" },
    person.linkedin && { href: person.linkedin, label: "LinkedIn" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <>
      <Header name={person.name} links={links} />
      <main>
        {/* HERO: de naam komt scheef onder een inktlaag vandaan en schuift in register */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="marks" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <svg className="regmark" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="32" cy="32" r="14" />
            <circle cx="32" cy="32" r="22" />
            <path d="M32 2v60M2 32h60" />
          </svg>
          <div className="container">
            <div className="grid">
              <h1 id="hero-title" className="hero__name" aria-label={person.name}>
                <span className="hero__line" data-text={person.first} aria-hidden="true">
                  {person.first}
                </span>
                <span className="hero__line" data-text={person.last} aria-hidden="true">
                  {person.last}
                </span>
              </h1>
              <div className="hero__meta">
                <div className="hero__text">
                  <p className="hero__role">{person.role}</p>
                  <p className="hero__intro">{person.intro}</p>
                </div>
                <div className="hero__actions">
                  <a className="btn" href="#werk">
                    Bekijk mijn werk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WERK */}
        <section id="werk" className="section" aria-labelledby="werk-title">
          <div className="container">
            <div className="grid">
              <h2 id="werk-title" className="section-title">
                Werk
              </h2>
            </div>
            <Work />
          </div>
        </section>

        {/* OVER */}
        <section id="over" className="section section--ink" aria-labelledby="over-title">
          <div className="container">
            <div className="grid">
              <h2 id="over-title" className="about-title">
                Over
              </h2>
              <p className="about-text">{person.about}</p>
              <ul className="disciplines" aria-label="Soorten werk">
                {categories.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT: verschijnt zodra er een e-mailadres is ingevuld */}
        {hasContact && (
          <section id="contact" className="section section--red" aria-labelledby="contact-title">
            <div className="container">
              <div className="grid">
                <h2 id="contact-title" className="contact-title">
                  Contact
                </h2>
                <a className="contact-mail" href={`mailto:${person.email}`}>
                  {person.email}
                </a>
                {socials.length > 0 && (
                  <div className="contact-links">
                    {socials.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                        {s.label}
                        <span className="sr-only"> (opent in een nieuw tabblad)</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="container footer__bar">
          <span>{person.name}</span>
          <span>{person.role}</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}
