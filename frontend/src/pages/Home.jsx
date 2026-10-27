import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import medicines from "../data/medicines";

function Home() {
  const featuredMedicines = medicines.slice(0, 6);

  const areas = [
    {
      number: "01",
      title: "Oncology",
      text: "Specialty medicines supporting complex cancer care.",
    },
    {
      number: "02",
      title: "Hematology",
      text: "Advanced therapies for blood and hematologic disorders.",
    },
    {
      number: "03",
      title: "Rare Disease",
      text: "Access to medicines for uncommon and complex conditions.",
    },
    {
      number: "04",
      title: "Immunology",
      text: "Specialty therapies across immune-mediated conditions.",
    },
  ];

  return (
    <main className="home-page">

      {/* ================= HERO ================= */}

      <section className="home-hero">

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-topline">
          <span>01 / SPECIALTY PHARMA</span>
          <span>INDIA • GLOBAL ACCESS</span>
        </div>

        <div className="hero-content">

          <p className="hero-eyebrow">
            RARE PHARMA SUPPLY
          </p>

          <h1>
            MEDICINE
            <br />
            <span>ACCESS.</span>
          </h1>

          <div className="hero-bottom">

            <p>
              Connecting patients, hospitals and healthcare
              professionals with specialty medicines through
              a reliable and compliant supply process.
            </p>

            <Link to="/products" className="hero-button">
              Explore medicines
              <ArrowUpRight size={20} />
            </Link>

          </div>

        </div>

        <div className="hero-scroll">
          <ArrowDownRight size={18} />
          <span>SCROLL TO EXPLORE</span>
        </div>

        <div className="hero-visual" aria-hidden="true">
  <div className="hero-orbit orbit-1"></div>
  <div className="hero-orbit orbit-2"></div>

  <div className="hero-molecule">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

      </section>

      




      {/* ================= INTRO ================= */}

     <section className="home-intro">
  <div className="section-label">
    WHAT WE DO
  </div>

  <div className="intro-layout">
    <h2>
      SPECIALTY
      <br />
      MEDICINES,
      <br />
      <span>MADE ACCESSIBLE.</span>
    </h2>

    <div className="intro-copy">
      <p>
        We help connect healthcare professionals and patients
        with specialty pharmaceutical medicines that may require
        specific sourcing, documentation and prescription-based access.
      </p>

      <p>
        From oncology and hematology to rare diseases and
        immunology, our focus is on reliable medicine access
        with a clear and responsible process.
      </p>

      <Link to="/about" className="text-link">
        <span>More about Rare Pharma</span>
        <ArrowUpRight size={18} />
      </Link>
    </div>
  </div>
</section>


      {/* ================= THERAPEUTIC AREAS ================= */}

     <section className="home-areas">
  <div className="section-label">THERAPEUTIC AREAS</div>

  <div className="areas-heading">
    <h2>
      AREAS
      <br />
      <span>WE SERVE.</span>
    </h2>
  </div>

  <div className="areas-list">

    <div className="area-row">
      <span className="area-number">01</span>

      <h3>Oncology</h3>

      <p>
        Specialty medicines supporting patients across
        complex cancer care and treatment pathways.
      </p>

      <ArrowUpRight className="area-arrow" size={28} />
    </div>

    <div className="area-row">
      <span className="area-number">02</span>

      <h3>Hematology</h3>

      <p>
        Access to specialty medicines for blood disorders,
        hematologic conditions and related therapies.
      </p>

      <ArrowUpRight className="area-arrow" size={28} />
    </div>

    <div className="area-row">
      <span className="area-number">03</span>

      <h3>Rare Disease</h3>

      <p>
        Helping connect patients with medicines for
        uncommon and complex medical conditions.
      </p>

      <ArrowUpRight className="area-arrow" size={28} />
    </div>

    <div className="area-row">
      <span className="area-number">04</span>

      <h3>Immunology</h3>

      <p>
        Specialty pharmaceutical access across
        immune-mediated and complex conditions.
      </p>

      <ArrowUpRight className="area-arrow" size={28} />
    </div>

  </div>
</section>


      {/* ================= MEDICINES ================= */}

   <section className="home-featured">
  <div className="featured-heading">
    <div>
      <p className="section-label">SELECTED MEDICINES</p>
      <h2>
        FEATURED
        <br />
        <span>ACCESS.</span>
      </h2>
    </div>

    <Link to="/products" className="featured-view-all">
      View all medicines
      <ArrowUpRight size={18} />
    </Link>
  </div>

  <div className="featured-list">
    {medicines.slice(0, 6).map((medicine, index) => (
      <Link
        key={medicine.id}
        to={`/products/${medicine.slug}`}
        className="featured-card"
      >
        <div className="featured-card-top">
          <span>0{index + 1}</span>
          <span>{medicine.category}</span>
        </div>

        <div className="featured-card-image">
          <img
            src={medicine.image || "/medicines/default-medicine.png"}
            alt={medicine.name}
          />
        </div>

        <div className="featured-card-bottom">
          <div>
            <h3>{medicine.name}</h3>
            <p>{medicine.genericName}</p>
          </div>

          <div className="featured-card-arrow">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>


      {/* ================= TRUST ================= */}

    {/* ================= TRUST ================= */}

<section className="home-trust">

  <div className="trust-number">
    04
  </div>

  <div className="trust-content">

    <p className="section-label">
      OUR APPROACH
    </p>

    <h2>
      ACCESS
      <br />
      <span>WITH PURPOSE.</span>
    </h2>

    <p className="trust-description">
      We focus on making specialty medicine access
      clear, reliable and process-driven — from initial
      enquiry to availability coordination.
    </p>

    <div className="trust-process">

      <div className="trust-row">
        <span className="trust-row-number">01</span>

        <div>
          <h3>Medicine Enquiry</h3>
          <p>
            Share the medicine requirement and
            relevant patient or institutional details.
          </p>
        </div>

        <ArrowUpRight className="trust-row-arrow" size={22} />
      </div>

      <div className="trust-row">
        <span className="trust-row-number">02</span>

        <div>
          <h3>Documentation</h3>
          <p>
            Requirements are reviewed according
            to the applicable prescription process.
          </p>
        </div>

        <ArrowUpRight className="trust-row-arrow" size={22} />
      </div>

      <div className="trust-row">
        <span className="trust-row-number">03</span>

        <div>
          <h3>Availability</h3>
          <p>
            We coordinate medicine availability,
            sourcing and expected timelines.
          </p>
        </div>

        <ArrowUpRight className="trust-row-arrow" size={22} />
      </div>

      <div className="trust-row">
        <span className="trust-row-number">04</span>

        <div>
          <h3>Supply Coordination</h3>
          <p>
            The request moves forward through
            the appropriate supply and documentation flow.
          </p>
        </div>

        <ArrowUpRight className="trust-row-arrow" size={22} />
      </div>

    </div>

  </div>

</section>


{/* COMPANY HISTORY */}

<section className="about-history">

  <div className="history-intro">

    <p className="section-label">OUR HISTORY</p>

    <h2>
      FROM
      <br />
      <span>VISION TO ACCESS.</span>
    </h2>

    <p>
      A journey shaped by the need for dependable access
      to specialty and hard-to-source medicines.
    </p>

  </div>


  <div className="history-timeline">

    {/* 01 */}

    <div className="history-item">

      <div className="history-year">
        01
      </div>

      <div className="history-line"></div>

      <div className="history-content">

        <span>THE BEGINNING</span>

        <h3>
          A PURPOSE
          <br />
          TO SERVE.
        </h3>

        <p>
          Rare Pharma began with a simple objective —
          helping create a more organised path towards
          specialty medicine access.
        </p>

      </div>

    </div>


    {/* 02 */}

    <div className="history-item">

      <div className="history-year">
        02
      </div>

      <div className="history-line"></div>

      <div className="history-content">

        <span>GROWTH</span>

        <h3>
          EXPANDING
          <br />
          ACCESS.
        </h3>

        <p>
          Our focus expanded across specialty therapeutic
          areas and medicine requirements, with greater
          attention to sourcing and documentation.
        </p>

      </div>

    </div>


    {/* 03 */}

    <div className="history-item">

      <div className="history-year">
        03
      </div>

      <div className="history-line"></div>

      <div className="history-content">

        <span>TODAY</span>

        <h3>
          CONNECTING
          <br />
          REQUIREMENTS.
        </h3>

        <p>
          Today, we coordinate specialty medicine enquiries
          through a structured process focused on clarity,
          availability and responsible supply.
        </p>

      </div>

    </div>


    {/* 04 */}

    <div className="history-item">

      <div className="history-year">
        04
      </div>

      <div className="history-line"></div>

      <div className="history-content">

        <span>THE FUTURE</span>

        <h3>
          MAKING
          <br />
          ACCESS BETTER.
        </h3>

        <p>
          We continue to build a stronger, more transparent
          and technology-enabled specialty medicine access
          experience.
        </p>

      </div>

    </div>

  </div>

</section>


      {/* ================= CTA ================= */}

      <section className="home-cta">
  <div className="cta-orbit"></div>

  <p className="section-label">SPECIALTY MEDICINE ACCESS</p>

  <h2>
    NEED A
    <br />
    <span>MEDICINE?</span>
  </h2>

  <p className="cta-description">
    Tell us what you need. Our team can help coordinate
    availability, documentation and the appropriate
    supply process.
  </p>

  <Link to="/contact" className="cta-button">
    <span>Request a medicine</span>
    <ArrowUpRight size={22} />
  </Link>

  <div className="cta-meta">
    <span>RARE PHARMA</span>
    <span>01 — 05</span>
  </div>
</section>

    </main>
  );
}

export default Home;