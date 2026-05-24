# StarHela Website

A blog-style website for StarHela earning platform, built with PHP, HTML, CSS, and JavaScript.

## Features

### Core Features (Matching Reference Site)
- ✅ **Homepage with Blog Posts Grid** - Displays posts in a responsive grid layout
- ✅ **Pagination System** - Navigate through 330+ posts across 33 pages
- ✅ **Post Categories** - Two categories: "StarHela" and "Star Hela"
- ✅ **Individual Post Pages** - Detailed view for each post with full content
- ✅ **Category Archive Pages** - Filter posts by category
- ✅ **Registration Form** - Sign up with username, email, country, password, and referral code
- ✅ **Login Page** - User login functionality
- ✅ **Mobile Responsive Design** - Works on all device sizes
- ✅ **App Download Widget** - Prominent call-to-action for mobile app
- ✅ **Skip to Content** - Accessibility feature for keyboard navigation
- ✅ **Mobile Menu Toggle** - Hamburger menu for mobile devices

### Design Features
- Modern, clean UI with card-based layout
- Smooth animations and transitions
- Hover effects on cards and buttons
- Gradient backgrounds for special sections
- Professional color scheme (blue primary colors)
- Typography hierarchy for readability

### Technical Features
- Pure PHP (no framework required)
- Responsive CSS Grid and Flexbox
- Vanilla JavaScript (no jQuery)
- SVG placeholder images
- Lazy loading for images
- Intersection Observer for scroll animations
- SEO-friendly structure
- Security headers in .htaccess

## File Structure

```
Starhela/
├── index.php              # Homepage with posts grid
├── post.php               # Single post page
├── category.php           # Category archive page
├── register.php           # Registration form
├── login.php              # Login form
├── .htaccess              # Apache configuration
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── script.js      # JavaScript functionality
│   └── images/
│       └── post-*.svg     # Placeholder images (1-10)
└── README.md              # This file
```

## Installation

1. **Prerequisites**
   - Apache web server with PHP support
   - PHP 7.4 or higher
   - mod_rewrite enabled (for .htaccess)

2. **Setup**
   ```bash
   # Copy files to your web root
   cp -r Starhela/ /path/to/htdocs/
   
   # Set proper permissions
   chmod -R 755 /path/to/htdocs/Starhela/
   ```

3. **Access the Website**
   - Homepage: `http://localhost/Starhela/`
   - Registration: `http://localhost/Starhela/register.php?ref=samkiliswa`
   - Login: `http://localhost/Starhela/login.php`

## Pages

### Homepage (`index.php`)
- Displays 10 posts per page
- Pagination for 330 total posts (33 pages)
- Responsive grid layout
- Category labels
- Featured images
- Read More links

### Single Post (`post.php?id=X`)
- Full post content
- Featured image
- Category and date
- Previous/Next navigation
- Back to home link

### Category Page (`category.php?cat=StarHela`)
- Filtered posts by category
- Same layout as homepage
- Category-specific pagination

### Registration (`register.php?ref=samkiliswa`)
- Username field
- Email field
- Country dropdown
- Password fields (with confirmation)
- Referral code (optional, pre-filled from URL)
- Form validation
- Features list

### Login (`login.php`)
- Username/Email field
- Password field
- Remember me checkbox
- Forgot password link
- Sign up link

## Customization

### Colors
Edit `assets/css/style.css` to change the color scheme. Main colors:
- Primary: `#2563eb` (blue)
- Primary Hover: `#1e40af` (dark blue)
- Background: `#f5f5f5` (light gray)
- Text: `#333` (dark gray)

### Content
- **Posts**: Edit the loop in `index.php` to customize post data
- **Categories**: Modify the category logic in each PHP file
- **Images**: Replace SVG files in `assets/images/` with your own

### Branding
- **Site Title**: Change "StarHela" in header sections
- **Tagline**: Update the site description
- **Footer**: Edit copyright text in footer sections

## Features Breakdown

### Navigation
- Sticky header on scroll
- Mobile hamburger menu
- Active link highlighting
- Smooth transitions

### Forms
- Client-side validation
- Error/success messages
- Accessible labels
- Responsive layout

### Performance
- Lazy loading images
- CSS/JS minification ready
- Browser caching via .htaccess
- Gzip compression enabled

### Accessibility
- Skip to content link
- ARIA labels
- Keyboard navigation
- Semantic HTML
- Alt text for images

### SEO
- Semantic HTML5 structure
- Meta descriptions
- Clean URL structure
- Proper heading hierarchy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Security Features

- Input sanitization with `htmlspecialchars()`
- SQL injection prevention (when database is added)
- XSS protection headers
- CSRF token ready
- Secure password handling ready

## Future Enhancements

To make this a fully functional website, consider adding:

1. **Database Integration**
   - MySQL/MariaDB for storing posts and users
   - User authentication system
   - Admin panel for managing posts

2. **User Features**
   - Dashboard after login
   - Earnings tracking
   - Profile management
   - Withdrawal requests

3. **Content Management**
   - Create/Edit/Delete posts
   - Media library
   - Category management
   - Comment system

4. **Payment Integration**
   - Payment gateway
   - Withdrawal system
   - Earnings calculator

5. **Additional Features**
   - Search functionality
   - Social sharing buttons
   - Email notifications
   - Multi-language support

## License

All rights reserved - StarHela 2026

## Support

For issues or questions about this website, please contact the development team.

---

**Note**: This is a static demonstration matching the features of the reference website at starhela.co.ug. For production use, add database integration and proper user authentication.
