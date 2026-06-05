import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


import p1 from "../../assets/p1.webp";
import p2 from "../../assets/p2.webp";
import p3r from "../../assets/p3r.webp";
import p4 from "../../assets/p4.webp";
import p5 from "../../assets/p5.webp";
import p6 from "../../assets/p6.webp";
import p7 from "../../assets/p7.webp";
import p8 from "../../assets/p8.webp";
import p9 from "../../assets/p9.webp";
import p10 from "../../assets/p10.webp";
import p11 from "../../assets/p11.webp";
import p12 from "../../assets/p12.webp";
import p15 from "../../assets/p15.webp";
import heroImage from "../../assets/hero.webp";

function Home() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(true);

  setTimeout(() => {
    setSubmitted(false);
  }, 3000);
};

  return (
    <main>

      <section
  className="hero"
  style={{
    backgroundImage: `linear-gradient(rgba(15,23,42,0.75), rgba(15,23,42,0.75)), url(${p12})`,
  }}
>
  <div className="hero-content">
    

    <h1>
      Accelerate Your Business
      <span> Growth Digitally</span>
    </h1>

    <p>
      Empowering businesses through cloud technologies,
      digital transformation, enterprise software,
      and innovative growth strategies.
    </p>

    <div className="hero-buttons">
      <button onClick={() => navigate("/start-project")}>
        Start Project
      </button>

      <button
        className="outline"
        onClick={() => navigate("/learn-more")}
      >
        Learn More
      </button>
    </div>
  </div>
</section>


      
      {/* SERVICES */}
      <section className="services">
        <div className="section-title">
          <span>OUR SERVICES</span>
          <h2>Solutions Built For Growth</h2>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <img src={p11} alt="" />
            <h3>Digital Transformation</h3>
            <p>
              Modernize operations and streamline workflows
              with future-ready technology solutions.
            </p>
          </div>

          <div className="service-card">
            <img src={p7} alt="" />
            <h3>Cloud Solutions</h3>
            <p>
              Build secure, scalable and high-performance
              cloud infrastructure.
            </p>
          </div>

          <div className="service-card">
            <img src={p8} alt="" />
            <h3>Business Consulting</h3>
            <p>
              Unlock opportunities through strategic planning
              and digital innovation.
            </p>
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">

        <div className="why-image">
          <img src={p9} alt="" />
        </div>

        <div className="why-content">
          <span>WHY CHOOSE US</span>

          <h2>Delivering Digital Excellence</h2>

          <p>
            We help organizations transform operations,
            enhance productivity and build scalable
            digital ecosystems.
          </p>

          <ul>
            <li>Strategic Planning</li>
            <li> Scalable Solutions</li>
            <li> Innovation Driven</li>
            <li> Dedicated Support</li>
          </ul>
        </div>

      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="section-title">
          <span>OUR APPROACH</span>
          <h2>Driving Innovation Through Technology</h2>
        </div>

        <div className="features-grid">

          <div className="feature-card">
            <img src={p3r} alt="" />
            <h3>Enterprise Solutions</h3>
            <p>
              Integrated systems that improve efficiency
              across departments.
            </p>
          </div>

          <div className="feature-card">
            <img src={p1  } alt="" />
            <h3>Data Intelligence</h3>
            <p>
              Transform data into actionable insights for
              smarter decision-making.
            </p>
          </div>

          <div className="feature-card">
            <img src={p10} alt="" />
            <h3>Automation</h3>
            <p>
              Reduce repetitive work through intelligent
              automation solutions.
            </p>
          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="process">

        <div className="section-title">
          <span>HOW WE WORK</span>
          <h2>Simple Process. Powerful Results.</h2>
        </div>

        <div className="process-grid">

          <div className="step">
            <span>01</span>
            <h3>Discovery</h3>
            <p>Understanding business objectives.</p>
          </div>

          <div className="step">
            <span>02</span>
            <h3>Strategy</h3>
            <p>Creating a tailored roadmap.</p>
          </div>

          <div className="step">
            <span>03</span>
            <h3>Implementation</h3>
            <p>Deploying scalable solutions.</p>
          </div>

          <div className="step">
            <span>04</span>
            <h3>Optimization</h3>
            <p>Continuous performance improvement.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">

        <h2>Ready To Transform Your Business?</h2>

        <p>
          Build innovative solutions and achieve
          sustainable growth.
        </p>

        <button
          onClick={() => navigate("/consultation")}
        >
          Schedule Consultation
        </button>

      </section>
{/* CONTACT */}

<section className="contact-section">

  <div className="section-title">
    <span>GET IN TOUCH</span>
    <h2>Contact Us</h2>
  </div>

  <form
    className="contact-form"
    onSubmit={handleSubmit}
  >

    <input
      type="text"
      placeholder="Full Name"
      required
    />

    <input
      type="tel"
      placeholder="Mobile Number"
      required
    />

    <input
      type="email"
      placeholder="Email Address"
      required
    />

    <input
      type="text"
      placeholder="Location"
      required
    />

    <button type="submit">
      Submit
    </button>

    {submitted && (
      <div className="success-message">
        ✓ Submitted Successfully!
      </div>
    )}

  </form>

</section>
    </main>
  );
}

export default Home;