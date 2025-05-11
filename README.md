# Shubham Raskar - Personal Portfolio Website

This is a dynamic, single-page personal portfolio website for Shubham Raskar, showcasing services, products, projects, and experience. The website is built using HTML, CSS (with Bootstrap 5), and vanilla JavaScript, with content dynamically loaded from a `data.js` file. It features several interactive elements, including video backgrounds, typing animations, scroll-triggered animations, and an interactive 3D background for the contact section powered by Three.js.

## Features

*   **Dynamic Content:** All text, images, and structured data are managed in `data.js` for easy updates.
*   **Responsive Design:** Built with Bootstrap 5 for adaptability across various devices.
*   **Interactive Header:**
    *   Background video.
    *   Animated typing effect for introductory text.
    *   Subtle horizontal parallax scrolling effect on header text.
*   **Services Section:**
    *   Grid display of main services.
    *   Clickable service items leading to detailed sections with pricing plans.
*   **Products Section:**
    *   Categorized product listings.
    *   Clickable product categories to display product cards.
    *   Modal pop-up for detailed product view including images, use cases, features, and price.
*   **Portfolio Section:**
    *   Grid layout for portfolio items.
    *   Supports both image and video thumbnails.
    *   Video thumbnails auto-play (muted) on hover.
    *   Modal pop-up for full view of images or embedded videos, including descriptions and project tags.
*   **About Section:**
    *   Timeline layout to showcase experience and milestones.
    *   Scroll-triggered "Journey" animation for timeline items (fade-in and slide).
*   **Contact Section:**
    *   Functional contact form (requires backend setup, currently points to a placeholder).
    *   **Interactive 3D Background:** A Three.js powered 3D object that subtly follows cursor movement.
*   **Smooth Scrolling:** For internal page navigation.
*   **Modern UI/UX:** Clean design with hover effects and animations.

## Project Structure

.
├── index.htm # Main HTML file
├── style.css # Custom CSS styles
├── screipt.js # Main JavaScript file for interactivity and content loading
├── data.js # JavaScript file containing all website content as a JSON-like object
├── video/ # Directory for video assets
│ ├── your-background-video.mp4
│ ├── car-slider-preview.mp4
│ └── ...
├── img/ # Directory for image assets
│ ├── Grey Minimalist Fashion Brand Logo.png
│ ├── your-video-poster.jpg
│ ├── car-poster.jpg
│ ├── car.png
│ ├── about/
│ │ ├── 1.jpg
│ │ ├── 2.jpg
│ │ └── 3.jpg
│ └── products/
│ ├── led-display-preview.jpg
│ └── ...
└── README.md # This file


## Setup and Usage

1.  **Clone the Repository (if applicable):**
    ```bash
    git clone (https://github.com/ShubhamRaskar00/shubhamraskar00.github.com.git)
    cd shubhamraskar00.github.com
    ```
2.  **Organize Assets:**
    *   Place your header background video in the `./video/` directory (e.g., `your-background-video.mp4`).
    *   Place portfolio preview videos in `./video/` (e.g., `car-slider-preview.mp4`).
    *   Place all images in the `./img/` directory, following the paths used in `data.js` or update paths in `data.js` accordingly. This includes:
        *   Logo (`./img/Grey Minimalist Fashion Brand Logo.png`)
        *   Header video poster (`./img/your-video-poster.jpg`)
        *   Portfolio item images/posters (e.g., `./img/car-poster.jpg`, `./img/car.png`)
        *   About section timeline images (e.g., `./img/about/1.jpg`)
        *   Product preview images and detail images (e.g., `./img/products/led-display-preview.jpg`)

3.  **Customize Content (`data.js`):**
    *   Open `data.js`. This file holds all the editable content of your website.
    *   Modify the `siteData` object to update:
        *   Navigation logo path.
        *   Header video paths, lead-in text, heading, and subtext.
        *   Service details, descriptions, and plans.
        *   Product categories, product items, images, features, and pricing.
        *   Portfolio items, types (image/video), video/image paths, descriptions, and tags.
        *   About section timeline events, images, and descriptions.
        *   Contact form placeholders and validation messages.
        *   Footer copyright text and social media links.
    *   **Important for Videos:** Ensure all `videoSrc`, `videoPoster`, `videoSrcPreview` paths in `data.js` correctly point to your video and poster image files.

