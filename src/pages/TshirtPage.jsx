import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Preloader from '../components/Preloader'
import ScrollToTop from '../components/ScrollToTop'
import CustomCursor from '../components/CustomCursor'

const TshirtPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    // Initialize WOW animations
    if (window.WOW) {
      new window.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
      }).init()
    }
  }, [])

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
    
    const posterItems = document.querySelectorAll('.poster-item')
    posterItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    })
  }

  return (
    <>
      <Preloader />
      <ScrollToTop />
      <CustomCursor />
      <Header />

      {/* Hero Section */}
      <section className="vm-hero-section">
        <div className="image-heading">
          {/* Hero content can be added here */}
        </div>
      </section>

      {/* Poster Gallery Section */}
      <section className="poster-gallery">
        {/* Filter controls */}
        <div className="controls">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All Posters
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'video editing' ? 'active' : ''}`}
            onClick={() => handleFilterClick('video editing')}
          >
            Video Editing
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'graphics designing' ? 'active' : ''}`}
            onClick={() => handleFilterClick('graphics designing')}
          >
            Graphics designing
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'poster designing' ? 'active' : ''}`}
            onClick={() => handleFilterClick('poster designing')}
          >
            Poster designing
          </button>
        </div>

        <div className="poster-grid">
          {/* Poster 1 */}
          <div className="poster-item" data-category="graphics designing">
            <img src="/vedio editing/design5.jpg" alt="Poster 1" />
            <h3>Adidas</h3>
            <div className="product-item">
              <p className="item-info">Marketing Poster</p>
              <p className="item-price">$15</p>
            </div>
          </div>

          {/* Poster 2 */}
          <div className="poster-item" data-category="video editing">
            <img src="/vedio editing/design.jpg" alt="Poster 2" />
            <h3>Adidas</h3>
            <div className="product-item">
              <p className="item-info">Event Promotion</p>
              <p className="item-price">$15</p>
            </div>
          </div>

          {/* Poster 3 */}
          <div className="poster-item">
            <img src="/vedio editing/design.jpg" alt="Poster 3" />
            <h3>Adidas</h3>
            <div className="product-item">
              <p className="item-info">Social Media Ad</p>
              <p className="item-price">$15</p>
            </div>
          </div>

          {/* Poster 4 */}
          <div className="poster-item" data-category="video editing">
            <img src="/vedio editing/design.jpg" alt="Poster 4" />
            <h3>Adidas</h3>
            <div className="product-item">
              <p className="item-info">Social Media Ad</p>
              <p className="item-price">$15</p>
            </div>
          </div>

          {/* Poster 5 */}
          <div className="poster-item" data-category="video editing">
            <img src="/vedio editing/design.jpg" alt="Poster 5" />
            <h3>Adidas</h3>
            <div className="product-item">
              <p className="item-info">Social Media Ad</p>
              <p className="item-price">$15</p>
            </div>
          </div>

          {/* Poster 6 */}
          <div className="poster-item" data-category="video editing">
            <img src="/vedio editing/design.jpg" alt="Poster 6" />
            <h3>Adidas</h3>
            <div className="product-item">
              <p className="item-info">Social Media Ad</p>
              <p className="item-price">$15</p>
            </div>
          </div>

          {/* Poster 7 */}
          <div className="poster-item" data-category="graphics designing">
            <img src="/vedio editing/design.jpg" alt="Poster 7" />
            <h3>Adidas</h3>
            <div className="product-item">
              <p className="item-info">Social Media Ad</p>
              <p className="item-price">$15</p>
            </div>
          </div>

          {/* Poster 8 */}
          <div className="poster-item" data-category="graphics designing">
            <img src="/vedio editing/design.jpg" alt="Poster 8" />
            <h3>Adidas</h3>
            <div className="product-item">
              <p className="item-info">Social Media Ad</p>
              <p className="item-price">$15</p>
            </div>
          </div>

          {/* Poster 9 */}
          <div className="poster-item" data-category="graphics designing">
            <img src="/vedio editing/design.jpg" alt="Poster 9" />
            <h3>Adidas</h3>
            <div className="product-item">
              <p className="item-info">Social Media Ad</p>
              <p className="item-price">$15</p>
            </div>
          </div>

          {/* Poster 10 */}
          <div className="poster-item" data-category="graphics designing">
            <img src="/vedio editing/design.jpg" alt="Poster 10" />
            <h3>Adidas</h3>
            <div className="product-item">
              <p className="item-info">Social Media Ad</p>
              <p className="item-price">$15</p>
            </div>
          </div>

          {/* Poster 11 */}
          <div className="poster-item" data-category="graphics designing">
            <img src="/vedio editing/design.jpg" alt="Poster 11" />
            <h3>Adidas</h3>
            <div className="product-item">
              <p className="item-info">Social Media Ad</p>
              <p className="item-price">$15</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default TshirtPage