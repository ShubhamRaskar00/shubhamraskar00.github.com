// data.js
const siteData = {
  navigation: {
    logo: {
      src: "./img/LOGO.png",
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
          {
            id: "relay-57-DP-24-1-c6",
            name: "Relay 57 DP 24 1 c6",
            previewImage:
              "https://5.imimg.com/data5/SELLER/Default/2023/3/294773911/CK/UA/SM/77515997/57dp241c6-2.jpg",
            details: {
              name: "Relay 57 DP 24 1 c6",
              useCases: [
                "Used for switching high-power devices with low control voltage",
                "Ideal for industrial control panels and automation systems",
                "Can be used in HVAC, lighting control, and motor control circuits",
                "Suitable for electrical appliances, machinery, and automotive systems",
              ],
              features: [
                "24V DC coil voltage for reliable switching",
                "DPDT (Double Pole Double Throw) configuration",
                "Compact design for easy PCB or panel mounting",
                "High contact reliability and long mechanical life",
                "Capable of switching AC and DC loads",
              ],
              images: [
                "https://cpimg.tistatic.com/09528940/b/4/OEN-57DP-24-1C6-Miniature-Power-Relay.jpg",
                "https://5.imimg.com/data5/SELLER/Default/2023/3/294773911/CK/UA/SM/77515997/57dp241c6-2.jpg",
              ],
              price: "₹ 130",
              contactButtonText: "Buy Relay",
            },
          },
          {
            id: "relay-57-DP-12-1-c6",
            name: "Relay 57DP 12 1c6",
            previewImage:
              "https://5.imimg.com/data5/SELLER/Default/2023/3/294773911/CK/UA/SM/77515997/57dp241c6-2.jpg",
            details: {
              name: "Relay 57DP 12 1c6",
              useCases: [
                "Used in home automation systems to control electrical devices",
                "Suitable for automotive applications requiring 12V control",
                "Ideal for industrial switching of low-voltage circuits",
                "Can be integrated into DIY electronics and robotics projects",
              ],
              features: [
                "12V DC coil voltage for standard low-voltage applications",
                "DPDT (Double Pole Double Throw) contact configuration",
                "Compact and durable construction for panel mounting",
                "Capable of switching AC or DC loads reliably",
                "Designed for high durability and mechanical endurance",
              ],
              images: [
                "https://cpimg.tistatic.com/09528940/b/4/OEN-57DP-24-1C6-Miniature-Power-Relay.jpg",
                "https://5.imimg.com/data5/SELLER/Default/2023/3/294773911/CK/UA/SM/77515997/57dp241c6-2.jpg",
              ],
              price: "₹ 130",
              contactButtonText: "Buy Relay",
            },
          },
          {
            id: "relay-58-24-1-c",
            name: "Relay 58 24 1C relay",
            previewImage:
              "https://m.media-amazon.com/images/I/415FD-4FRTL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Relay 58 24 1C relay",
              useCases: [
                "Used in industrial control systems to switch high-voltage loads",
                "Suitable for home automation circuits",
                "Ideal for switching AC/DC motors, lights, or heaters",
                "Commonly used in microcontroller-based control boards",
              ],
              features: [
                "Coil voltage: 24V DC",
                "Single pole changeover (SPDT) contact configuration",
                "Compact size for PCB mounting",
                "High isolation between control and load circuits",
                "Durable and reliable with long electrical life",
              ],
              images: [
                "https://5.imimg.com/data5/SELLER/Default/2023/3/294747347/KI/OK/BC/77515997/58-24-1c.jpg",
                "https://5.imimg.com/data5/SELLER/Default/2023/3/293858062/AG/WL/HN/140263658/oen-pcb-58-24-1c-relay-250x250.jpeg",
              ],
              price: "₹ 130",
              contactButtonText: "Buy Relay",
            },
          },
          {
            id: "relay-58-12-1-c",
            name: "Relay 58 12 1C relay",
            previewImage:
              "https://m.media-amazon.com/images/I/415FD-4FRTL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Relay 58 12 1C relay",
              useCases: [
                "Switching electrical devices in automation systems",
                "Controlling high-voltage appliances using low-voltage circuits",
                "Integration in DIY electronics and robotics projects",
                "Used in automotive and industrial automation panels",
              ],
              features: [
                "12V DC coil voltage for easy microcontroller integration",
                "SPDT (Single Pole Double Throw) configuration",
                "PCB mountable compact relay",
                "High dielectric strength between coil and contacts",
                "Reliable performance in switching both AC and DC loads",
              ],
              images: [
                "https://5.imimg.com/data5/SELLER/Default/2023/3/294747347/KI/OK/BC/77515997/58-24-1c.jpg",
                "https://5.imimg.com/data5/SELLER/Default/2023/3/293858062/AG/WL/HN/140263658/oen-pcb-58-24-1c-relay-250x250.jpeg",
              ],
              price: "₹ 130",
              contactButtonText: "Buy Relay",
            },
          },
          {
            id: "bt-306-bakelite-connector-strip",
            name: "BT 306 bakelite connector strip",
            previewImage: "https://m.media-amazon.com/images/I/61Yk5KCqaIL.jpg",
            details: {
              name: "BT 306 bakelite connector strip",
              useCases: [
                "Used for secure wire-to-wire connections in electrical panels",
                "Ideal for domestic and industrial electrical wiring",
                "Suitable for connecting terminal points in circuits",
                "Often used in control boxes, distribution boards, and junction boxes",
              ],
              features: [
                "Made of heat-resistant Bakelite material",
                "High dielectric strength for safety",
                "Sturdy brass terminals ensure strong connectivity",
                "Screw-type connection allows easy wire tightening",
                "Modular strip design can be cut as needed",
              ],
              images: [
                "https://m.media-amazon.com/images/I/51MhvuSkdiL._AC_UF1000,1000_QL80_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZ-GRbR5QK39Cs1raxcuz5sQaiv9kzSoh4Q&s",
              ],
              price: "₹ 110",
              contactButtonText: "Buy Bakelite Connector Strip",
            },
          },
          {
            id: "Soldering-iron-25W",
            name: "Soldering-iron 25W",
            previewImage:
              "https://m.media-amazon.com/images/I/5116kaFSkEL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Soldering-iron 25W",
              useCases: [
                "Ideal for soldering electronic components on PCBs",
                "Used for DIY electronics and repair work",
                "Suitable for educational and hobby projects",
                "Perfect for small-scale electrical assembly tasks",
              ],
              features: [
                "Power rating: 25 Watts – suitable for precision electronics work",
                "Fast heating element for quick operation",
                "Ergonomic handle for comfortable grip during long usage",
                "Replaceable tip for extended tool life",
                "Plug-and-play design – ready to use out of the box",
              ],
              images: [
                "https://www.noelindia.com/cdn/shop/products/SolderingIron25WPLATINUM_5d12b95d-99fe-4653-8065-9377335185e3.jpg?v=1623041726",
                "https://m.media-amazon.com/images/I/5116kaFSkEL._AC_UF1000,1000_QL80_.jpg",
              ],
              price: "₹ 350",
              contactButtonText: "Buy Soldering iron",
            },
          },
          {
            id: "Soldering-iron-25W",
            name: "Soldering-iron 25W",
            previewImage:
              "https://m.media-amazon.com/images/I/5116kaFSkEL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Soldering-iron 25W",
              useCases: [
                "Perfect for soldering small electronic components on PCBs",
                "Ideal for school, college, and DIY electronic projects",
                "Useful in electronics repair and maintenance work",
                "Commonly used in assembling custom circuit boards",
              ],
              features: [
                "25W power rating – suitable for low to medium soldering tasks",
                "Quick heating element for efficient operation",
                "Ergonomically designed heat-resistant handle for safe usage",
                "Replaceable conical tip for precision soldering",
                "Lightweight and easy to use – ideal for beginners and hobbyists",
              ],
              images: [
                "https://www.noelindia.com/cdn/shop/products/SolderingIron25WPLATINUM_5d12b95d-99fe-4653-8065-9377335185e3.jpg?v=1623041726",
                "https://m.media-amazon.com/images/I/5116kaFSkEL._AC_UF1000,1000_QL80_.jpg",
              ],
              price: "₹ 120",
              contactButtonText: "Buy Soldering iron",
            },
          },
          {
            id: "Multimeter-probe",
            name: "Multimeter Probe",
            previewImage:
              "https://m.media-amazon.com/images/I/41DpwYuNp3L._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Multimeter Probe",
              useCases: [
                "Used with digital and analog multimeters for accurate measurements",
                "Ideal for testing voltage, current, resistance, and continuity",
                "Suitable for electronics repair, lab work, and DIY diagnostics",
                "Commonly used in automotive, industrial, and electrical troubleshooting",
              ],
              features: [
                "Sharp metal tips for precise contact and reliable readings",
                "Insulated grip handles for safe handling and protection",
                "Compatible with most standard multimeters",
                "Flexible, durable test leads for easy maneuvering",
                "Color-coded (red and black) for easy polarity identification",
              ],
              images: [
                "https://m.media-amazon.com/images/I/41tBm+DywVL._AC_UF1000,1000_QL80_.jpg",
                "https://m.media-amazon.com/images/I/61Fq3pPUodL.jpg",
              ],
              price: "₹ 85",
              contactButtonText: "Buy Multimeter Probe",
            },
          },
          {
            id: "DC-Male-Female-Connector",
            name: "DC Male Female Connector",
            previewImage:
              "https://5.imimg.com/data5/SELLER/Default/2021/11/LR/JT/IJ/134163065/1-500x500.jpg",
            details: {
              name: "DC Male Female Connector",
              useCases: [
                "Used to connect DC power supplies to various electronic devices",
                "Ideal for CCTV camera setups and LED lighting systems",
                "Helpful in DIY electronics and embedded system projects",
                "Commonly used for power extension and adapter connections",
              ],
              features: [
                "Standard 5.5mm x 2.1mm male and female barrel connectors",
                "Durable plastic housing with strong strain relief",
                "Ensures secure and reliable power connection",
                "Plug-and-play design for quick setup",
                "Compatible with most DC power adapters and jacks",
              ],
              images: [
                "https://5.imimg.com/data5/SELLER/Default/2023/2/JJ/SA/EK/34568451/4-8mm-x-1-7mm-dc-female-to-male-extension-right-angle-90-patch-cable-500x500.jpg",
                "https://m.media-amazon.com/images/I/71Gf-6ZqZdL.jpg",
              ],
              price: "₹ 24",
              contactButtonText: "Buy Connector",
            },
          },
          {
            id: "lr44",
            name: "LR44 button cell battery (5 pcs)",
            previewImage:
              "https://genuinebattery.com/cdn/shop/products/44_2.jpg",
            details: {
              name: "LR44 button cell battery (5 pcs)",
              useCases: [
                "Commonly used in digital thermometers and laser pointers",
                "Ideal for wristwatches, calculators, and small toys",
                "Suitable for hearing aids, medical devices, and keychain lights",
                "Used in test instruments and small remote controls",
              ],
              features: [
                "Nominal voltage: 1.5V",
                "Chemistry: Alkaline, non-rechargeable",
                "Compact and lightweight button cell form factor",
                "Long shelf life and stable power output",
                "Mercury-free and environmentally safe",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrZXO4ZkaJAhsuuKFl1IH0PK_xgBU2pg1FCpdLYUhyrG_NnEQ8ouvBrNfabUBXPjnTTI&usqp=CAU",
                "https://genuinebattery.com/cdn/shop/products/44_2.jpg",
              ],
              price: "₹ 38",
              contactButtonText: "Buy LR44",
            },
          },
          {
            id: "23A-12V-GP-High-Voltage-Alkaline-Battery",
            name: "23A 12V GP High Voltage Alkaline Battery",
            previewImage:
              "https://m.media-amazon.com/images/I/517Xg80HjhL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "23A 12V GP High Voltage Alkaline Battery",
              useCases: [
                "Used in remote controls for car alarms and garage doors",
                "Ideal for wireless doorbells and security systems",
                "Compatible with keyless entry systems and RF devices",
                "Powers some camera equipment and medical instruments",
              ],
              features: [
                "Voltage: 12V for high-power demand applications",
                "Type: Alkaline, non-rechargeable battery",
                "Long shelf life with low self-discharge",
                "Compact cylindrical design (approx. 10mm x 28mm)",
                "Reliable performance in low and high drain devices",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDCpw68lead58KvxF-kplOgFGLQAgoGq1pReImOYkHZoTRPbSuo47BM8-oygFGHE9IbwQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFh0HRqTgmntvT1HPm775R6bOOfWHuYd30xh_v8eVZUIUwt3b_Qhj-FY-2X5Q-hW4dTiQ&usqp=CAU",
              ],
              price: "₹ 78",
              contactButtonText: "Buy Alkaline Battery",
            },
          },
          {
            id: "Soldering-stand",
            name: "Soldering Stand",
            previewImage:
              "https://techdelivers.com/image/cache/catalog/solder/stand-iron-stand-flat-base-600x315w.jpg",
            details: {
              name: "Soldering Stand",
              useCases: [
                "Used to safely hold hot soldering irons during electronics work",
                "Ideal for workbenches in repair shops and DIY electronics setups",
                "Helps prevent accidental burns or damage from hot iron tips",
                "Keeps soldering station organized and tools within reach",
              ],
              features: [
                "Durable metal holder with stable flat base",
                "Includes a coiled spring stand to hold iron securely",
                "Heat-resistant base material prevents bench damage",
                "Compact design suitable for any workspace",
                "Compatible with most standard soldering irons",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY825CgGAvFRxQWKECLkHkFwnJY_kn7IGD3g&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5KLQnbVk1VKU_bPTHujSt0OUIBjxKQ56sg&s",
              ],
              price: "₹ 62",
              contactButtonText: "Buy Soldering Stand",
            },
          },
          {
            id: "continuity-tester",
            name: "Continuity Tester",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStYLb9QTWBNoxxxblemzmtV7JIDWtkJuWhQ&s",
            details: {
              name: "Continuity Tester",
              useCases: [
                "Used to check continuity in electrical circuits and components",
                "Ideal for identifying broken wires or open circuits",
                "Commonly used in electronics repair and maintenance",
                "Useful for testing switches, fuses, and connections",
              ],
              features: [
                "Easy-to-use pen-style design",
                "Bright LED indicator for clear continuity status",
                "Durable build with insulated probe for safety",
                "Battery operated for portable testing",
                "Compact and lightweight for convenient use",
              ],
              images: [
                "https://m.media-amazon.com/images/I/41c0gKmHFOL._AC_UF1000,1000_QL80_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zClLcX1noWZF653BkV5-BJvZQ2snr0KZUlxmJTbJa0GyvKquVRvKITpVSaQyogAjj9k&usqp=CAU",
              ],
              price: "₹ 120",
              contactButtonText: "Buy Continuity Tester",
            },
          },
          {
            id: "9V-1A-adaptor",
            name: "9V 1A Adaptor",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78AehlVXKef9VaKW_ANHx3tyNEuyAp8LBDw&s",
            details: {
              name: "9V 1A Adaptor",
              useCases: [
                "Powering Arduino and other microcontroller boards",
                "Used in small electronics projects and DIY kits",
                "Ideal for powering routers, LED strips, and CCTV cameras",
                "Suitable for lab testing, breadboard circuits, and sensor modules",
              ],
              features: [
                "Output voltage: 9V DC, Current: 1A",
                "Standard DC barrel jack connector",
                "Over-voltage and over-current protection",
                "Lightweight and compact design for easy portability",
                "Plug-and-play usability with stable power supply",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfMbc3FtASpePe4PksCxZ8UFTLRyaAGdm5g&s",
                "https://www.prayogindia.in/wp-content/uploads/2021/06/adaptor-www.prayogindia.in_.png",
              ],
              price: "₹ 120",
              contactButtonText: "Buy Adaptor",
            },
          },
          {
            id: "9V-2A-adaptor",
            name: "9V 2A Adaptor",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78AehlVXKef9VaKW_ANHx3tyNEuyAp8LBDw&s",
            details: {
              name: "9V 2A Adaptor",
              useCases: [
                "Provides reliable power for microcontroller-based projects like Arduino and Raspberry Pi modules",
                "Used for powering LED light strips and small home automation systems",
                "Suitable for wireless routers, modems, and IoT development kits",
                "Helps in prototyping breadboard circuits that need higher current supply",
                "Used in industrial and educational lab tools requiring stable 9V input",
              ],
              features: [
                "Output: 9V DC at 2A current",
                "High-efficiency power conversion with minimal heat generation",
                "Fitted with standard 5.5mm DC barrel connector",
                "Built-in protection against over-voltage, over-current, and short circuits",
                "Durable build with compact and lightweight design",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfMbc3FtASpePe4PksCxZ8UFTLRyaAGdm5g&s",
                "https://www.prayogindia.in/wp-content/uploads/2021/06/adaptor-www.prayogindia.in_.png",
              ],
              price: "₹ 160",
              contactButtonText: "Buy Adaptor",
            },
          },
          {
            id: "12V-1A-adaptor",
            name: "12V 1A Adaptor",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78AehlVXKef9VaKW_ANHx3tyNEuyAp8LBDw&s",
            details: {
              name: "12V 1A Adaptor",
              useCases: [
                "Powering small routers, LED strips, and home automation sensors",
                "Ideal for DIY electronics projects requiring 12V DC input",
                "Used in CCTV cameras and basic embedded development boards",
              ],
              features: [
                "Output: 12V DC, 1A",
                "Compact and lightweight design",
                "Over-voltage and short circuit protection",
                "Standard 5.5mm DC barrel connector",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfMbc3FtASpePe4PksCxZ8UFTLRyaAGdm5g&s",
                "https://www.prayogindia.in/wp-content/uploads/2021/06/adaptor-www.prayogindia.in_.png",
              ],
              price: "₹ 120",
              contactButtonText: "Buy Adaptor",
            },
          },

          {
            id: "12V-2A-adaptor",
            name: "12V 2A Adaptor",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78AehlVXKef9VaKW_ANHx3tyNEuyAp8LBDw&s",
            details: {
              name: "12V 2A Adaptor",
              useCases: [
                "Used in higher-powered LED setups, security cameras, and routers",
                "Ideal for powering development kits like Raspberry Pi with add-ons",
                "Supports moderate current electronics and lab equipment",
              ],
              features: [
                "Output: 12V DC, 2A",
                "Good thermal stability and power efficiency",
                "Built-in protection: over-current, over-voltage, short-circuit",
                "Plug-and-play barrel jack compatibility",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfMbc3FtASpePe4PksCxZ8UFTLRyaAGdm5g&s",
                "https://www.prayogindia.in/wp-content/uploads/2021/06/adaptor-www.prayogindia.in_.png",
              ],
              price: "₹ 160",
              contactButtonText: "Buy Adaptor",
            },
          },

          {
            id: "12V-3A-adaptor",
            name: "12V 3A Adaptor",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78AehlVXKef9VaKW_ANHx3tyNEuyAp8LBDw&s",
            details: {
              name: "12V 3A Adaptor",
              useCases: [
                "Used in high-power LED panels, 3D printers, and automation controllers",
                "Ideal for powering multiple IoT modules simultaneously",
                "Works for embedded boards with multiple sensors and actuators",
              ],
              features: [
                "Output: 12V DC, 3A",
                "High-efficiency design with safety certifications",
                "Stable output with minimal ripple and noise",
                "Durable housing for extended use",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfMbc3FtASpePe4PksCxZ8UFTLRyaAGdm5g&s",
                "https://www.prayogindia.in/wp-content/uploads/2021/06/adaptor-www.prayogindia.in_.png",
              ],
              price: "₹ 360",
              contactButtonText: "Buy Adaptor",
            },
          },
          {
            id: "12V-5A-adaptor",
            name: "12V 5A Adaptor",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78AehlVXKef9VaKW_ANHx3tyNEuyAp8LBDw&s",
            details: {
              name: "12V 5A Adaptor",
              useCases: [
                "Suitable for heavy-duty LED installations and surveillance systems",
                "Powers multiple development boards and IoT hubs at once",
                "Perfect for robotics kits and industrial sensor networks",
              ],
              features: [
                "Output: 12V DC, 5A",
                "Premium-grade components for long-term use",
                "Integrated surge, overload, and thermal protection",
                "Compatible with 5.5mm barrel jack interface",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfMbc3FtASpePe4PksCxZ8UFTLRyaAGdm5g&s",
                "https://www.prayogindia.in/wp-content/uploads/2021/06/adaptor-www.prayogindia.in_.png",
              ],
              price: "₹ 450",
              contactButtonText: "Buy Adaptor",
            },
          },
          {
            id: "cat-6-cable-5m",
            name: "Cat 6 Cable 5M",
            previewImage:
              "https://m.media-amazon.com/images/I/6126BTMsmFL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Cat 6 Cable 5M",
              useCases: [
                "Ideal for connecting desktop PCs to routers for high-speed data transfer",
                "Used in office environments for long-range network extensions",
                "Perfect for CCTV DVR/NVR LAN connections with minimal packet loss",
              ],
              features: [
                "Length: 5 Meters",
                "Supports up to 1 Gbps transfer speed with 250 MHz bandwidth",
                "UTP (Unshielded Twisted Pair) for interference-free connection",
                "RJ45 gold-plated connectors for corrosion resistance and stability",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XlbIb3-l2bPiotpI3z_fYcuFa6Hp9LyLlw&s",
                "https://www.ugreenindia.com/cdn/shop/files/a_zznlbgnof6dcjq_6208e713-c247-4980-8c3f-ddb066cf0c2a.jpg?v=1719803212&width=1214",
              ],
              price: "₹ 250",
              contactButtonText: "Buy Cat 6 Cable",
            },
          },
          {
            id: "cat-6-cable-2m",
            name: "Cat 6 Cable 2M",
            previewImage:
              "https://m.media-amazon.com/images/I/6126BTMsmFL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Cat 6 Cable 2M",
              useCases: [
                "Great for connecting laptops to modems or routers",
                "Suitable for short-range wired office setups or LAN gaming",
                "Useful for direct connection between devices like DVRs and switches",
              ],
              features: [
                "Length: 2 Meters",
                "High-speed data transmission up to 1 Gbps",
                "Tangle-free and flexible outer coating",
                "Backward compatible with Cat 5, Cat 5e devices",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XlbIb3-l2bPiotpI3z_fYcuFa6Hp9LyLlw&s",
                "https://www.ugreenindia.com/cdn/shop/files/a_zznlbgnof6dcjq_6208e713-c247-4980-8c3f-ddb066cf0c2a.jpg?v=1719803212&width=1214",
              ],
              price: "₹ 200",
              contactButtonText: "Buy Cat 6 Cable",
            },
          },
          {
            id: "cat-6-cable-1-5m",
            name: "Cat 6 Cable 1.5M",
            previewImage:
              "https://m.media-amazon.com/images/I/6126BTMsmFL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Cat 6 Cable 1.5M",
              useCases: [
                "Perfect for desktop setups where router is close by",
                "Ideal for home or office quick patching and short links",
                "Used for connecting PoE devices within short distances",
              ],
              features: [
                "Length: 1.5 Meters",
                "Stable and reliable high-speed LAN connection",
                "Durable molded strain-relief boots to avoid cable damage",
                "Slim design allows easy cable management",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XlbIb3-l2bPiotpI3z_fYcuFa6Hp9LyLlw&s",
                "https://www.ugreenindia.com/cdn/shop/files/a_zznlbgnof6dcjq_6208e713-c247-4980-8c3f-ddb066cf0c2a.jpg?v=1719803212&width=1214",
              ],
              price: "₹ 150",
              contactButtonText: "Buy Cat 6 Cable",
            },
          },
          {
            id: "usb-to-printer-1-5m",
            name: "USB To Printer 1.5M",
            previewImage:
              "https://m.media-amazon.com/images/I/51TKDDEQQfL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "USB To Printer 1.5M",
              useCases: [
                "Used to connect a computer or laptop to printers or scanners",
                "Suitable for home and office printing setups with nearby devices",
                "Ideal for high-speed data transfers between PC and USB-B devices",
              ],
              features: [
                "Length: 1.5 Meters",
                "Type: USB A to USB B cable (Standard Printer Cable)",
                "Supports high-speed USB 2.0 data transfer up to 480 Mbps",
                "Gold-plated connectors for corrosion resistance and reliable performance",
                "Durable PVC outer jacket with strain-relief design",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGgzTF6aInHstaz78FJhUCrE4CJFADBrmjw&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGgzTF6aInHstaz78FJhUCrE4CJFADBrmjw&s",
              ],
              price: "₹ 200",
              contactButtonText: "Buy USB To Printer",
            },
          },
          {
            id: "usb-to-printer-3m",
            name: "USB To Printer 3M",
            previewImage:
              "https://m.media-amazon.com/images/I/51TKDDEQQfL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "USB To Printer 3M",
              useCases: [
                "Perfect for setups where the printer is far from the computer",
                "Works with printers, scanners, and other USB-B compatible devices",
                "Commonly used in offices with longer cable routing needs",
              ],
              features: [
                "Length: 3 Meters",
                "USB A to USB B connection – standard for most printers and scanners",
                "High-speed USB 2.0 support (up to 480 Mbps)",
                "Sturdy cable with reinforced joints for extra durability",
                "Compatible with Windows, macOS, and Linux systems",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGgzTF6aInHstaz78FJhUCrE4CJFADBrmjw&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGgzTF6aInHstaz78FJhUCrE4CJFADBrmjw&s",
              ],
              price: "₹ 250",
              contactButtonText: "Buy USB To Printer",
            },
          },
          {
            id: "hdmi-cable-5m",
            name: "HDMI Cable 5M",
            previewImage:
              "https://images-na.ssl-images-amazon.com/images/I/313i6d8kkML.jpg",
            details: {
              name: "HDMI Cable 5M",
              useCases: [
                "Ideal for connecting TVs, monitors, and projectors to laptops, gaming consoles, and media players",
                "Perfect for home theater setups or office presentations requiring longer reach",
                "Supports 1080p and 4K resolution for high-definition video streaming",
              ],
              features: [
                "Length: 5 Meters",
                "High-speed HDMI with Ethernet support",
                "Gold-plated connectors for improved signal transmission",
                "Supports 3D, Audio Return Channel (ARC), and Deep Color",
                "Compatible with HDMI 2.0 and backward-compatible with earlier versions",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0R7Cr_v-NZZnz0rY3W0sJehWWPj4zuy4k2w&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuj9gxcmkJNFrjy8AgI68S7fzvLSm_EuZOMA&s",
              ],
              price: "₹ 350",
              contactButtonText: "Buy HDMI Cable",
            },
          },
          {
            id: "hdmi-cable-1-5m",
            name: "HDMI Cable 1.5M",
            previewImage:
              "https://images-na.ssl-images-amazon.com/images/I/313i6d8kkML.jpg",
            details: {
              name: "HDMI Cable 1.5M",
              useCases: [
                "Best for short-range connections between laptops, monitors, and TVs",
                "Suitable for desks and compact workspaces with limited distance",
                "Reliable for gaming, streaming, and presentations with high-speed data needs",
              ],
              features: [
                "Length: 1.5 Meters",
                "High-speed HDMI cable with support for up to 4K resolution",
                "Gold-plated connectors for stable signal transmission",
                "Flexible, durable outer jacket to prevent tangling",
                "Compatible with HDMI 2.0, 1.4, and earlier versions",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0R7Cr_v-NZZnz0rY3W0sJehWWPj4zuy4k2w&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuj9gxcmkJNFrjy8AgI68S7fzvLSm_EuZOMA&s",
              ],
              price: "₹ 200",
              contactButtonText: "Buy HDMI Cable",
            },
          },
          {
            id: "Micro-USB-cable-5m",
            name: "Micro USB Cable 5M",
            previewImage: "https://m.media-amazon.com/images/I/71nng6fgkyL.jpg",
            details: {
              name: "Micro USB Cable 5M",
              useCases: [
                "Charging and syncing smartphones, tablets, and other micro-USB devices",
                "Connecting GPS units, digital cameras, and MP3 players to computers",
                "Extending reach for devices in hard-to-access areas",
              ],
              features: [
                "5-meter length for extended reach",
                "Supports data transfer speeds up to 480 Mbps",
                "Right-angle connectors for space-saving connections",
                "USB 2.0 compliant",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSBnOXCfMYTi-ecQY33ghnOIaZ_QJgwTsvDHBtXDosxSRY1DyXPTGH7XIQFuYLcp2tXM&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkv01ToQdp78t4yA6YcdxFy0LaRFiGAd4AGg&s",
              ],
              price: "₹ 120",
              contactButtonText: "Buy Micro USB Cable",
            },
          },
          {
            id: "Vga-cable",
            name: "Vga Cable",
            previewImage:
              "https://m.media-amazon.com/images/I/61IM8C7rt0L._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Vga Cable",
              useCases: [
                "Connecting computers to monitors, projectors, or TVs",
                "Transmitting analog video signals from PCs to display devices",
                "Ideal for legacy systems requiring VGA connections",
              ],
              features: [
                "15-pin male-to-male connectors",
                "Supports resolutions up to 640x480 pixels",
                "Durable construction for long-term use",
                "Compatible with a wide range of devices",
              ],
              images: [
                "https://m.media-amazon.com/images/I/61yCsYqYWcL._AC_UF894,1000_QL80_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiyJ7odhkpydDkwjyjNhmft2hVDGxbrewGWpwGjJ3dOwYPpgNi2biGQypNmaa9WbN_BE&usqp=CAU",
              ],
              price: "₹ 100",
              contactButtonText: "Buy Vga Cable",
            },
          },
          {
            id: "USB-to-Lan",
            name: "USB To Lan",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMlw6x64iLQdniID2ZVaviNKuw1qxmKOGskw&s",
            details: {
              name: "USB To Lan",
              useCases: [
                "Providing wired Ethernet connectivity to devices without LAN ports",
                "Enhancing network stability over wireless connections",
                "Ideal for ultrabooks, tablets, and laptops",
              ],
              features: [
                "Plug-and-play installation",
                "Supports 10/100 Mbps Ethernet networks",
                "Compact and portable design",
                "Compatible with various operating systems",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-SVU0xxa0PfiaQMaHsNQbuQ6wF_BNmRDGKrGwk78CPxqP3pXHPCMZ32Qpz9a0LlO6cM&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEJwljqenVQREKIqsuSODn_b-GHsDULx0XmHiq6-TW7dZ0hjt7Rl5naAfHIjc7cyuPww&usqp=CAU",
              ],
              price: "₹ 500",
              contactButtonText: "Buy USB To Lan",
            },
          },
          {
            id: "Crimping-Tool-LAN-Cutter",
            name: "Crimping Tool LAN Cutter",
            previewImage:
              "https://seller.seventhsq.com/media/picture/4765cc09da.webp",
            details: {
              name: "Crimping Tool LAN Cutter",
              useCases: [
                "Crimping RJ45 connectors onto Ethernet cables",
                "Cutting and stripping network cables",
                "Ideal for network installation and maintenance",
              ],
              features: [
                "Compatible with 6- and 8-position modular plugs",
                "Integrated cable cutter and stripper",
                "Ergonomic handle for comfortable use",
                "Durable construction for long-term reliability",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmlImGNLKvOjDghHYtJ-PElg_ur48wbeG9Ug&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfatJj03WINQdcJGcSWhKkwasnX4koCcOMwGCkzpWDtbHk0lMSt7qtRoAuoTW5roSa20&usqp=CAU",
              ],
              price: "₹ 240",
              contactButtonText: "Buy LAN Cutter",
            },
          },
          {
            id: "USB-to-RS485",
            name: "Industrial USB to RS485 Converter",
            previewImage: "https://m.media-amazon.com/images/I/61gXq8niSDL.jpg",
            details: {
              name: "Industrial USB to RS485 Converter",
              useCases: [
                "Connecting industrial devices to computers via RS485",
                "Data acquisition and control systems",
                "Ideal for industrial automation applications",
              ],
              features: [
                "Supports data rates from 300 to 921600 bps",
                "Built-in protection circuits for reliable operation",
                "Plug-and-play functionality",
                "Compact and durable design",
              ],
              images: [
                "https://m.media-amazon.com/images/I/71yNeQMaSIL._AC_UF894,1000_QL80_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2KDDgJoP1K0tWjgW3L_gK87GVF0fxUl1BGiONUWhhx1By2v0WRqajoQDd9rmFj-TBKw&usqp=CAU",
              ],
              price: "₹ 1275",
              contactButtonText: "Buy USB to RS485",
            },
          },
          {
            id: "USB-to-C-hub",
            name: "Type C To USB Hub",
            previewImage:
              "https://5.imimg.com/data5/SELLER/Default/2023/10/353141612/MV/BM/OL/13784088/type-c-to-usb-hub-c-809.jpg",
            details: {
              name: "Type C To USB Hub",
              useCases: [
                "Expanding connectivity options for USB-C devices",
                "Connecting peripherals like keyboards, mice, and storage devices",
                "Ideal for laptops and tablets with limited ports",
              ],
              features: [
                "Multiple USB ports for simultaneous connections",
                "Supports data transfer and charging",
                "Compact and lightweight design",
                "Plug-and-play compatibility",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoDEOaYpqg13FzGcI_K7nKz7PJikIK88Ar-LSDn64NWDMkqBpgWx_YEOQ-sHa9VeW6y8&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4zJ4jsVHbOuixntCJ_4mN8sOxC7DbUgWmtljHuZwTPaS8kULVWVcrlL6rTxLwrMpiho&usqp=CAU",
              ],
              price: "₹ 300",
              contactButtonText: "Buy Type C To USB Hub",
            },
          },
          {
            id: "USB-hub",
            name: "USB Hub",
            previewImage: "https://m.media-amazon.com/images/I/61cg1AdFLoL.jpg",
            details: {
              name: "USB Hub",
              useCases: [
                "Connecting multiple USB devices to a single port",
                "Expanding USB connectivity for laptops and desktops",
                "Ideal for managing peripherals like printers, scanners, and external drives",
              ],
              features: [
                "Multiple USB ports for simultaneous device connections",
                "Supports high-speed data transfer",
                "Compact and portable design",
                "Plug-and-play functionality",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2EvRJI3YnksrEIjkfARS6pPTY7ixhmHkBTTi1_JnLo3btfAhqTVi-Pyb2_C6ITRVpHxc&usqp=CAU",
                "https://m.media-amazon.com/images/I/61cg1AdFLoL._AC_UF1000,1000_QL80_.jpg",
              ],
              price: "₹ 300",
              contactButtonText: "Buy USB Hub",
            },
          },
          {
            id: "electrical-spike-box",
            name: "Electrical Spike Box",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxMkWOHudfJ2hmsNA3QiQoJxlWgq2KOmyVg&s",
            details: {
              name: "Electrical Spike Box",
              useCases: [
                "Protecting electronic devices from power surges",
                "Providing multiple power outlets for computers, TVs, and appliances",
                "Ideal for home, office, and industrial setups",
              ],
              features: [
                "Multiple socket outlets with surge protection",
                "Heavy-duty cable for safe power distribution",
                "On/off master switch for convenience",
                "Built-in overload protection",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZKiZ9zIKCtD95fbg5NR2LTxI3Pr_BaaEqg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxMkWOHudfJ2hmsNA3QiQoJxlWgq2KOmyVg&s",
              ],
              price: "₹ 400",
              contactButtonText: "Buy Spike Box",
            },
          },
          {
            id: "laptop-power-cable",
            name: "Laptop Power Cable",
            previewImage:
              "https://m.media-amazon.com/images/I/61Q6qdwTkLL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Laptop Power Cable",
              useCases: [
                "Connect laptop to AC power supply",
                "Charge laptop battery via external adapter",
                "Use in home or office setups",
              ],
              features: [
                "Length: 1.5 m",
                "3-pin AC power cable",
                "Compatible with most laptop power adapters",
                "Durable build with insulation protection",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0j8hloRzcLROZWc83A5_GuTiMkKrMHrP8IA&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIt4bbQaapGH2_NVfgm2nNv-r40KqzI7o7A&s",
              ],
              price: "₹ 200",
              contactButtonText: "Buy Laptop Power Cable",
            },
          },
          {
            id: "desktop-power-cable",
            name: "Desktop Power Cable",
            previewImage:
              "https://m.media-amazon.com/images/I/51QAeM5QYSL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Desktop Power Cable",
              useCases: [
                "Power supply connection for desktop PCs",
                "Can be used for printers and other electronic devices",
                "Ideal for office or workstation setup",
              ],
              features: [
                "Length: 1.5 m",
                "High quality 3-core copper wire",
                "Standard Indian plug",
                "Compatible with CPUs, UPS, monitors",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdY8R9we1yeJD4pMgTSgCHx60WYT7doZdEPQ&s",
                "https://dynokart.in/wp-content/uploads/2018/03/C8580098a-1-1.jpg",
              ],
              price: "₹ 200",
              contactButtonText: "Buy Desktop Power Cable",
            },
          },
          {
            id: "camera-smps-4-channel",
            name: "CCTV camera smps 4 channel",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJc2FGwHpVLTN2o6Ay6yBwIGM7gJGnBqyrQg&s",
            details: {
              name: "CCTV camera smps 4 channel",
              useCases: [
                "Power supply for up to 4 CCTV cameras",
                "Ideal for home and office surveillance systems",
                "Ensures stable power output to prevent camera downtime",
              ],
              features: [
                "Supports 4-channel CCTV power output",
                "Over-voltage and short-circuit protection",
                "Compact design",
                "Input: 100-240V AC, Output: 12V DC",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrxUaH0M-0IWXJYn4tn9MjmBRZHPBh8iv6nQ&s",
                "https://m.media-amazon.com/images/I/41xlA+FvenL.jpg",
              ],
              price: "₹ 600",
              contactButtonText: "Buy CCTV camera smps 4 channel",
            },
          },
          {
            id: "Pinnacle-Board",
            name: "Pinnacle Board",
            previewImage:
              "https://m.media-amazon.com/images/I/517A1JUOmAS._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "Pinnacle Board",
              useCases: [
                "Used in power distribution panels",
                "Ideal for industrial and residential applications",
                "Supports modular electrical connections",
              ],
              features: [
                "Length: 1.5 m",
                "High-quality insulated copper busbar",
                "Reliable current distribution",
                "Easy to mount and wire",
              ],
              images: [
                "https://m.media-amazon.com/images/I/51fYrtGVBTS._AC_UF1000,1000_QL80_.jpg",
                "https://m.media-amazon.com/images/I/61TqJIykXRS.jpg",
              ],
              price: "₹ 325",
              contactButtonText: "Buy Pinnacle Board",
            },
          },
          {
            id: "USB-to-RS232-485-422",
            name: "USB to RS232 485 422",
            previewImage:
              "https://m.media-amazon.com/images/I/51jBWXt85yL._AC_UF1000,1000_QL80_.jpg",
            details: {
              name: "USB to RS232 485 422",
              useCases: [
                "Connect serial devices to USB ports",
                "Used in industrial automation, PLCs, CNC machines",
                "Data logging, diagnostics, and communication",
              ],
              features: [
                "Supports RS232, RS485, RS422 protocols",
                "USB powered, plug-and-play",
                "Supports Windows, Linux, Mac OS",
                "Stable and reliable communication",
              ],
              images: [
                "https://5.imimg.com/data5/UV/LV/WZ/SELLER-949926/atc-820-usb-to-rs-485-rs-422-converter-250x250.jpg",
                "https://5.imimg.com/data5/GS/PA/MY-53008030/usb-to-rs485-cable-4-500x500.jpg",
              ],
              price: "₹ 1063",
              contactButtonText: "Buy USB to RS232 485 422",
            },
          },
          {
            id: "2-pin-philips-cable",
            name: "2 Pin Philips Cable",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMwxaTJPKNLTMLGLpHrcXLj76zujs7Z8NKg&s",
            details: {
              name: "2 Pin Philips Cable",
              useCases: [
                "Powering small appliances",
                "Commonly used for radios, DVD players, chargers",
                "Ideal for household electronics",
              ],
              features: [
                "Length: 1.5 m",
                "2-pin plug with strong insulation",
                "Flexible and durable wire",
                "Lightweight and compact design",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_o2_yc0iCy3GIQMLrw-gHlGcyM0dHTc1Wug&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_o2_yc0iCy3GIQMLrw-gHlGcyM0dHTc1Wug&s",
              ],
              price: "₹ 200",
              contactButtonText: "Buy 2 Pin Philips Cable",
            },
          },
          {
            id: "1220-3v-Cell-Battery",
            name: "1220 3V Cell Battery (5 psc)",
            previewImage:
              "https://rukminim2.flixcart.com/image/850/1000/xif0q/vehicle-battery/8/9/g/3-microlithium-cell-cr-1220-3v-battery-coin-cell-for-calculator-original-imagw9eurhqm6xgh.jpeg?q=90&crop=false",
            details: {
              name: "1220 3V Cell Battery (5 psc)",
              useCases: [
                "Power source for small electronics",
                "Used in calculators, watches, car remotes",
                "Ideal for low-power, long-lasting applications",
              ],
              features: [
                "Pack of 5 batteries",
                "Lithium coin cell, 3V",
                "Model: CR1220",
                "Long shelf life",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpq0r6k-hy0lBVhREw36iCnK_qnHDcWVaZb3xklk9hU_xq3cl3q2nJKunz_NQXvsoow&usqp=CAU",
                "https://images.meesho.com/images/products/237410097/2welu_512.webp",
              ],
              price: "₹ 50",
              contactButtonText: "Buy 1220 3V Cell Battery",
            },
          },
          {
            id: "2023-3v-Cell-Battery",
            name: "2023 3V Cell Battery (5 psc)",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNYe_0-UfLnFKdnpIWkBls70ZEEtX33YqdA&s",
            details: {
              name: "2023 3V Cell Battery (5 psc)",
              useCases: [
                "Used in electronic toys, remote controls, and medical devices",
                "Fits into small battery compartments",
                "Supports long-term operation in sensors",
              ],
              features: [
                "3V lithium coin cell",
                "Pack of 5 pieces",
                "Compact and lightweight",
                "Reliable performance in extreme temperatures",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--O1DJE6WbOv86o1TNpNP59Qh-lHU8mJ5ym49fSWtW3TFQ8p3MNMYQdeTgPIxL6AS42A&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNYe_0-UfLnFKdnpIWkBls70ZEEtX33YqdA&s",
              ],
              price: "₹ 75",
              contactButtonText: "Buy 2023 3V Cell Battery",
            },
          },
          {
            id: "2032-3v-Cell-Battery",
            name: "2032 3V Cell Battery (5 psc)",
            previewImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPx5aPoNL-MNLhBYlXeKR439uCfaqevSvGTQ&s",
            details: {
              name: "2032 3V Cell Battery (5 psc)",
              useCases: [
                "CMOS battery for computers",
                "Power for car keys, toys, medical devices",
                "Used in fitness trackers and digital thermometers",
              ],
              features: [
                "CR2032 Lithium coin cell",
                "3V output",
                "Pack of 5 batteries",
                "High energy density with long life",
              ],
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkIPlspMd2PaVOhT9UPd_K-UkR7Yx-n-ifNPTlfrIYxvJ2TTi0Qqbu8DghNe8L6Wg1bA&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0EbRD_gem_ye2GOangLwK-zN6f2cPFY7cL41yxhuUzbW7BBNEcF1u-sYdFJWe8ZpswE&usqp=CAU",
              ],
              price: "₹ 150",
              contactButtonText: "Buy 2032 3V Cell Battery",
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
        title: "Immersive 3D Authentication Web Experience",
        category: "Web Application",
        gridImage: "./img/3d-site-front.png",
        gridImageAlt: "Preview of 3D authentication website",
        videoSrcPreview: "./img/3d-website-video.mp4",

        modal: {
          title: "Building a 3D Login Experience with Modern Web Tech",
          intro:
            "This project demonstrates a futuristic authentication interface using real-time 3D animations and seamless user interaction, powered by modern frontend technologies.",

          type: "video",
          videoSrc: "./img/3d-website-video.mp4",
          videoPoster: "./img/3d-site-front.png",

          description: `
      This innovative web application reimagines the login and authentication process using a 3D-rendered user interface. Built in just 3 days with the help of Cursor AI, the project integrates React for UI structure, Three.js for 3D graphics, and Firebase for real-time backend services.

      Key Features:
      - Real-time 3D interaction using @react-three/fiber and drei.
      - Secure login functionality using Firebase Authentication.
      - Responsive layout styled with Tailwind CSS.
      - CAPTCHA protection for form security.
      - Smooth animation effects with 3D media integration.
    `,

          tags: [
            "React",
            "Three.js",
            "Firebase",
            "Tailwind CSS",
            "Chart.js",
            "Google reCAPTCHA",
            "@headlessui/react",
            "@mediapipe/tasks-vision",
            "@react-three/drei",
            "@react-three/fiber",
            "@react-three/postprocessing",
            "@testing-library/jest-dom",
            "@testing-library/react",
            "@testing-library/user-event",
            "buffer",
            "react-chartjs-2",
            "react-dom",
            "react-google-recaptcha",
            "react-router-dom",
            "react-scripts",
            "react-scroll",
            "react-simple-captcha",
            "react-toastify",
            "web-vitals",
          ],

          date: "Sep 2, 2024",
          client: "Personal Project",
          liveProjectText: "View Live App",
          liveProjectHref: "https://three-react-eight.vercel.app/",
          closeButtonText: "Close Project",
        },
      },
      {
        id: "portfolioModal2",
        type: "image",
        title:
          "E-commerce Platform for Electrical Spare Parts with Admin Panel",
        category: "Web Application",
        gridImage: "./img/inovia-image.png",
        gridImageAlt: "Inovia E-commerce Website Poster",

        modal: {
          title: "Modern E-commerce Web App for Electrical Spare Parts",
          intro:
            "A full-stack e-commerce platform built with React and Node.js, featuring a robust admin dashboard and modern animations.",
          type: "image",
          image: "./img/inovia-image.png",
          imageAlt: "Inovia automation e-commerce preview",

          description: `
      This project is a complete web solution for selling electrical spare parts, developed for Inovia Automation. It includes a responsive landing page with image sliders, category-based product sorting, and dedicated service sections. The admin dashboard allows seamless management of products and services, including adding, editing, and organizing content dynamically.

      Key Features:
      - Category-wise product display with real-time updates.
      - Admin dashboard for managing inventory and services.
      - Smooth GSAP-based scroll animations and text effects.
      - Integrated contact form for customer queries.
      - Optimized performance and mobile-first responsive design.
    `,

          tags: [
            "React",
            "Node.js",
            "Material UI",
            "GSAP",
            "Crips Design",
            "Responsive UI",
            "Admin Dashboard",
          ],

          date: "Apr 27, 2025",
          client: "Inovia Automation",
          liveProjectText: "View Live App",
          liveProjectHref: "https://inovia-automation-testing.vercel.app/",
          closeButtonText: "Close Project",
        },
      },
      {
        id: "portfolioModal3",
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
    copyrightText: `shubhamraskar.in ${new Date().getFullYear()}`,
    socialLinks: [
      {
        href: "https://wa.me/7709861765",
        iconClass: "fab fa-whatsapp",
        label: "WhatsApp",
      },
      {
        href: "https://www.facebook.com/profile.php?id=61576292752803",
        iconClass: "fab fa-facebook-f",
        label: "Facebook",
      },
      {
        href: "https://www.linkedin.com/in/shubham-raskar-5126b5239/",
        iconClass: "fab fa-linkedin-in",
        label: "LinkedIn",
      },
    ],
    address:
      "Shop No. 68, Opposite Side of Pre-School, Shilgoan, Khopoli, 401203, India",
  },
};
