                                                         Tiles Gallery

1. This project is a modern and responsive Tiles Gallery website built using Next.js App Router. The main goal of this project is to create a platform where users can explore different types of tiles, view detailed information, and manage their personal profiles easily. The design focuses on a clean user interface and smooth experience across all devices.

2. At the beginning, I created a responsive layout including a Navbar and Footer. The Navbar contains a logo on the left side that navigates to the home page, navigation links (Home, All Tiles, My Profile) in the center, and authentication options on the right side. If the user is not logged in, a login button is displayed, and if logged in, profile and logout options are shown.

3. On the Home page, I implemented a banner section with the heading “Discover Your Perfect Aesthetic” along with a button that redirects users to the All Tiles page. Below the banner, I added a marquee section to display scrolling text such as new arrivals and featured content. I also created a Featured Tiles section where the top 4 tiles are fetched from the server and displayed dynamically, each containing a “View Details” button.

4. I implemented an authentication system using BetterAuth and MongoDB. On the Login page, users can log in using their email and password. If the login is successful, the user is redirected to the home page; otherwise, an error message is displayed. Similarly, on the Registration page, users can create an account by providing their name, email, photo URL, and password. Additionally, Google Social Login has been integrated for easier authentication.

5. On the All Tiles page, I implemented a search bar that allows users to search for tiles by title. Below the search bar, all tiles are displayed dynamically in card format, and each card includes a “Details” button that navigates to the specific tile details page.

6. The Tile Details page displays a large high-resolution image preview along with detailed information such as title, description, category, and tags. This page is protected as a private route, meaning only logged-in users can access it.

7. I created a My Profile page as a private route where logged-in users can view their personal information, including their name and profile image. This page also includes an update button.

8. The Update Profile feature allows users to navigate to a separate route where they can update their name and image URL. This functionality is implemented using BetterAuth user update methods.

9. Throughout the entire project, I ensured full responsiveness so that the website works properly on mobile, tablet, and desktop devices. I also added a loading spinner, custom 404 Not Found page, and smooth UI animations to enhance the user experience.

10. For data management, JSON format is used, and data is fetched dynamically from the server. Environment variables are used to securely store sensitive configuration data.

11. The technologies used in this project include Next.js, React, Tailwind CSS, DaisyUI/HeroUI, MongoDB, BetterAuth, and SwiperJS/Animate.css.

12. Finally, the project is deployed using Vercel/Render, and proper routing is ensured so that no errors occur on page reload. The GitHub repository contains at least 10 meaningful commits with clear and descriptive messages.