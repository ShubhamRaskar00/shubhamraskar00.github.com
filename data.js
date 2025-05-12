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
              price: "₹7,000 – ₹12,000",
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
              price: "₹25,000 – ₹40,000",
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
              price: "₹60,000 – ₹1,00,000+",
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
              price: "₹4,000 – ₹7,000",
              features: [
                "Proof of Concept Development",
                "Hardware Selection Advice",
                "Basic Firmware",
              ],
              ctaLink: "#contact",
            },
            {
              name: "Firmware Development",
              price: "₹12,000 – ₹18,000",
              features: [
                "Custom Firmware for ESP/Pi",
                "Sensor Integration",
                "Wireless Communication (Wi-Fi, Bluetooth)",
              ],
              ctaLink: "#contact",
            },
            {
              name: "Full IoT Solution",
              price: "₹18,000 – ₹35,000+",
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
            id: "product-p10-single-color",
            name: "P10 Single Color LED Module",
            previewImage:
              "https://5.imimg.com/data5/PZ/UG/MD/SELLER-4312908/neon-led-sign-board.jpg",
            details: {
              name: "P10 Single Color Outdoor LED Display Module",
              useCases: [
                "Text-based scrolling messages",
                "Shops and business signboards",
                "Price displays at fuel stations",
                "Public notice boards",
              ],
              features: [
                "Single Color (Red/Green)",
                "Cost-effective solution",
                "High Visibility in Daylight",
                "Supports text and symbols",
                "Weather Resistant (IP65)",
                "Long operational life",
              ],
              images: [
                "https://5.imimg.com/data5/AY/FU/VB/SELLER-10063402/running-led-display-board.jpg",
                "https://5.imimg.com/data5/FL/TY/MY-3467032/led-display-board-250x250.jpg",
              ],
              price: "Request Quote",
              contactButtonText: "Inquire About P10 Single Color",
            },
          },
          {
            id: "product-p10-rgb-color",
            name: "P10 RGB Full Color LED Module",
            previewImage: "./img/image.png",
            details: {
              name: "P10 RGB Full Color Outdoor LED Display Module",
              useCases: [
                "Dynamic video advertisements",
                "Live event screens",
                "Mall outdoor displays",
                "Digital hoardings and billboards",
              ],
              features: [
                "Full RGB Color Display",
                "High Brightness & Refresh Rate",
                "Weatherproof for Outdoor Use (IP65)",
                "Supports video, animations, and images",
                "Modular design for custom sizes",
                "Remote content management",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmlI6sr5T202g-fYW0RMPxmSqaFBreSuzKQ&s",
                "https://img2.exportersindia.com/product_images/bc-full/2024/9/13342086/p10-led-module-1727000394-7612106.jpg",
              ],
              price: "Request Quote",
              contactButtonText: "Inquire About P10 RGB Module",
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
            id: "product-smart-borewell-Autotek-SPCD",
            name: "Autotek SPCD Single Phase Control Panel",
            previewImage: "./img/Autotek SPCD Single Phase Control Panel.jpeg",
            details: {
              name: "Autotek SPCD Single Phase Control Panel",
              useCases: [
                "Control of single-phase submersible and monoblock pumps",
                "Automated borewell water pumping systems",
                "Suitable for residential, agricultural, and small-scale industrial use",
                "Used in water tank level management setups",
                "Motor protection and control automation",
              ],
              features: [
                "Supports up to 1 HP motor",
                "SPCD model with built-in cyclic timer and auto start",
                "Dry run and overload protection (if supported internally)",
                "Compatible with 100–250V AC input range",
                "Comes pre-fitted with capacitor ratings of 100/120/150 and 200/250 µF",
                "Compact and rugged build with weather-resistant labeling",
                "Simple wiring and easy installation",
              ],
              images: [
                "./img/Autotek SPCD Single Phase Control Panel.jpeg",
                "./img/Autotek SPCD Single Phase Control Panel.jpeg",
              ],
              price: "₹ 2363",
              contactButtonText: "Order Borewell Controller",
            },
          },
          {
            id: "product-smart-borewell-Autocon-spd",
            name: "Autocon SPD Single Phase Control Panel",
            previewImage: "./img/Autocon SPD Single Phase Control Panel.jpeg",
            details: {
              name: "Autocon SPD Single Phase Control Panel",
              useCases: [
                "Efficient control of single-phase submersible and openwell pumps",
                "Ideal for borewell and water pump automation",
                "Suitable for domestic, agricultural, and light commercial applications",
                "Water level management and scheduled pump operation",
                "Protective automation for high-performance motors",
              ],
              features: [
                "Supports up to 1.5 HP single-phase motors",
                "SPD model with smart protection features",
                "Automatic On/Off control with timer and relay",
                "Built-in overload and dry run protection",
                "High/Low voltage cutoff functionality",
                "Heavy-duty capacitors for smooth motor start-up",
                "Durable build with easy wall mounting",
              ],
              images: [
                "./img/Autocon SPD Single Phase Control Panel.jpeg",
                "./img/Autocon SPD Single Phase Control Panel.jpeg",
              ],
              price: "₹ 2475",
              contactButtonText: "Order Borewell Controller",
            },
          },
          {
            id: "product-smart-borewell-Autocon-spd-2hp",
            name: "Autocon SPD Single Phase Control Panel 2 HP",
            previewImage:
              "./img/Autocon SPD Single Phase Control Panel 2 HP.jpeg",
            details: {
              name: "Autocon SPD Single Phase Control Panel 2HP",
              useCases: [
                "Efficient control of single-phase submersible and openwell pumps",
                "Ideal for borewell and water pump automation",
                "Suitable for domestic, agricultural, and light commercial applications",
                "Water level management and scheduled pump operation",
                "Protective automation for high-performance motors",
              ],
              features: [
                "Supports up to 2 HP single-phase motors",
                "SPD model with smart protection features",
                "Automatic On/Off control with timer and relay",
                "Built-in overload and dry run protection",
                "High/Low voltage cutoff functionality",
                "Heavy-duty capacitors for smooth motor start-up",
                "Durable build with easy wall mounting",
              ],
              images: [
                "./img/Autocon SPD Single Phase Control Panel 2 HP.jpeg",
                "./img/Autocon SPD Single Phase Control Panel 2 HP.jpeg",
              ],
              price: "₹ 2625",
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
            id: "Transformer-12V-1A",
            name: "Transformer 12V 1A",
            previewImage: "https://m.media-amazon.com/images/I/81BomnVe+5L.jpg",
            details: {
              name: "Transformer 12V 1A Power Supply Module",
              useCases: [
                "Powering small electronics and IoT projects",
                "Ideal for Arduino, Raspberry Pi, and sensor circuits",
                "Used in LED lighting applications",
                "Embedded system prototyping and DIY kits",
                "Supplying DC voltage for microcontroller boards",
              ],
              features: [
                "Output: 12V DC, 1A current capacity",
                "Compact and lightweight design",
                "High efficiency and low ripple output",
                "Short-circuit and over-voltage protection",
                "Plug-and-play adapter format for easy integration",
                "Suitable for continuous low-power operation",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrY-MFj1Hrk1dN-tKAP6L5p5GEyAR3pyacXw&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbWq7I5MA4N32Au4tUuAtbMhxFOirDMeqkw&s",
              ],
              price: "₹ 200",
              contactButtonText: "Buy Transformer",
            },
          },
          {
            id: "Transformer-6V-500MA",
            name: "Transformer 6V 500mA",
            previewImage: "https://m.media-amazon.com/images/I/31won2Q5hDL.jpg",
            details: {
              name: "Step-Down Transformer 6V 500mA",
              useCases: [
                "Power supply for low-voltage electronics",
                "Battery charging circuits",
                "DIY electronics projects",
                "Miniature embedded systems",
                "Low-power LED and sensor circuits",
              ],
              features: [
                "Step-down AC to 6V transformer",
                "Output current: 500mA (0.5A)",
                "Copper winding for durability and performance",
                "Compact and lightweight design",
                "Ideal for breadboard and prototyping use",
                "Compatible with rectifier and regulator circuits",
              ],
              images: [
                "https://m.media-amazon.com/images/I/61o3y3Cs92L._AC_UF1000,1000_QL80_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUyBBz8uYkzZ_HkxrOeK5ml2POS189JN4Kg&s",
              ],
              price: "₹ 130",
              contactButtonText: "Buy Transformer",
            },
          },
          {
            id: "Transformer-12V-500MA",
            name: "Transformer 12V 500mA",
            previewImage: "https://m.media-amazon.com/images/I/31TxD0wY5JL.jpg",
            details: {
              name: "Step-Down Transformer 12V 500mA",
              useCases: [
                "Power supply for Arduino and microcontroller-based projects",
                "Low current DC motor applications",
                "DIY electronics and educational kits",
                "Sensor modules and relay circuits",
                "Small LED lighting systems",
              ],
              features: [
                "Step-down transformer with 12V AC output",
                "Delivers up to 500mA (0.5A) current",
                "High-quality copper winding for long life",
                "Dual 12-0-12 center-tap output",
                "Compact design suitable for small enclosures",
                "Reliable for both experimentation and light-duty use",
              ],
              images: [
                "https://m.media-amazon.com/images/I/51oJnxvPHOL._AC_UF1000,1000_QL80_.jpg",
                "https://rukminim2.flixcart.com/image/850/1000/l2hwwi80/electronic-hobby-kit/h/h/x/1pcs-12v-0-5a-500ma-12-0-12-transformer-copper-winding-220v-ac-original-imagdtnmbfxgmx6h.jpeg?q=90&crop=false",
              ],
              price: "₹ 130",
              contactButtonText: "Buy Transformer",
            },
          },
          {
            id: "Transformer-9V-500MA",
            name: "Transformer 9V 500mA",
            previewImage:
              "https://m.media-amazon.com/images/I/31bTVZ453OL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Step-Down Transformer 9V 500mA",
              useCases: [
                "Power supply for low-voltage electronics projects",
                "DC circuits using rectifier and filter circuits",
                "Educational DIY kits",
                "Sensor interfacing modules",
                "Battery charging circuits (after rectification)",
              ],
              features: [
                "Step-down transformer with 9V AC output",
                "Center tapped 9-0-9V output configuration",
                "500mA (0.5A) current rating",
                "Copper winding for stable performance",
                "Compact and easy to integrate",
                "Ideal for breadboard and PCB-based circuits",
              ],
              images: [
                "https://www.tomsonelectronics.com/cdn/shop/products/9V_500mA_Center_Tapped_Step_Down_Transformer_230V_AC_to_9-0-9V_AC_Tomson_Electronics.jpg?v=1628177385",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRciQA7aHocuhsycPwSmbJrUbIWrYtAm7k8MQ&s",
              ],
              price: "₹ 130",
              contactButtonText: "Buy Transformer",
            },
          },
          {
            id: "Transformer-12-0-12-2A",
            name: "Transformer 12-0-12 2A",
            previewImage:
              "https://m.media-amazon.com/images/I/61Ene4nLbHL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Step-Down Transformer 12-0-12V 2A",
              useCases: [
                "Power supply for high-current electronic circuits",
                "Used in amplifier power sections",
                "DC conversion using rectifier circuits",
                "Embedded projects requiring 12V dual output",
                "Educational and prototyping applications",
              ],
              features: [
                "Step-down transformer with dual 12V AC output",
                "Center tapped (12-0-12) configuration",
                "2A current capacity suitable for higher loads",
                "Pure copper winding for efficiency and durability",
                "Suitable for both linear and switching regulators",
                "Ideal for hobby, DIY, and industrial electronics",
              ],
              images: [
                "https://m.media-amazon.com/images/I/112GTZ7ca2L._AC_UF1000,1000_QL80_.jpg",
                "https://roboticsdna.in/wp-content/uploads/2021/11/0-12v-trans.jpg",
              ],
              price: "₹ 280",
              contactButtonText: "Buy Transformer",
            },
          },
          {
            id: "Transformer-9V-1A",
            name: "Transformer 9V 1A",
            previewImage:
              "https://m.media-amazon.com/images/I/31voONFvnpL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Step-Down Transformer 9V 1A",
              useCases: [
                "Power supply for low-power embedded systems",
                "Use in 9V DC regulator circuits",
                "Educational kits and hobby electronics",
                "Battery charging circuits",
                "Small LED driver circuits",
              ],
              features: [
                "Step-down transformer with 9V AC output",
                "1A current rating for moderate loads",
                "Center-tapped configuration for flexibility",
                "Efficient copper winding design",
                "Compact and easy to integrate in enclosures",
                "Reliable for prototyping and testing",
              ],
              images: [
                "https://www.tomsonelectronics.com/cdn/shop/products/9V_1A_Step_Down_Transformer_230V_AC_to_0-9V_AC_Tomson_Electronics.jpg?v=1628177510",
                "https://i0.wp.com/www.rytronics.in/wp-content/uploads/2022/04/9-0-9-transformer.jpeg",
              ],
              price: "₹ 200",
              contactButtonText: "Buy Transformer",
            },
          },
          {
            id: "bridge-rectifier-gbt-3510",
            name: "Bridge Rectifier GBT-3510 (5 pcs)",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWzOffAvE-DXzfHviN7HX7N51Nj1rMl3XOx0mmkoGinZKeGMK5gYgP91L_BWTPsBtF9M&usqp=CAU",
            details: {
              name: "Bridge Rectifier GBT-3510 (5 pcs)",
              useCases: [
                "AC to DC conversion in power supplies",
                "Used in motor drive circuits",
                "Rectification in battery chargers",
                "General purpose power rectification",
                "DC power systems for home appliances",
              ],
              features: [
                "Max voltage: 1000V",
                "Current rating: 35A",
                "Reliable full-wave rectification",
                "Compact and durable design",
                "Suitable for high-power applications",
                "Comes in pack of 5 pieces",
              ],
              images: [
                "https://m.passive-electroniccomponents.com/photo/pc20119060-35a_1000v_bridge_rectifier_kbj3510.jpg",
                "https://i.ebayimg.com/images/g/vS8AAOSw5eReZfQD/s-l1200.jpg",
              ],
              price: "₹ 320",
              contactButtonText: "Buy GBT-3510",
            },
          },
          {
            id: "bridge-rectifier-KBP210",
            name: "Bridge Rectifier KBP210 (5 pcs)",
            previewImage:
              "https://arrowtechcart.com/cdn/shop/files/51pNTZDYu2L._AC_SX450_-removebg-preview_800x_20ca75f9-76e4-452e-a59c-5c0a1d41ca42.webp?v=1693242835",
            details: {
              name: "Bridge Rectifier KBP210 (5 pcs)",
              useCases: [
                "Converting AC to DC in small electronic circuits",
                "Power supplies for DIY electronics",
                "Rectification in adapter and charger circuits",
                "Used in LED drivers and fan regulators",
                "Ideal for low-current applications",
              ],
              features: [
                "Peak Repetitive Reverse Voltage: 1000V",
                "Average Forward Current: 2A",
                "Low forward voltage drop",
                "High surge current capability",
                "Compact size suitable for PCB mounting",
                "Pack of 5 pieces",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXneoyAIEMzpC2KFjj22fFfX5l2w_j7K0yQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtE7hwPI6NY5pJ7QQtjk9JoMaXIZCD7vm4Jnho51lPaKl9oO54SkTJdLDEiMXxQhRbaU&usqp=CAU",
              ],
              price: "₹ 125",
              contactButtonText: "Buy KBP210",
            },
          },
          {
            id: "bridge-rectifier-KBPC-3510",
            name: "Bridge Rectifier KBPC-3510",
            previewImage:
              "https://m.media-amazon.com/images/I/71TSvYx112L._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Bridge Rectifier KBPC-3510",
              useCases: [
                "Used in high current AC to DC rectification",
                "Ideal for industrial and power electronics applications",
                "Power supplies for motors and heavy loads",
                "Battery charging circuits",
                "DC power source for inverters and UPS systems",
              ],
              features: [
                "Maximum Repetitive Peak Reverse Voltage: 1000V",
                "Average Forward Current: 35A",
                "Compact square body with aluminum case",
                "High surge current capability",
                "Four-terminal full-wave rectification",
                "Reliable for high power applications",
              ],
              images: [
                "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/F9179010-01?pgw=1",
                "https://5.imimg.com/data5/SELLER/Default/2023/6/315114572/GP/RH/EI/41932583/kbpc-3510-bridge-rectifier.jpg",
              ],
              price: "₹ 250",
              contactButtonText: "Buy KBPC-3510",
            },
          },
          {
            id: "Triac-BTA12",
            name: "Triac-BTA12",
            previewImage:
              "https://m.media-amazon.com/images/I/317Ome46ytL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Triac-BTA12 (5 pcs)",
              useCases: [
                "AC power control in light dimmers and fan regulators",
                "Speed control of AC motors",
                "Used in phase control and switching applications",
                "Ideal for switching inductive and resistive loads",
                "Electronic switch in AC circuits",
              ],
              features: [
                "Max RMS on-state current: 12A",
                "Repetitive peak off-state voltage: up to 600V",
                "Sensitive gate triggering for low-power control",
                "Plastic encapsulated for high thermal stability",
                "Can be driven directly by low-power microcontrollers",
                "Bidirectional switching capability",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2YYpMmmH0Jt7ocUtKLGABcVRha7emSlk2C2MqcKC1aAWHMiU16WCI6tQ2jsG1fGPpfg&usqp=CAU",
                "https://m.media-amazon.com/images/I/41RjerpC61L.jpg",
              ],
              price: "₹ 260",
              contactButtonText: "Buy Triac-BTA12",
            },
          },
          {
            id: "Triac-BTA16",
            name: "Triac-BTA16",
            previewImage:
              "https://m.media-amazon.com/images/I/41uy+MuNDKL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Triac-BTA16 (5 pcs)",
              useCases: [
                "Used in controlling AC power in appliances and circuits",
                "Ideal for light dimmers, speed controllers for fans, and motor control",
                "Commonly used in power switching applications like heating systems",
              ],
              features: [
                "Rated for 16A current at 400V RMS",
                "Triggerable by low power control signals",
                "Fast switching speed",
                "High surge current capability",
                "Designed for AC loads",
              ],
              images: [
                "https://m.media-amazon.com/images/I/61jj+wQ8buL.jpg",
                "https://m.media-amazon.com/images/I/41uy+MuNDKL._AC_UF1000,1000_QL80_.jpg",
              ],
              price: "₹ 320",
              contactButtonText: "Buy Triac-BTA16",
            },
          },
          {
            id: "12v-relay",
            name: "12v-relay",
            previewImage:
              "https://www.tekparts.in/wp-content/uploads/2019/06/RELAY-12V.jpg",
            details: {
              name: "12v-relay",
              useCases: [
                "Used to control high voltage circuits with low voltage signals",
                "Common in microcontroller-based systems for switching AC or DC devices",
                "Can be used in automotive systems, security systems, and home automation",
              ],
              features: [
                "Rated for 10A current at 250V AC or 30V DC",
                "Operates with 12V DC control voltage",
                "SPDT (Single Pole Double Throw) configuration",
                "Mechanical isolation between control and load circuits",
                "Compact and durable design for various applications",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gl0iXcrngLcLMWDc9NJk8G5wlNK4YZtn4uZ2RxVY3sSfSYr5lTA9qYnP4bC7CEYB6pE&usqp=CAU",
                "https://circuit.rocks/cdn/shop/products/relay-spdt-10a-12v-2329.jpg?v=1689741785",
              ],
              price: "₹ 30",
              contactButtonText: "Buy Relay",
            },
          },
          {
            id: "12v-t-relay",
            name: "12v T relay",
            previewImage:
              "https://m.media-amazon.com/images/I/41nYfPOmT0L._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "12v T relay",
              useCases: [
                "Used in various switching applications, including motor control and automation",
                "Common in control systems for home appliances and industrial automation",
                "Ideal for triggering high voltage devices from low voltage microcontrollers",
              ],
              features: [
                "Operates on 12V DC control voltage",
                "Provides a T-shaped configuration for specific switching applications",
                "Can handle moderate load currents (typically up to 10A)",
                "Durable construction with good mechanical and electrical isolation",
                "Versatile and reliable for both AC and DC circuits",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEuPcPM1tBozwGNBTR6fjs5Eg8QUjzREQY33E53fwLexfIDdmnNO976e9yv1VJ5RYZok&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIE2L6E6lhACqb9S2Dvm_HU-V2g7hFFYLg5MwjnFPwBHm1BqTy3Uait0y0wQEN5iOYGVM&usqp=CAU",
              ],
              price: "₹ 100",
              contactButtonText: "Buy T Relay",
            },
          },
          {
            id: "transistor-CTBC547C",
            name: "transistor CTBC547C",
            previewImage:
              "https://m.media-amazon.com/images/I/61xl830uekL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Transistor CTBC547C (10 pcs)",
              useCases: [
                "Used in low-power amplification circuits",
                "Commonly used in signal processing, audio amplifiers, and switches",
                "Ideal for switching small loads in microcontroller projects",
              ],
              features: [
                "NPN transistor with a maximum collector current of 100mA",
                "Maximum voltage rating of 45V",
                "Low base current for efficient switching",
                "Suitable for audio and RF signal amplification",
                "Compact size and low power dissipation",
              ],
              images: [
                "https://m.media-amazon.com/images/I/31PO1t6QsqL.jpg",
                "https://m.media-amazon.com/images/I/61xl830uekL._AC_UF1000,1000_QL80_.jpg",
              ],
              price: "₹ 80",
              contactButtonText: "Buy CTBC547C",
            },
          },
          {
            id: "transistor-CTBC548B",
            name: "transistor CTBC548B",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9gGwS0Ny64ew0GNAWzEb0TbEfZqc4rLaLQ&s",
            details: {
              name: "Transistor CTBC548B (10 pcs)",
              useCases: [
                "Used for low-power amplification circuits and switching applications",
                "Common in signal processing, audio amplifiers, and logic circuits",
                "Suitable for general-purpose amplification in small electronic devices",
              ],
              features: [
                "NPN transistor with a maximum collector current of 100mA",
                "Maximum voltage rating of 30V",
                "Low base current for efficient switching and amplification",
                "Ideal for use in low-noise applications like audio circuits",
                "Compact and efficient design for general-purpose use",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-xTMkTwxtucHAAgmzyrGXDhKLCq-8vdE2aA&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWEkLVtg2d6bIB-X72xytpzP4AbgnjMn10bI_zeB6MgkPBNO6Lti901OeOVxTjilwErc&usqp=CAU",
              ],
              price: "₹ 80",
              contactButtonText: "Buy CTBC548B",
            },
          },
          {
            id: "transistor-CBC337-40",
            name: "transistor CBC337-40",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlH8ccpA3VADIpcuW58Msm5RktJzTQCGPTw&s",
            details: {
              name: "Transistor CBC337-40 (10 pcs)",
              useCases: [
                "Used for low power amplification and switching applications",
                "Common in high-frequency circuits, RF applications, and audio amplifiers",
                "Ideal for use in small signal circuits and low-noise applications",
              ],
              features: [
                "NPN transistor with a maximum collector current of 800mA",
                "Maximum voltage rating of 40V",
                "Low power dissipation and high switching speed",
                "Compact package suitable for small signal applications",
                "Versatile and durable for general-purpose amplification",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1tTlxJs5_0AMuMmQZTb1NUtWioSsr5okSQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1j9DS6zjKzadxP73QQJ-FmumF1Xhl66qWAtyc5NnHcc5EEXXpLFcr5RwpH7vXxMF95AE&usqp=CAU",
              ],
              price: "₹ 90",
              contactButtonText: "Buy CBC337-40",
            },
          },
          {
            id: "diode-6a4",
            name: "Diode 6a4",
            previewImage:
              "https://rukminid2.flixcart.com/image/850/1000/k3hmj680/electronic-hobby-kit/z/x/a/6-amp-diode-6a4-10-pics-sme-original-imafmh6mz5zxcpzs.jpeg?q=90&crop=false",
            details: {
              name: "Diode 6a4 (10 pcs)",
              useCases: [
                "Used for rectification in power supplies",
                "Common in voltage regulation circuits",
                "Ideal for use in reverse polarity protection and current flow direction control",
              ],
              features: [
                "Rated for 6A current and 400V maximum reverse voltage",
                "High efficiency for rectification and protection applications",
                "Fast switching and low forward voltage drop",
                "Durable and reliable for high-power applications",
                "Compact design suitable for various electronics projects",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBU85CNWfc5ckHaBAo61euUHsVbFGA4DVQpQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouTWksyepfTrRqrLmZkvmmg9lf6NuxFpUTA&s",
              ],
              price: "₹ 160",
              contactButtonText: "Buy 6a4",
            },
          },
          {
            id: "diode-4007",
            name: "Diode 4007",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4pXuUrZqEh2E1OlEDEKiZIdSLR1XEiQ4gA&s",
            details: {
              name: "Diode 4007 (10 pcs)",
              useCases: [
                "Commonly used in rectifier circuits and power supplies",
                "Ideal for signal clamping and protection circuits",
                "Used in logic circuits for preventing back-emf",
                "Suitable for applications requiring high reverse voltage handling",
              ],
              features: [
                "Rated for 1A forward current and 1000V reverse voltage",
                "Good for high-voltage and high-speed switching",
                "Low forward voltage drop for efficiency",
                "Used in various applications including audio amplifiers and power regulation circuits",
                "Durable and compact for easy integration in different circuit designs",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWX2fa74f1V-rYA4irkQPcQVEAGeaNUZfJFw&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPS1MUWRw9xGpDzAy2wB9ncQKbZ-4kEC8zQ&s",
              ],
              price: "₹ 50",
              contactButtonText: "Buy 4007",
            },
          },
          {
            id: "diode-5408",
            name: "Diode 5408",
            previewImage:
              "https://www.makestore.in/wp-content/uploads/2019/11/5408.jpg",
            details: {
              name: "Diode 5408 (10 pcs)",
              useCases: [
                "Used in high-power rectification circuits",
                "Ideal for power supplies and voltage regulation circuits",
                "Commonly used in DC motor control circuits",
                "Effective in reverse polarity protection applications",
              ],
              features: [
                "Rated for 3A forward current and 1000V reverse voltage",
                "Low forward voltage drop for efficiency",
                "Fast switching speed for high-frequency applications",
                "Highly durable and reliable for power electronics",
                "Designed for use in high-power applications requiring robust performance",
              ],
              images: [
                "https://m.media-amazon.com/images/I/31QzaX5abTL._AC_UF1000,1000_QL80_.jpg",
                "https://www.makestore.in/wp-content/uploads/2019/11/5408.jpg",
              ],
              price: "₹ 80",
              contactButtonText: "Buy 5408",
            },
          },
          {
            id: "voltage-regulator-7809",
            name: "Voltage Regulator 7809",
            previewImage: "https://m.media-amazon.com/images/I/51YfRbq1OHL.jpg",
            details: {
              name: "Voltage Regulator 7809 (5 pcs)",
              useCases: [
                "Used to provide a stable 9V output from a higher input voltage",
                "Commonly used in audio equipment, communication systems, and sensors requiring 9V",
                "Ideal for low-power devices like small motors, circuits, and digital systems",
                "Used in DC power supplies and battery chargers",
              ],
              features: [
                "Regulates input voltage to a stable 9V output",
                "Input voltage range: 11V to 35V DC",
                "Built-in thermal and overload protection",
                "Compact TO-220 package for easy integration",
                "Reliable and efficient power regulation for electronic projects",
              ],
              images: [
                "https://i0.wp.com/www.rytronics.in/wp-content/uploads/2021/12/A-LM7805-7812-IC-5V-Voltage-Regulator-IC.png?resize=400%2C400&ssl=1",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvRc1Z9H3i7FPQ9LaFh6y06amwyp8dwQxAbji0imH1YaXk3StwEekXJSAP4nwnTcTLW8&usqp=CAU",
              ],
              price: "₹ 100",
              contactButtonText: "Buy 7809",
            },
          },
          {
            id: "voltage-regulator-7805",
            name: "Voltage Regulator 7805",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3W8V7t5-r0sRY7G9R311ko3qmCv8bwch-wg&s",
            details: {
              name: "Voltage Regulator 7805 (5 pcs)",
              useCases: [
                "Commonly used to power 5V DC circuits from higher voltage sources",
                "Used in low-power electronic devices that require stable 5V operation",
                "Ideal for Arduino, Raspberry Pi, and other microcontroller circuits",
                "Used in battery-powered devices to step down voltage to 5V",
              ],
              features: [
                "Regulates input voltage to a stable 5V output",
                "Can handle input voltages from 7V to 35V DC",
                "Built-in thermal shutdown and short-circuit protection",
                "Reliable and cost-effective solution for low-power devices",
                "Compact and easy to integrate into various projects",
              ],
              images: [
                "https://www.chipmart.in/wp-content/uploads/2022/08/7805-voltage-regulator.jpg",
                "https://5.imimg.com/data5/MX/US/MY-31943670/lm7805-voltage-regulator-ic-dip-500x500.jpg",
              ],
              price: "₹ 120",
              contactButtonText: "Buy 7805",
            },
          },
          {
            id: "voltage-regulator-7812",
            name: "Voltage Regulator 7812",
            previewImage:
              "https://m.media-amazon.com/images/I/415eIjpR92L._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Voltage Regulator 7812 (5 pcs)",
              useCases: [
                "Used to power 12V DC circuits from higher voltage sources",
                "Ideal for powering motors, sensors, and other 12V devices",
                "Common in automotive and industrial applications where stable 12V is required",
                "Used in various power supply designs requiring a regulated 12V output",
              ],
              features: [
                "Regulates input voltage to a stable 12V output",
                "Input voltage range: 14V to 35V DC",
                "Built-in thermal and overload protection",
                "Compact TO-220 package for easy integration",
                "Reliable and widely used in 12V-based electronics",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbySDmcb8yGPkRA5uThw8EgyQ87vlq8_ygiTtRZXujIKJbAHeBOzUqnnbiqUkOmr4Pds&usqp=CAU",
                "https://witcdn.motorobit.com/7812-voltage-regulator-to220-voltage-regulators-motorobit-47384-36-B.jpg",
              ],
              price: "₹ 120",
              contactButtonText: "Buy 7812",
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
