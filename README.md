# 🍽️ Mesob Restaurant - Modern Full Stack Application

A beautiful, responsive Ethiopian restaurant website built with React frontend and Node.js backend, featuring authentic Ethiopian cuisine alongside international favorites.

![Restaurant Website](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Supabase](https://img.shields.io/badge/Database-Supabase-orange)

## 🌟 Live Demo

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **GitHub Repository**: https://github.com/tsedeniyafiseha/restaurant-website

## ✨ Features

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with modern breakpoints
- **Smooth Animations**: Hover effects, floating cards, and transitions
- **Modern Typography**: Elegant font combinations (Poppins + Playfair Display)
- **Ethiopian Theme**: Warm colors and authentic cultural elements

### ⚛️ React Frontend
- **Component Architecture**: Clean, reusable React components
- **React Router**: Smooth client-side navigation
- **Modern Hooks**: useState, useEffect for state management
- **CSS Variables**: Consistent theming and easy customization

### 🚀 Node.js Backend
- **RESTful API**: Clean API endpoints with native HTTP module
- **Database Integration**: Supabase PostgreSQL database
- **CORS Enabled**: Frontend-backend communication
- **Error Handling**: Comprehensive error management

### 📱 Pages & Features
- **Home Page**: Hero section, chef introduction, menu highlights, testimonials
- **Menu Page**: Dynamic menu with search functionality and categories
- **Contact Page**: Functional contact form with backend processing
- **Database**: Menu items and contact submissions stored in Supabase

## 🛠 Tech Stack

### Frontend
```
React 18.2.0
React Router DOM 6.8.0
Modern CSS with CSS Variables
Google Fonts (Poppins, Playfair Display)
Responsive Grid & Flexbox Layout
CSS Animations & Transitions
```

### Backend
```
Node.js (Native HTTP Module)
Supabase PostgreSQL Database
RESTful API Architecture
CORS Middleware
Environment Variables
```

## 📁 Project Structure

```
restaurant-website/
├── frontend/                 # React Application
│   ├── public/
│   │   ├── images/          # Restaurant & food images
│   │   └── index.html       # HTML template
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ChefSection.jsx
│   │   │   ├── MenuHighlights.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── ReservationCTA.jsx
│   │   ├── pages/          # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Menu.jsx
│   │   │   └── Contact.jsx
│   │   ├── styles/         # CSS styles
│   │   │   └── index.css
│   │   ├── App.js          # Main app component
│   │   └── index.js        # React entry point
│   └── package.json
├── backend/                 # Node.js API Server
│   ├── src/
│   │   ├── app.js          # Main server file
│   │   └── database.js     # Database connection
│   ├── migrate.js          # Database migration script
│   └── package.json
├── database/
│   └── supabase-schema.sql  # Database schema
├── start-both.bat          # Windows batch file to start both servers
├── DEPLOYMENT.md           # Deployment guide
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tsedeniyafiseha/restaurant-website.git
   cd restaurant-website
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Setup Environment Variables**
   
   Create `.env` file in the backend directory:
   ```env
   DATABASE_URL=your_supabase_connection_string
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Run Database Migration**
   ```bash
   cd backend
   node migrate.js
   ```

### Running the Application

**Option 1: Use the batch file (Windows)**
```bash
# From project root
start-both.bat
```

**Option 2: Manual start**
```bash
# Terminal 1 - Backend Server
cd backend
npm run dev

# Terminal 2 - Frontend Server  
cd frontend
npm run dev
```

### Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/menu` | Fetch all menu items |
| GET | `/api/menu/traditional` | Fetch Ethiopian dishes |
| GET | `/api/menu/international` | Fetch international dishes |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/health` | Health check |

## 🎨 Design Features

### Color Palette
- **Primary**: #d35400 (Ethiopian Orange)
- **Secondary**: #2c3e50 (Dark Blue)
- **Accent**: #f39c12 (Golden Yellow)
- **Text**: #2c3e50 (Dark) / #7f8c8d (Light)

### Typography
- **Headings**: Playfair Display (Elegant serif)
- **Body**: Poppins (Modern sans-serif)
- **Accent**: Dancing Script (Decorative)

### Animations
- Smooth hover effects on cards and buttons
- Floating animations for hero elements
- Gradient shimmer effects on buttons
- Smooth page transitions

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Responsive grid layouts
- **Desktop**: Full-width layouts with optimal spacing
- **Large Screens**: Maximum width containers

## 🚀 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Options
- **Frontend**: Netlify, Vercel, GitHub Pages
- **Backend**: Railway, Heroku, DigitalOcean
- **Database**: Supabase (already configured)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🍽️ About Mesob Restaurant

Mesob Restaurant brings the authentic taste of Ethiopia to your table. Our menu features:

### Traditional Ethiopian Dishes
- **Doro Wot**: Traditional chicken stew with berbere spices
- **Shekla Tibs**: Sizzling beef cubes with Ethiopian spices  
- **Kitfo**: Ethiopian steak tartare with mitmita spice

### International Favorites
- **Margherita Pizza**: Classic Italian pizza
- **Classic Burger**: Juicy beef patty with cheese
- **Chicken Momo**: Nepalese steamed dumplings

## 👨‍💻 Development Team

- **Frontend**: React.js with modern CSS
- **Backend**: Node.js with native HTTP module
- **Database**: Supabase PostgreSQL
- **Design**: Modern Ethiopian-inspired theme

## 📞 Support

For support, email restaurant@example.com or create an issue on GitHub.

---

**Made with ❤️ for authentic Ethiopian cuisine** 🇪🇹

[![GitHub stars](https://img.shields.io/github/stars/tsedeniyafiseha/restaurant-website?style=social)](https://github.com/tsedeniyafiseha/restaurant-website)
[![GitHub forks](https://img.shields.io/github/forks/tsedeniyafiseha/restaurant-website?style=social)](https://github.com/tsedeniyafiseha/restaurant-website)