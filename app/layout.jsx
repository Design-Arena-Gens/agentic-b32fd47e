import "./globals.css";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "Astra Market",
  description: "Shop curated collections for every moment."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <footer className="footer">
          <section className="footer-upper">
            <div>
              <h2>Stay in the loop</h2>
              <p>Join 50k+ subscribers for exclusive drops and early access.</p>
            </div>
            <form className="newsletter">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button type="submit" className="primary">
                Subscribe
              </button>
            </form>
          </section>
          <section className="footer-lower">
            <p>© {new Date().getFullYear()} Astra Market. Crafted with care.</p>
            <div className="footer-links">
              <a href="#shipping">Shipping</a>
              <a href="#returns">Returns</a>
              <a href="#support">Support</a>
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
}
