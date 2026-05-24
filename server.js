const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Generate posts data
function generatePosts(totalPosts = 330) {
    const posts = [];
    for (let i = totalPosts; i > 0; i--) {
        posts.push({
            id: i,
            title: `StarHela - Post #${i}`,
            category: i % 2 === 0 ? 'StarHela' : 'Star Hela',
            excerpt: 'StarHela is a comprehensive digital platform designed to help users earn money through various online activities including watching videos, completing surveys, reading articles, and participating in educational content.',
            image: `/images/post-${((i % 12) + 1)}.webp`,
            slug: `starhela-${i}`,
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            content: `
                <p>StarHela is a comprehensive digital platform designed to help users earn money through various online activities. Our platform offers multiple ways to generate income while engaging with content you enjoy.</p>

                <h3>Earning Opportunities</h3>
                <p>With StarHela, you can earn through:</p>
                <ul>
                    <li><strong>Video Watching:</strong> Watch TikTok and YouTube videos and get paid for your time</li>
                    <li><strong>Survey Participation:</strong> Share your opinions through surveys and earn rewards</li>
                    <li><strong>Ad Clicks:</strong> Click on advertisements and earn money for each interaction</li>
                    <li><strong>Blogging:</strong> Write and share content to earn from your creativity</li>
                    <li><strong>Educational Content:</strong> Access Forex tutorials and e-books to improve your skills</li>
                    <li><strong>Games:</strong> Play chess and draughts while earning rewards</li>
                </ul>

                <h3>How to Get Started</h3>
                <p>Getting started with StarHela is simple:</p>
                <ol>
                    <li>Click the "Sign Up" button and create your account</li>
                    <li>Choose your preferred earning methods</li>
                    <li>Start completing tasks and activities</li>
                    <li>Track your earnings in your dashboard</li>
                    <li>Request withdrawals when you reach the minimum threshold</li>
                </ol>

                <h3>Why Choose StarHela?</h3>
                <p>StarHela stands out as a trusted platform for online earning because we offer:</p>
                <ul>
                    <li>Multiple earning streams in one platform</li>
                    <li>User-friendly interface for easy navigation</li>
                    <li>Regular payment processing</li>
                    <li>Secure and transparent transactions</li>
                    <li>24/7 customer support</li>
                    <li>Mobile app for earning on the go</li>
                </ul>

                <h3>Join Our Community</h3>
                <p>Thousands of users are already earning with StarHela. Join our growing community and start your journey to financial freedom today. Whether you want to earn extra income or build a sustainable online business, StarHela provides the tools and opportunities you need.</p>

                <p><strong>Ready to start earning?</strong> <a href="/register?ref=samkiliswa">Sign up now</a> and begin your StarHela journey!</p>
            `
        });
    }
    return posts;
}

const allPosts = generatePosts();

