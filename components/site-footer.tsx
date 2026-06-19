import Image from "next/image"
import { MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: '#2d2d2d', color: '#ffffff' }}>
      {/* Top Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
          {/* Logo and Organization Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Image
              src="/images/ssc-logo.jpg"
              alt="Staff Selection Commission Logo"
              width={60}
              height={60}
              style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffffff', margin: 0, lineHeight: '1.2' }}>Staff Selection</p>
              <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffffff', margin: 0, lineHeight: '1.2' }}>Commission</p>
            </div>
          </div>

          {/* Left Column Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ffffff', margin: 0 }}>
              Public Disclosure of Scores and Other Details of Non-Recommended Willing Candidates
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ffffff', margin: 0 }}>
              List of Debarred Candidates in Examinations Conducted by the Staff Selection Commission
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px' }}>Useful links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {["DoPT", "Archives", "Disclaimer", "Sitemap", "Help", "Website Policies", "Web Information Manager"].map((link) => (
                <li key={link} style={{ fontSize: '14px' }}>
                  <span style={{ cursor: 'pointer', color: '#ffffff', transition: 'color 0.3s' }} className="hover:text-gray-300">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px' }}>Contact Us</h4>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px' }}>
              <MapPin style={{ width: '20px', height: '20px', marginTop: '2px', flexShrink: 0, color: '#ffffff' }} />
              <p style={{ color: '#ffffff', margin: 0 }}>
                Block No-12, CGO Complex, Lodhi Road New Delhi - 110003
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}></div>

      {/* Bottom Bar */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', fontSize: '14px', color: '#ffffff' }}>
        <span>{"© 2026 SSC. All Rights Reserved."}</span>
        <span>{"Total Visitor Count: 451005794"}</span>
        <span>{"Last updated on Jun 19, 2026"}</span>
      </div>
    </footer>
  )
}
