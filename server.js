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

const postImages = [
    'post-1.webp','post-2.webp','post-3.webp','post-4.webp',
    'post-5.webp','post-6.webp','post-7.webp','post-8.webp',
    'post-9.webp','post-10.webp','post-11.webp','post-12.webp',
    'post-13.jpeg','post-14.jpeg','post-15.jpeg','post-16.jpeg'
];

// Generate posts data
function generatePosts(totalPosts = 330) {
    const posts = [];
    const customPosts = {
        330: {
            excerpt: 'StarHela is an online platform built to help users earn money through simple digital activities…',
            content: '<p>StarHela is an online platform built to help users earn money through simple digital activities and interactive content. It brings together several earning methods, including watching short-form videos on TikTok and YouTube, viewing social media reels, clicking advertisements, writing blog articles, answering trivia questions, and playing online games such as chess and draughts. Users can also grow their income through referrals, earning commissions for inviting new members, along with bonus features like free spins and welcome rewards. Beyond entertainment-based earnings, StarHela offers learning resources such as Forex tutorials and e-books to support users in developing financial and trading knowledge. With its user-friendly interface and mobile accessibility, StarHela is designed to turn everyday online engagement into flexible earning opportunities.</p>'
        },
        329: {
            excerpt: 'StarHela is a digital earning platform that enables users to generate income through a mix…',
            content: '<p>StarHela is a digital earning platform that enables users to generate income through a mix of simple online tasks and interactive activities. It allows members to earn by watching short videos on TikTok and YouTube, engaging with social media reels, clicking paid ads, writing blog posts, answering trivia questions, and playing strategy games such as chess and draughts. The platform also includes a referral program where users earn commissions by inviting others, along with bonus features like free spins and welcome rewards that help users start earning quickly. In addition, StarHela provides educational materials such as Forex training courses and e-books to support users in building financial knowledge. With its straightforward dashboard and mobile access, it is designed to make online earning flexible and accessible from anywhere.</p>'
        },
        328: {
            excerpt: 'StarHela is an online income platform that gives users the opportunity to earn money by…',
            content: '<p>StarHela is an online income platform that gives users the opportunity to earn money by completing a range of simple digital tasks and engaging activities. It combines entertainment and earning through features such as watching short videos on TikTok and YouTube, viewing social media reels, clicking advertisements, writing blog content, answering trivia questions, and playing online games like chess and draughts. Users can also earn through a referral system that pays commissions for inviting new members, along with added benefits like welcome bonuses and free spins to boost initial earnings. Beyond task-based rewards, StarHela also provides educational resources including Forex tutorials and e-books to help users develop financial skills. With its easy navigation and mobile-friendly design, the platform is designed to make online earning accessible, flexible, and engaging for everyday users.</p>'
        },
        327: {
            excerpt: 'StarHela is a multifunctional online earning platform that allows users to make money by performing…',
            content: '<p>StarHela is a multifunctional online earning platform that allows users to make money by performing simple digital tasks and engaging with online content. It offers a variety of earning activities such as watching TikTok and YouTube videos, interacting with social media reels, clicking short advertisements, writing blog posts, answering trivia questions, and participating in online games like chess and draughts. Users can also increase their earnings through referral programs, where inviting others earns commission rewards, as well as bonuses like free spins and welcome incentives. In addition to earning features, StarHela provides educational resources such as Forex training courses and e-books aimed at improving users\' financial knowledge. With its accessible dashboard and mobile-friendly design, StarHela is built to help users convert their time online into consistent earning opportunities.</p>'
        },
        326: {
            excerpt: 'StarHela is an online rewards system that lets users earn money by completing a variety…',
            content: '<p>StarHela is an online rewards system that lets users earn money by completing a variety of simple digital tasks and engaging in interactive content. The platform includes activities such as watching short-form videos on TikTok and YouTube, viewing social media reels, clicking advertisements, writing articles, answering trivia questions, and playing competitive games like chess and draughts. It also provides earning opportunities through referrals, where users can earn commissions by inviting others to join, as well as bonuses like free spins and registration rewards that enhance early earnings. Alongside entertainment-based tasks, StarHela offers educational materials including Forex tutorials and e-books to help users build financial literacy and online income skills. With its easy-to-use dashboard and mobile access, StarHela is designed to give users a flexible way to turn everyday online engagement into earnings.</p>'
        },
        325: {
            excerpt: 'StarHela is a digital rewards and income-earning platform that allows users to generate money through…',
            content: '<p>StarHela is a digital rewards and income-earning platform that allows users to generate money through everyday online activities and interactive tasks. It combines entertainment and earning by offering opportunities such as watching short videos on TikTok, YouTube, Instagram, and Facebook, clicking paid ads, participating in trivia quizzes, writing blog content, and playing online games like chess and draughts. The platform also includes a referral program with commission rewards, along with bonuses such as free spins and welcome incentives that help new users start earning quickly. Beyond task-based earnings, StarHela provides educational content like Forex trading tutorials and e-books to support users in developing financial knowledge. With its simple dashboard, mobile accessibility, and wide range of earning options, StarHela is designed to make online earning flexible, engaging, and accessible to users worldwide.</p>'
        },
        324: {
            excerpt: 'StarHela is an online rewards platform that enables users to earn income by completing easy…',
            content: '<p>StarHela is an online rewards platform that enables users to earn income by completing easy digital tasks and engaging in interactive online activities. It brings together multiple earning options in one place, including watching short videos on TikTok and YouTube, clicking advertisements, writing blog posts, answering trivia questions, and playing competitive games like chess and draughts. Users can also take advantage of referral commissions, free spins, and welcome bonuses that increase their earning potential from the moment they join. In addition, the platform offers educational resources such as Forex trading lessons and e-books to help users build long-term financial skills. With its simple interface and mobile-friendly design, StarHela is built to help users turn everyday online activity into a consistent source of extra income.</p>'
        },
        323: {
            excerpt: 'StarHela is an innovative digital platform that allows users to earn money online through a…',
            content: '<p>StarHela is an innovative digital platform that allows users to earn money online through a variety of simple and engaging activities. From watching TikTok and YouTube videos to clicking ads, blogging, playing games, and participating in trivia challenges, StarHela provides multiple ways for users to generate extra income from their smartphones or computers. The platform also features exciting rewards such as free spins, welcome bonuses, referral commissions, and competitive gaming opportunities. Beyond entertainment and task-based earnings, StarHela empowers users with free Forex training, premium tutorials, and educational e-books designed to improve financial knowledge and online earning skills. With its user-friendly dashboard, mobile accessibility, and diverse earning options, StarHela creates a convenient and enjoyable experience for anyone looking to turn their free time into income.</p>'
        },
        322: {
            excerpt: 'StarHela is a dynamic online earning platform designed to help users make money through simple…',
            content: '<p>StarHela is a dynamic online earning platform designed to help users make money through simple digital activities and interactive entertainment. The platform offers multiple income opportunities, including watching TikTok, YouTube, Instagram, and Facebook videos, clicking paid advertisements, writing blogs, answering trivia questions, playing online games such as chess and draughts, and participating in reward spins. Users can also benefit from affiliate marketing through a generous 55% referral commission system, welcome bonuses, free spins, and top winner rewards. In addition to entertainment-based earnings, StarHela provides free Forex trading classes, premium tutorials, and educational e-books to help users build valuable financial skills. Accessible through both its website and Android app, StarHela aims to make online earning simple, fun, and beginner-friendly by allowing users to earn anytime and anywhere directly from their dashboard.</p>'
        }
    };

    const defaultExcerpt = 'StarHela is a comprehensive digital platform designed to help users earn money through various online activities including watching videos, completing surveys, reading articles, and participating in educational content.';
    const defaultContent = `
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
                <p>Thousands of users are already earning with StarHela. Join our growing community and start your journey to financial freedom today.</p>
            `;

    for (let i = totalPosts; i > 0; i--) {
        posts.push({
            id: i,
            title: `Starhela`,
            category: i % 2 === 0 ? 'StarHela' : 'Star Hela',
            excerpt: customPosts[i] ? customPosts[i].excerpt : defaultExcerpt,
            image: `/images/${postImages[i % postImages.length]}`,
            slug: `starhela-${i}`,
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            content: customPosts[i] ? customPosts[i].content : defaultContent
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
