<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up - StarHela</title>
    <link rel="icon" href="assets/images/post-1.webp" type="image/webp">
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        .redirect-wrap {
            min-height: 70vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 40px 20px;
        }
        .redirect-box {
            max-width: 480px;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 4px 24px rgba(0,0,0,0.1);
            padding: 48px 40px;
        }
        .redirect-box h2 {
            color: #1f2937;
            font-size: 1.8rem;
            margin-bottom: 12px;
        }
        .redirect-box p {
            color: #6b7280;
            margin-bottom: 32px;
            line-height: 1.6;
        }
        .btn-signup {
            display: inline-block;
            background: #2563eb;
            color: #fff;
            padding: 14px 36px;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            text-decoration: none;
            transition: background 0.2s;
        }
        .btn-signup:hover { background: #1e40af; }
        .countdown {
            margin-top: 20px;
            color: #9ca3af;
            font-size: 0.9rem;
        }
        .countdown span {
            font-weight: 700;
            color: #2563eb;
        }
    </style>
</head>
<body>
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
            </div>
        </div>
    </header>

    <div class="redirect-wrap">
        <div class="redirect-box">
            <h2>Join StarHela</h2>
            <p>You're being taken to the StarHela registration page.<br>Start earning money through simple digital activities today!</p>
            <a href="https://starhela.com/register.php?ref=Mami250" class="btn-signup" id="signupBtn">Create My Account</a>
            <p class="countdown">Redirecting automatically in <span id="timer">5</span>s…</p>
        </div>
    </div>

    <footer class="site-footer">
        <div class="container">
            <p class="copyright">Copyright <?php echo date('Y'); ?> &mdash; StarHela. All rights reserved.</p>
        </div>
    </footer>

    <script>
        let t = 5;
        const el = document.getElementById('timer');
        const interval = setInterval(() => {
            t--;
            el.textContent = t;
            if (t <= 0) {
                clearInterval(interval);
                window.location.href = 'https://starhela.com/register.php?ref=Mami250';
            }
        }, 1000);
    </script>
</body>
</html>
