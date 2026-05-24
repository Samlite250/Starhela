<?php
$post_images = [
    1=>'post-1.webp', 'post-2.webp', 'post-3.webp', 'post-4.webp',
    'post-5.webp', 'post-6.webp', 'post-7.webp', 'post-8.webp',
    'post-9.webp', 'post-10.webp', 'post-11.webp', 'post-12.webp',
    'post-13.jpeg', 'post-14.jpeg', 'post-15.jpeg', 'post-16.jpeg'
];
// Pagination setup
$posts_per_page = 10;
$current_page = isset($_GET['page']) ? max(1, intval($_GET['page'])) : 1;
$total_posts = 330; // Total number of posts
$total_pages = ceil($total_posts / $posts_per_page);
$offset = ($current_page - 1) * $posts_per_page;

// Sample posts data
$all_posts = [];
for ($i = $total_posts; $i > 0; $i--) {
    $all_posts[] = [
        'id' => $i,
        'title' => 'Starhela',
        'category' => ($i % 2 == 0) ? 'StarHela' : 'Star Hela',
        'excerpt' => ($i === $total_posts)
            ? 'StarHela is an online platform built to help users earn money through simple digital activities…'
            : 'StarHela is a comprehensive digital platform designed to help users earn money through various online activities including watching videos, completing surveys, reading articles, and participating in educational content.',
        'image' => 'assets/images/' . $post_images[($i % 16) + 1],
        'slug' => 'starhela-' . $i
    ];
}

// Get posts for current page
$posts = array_slice($all_posts, $offset, $posts_per_page);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StarHela - Earn Money Through Simple Digital Activities</title>
    <link rel="icon" href="assets/images/post-1.webp" type="image/webp">
    <link rel="stylesheet" href="assets/css/style.css">
    <meta name="description" content="StarHela offers TikTok & YouTube videos, ad clicks, blogging, Surveys, Forex tutorials, e‑books, chess & draughts to boost your earnings.">
</head>
<body>
    <!-- Skip to content link for accessibility -->
    <a href="#main-content" class="skip-link">Skip to content</a>

    <!-- Header -->
    <header class="site-header">
        <div class="container">
            <div class="header-content">
                <div class="site-branding">
                    <h1 class="site-title"><a href="index.php">StarHela</a></h1>
                    <p class="site-description">StarHela offers TikTok & YouTube videos, ad clicks, blogging, Surveys, Forex tutorials, e‑books, chess & draughts to boost your earnings.</p>
                </div>

                <nav class="main-navigation">
                    <button class="menu-toggle" aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul class="nav-menu">
                        <li><a href="index.php" class="active">Home</a></li>
                    </ul>
                </nav>

                <div class="header-cta">
                    <a href="https://starhela.com/register.php?ref=Mami250" class="btn btn-primary">Sign Up StarHela</a>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main id="main-content" class="site-main">
        <div class="container">
            <div class="content-wrapper">
                <!-- Posts Grid -->
                <div class="posts-grid">
                    <?php foreach ($posts as $post): ?>
                    <article class="post-card">
                        <div class="post-image">
                            <a href="post.php?id=<?php echo $post['id']; ?>">
                                <img src="<?php echo $post['image']; ?>" alt="<?php echo htmlspecialchars($post['title']); ?>" loading="lazy">
                            </a>
                        </div>
                        <div class="post-content">
                            <div class="post-category">
                                <a href="category.php?cat=<?php echo urlencode($post['category']); ?>"><?php echo htmlspecialchars($post['category']); ?></a>
                            </div>
                            <h2 class="post-title">
                                <a href="post.php?id=<?php echo $post['id']; ?>"><?php echo htmlspecialchars($post['title']); ?></a>
                            </h2>
                            <div class="post-excerpt">
                                <p><?php echo htmlspecialchars($post['excerpt']); ?></p>
                            </div>
                            <a href="post.php?id=<?php echo $post['id']; ?>" class="read-more">Read More</a>
                        </div>
                    </article>
                    <?php endforeach; ?>
                </div>

                <!-- Pagination -->
                <nav class="pagination" aria-label="Posts pagination">
                    <?php
                    // Show first page
                    if ($current_page > 1) {
                        echo '<a href="index.php?page=1">1</a>';
                    } else {
                        echo '<span class="current">1</span>';
                    }

                    // Show page 2
                    if ($total_pages > 1) {
                        if ($current_page == 2) {
                            echo '<span class="current">2</span>';
                        } else {
                            echo '<a href="index.php?page=2">2</a>';
                        }
                    }

                    // Show page 3
                    if ($total_pages > 2) {
                        if ($current_page == 3) {
                            echo '<span class="current">3</span>';
                        } else {
                            echo '<a href="index.php?page=3">3</a>';
                        }
                    }

                    // Show dots if needed
                    if ($current_page > 4 || ($current_page <= 4 && $total_pages > 4)) {
                        echo '<span class="dots">…</span>';
                    }

                    // Show current page if > 3
                    if ($current_page > 3 && $current_page < $total_pages) {
                        echo '<span class="current">' . $current_page . '</span>';
                    }

                    // Show last page
                    if ($total_pages > 3) {
                        if ($current_page == $total_pages) {
                            echo '<span class="current">' . $total_pages . '</span>';
                        } else {
                            echo '<a href="index.php?page=' . $total_pages . '">' . $total_pages . '</a>';
                        }
                    }

                    // Next page link
                    if ($current_page < $total_pages) {
                        echo '<a href="index.php?page=' . ($current_page + 1) . '" class="next-page">Next page</a>';
                    }
                    ?>
                </nav>
            </div>
        </div>
    </main>

    <!-- Sidebar Widget -->
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
