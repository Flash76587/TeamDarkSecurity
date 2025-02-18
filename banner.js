 <script>
        document.addEventListener("DOMContentLoaded", function () {
            const banner = document.getElementById("cookie-banner");
            const acceptBtn = document.getElementById("accept-cookies");
            const declineBtn = document.getElementById("decline-cookies");

            // Check if the user already made a choice
            if (localStorage.getItem("cookieConsent") === "accepted") {
                enableAnalytics();
                banner.style.display = "none";
            } else if (localStorage.getItem("cookieConsent") === "declined") {
                disableAnalytics();
                banner.style.display = "none";
            } else {
                banner.classList.add("show"); // Show the banner
            }

            // Accept cookies and enable tracking
            acceptBtn.addEventListener("click", function () {
                localStorage.setItem("cookieConsent", "accepted");
                enableAnalytics();
                banner.style.display = "none";
            });

            // Decline cookies and disable tracking
            declineBtn.addEventListener("click", function () {
                localStorage.setItem("cookieConsent", "declined");
                disableAnalytics();
                banner.style.display = "none";
            });

            // Function to enable Google Analytics
            function enableAnalytics() {
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }

                gtag('consent', 'update', {
                    'ad_storage': 'granted',
                    'analytics_storage': 'granted',
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted'
                });

                // Load Google Analytics
                let script = document.createElement("script");
                script.src = "https://www.googletagmanager.com/gtag/js?id=G-BNJLGS6EDT"; // Replace with your GA4 ID
                script.async = true;
                document.head.appendChild(script);

                script.onload = function () {
                    gtag('js', new Date());
                    gtag('config', 'G-BNJLGS6EDT' { debug_mode: true }); // Force Debug Mode); // Replace with your GA4 ID
                };
            }

            // Function to disable tracking
            function disableAnalytics() {
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }

                gtag('consent', 'update', {
                    'ad_storage': 'denied',
                    'analytics_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied'
                });
            }
        });
    </script>
