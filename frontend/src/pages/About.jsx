import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const aboutImage = (path) => `${import.meta.env.BASE_URL}${path}`;

function About() {
  return (
    <main className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <p className="section-label">ABOUT RARE PHARMA</p>

        <h1>
          ACCESS
          <br />
          <span>MATTERS.</span>
        </h1>

        <p className="about-hero-text">
          We work around specialty and hard-to-source medicines,
          helping connect genuine requirements with the appropriate
          sourcing and supply process.
        </p>

        <div className="about-hero-number">
          01
        </div>

      </section>


      {/* INTRO */}

      <section className="about-intro">

        <div className="about-section-number">02</div>

        <div className="about-intro-content">

          <p className="section-label">WHO WE ARE</p>

          <h2>
            SPECIALTY
            <br />
            <span>ACCESS.</span>
          </h2>

          <p>
            Rare Pharma focuses on helping patients, hospitals,
            doctors and institutions navigate the process of
            accessing specialty medicines that may require
            specific sourcing, documentation or availability
            coordination.
          </p>

          <p>
            Our role is centred around the supply process —
            not clinical decision-making. Medicine selection
            and treatment remain with the treating healthcare
            professional.
          </p>

        </div>

      </section>


      {/* PRINCIPLES */}

      <section className="about-principles">

        <div className="principles-heading">
          <p className="section-label">WHAT WE VALUE</p>

          <h2>
            BUILT ON
            <br />
            <span>CLARITY.</span>
          </h2>
        </div>

        <div className="principles-list">

          <div className="principle-row">
            <span>01</span>

            <div>
              <h3>Reliability</h3>
              <p>
                Clear communication around requirements,
                availability and expected timelines.
              </p>
            </div>

            <ArrowUpRight size={22} />
          </div>

          <div className="principle-row">
            <span>02</span>

            <div>
              <h3>Documentation</h3>
              <p>
                A process-driven approach to prescription
                and supporting documentation requirements.
              </p>
            </div>

            <ArrowUpRight size={22} />
          </div>

          <div className="principle-row">
            <span>03</span>

            <div>
              <h3>Transparency</h3>
              <p>
                We aim to keep the supply process simple,
                understandable and properly communicated.
              </p>
            </div>

            <ArrowUpRight size={22} />
          </div>

          <div className="principle-row">
            <span>04</span>

            <div>
              <h3>Responsibility</h3>
              <p>
                We coordinate medicine access while keeping
                medical decisions with qualified professionals.
              </p>
            </div>

            <ArrowUpRight size={22} />
          </div>

        </div>

      </section>



      {/* TEAM / HISTORY */}

<section className="about-story">

  <div className="story-heading">
    <p className="section-label">OUR JOURNEY</p>

    <h2>
      PEOPLE
      <br />
      <span>BEHIND ACCESS.</span>
    </h2>
  </div>

  <div className="story-gallery">

    {/* Photo 01 */}

    <div className="story-card story-card-large">

      <img
        src={aboutImage("team/image10.png")}
        alt="Rare Pharma team member"
      />

      <div className="story-card-overlay">
        <span>01</span>

        <div>
          <strong>Family</strong>
          <small>Team Member</small>
        </div>
      </div>

      <div className="story-arrow">
        <ArrowUpRight size={20} />
      </div>

    </div>


    {/* History Card */}

    <div className="story-card story-history">

      <span className="story-year">OUR STORY</span>

      <h3>
        BUILT AROUND
        <br />
        <span>ACCESS.</span>
      </h3>

      <p>
        Our journey is focused on making specialty medicine
        access more organised, transparent and dependable.
      </p>

      <div className="story-history-line">
        
        <span>01</span>
        <span>THE BEGINNING</span>
      </div>

    </div>


    {/* Future photo placeholder */}


  </div>

</section>


      {/* COMPANY HISTORY */}

{/* VISUAL HISTORY */}

<section className="about-history">

  <div className="history-intro">

    <p className="section-label">OUR JOURNEY</p>

    <h2>
      FROM
      <br />
      <span>VISION TO ACCESS.</span>
    </h2>

    <p>
      Healthcare is more than medicine. It is about
      connecting the right people, information and
      supply at the right moment.
    </p>

  </div>


  <div className="history-gallery">

    {/* IMAGE 01 */}

    <div className="history-photo history-photo-one">

      <img
        src={aboutImage("team/image2.png")}
        alt="Blood sample and medical research"
      />

      <div className="history-photo-info">
        <span>01</span>
        <strong>Medical Expertise</strong>
      </div>

      <div className="history-photo-arrow">
        <ArrowUpRight size={20} />
      </div>

    </div>


    {/* STORY CARD */}

    <div className="history-story-card">

      <span>THE BEGINNING</span>

      <h3>
        ACCESS
        <br />
        <span>STARTS WITH PURPOSE.</span>
      </h3>

      <p>
        Our focus began with a simple purpose:
        helping create a dependable path for accessing
        specialty and hard-to-source medicines.
      </p>

      <div className="history-card-bottom">
        <span>01</span>
        <span>OUR STORY</span>
      </div>

    </div>


    {/* IMAGE 02 */}

    <div className="history-photo history-photo-two">

      <img
        src={aboutImage("about/hands.jpg")}
        alt="Hands reaching towards each other"
      />

      <div className="history-photo-info">
        <span>02</span>
        <strong>Human Connection</strong>
      </div>

      <div className="history-photo-arrow">
        <ArrowUpRight size={20} />
      </div>

    </div>


    {/* IMAGE 03 */}

    <div className="history-photo history-photo-three">

      <img
        src={aboutImage("about/image6.jpg")}
        alt="Doctor caring for a patient"
      />

      <div className="history-photo-info">
        <span>03</span>
        <strong>Patient Focus</strong>
      </div>

      <div className="history-photo-arrow">
        <ArrowUpRight size={20} />
      </div>

    </div>


    {/* STORY CARD 02 */}

    <div className="history-story-card history-story-orange">

      <span>THE APPROACH</span>

      <h3>
        CONNECTING
        <br />
        <span>REQUIREMENTS.</span>
      </h3>

      <p>
        From enquiry and documentation to availability
        coordination, every requirement moves through
        a structured supply process.
      </p>

      <div className="history-card-bottom">
        <span>02</span>
        <span>OUR APPROACH</span>
      </div>

    </div>


    {/* IMAGE 04 */}

    <div className="history-photo history-photo-four">

      <img
        src={aboutImage("about/image5.jpg")}
        alt="Medicine storage and pharmacy"
      />

      <div className="history-photo-info">
        <span>04</span>
        <strong>Medicine Supply</strong>
      </div>

      <div className="history-photo-arrow">
        <ArrowUpRight size={20} />
      </div>

    </div>

  </div>

</section>

      


      {/* CTA */}

      <section className="about-cta">

        <p className="section-label">WORK WITH US</p>

        <h2>
          LET'S MAKE
          <br />
          <span>ACCESS SIMPLE.</span>
        </h2>

        <Link to="/contact">
          Start an enquiry
          <ArrowUpRight size={20} />
        </Link>

      </section>

    </main>
  );
}

export default About;