// Country data structure - Ready to add summaries for each country
const countries = {
    rwanda: {
        name: 'Rwanda',
        code: 'RW',
        flag: '🇷🇼',
        info: {
            description: '<p>Welcome to StarHela Rwanda! Join thousands of Rwandans earning money online through simple digital tasks. Our platform is designed specifically for users in Rwanda to maximize earning potential.</p>',
            opportunities: [
                'Watch TikTok and YouTube videos - Earn per view',
                'Complete surveys and share your opinions',
                'Click on advertisements and get paid',
                'Write blog posts and articles',
                'Access Forex trading tutorials',
                'Play chess and draughts for rewards',
                'Participate in daily tasks and challenges'
            ],
            paymentMethods: [
                'Mobile Money (MTN, Airtel)',
                'Bank Transfer',
                'PayPal',
                'Bitcoin & Cryptocurrency'
            ],
            benefits: [
                'Fast and reliable payments',
                'Local currency support (RWF)',
                'No investment required to start',
                '24/7 customer support in Kinyarwanda',
                'Community of Rwandan earners',
                'Daily earning opportunities'
            ]
        }
    },
    burundi: {
        name: 'Burundi',
        code: 'BI',
        flag: '🇧🇮',
        info: {
            description: '<p>StarHela Burundi offers you the opportunity to earn money online from anywhere in Burundi. Join our growing community of Burundian users.</p>',
            opportunities: [
                'Video watching tasks (TikTok, YouTube)',
                'Online surveys and questionnaires',
                'Ad clicking campaigns',
                'Content creation and blogging',
                'Educational content access',
                'Gaming rewards (chess, draughts)',
                'Referral commissions'
            ],
            paymentMethods: [
                'Mobile Money (Lumicash, Ecocash)',
                'Bank Transfer',
                'PayPal',
                'Western Union'
            ],
            benefits: [
                'Payments in local currency (BIF)',
                'Low minimum withdrawal',
                'No registration fees',
                'French language support',
                'Active Burundian community',
                'Weekly payment processing'
            ]
        }
    },
    uganda: {
        name: 'Uganda',
        code: 'UG',
        flag: '🇺🇬',
        info: {
            description: '<p>StarHela Uganda is your gateway to earning online income. Join thousands of Ugandans already making money through our platform.</p>',
            opportunities: [
                'Watch and earn from video content',
                'Participate in paid surveys',
                'Click ads and earn instantly',
                'Create blog content',
                'Learn Forex trading',
                'Play games for rewards',
                'Complete daily missions'
            ],
            paymentMethods: [
                'Mobile Money (MTN, Airtel)',
                'Bank Transfer (UGX)',
                'PayPal',
                'Cryptocurrency'
            ],
            benefits: [
                'Ugandan shilling (UGX) support',
                'Quick mobile money withdrawals',
                'No startup costs',
                '24/7 support',
                'Large Ugandan user base',
                'Multiple earning methods'
            ]
        }
    },
    ghana: {
        name: 'Ghana',
        code: 'GH',
        flag: '🇬🇭',
        info: {
            description: '<p>Welcome to StarHela Ghana! Earn money online with tasks designed for Ghanaian users. Start your earning journey today.</p>',
            opportunities: [
                'Video streaming rewards',
                'Survey participation',
                'Advertisement clicking',
                'Content writing',
                'Trading education',
                'Gaming activities',
                'Affiliate marketing'
            ],
            paymentMethods: [
                'Mobile Money (MTN, Vodafone, AirtelTigo)',
                'Bank Transfer (GHS)',
                'PayPal',
                'Bitcoin'
            ],
            benefits: [
                'Ghana cedis (GHS) payments',
                'Instant mobile money transfers',
                'Free to join',
                'English language platform',
                'Active Ghanaian community',
                'Regular bonuses'
            ]
        }
    },
    cameroon: {
        name: 'Cameroon',
        code: 'CM',
        flag: '🇨🇲',
        info: {
            description: '<p>StarHela Cameroon brings earning opportunities to Cameroonian users. Make money online with flexible tasks.</p>',
            opportunities: [
                'Watch videos and get paid',
                'Complete online surveys',
                'Click advertisements',
                'Write and publish content',
                'Access educational materials',
                'Play rewarding games',
                'Earn referral bonuses'
            ],
            paymentMethods: [
                'Mobile Money (MTN, Orange)',
                'Bank Transfer (XAF)',
                'PayPal',
                'Western Union'
            ],
            benefits: [
                'CFA franc (XAF) support',
                'Bilingual support (English/French)',
                'No initial investment',
                'Flexible earning schedule',
                'Growing Cameroonian community',
                'Reliable payment system'
            ]
        }
    },
    kenya: {
        name: 'Kenya',
        code: 'KE',
        flag: '🇰🇪',
        info: {
            description: '<p>StarHela Kenya offers Kenyan users multiple ways to earn money online. Join our thriving community today.</p>',
            opportunities: [
                'Video watching rewards',
                'Paid surveys',
                'Ad clicking campaigns',
                'Blog writing',
                'Forex education',
                'Game rewards',
                'Task completion bonuses'
            ],
            paymentMethods: [
                'M-Pesa',
                'Airtel Money',
                'Bank Transfer (KES)',
                'PayPal'
            ],
            benefits: [
                'Kenyan shilling (KES) payments',
                'Fast M-Pesa withdrawals',
                'Zero registration fees',
                'Swahili support available',
                'Large Kenyan user network',
                'Daily earning opportunities'
            ]
        }
    },
    botswana: {
        name: 'Botswana',
        code: 'BW',
        flag: '🇧🇼',
        info: {
            description: '<p>StarHela Botswana provides earning opportunities for users across Botswana. Start earning from home today.</p>',
            opportunities: [
                'Video content engagement',
                'Survey participation',
                'Advertisement interactions',
                'Content creation',
                'Educational content access',
                'Gaming activities',
                'Referral program'
            ],
            paymentMethods: [
                'Bank Transfer (BWP)',
                'PayPal',
                'Orange Money',
                'Cryptocurrency'
            ],
            benefits: [
                'Botswana pula (BWP) support',
                'Reliable payment processing',
                'Free registration',
                'English language platform',
                'Dedicated support team',
                'Flexible earning options'
            ]
        }
    },
    malawi: {
        name: 'Malawi',
        code: 'MW',
        flag: '🇲🇼',
        info: {
            description: '<p>Welcome to StarHela Malawi! Earn money online through various tasks designed for Malawian users.</p>',
            opportunities: [
                'Watch videos and earn',
                'Complete paid surveys',
                'Click on ads',
                'Write blog posts',
                'Access training materials',
                'Play games for rewards',
                'Complete daily tasks'
            ],
            paymentMethods: [
                'Airtel Money',
                'TNM Mpamba',
                'Bank Transfer (MWK)',
                'PayPal'
            ],
            benefits: [
                'Malawian kwacha (MWK) payments',
                'Mobile money withdrawals',
                'No startup fees',
                'Local support team',
                'Growing Malawian community',
                'Multiple earning streams'
            ]
        }
    },
    zambia: {
        name: 'Zambia',
        code: 'ZM',
        flag: '🇿🇲',
        info: {
            description: '<p>StarHela Zambia connects Zambian users with online earning opportunities. Start making money today.</p>',
            opportunities: [
                'Video streaming rewards',
                'Survey completion',
                'Ad clicking tasks',
                'Content writing',
                'Educational resources',
                'Gaming rewards',
                'Bonus tasks'
            ],
            paymentMethods: [
                'Mobile Money (MTN, Airtel)',
                'Bank Transfer (ZMW)',
                'PayPal',
                'Cryptocurrency'
            ],
            benefits: [
                'Zambian kwacha (ZMW) support',
                'Quick mobile money transfers',
                'Free to join',
                'English language platform',
                'Active Zambian community',
                'Regular earning opportunities'
            ]
        }
    },
    nigeria: {
        name: 'Nigeria',
        code: 'NG',
        flag: '🇳🇬',
        info: {
            description: '<p>StarHela Nigeria is the leading platform for Nigerians to earn money online. Join millions of users earning daily.</p>',
            opportunities: [
                'Watch videos and get paid',
                'Participate in surveys',
                'Click advertisements',
                'Create blog content',
                'Learn Forex trading',
                'Play chess and draughts',
                'Complete various tasks'
            ],
            paymentMethods: [
                'Bank Transfer (NGN)',
                'Opay, Palmpay, Kuda',
                'PayPal',
                'Bitcoin & Crypto'
            ],
            benefits: [
                'Nigerian naira (NGN) payments',
                'Instant bank transfers',
                'No registration fees',
                'Large Nigerian community',
                '24/7 customer support',
                'High earning potential'
            ]
        }
    },
    tanzania: {
        name: 'Tanzania',
        code: 'TZ',
        flag: '🇹🇿',
        info: {
            description: '<p>StarHela Tanzania offers Tanzanian users the opportunity to earn money online from anywhere. Join today!</p>',
            opportunities: [
                'Video watching tasks',
                'Online surveys',
                'Ad clicking',
                'Content creation',
                'Educational content',
                'Gaming rewards',
                'Daily challenges'
            ],
            paymentMethods: [
                'M-Pesa Tanzania',
                'Airtel Money',
                'Tigo Pesa',
                'Bank Transfer (TZS)'
            ],
            benefits: [
                'Tanzanian shilling (TZS) support',
                'Fast mobile money payments',
                'Free registration',
                'Swahili language support',
                'Active Tanzanian community',
                'Multiple payment options'
            ]
        }
    }
};

