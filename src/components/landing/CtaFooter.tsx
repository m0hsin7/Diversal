import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/site/Brand";
import { company, services } from "@/lib/company";
import { waHref, waClick } from "@/lib/whatsapp";


const navLinks = [
  { to: "/projects" as const, label: "Projects" },
  { to: "/services" as const, label: "Services" },
  { to: "/about" as const, label: "Our Company" },
  { to: "/contact" as const, label: "Contact" },
] as const;

export function CtaFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-scroll-scene
      aria-label="Site footer"
      className="diversal-footer"
    >
      {/* ── Top invitation band ───────────────────────────────────────── */}
      <div className="site-container">
        <p className="eyebrow">Your next address starts here</p>

        <div className="footer-invitation">
          <h2>
            Let's find
            <br />
            your place.
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.85,
                color: "var(--brand-soft)",
                maxWidth: "38ch",
              }}
            >
              Six projects across the Islamabad region. Meet us at either office, or start with a call.
            </p>
            <Button asChild variant="outline" className="site-cta">
              <Link to="/contact">Start a conversation ↗</Link>
            </Button>
          </div>
        </div>

        {/* ── Divider with tagline ──────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginTop: "64px",
            marginBottom: "0",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "color-mix(in oklab, var(--brand-light) 15%, transparent)",
            }}
            aria-hidden="true"
          />
          <span
            style={{
              fontSize: "9px",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "var(--brand-soft)",
              whiteSpace: "nowrap",
            }}
          >
            Diversal · Live Better
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "color-mix(in oklab, var(--brand-light) 15%, transparent)",
            }}
            aria-hidden="true"
          />
        </div>

        {/* ── Main footer grid ─────────────────────────────────────────── */}
        <div className="footer-grid">
          {/* Col 1 — Brand + contact */}
          <div>
            <Brand />
            <p
              className="footer-tagline"
              style={{ marginTop: "16px", fontSize: "12px" }}
            >
              Live Better.
            </p>
            <p
              style={{
                marginTop: "20px",
                fontSize: "12px",
                color: "var(--brand-soft)",
                lineHeight: 1.9,
              }}
            >
              Property enquiries and personal guidance across Islamabad's
              most-considered developments.
            </p>

            {/* Email */}
            <a
              href={`mailto:${company.email}`}
              style={{
                display: "block",
                fontSize: "12px",
                lineHeight: 1.8,
                marginTop: "20px",
                color: "var(--brand-soft)",
                textDecoration: "none",
                overflowWrap: "anywhere",
                borderBottom: "1px solid transparent",
                transition: "color 250ms var(--ease-brand), border-color 250ms var(--ease-brand)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand-light)";
                (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "var(--signal)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand-soft)";
                (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent";
              }}
            >
              {company.email}
            </a>

            {/* Phone numbers */}
            {company.phones.map((phone) => (
              <a
                key={phone}
                href={waHref(phone)}
                onClick={waClick(phone)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat on WhatsApp with ${phone}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  lineHeight: 1.8,
                  marginTop: "8px",
                  color: "var(--brand-soft)",
                  textDecoration: "none",
                  overflowWrap: "anywhere",
                  transition: "color 250ms var(--ease-brand)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand-light)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand-soft)";
                }}
              >
                {/* WhatsApp dot */}
                <span
                  aria-hidden="true"
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#25d366",
                    flexShrink: 0,
                  }}
                />
                {phone}
              </a>
            ))}
          </div>

          {/* Col 2 — Explore nav */}
          <div>
            <p className="eyebrow">Explore</p>
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  display: "block",
                  fontSize: "12px",
                  lineHeight: 1.8,
                  marginTop: "12px",
                  color: "var(--brand-soft)",
                  textDecoration: "none",
                  transition: "color 250ms var(--ease-brand)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand-light)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand-soft)";
                }}
              >
                {l.label}
              </Link>
            ))}

            {/* Services sub-list */}
            <p className="eyebrow" style={{ marginTop: "32px" }}>
              Services
            </p>
            {services.map((s) => (
              <Link
                key={s.number}
                to="/services"
                style={{
                  display: "block",
                  fontSize: "11px",
                  lineHeight: 1.8,
                  marginTop: "8px",
                  color: "var(--brand-soft)",
                  textDecoration: "none",
                  opacity: 0.75,
                  transition: "color 250ms var(--ease-brand), opacity 250ms var(--ease-brand)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand-light)";
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand-soft)";
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75";
                }}
              >
                {s.number} — {s.name}
              </Link>
            ))}
          </div>

          {/* Col 3 — Head office */}
          <div>
            <p className="eyebrow">Head office</p>
            <p
              style={{
                fontSize: "12px",
                color: "var(--brand-soft)",
                lineHeight: 1.9,
                marginTop: "20px",
              }}
            >
              {company.headOffice}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(company.headOffice)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                fontSize: "10px",
                marginTop: "14px",
                color: "var(--signal)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                borderBottom: "1px solid color-mix(in oklab, var(--signal) 40%, transparent)",
                paddingBottom: "3px",
                transition: "border-color 250ms var(--ease-brand)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "var(--signal)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "color-mix(in oklab, var(--signal) 40%, transparent)";
              }}
            >
              Get directions ↗
            </a>

            {/* CEO block */}
            <div
              style={{
                marginTop: "36px",
                paddingTop: "28px",
                borderTop:
                  "1px solid color-mix(in oklab, var(--brand-light) 12%, transparent)",
              }}
            >
              <p
                className="eyebrow"
                style={{ color: "var(--brand-soft)" }}
              >
                A direct conversation
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  marginTop: "12px",
                  color: "var(--brand-light)",
                  fontWeight: 500,
                }}
              >
                {company.ceo}
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--brand-soft)",
                  marginTop: "4px",
                }}
              >
                Chief Executive Officer
              </p>
              <a
                href="tel:+923325178767"
                style={{
                  display: "inline-block",
                  fontSize: "12px",
                  marginTop: "12px",
                  color: "var(--signal)",
                  textDecoration: "none",
                  letterSpacing: "0.03em",
                }}
              >
                {company.phones[0]}
              </a>
            </div>
          </div>

          {/* Col 4 — Site office */}
          <div>
            <p className="eyebrow">Site office</p>
            <p
              style={{
                fontSize: "12px",
                color: "var(--brand-soft)",
                lineHeight: 1.9,
                marginTop: "20px",
              }}
            >
              {company.siteOffice}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(company.siteOffice)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                fontSize: "10px",
                marginTop: "14px",
                color: "var(--signal)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                borderBottom: "1px solid color-mix(in oklab, var(--signal) 40%, transparent)",
                paddingBottom: "3px",
                transition: "border-color 250ms var(--ease-brand)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "var(--signal)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "color-mix(in oklab, var(--signal) 40%, transparent)";
              }}
            >
              Get directions ↗
            </a>

            {/* Hours block */}
            <div
              style={{
                marginTop: "36px",
                paddingTop: "28px",
                borderTop:
                  "1px solid color-mix(in oklab, var(--brand-light) 12%, transparent)",
              }}
            >
              <p
                className="eyebrow"
                style={{ color: "var(--brand-soft)" }}
              >
                Office hours
              </p>
              {[
                { label: "Mon – Sat", value: "9 am – 6 pm" },
                { label: "Sunday", value: "By appointment" },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    marginTop: "10px",
                    fontSize: "11px",
                  }}
                >
                  <span style={{ color: "var(--brand-soft)" }}>
                    {row.label}
                  </span>
                  <span
                    style={{ color: "var(--brand-light)", fontWeight: 400 }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Projects count badge */}
            <div
              style={{
                marginTop: "36px",
                paddingTop: "28px",
                borderTop:
                  "1px solid color-mix(in oklab, var(--brand-light) 12%, transparent)",
                display: "flex",
                gap: "28px",
              }}
            >
              {[
                { n: "06", label: "Projects" },
                { n: "02", label: "Offices" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-display)",
                      fontSize: "30px",
                      fontWeight: 500,
                      color: "var(--signal)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.n}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: "9px",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "var(--brand-soft)",
                      marginTop: "6px",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer bottom bar ────────────────────────────────────────── */}
        <div className="footer-bottom">
          <span>© {year} {company.legalName}</span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span>Islamabad · Pakistan</span>
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "currentColor",
                opacity: 0.4,
              }}
            />
            <Link
              to="/contact"
              style={{
                color: "inherit",
                textDecoration: "none",
                transition: "color 250ms var(--ease-brand)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "";
              }}
            >
              Privacy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
