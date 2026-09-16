import React, { useState } from "react";
import "./App.css";

const INSTAGRAM =
  "https://www.instagram.com/dream_capture_0872/";

const PHONE = "+918222020259";
const WHATSAPP = "918222020259";

const services = [
  {
    icon: "💍",
    title: "Wedding Photography",
    text: "From the first ritual to the last dance, every emotion and detail is documented naturally.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85",
  },
  {
    icon: "♡",
    title: "Pre-Wedding",
    text: "Relaxed, romantic sessions built around your chemistry, personality and story.",
    image:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    icon: "✦",
    title: "Events",
    text: "Important celebrations captured without taking you away from the moment.",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=85",
  },
];

const benefits = [
  {
    number: "01",
    title: "Natural Moments",
    text: "Real smiles, real tears, real reactions. We let the moment happen instead of constantly directing it.",
  },
  {
    number: "02",
    title: "Creative Direction",
    text: "When direction is needed, we help with poses, locations, light and composition.",
  },
  {
    number: "03",
    title: "Visual Storytelling",
    text: "The final collection is about more than individual photographs. It should tell the story of your day.",
  },
  {
    number: "04",
    title: "Attention To Detail",
    text: "Expressions, jewellery, décor, family moments and all the small details that make your celebration yours.",
  },
];

const photographyStyles = [
  {
    title: "CANDID",
    text: "Unplanned expressions and genuine emotions.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "PORTRAIT",
    text: "Elegant portraits with thoughtful composition.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "DETAILS",
    text: "The little elements that complete your story.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "EMOTIONS",
    text: "The people, reactions and feelings behind the celebration.",
    image:
      "https://cdn0.weddingwire.in/vendor/2288/3_2/960/jpg/275273912-2232622386890632-6813413973397549992-n_15_472288-172061577998502.jpeg",
  },
];

