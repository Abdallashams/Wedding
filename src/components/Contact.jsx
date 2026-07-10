const contactDetails = [
  {
    title: "Phone",
    text: "01102353184",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Email",
    text: "abdallashams626@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Office",
    text: "123 AI Boulevard, Tech City, TC 10001",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },

];





export default function Contact() {
  return (
    <section className='app-container py-16' id='contact'>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
{/* Left Section */}
<div>
  <span className="section-subheader">OUR WEDDING</span>

  <h2 className="section-header">
    Celebrate <span className="gradient-text">Our Love Story</span>
  </h2>

  <p className="section-description">
    We are delighted to invite you to share one of the most meaningful days of
    our lives. Your presence will make our wedding celebration even more
    special, and we can't wait to create unforgettable memories together.
  </p>

  <div className="mt-8 space-y-6">
    <div className="contact-info-group">
      <div className="form-icon">
        📍
      </div>

      <div>
        <h3 className="contact-title">Venue</h3>
        <p className="contact-text">
          toolip,sea streat,beni suef
        </p>
      </div>
    </div>

    <div className="contact-info-group">
      <div className="form-icon">
        📅
      </div>

      <div>
        <h3 className="contact-title">Date & Time</h3>
        <p className="contact-text">
          Saturday, august 8, 2026 • 7:00 PM
        </p>
      </div>
    </div>

    <div className="contact-info-group">
      <div className="form-icon">
        💌
      </div>

      <div>
        <h3 className="contact-title">RSVP</h3>
        <p className="contact-text">
          Kindly confirm your attendance before September 10.
        </p>
      </div>
    </div>

    <div className="contact-info-group">
      <div className="form-icon">
        ❤️
      </div>

      <div>
        <h3 className="contact-title">With Love</h3>
        <p className="contact-text">
          We look forward to celebrating this beautiful beginning with you.
        </p>
      </div>
    </div>
  </div>
</div>
     {/* right form section */}

       <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
          <form>
            <div className="space-y-6">
              <div>
                <label className="form-input-label">Full Name</label>
                <input type="text" className="form-input" />
              </div>
              <div>
                <label className="form-input-label">Email Adress</label>
                <input type="email" className="form-input" />
              </div>
              <div>
                <label className="form-input-label">Subject</label>
                <input type="text" className="form-input" />
              </div>
              <div>
                <label className="form-input-label">Message</label>
                <textarea className="form-input" rows="4" />
              </div>
            </div>
            <button className="btn-primary w-full mt-6">
              Send Message
            </button>
          </form>
        </div>
     </div>

    </section>
  )
}
