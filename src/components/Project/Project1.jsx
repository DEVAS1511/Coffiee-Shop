import React, { useState } from "react";

const Project1 = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (name, price) => {
    const item = {
      name,
      price,
    };
    setCart([...cart, item]);
    alert(`${name} Added To Cart ☕`);
  };
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Cart is Empty 🛒");
      return;
    }
    alert("Order Placed Successfully ✅");
    setCart([]);
  };
  return (
    <div className="website">
      <header className="header">
        <div className="container navbar">
          <div className="logo">
            <i className="fa-solid fa-mug-hot"></i>
            <span>BrewHaven</span>
          </div>

          <nav>
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="nav-buttons">
            <button className="btn-outline">Sign In</button>

            <button className="btn-main">Order Online</button>
          </div>
        </div>
      </header>
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="subtitle">
              <span className="line"></span>
              <i className="fa-solid fa-seedling"></i>
              Ethically Sourced Beans
            </div>

            <h1>
              Haadhya Coffee <br />
              <span>Crafted with Passion</span>
            </h1>

            <p>
              Discover single-origin coffees roasted to perfection in small
              batches for exceptional flavor.
            </p>

            <div className="hero-buttons">
              <button className="btn-main">Explore Our Blends</button>

              <button className="btn-outline">Visit Our Cafe</button>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              alt="coffee"
            />
          </div>
        </div>
      </section>
      <section className="products" id="products">
        <div className="container">
          <div className="section-title">
            <h2>Signature Coffee Blends</h2>

            <p>
              Each batch is carefully roasted to highlight the unique
              characteristics of the beans.
            </p>
          </div>

          <div className="product-grid">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1517701604599-bb29b565090c"
                alt="coffee"
              />

              <div className="card-content">
                <div className="tag">BESTSELLER</div>

                <h3>Ethiopian Yirgacheffe</h3>

                <p>
                  Floral notes with bright citrus acidity and a tea-like body.
                </p>

                <div className="card-footer">
                  <span>₹200</span>

                  <button
                    onClick={() => addToCart("Ethiopian Yirgacheffe", 200)}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1494314671902-399b18174975"
                alt="coffee"
              />

              <div className="card-content">
                <h3>Colombian Supremo</h3>

                <p>
                  Rich caramel sweetness with nutty undertones and balanced
                  acidity.
                </p>

                <div className="card-footer">
                  <span>₹250</span>

                  <button onClick={() => addToCart("Colombian Supremo", 250)}>
                    Order
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                alt="coffee"
              />

              <div className="card-content">
                <div className="tag">NEW</div>

                <h3>Dark Roast Espresso</h3>

                <p>
                  Bold and intense with dark chocolate notes and creamy
                  mouthfeel.
                </p>

                <div className="card-footer">
                  <span>₹300</span>

                  <button onClick={() => addToCart("Dark Roast Espresso", 300)}>
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="cart">
            <h2>Your Cart 🛒</h2>

            {cart.length === 0 ? (
              <p>No Items Added</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - ₹{item.price}
                  </li>
                ))}
              </ul>
            )}

            <h3>Total: ₹{total}</h3>

            <button className="place-order-btn" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </div>
      </section>
      <footer id="contact">
        <div className="container footer-container">
          <div>
            <h3>About BrewHaven</h3>
            <p>
              Premium coffee roasters dedicated to quality, sustainability and
              perfect taste.
            </p>
          </div>
          <div>
            <h3>Contact</h3>
            <p> Trichy, Tamil Nadu</p>
            <p> 8765477777</p>
            <p>coffee@gmail.com</p>
          </div>
        </div>

        <div className="copyright">© 2026 BrewHaven Coffee Roasters</div>
      </footer>
    </div>
  );
};

export default Project1;
