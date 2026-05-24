<?php
$post_images = [
    1=>'post-1.webp', 'post-2.webp', 'post-3.webp', 'post-4.webp',
    'post-5.webp', 'post-6.webp', 'post-7.webp', 'post-8.webp',
    'post-9.webp', 'post-10.webp', 'post-11.webp', 'post-12.webp',
    'post-13.jpeg', 'post-14.jpeg', 'post-15.jpeg', 'post-16.jpeg'
];
$post_id = isset($_GET['id']) ? intval($_GET['id']) : 1;

// Sample post data
$post = [
    'id' => $post_id,
    'title' => 'Starhela',
    'category' => ($post_id % 2 == 0) ? 'StarHela' : 'Star Hela',
    'image' => 'assets/images/' . $post_images[($post_id % 16) + 1],
    'date' => date('F j, Y'),
    'content' => [
        330 => '<p>StarHela is an online platform built to help users earn money through simple digital activities and interactive content. It brings together several earning methods, including watching short-form videos on TikTok and YouTube, viewing social media reels, clicking advertisements, writing blog articles, answering trivia questions, and playing online games such as chess and draughts. Users can also grow their income through referrals, earning commissions for inviting new members, along with bonus features like free spins and welcome rewards. Beyond entertainment-based earnings, StarHela offers learning resources such as Forex tutorials and e-books to support users in developing financial and trading knowledge. With its user-friendly interface and mobile accessibility, StarHela is designed to turn everyday online engagement into flexible earning opportunities.</p>',
        329 => '<p>StarHela is a digital earning platform that enables users to generate income through a mix of simple online tasks and interactive activities. It allows members to earn by watching short videos on TikTok and YouTube, engaging with social media reels, clicking paid ads, writing blog posts, answering trivia questions, and playing strategy games such as chess and draughts. The platform also includes a referral program where users earn commissions by inviting others, along with bonus features like free spins and welcome rewards that help users start earning quickly. In addition, StarHela provides educational materials such as Forex training courses and e-books to support users in building financial knowledge. With its straightforward dashboard and mobile access, it is designed to make online earning flexible and accessible from anywhere.</p>',
        328 => '<p>StarHela is an online income platform that gives users the opportunity to earn money by completing a range of simple digital tasks and engaging activities. It combines entertainment and earning through features such as watching short videos on TikTok and YouTube, viewing social media reels, clicking advertisements, writing blog content, answering trivia questions, and playing online games like chess and draughts. Users can also earn through a referral system that pays commissions for inviting new members, along with added benefits like welcome bonuses and free spins to boost initial earnings. Beyond task-based rewards, StarHela also provides educational resources including Forex tutorials and e-books to help users develop financial skills. With its easy navigation and mobile-friendly design, the platform is designed to make online earning accessible, flexible, and engaging for everyday users.</p>',
        327 => '<p>StarHela is a multifunctional online earning platform that allows users to make money by performing simple digital tasks and engaging with online content. It offers a variety of earning activities such as watching TikTok and YouTube videos, interacting with social media reels, clicking short advertisements, writing blog posts, answering trivia questions, and participating in online games like chess and draughts. Users can also increase their earnings through referral programs, where inviting others earns commission rewards, as well as bonuses like free spins and welcome incentives. In addition to earning features, StarHela provides educational resources such as Forex training courses and e-books aimed at improving users\' financial knowledge. With its accessible dashboard and mobile-friendly design, StarHela is built to help users convert their time online into consistent earning opportunities.</p>',
        326 => '<p>StarHela is an online rewards system that lets users earn money by completing a variety of simple digital tasks and engaging in interactive content. The platform includes activities such as watching short-form videos on TikTok and YouTube, viewing social media reels, clicking advertisements, writing articles, answering trivia questions, and playing competitive games like chess and draughts. It also provides earning opportunities through referrals, where users can earn commissions by inviting others to join, as well as bonuses like free spins and registration rewards that enhance early earnings. Alongside entertainment-based tasks, StarHela offers educational materials including Forex tutorials and e-books to help users build financial literacy and online income skills. With its easy-to-use dashboard and mobile access, StarHela is designed to give users a flexible way to turn everyday online engagement into earnings.</p>',
        325 => '<p>StarHela is a digital rewards and income-earning platform that allows users to generate money through everyday online activities and interactive tasks. It combines entertainment and earning by offering opportunities such as watching short videos on TikTok, YouTube, Instagram, and Facebook, clicking paid ads, participating in trivia quizzes, writing blog content, and playing online games like chess and draughts. The platform also includes a referral program with commission rewards, along with bonuses such as free spins and welcome incentives that help new users start earning quickly. Beyond task-based earnings, StarHela provides educational content like Forex trading tutorials and e-books to support users in developing financial knowledge. With its simple dashboard, mobile accessibility, and wide range of earning options, StarHela is designed to make online earning flexible, engaging, and accessible to users worldwide.</p>',
        324 => '<p>StarHela is an online rewards platform that enables users to earn income by completing easy digital tasks and engaging in interactive online activities. It brings together multiple earning options in one place, including watching short videos on TikTok and YouTube, clicking advertisements, writing blog posts, answering trivia questions, and playing competitive games like chess and draughts. Users can also take advantage of referral commissions, free spins, and welcome bonuses that increase their earning potential from the moment they join. In addition, the platform offers educational resources such as Forex trading lessons and e-books to help users build long-term financial skills. With its simple interface and mobile-friendly design, StarHela is built to help users turn everyday online activity into a consistent source of extra income.</p>',
        323 => '<p>StarHela is an innovative digital platform that allows users to earn money online through a variety of simple and engaging activities. From watching TikTok and YouTube videos to clicking ads, blogging, playing games, and participating in trivia challenges, StarHela provides multiple ways for users to generate extra income from their smartphones or computers. The platform also features exciting rewards such as free spins, welcome bonuses, referral commissions, and competitive gaming opportunities. Beyond entertainment and task-based earnings, StarHela empowers users with free Forex training, premium tutorials, and educational e-books designed to improve financial knowledge and online earning skills. With its user-friendly dashboard, mobile accessibility, and diverse earning options, StarHela creates a convenient and enjoyable experience for anyone looking to turn their free time into income.</p>',
        322 => '<p>StarHela is a dynamic online earning platform designed to help users make money through simple digital activities and interactive entertainment. The platform offers multiple income opportunities, including watching TikTok, YouTube, Instagram, and Facebook videos, clicking paid advertisements, writing blogs, answering trivia questions, playing online games such as chess and draughts, and participating in reward spins. Users can also benefit from affiliate marketing through a generous 55% referral commission system, welcome bonuses, free spins, and top winner rewards. In addition to entertainment-based earnings, StarHela provides free Forex trading classes, premium tutorials, and educational e-books to help users build valuable financial skills. Accessible through both its website and Android app, StarHela aims to make online earning simple, fun, and beginner-friendly by allowing users to earn anytime and anywhere directly from their dashboard.</p>',
    ][$post_id] ?? '
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
    '
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($post['title']); ?> - StarHela</title>
    <link rel="icon" href="assets/images/post-1.webp" type="image/webp">
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        .single-post {
            max-width: 800px;
            margin: 0 auto;
            background: #fff;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.1);
        }

        .post-header {
            margin-bottom: 30px;
        }

        .post-meta {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .post-meta span {
            color: #666;
            font-size: 0.9rem;
        }

        .post-featured-image {
            width: 100%;
            height: 400px;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 30px;
        }

        .post-featured-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .post-body {
            line-height: 1.8;
            color: #333;
        }

        .post-body h3 {
            color: #1f2937;
            margin-top: 30px;
            margin-bottom: 15px;
            font-size: 1.5rem;
        }

        .post-body p {
            margin-bottom: 20px;
        }

        .post-body ul,
        .post-body ol {
            margin-bottom: 20px;
            padding-left: 30px;
        }

        .post-body li {
            margin-bottom: 10px;
        }

        .post-body a {
            color: #2563eb;
            font-weight: 600;
        }

        .post-navigation {
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid #e5e7eb;
            gap: 20px;
            flex-wrap: wrap;
        }

        .nav-link {
            flex: 1;
            min-width: 200px;
        }

        .back-to-home {
            text-align: center;
            margin-top: 30px;
        }

        .back-to-home a {
            display: inline-block;
            padding: 12px 24px;
            background: #f3f4f6;
            color: #374151;
            border-radius: 6px;
            font-weight: 500;
        }

        .back-to-home a:hover {
            background: #e5e7eb;
        }

        @media (max-width: 768px) {
            .single-post {
                padding: 20px;
            }

            .post-featured-image {
                height: 250px;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="site-header">
        <div class="container">
            <div class="header-content">
                <div class="site-branding">
                    <h1 class="site-title"><a href="index.php">StarHela</a></h1>
                </div>
                <nav class="main-navigation">
                    <ul class="nav-menu">
                        <li><a href="index.php">Home</a></li>
                    </ul>
                </nav>
                <div class="header-cta">
                    <a href="https://starhela.com/register.php?ref=Mami250" class="btn btn-primary">Sign Up StarHela</a>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="site-main">
        <div class="container">
            <article class="single-post">
                <div class="post-header">
                    <div class="post-meta">
                        <span class="post-category">
                            <a href="category.php?cat=<?php echo urlencode($post['category']); ?>">
                                <?php echo htmlspecialchars($post['category']); ?>
                            </a>
                        </span>
                        <span class="post-date"><?php echo $post['date']; ?></span>
                    </div>
                    <h1><?php echo htmlspecialchars($post['title']); ?></h1>
                </div>

                <div class="post-featured-image">
                    <img src="<?php echo $post['image']; ?>" alt="<?php echo htmlspecialchars($post['title']); ?>">
                </div>

                <div class="post-body">
                    <?php echo $post['content']; ?>
                </div>

                <div class="post-navigation">
                    <?php if ($post_id > 1): ?>
                    <div class="nav-link">
                        <a href="post.php?id=<?php echo $post_id - 1; ?>" class="btn">← Previous</a>
                    </div>
                    <?php endif; ?>

                    <?php if ($post_id < 330): ?>
                    <div class="nav-link" style="text-align: right;">
                        <a href="post.php?id=<?php echo $post_id + 1; ?>" class="btn">Next →</a>
                    </div>
                    <?php endif; ?>
                </div>

                <div class="back-to-home">
                    <a href="index.php">← Back</a>
                </div>
            </article>
        </div>
    </main>

    <!-- App Download Widget -->
    <aside class="app-download-widget">
        <div class="container">
            <div class="widget-content">
                <h3>Join StarHela Today</h3>
                <div class="widget-buttons">
                    <a href="https://starhela.com/register.php?ref=Mami250" class="btn btn-download" target="_blank" rel="noopener">Sign Up</a>
                    <a href="https://starhela.com/login.php" class="btn btn-signin" target="_blank" rel="noopener">Sign In</a>
                    <a href="https://wa.me/250732580014?text=Hello%20StarHela%20%F0%9F%91%8B%2C%20I%20came%20across%20your%20platform%20and%20I%27m%20interested%20in%20learning%20more%20about%20how%20to%20start%20earning.%20Could%20you%20please%20guide%20me%3F%20Thank%20you!" class="btn btn-whatsapp" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style="vertical-align:middle;margin-right:6px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </aside>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-inner">
                <div class="footer-brand">
                    <span class="footer-logo">StarHela</span>
                    <p>Turn your online time into real earnings.</p>
                </div>
                <div class="footer-divider"></div>
                <div class="footer-copy">
                    <p>&copy; 2026 <strong>samcodings</strong>. All Rights Reserved by <strong>SamDev</strong>.</p>
                    <p class="footer-tagline">Designed &amp; Built with ❤️ by SamDev</p>
                </div>
            </div>
        </div>
    </footer>

    <script src="assets/js/script.js"></script>
</body>
</html>
