import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Preloader from '../components/Preloader'
import ScrollToTop from '../components/ScrollToTop'
import CustomCursor from '../components/CustomCursor'

const Home = () => {
  const videoRef = useRef(null)
  const carouselRef = useRef(null)
  const indexRef = useRef(0)

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

    // Video autoplay on scroll
    const video = videoRef.current
    if (video) {
      let userInteracted = false

      const handleClick = () => {
        userInteracted = true
      }

      document.body.addEventListener("click", handleClick)

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().then(() => {
                if (userInteracted) {
                  video.muted = false
                }
              }).catch((e) => {
                console.log("Play failed:", e)
              })
            } else {
              video.pause()
            }
          })
        },
        { threshold: 0.5 }
      )

      observer.observe(video)

      return () => {
        document.body.removeEventListener("click", handleClick)
        observer.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    // Blog carousel functionality
    const carousel = carouselRef.current
    if (!carousel) return

    const cards = carousel.querySelectorAll('.blog-card')
    const visibleCards = 3
    const totalCards = cards.length
    const cardWidth = cards[0]?.offsetWidth + 20 || 320

    const updateCarousel = () => {
      const maxIndex = totalCards - visibleCards
      if (indexRef.current > maxIndex) indexRef.current = 0
      if (indexRef.current < 0) indexRef.current = maxIndex
      carousel.style.transform = `translateX(-${indexRef.current * cardWidth}px)`
    }

    const handleRightClick = () => {
      indexRef.current++
      updateCarousel()
    }

    const handleLeftClick = () => {
      indexRef.current--
      updateCarousel()
    }

    const rightBtn = document.querySelector('.right-btn')
    const leftBtn = document.querySelector('.left-btn')

    if (rightBtn) rightBtn.addEventListener('click', handleRightClick)
    if (leftBtn) leftBtn.addEventListener('click', handleLeftClick)

    // Auto slide
    const autoSlide = setInterval(() => {
      indexRef.current++
      updateCarousel()
    }, 4000)

    return () => {
      if (rightBtn) rightBtn.removeEventListener('click', handleRightClick)
      if (leftBtn) leftBtn.removeEventListener('click', handleLeftClick)
      clearInterval(autoSlide)
    }
  }, [])

  useEffect(() => {
    // Copy logos slide for infinite animation
    const logosSlide = document.querySelector('.logos-slide')
    if (logosSlide && logosSlide.parentNode) {
      const copy = logosSlide.cloneNode(true)
      logosSlide.parentNode.appendChild(copy)
    }
  }, [])

  return (
    <>
      <Preloader />
      <ScrollToTop />
      <CustomCursor />
      <Header />

      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h2>visual marketer</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-2s">
                <div className="clienti-reviews">
                  <ul className="clienti-profile">
                    <li><img className="img-fluid" src="/assets/images/avatar/01.jpg" alt="client" /></li>
                    <li><img className="img-fluid" src="/assets/images/avatar/02.jpg" alt="client" /></li>
                    <li><img className="img-fluid" src="/assets/images/avatar/03.jpg" alt="client" /></li>
                  </ul>
                  <div className="reviews">100+ reviews<span>(4.96 of 5)</span>
                    <p>Five-star reviews from my esteemed clients.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="/assets/images/about/me.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <p>Hi, I'm Walker, a passionate UX Designer dedicated to creating user-friendly digital experiences.</p>
                <a className="theme-btn" href="index.html">Get In touch</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="company-design-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Company I Worked With</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Work with section */}
      <section id="work-with" className="work-with">
        <div className="logos">
          <div className="logos-slide">
            <img src="/company/afsin.png" alt="" className="afsin" />
            <img src="/company/kitab.png" alt="" className="kitab" />
            <img src="/company/LogoW.png" alt="" className="LogoW" />
            <img src="/company/marchbid.png" alt="" className="marchbid" />
            <img src="/company/Asset 1.png" alt="" className="Asset_1" />
            <img src="/company/Asset 2.png" alt="" className="Asset_2" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section" id="video-section">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            id="autoplay-video"
            muted
            playsInline
            controls
            preload="auto"
            poster="your-thumbnail.jpg"
          >
            {/* Video source will be added later */}
            <source src="/vedio editing/youtube.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="recentworks">
        <h2>my recent works</h2>
        <div className="work-container"> 
          
          <div className="works t-shirt">
            <Link to="/tshirt">
              <h2>a poster design</h2>
            </Link>
            
            <div className="tshirt-item">
              <img src="/vedio editing/design5.jpg" alt="T-shirt Design 1" />
              <h2>Adidas</h2>
              <div className="product-item">
                <p className="item-info">E-Commerce Website</p>
                <p className="item-price">$15</p>
              </div>
            </div>
            
            <div className="tshirt-item">
              <img src="/vedio editing/design.jpg" alt="T-shirt Design 2" />
              <h2>Adidas</h2>
              <div className="product-item">
                <p className="item-info">E-Commerce Website</p>
                <p className="item-price">$15</p>
              </div>
            </div>
            
            <div className="tshirt-item">
              <img src="/vedio editing/design.jpg" alt="T-shirt Design 3" />
              <h2>Adidas</h2>
              <div className="product-item">
                <p className="item-info">E-Commerce Website</p>
                <p className="item-price">$15</p>
              </div>
            </div>
          </div>

          <div className="works video-editing">
            <Link to="/tshirt">
              <h2>video-editing</h2>
            </Link>
            
            <div className="video-item">
              <video src="/vedio editing/2.mp4" autoPlay muted loop playsInline></video>
              <h2>Adidas</h2>
              <div className="product-item">
                <p className="item-info">E-Commerce Website</p>
                <p className="item-price">$15</p>
              </div>
            </div>
            
            <div className="video-item">
              <video src="/vedio editing/2.mp4" autoPlay muted loop playsInline></video>
              <h2>Adidas</h2>
              <div className="product-item">
                <p className="item-info">E-Commerce Website</p>
                <p className="item-price">$15</p>
              </div>
            </div>
            
            <div className="video-item">
              <video src="/vedio editing/2.mp4" autoPlay muted loop playsInline></video>
              <h2>Adidas</h2>
              <div className="product-item">
                <p className="item-info">E-Commerce Website</p>
                <p className="item-price">$15</p>
              </div>
            </div>
          </div>

          <div className="works designing">
            <Link to="/tshirt">
              <h2>tshirt designing</h2>
            </Link>
            
            <div className="logo-item">
              <img src="/vedio editing/tshirt.jpg" alt="Logo Design 1" />
              <h2>Adidas</h2>
              <div className="product-item">
                <p className="item-info">E-Commerce Website</p>
                <p className="item-price">$15</p>
              </div>
            </div>
            
            <div className="logo-item">
              <img src="/vedio editing/tshirt.jpg" alt="Logo Design 2" />
              <h2>Adidas</h2>
              <div className="product-item">
                <p className="item-info">E-Commerce Website</p>
                <p className="item-price">$15</p>
              </div>
            </div>
            
            <div className="logo-item">
              <img src="/vedio editing/tshirt.jpg" alt="Logo Design 3" />
              <h2>Adidas</h2>
              <div className="product-item">
                <p className="item-info">E-Commerce Website</p>
                <p className="item-price">$15</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Testimonials</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="testimonial-item wow fadeInUp delay-0-2s">
                <div className="author">
                  <img src="/assets/images/testimonials/author1.jpg" alt="Author" />
                </div>
                <div className="text">Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.</div>
                <div className="testi-des">
                  <h5>Zonathon Doe</h5><span>CEO & Founder X</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="testimonial-item wow fadeInUp delay-0-4s">
                <div className="author">
                  <img src="/assets/images/testimonials/author2.jpg" alt="Author" />
                </div>
                <div className="text">Asian planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.</div>
                <div className="testi-des">
                  <h5>Martin Smith</h5><span>CEO & Founder Google</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-item wow fadeInUp delay-0-6s">
                <div className="author">
                  <img src="/assets/images/testimonials/author3.jpg" alt="Author" />
                </div>
                <div className="text">Hello planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.</div>
                <div className="testi-des">
                  <h5>Methail Dev</h5><span>Managing Director - Paydesk</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-item wow fadeInUp delay-0-8s">
                <div className="author">
                  <img src="/assets/images/testimonials/author4.jpg" alt="Author" />
                </div>
                <div className="text">Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.</div>
                <div className="testi-des">
                  <h5>Eliana tweet</h5><span>CEO & Founder Tesla</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-item wow fadeInUp delay-0-9s">
                <div className="author">
                  <img src="/assets/images/testimonials/author5.jpg" alt="Author" />
                </div>
                <div className="text">Yelp planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.</div>
                <div className="testi-des">
                  <h5>Henry Clark</h5><span>Founder Oxyzen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <button className="nav-btn left-btn">←</button>

        <div className="blog-carousel-wrapper">
          <div className="blog-carousel" ref={carouselRef}>
            <div className="blog-card">Blog 1</div>
            <div className="blog-card">Blog 2</div>
            <div className="blog-card">Blog 3</div>
            <div className="blog-card">Blog 4</div>
            <div className="blog-card">Blog 5</div>
            <div className="blog-card">Blog 6</div>
            <div className="blog-card">Blog 7</div>
            <div className="blog-card">Blog 8</div>
            <div className="blog-card">Blog 9</div>
            <div className="blog-card">Blog 10</div>
            <div className="blog-card">Blog 11</div>
            <div className="blog-card">Blog 12</div>
          </div>
        </div>

        <button className="nav-btn right-btn">→</button>
      </section>

      <Footer />
    </>
  )
}

export default Home