4.  **Backend for Contact Form:**
    *   The contact form in `screipt.js` currently submits data to `https://shubh-backend.onrender.com/api/contact/sendmail`.
    *   You will need to replace this URL with your own backend endpoint that can receive POST requests with JSON data (`name`, `email`, `message`, `phoneNumber`) and handle email sending or data storage.

5.  **Open `index.htm`:**
    *   Open `index.htm` in your web browser to view the website.
    *   For local development, it's recommended to use a simple HTTP server (e.g., VS Code's Live Server extension, Python's `http.server`, or Node.js `http-server`) to avoid potential issues with file paths and CORS if you load external resources.

## Key Technologies Used

*   **HTML5**
*   **CSS3**
    *   Bootstrap 5.3.2 (CDN)
    *   Custom Styles
*   **JavaScript (ES6+)**
    *   Vanilla JS for DOM manipulation and interactivity.
    *   Intersection Observer API (for scroll animations).
*   **Three.js (0.158.0 CDN):** For the interactive 3D background in the contact section.
*   **Font Awesome 6.2.1 (CDN):** For icons.

## Customization Guide

### Changing Theme Colors:
*   Primary colors are defined as CSS custom properties at the top of `style.css`:
    ```css
    :root {
      --primary-color: #1ee2e7;
      --primary-color-hover: #17d0d5;
      /* ... other color variables ... */
    }
    ```
    Modify these values to change the site's main color scheme.

### Updating Sections:
*   **Header:** Update video paths and text in `siteData.header` in `data.js`.
*   **Services:** Modify `siteData.services.items` in `data.js`. Each service can have `details` including `plans`.
*   **Products:** Edit `siteData.products.categories` and their nested `items` in `data.js`. Ensure `previewImage` and `details.images` paths are correct.
*   **Portfolio:** Update `siteData.portfolio.items`. For video items, provide `gridImage` (as poster), `videoSrcPreview`, `modal.videoSrc`, and `modal.videoPoster`. For image items, provide `gridImage` and `modal.image`. Add relevant `tags`.
*   **About:** Modify `siteData.about.timeline` for timeline events. Make sure image paths in `img/about/` are correct.
*   **Contact:** Text content is in `siteData.contact`. The 3D object is a `TorusKnotGeometry` in `screipt.js` (`initContact3DBackground` function). You can change its geometry, material, or lighting there if you are familiar with Three.js.
*   **Footer:** Update `siteData.footer` for copyright and social links.

### 3D Background (Contact Section):
*   The 3D object (a TorusKnot) and its material/lighting are defined in the `initContact3DBackground` function in `screipt.js`.
*   To change the object, you would modify the `THREE.TorusKnotGeometry` and `THREE.MeshStandardMaterial` instantiation.
*   For more complex models, you would use a loader like `THREE.GLTFLoader`.
*   Adjust lighting parameters (`AmbientLight`, `PointLight`) for different visual effects.
*   The mouse interaction sensitivity is controlled by the multipliers in the `animate` function within `initContact3DBackground`.

## Potential Enhancements

*   **Advanced Form Validation:** Implement more robust client-side and server-side validation for the contact form.
*   **CMS Integration:** For more complex content management, consider integrating a headless CMS.
*   **Performance Optimization:** Further optimize images, minify CSS/JS for production.
*   **Accessibility (A11y):** Conduct a thorough accessibility audit and implement improvements.
*   **Loading Custom 3D Models:** Replace the procedural Three.js geometry with custom `.glb` or `.gltf` models.
*   **More Sophisticated Animations:** Explore libraries like GSAP for more complex timeline or page transition animations.

## License

This project is for personal use. If you adapt it, please provide appropriate attribution if any specific assets or code snippets were sourced from elsewhere.