import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";

import medicines from "../data/medicines";
import { openWhatsApp } from "../utils/whatsapp";

function ProductDetails() {
  const { slug } = useParams();

  const medicine = medicines.find(
    (item) => item.slug === slug
  );

  // Medicine not found
  if (!medicine) {
    return (
      <main className="product-not-found">
        <h1>Medicine not found.</h1>

        <Link to="/products">
          Back to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="product-details-page">

      {/* BACK */}
      <Link
        to="/products"
        className="product-back"
      >
        <ArrowLeft size={18} />
        Back to medicines
      </Link>

      {/* HERO */}
      <section className="product-details-hero">

        {/* IMAGE */}
        <div className="product-details-visual">
          <div className="product-image-wrap">

            {medicine.image ? (
              <img
                src={medicine.image}
                alt={medicine.name}
                className="product-image"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <div className="product-image-empty">
                <span>{medicine.name}</span>
              </div>
            )}

          </div>
        </div>

        {/* CONTENT */}
        <div className="product-details-content">

          <div className="product-details-meta">
            <span>
              {medicine.category || "Specialty Medicine"}
            </span>

            <span>
              Specialty Medicine
            </span>
          </div>

          <h1>
            {medicine.name}
          </h1>

          <p className="product-generic">
            {medicine.genericName || "Generic name not available"}
          </p>

          <p className="product-description">
            Specialty pharmaceutical product available
            through prescription-based enquiry and
            appropriate documentation.
          </p>

        </div>
      </section>

      {/* INFORMATION */}
      <section className="product-info-grid">

        <div className="product-info-card">
          <span>01</span>

          <h3>Medicine</h3>

          <p>
            {medicine.name}
          </p>
        </div>

        <div className="product-info-card">
          <span>02</span>

          <h3>Generic</h3>

          <p>
            {medicine.genericName || "Not available"}
          </p>
        </div>

        <div className="product-info-card">
          <span>03</span>

          <h3>Therapeutic Area</h3>

          <p>
            {medicine.category || "Specialty Medicine"}
          </p>
        </div>

        <div className="product-info-card">
          <span>04</span>

          <h3>Availability</h3>

          <p>
            Subject to enquiry
          </p>
        </div>

      </section>

      {/* REQUEST */}
      <section className="product-request">

        <div>

          <div className="request-icon">
            <ShieldCheck size={24} />
          </div>

          <p className="products-eyebrow">
            MEDICINE ENQUIRY
          </p>

          <h2>
            Need this
            <br />
            medicine?
          </h2>

          <p>
            Send us your requirement and our team
            will assist you with availability,
            documentation and the next steps.
          </p>

        </div>

        <button
          type="button"
          className="product-request-button"
          onClick={() =>
            openWhatsApp(medicine.name)
          }
        >
          Request Medicine

          <ArrowUpRight size={22} />
        </button>

      </section>

    </main>
  );
}

export default ProductDetails;