const faqData = [
  {
    question: "How far in advance should we book?",
    answer:
      "For weddings, earlier bookings are recommended because dates can fill quickly. Share your date with us and we can check availability.",
  },
  {
    question: "Do you travel outside Ambala?",
    answer:
      "Yes. We can discuss travel requirements for Chandigarh, Panchkula, Mohali and other locations depending on your event.",
  },
  {
    question: "Can we customise our photography package?",
    answer:
      "Absolutely. Every event is different, so we can discuss the coverage, requirements and deliverables that make sense for your day.",
  },
  {
    question: "How do we check availability?",
    answer:
      "The quickest way is to WhatsApp or call us with your event date, location and type of shoot.",
  },
];

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="page">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-mark">DC</span>

          <div>
            <strong>DREAM CAPTURE</strong>
            <small>PHOTOGRAPHY & FILMS</small>
          </div>
        </a>

        <nav>
          <a href="#services">Services</a>
          <a href="#rohit">Rohit</a>
          <a href="#experience">Experience</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
          className="nav-book"
        >
          Book Your Date <span>↗</span>
        </a>
      </header>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-shape hero-shape-one"></div>
        <div className="hero-shape hero-shape-two"></div>

        <div className="hero-container">

          <div className="hero-copy">

            <div className="location-pill">
              <span className="live-dot"></span>
              PHOTOGRAPHER · AMBALA
            </div>

            <h1>
              Your moments.
              <br />
              <span>Our camera.</span>
              <br />
              <i>Your story.</i>
            </h1>

            <p className="hero-description">
              Wedding, pre-wedding and event photography focused
              on real emotions, beautiful light and photographs
              that still feel special years later.
            </p>

            <div className="hero-actions">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                Check Availability
                <span>↗</span>
              </a>

              <a href="#services" className="secondary-btn">
                Explore Services
                <span>↓</span>
              </a>
            </div>

            <div className="hero-trust">
              <div className="avatars">
                <span>✦</span>
                <span>♡</span>
                <span>✦</span>
              </div>

              <div>
                <strong>Photographs with feeling.</strong>
                <small>Because memories deserve more than a snapshot.</small>
              </div>
            </div>

          </div>

          <div className="hero-visual">

            <div className="hero-photo-card">
              <img
                src="/public/Images/2.PNG"
                alt="Wedding couple photography"
              />

              <div className="photo-label">
                <span>01</span>

                <div>
                  <strong>YOUR DAY</strong>
                  <small>CAPTURED FOREVER</small>
                </div>
              </div>
            </div>

            <div className="floating-card date-card">
              <div className="calendar-icon">▣</div>

              <div>
                <small>PLANNING YOUR WEDDING?</small>
                <strong>Let's check your date.</strong>
              </div>

              <span>↗</span>
            </div>

            <div className="floating-card camera-card">
              <span>✦</span>

              <div>
                <strong>Real.</strong>
                <small>Emotional.</small>
                <small>Timeless.</small>
              </div>
            </div>

          </div>

        </div>

        <div className="hero-bottom">
          <span>WEDDINGS</span>
          <span>PRE-WEDDINGS</span>
          <span>EVENTS</span>
          <span>PORTRAITS</span>

          <div className="hero-line"></div>

          <span>AMBALA · CHANDIGARH · PANCHKULA</span>
        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="intro-strip">

        <div className="intro-number">01</div>

        <div className="intro-heading">
          <span>PHOTOGRAPHY IS MORE THAN A PICTURE.</span>

          <h2>
            It's about how
            <br />
            <em>it makes you feel.</em>
          </h2>
        </div>

        <div className="intro-copy">
          <p>
            Years later, a photograph should do more than
            look beautiful. It should take you right back to
            that exact moment.
          </p>

          <a href="#rohit">
            MEET ROHIT
            <span>↗</span>
          </a>
        </div>

      </section>

      {/* ================= ROHIT ================= */}

      <section className="rohit-section" id="rohit">

        <div className="rohit-visual">

          <div className="rohit-photo">
            <img
              src="/public/Images/1.PNG"
              alt="Rohit - Dream Capture photographer"
            />

            <div className="rohit-photo-caption">
              <span>BEHIND THE CAMERA</span>
              <strong>ROHIT</strong>
            </div>
          </div>

          <div className="rohit-sticker">
            <span>DC</span>
            <small>THE PERSON<br />BEHIND THE<br />FRAME</small>
          </div>

        </div>

        <div className="rohit-content">

          <span className="section-kicker">
            THE PERSON BEHIND DREAM CAPTURE
          </span>

          <h2>
            Meet
            <br />
            <em>Rohit.</em>
          </h2>

          <p className="rohit-lead">
            Every photographer has a way of seeing the world.
            For Rohit, photography is about finding the moment
            inside the moment.
          </p>

          <p>
            Instead of making every photograph feel heavily
            staged, the focus is on observing people — their
            expressions, relationships, laughter and the little
            things they may not even notice themselves.
          </p>

          <p>
            That's the idea behind Dream Capture: create
            photographs that don't simply show what happened,
            but remind you how it felt.
          </p>

          <div className="rohit-sign">
            <strong>ROHIT</strong>
            <span>Photographer · Dream Capture</span>
          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="services" id="services">

        <div className="section-top">

          <div>
            <span className="section-kicker">
              WHAT WE CAPTURE
            </span>

            <h2>
              Made for your
              <br />
              <em>kind of story.</em>
            </h2>
          </div>

          <p>
            From intimate couple sessions to full wedding
            celebrations, choose the kind of story you want
            us to preserve.
          </p>

        </div>

        <div className="service-cards">

          {services.map((service, index) => (
            <div className="service-card" key={service.title}>

              <div className="service-card-top">
                <span className="service-index">
                  0{index + 1}
                </span>

                <span className="service-icon">
                  {service.icon}
                </span>
              </div>

              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <a href="#contact">
                DISCUSS YOUR SHOOT <span>↗</span>
              </a>

            </div>
          ))}

        </div>

      </section>

      {/* ================= PHOTOGRAPHY STYLE ================= */}

      <section className="style-section">

        <div className="style-heading">

          <span className="section-kicker">
            THE DREAM CAPTURE LOOK
          </span>

          <h2>
            Four ways we
            <br />
            tell your <em>story.</em>
          </h2>

          <p>
            A complete story isn't made from one type of
            photograph. It's built from people, details,
            portraits and spontaneous moments.
          </p>

        </div>

        <div className="style-grid">

          {photographyStyles.map((style, index) => (
            <div className={`style-card style-${index + 1}`} key={style.title}>

              <img src={style.image} alt={style.title} />

              <div className="style-overlay"></div>

              <div className="style-card-content">
                <span>0{index + 1}</span>

                <div>
                  <h3>{style.title}</h3>
                  <p>{style.text}</p>
                </div>

                <b>↗</b>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ================= WHY US ================= */}

      <section className="why-us" id="experience">

        <div className="why-image">

          <img
            src="/public/Images/4.PNG"
            alt="Photography detail"
          />

          <div className="experience-badge">
            <span>DC</span>
            <small>
              BEHIND
              <br />
              THE LENS
            </small>
          </div>

        </div>

        <div className="why-content">

          <span className="section-kicker">
            THE DREAM CAPTURE EXPERIENCE
          </span>

          <h2>
            Because your
            <br />
            story is <em>different.</em>
          </h2>

          <p className="why-intro">
            We don't believe photography should feel like
            a photoshoot. It should feel like you.
          </p>

          <div className="benefits">

            {benefits.map((benefit) => (
              <div className="benefit" key={benefit.number}>

                <span>{benefit.number}</span>

                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= WHAT YOU RECEIVE ================= */}

      <section className="deliver-section">

        <div className="deliver-intro">

          <span className="section-kicker">
            MORE THAN A SHOOT
          </span>

          <h2>
            What you
            <br />
            <em>take home.</em>
          </h2>

          <p>
            Your photographs aren't just files delivered to
            you. They become the visual record of one of the
            most important chapters of your life.
          </p>

        </div>

        <div className="deliver-list">

          <div className="deliver-item">
            <span>01</span>
            <div>
              <h3>Professionally Selected Photographs</h3>
              <p>
                The strongest moments from your celebration,
                carefully selected to tell the story.
              </p>
            </div>
            <strong>+</strong>
          </div>

          <div className="deliver-item">
            <span>02</span>
            <div>
              <h3>Professional Editing</h3>
              <p>
                Consistent colour, tone and finishing across
                your final collection.
              </p>
            </div>
            <strong>+</strong>
          </div>

          <div className="deliver-item">
            <span>03</span>
            <div>
              <h3>A Story, Not Just a Folder</h3>
              <p>
                The photographs are selected with the complete
                narrative of your event in mind.
              </p>
            </div>
            <strong>+</strong>
          </div>

          <div className="deliver-item">
            <span>04</span>
            <div>
              <h3>Memories You Can Revisit</h3>
              <p>
                Images designed to remain meaningful long after
                the event is over.
              </p>
            </div>
            <strong>+</strong>
          </div>

        </div>

      </section>

      {/* ================= PROCESS ================= */}

      <section className="process">

        <div className="process-header">

          <span className="section-kicker">
            YOUR EXPERIENCE
          </span>

          <h2>
            Simple from
            <br />
            <em>start to finish.</em>
          </h2>

        </div>

        <div className="process-steps">

          <div>
            <span>01</span>
            <div className="process-icon">♡</div>
            <h3>Tell us your plan</h3>
            <p>
              Share your date, location and the kind of
              photography you're looking for.
            </p>
          </div>

          <div>
            <span>02</span>
            <div className="process-icon">✦</div>
            <h3>Plan your shoot</h3>
            <p>
              Discuss your event, requirements, locations,
              timings and ideas with Rohit.
            </p>
          </div>

          <div>
            <span>03</span>
            <div className="process-icon">◉</div>
            <h3>Enjoy your day</h3>
            <p>
              Be present with your people. We'll focus on
              documenting the moments around you.
            </p>
          </div>

          <div>
            <span>04</span>
            <div className="process-icon">✓</div>
            <h3>Relive the story</h3>
            <p>
              Your selected photographs are professionally
              edited and prepared for you.
            </p>
          </div>

        </div>

      </section>

      {/* ================= FEATURED VISUAL ================= */}

      <section className="quote-image">

        <div className="quote-image-bg"></div>
        <div className="quote-image-overlay"></div>

        <div className="quote-image-content">

          <span>THE LITTLE THINGS MATTER</span>

          <h2>
            The glance.
            <br />
            The laugh.
            <br />
            <em>The tears.</em>
          </h2>

          <p>
            Those are the frames you'll remember.
          </p>

        </div>

      </section>

      {/* ================= TESTIMONIAL ================= */}

      <section className="testimonial-section" id="reviews">

        <div className="testimonial-quote">“</div>

        <span className="section-kicker">
          KIND WORDS
        </span>

        <h2>
          “The photographs made us
          <br />
          <em>relive the day all over again.</em>”
        </h2>

        <div className="testimonial-person">

          <div className="person-avatar">♡</div>

          <div>
            <strong>Happy Couple</strong>
            <small>Wedding Photography</small>
          </div>

        </div>

      </section>

      {/* ================= CUSTOM PHOTO GIFTS ================= */}

      <section className="gifts-section" id="gifts">

        <div className="gifts-intro">

          <div className="gifts-number">
            04
          </div>

          <div className="gifts-heading">

            <span className="section-kicker">
              MEMORIES YOU CAN HOLD
            </span>

            <h2>
              Your favourite
              <br />
              moments,
              <br />
              <em>made tangible.</em>
            </h2>

          </div>

          <div className="gifts-description">

            <p>
              Some memories belong in your phone.
              Some deserve a place in your home.
            </p>

            <p>
              Dream Capture also creates personalised photo
              gifts and décor — designed from your favourite
              photographs.
            </p>

          </div>

        </div>


        {/* PRODUCT SHOWCASE */}

        <div className="gift-showcase">

          {/* CUP */}

          <div className="gift-product gift-cup">

            <div className="gift-product-image">

              <img
                src="/public/Images/6.PNG"
                alt="Customized photo mug"
              />

              <div className="product-floating-tag">
                <span>01</span>
                CUSTOM MUG
              </div>

            </div>

            <div className="gift-product-info">

              <div>
                <span>PERSONALISED GIFT</span>
                <h3>Photo Mugs</h3>
              </div>

              <p>
                Turn your favourite photograph into a
                personalised everyday keepsake.
              </p>

              <a href="#contact">
                CREATE YOURS <b>↗</b>
              </a>

            </div>

          </div>


          {/* FRAME */}

          <div className="gift-product gift-frame">

            <div className="gift-product-image">

              <img
                src="/public/Images/3.PNG"
                alt="Customized photo frame"
              />

              <div className="product-floating-tag">
                <span>02</span>
                PHOTO FRAME
              </div>

            </div>

            <div className="gift-product-info">

              <div>
                <span>PERSONALISED MEMORY</span>
                <h3>Custom Frames</h3>
              </div>

              <p>
                A meaningful photograph, beautifully
                presented and ready to become part of your space.
              </p>

              <a href="#contact">
                DESIGN A FRAME <b>↗</b>
              </a>

            </div>

          </div>


          {/* WALL FRAME */}

          <div className="gift-product gift-wall">

            <div className="gift-product-image">

              <img
                src="/public/Images/5.PNG"
                alt="Wall photo frame"
              />

              <div className="product-floating-tag">
                <span>03</span>
                WALL ART
              </div>

            </div>

            <div className="gift-product-info">

              <div>
                <span>HOME · MEMORY · ART</span>
                <h3>Wall Frames</h3>
              </div>

              <p>
                Transform your photographs into statement
                pieces designed for your home.
              </p>

              <a href="#contact">
                MAKE YOUR WALL <b>↗</b>
              </a>

            </div>

          </div>

        </div>


        {/* CUSTOM ORDER BAR */}

        <div className="custom-order">

          <div className="custom-order-icon">
            ✦
          </div>

          <div className="custom-order-copy">

            <span>HAVE SOMETHING ELSE IN MIND?</span>

            <strong>
              Tell us what you want. We'll create it for you.
            </strong>

          </div>

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
          >
            CUSTOM ORDER
            <span>↗</span>
          </a>

        </div>

      </section>


      {/* ================= INSTAGRAM ================= */}

      <section className="social-section">

        <div className="social-content">

          <span className="section-kicker">
            FOLLOW THE JOURNEY
          </span>

          <h2>
            See what
            <br />
            we're <em>capturing.</em>
          </h2>

          <p>
            Follow Dream Capture on Instagram for recent
            shoots, behind-the-scenes moments and fresh
            photography work.
          </p>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="instagram-btn"
          >
            <span>◎</span>
            @dream_capture_0872
            <strong>↗</strong>
          </a>

        </div>

        <div className="social-images">

          <img
            src="https://wedluxe.com/wp-content/uploads/2025/03/something-blue-timeless-wedding-elegance-in-phuket38-scaled.jpg"
            alt="Wedding photography"
          />

          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=85"
            alt="Wedding details"
          />

          <img
            src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=600&q=85"
            alt="Photography portrait"
          />

        </div>

      </section>

      {/* ================= LOCATION ================= */}

      <section className="location-section">

        <div className="location-copy">

          <span className="section-kicker">
            WHERE WE ARE
          </span>

          <h2>
            Based in
            <br />
            <em>Ambala.</em>
          </h2>

          <p>
            Dream Capture is based in Ambala, Haryana and
            is available for shoots across Ambala, Chandigarh,
            Panchkula, Mohali and nearby locations.
          </p>

          <div className="location-details">

            <div>
              <span>BASE</span>
              <strong>Ambala, Haryana</strong>
            </div>

            <div>
              <span>TRAVEL</span>
              <strong>Available on request</strong>
            </div>

          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Ambala,Haryana"
            target="_blank"
            rel="noreferrer"
            className="map-button"
          >
            OPEN IN GOOGLE MAPS ↗
          </a>

        </div>

        <div className="map-container">

          <iframe
            title="Dream Capture Ambala Location"
            src="https://www.google.com/maps?q=Ambala,Haryana&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

          <div className="map-card">

            <span className="map-pin">●</span>

            <div>
              <strong>Dream Capture</strong>
              <small>Ambala, Haryana</small>
            </div>

            <span>↗</span>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="faq-section">

        <div className="faq-heading">

          <span className="section-kicker">
            QUESTIONS
          </span>

          <h2>
            Before you
            <br />
            <em>book.</em>
          </h2>

          <p>
            Have a question? Here are a few things couples
            commonly ask before getting in touch.
          </p>

        </div>

        <div className="faq-list">

          {faqData.map((item, index) => (

            <div
              className={`faq-item ${openFaq === index ? "faq-open" : ""
                }`}
              key={item.question}
            >

              <button
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
              >
                <span>{item.question}</span>
                <strong>
                  {openFaq === index ? "−" : "+"}
                </strong>
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="contact" id="contact">

        <div className="contact-decoration">
          <span>DC</span>
        </div>

        <div className="contact-content">

          <span className="section-kicker">
            READY WHEN YOU ARE
          </span>

          <h2>
            Is your date
            <br />
            <em>available?</em>
          </h2>

          <p>
            Tell Rohit a little about your event, your date
            and location. Let's see how Dream Capture can
            become part of your story.
          </p>

          <div className="contact-actions">

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="contact-whatsapp"
            >
              <span>☏</span>
              WhatsApp Us
              <strong>↗</strong>
            </a>

            <a
              href={`tel:${PHONE}`}
              className="contact-call"
            >
              Call Now
            </a>

          </div>

          <div className="contact-mini">

            <span>
              <b>ROHIT</b>
              <small>Photographer</small>
            </span>

            <span>
              <b>AMBALA</b>
              <small>Haryana, India</small>
            </span>

            <span>
              <b>DC</b>
              <small>Dream Capture</small>
            </span>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-main">

          <a href="#home" className="footer-brand">

            <span className="brand-mark">DC</span>

            <div>
              <strong>DREAM CAPTURE</strong>
              <small>PHOTOGRAPHY & FILMS</small>
            </div>

          </a>

          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#rohit">Rohit</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="footer-social"
          >
            Instagram ↗
          </a>

        </div>

        <div className="footer-bottom">
          <span>© 2026 Dream Capture</span>
          <span>AMBALA · HARYANA</span>
          <span>ROHIT · PHOTOGRAPHER</span>
        </div>

      </footer>

      {/* FLOATING WHATSAPP */}

      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="WhatsApp"
      >
        <span>☏</span>
      </a>

    </div>
  );
}

export default App;