// Routes

// Homepage
app.get('/', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const postsPerPage = 10;
    const totalPosts = allPosts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const offset = (page - 1) * postsPerPage;

    const posts = allPosts.slice(offset, offset + postsPerPage);

    res.render('index', {
        posts,
        currentPage: page,
        totalPages,
        totalPosts
    });
});

// Single Post
app.get('/post/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = allPosts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).send('Post not found');
    }

    res.render('post', { post });
});

// Category Archive
app.get('/category/:cat', (req, res) => {
    const category = req.params.cat;
    const page = parseInt(req.query.page) || 1;
    const postsPerPage = 10;

    const categoryPosts = allPosts.filter(p => p.category === category);
    const totalPosts = categoryPosts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const offset = (page - 1) * postsPerPage;

    const posts = categoryPosts.slice(offset, offset + postsPerPage);

    res.render('category', {
        posts,
        category,
        currentPage: page,
        totalPages,
        totalPosts
    });
});

// Registration Page
app.get('/register', (req, res) => {
    const referral = req.query.ref || '';
    const selectedCountry = req.query.country || '';
    res.render('register', { referral, selectedCountry, error: null, success: null });
});

app.post('/register', (req, res) => {
    const { username, email, country, password, confirm_password, referral } = req.body;
    const selectedCountry = req.query.country || '';

    // Basic validation
    if (!username || !email || !country || !password) {
        return res.render('register', {
            referral: referral || '',
            selectedCountry,
            error: 'All fields are required.',
            success: null
        });
    }

    if (password !== confirm_password) {
        return res.render('register', {
            referral: referral || '',
            selectedCountry,
            error: 'Passwords do not match.',
            success: null
        });
    }

    if (password.length < 6) {
        return res.render('register', {
            referral: referral || '',
            selectedCountry,
            error: 'Password must be at least 6 characters long.',
            success: null
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.render('register', {
            referral: referral || '',
            selectedCountry,
            error: 'Please enter a valid email address.',
            success: null
        });
    }

    // Success
    res.render('register', {
        referral: referral || '',
        selectedCountry,
        error: null,
        success: 'Registration successful! You can now login.'
    });
});

// Login Page
app.get('/login', (req, res) => {
    res.render('login', { error: null });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.render('login', {
            error: 'Please enter both username and password.'
        });
    }

    // In a real app, validate against database
    res.redirect('/');
});

// Country Page
app.get('/country/:countrySlug', (req, res) => {
    const countrySlug = req.params.countrySlug.toLowerCase();
    const country = countries[countrySlug];

    if (!country) {
        return res.status(404).send('Country not found');
    }

    // Get 6 recent posts for the country page
    const posts = allPosts.slice(0, 6);

    res.render('country', {
        countryName: country.name,
        countryCode: country.code,
        countryFlag: country.flag,
        countryInfo: country.info,
        posts
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════╗
║                                            ║
║       StarHela Website Server              ║
║                                            ║
║       Server is running!                   ║
║       Port: ${PORT}                            ║
║                                            ║
║       Access your website at:              ║
║       http://localhost:${PORT}                 ║
║                                            ║
╚════════════════════════════════════════════╝
    `);
});
