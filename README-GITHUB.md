# StarHela - Online Earning Platform

A modern, responsive website for StarHela online earning platform built with Node.js, Express, and EJS.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat&logo=ejs&logoColor=white)

## 🌟 Features

### Core Features
- ✅ **Homepage** with paginated blog posts (330 posts across 33 pages)
- ✅ **Country Pages** for 11 African countries with localized content
- ✅ **Single Post Pages** with full content and navigation
- ✅ **Category Filtering** (StarHela / Star Hela)
- ✅ **Registration Form** with validation and referral support
- ✅ **Login Page** with user authentication interface
- ✅ **Mobile Responsive Design** - works on all devices
- ✅ **Country Selection Dropdown** in navigation
- ✅ **App Download Widget** with call-to-action

### Design Features
- Modern card-based layout
- Smooth animations and transitions
- Gradient backgrounds
- Professional blue color scheme
- Hover effects on interactive elements
- Clean typography
- Accessibility features (skip to content)

### Supported Countries
🇷🇼 Rwanda | 🇧🇮 Burundi | 🇺🇬 Uganda | 🇬🇭 Ghana | 🇨🇲 Cameroon | 🇰🇪 Kenya | 🇧🇼 Botswana | 🇲🇼 Malawi | 🇿🇲 Zambia | 🇳🇬 Nigeria | 🇹🇿 Tanzania

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Samlite250/Starhela.git
cd Starhela
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the server**
```bash
npm start
```

4. **Open your browser**
```
http://localhost:3000
```

### Development Mode (with auto-restart)
```bash
npm run dev
```

## 📁 Project Structure

```
Starhela/
├── server.js              # Express server & routes
├── package.json           # Dependencies
├── views/                 # EJS templates
│   ├── header.ejs         # Header component
│   ├── footer.ejs         # Footer component
│   ├── index.ejs          # Homepage
│   ├── post.ejs           # Single post page
│   ├── category.ejs       # Category archive
│   ├── country.ejs        # Country-specific pages
│   ├── register.ejs       # Registration form
│   └── login.ejs          # Login page
├── public/                # Static assets
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── script.js      # JavaScript
│   └── images/
│       └── *.svg          # Placeholder images
└── docs/                  # Documentation
```

## 🌐 Pages

### Main Pages
- **Homepage** (`/`) - Blog posts grid with pagination
- **Single Post** (`/post/:id`) - Individual post with full content
- **Category** (`/category/:name`) - Filtered posts by category
- **Register** (`/register`) - User registration form
- **Login** (`/login`) - User login page

### Country Pages
Each country has a dedicated page with:
- Country-specific information
- Earning opportunities
- Payment methods
- Benefits
- Call-to-action for registration

Access via: `/country/rwanda`, `/country/kenya`, etc.

## 🛠️ Technology Stack

- **Backend**: Node.js with Express.js
- **Template Engine**: EJS (Embedded JavaScript)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Dependencies**:
  - express: ^4.18.2
  - ejs: ^3.1.9
  - body-parser: ^1.20.2
  - nodemon: ^3.0.1 (dev)

## 🎨 Customization

### Change Port
Edit `server.js`:
```javascript
const PORT = process.env.PORT || 3000; // Change port here
```

Or use environment variable:
```bash
PORT=8080 npm start
```

### Update Colors
Edit `public/css/style.css`:
- Primary: `#2563eb`
- Hover: `#1e40af`

### Modify Content
Edit `server.js` to update:
- Posts data
- Country information
- Categories

### Update Country Summaries
In `server.js`, find the `countries` object and update:
```javascript
rwanda: {
    name: 'Rwanda',
    code: 'RW',
    flag: '🇷🇼',
    info: {
        description: 'Your description',
        opportunities: [...],
        paymentMethods: [...],
        benefits: [...]
    }
}
```

## 📱 Mobile Responsive

The website is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (375px, 414px)

## 🚢 Deployment

### Heroku
```bash
# Login to Heroku
heroku login

# Create app
heroku create starhela

# Deploy
git push heroku main

# Open
heroku open
```

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Railway
1. Connect your GitHub repository
2. Select the project
3. Deploy automatically

### Environment Variables
Create `.env` file:
```env
PORT=3000
NODE_ENV=production
```

## 📖 Documentation

- **START-HERE.md** - Quick start guide
- **NODEJS-SETUP.md** - Complete setup instructions
- **COUNTRY-PAGES.md** - Country pages documentation
- **INSTALLATION.md** - Installation guide

## 🧪 Testing

Test all features:

```bash
# Homepage
http://localhost:3000

# Pagination
http://localhost:3000?page=2

# Single Post
http://localhost:3000/post/1

# Category
http://localhost:3000/category/StarHela

# Country Page
http://localhost:3000/country/rwanda

# Registration
http://localhost:3000/register?ref=samkiliswa

# Login
http://localhost:3000/login
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Samlite250**
- GitHub: [@Samlite250](https://github.com/Samlite250)

## 🙏 Acknowledgments

- Built with Express.js
- Styled with custom CSS
- Template engine: EJS
- Icons: Unicode emojis

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Check documentation files

## 🔄 Updates

### Latest (v1.0.0)
- ✅ Initial release
- ✅ Homepage with pagination
- ✅ Country-specific pages (11 countries)
- ✅ Registration and login pages
- ✅ Mobile responsive design
- ✅ Country dropdown navigation
- ✅ 330 blog posts with categories

---

**Made with ❤️ for StarHela**

Visit: http://localhost:3000
