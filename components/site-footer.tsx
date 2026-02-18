import { MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-footer-bg text-footer-foreground">
      <div className="mx-auto max-w-[1200px] px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Name */}
          <div className="flex items-start gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary">
              <svg viewBox="0 0 100 100" className="h-11 w-11" aria-hidden="true">
                <circle cx="50" cy="50" r="48" fill="#8B3A3A" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="#d4a574" strokeWidth="2" />
                <circle cx="50" cy="35" r="12" fill="#d4a574" />
                <path d="M30 55 L50 75 L70 55" fill="none" stroke="#d4a574" strokeWidth="3" />
                <rect x="46" y="75" width="8" height="10" fill="#d4a574" />
                <rect x="35" y="85" width="30" height="4" rx="2" fill="#d4a574" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold text-card">Staff Selection</p>
              <p className="text-lg font-bold text-card">Commission</p>
            </div>
          </div>

          {/* Public Disclosure */}
          <div className="flex items-start">
            <p className="text-sm leading-relaxed text-footer-foreground">
              Public Disclosure of Scores and Other Details of Non-Recommended
              Willing Candidates
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="mb-3 text-base font-bold text-card underline">
              Useful links
            </h4>
            <ul className="space-y-1.5 text-sm">
              {[
                "Archives",
                "Disclaimer",
                "Sitemap",
                "Help",
                "Website Policies",
                "Web Information Manager",
              ].map((link) => (
                <li key={link}>
                  <span className="cursor-pointer text-footer-foreground transition-colors hover:text-card">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="mb-3 text-base font-bold text-card underline">
              Contact Us
            </h4>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-footer-foreground" />
              <p className="text-footer-foreground">
                Block No-12, CGO Complex, Lodhi Road New Delhi
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-footer-foreground/20">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-2 px-4 py-3 text-xs text-footer-foreground">
          <span>{"© 2026 SSC. All Rights Reserved."}</span>
          <span>{"Total Visitor Count: 1,23,45,678"}</span>
          <span>{"Last updated on Feb 18, 2026"}</span>
        </div>
      </div>
    </footer>
  )
}
