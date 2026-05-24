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
    'title' => 'StarHela - Post #' . $post_id,
    'category' => ($post_id % 2 == 0) ? 'StarHela' : 'Star Hela',
    'image' => 'assets/images/' . $post_images[($post_id % 16) + 1],
    'date' => date('F j, Y'),
    'content' => '
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

        <p><strong>Ready to start earning?</strong> <a href="register.php?ref=samkiliswa">Sign up now</a> and begin your StarHela journey!</p>
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
                    <a href="register.php?ref=samkiliswa" class="btn btn-primary">Sign Up StarHela</a>
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
                        <a href="post.php?id=<?php echo $post_id - 1; ?>" class="btn">← Previous Post</a>
                    </div>
                    <?php endif; ?>

                    <?php if ($post_id < 330): ?>
                    <div class="nav-link" style="text-align: right;">
                        <a href="post.php?id=<?php echo $post_id + 1; ?>" class="btn">Next Post →</a>
                    </div>
                    <?php endif; ?>
                </div>

                <div class="back-to-home">
                    <a href="index.php">← Back to All Posts</a>
                </div>
            </article>
        </div>
    </main>

    <!-- App Download Widget -->
    <aside class="app-download-widget">
        <div class="container">
            <div class="widget-content">
                <h3>Download Our App</h3>
                <a href="https://www.appcreator24.com/app3965463-vy1ohn" class="btn btn-download" target="_blank" rel="noopener">Download App</a>
            </div>
        </div>
    </aside>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <p class="copyright">Copyright <?php echo date('Y'); ?> &mdash; StarHela. All rights reserved.</p>
        </div>
    </footer>

    <script src="assets/js/script.js"></script>
</body>
</html>
