import React from 'react'
const Project2 = () => {
const categories = [
  "For You",
  "Fashion",
  "Mobiles",
  "Beauty",
  "Electronics",
  "Home",
  "Appliances",
  "Toys",
  "Food",
  "Auto",
  "Bikes",
  "Sports",
  "Books",
  "Furniture",
];

const topDeals = [
  {
    id: 1,
    title: "boAt, realme, Mivi & more",
    offer: "Min 50% Off",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Big Savings",
    offer: "From ₹99",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Classic Tee Shirts",
    offer: "Min 70% Off",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Grab Big Discounts!",
    offer: "Min 40% Off",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
  },
];

const fashionDeals = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
    title: "Stylish Shoes",
    price: "From ₹499",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop",
    title: "Wallet Collections",
    price: "Min 60% Off",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=600&auto=format&fit=crop",
    title: "Travel Bags",
    price: "From ₹799",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
    title: "Running Shoes",
    price: "Up to 70% Off",
  },
];

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo-section">
          <div className="logo-box">Flipkart</div>
          <div className="travel-box">✈ Travel</div>
        </div>

        <div className="top-right">
          <p>
            📍 Location not set <span>Select delivery location</span>
          </p>
        </div>
      </header>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
        />

        <div className="nav-links">
          <span>👤 Login</span>
          <span>More</span>
          <span>🛒 Cart</span>
        </div>
      </div>

      {/* Categories */}
      <div className="categories">
        {categories.map((item, index) => (
          <div className="category" key={index}>
            <div className="icon"></div>
            <p>{item}</p>
          </div>
        ))}
      </div>

      {/* Top Deals */}
      <section className="deal-section blue">
        <div className="card-row">
          {topDeals.map((item) => (
            <div className="deal-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.offer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fashion Deals */}
      <section className="fashion-section">
        <div className="fashion-header">
          <h2>Best Value Deals on Fashion</h2>
          <button>➜</button>
        </div>

        <div className="card-row">
          {fashionDeals.map((item) => (
            <div className="fashion-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
}

export default Project2
