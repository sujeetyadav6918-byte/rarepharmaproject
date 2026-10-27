import { ArrowUpRight } from "lucide-react";

const insights = [
  {
    number: "01",
    category: "ONCOLOGY",
    title: "Specialty medicines and patient access",
    description:
      "Understanding the importance of reliable access to specialty medicines for patients and healthcare professionals.",
  },
  {
    number: "02",
    category: "HEMATOLOGY",
    title: "Updates in hematology medicines",
    description:
      "Explore information related to specialty medicines used across hematology and rare blood disorders.",
  },
  {
    number: "03",
    category: "RARE DISEASE",
    title: "Access to rare disease therapies",
    description:
      "Learn about the challenges involved in accessing medicines for rare and complex conditions.",
  },
  {
    number: "04",
    category: "PHARMA",
    title: "Medicine availability and documentation",
    description:
      "Why prescription, product documentation, supplier information and proper verification matter when arranging specialty medicines.",
  },
];

function Insights() {
  return (
    <main className="insights-page">
      {/* HERO */}
      <section className="insights-hero">
        <p className="products-eyebrow">INSIGHTS</p>

        <h1>
          Pharma
          <br />
          <span>insights.</span>
        </h1>

        <p>
          Explore information across specialty medicines,
          therapeutic areas and patient access.
        </p>
      </section>

      {/* INSIGHTS */}
      <section className="insights-list-section">
        <div className="insights-section-header">
          <div>
            <p className="products-eyebrow">LATEST INFORMATION</p>
            <h2>Explore our insights.</h2>
          </div>

          <span className="insights-count">
            {String(insights.length).padStart(2, "0")}
          </span>
        </div>

        <div className="insights-list">
          {insights.map((insight) => (
            <article
              key={insight.number}
              className="insight-card"
            >
              <span className="insight-number">
                {insight.number}
              </span>

              <div className="insight-content">
                <span className="insight-category">
                  {insight.category}
                </span>

                <h3>{insight.title}</h3>

                <p>{insight.description}</p>
              </div>

              <div className="insight-arrow">
                <ArrowUpRight size={22} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Insights;