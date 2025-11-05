"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  categories,
  collections,
  filters,
  highlights,
  stories
} from "../data/products";

const productCatalog = [
  {
    id: "smoke-sofa",
    name: "Smoke Velvet Sofa",
    price: "$1,280",
    collection: "Living",
    description: "Modular seating with recycled velvet and kiln-dried oak frame.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "ether-desk",
    name: "Ether Standing Desk",
    price: "$890",
    collection: "Workspace",
    description:
      "Solid ash workstation with dual motor lift and cable-free silhouette.",
    image:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "mist-diffuser",
    name: "Mist Diffuser",
    price: "$118",
    collection: "Wellness",
    description:
      "Ultrasonic ceramic diffuser with sunrise light cycle and aromatherapy oils.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "loom-throw",
    name: "Loom Organic Throw",
    price: "$168",
    collection: "Living",
    description:
      "Handwoven throw made with organic Peruvian cotton and artisanal dyeing.",
    image:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "orbit-lamp",
    name: "Orbit Desk Lamp",
    price: "$210",
    collection: "Workspace",
    description:
      "Seamless glass lamp with adjustable warmth and wireless phone charging base.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "aura-ritual",
    name: "Aura Ritual Kit",
    price: "$92",
    collection: "Gifts",
    description:
      "Mindful gifting bundle with botanical incense, journals, and hand-blown holders.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
  }
];

function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="filters">
      {filters.map((label) => (
        <button
          key={label}
          type="button"
          className={activeFilter === label ? "active" : ""}
          onClick={() => onFilterChange(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <figure>
        <Image src={product.image} alt={product.name} fill sizes="33vw" />
      </figure>
      <div className="product-body">
        <div className="product-meta">
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="tag">{product.collection}</div>
        <button type="button" className="primary">
          Add to cart
        </button>
      </div>
    </article>
  );
}

function CollectionCard({ product }) {
  return (
    <article className="product-card">
      <figure>
        <Image src={product.image} alt={product.name} fill sizes="33vw" />
      </figure>
      <div className="product-body">
        <div className="product-meta">
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="tag">{product.tag}</div>
        <button type="button" className="ghost">
          Explore collection
        </button>
      </div>
    </article>
  );
}

function CategoryCard({ category }) {
  return (
    <article className="product-card">
      <figure>
        <Image src={category.image} alt={category.name} fill sizes="25vw" />
      </figure>
      <div className="product-body">
        <strong>{category.name}</strong>
        <p className="product-description">{category.description}</p>
        <div className="tag">15+ curated picks</div>
      </div>
    </article>
  );
}

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCatalog = useMemo(() => {
    if (activeFilter === "All") {
      return productCatalog;
    }

    return productCatalog.filter(
      (product) => product.collection === activeFilter
    );
  }, [activeFilter]);

  return (
    <>
      <section className="hero">
        <div className="hero-card">
          <h1>Elevate every corner with curated finds & future classics.</h1>
          <p>
            Astra Market brings together independent makers and planet-first
            brands. Shop newly dropped collections and timeless staples designed
            for modern living.
          </p>
          <div className="nav-actions">
            <button type="button" className="primary">
              Shop new arrivals
            </button>
            <button type="button" className="ghost">
              Discover stories
            </button>
          </div>
          <div className="badges">
            <span className="badge">Climate Neutral</span>
            <span className="badge">Rated 4.9 ★</span>
            <span className="badge">Carbon Positive Shipping</span>
          </div>
        </div>
        <div className="hero-images">
          <Image
            src="https://images.unsplash.com/photo-1616627452870-5dcd01f9ca05?auto=format&fit=crop&w=900&q=80"
            alt="Curated home decor"
            width={500}
            height={500}
          />
          <Image
            src="https://images.unsplash.com/photo-1616628187590-62d9df549f71?auto=format&fit=crop&w=900&q=80"
            alt="Relaxed living space"
            width={500}
            height={500}
          />
          <Image
            src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=80"
            alt="Workspace essentials"
            width={500}
            height={500}
          />
          <Image
            src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=900&q=80"
            alt="Wellness scents"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section id="categories">
        <div className="section-heading">
          <h2>Shop by category</h2>
          <p>Curated edits tailored to every space in your life.</p>
        </div>
        <div className="grid">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section id="collections">
        <div className="section-heading">
          <h2>Featured collections</h2>
          <p>Limited-run drops from our community of designers.</p>
        </div>
        <div className="grid">
          {collections.map((product) => (
            <CollectionCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="catalog">
        <div className="section-heading">
          <h2>New this week</h2>
          <p>Handpicked pieces we&apos;re loving right now.</p>
        </div>
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {filteredCatalog.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="callout" id="stories">
        <div>
          <h3>Purposeful design, end-to-end.</h3>
          <p>
            From sourcing raw materials to delivering your order, we audit every
            touchpoint to minimize waste and champion circular design. Every
            purchase supports reforestation projects across the globe.
          </p>
          <button type="button" className="primary">
            Explore our impact report
          </button>
        </div>
        <ul className="callout-list">
          {highlights.map((item, index) => (
            <li key={item.id}>
              <span>{index + 1}</span>
              <div>
                <div>{item.title}</div>
                <small style={{ color: "var(--muted)", fontWeight: 400 }}>
                  {item.copy}
                </small>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="section-heading">
          <h2>Journal stories</h2>
          <p>Discover rituals, styling tips, and maker interviews.</p>
        </div>
        <div className="stories">
          {stories.map((story) => (
            <article key={story.id} className="story-card">
              <h4>{story.title}</h4>
              <p>{story.excerpt}</p>
              <div className="story-footer">
                <span>{story.author}</span>
                <span>{story.date}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
