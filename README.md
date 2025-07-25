# Visual Marketer Portfolio - React Version

A modern, responsive portfolio website built with React and Vite, converted from the original HTML/CSS/JS version while maintaining the exact same design and functionality.

## 🚀 Features

- **React 18** with modern hooks and functional components
- **Vite** for fast development and building
- **React Router** for client-side routing
- **GSAP** for smooth animations
- **Bootstrap 5** for responsive grid system
- **Custom cursor** with smooth animations
- **Video autoplay** on scroll intersection
- **Infinite logo carousel**
- **Blog carousel** with navigation
- **Contact form** with validation
- **Preloader** with SVG animations
- **Scroll to top** with progress indicator
- **Mobile responsive** design
- **WOW.js** animations on scroll

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with dropdowns
│   ├── Footer.jsx          # Footer with social links
│   ├── Preloader.jsx       # Loading animation
│   ├── ScrollToTop.jsx     # Scroll to top button
│   └── CustomCursor.jsx    # Custom cursor component
├── pages/
│   ├── Home.jsx           # Main homepage
│   ├── TshirtPage.jsx     # Portfolio gallery page
│   └── ContactPage.jsx    # Contact form page
├── styles/
│   └── tshirt.css         # Additional styles for portfolio page
├── hooks/
│   └── useWOW.js          # Custom hook for WOW animations
├── utils/
│   └── animations.js      # Animation utilities
├── App.jsx                # Main app component
├── App.css               # App-specific styles
├── index.css             # Global styles and imports
└── main.jsx              # Entry point
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd visual-marketer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📦 Dependencies

### Main Dependencies
- `react` - UI library
- `react-dom` - React DOM renderer
- `react-router-dom` - Client-side routing
- `gsap` - Animation library
- `jquery` - For legacy script compatibility
- `bootstrap` - CSS framework
- `slick-carousel` - Carousel component
- `wow.js` - Scroll animations

### Dev Dependencies
- `@vitejs/plugin-react` - Vite React plugin
- `vite` - Build tool
- `eslint` - Code linting

## 🎨 Design Features

- **Exact same design** as the original HTML version
- **Responsive layout** that works on all devices
- **Smooth animations** using GSAP
- **Custom cursor** with hover effects
- **Video integration** with autoplay on scroll
- **Interactive carousels** for logos and blog posts
- **Filter functionality** on portfolio page
- **Contact form** with validation and submission

## 📱 Pages

1. **Home Page** (`/`)
   - Hero section with profile image
   - Company logos carousel
   - Featured video section
   - Recent works showcase
   - Testimonials section
   - Blog carousel

2. **Portfolio Page** (`/tshirt`)
   - Filter controls for different categories
   - Grid layout for portfolio items
   - Hover effects and animations

3. **Contact Page** (`/contact`)
   - Contact form with validation
   - Modern design with decorative elements
   - Form submission handling

## 🔧 Customization

### Adding Videos
Place your video files in the `public/vedio editing/` directory and update the video sources in the components:

```jsx
<video src="/vedio editing/your-video.mp4" />
```

### Updating Images
Place images in the `public/` directory and reference them with absolute paths:

```jsx
<img src="/path/to/your/image.jpg" alt="Description" />
```

### Modifying Styles
- Global styles: `src/index.css`
- Component-specific styles: `src/App.css`
- Portfolio page styles: `src/styles/tshirt.css`

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is for portfolio purposes. All rights reserved.

## 🤝 Contributing

This is a personal portfolio project. If you find any bugs or have suggestions, please feel free to open an issue.

---

**Note**: Make sure to add your actual video files to the `public/vedio editing/` directory before running the project. The video paths are currently set up to expect files in that location.