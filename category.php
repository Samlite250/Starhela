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
            'title' => 'Starhela',
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
    <link rel="icon" href="assets/images/post-1.webp" type="image/webp">
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
                    <a href="https://starhela.com/register.php?ref=Mami250" class="btn btn-primary">Sign Up StarHela</a>
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
            <p class="copyright">Copyright <?php echo date('Y'); ?> &mdash; StarHela. All rights reserved.</p>
        </div>
    </footer>

    <script src="assets/js/script.js"></script>
</body>
</html>
