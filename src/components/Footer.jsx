const quickLinks = [
  { text: "About Us", href: "#" },
  { text: "AI Technologies", href: "#types" },
  { text: "Case Studies", href: "#benefits" },
  { text: "Contact Us", href: "#contact" },
  { text: "Careers", href: "#" }
];

const resources = [
  { text: "Documentation", href: "#" },
  { text: "API Reference", href: "#" },
  { text: "Community Forum", href: "#" },
  { text: "Blog & News", href: "#" },
  { text: "Help Center", href: "#" }
];

function Footer() {
  return (
    <footer className='footer'>
      <div className="app-container">
    
       


        {/* bottom bar */}
        <div className="footer-bottom-bar">
          <p className="footer-bottom-text">
            © 2025 Weddin Invite. All rights reserved.
          </p>
          <div className="footer-bottom-link-group">
            <a href="#" className='footer-bottom-link'>Terms of Service</a>
            <a href="#" className='footer-bottom-link'>Privacy Policy</a>
            <a href="#" className='footer-bottom-link'>Cookie Policy</a>
          </div>
        </div>
      </div>
  
    </footer>
  )
}

export default Footer