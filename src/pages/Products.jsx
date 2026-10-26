import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import medicines from "../data/medicines";

function Products() {
  const [search, setSearch] = useState("");

  // Read category from URL
  const [searchParams] = useSearchParams();

  const categoryFromURL = searchParams.get("category");

  const [category, setCategory] = useState(
    categoryFromURL || "All"
  );

  // Product categories
  const categories = [
    "All",
    "Oncology",
    "Hematology",
    "Rare Disease",
    "Immunology",
    "Neurology",
    "Cardiology",
    "Infectious Disease",
    "Gastroenterology",
    "Pulmonology",
    "Endocrinology",
  ];

  // Filter medicines
  const filteredMedicines = useMemo(() => {
    return medicines.filter((medicine) => {
      const medicineName = medicine.name || "";
      const genericName = medicine.genericName || "";

      const matchesSearch =
        medicineName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        genericName
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        medicine.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="products-page">

      {/* HERO */}
      <section className="products-hero">
        <p className="products-eyebrow">
          SPECIALTY MEDICINE CATALOGUE
        </p>

        <h1>
          MEDICINES
          <br />
          <span>WITHOUT BORDERS.</span>
        </h1>

        <p className="products-intro">
          Explore our specialty medicine catalogue across
          oncology, hematology, rare diseases and other
          therapeutic areas.
        </p>
      </section>

      {/* SEARCH */}
      <section className="products-controls">

        <div className="products-search">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search medicine or generic name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="products-count">
          {filteredMedicines.length} PRODUCTS
        </div>

      </section>

      {/* FILTERS */}
      <section className="products-filters">

        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}

      </section>

      {/* PRODUCTS */}
      <section className="products-grid">

        {filteredMedicines.map((medicine, index) => (
          <Link
            to={`/products/${medicine.slug}`}
            className="medicine-card"
            key={medicine.id}
          >

            {/* IMAGE */}
            <div className="medicine-card-image">
              <img
                src={
                  medicine.image ||
                  "/medicines/default-medicine.png"
                }
                alt={medicine.name}
              />
            </div>

            {/* NUMBER */}
            <div className="medicine-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* CATEGORY */}
            <div className="medicine-category">
              {medicine.category}
            </div>

            {/* CONTENT */}
            <div className="medicine-content">
              <h2>{medicine.name}</h2>
              <p>{medicine.genericName}</p>
            </div>

            {/* ARROW */}
            <div className="medicine-arrow">
              <ArrowUpRight size={22} />
            </div>

          </Link>
        ))}

      </section>

      {/* EMPTY STATE */}
      {filteredMedicines.length === 0 && (
        <div className="products-empty">
          <h2>No medicine found.</h2>
          <p>
            Try another medicine name or category.
          </p>
        </div>
      )}

    </main>
  );
}

export default Products;