# DeeGee Graphics - Creative Design Studio

A modern, responsive React web application for a creative design studio featuring smooth GSAP animations and a beautiful UI.

## 🚀 Features

- **Modern React Architecture** - Built with React 18 and Vite for optimal performance
- **Smooth Animations** - GSAP (GreenSock Animation Platform) for professional animations
- **5 Main Routes**:
  - Home - Hero section with features and CTA
  - Services - Comprehensive service offerings
  - Projects - Portfolio with filtering capabilities
  - About Us - Team and company values
  - Contact - Contact form and information
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Beautiful UI** - Modern gradient designs with Lucide React icons
- **Fast Navigation** - React Router for seamless page transitions

## 🛠️ Tech Stack

- **React 18.3** - UI library
- **Vite** - Build tool and dev server
- **React Router 6** - Client-side routing
- **GSAP 3.12** - Animation library
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
deegeegraphics/
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── AboutUs.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Animations
GSAP animations are configured in each page component. Modify timing, easing, and effects as needed.

## 📝 License

This project is created for DeeGee Graphics.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
