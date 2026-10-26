import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import medicines from "../../data/medicines";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Insights", path: "/insights" },
];

const therapeuticAreas = [
  "Oncology",
  "Hematology",
  "Neurology",
  "Rare Disease",
  "Immunology",
  "Nephrology",
  "Gastroenterology",
  "Cardiology",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState("Oncology");

  const categoryMedicines = medicines
    .filter((medicine) => medicine.category === activeCategory)
    .slice(0, 5);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        {/* LOGO */}

        <Link to="/" className="navbar-logo">
          <img
            src="/logo/rare-pharma-logo.png"
            alt="Rare Pharma"
          />

          <div className="navbar-logo-text">
            {/* Optional text */}
          </div>
        </Link>


        {/* DESKTOP NAVIGATION */}

        <nav className="navbar-links">

          <Link to="/" className="navbar-link">
            Home
          </Link>

          <Link to="/about" className="navbar-link">
            About
          </Link>


          {/* PRODUCTS */}

          <div
            className="navbar-products"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >

            <Link
              to="/products"
              className="navbar-link products-trigger"
            >
              Products

              <ChevronDown size={15} />
            </Link>


            {/* MEGA MENU */}

            <div
              className={`products-mega-menu ${
                productsOpen ? "show" : ""
              }`}
            >

              {/* HEADER */}

              <div className="mega-header">

                <div>
                  <span>THERAPEUTIC AREAS</span>

                  <h3>
                    Specialty Medicines
                  </h3>
                </div>

                <Link
                  to="/products"
                  className="mega-view-all"
                >
                  View all

                  <ArrowUpRight size={17} />
                </Link>

              </div>


              {/* MEGA MENU CONTENT */}

              <div className="mega-menu-content">


                {/* LEFT SIDE */}

                <div className="mega-menu-left">

                  <span className="mega-label">
                    EXPLORE BY THERAPEUTIC AREA
                  </span>


                  {therapeuticAreas.map(
                    (area, index) => (

                      <Link
                        key={area}
                        to={`/products?category=${encodeURIComponent(
                          area
                        )}`}
                        className={`mega-category ${
                          activeCategory === area
                            ? "active"
                            : ""
                        }`}
                        onMouseEnter={() =>
                          setActiveCategory(area)
                        }
                      >

                        <span className="mega-category-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <strong>
                          {area}
                        </strong>

                        <ArrowUpRight
                          size={16}
                        />

                      </Link>

                    )
                  )}

                </div>


                {/* RIGHT SIDE */}

                <div className="mega-menu-right">

                  <span className="mega-label">
                    {activeCategory.toUpperCase()}
                  </span>


                  <div className="mega-category-heading">

                    <div>

                      <small>
                        FEATURED MEDICINES
                      </small>

                      <h3>
                        {activeCategory}
                      </h3>

                    </div>

                    <span>
                      {categoryMedicines.length}
                    </span>

                  </div>


                  {/* MEDICINES */}

                  <div className="mega-medicine-list">

                    {categoryMedicines.length > 0 ? (

                      categoryMedicines.map(
                        (medicine) => (

                          <Link
                            key={medicine.id}
                            to={`/products/${medicine.slug}`}
                            className="mega-medicine"
                          >

                            <div>

                              <strong>
                                {medicine.name}
                              </strong>

                              <small>
                                {medicine.genericName}
                              </small>

                            </div>

                            <ArrowUpRight
                              size={17}
                            />

                          </Link>

                        )
                      )

                    ) : (

                      <div className="mega-empty">

                        <span>
                          MEDICINE CATALOGUE
                        </span>

                        <p>
                          Explore our complete
                          specialty medicine catalogue.
                        </p>

                      </div>

                    )}

                  </div>


                  {/* BOTTOM LINKS */}

                  <div className="mega-right-footer">

                    <Link to="/products">
                      Explore all medicines

                      <ArrowUpRight
                        size={17}
                      />
                    </Link>

                    <Link to="/contact">
                      Request a medicine

                      <ArrowUpRight
                        size={17}
                      />
                    </Link>

                  </div>

                </div>

              </div>


              {/* FOOTER */}

              <div className="mega-footer">

                <span>
                  {medicines.length}+ medicines
                  in catalogue
                </span>

                <Link to="/products">
                  Explore complete catalogue

                  <ArrowUpRight
                    size={17}
                  />
                </Link>

              </div>

            </div>

          </div>


          <Link
            to="/insights"
            className="navbar-link"
          >
            Insights
          </Link>

        </nav>


        {/* CONTACT */}

        <Link
          to="/contact"
          className="navbar-contact"
        >
          <span>Contact</span>

          <ArrowUpRight size={18} />
        </Link>


        {/* MOBILE BUTTON */}

        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

      </header>


      {/* ================= MOBILE MENU ================= */}

      <div
        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}
      >

        <button
          className="mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={26} />
        </button>


        <div className="mobile-menu-content">

          {navItems.map((item) => (

            <Link
              key={item.label}
              to={item.path}
              onClick={() =>
                setMenuOpen(false)
              }
              className="mobile-link"
            >

              {item.label}

              <ArrowUpRight
                size={25}
              />

            </Link>

          ))}


          <Link
            to="/contact"
            onClick={() =>
              setMenuOpen(false)
            }
            className="mobile-contact"
          >

            Request Medicine

            <ArrowUpRight size={20} />

          </Link>

        </div>

      </div>
    </>
  );
}

export default Navbar;