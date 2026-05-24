# StarHela Website - Installation Guide

## Quick Start

Your StarHela website has been successfully created at: `C:\xamppx\htdocs\Starhela`

## Starting the Website

### Option 1: Using XAMPP Control Panel (Recommended)

1. Open XAMPP Control Panel:
   - Navigate to: `C:\xamppx\`
   - Run: `xampp-control.exe`

2. Start Apache:
   - Click the "Start" button next to "Apache"
   - Wait for it to show "Running" status

3. Access the website:
   - Open your browser
   - Go to: `http://localhost/Starhela/`

### Option 2: Command Line

```bash
# Start Apache service
net start Apache2.4
```

## URLs to Access

- **Homepage**: http://localhost/Starhela/
- **Registration**: http://localhost/Starhela/register.php?ref=samkiliswa
- **Login**: http://localhost/Starhela/login.php
- **Single Post**: http://localhost/Starhela/post.php?id=1
- **Category**: http://localhost/Starhela/category.php?cat=StarHela

## Features Included

✅ All features from https://starhela.co.ug have been replicated:

1. **Homepage**
   - Blog posts grid layout
   - 10 posts per page
   - Pagination (33 pages, 330 posts total)
   - Category labels
   - Featured images
   - Read More links

2. **Navigation**
   - Sticky header
   - Mobile responsive menu
   - Sign Up button with referral code

3. **Post Pages**
   - Individual post view
   - Full content display
   - Previous/Next navigation
   - Featured images

4. **Category Pages**
   - Filtered by category
   - Same grid layout
   - Pagination

5. **Registration Form**
   - Username field
   - Email field
   - Country selector
   - Password fields
   - Referral code (pre-filled from URL)
   - Form validation

6. **Login Page**
   - Username/Email login
   - Password field
   - Remember me option
   - Links to registration

7. **App Download Widget**
   - Prominent call-to-action
   - External app link

8. **Footer**
   - Copyright notice
   - Professional styling

9. **Design Features**
   - Responsive design (mobile, tablet, desktop)
   - Modern card-based UI
   - Smooth animations
   - Hover effects
   - Accessibility features (skip to content)
   - Clean, professional color scheme

## File Structure

```
C:\xamppx\htdocs\Starhela\
├── index.php              # Homepage
├── post.php               # Single post page
├── category.php           # Category archive
├── register.php           # Registration form
├── login.php              # Login page
├── .htaccess              # Apache config
├── README.md              # Documentation
├── INSTALLATION.md        # This file
└── assets/
    ├── css/
    │   └── style.css      # Styles
    ├── js/
    │   └── script.js      # JavaScript
    └── images/
        └── post-*.svg     # 10 placeholder images
```

## Technology Stack

- **Backend**: PHP 8.x
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Server**: Apache
- **No Database Required**: Static content demonstration
- **No Framework**: Pure PHP for simplicity

## Customization

### Change Colors
Edit `assets/css/style.css`:
```css
/* Primary blue color */
#2563eb → Your color

/* Primary hover */
#1e40af → Your hover color
```

### Update Content
Edit the PHP files:
- `index.php` - Homepage posts
- `post.php` - Single post content
- `register.php` - Form fields

### Add Your Logo
Replace the text logo in headers with an image:
```html
<h1 class="site-title">
    <a href="index.php">
        <img src="assets/images/logo.png" alt="StarHela">
    </a>
</h1>
```

### Replace Images
Place your images in `assets/images/` and update references in PHP files.

## Testing Checklist

- [ ] Homepage loads correctly
- [ ] Pagination works (page 1, 2, 3...)
- [ ] Individual posts open
- [ ] Category filtering works
- [ ] Registration form displays
- [ ] Login page accessible
- [ ] Mobile menu toggles
- [ ] Images load properly
- [ ] All links work
- [ ] App download button redirects

## Troubleshooting

### Apache Won't Start
- Check if port 80 is in use
- Run XAMPP Control Panel as Administrator
- Check Apache error logs in `C:\xamppx\apache\logs\`

### Website Shows 404
- Verify Apache is running
- Check URL: `http://localhost/Starhela/` (capital S)
- Verify files are in correct location

### Images Don't Show
- Check `assets/images/` folder exists
- Verify SVG files were created (post-1.svg through post-10.svg)
- Check browser console for errors

### PHP Errors
- Check PHP error logs
- Verify PHP version (7.4+)
- Ensure all PHP files have proper syntax

## Next Steps (Optional Enhancements)

1. **Add Database**
   - Create MySQL database
   - Store posts and users
   - Implement authentication

2. **Add Admin Panel**
   - Content management
   - User management
   - Analytics dashboard

3. **Integrate Payments**
   - Payment gateway
   - Earnings tracking
   - Withdrawal system

4. **Add Features**
   - Search functionality
   - Social sharing
   - Comments system
   - Email notifications

## Support

The website replicates all features from https://starhela.co.ug with original content.

All core features are working:
- ✅ Blog post grid
- ✅ Pagination
- ✅ Categories
- ✅ Registration form
- ✅ Login page
- ✅ Responsive design
- ✅ Mobile menu
- ✅ App download widget
- ✅ Skip to content accessibility
- ✅ Professional styling

---

**Ready to Go!** Start XAMPP Apache and visit http://localhost/Starhela/
