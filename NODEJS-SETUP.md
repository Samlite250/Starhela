# StarHela Website - Node.js Setup Guide

## ✅ Installation Complete!

Your StarHela website has been successfully created using **Node.js and Express**.

**Location**: `C:\xamppx\htdocs\Starhela`

---

## 🚀 Quick Start

### Start the Server

**Option 1: Double-click the start file**
- Double-click `start.bat` in the Starhela folder

**Option 2: Use Command Line**
```bash
cd C:\xamppx\htdocs\Starhela
npm start
```

**Option 3: Development Mode (auto-restart on changes)**
```bash
npm run dev
```

### Access Your Website

Once the server is running, open your browser and go to:

- **Homepage**: http://localhost:3000
- **Registration**: http://localhost:3000/register?ref=samkiliswa
- **Login**: http://localhost:3000/login
- **Single Post**: http://localhost:3000/post/1
- **Category**: http://localhost:3000/category/StarHela

---

## 📋 Features Included

All features from https://starhela.co.ug have been replicated:

### ✅ Core Features
- [x] Homepage with blog posts grid (10 posts per page)
- [x] Pagination system (330 posts, 33 pages)
- [x] Individual post pages with full content
- [x] Category filtering (StarHela / Star Hela)
- [x] Registration form with validation
- [x] Login page
- [x] Mobile responsive design
- [x] App download widget
- [x] Navigation menu with mobile toggle
- [x] Skip to content accessibility

### ✅ Design Features
- [x] Modern card-based layout
- [x] Smooth animations and transitions
- [x] Hover effects on cards
- [x] Professional color scheme (blue theme)
- [x] Gradient backgrounds
- [x] Clean typography

### ✅ Technical Features
- [x] Node.js + Express backend
- [x] EJS templating engine
- [x] Form handling with validation
- [x] Static file serving
- [x] Clean URL routing
- [x] Error handling

---

## 📁 Project Structure

```
Starhela/
├── server.js              # Main Express server
├── package.json           # Node.js dependencies
├── start.bat              # Quick start script
├── views/                 # EJS templates
│   ├── header.ejs         # Header component
│   ├── footer.ejs         # Footer component
│   ├── index.ejs          # Homepage
│   ├── post.ejs           # Single post page
│   ├── category.ejs       # Category page
│   ├── register.ejs       # Registration form
│   └── login.ejs          # Login form
├── public/                # Static assets
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── script.js      # JavaScript
│   └── images/
│       └── post-*.svg     # Placeholder images (1-10)
├── node_modules/          # Dependencies (auto-generated)
└── README.md              # Documentation
```

---

## 🛠️ Technology Stack

- **Backend**: Node.js v14+ with Express.js
- **Template Engine**: EJS (Embedded JavaScript)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Dependencies**:
  - express: ^4.18.2 (Web framework)
  - ejs: ^3.1.9 (Templating)
  - body-parser: ^1.20.2 (Form handling)
  - nodemon: ^3.0.1 (Dev tool - auto-restart)

---

## 🎨 Customization

### Change Port Number

Edit `server.js`:
```javascript
const PORT = process.env.PORT || 3000; // Change 3000 to your port
```

Or set environment variable:
```bash
set PORT=8080 && npm start
```

### Change Colors

Edit `public/css/style.css`:
```css
/* Primary color */
#2563eb → Your color

/* Hover color */
#1e40af → Your hover color
```

### Update Content

Edit `server.js` to modify:
- Posts data (line 18-70)
- Categories
- Number of posts per page

### Add Your Logo

Edit `views/header.ejs` and replace text with image:
```html
<h1 class="site-title">
    <a href="/">
        <img src="/images/logo.png" alt="StarHela">
    </a>
</h1>
```

### Replace Images

Place your images in `public/images/` folder and update references in `server.js`.

---

## 🧪 Testing Checklist

- [ ] Homepage loads at http://localhost:3000
- [ ] Pagination works (pages 1, 2, 3...)
- [ ] Individual posts open
- [ ] Category filtering works
- [ ] Registration form validates
- [ ] Login page accessible
- [ ] Mobile menu toggles
- [ ] Images display properly
- [ ] All navigation links work
- [ ] App download button works

---

## 🔧 Troubleshooting

### Port Already in Use

If you see "Port 3000 is already in use":

**Option 1**: Change the port
```bash
set PORT=3001 && npm start
```

**Option 2**: Kill the process using port 3000
```bash
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

### Node.js Not Found

Make sure Node.js is installed:
```bash
node --version
npm --version
```

If not installed, download from: https://nodejs.org/

### Dependencies Missing

Reinstall dependencies:
```bash
npm install
```

### Page Not Loading

1. Check if server is running (look for startup message)
2. Verify URL: `http://localhost:3000` (not 3000/)
3. Check browser console for errors
4. Try restarting the server (Ctrl+C, then `npm start`)

### CSS Not Loading

1. Verify `public/css/style.css` exists
2. Check browser Network tab for 404 errors
3. Clear browser cache (Ctrl+F5)

---

## 📊 Pages Overview

### Homepage (`/`)
- Grid of 10 blog posts
- Pagination controls
- Category labels
- Read More links

### Single Post (`/post/:id`)
- Full post content
- Featured image
- Previous/Next navigation
- Back to home link

### Category (`/category/:name`)
- Filtered posts by category
- Same grid layout as homepage
- Category-specific pagination

### Registration (`/register?ref=code`)
- Username, email, country fields
- Password validation
- Optional referral code
- Success/error messages

### Login (`/login`)
- Username/Email field
- Password field
- Remember me checkbox
- Link to registration

---

## 🚀 Deployment Options

### Deploy to Heroku

1. Create `Procfile`:
```
web: node server.js
```

2. Deploy:
```bash
heroku create starhela
git push heroku main
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Railway

1. Connect GitHub repo
2. Select project
3. Deploy automatically

---

## 📝 Next Steps (Optional Enhancements)

### 1. Add Database (MongoDB/PostgreSQL)
- Store posts and users
- Persistent data
- User authentication

### 2. Add Admin Panel
- Create/Edit/Delete posts
- User management
- Dashboard

### 3. Add Features
- Search functionality
- Comments system
- Social sharing
- Email notifications

### 4. Improve Security
- JWT authentication
- Password hashing (bcrypt)
- CSRF protection
- Rate limiting

### 5. Add Analytics
- Google Analytics
- User tracking
- Earnings dashboard

---

## 📄 Environment Variables (Optional)

Create `.env` file for configuration:

```env
PORT=3000
NODE_ENV=production
SESSION_SECRET=your_secret_key
```

Install dotenv:
```bash
npm install dotenv
```

Use in `server.js`:
```javascript
require('dotenv').config();
```

---

## 📞 Support

The website replicates all features from https://starhela.co.ug using Node.js.

### No XAMPP or PHP Required!
✅ Pure Node.js solution
✅ Faster development
✅ Easy deployment
✅ Modern tech stack

---

## ✨ What's Different from PHP Version?

| Feature | PHP Version | Node.js Version |
|---------|-------------|-----------------|
| Server | Apache/XAMPP | Node.js/Express |
| Templates | PHP | EJS |
| Start Method | XAMPP Control | `npm start` |
| Port | 80 | 3000 |
| Auto-restart | Manual | nodemon (dev mode) |

---

## 🎉 Ready to Go!

**Start the server:**
```bash
npm start
```

**Visit:**
http://localhost:3000

Enjoy your StarHela website! 🚀
