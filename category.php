<?php
$post_images = [
    1=>'post-1.webp', 'post-2.webp', 'post-3.webp', 'post-4.webp',
    'post-5.webp', 'post-6.webp', 'post-7.webp', 'post-8.webp',
    'post-9.webp', 'post-10.webp', 'post-11.webp', 'post-12.webp',
    'post-13.jpeg', 'post-14.jpeg', 'post-15.jpeg', 'post-16.jpeg'
];
$category = isset($_GET['cat']) ? htmlspecialchars($_GET['cat']) : 'StarHela';

// Pagination setup
$posts_per_page = 10;
$current_page = isset($_GET['page']) ? max(1, intval($_GET['page'])) : 1;
$total_posts = 165; // Half of total posts per category
$total_pages = ceil($total_posts / $posts_per_page);
$offset = ($current_page - 1) * $posts_per_page;

// Generate posts for category
$posts = [];
for ($i = 0; $i < $posts_per_page; $i++) {
    $post_num = $total_posts - $offset - $i;
    if ($post_num > 0) {
        $posts[] = [
            'id' => $post_num * 2 + ($category === 'StarHela' ? 0 : 1),
            'title' => 'StarHela - Post #' . ($post_num * 2 + ($category === 'StarHela' ? 0 : 1)),
            'category' => $category,
            'excerpt' => 'StarHela is a comprehensive digital platform designed to help users earn money through various online activities including watching videos, completing surveys, reading articles, and participating in educational content.',
            'image' => 'assets/images/' . $post_images[($post_num % 16) + 1],
        ];
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Category: <?php echo $category; ?> - StarHela</title>
    <link rel="icon" href="assets/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
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
    <main id="main-content" class="site-main">
        <div class="container">
            <div class="content-wrapper">
                <div style="margin-bottom: 30px;">
                    <h2 style="color: #1f2937; font-size: 2rem;">Category: <?php echo $category; ?></h2>
                    <p style="color: #666; margin-top: 10px;">Showing posts from <?php echo $category; ?> category</p>
                </div>

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
                <nav class="pagination" aria-label="Category pagination">
                    <?php
                    $base_url = 'category.php?cat=' . urlencode($category);

                    if ($current_page > 1) {
                        echo '<a href="' . $base_url . '&page=1">1</a>';
                    } else {
                        echo '<span class="current">1</span>';
                    }

                    if ($total_pages > 1) {
                        if ($current_page == 2) {
                            echo '<span class="current">2</span>';
                        } else {
                            echo '<a href="' . $base_url . '&page=2">2</a>';
                        }
                    }

                    if ($total_pages > 2) {
                        if ($current_page == 3) {
                            echo '<span class="current">3</span>';
                        } else {
                            echo '<a href="' . $base_url . '&page=3">3</a>';
                        }
                    }

                    if ($current_page > 4 || ($current_page <= 4 && $total_pages > 4)) {
                        echo '<span class="dots">…</span>';
                    }

                    if ($current_page > 3 && $current_page < $total_pages) {
                        echo '<span class="current">' . $current_page . '</span>';
                    }

                    if ($total_pages > 3) {
                        if ($current_page == $total_pages) {
                            echo '<span class="current">' . $total_pages . '</span>';
                        } else {
                            echo '<a href="' . $base_url . '&page=' . $total_pages . '">' . $total_pages . '</a>';
                        }
                    }

                    if ($current_page < $total_pages) {
                        echo '<a href="' . $base_url . '&page=' . ($current_page + 1) . '" class="next-page">Next page</a>';
                    }
                    ?>
                </nav>
            </div>
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
