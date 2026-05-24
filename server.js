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
            description: '<p><strong>StarHela Rwanda 🇷🇼 — Your Ultimate Guide to Online Earnings</strong></p><p>Register today with an activation fee of only <strong>RWF 6,000</strong> and start earning through multiple income streams. Get a <strong>Welcome Bonus of RWF 3,600 + Free Casino Spin</strong> on joining!</p>',
            opportunities: [
                '📺 Watch & Earn — Get paid for watching YouTube, TikTok, Facebook & Instagram Reels',
                '🧠 Survey Questions — Answer questions correctly and earn rewards',
                '📢 Advert Clicks — Earn by engaging with ads on the platform',
                '♟️ Games (Chess & Draughts) — Compete and earn based on performance',
                '🎰 Free Spin & Win Casino — Enjoy free spins and bet to win up to X10 your stake',
                '🎨 Digital Marketplace — Buy and explore digital art and online assets',
                '💼 Affiliate Marketing — Earn commissions across 3 levels'
            ],
            paymentMethods: [
                'M-Pesa',
                'Airtel Money',
                'Bank Transfer (RWF)',
                'Secure payments with reliable customer support'
            ],
            benefits: [
                '🎁 Welcome Bonus: RWF 3,600 + Free Casino Spin on joining',
                '💼 Affiliate Level 1: RWF 3,000 per referral',
                '💼 Affiliate Level 2: RWF 1,700 per referral',
                '💼 Affiliate Level 3: RWF 700 per referral',
                '🏆 Weekly bonuses for top performers',
                '💳 Secure & reliable payments in local currency (RWF)'
            ]
        }
    },
    burundi: {
        name: 'Burundi',
        code: 'BI',
        flag: '🇧🇮',
        info: {
            description: '<p><strong>StarHela Burundi 🇧🇮 — Your Ultimate Guide to Online Earnings</strong></p><p>Register today with an activation fee of only <strong>BIF 26,000</strong> and start earning through multiple income streams. Get a <strong>Welcome Bonus of BIF 3,000 + Free Casino Spin</strong> on joining!</p>',
            opportunities: [
                '📺 Watch & Earn — Get paid for watching YouTube, TikTok, Facebook & Instagram Reels',
                '🧠 Survey Questions — Answer questions correctly and earn rewards',
                '📢 Advert Clicks — Earn by engaging with ads on the platform',
                '♟️ Games (Chess & Draughts) — Compete and earn based on performance',
                '🎰 Free Spin & Win Casino — Enjoy free spins and bet to win up to X10 your stake',
                '🎨 Digital Marketplace — Buy and explore digital art and online assets',
                '💼 Affiliate Marketing — Earn commissions across 3 levels'
            ],
            paymentMethods: [
                'Mobile Money (Lumicash, Ecocash)',
                'Bank Transfer (BIF)',
                'PayPal',
                'Western Union'
            ],
            benefits: [
                '🎁 Welcome Bonus: BIF 3,000 + Free Casino Spin on joining',
                '💼 Affiliate Level 1: BIF 4,000 per referral',
                '💼 Affiliate Level 2: BIF 2,000 per referral',
                '💼 Affiliate Level 3: BIF 700 per referral',
                '🏆 Weekly bonuses for top performers',
                '💳 Secure & reliable payments in local currency (BIF)'
            ]
        }
    },
    uganda: {
        name: 'Uganda',
        code: 'UG',
        flag: '🇺🇬',
        info: {
            description: '<p><strong>StarHela Uganda 🇺🇬 — Your Ultimate Guide to Online Earnings</strong></p><p>Register today with an activation fee of only <strong>UGX 19,500</strong> and start earning through multiple income streams. Get a <strong>Welcome Bonus of UGX 9,000 + Free Casino Spin</strong> on joining!</p>',
            opportunities: [
                '📺 Watch & Earn — Get paid for watching YouTube, TikTok, Facebook & Instagram Reels',
                '🧠 Survey Questions — Answer questions correctly and earn rewards',
                '📢 Advert Clicks — Earn by engaging with ads on the platform',
                '♟️ Games (Chess & Draughts) — Compete and earn based on performance',
                '🎰 Free Spin & Win Casino — Enjoy free spins and bet to win up to X10 your stake',
                '🎨 Digital Marketplace — Buy and explore digital art and online assets',
                '💼 Affiliate Marketing — Earn commissions across 3 levels'
            ],
            paymentMethods: [
                'Mobile Money (MTN, Airtel)',
                'Bank Transfer (UGX)',
                'PayPal',
                'Cryptocurrency'
            ],
            benefits: [
                '🎁 Welcome Bonus: UGX 9,000 + Free Casino Spin on joining',
                '💼 Affiliate Level 1: UGX 10,300 per referral',
                '💼 Affiliate Level 2: UGX 5,000 per referral',
                '💼 Affiliate Level 3: UGX 2,000 per referral',
                '🏆 Weekly bonuses for top performers',
                '💳 Secure & reliable payments in local currency (UGX)'
            ]
        }
    },
    ghana: {
        name: 'Ghana',
        code: 'GH',
        flag: '🇬🇭',
        info: {
            description: '<p><strong>StarHela Ghana 🇬🇭 — Your Ultimate Guide to Online Earnings</strong></p><p>Register today with an activation fee of only <strong>GHC 95</strong> and start earning through multiple income streams. Get a <strong>Welcome Bonus of GHC 40 + Free Casino Spin</strong> on joining!</p>',
            opportunities: [
                '📺 Watch & Earn — Get paid for watching YouTube, TikTok, Facebook & Instagram Reels',
                '🧠 Survey Questions — Answer questions correctly and earn rewards',
                '📢 Advert Clicks — Earn by engaging with ads on the platform',
                '♟️ Games (Chess & Draughts) — Compete and earn based on performance',
                '🎰 Free Spin & Win Casino — Enjoy free spins and bet to win up to X10 your stake',
                '🎨 Digital Marketplace — Buy and explore digital art and online assets',
                '💼 Affiliate Marketing — Earn commissions across 3 levels'
            ],
            paymentMethods: [
                'Mobile Money (MTN, Vodafone, AirtelTigo)',
                'Bank Transfer (GHC)',
                'PayPal',
                'Bitcoin'
            ],
            benefits: [
                '🎁 Welcome Bonus: GHC 40 + Free Casino Spin on joining',
                '💼 Affiliate Level 1: GHC 40 per referral',
                '💼 Affiliate Level 2: GHC 20 per referral',
                '💼 Affiliate Level 3: GHC 10 per referral',
                '🏆 Weekly bonuses for top performers',
                '💳 Secure & reliable payments in local currency (GHC)'
            ]
        }
    },
    cameroon: {
        name: 'Cameroon',
        code: 'CM',
        flag: '🇨🇲',
        info: {
            description: '<p><strong>StarHela Cameroon 🇨🇲 — Your Ultimate Guide to Online Earnings</strong></p><p>Register today with an activation fee of only <strong>XAF 4,500</strong> and start earning through multiple income streams. Get a <strong>Welcome Bonus of XAF 2,000 + Free Casino Spin</strong> on joining!</p>',
            opportunities: [
                '📺 Watch & Earn — Get paid for watching YouTube, TikTok, Facebook & Instagram Reels',
                '🧠 Survey Questions — Answer questions correctly and earn rewards',
                '📢 Advert Clicks — Earn by engaging with ads on the platform',
                '♟️ Games (Chess & Draughts) — Compete and earn based on performance',
                '🎰 Free Spin & Win Casino — Enjoy free spins and bet to win up to X10 your stake',
                '🎨 Digital Marketplace — Buy and explore digital art and online assets',
                '💼 Affiliate Marketing — Earn commissions across 3 levels'
            ],
            paymentMethods: [
                'Mobile Money (MTN, Orange)',
                'Bank Transfer (XAF)',
                'PayPal',
                'Western Union'
            ],
            benefits: [
                '🎁 Welcome Bonus: XAF 2,000 + Free Casino Spin on joining',
                '💼 Affiliate Level 1: XAF 2,000 per referral',
                '💼 Affiliate Level 2: XAF 1,000 per referral',
                '💼 Affiliate Level 3: XAF 500 per referral',
                '🏆 Weekly bonuses for top performers',
                '💳 Secure & reliable payments in local currency (XAF)'
            ]
        }
    },
    kenya: {
        name: 'Kenya',
        code: 'KE',
        flag: '🇰🇪',
        info: {
            description: '<p><strong>StarHela Kenya 🇰🇪 — Your Ultimate Guide to Online Earnings</strong></p><p>Register today with an activation fee of only <strong>KSH 550</strong> and start earning through multiple income streams. Get a <strong>Welcome Bonus of KSH 300 + Free Casino Spin</strong> on joining!</p>',
            opportunities: [
                '📺 Watch & Earn — Get paid for watching YouTube, TikTok, Facebook & Instagram Reels',
                '🧠 Survey Questions — Answer questions correctly and earn rewards',
                '📢 Advert Clicks — Earn by engaging with ads on the platform',
                '♟️ Games (Chess & Draughts) — Compete and earn based on performance',
                '🎰 Free Spin & Win Casino — Enjoy free spins and bet to win up to X10 your stake',
                '🎨 Digital Marketplace — Buy and explore digital art and online assets',
                '💼 Affiliate Marketing — Earn commissions across 3 levels'
            ],
            paymentMethods: [
                'M-Pesa',
                'Airtel Money',
                'Bank Transfer (KES)',
                'PayPal'
            ],
            benefits: [
                '🎁 Welcome Bonus: KSH 300 + Free Casino Spin on joining',
                '💼 Affiliate Level 1: KSH 300 per referral',
                '💼 Affiliate Level 2: KSH 150 per referral',
                '💼 Affiliate Level 3: KSH 50 per referral',
                '🏆 Weekly bonuses for top performers',
                '💳 Secure & reliable payments via M-Pesa & Airtel Money'
            ]
        }
    },
    botswana: {
        name: 'Botswana',
        code: 'BW',
        flag: '🇧🇼',
        info: {
            description: '<p><strong>StarHela Botswana 🇧🇼 — Your Ultimate Guide to Online Earnings</strong></p><p>Register today with an activation fee of only <strong>BWP 100</strong> and start earning through multiple income streams. Get a <strong>Welcome Bonus of BWP 30 + Free Casino Spin</strong> on joining!</p>',
            opportunities: [
                '📺 Watch & Earn — Get paid for watching YouTube, TikTok, Facebook & Instagram Reels',
                '🧠 Survey Questions — Answer questions correctly and earn rewards',
                '📢 Advert Clicks — Earn by engaging with ads on the platform',
                '♟️ Games (Chess & Draughts) — Compete and earn based on performance',
                '🎰 Free Spin & Win Casino — Enjoy free spins and bet to win up to X10 your stake',
                '🎨 Digital Marketplace — Buy and explore digital art and online assets',
                '💼 Affiliate Marketing — Earn commissions across 3 levels'
            ],
            paymentMethods: [
                'Bank Transfer (BWP)',
                'PayPal',
                'Orange Money',
                'Cryptocurrency'
            ],
            benefits: [
                '🎁 Welcome Bonus: BWP 30 + Free Casino Spin on joining',
                '💼 Affiliate Level 1: BWP 48 per referral',
                '💼 Affiliate Level 2: BWP 20 per referral',
                '💼 Affiliate Level 3: BWP 10 per referral',
                '🏆 Weekly bonuses for top performers',
                '💳 Secure & reliable payments in local currency (BWP)'
            ]
        }
    },
    malawi: {
        name: 'Malawi',
        code: 'MW',
        flag: '🇲🇼',
        info: {
            description: '<p><strong>StarHela Malawi 🇲🇼 — Your Ultimate Guide to Online Earnings</strong></p><p>Register today with an activation fee of only <strong>MK 12,500</strong> and start earning through multiple income streams. Get a <strong>Welcome Bonus of MK 3,000 + Free Casino Spin</strong> on joining!</p>',
            opportunities: [
                '📺 Watch & Earn — Get paid for watching YouTube, TikTok, Facebook & Instagram Reels',
                '🧠 Survey Questions — Answer questions correctly and earn rewards',
                '📢 Advert Clicks — Earn by engaging with ads on the platform',
                '♟️ Games (Chess & Draughts) — Compete and earn based on performance',
                '🎰 Free Spin & Win Casino — Enjoy free spins and bet to win up to X10 your stake',
                '🎨 Digital Marketplace — Buy and explore digital art and online assets',
                '💼 Affiliate Marketing — Earn commissions across 3 levels'
            ],
            paymentMethods: [
                'Airtel Money',
                'TNM Mpamba',
                'Bank Transfer (MWK)',
                'PayPal'
            ],
            benefits: [
                '🎁 Welcome Bonus: MK 3,000 + Free Casino Spin on joining',
                '💼 Affiliate Level 1: MK 5,000 per referral',
                '💼 Affiliate Level 2: MK 2,000 per referral',
                '💼 Affiliate Level 3: MK 1,000 per referral',
                '🏆 Weekly bonuses for top performers',
                '💳 Secure & reliable payments in local currency (MWK)'
            ]
        }
    },
    zambia: {
        name: 'Zambia',
        code: 'ZM',
        flag: '🇿🇲',
        info: {
            description: '<p><strong>StarHela Zambia 🇿🇲 — Your Ultimate Guide to Online Earnings</strong></p><p>Register today with an activation fee of only <strong>ZK 125</strong> and start earning through multiple income streams. Get a <strong>Welcome Bonus of ZK 30 + Free Casino Spin</strong> on joining!</p>',
            opportunities: [
                '📺 Watch & Earn — Get paid for watching YouTube, TikTok, Facebook & Instagram Reels',
                '🧠 Survey Questions — Answer questions correctly and earn rewards',
                '📢 Advert Clicks — Earn by engaging with ads on the platform',
                '♟️ Games (Chess & Draughts) — Compete and earn based on performance',
                '🎰 Free Spin & Win Casino — Enjoy free spins and bet to win up to X10 your stake',
                '🎨 Digital Marketplace — Buy and explore digital art and online assets',
                '💼 Affiliate Marketing — Earn commissions across 3 levels'
            ],
            paymentMethods: [
                'Mobile Money (MTN, Airtel)',
                'Bank Transfer (ZMW)',
                'PayPal',
                'Cryptocurrency'
            ],
            benefits: [
                '🎁 Welcome Bonus: ZK 30 + Free Casino Spin on joining',
                '💼 Affiliate Level 1: ZK 50 per referral',
                '💼 Affiliate Level 2: ZK 30 per referral',
                '💼 Affiliate Level 3: ZK 20 per referral',
                '🏆 Weekly bonuses for top performers',
                '💳 Secure & reliable payments in local currency (ZMW)'
            ]
        }
    },
    nigeria: {
        name: 'Nigeria',
        code: 'NG',
        flag: '🇳🇬',
        info: {
            description: '<p><strong>StarHela Nigeria 🇳🇬 — Your Ultimate Guide to Online Earnings</strong></p><p>Register today with an activation fee of only <strong>NGN 9,000</strong> and start earning through multiple income streams. Get a <strong>Welcome Bonus of NGN 4,000 + Free Casino Spin</strong> on joining!</p>',
            opportunities: [
                '📺 Watch & Earn — Get paid for watching YouTube, TikTok, Facebook & Instagram Reels',
                '🧠 Survey Questions — Answer questions correctly and earn rewards',
                '📢 Advert Clicks — Earn by engaging with ads on the platform',
                '♟️ Games (Chess & Draughts) — Compete and earn based on performance',
                '🎰 Free Spin & Win Casino — Enjoy free spins and bet to win up to X10 your stake',
                '🎨 Digital Marketplace — Buy and explore digital art and online assets',
                '💼 Affiliate Marketing — Earn commissions across 3 levels'
            ],
            paymentMethods: [
                'Bank Transfer (NGN)',
                'Opay, Palmpay, Kuda',
                'PayPal',
                'Bitcoin & Crypto'
            ],
            benefits: [
                '🎁 Welcome Bonus: NGN 4,000 + Free Casino Spin on joining',
                '💼 Affiliate Level 1: NGN 4,500 per referral',
                '💼 Affiliate Level 2: NGN 2,000 per referral',
                '💼 Affiliate Level 3: NGN 700 per referral',
                '🏆 Weekly bonuses for top performers',
                '💳 Secure & reliable payments in local currency (NGN)'
            ]
        }
    },
    tanzania: {
        name: 'Tanzania',
        code: 'TZ',
        flag: '🇹🇿',
        info: {
            description: '<p><strong>StarHela Tanzania 🇹🇿 — Your Ultimate Guide to Online Earnings</strong></p><p>Register today with an activation fee of only <strong>TSh 11,000</strong> and start earning through multiple income streams. Get a <strong>Welcome Bonus of TSh 6,000 + Free Casino Spin</strong> on joining!</p>',
            opportunities: [
                '📺 Watch & Earn — Get paid for watching YouTube, TikTok, Facebook & Instagram Reels',
                '🧠 Survey Questions — Answer questions correctly and earn rewards',
                '📢 Advert Clicks — Earn by engaging with ads on the platform',
                '♟️ Games (Chess & Draughts) — Compete and earn based on performance',
                '🎰 Free Spin & Win Casino — Enjoy free spins and bet to win up to X10 your stake',
                '🎨 Digital Marketplace — Buy and explore digital art and online assets',
                '💼 Affiliate Marketing — Earn commissions across 3 levels'
            ],
            paymentMethods: [
                'M-Pesa Tanzania',
                'Airtel Money',
                'Tigo Pesa',
                'Bank Transfer (TZS)'
            ],
            benefits: [
                '🎁 Welcome Bonus: TSh 6,000 + Free Casino Spin on joining',
                '💼 Affiliate Level 1: TSh 5,000 per referral',
                '💼 Affiliate Level 2: TSh 3,000 per referral',
                '💼 Affiliate Level 3: TSh 1,500 per referral',
                '🏆 Weekly bonuses for top performers',
                '💳 Secure & reliable payments in local currency (TZS)'
            ]
        }
    },
    ivorycoast: {
        name: 'Ivory Coast',
        code: 'CI',
        flag: '🇨🇮',
        info: {
            description: '<p>StarHela Ivory Coast brings online earning opportunities to users across Côte d\'Ivoire. Start earning today!</p>',
            opportunities: [
                'Video watching rewards',
                'Online surveys',
                'Ad clicking tasks',
                'Content creation',
                'Educational resources',
                'Gaming rewards',
                'Referral bonuses'
            ],
            paymentMethods: [
                'Mobile Money (MTN, Orange, Moov)',
                'Bank Transfer (XOF)',
                'PayPal',
                'Western Union'
            ],
            benefits: [
                'CFA franc (XOF) payments',
                'Fast mobile money withdrawals',
                'Free registration',
                'French language support',
                'Active Ivorian community',
                'Multiple earning streams'
            ]
        }
    },
    senegal: {
        name: 'Senegal',
        code: 'SN',
        flag: '🇸🇳',
        info: {
            description: '<p>StarHela Senegal connects Senegalese users with flexible online earning opportunities. Join and start earning!</p>',
            opportunities: [
                'Video streaming rewards',
                'Paid surveys',
                'Ad clicking campaigns',
                'Blog writing',
                'Educational content',
                'Gaming activities',
                'Affiliate marketing'
            ],
            paymentMethods: [
                'Mobile Money (Orange, Free, Wave)',
                'Bank Transfer (XOF)',
                'PayPal',
                'Western Union'
            ],
            benefits: [
                'CFA franc (XOF) support',
                'Instant mobile money transfers',
                'No startup fees',
                'French language platform',
                'Growing Senegalese community',
                'Daily earning opportunities'
            ]
        }
    },
    southafrica: {
        name: 'South Africa',
        code: 'ZA',
        flag: '🇿🇦',
        info: {
            description: '<p>StarHela South Africa offers South Africans multiple ways to earn money online. Join our thriving community today!</p>',
            opportunities: [
                'Video watching tasks',
                'Online surveys',
                'Advertisement clicking',
                'Content writing',
                'Forex education',
                'Gaming rewards',
                'Referral program'
            ],
            paymentMethods: [
                'Bank Transfer (ZAR)',
                'PayPal',
                'SnapScan / Zapper',
                'Cryptocurrency'
            ],
            benefits: [
                'South African rand (ZAR) payments',
                'Reliable bank transfers',
                'Free to join',
                'English language platform',
                'Large South African community',
                'High earning potential'
            ]
        }
    },
    southsudan: {
        name: 'South Sudan',
        code: 'SS',
        flag: '🇸🇸',
        info: {
            description: '<p>StarHela South Sudan provides earning opportunities for users across South Sudan. Start your online income journey today!</p>',
            opportunities: [
                'Video watching rewards',
                'Survey participation',
                'Ad clicking tasks',
                'Content creation',
                'Educational resources',
                'Gaming activities',
                'Referral bonuses'
            ],
            paymentMethods: [
                'Mobile Money',
                'Bank Transfer (SSP)',
                'PayPal',
                'Western Union'
            ],
            benefits: [
                'South Sudanese pound (SSP) support',
                'Flexible earning schedule',
                'Free registration',
                'Dedicated support team',
                'Growing community',
                'Multiple income streams'
            ]
        }
    },
    drcongo: {
        name: 'DR Congo',
        code: 'CD',
        flag: '🇨🇩',
        info: {
            description: '<p>StarHela DR Congo opens doors for Congolese users to earn money online through simple digital tasks. Join today!</p>',
            opportunities: [
                'Video watching tasks',
                'Online surveys',
                'Ad clicking',
                'Content creation',
                'Forex tutorials',
                'Gaming rewards',
                'Daily challenges'
            ],
            paymentMethods: [
                'Mobile Money (M-Pesa, Airtel)',
                'Bank Transfer (CDF)',
                'PayPal',
                'Western Union'
            ],
            benefits: [
                'Congolese franc (CDF) payments',
                'Fast mobile money withdrawals',
                'No registration fees',
                'French language support',
                'Active Congolese community',
                'Multiple earning methods'
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
