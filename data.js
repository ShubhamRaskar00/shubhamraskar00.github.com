// data.js
const siteData = {
  navigation: {
    logo: {
      src: "./img/Grey Minimalist Fashion Brand Logo.png",
      alt: "Micro Vision Logo",
    },
  },
  header: {
    videoSrc: "./img/heading.mp4",
    videoPoster:
      "https://images.pexels.com/videos/3163534/free-video-3163534.jpg?auto=compress&cs=tinysrgb&w=600",
    leadInLines: ["Hello, Welcome!"],
    headingLines: ["MICRO VISION"],
    subtextLines: [
      "Innovative Tech Solutions for Modern Needs",
      "Crafting Digital Experiences.",
    ],
    contactButtonText: "Let's Connect",
  },
  services: {
    heading: "Our Services",
    subheading:
      "Explore the professional services we offer to bring your projects to life.",
    items: [
      {
        id: "service-website-development",
        iconStack: [
          "fas fa-circle fa-stack-2x text-primary-custom",
          "fas fa-laptop-code fa-stack-1x fa-inverse",
        ],
        title: "Website Development",
        shortDescription:
          "Crafting responsive and modern websites tailored to your needs.",
        details: {
          heading: "Custom Website Development",
          description:
            "We specialize in building high-quality, custom websites that are not only visually appealing but also functional, user-friendly, and optimized for search engines. From simple portfolios to complex e-commerce platforms, we cover all aspects of web development.",
          plans: [
            {
              name: "Bronze",
              price: "$100+",
              features: [
                "Basic 3-Page Website",
                "Responsive Design",
                "Contact Form",
                "Basic SEO Setup",
              ],
              ctaLink: "#contact",
            },
            {
              name: "Silver",
              price: "$500+",
              features: [
                "Up to 7 Pages",
                "CMS Integration (e.g., WordPress)",
                "Custom Design Features",
                "Advanced SEO",
                "Blog Setup",
              ],
              ctaLink: "#contact",
            },
            {
              name: "Gold",
              price: "$1000+",
              features: [
                "Unlimited Pages",
                "E-commerce Functionality",
                "Custom API Integrations",
                "Premium Support & Maintenance (3 Months)",
                "Advanced Analytics",
              ],
              ctaLink: "#contact",
            },
          ],
          contactButtonText: "Discuss Your Project",
        },
      },
      {
        id: "service-plc-programming",
        iconStack: [
          "fas fa-circle fa-stack-2x text-primary-custom",
          "fas fa-cogs fa-stack-1x fa-inverse",
        ],
        title: "PLC Programming",
        shortDescription:
          "Expert PLC programming for industrial automation and control systems.",
        details: {
          heading: "Industrial PLC Programming",
          description:
            "Our PLC programming services cater to a wide range of industrial automation needs. We develop, implement, and troubleshoot PLC programs for various controllers (e.g., Siemens, Allen-Bradley, Mitsubishi) to optimize your manufacturing processes and improve efficiency.",
          plans: [
            {
              name: "Consultation",
              price: "Hourly",
              features: [
                "System Analysis",
                "Requirements Gathering",
                "Feasibility Study",
              ],
              ctaLink: "#contact",
            },
            {
              name: "Module Development",
              price: "Project-Based",
              features: [
                "Specific PLC Module Programming",
                "HMI Integration",
                "Testing & Debugging",
              ],
              ctaLink: "#contact",
            },
            {
              name: "Full System",
              price: "Project-Based",
              features: [
                "Complete Automation Solution Design",
                "PLC & SCADA Programming",
                "Commissioning & Support",
              ],
              ctaLink: "#contact",
            },
          ],
          contactButtonText: "Get a Quote",
        },
      },
      {
        id: "service-iot-programming",
        iconStack: [
          "fas fa-circle fa-stack-2x text-primary-custom",
          "fas fa-microchip fa-stack-1x fa-inverse",
        ],
        title: "IoT Solutions (ESP32/Pi)",
        shortDescription:
          "Custom programming for ESP32, ESP8266, and Raspberry Pi projects.",
        details: {
          heading: "Embedded & IoT Programming",
          description:
            "Unlock the potential of IoT with our custom programming services for microcontrollers like ESP32, ESP8266, and single-board computers like Raspberry Pi. We develop firmware, integrate sensors, and build connected solutions for smart devices and data acquisition.",
          plans: [
            {
              name: "Prototyping",
              price: "$50+",
              features: [
                "Proof of Concept Development",
                "Hardware Selection Advice",
                "Basic Firmware",
              ],
              ctaLink: "#contact",
            },
            {
              name: "Firmware Development",
              price: "$150+",
              features: [
                "Custom Firmware for ESP/Pi",
                "Sensor Integration",
                "Wireless Communication (Wi-Fi, Bluetooth)",
              ],
              ctaLink: "#contact",
            },
            {
              name: "Full IoT Solution",
              price: "$200+",
              features: [
                "End-to-End Solution Design",
                "Cloud Platform Integration",
                "Mobile App Connectivity (Basic)",
                "Deployment Support",
              ],
              ctaLink: "#contact",
            },
          ],
          contactButtonText: "Start Your IoT Project",
        },
      },
    ],
  },
  products: {
    heading: "Our Products",
    subheading:
      "Discover our range of innovative electronic products and solutions.",
    categories: [
      {
        id: "category-led-display",
        name: "Advertisement LED Display",
        description:
          "High-quality LED displays for vibrant and effective advertising.",
        items: [
          {
            id: "product-p10-outdoor",
            name: "P10 Outdoor LED Module",
            previewImage: "./img/image.png",
            details: {
              name: "P10 Outdoor LED Display Module",
              useCases: [
                "Outdoor billboards",
                "Shopfront displays",
                "Public information screens",
                "Stadium scoreboards",
              ],
              features: [
                "High Brightness (Sunlight Readable >5500 nits)",
                "Weatherproof (IP65 Rated)",
                "Easy Content Management via Wi-Fi/USB/Cloud",
                "Various Sizes Available (Customizable)",
                "Energy Efficient Design",
                "Wide Viewing Angle",
              ],
              images: ["./img/image.png", "./img/image.png", "./img/image.png"],
              price: "Request Quote",
              contactButtonText: "Inquire About P10 Display",
            },
          },
          {
            id: "product-p4-indoor",
            name: "P4 Indoor LED Video Wall",
            previewImage: "./img/led-display-panel.jpg",
            details: {
              name: "P4 Indoor High-Resolution Video Wall",
              useCases: [
                "Retail stores and Malls",
                "Conference rooms and Auditoriums",
                "Reception areas and Lobbies",
                "Event backdrops and Stage design",
                "Control Rooms",
              ],
              features: [
                "High Resolution for Indoor Viewing (Pixel Pitch 4mm)",
                "Seamless Panel Integration",
                "Customizable Shapes and Sizes",
                "Rich Color Display (High Refresh Rate)",
                "Front/Rear Maintenance Options",
                "Lightweight and Slim Design",
              ],
              images: [
                "./img/led-display-panel.jpg",
                "./img/led-display-panel.jpg",
              ],
              price: "Request Quote",
              contactButtonText: "Inquire About P4 Video Wall",
            },
          },
        ],
      },
      {
        id: "category-borewell-panel",
        name: "Borewell Panel",
        description: "Smart and reliable control panels for borewell motors.",
        items: [
          {
            id: "product-smart-borewell-v1",
            name: "Smart Borewell Controller V1",
            previewImage:
              "./img/WhatsApp Image 2025-05-06 at 1.45.21 PM (1).jpeg",
            details: {
              name: "Intelligent Borewell Motor Controller V1",
              useCases: [
                "Automated borewell operation for agriculture and domestic use",
                "Dry run protection for submersible pumps",
                "Water level management in tanks",
                "Scheduled water pumping",
              ],
              features: [
                "Automatic On/Off Timer based on Schedule",
                "Dry Run & Overload Protection",
                "Voltage Fluctuation Safeguard (Low/High Voltage Cutoff)",
                "Optional Mobile Control via SMS/App",
                "Water Level Sensor Compatibility",
                "Manual Override Function",
              ],
              images: [
                "./img/WhatsApp Image 2025-05-06 at 1.45.21 PM (1).jpeg",
                "./img/WhatsApp Image 2025-05-06 at 1.45.21 PM (1).jpeg",
              ],
              price: "₹ 2200",
              contactButtonText: "Order Borewell Controller",
            },
          },
        ],
      },
      {
        id: "category-electronic-spares",
        name: "Electronic Spare Parts Supply",
        description: "Wide range of electronic components and spare parts.",
        items: [
          {
            id: "product-resistor-kit",
            name: "Assorted Resistor Kit (500 Pcs)",
            previewImage: "./img/products/resistor-kit-preview.jpg",
            details: {
              name: "Comprehensive Resistor Assortment Kit",
              useCases: [
                "DIY electronics projects",
                "Educational purposes and labs",
                "Circuit repair and prototyping",
                "Hobbyist electronics",
              ],
              features: [
                "Wide Range of Resistance Values (25 values, 20 each)",
                "High-Quality 1/4W Carbon Film Resistors",
                "Clearly Labeled Components for Easy Identification",
                "Durable Storage Box with Compartments",
                "±5% Tolerance",
              ],
              images: [
                "./img/products/resistor-kit1.jpg",
                "./img/products/resistor-kit2.jpg",
              ],
              price: "$15",
              contactButtonText: "Buy Resistor Kit",
            },
          },
          {
            id: "product-arduino-uno",
            name: "Arduino Uno R3 Compatible Board",
            previewImage: "./img/products/arduino-uno-preview.jpg",
            details: {
              name: "Arduino Uno R3 Compatible Microcontroller Board",
              useCases: [
                "Prototyping IoT devices",
                "Learning microcontroller programming",
                "Robotics projects and automation",
                "Sensor data acquisition",
                "Interactive art installations",
              ],
              features: [
                "ATmega328P Microcontroller",
                "14 Digital I/O Pins (6 PWM)",
                "6 Analog Inputs",
                "USB Interface for Programming and Power",
                "Compatible with Arduino IDE and Libraries",
                "ICSP Header",
                "Reset Button",
              ],
              images: [
                "./img/products/arduino-uno1.jpg",
                "./img/products/arduino-uno2.jpg",
              ],
              price: "$20",
              contactButtonText: "Buy Arduino Board",
            },
          },
        ],
      },
    ],
  },
  portfolio: {
    heading: "Portfolio",
    subheading: "A Glimpse Into Our Creative Work.",
    items: [
      {
        id: "portfolioModal1",
        type: "video",
        title: "Car Slider Showcase",
        category: "Web Animation",
        gridImage: "./img/car.png",
        gridImageAlt: "Car Slider Project Poster",
        videoSrcPreview: "./video/car-slider-preview.mp4",
        modal: {
          title: "3D Car Slider Animation",
          intro:
            "A dynamic 3D car slider built with HTML, CSS, and JavaScript.",
          type: "video",
          videoSrc: "./video/car-slider-full.mp4",
          videoPoster: "./img/car.png",
          description:
            "This project demonstrates advanced CSS transformations and JavaScript for interactive animation. The goal was to create a visually engaging showcase for vehicles.",
          tags: ["HTML5", "CSS3", "JavaScript", "Animation", "UI/UX"],
          date: "April 28 2022",
          client: "Personal Project",
          liveProjectText: "View Live Slider",
          liveProjectHref:
            "https://shubhamraskar00.github.io/My-Website/projects/imge/index.html",
          closeButtonText: "Close Project",
        },
      },
      {
        id: "portfolioModal2",
        type: "video",
        title: "Duck Hunt Game",
        category: "Game Development",
        gridImage: "./img/duck.png",
        gridImageAlt: "Duck Hunt Game Poster",
        videoSrcPreview: "./video/duckhunt-preview.mp4",
        modal: {
          title: "Retro Duck Hunt Game",
          intro:
            "A classic 2D bird hunting game recreated using web technologies.",
          type: "video",
          videoSrc: "./video/duckhunt-full.mp4",
          videoPoster: "./img/duck.png",
          description:
            "Relive the nostalgia with this JavaScript-based Duck Hunt game. It features click-to-shoot mechanics and scoring, built entirely with HTML, CSS, and vanilla JavaScript.",
          tags: ["JavaScript", "HTML5 Games", "CSS Animation", "Retro Gaming"],
          date: "April 28 2022",
          client: "Personal Project",
          liveProjectText: "Play Game",
          liveProjectHref:
            "https://shubhamraskar00.github.io/My-Website/projects/duckhunt.js/duck.html",
          closeButtonText: "Close Project",
        },
      },
      {
        id: "portfolioModal3",
        type: "image",
        title: "Ram Vanvas History",
        category: "Web Application",
        gridImage: "./img/ram.png",
        gridImageAlt: "Ram Vanvas History Project",
        modal: {
          title: "Ram Vanvas History Explorer",
          intro:
            "An interactive web application detailing the story of Ram Vanvas.",
          type: "image",
          image: "./img/ram.png",
          imageAlt: "Ram Vanvas History App Screenshot",
          description:
            "This educational app allows users to explore the significant events and locations of Ram Vanvas, built using HTML, CSS, and JavaScript for an engaging user experience.",
          tags: ["Educational", "JavaScript", "Interactive Map"],
          date: "April 20 2022",
          client: "Cultural Initiative",
          liveProjectText: "Explore History",
          liveProjectHref:
            "https://shubhamraskar00.github.io/My-Website/projects/ramHist/ram&more.html",
          closeButtonText: "Close Project",
        },
      },
      {
        id: "portfolioModal4",
        type: "image",
        title: "Book Store",
        category: "E-commerce",
        gridImage: "./img/book.png",
        gridImageAlt: "Book Store Project",
        modal: {
          title: "Online Bookstore Platform",
          intro:
            "A full-stack e-commerce application for selling books, built with Node.js and React.",
          type: "image",
          image: "./img/book.png",
          imageAlt: "Book Store Application Screenshot",
          description:
            "This project features user authentication, product listings, a shopping cart, and order processing, demonstrating a complete MERN stack application.",
          tags: ["React", "Node.js", "MongoDB", "E-commerce", "Full Stack"],
          githubLinkText: "View on GitHub",
          githubLinkHref: "https://github.com/ShubhamRaskar00/BookStore",
          closeButtonText: "Close Project",
        },
      },
      {
        id: "portfolioModal5",
        type: "image",
        title: "You Tube Clone",
        category: "Web Application",
        gridImage: "./img/chat.png",
        gridImageAlt: "YouTube Clone Project",
        modal: {
          title: "Video Streaming Platform (YouTube Clone)",
          intro:
            "A React-based application mimicking core YouTube functionalities using RapidAPI.",
          type: "image",
          image: "./img/chat.png",
          imageAlt: "YouTube Clone Interface",
          description:
            "Users can search for videos, view channels, and watch content. Built with React, Material UI, and integrated with external video APIs.",
          tags: ["React", "Material UI", "RapidAPI", "Video Streaming"],
          date: "September 23 2022",
          client: "Personal Project",
          liveProjectText: "View Live App",
          liveProjectHref: "https://clone-custom-youtube.vercel.app/",
          closeButtonText: "Close Project",
        },
      },
      {
        id: "portfolioModal6",
        type: "image",
        title: "Chatting App",
        category: "Web Application",
        gridImage: "./img/chat1.png",
        gridImageAlt: "Chatting App Project",
        modal: {
          title: "Real-time Chat Application",
          intro:
            "A full-stack chat application enabling real-time messaging between users.",
          type: "image",
          image: "./img/chat1.png",
          imageAlt: "Chatting App Interface",
          description:
            "Built with React for the frontend and Node.js with WebSockets (e.g., Socket.io) for real-time communication on the backend.",
          tags: ["React", "Node.js", "WebSockets", "Real-time", "Full Stack"],
          githubLinkText: "View on GitHub",
          githubLinkHref: "https://github.com/ShubhamRaskar00/chatting-app",
          closeButtonText: "Close Project",
        },
      },
    ],
  },
  about: {
    heading: "Our Journey",
    subheading:
      "Shubham here. I work as a freelance front end developer, react developer, node developer, and full stack developer. Follow my story below.",
    timeline: [
      {
        type: "event",
        image:
          "https://media.licdn.com/dms/image/v2/D4D0BAQFVCuSTxbhV5Q/company-logo_100_100/company-logo_100_100/0/1701770642278/solutia_technologies_logo?e=1752710400&v=beta&t=YRlNddnh-GJdzkVrY9TH9SQZJa_bQlydAhiqqQWFRqw",
        imageAlt: "Solutia Technologies Experience",
        dateRange: "2022 - 2024",
        title: "Solutia Technologies",
        description:
          "As a Software Engineer, I specialize in building responsive and scalable user interfaces using Angular. My expertise includes working extensively with SCSS for modular styling, Angular Material for implementing modern UI components, and Angular Flex Layout for crafting adaptive, mobile-first layouts.",
      },
      {
        type: "event",
        image:
          "https://exhibytesolution.com/wp-content/uploads/2023/06/cropped-Exhibyte_Logo_Black_Logo-removebg-preview-1.png",
        imageAlt: "Exhibyte Solution",
        dateRange: "2024 - 2024",
        title: "Web Developer",
        description:
          "As a Web Developer, I work with modern JavaScript frameworks including AngularJS, Vue 3, and Nuxt. I've also been exploring Vuetify and its powerful UI components, which have been a valuable and exciting addition to my development toolkit.",
      },
      {
        type: "event",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXn84m0ldNEy4b-doui_GKkeziMRUfEl71g&s",
        imageAlt: "Continuous Learning",
        dateRange: "Ongoing",
        title: "Founder of Micro Vision",
        description:
          "Leading Microvision as a founder, I oversee a range of responsibilities including web development, PLC and microcontroller programming, product sales, business management, and marketing. I am consistently engaged in learning and adapting to new technologies and challenges to drive innovation and growth.",
      },
      {
        type: "milestone",
        textLines: ["Be Part", "Of Our", "Next Chapter!"],
      },
    ],
  },
  contact: {
    heading: "Contact Us",
    subheading: "Need the same assistance, call",
    formPlaceholders: {
      name: "Your Name *",
      email: "Your Email *",
      phone: "Your Phone *",
      message: "Your Message *",
    },
    validationMessages: {
      name: "Please enter your name.",
      email: "Please enter your email address.",
      phone: "Please enter your phone number.",
      message: "Please enter a message.",
    },
    submitButtonText: "Send Message",
  },
  footer: {
    copyrightText: "shubhamraskar.in 2024",
    socialLinks: [
      {
        href: "https://wa.me/7709861765",
        iconClass: "fab fa-whatsapp",
        label: "WhatsApp",
      },
      {
        href: "https://www.facebook.com/people/Shubham-Raskar/100068005346800/",
        iconClass: "fab fa-facebook-f",
        label: "Facebook",
      },
      {
        href: "https://www.linkedin.com/in/shubham-raskar-5126b5239/",
        iconClass: "fab fa-linkedin-in",
        label: "LinkedIn",
      },
    ],
  },
};
