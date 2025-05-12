document.addEventListener("DOMContentLoaded", () => {
  if (typeof siteData === "undefined" || !siteData) {
    console.error("Site data (data.js) not loaded or invalid.");
    return;
  }

  // --- Product Section State ---
  let currentProductCategoryId = null;
  let allProductsForCurrentCategory = [];
  let filteredProducts = [];
  let displayedProductCount = 0;
  const PRODUCTS_PER_PAGE = 6; // How many products to load at a time
  let currentSearchTerm = "";
  let searchDebounceTimer = null;

  // --- Element References ---
  const categoriesContainer = document.getElementById(
    "productCategoriesContainer"
  );
  const productSearchContainer = document.getElementById(
    "productSearchContainer"
  );
  const productSearchInput = document.getElementById("productSearchInput");
  const productItemsGrid = document.getElementById("productItemsGridContainer");
  const loadMoreContainer = document.getElementById("loadMoreContainer");
  const loadMoreProductsBtn = document.getElementById("loadMoreProductsBtn");
  const productDetailModalElement =
    document.getElementById("productDetailModal");
  const productDetailModal = productDetailModalElement
    ? new bootstrap.Modal(productDetailModalElement)
    : null;
  const productDetailModalBody = document.getElementById(
    "productDetailModalBody"
  );
  const productDetailModalLabel = document.getElementById(
    "productDetailModalLabel"
  );
  const productDetailModalContactBtn = document.getElementById(
    "productDetailModalContactBtn"
  );

  // --- Content Population Functions ---

  function populateNavigation() {
    const navLogo = document.getElementById("navLogo");
    if (navLogo && siteData.navigation?.logo) {
      navLogo.src = siteData.navigation.logo.src;
      navLogo.alt = siteData.navigation.logo.alt;
    }
    // Note: Navigation links are static in HTML for now, but could be populated if needed
  }

  function populateHeader() {
    if (!siteData.header) return;
    const headerData = siteData.header;
    const headerVideo = document.getElementById("headerVideo");
    const videoSource = headerVideo?.querySelector("source");

    if (headerVideo && videoSource && headerData.videoSrc) {
      videoSource.src = headerData.videoSrc;
      headerVideo.poster = headerData.videoPoster || "";
      headerVideo.load(); // Important to load the new source
    }

    const contactButton = document.getElementById("headerContactButton");
    if (contactButton)
      contactButton.textContent = headerData.contactButtonText || "Contact Us";

    const leadInEl = document.getElementById("headerLeadIn");
    const headingEl = document.getElementById("headerHeading");
    const subtextEl = document.getElementById("headerSubtext");

    if (!leadInEl || !headingEl || !subtextEl) return;

    leadInEl.innerHTML = ""; // Clear previous content
    headingEl.innerHTML = "";
    subtextEl.innerHTML = "";

    async function typeLines(
      element,
      lines,
      speed = 100,
      initialDelay = 0,
      addFinalCursor = false
    ) {
      if (!element || !lines || lines.length === 0) return; // Guard clause
      await new Promise((resolve) => setTimeout(resolve, initialDelay));
      let overallCursor = element.querySelector(".typing-cursor");
      if (overallCursor) overallCursor.remove(); // Remove existing cursor if any
      overallCursor = document.createElement("span");
      overallCursor.className = "typing-cursor";

      for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        const line = lines[lineIndex];
        const lineSpan = document.createElement("span");
        if (lineIndex > 0) element.appendChild(document.createElement("br"));
        element.appendChild(lineSpan);

        // Move cursor to the end of the current element content
        if (overallCursor.parentNode)
          overallCursor.parentNode.removeChild(overallCursor);
        element.appendChild(overallCursor);

        for (let i = 0; i < line.length; i++) {
          lineSpan.textContent += line.charAt(i);
          await new Promise((resolve) => setTimeout(resolve, speed));
        }
      }
      // Handle final cursor state
      if (!addFinalCursor && overallCursor.parentNode)
        overallCursor.parentNode.removeChild(overallCursor);
      else if (addFinalCursor && !overallCursor.parentNode && element)
        element.appendChild(overallCursor); // Re-append if needed
    }

    // Start typing animations sequentially
    (async () => {
      if (headerData.leadInLines?.length > 0)
        await typeLines(leadInEl, headerData.leadInLines, 80, 500);
      if (headerData.headingLines?.length > 0)
        await typeLines(headingEl, headerData.headingLines, 100, 200);
      if (headerData.subtextLines?.length > 0)
        await typeLines(subtextEl, headerData.subtextLines, 60, 200, true);
    })();
  }

  function populateServices() {
    if (!siteData.services) return;
    const headingEl = document.getElementById("servicesHeading");
    const subheadingEl = document.getElementById("servicesSubheading");
    if (headingEl)
      headingEl.textContent = siteData.services.heading || "Services";
    if (subheadingEl)
      subheadingEl.textContent = siteData.services.subheading || "";

    const itemsContainer = document.getElementById("servicesItemsContainer");
    const detailsContainer = document.getElementById("serviceDetailsContainer");
    if (!itemsContainer || !detailsContainer) return;

    itemsContainer.innerHTML = "";
    detailsContainer.innerHTML = "";

    siteData.services.items?.forEach((service, index) => {
      // Service Grid Item
      const colDiv = document.createElement("div");
      colDiv.className = "col-md-4 mb-4"; // Grid column

      let iconHTML = '<span class="fa-stack fa-4x">';
      if (service.iconStack && Array.isArray(service.iconStack)) {
        service.iconStack.forEach((iconClass) => {
          iconHTML += `<i class="${iconClass}"></i>`;
        });
      }
      iconHTML += "</span>";

      const serviceLink = document.createElement("a");
      serviceLink.href = `#${service.id || "services"}`; // Fallback href
      serviceLink.className =
        "service-item-link page-scroll d-block text-center";

      serviceLink.innerHTML = `
          ${iconHTML}
          <h4 class="my-3 service-heading">${
            service.title || "Service Title"
          }</h4>
          <p class="text-muted">${service.shortDescription || ""}</p>
      `;
      colDiv.appendChild(serviceLink);
      itemsContainer.appendChild(colDiv);

      // Service Detail Section (if details exist)
      if (service.details && service.id) {
        const detailSection = document.createElement("section");
        detailSection.id = service.id;
        detailSection.className = `page-section service-detail ${
          index % 2 === 0 ? "bg-white" : "bg-light"
        }`; // Alternate background

        let plansHTML = "";
        if (service.details.plans && service.details.plans.length > 0) {
          plansHTML +=
            '<div class="row plans-container justify-content-center">'; // Center plans
          service.details.plans.forEach((plan) => {
            plansHTML += `
                  <div class="col-lg-4 mb-4 d-flex"> <!-- Use d-flex for equal height cards -->
                      <div class="card plan-card h-100 w-100"> <!-- Add w-100 -->
                          <div class="card-header text-center text-uppercase text-white">${
                            plan.name || "Plan"
                          }</div>
                          <div class="card-body d-flex flex-column">
                              ${
                                plan.price
                                  ? `<h5 class="card-title text-center mb-4">${plan.price}</h5>`
                                  : ""
                              }
                              <ul class="list-group list-group-flush text-center mb-4 flex-grow-1">
                                  ${
                                    plan.features
                                      ?.map(
                                        (feature) =>
                                          `<li class="list-group-item">${feature}</li>`
                                      )
                                      .join("") || ""
                                  }
                              </ul>
                              <a href="${
                                plan.ctaLink || "#contact"
                              }" class="btn btn-primary mt-auto page-scroll text-white">${
              service.details.contactButtonText || "Learn More"
            }</a>
                          </div>
                      </div>
                  </div>
              `;
          });
          plansHTML += "</div>";
        }

        detailSection.innerHTML = `
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">${
                      service.details.heading || service.title
                    }</h2>
                    <p class="text-muted lead mb-5">${
                      service.details.description || ""
                    }</p>
                </div>
                ${plansHTML}
                 <div class="text-center mt-5">
                     <a href="#contact" class="btn btn-xl btn-primary page-scroll text-white">${
                       service.details.contactButtonText || "Contact Us"
                     }</a>
                 </div>
            </div>
        `;
        detailsContainer.appendChild(detailSection);
      }
    });
  }

  // --- Product Section Functions ---

  function populateProducts() {
    if (!siteData?.products || !categoriesContainer) return;
    const productsData = siteData.products;
    const headingEl = document.getElementById("productsHeading");
    const subheadingEl = document.getElementById("productsSubheading");
    if (headingEl) headingEl.textContent = productsData.heading || "Products";
    if (subheadingEl) subheadingEl.textContent = productsData.subheading || "";

    categoriesContainer.innerHTML = ""; // Clear previous categories

    productsData.categories?.forEach((category) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "col-lg-auto col-md-4 col-sm-6 mb-3";
      categoryDiv.innerHTML = `
          <button class="btn btn-outline-primary category-link-item w-100" data-category-id="${
            category.id
          }">
              ${category.name || "Category"}
          </button>`;
      categoriesContainer.appendChild(categoryDiv);

      categoryDiv
        .querySelector(".category-link-item")
        .addEventListener("click", function () {
          handleCategorySelection(this.dataset.categoryId);
          // Highlight active category button
          document
            .querySelectorAll("#productCategoriesContainer .category-link-item")
            .forEach((btn) => {
              btn.classList.remove("active", "btn-primary", "text-white"); // Ensure text-white is removed
              btn.classList.add("btn-outline-primary");
            });
          this.classList.add("active", "btn-primary", "text-white"); // Add text-white for primary button
          this.classList.remove("btn-outline-primary");
        });
    });
  }

  function handleCategorySelection(categoryId) {
    if (!siteData?.products) return;
    currentProductCategoryId = categoryId;
    const category = siteData.products.categories.find(
      (cat) => cat.id === categoryId
    );

    allProductsForCurrentCategory = category?.items || [];

    // Reset search and display state
    currentSearchTerm = "";
    if (productSearchInput) productSearchInput.value = "";
    if (productSearchContainer) productSearchContainer.style.display = "block"; // Show search bar
    if (productItemsGrid) {
      productItemsGrid.style.display = "flex"; // Show grid container (flex for row wrapping)
      productItemsGrid.innerHTML = ""; // Clear previous products
    }
    displayedProductCount = 0;
    filteredProducts = [...allProductsForCurrentCategory]; // Initially, filtered is all

    renderProductPage(); // Render the first page
  }

  function filterProducts() {
    if (!currentProductCategoryId) return;

    const searchTerm = currentSearchTerm.toLowerCase().trim();

    if (searchTerm === "") {
      filteredProducts = [...allProductsForCurrentCategory];
    } else {
      filteredProducts = allProductsForCurrentCategory.filter((product) => {
        if (!product) return false; // Skip if product is somehow null/undefined
        const nameMatch =
          product.name?.toLowerCase().includes(searchTerm) || false;
        const details = product.details;
        let featuresMatch = false;
        let useCasesMatch = false;

        if (details?.features) {
          featuresMatch = details.features.some((f) =>
            f?.toLowerCase().includes(searchTerm)
          );
        }
        if (details?.useCases) {
          useCasesMatch = details.useCases.some((uc) =>
            uc?.toLowerCase().includes(searchTerm)
          );
        }
        // Optionally search description too:
        // const descriptionMatch = details?.description?.toLowerCase().includes(searchTerm) || false;

        return nameMatch || featuresMatch || useCasesMatch; // || descriptionMatch;
      });
    }

    // Reset display and render filtered results
    if (productItemsGrid) productItemsGrid.innerHTML = "";
    displayedProductCount = 0;
    renderProductPage();
  }

  function renderProductPage() {
    if (!currentProductCategoryId || !productItemsGrid) return;

    const productsToRender = filteredProducts.slice(
      displayedProductCount,
      displayedProductCount + PRODUCTS_PER_PAGE
    );

    // Optimization: If it's the first page render for this filter/category, clear the grid.
    // Otherwise, we are appending.
    if (displayedProductCount === 0) {
      productItemsGrid.innerHTML = "";
    }

    productsToRender.forEach((product) => {
      if (!product) return; // Skip null/undefined products
      const productCol = document.createElement("div");
      // Use Bootstrap's responsive grid and flex utilities for equal height cards
      productCol.className =
        "col-lg-4 col-md-6 mb-4 d-flex align-items-stretch";
      productCol.innerHTML = `
            <div class="card h-100 product-card w-100" data-product-id="${
              product.id
            }" data-category-id="${currentProductCategoryId}">
                <img src="${
                  product.previewImage || "./img/placeholder.png"
                }" class="card-img-top" alt="${
        product.name || "Product Image"
      }">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${
                      product.name || "Product Name"
                    }</h5>
                    <!-- Optional: Short description -->
                    ${
                      product.shortDescription
                        ? `<p class="card-text text-muted small mb-3">${product.shortDescription}</p>`
                        : ""
                    }
                    <button class="btn btn-sm btn-secondary mt-auto view-details-btn">View Details</button>
                </div>
            </div>
        `;
      productItemsGrid.appendChild(productCol);

      // Add event listener directly to the button inside the card
      const detailsBtn = productCol.querySelector(".view-details-btn");
      if (detailsBtn) {
        detailsBtn.addEventListener("click", (e) => {
          e.stopPropagation(); // Prevent potential card click listener if added later
          const card = e.target.closest(".product-card");
          if (card) {
            showProductDetailModal(
              card.dataset.productId,
              card.dataset.categoryId
            );
          }
        });
      }
    });

    displayedProductCount += productsToRender.length;
    updateLoadMoreButtonVisibility();
  }

  function updateLoadMoreButtonVisibility() {
    if (!loadMoreContainer) return;
    if (displayedProductCount < filteredProducts.length) {
      loadMoreContainer.style.display = "block"; // Show button
    } else {
      loadMoreContainer.style.display = "none"; // Hide button
    }
  }

  function showProductDetailModal(productId, categoryId) {
    if (!productDetailModal || !siteData?.products) {
      console.error("Product detail modal or site data not available.");
      return;
    }
    const category = siteData.products.categories.find(
      (cat) => cat.id === categoryId
    );
    if (!category) return;
    const product = category.items.find((item) => item.id === productId);
    if (!product?.details) return; // Ensure product and details exist

    const details = product.details;

    if (productDetailModalLabel)
      productDetailModalLabel.textContent = details.name || "Product Details";
    if (productDetailModalContactBtn)
      productDetailModalContactBtn.textContent =
        details.contactButtonText || "Contact Us";

    let imagesHTML = "";
    if (details.images && details.images.length > 0) {
      if (details.images.length === 1) {
        imagesHTML = `<img src="${
          details.images[0]
        }" class="img-fluid rounded mb-3 mx-auto d-block" style="max-height: 400px; object-fit: contain;" alt="${
          details.name || ""
        }">`;
      } else {
        // Ensure unique ID for modal carousel
        const carouselId = `productImageCarouselModal_${productId}`;
        imagesHTML = `
                <div id="${carouselId}" class="carousel slide mb-3" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        ${details.images
                          .map(
                            (_, index) => `
                            <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${index}" class="${
                              index === 0 ? "active" : ""
                            }" aria-current="${
                              index === 0 ? "true" : "false"
                            }" aria-label="Slide ${index + 1}"></button>
                        `
                          )
                          .join("")}
                    </div>
                    <div class="carousel-inner rounded">
                        ${details.images
                          .map(
                            (imgSrc, index) => `
                            <div class="carousel-item ${
                              index === 0 ? "active" : ""
                            }">
                                <img src="${imgSrc}" class="d-block w-100" style="max-height: 400px; object-fit: contain;" alt="${
                              details.name || "Product"
                            } image ${index + 1}">
                            </div>`
                          )
                          .join("")}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>`;
      }
    }

    if (productDetailModalBody) {
      productDetailModalBody.innerHTML = `
             ${imagesHTML}
             ${
               details.useCases && details.useCases.length > 0
                 ? `<h4>Use Cases:</h4><ul>${details.useCases
                     .map((uc) => `<li>${uc}</li>`)
                     .join("")}</ul>`
                 : ""
             }
             ${
               details.features && details.features.length > 0
                 ? `<h4>Key Features:</h4><ul>${details.features
                     .map((f) => `<li>${f}</li>`)
                     .join("")}</ul>`
                 : ""
             }
             ${
               details.price
                 ? `<h4 class="mt-3">Price: ${details.price}</h4>`
                 : ""
             }
             <!-- Add description if available -->
             ${
               details.description
                 ? `<h4 class="mt-3">Description:</h4><p>${details.description}</p>`
                 : ""
             }
         `;
    } else {
      console.error("Modal body element not found");
    }

    productDetailModal.show();
  }

  // --- Portfolio Functions ---

  function populatePortfolio() {
    if (!siteData.portfolio) return;
    const headingEl = document.getElementById("portfolioHeading");
    const subheadingEl = document.getElementById("portfolioSubheading");
    if (headingEl)
      headingEl.textContent = siteData.portfolio.heading || "Portfolio";
    if (subheadingEl)
      subheadingEl.textContent = siteData.portfolio.subheading || "";

    const gridContainer = document.getElementById("portfolioGridContainer");
    const modalsContainer = document.getElementById("portfolioModalsContainer");
    if (!gridContainer || !modalsContainer) return;

    gridContainer.innerHTML = "";
    modalsContainer.innerHTML = "";

    siteData.portfolio.items?.forEach((item) => {
      if (!item || !item.id) return; // Skip invalid items

      // Create Grid Item
      const gridItemDiv = document.createElement("div");
      gridItemDiv.className = "col-lg-4 col-sm-6 mb-4 portfolio-item"; // Outer container for card-like structure

      let thumbnailHTML = "";
      const hasVideoPreview = item.type === "video" && item.videoSrcPreview;
      const gridImageSrc = item.gridImage || "./img/placeholder.png";
      const gridImageAlt = item.gridImageAlt || item.title || "Portfolio Item";

      if (hasVideoPreview) {
        thumbnailHTML = `
            <img src="${gridImageSrc}" class="img-fluid portfolio-thumbnail-image has-video-preview" alt="${gridImageAlt}">
            <video class="portfolio-thumbnail-video" poster="${gridImageSrc}" muted loop playsinline>
                <source src="${item.videoSrcPreview}" type="video/mp4">
            </video>
        `;
      } else {
        thumbnailHTML = `<img src="${gridImageSrc}" class="img-fluid portfolio-thumbnail-image" alt="${gridImageAlt}">`;
      }

      gridItemDiv.innerHTML = `
          <a class="portfolio-link" data-bs-toggle="modal" href="#${item.id}">
              ${thumbnailHTML}
              <div class="portfolio-hover">
                  <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
              </div>
          </a>
          <div class="portfolio-caption">
              <h4 class="portfolio-caption-heading">${
                item.title || "Project Title"
              }</h4>
              <p class="portfolio-caption-subheading text-muted">${
                item.category || "Category"
              }</p>
          </div>
      `;
      gridContainer.appendChild(gridItemDiv);

      // Add hover effect for video preview
      if (hasVideoPreview) {
        const linkElement = gridItemDiv.querySelector(".portfolio-link");
        const videoElement = linkElement?.querySelector(
          ".portfolio-thumbnail-video"
        );
        if (linkElement && videoElement) {
          linkElement.addEventListener("mouseenter", () => {
            videoElement
              .play()
              .catch((e) => console.warn("Video preview play failed:", e));
          });
          linkElement.addEventListener("mouseleave", () => {
            videoElement.pause();
            videoElement.currentTime = 0; // Reset video
          });
        }
      }

      // Create Modal
      if (item.modal) {
        const modalData = item.modal;
        const modalDiv = document.createElement("div");
        modalDiv.className = "portfolio-modal modal fade";
        modalDiv.id = item.id;
        modalDiv.tabIndex = -1;
        modalDiv.setAttribute("role", "dialog");
        modalDiv.setAttribute("aria-labelledby", `${item.id}Label`);
        modalDiv.setAttribute("aria-hidden", "true");

        let mediaHTML = "";
        if (modalData.type === "video" && modalData.videoSrc) {
          mediaHTML = `
                <div class="portfolio-video-container">
                    <video class="modal-video-player" controls playsinline poster="${
                      modalData.videoPoster || ""
                    }" style="width:100%; height:auto;">
                        <source src="${modalData.videoSrc}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>`;
        } else if (modalData.type === "image" && modalData.image) {
          mediaHTML = `<img class="img-fluid d-block mx-auto modal-image" src="${
            modalData.image
          }" alt="${modalData.imageAlt || modalData.title || ""}" />`;
        }

        let tagsHTML = "";
        if (modalData.tags?.length > 0) {
          tagsHTML = `<div class="portfolio-tags text-center">${modalData.tags
            .map((tag) => `<span class="badge">${tag}</span>`)
            .join(" ")}</div>`;
        }

        let projectInfoHTML = '<ul class="list-inline text-center">';
        let infoAdded = false;
        if (modalData.date) {
          projectInfoHTML += `<li><strong>Date:</strong> ${modalData.date}</li>`;
          infoAdded = true;
        }
        if (modalData.client) {
          projectInfoHTML += `<li><strong>Client:</strong> ${modalData.client}</li>`;
          infoAdded = true;
        }
        // Only add category if not already present in grid caption
        if (modalData.category && !item.category) {
          projectInfoHTML += `<li><strong>Category:</strong> ${modalData.category}</li>`;
          infoAdded = true;
        }
        projectInfoHTML += "</ul>";
        if (!infoAdded) projectInfoHTML = ""; // Clear if no info was added

        let linksHTML =
          '<div class="d-flex justify-content-center gap-2 flex-wrap">'; // Use flexbox for buttons
        if (modalData.liveProjectHref && modalData.liveProjectText) {
          linksHTML += `<a href="${modalData.liveProjectHref}" class="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer">${modalData.liveProjectText}</a>`;
        }
        if (modalData.githubLinkText && modalData.githubLinkHref) {
          linksHTML += `<a href="${modalData.githubLinkHref}" class="btn btn-sm btn-outline-secondary" target="_blank" rel="noopener noreferrer"><i class="fab fa-github me-1"></i> ${modalData.githubLinkText}</a>`;
        }
        linksHTML += "</div>";
        if (
          linksHTML ===
          '<div class="d-flex justify-content-center gap-2 flex-wrap"></div>'
        )
          linksHTML = ""; // Clear if no links

        modalDiv.innerHTML = `
              <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      <div class="container">
                          <div class="row justify-content-center">
                              <div class="col-lg-10">
                                  <div class="modal-body">
                                      <h2 class="text-uppercase" id="${
                                        item.id
                                      }Label">${modalData.title || ""}</h2>
                                      <p class="item-intro text-muted">${
                                        modalData.intro || ""
                                      }</p>
                                      ${mediaHTML}
                                      ${
                                        modalData.description
                                          ? `<p>${modalData.description}</p>`
                                          : ""
                                      }
                                      ${tagsHTML}
                                      ${projectInfoHTML}
                                      ${linksHTML}
                                      <button class="btn btn-primary btn-xl text-uppercase mt-4 text-white" data-bs-dismiss="modal" type="button">
                                          <i class="fas fa-times me-1"></i> ${
                                            modalData.closeButtonText ||
                                            "Close Project"
                                          }
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          `;
        modalsContainer.appendChild(modalDiv);

        // Add event listener to pause video when modal closes
        if (modalData.type === "video") {
          const modalElement = document.getElementById(item.id);
          const modalVideoPlayer = modalElement?.querySelector(
            ".modal-video-player"
          );
          if (modalElement && modalVideoPlayer) {
            modalElement.addEventListener("hidden.bs.modal", () => {
              modalVideoPlayer.pause();
            });
          }
        }
      }
    });
  }

  // --- About/Timeline Functions ---

  function populateAbout() {
    if (!siteData.about) return;
    const headingEl = document.getElementById("aboutHeading");
    const subheadingEl = document.getElementById("aboutSubheading");
    if (headingEl) headingEl.textContent = siteData.about.heading || "About Us";
    if (subheadingEl)
      subheadingEl.textContent = siteData.about.subheading || "";

    const container = document.getElementById("timelineContainer");
    if (!container) return;
    container.innerHTML = "";

    siteData.about.timeline?.forEach((item, index) => {
      if (!item || !item.type) return; // Skip invalid items
      const li = document.createElement("li");
      li.classList.add("timeline-item-for-animation"); // Class for animation trigger
      // Apply inverted class for alternating layout on larger screens (CSS handles the logic)
      if (index % 2 !== 0) {
        li.classList.add("timeline-inverted");
      }

      if (item.type === "event") {
        li.innerHTML = `
            <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="${
                  item.image || "./img/placeholder.png"
                }" alt="${item.imageAlt || ""}"/>
            </div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h4>${item.dateRange || ""}</h4>
                    <h4 class="subheading">${item.title || ""}</h4>
                </div>
                <div class="timeline-body"><p class="text-muted">${
                  item.description || ""
                }</p></div>
            </div>
        `;
      } else if (item.type === "milestone") {
        li.innerHTML = `
            <div class="timeline-image">
                <h4>${item.textLines?.join("<br />") || ""}</h4>
            </div>
        `;
      }
      container.appendChild(li);
    });
    observeTimelineItems(); // Initialize the observer after adding items
  }

  function observeTimelineItems() {
    const timelineItems = document.querySelectorAll(
      ".timeline-item-for-animation"
    );
    if (!timelineItems.length || typeof IntersectionObserver === "undefined")
      return;

    const observerOptions = {
      root: null, // Use the viewport
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the item is visible
    };

    const timelineObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, observerOptions);

    timelineItems.forEach((item) => {
      timelineObserver.observe(item);
    });
  }

  // --- Contact Form Functions ---

  function populateContact() {
    if (!siteData.contact) return;
    const contactData = siteData.contact;
    const headingEl = document.getElementById("contactHeading");
    const subheadingEl = document.getElementById("contactSubheading");
    if (headingEl) headingEl.textContent = contactData.heading || "Contact Us";
    if (subheadingEl) subheadingEl.textContent = contactData.subheading || "";

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageTextarea = document.getElementById("message");
    const submitButton = document.getElementById("sendMessageButton");

    if (nameInput && contactData.formPlaceholders?.name) {
      nameInput.placeholder = contactData.formPlaceholders.name;
      if (contactData.validationMessages?.name)
        nameInput.dataset.validationRequiredMessage =
          contactData.validationMessages.name;
    }
    if (emailInput && contactData.formPlaceholders?.email) {
      emailInput.placeholder = contactData.formPlaceholders.email;
      if (contactData.validationMessages?.email)
        emailInput.dataset.validationRequiredMessage =
          contactData.validationMessages.email;
    }
    if (phoneInput && contactData.formPlaceholders?.phone) {
      phoneInput.placeholder = contactData.formPlaceholders.phone;
      if (contactData.validationMessages?.phone)
        phoneInput.dataset.validationRequiredMessage =
          contactData.validationMessages.phone;
    }
    if (messageTextarea && contactData.formPlaceholders?.message) {
      messageTextarea.placeholder = contactData.formPlaceholders.message;
      if (contactData.validationMessages?.message)
        messageTextarea.dataset.validationRequiredMessage =
          contactData.validationMessages.message;
    }
    if (submitButton)
      submitButton.textContent = contactData.submitButtonText || "Send Message";

    setupContactFormValidation(); // Setup validation listeners
  }

  function setupContactFormValidation() {
    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    const inputs = contactForm.querySelectorAll(
      "input[required], textarea[required]"
    );
    const successDiv = document.getElementById("success"); // Assuming you might want success messages

    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      event.stopPropagation();

      let isValid = true;
      inputs.forEach((input) => {
        const helpBlock = input.parentElement.querySelector(".help-block");
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add("is-invalid");
          if (helpBlock) {
            helpBlock.textContent =
              input.dataset.validationRequiredMessage ||
              "This field is required.";
          }
        } else {
          input.classList.remove("is-invalid");
          // Basic email validation
          if (input.type === "email" && !/^\S+@\S+\.\S+$/.test(input.value)) {
            isValid = false;
            input.classList.add("is-invalid");
            if (helpBlock)
              helpBlock.textContent = "Please enter a valid email address.";
          }
          // Basic phone validation (simple check for digits/common chars)
          else if (input.type === "tel" && !/^[\d\s()+-]+$/.test(input.value)) {
            isValid = false;
            input.classList.add("is-invalid");
            if (helpBlock)
              helpBlock.textContent = "Please enter a valid phone number.";
          } else {
            input.classList.remove("is-invalid");
            if (helpBlock) helpBlock.textContent = ""; // Clear error message
          }
        }
      });

      if (!isValid) {
        if (successDiv) successDiv.innerHTML = ""; // Clear success message on validation failure
        return; // Stop submission if invalid
      }

      // --- Submission Logic ---
      const submitButton = document.getElementById("sendMessageButton");
      const originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
      if (successDiv) successDiv.innerHTML = ""; // Clear previous messages

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phone").value, // Match backend field name
        message: document.getElementById("message").value,
      };

      try {
        // Use your actual backend endpoint
        const response = await fetch(
          "https://shubh-backend.onrender.com/api/contact/sendmail",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          if (successDiv)
            successDiv.innerHTML =
              "<div class='alert alert-success'>Your message has been sent successfully!</div>";
          contactForm.reset(); // Clear form
          inputs.forEach((input) => input.classList.remove("is-invalid")); // Clear validation state
        } else {
          const errorData = await response.text(); // Get error details if possible
          if (successDiv)
            successDiv.innerHTML = `<div class='alert alert-danger'>Error: ${
              response.statusText || "Could not send message."
            } ${errorData ? "<br><small>" + errorData + "</small>" : ""}</div>`;
        }
      } catch (error) {
        console.error("Form submission fetch error:", error);
        if (successDiv)
          successDiv.innerHTML =
            "<div class='alert alert-danger'>There was a network error sending your message. Please try again later.</div>";
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });

    // Clear validation on input
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (input.classList.contains("is-invalid")) {
          input.classList.remove("is-invalid");
          const helpBlock = input.parentElement.querySelector(".help-block");
          if (helpBlock) helpBlock.textContent = "";
        }
      });
    });
  }

  // --- Footer Functions ---

  function populateFooter() {
    if (!siteData.footer) return;
    const copyrightEl = document.getElementById("footerCopyright");
    const socialContainer = document.getElementById("footerSocialLinks");
    const addressEl = document.getElementById("footerAddress");

    if (copyrightEl)
      copyrightEl.innerHTML = `Copyright © ${
        siteData.footer.copyrightText || new Date().getFullYear()
      }`;

    if (socialContainer) {
      socialContainer.innerHTML = ""; // Clear existing links
      siteData.footer.socialLinks?.forEach((link) => {
        if (!link.href || !link.iconClass) return;
        const li = document.createElement("li");
        li.className = "list-inline-item";
        li.innerHTML = `<a href="${
          link.href
        }" target="_blank" rel="noopener noreferrer" aria-label="${
          link.label || "Social Media"
        }"><i class="${link.iconClass}"></i></a>`;
        socialContainer.appendChild(li);
      });
    }
    if (addressEl.innerHTML) {
      addressEl.innerHTML =
        "Shop No. 68, Opposite Side of Pre-School, Shilgoan, Khopoli, 401203, India" || "Address";
    }
  }

  // --- Interactivity & Effects ---

  let scrollSpyInstance = null; // Variable to hold the ScrollSpy instance

  function getNavbarHeight() {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    // Use clientHeight for visible height, offsetHeight includes borders/padding
    return navbarCollapsible ? navbarCollapsible.offsetHeight : 70;
  }

  function initializeOrRefreshScrollSpy() {
    const mainNav = document.body.querySelector("#mainNav");
    if (!mainNav || typeof bootstrap === "undefined" || !bootstrap.ScrollSpy)
      return;

    const currentOffset = getNavbarHeight() + 10; // Add a small buffer

    // Check if an instance already exists on the body
    const existingInstance = bootstrap.ScrollSpy.getInstance(document.body);
    if (existingInstance) {
      // Bootstrap 5.3+ allows refreshing with new options directly (check docs if needed)
      // For simplicity, dispose and recreate might be safer across minor versions.
      existingInstance.dispose();
    }

    // Create a new instance
    try {
      scrollSpyInstance = new bootstrap.ScrollSpy(document.body, {
        target: "#mainNav",
        offset: currentOffset, // Use rootMargin in newer BS versions if preferred
        // rootMargin: `-${currentOffset}px 0px -30%` // Example using rootMargin
      });
      // You might need to manually refresh if content loaded dynamically affecting offsets
      // scrollSpyInstance.refresh();
    } catch (e) {
      console.error("Failed to initialize ScrollSpy:", e);
    }
  }

  const navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) return;

    const isShrunk = navbarCollapsible.classList.contains("navbar-shrink");
    const scrollY = window.scrollY || window.pageYOffset; // More robust scroll position

    if (scrollY < 50) {
      // Shrink after scrolling down a bit (e.g., 50px)
      if (isShrunk) {
        navbarCollapsible.classList.remove("navbar-shrink");
        initializeOrRefreshScrollSpy(); // Refresh ScrollSpy when navbar size changes
      }
    } else {
      if (!isShrunk) {
        navbarCollapsible.classList.add("navbar-shrink");
        initializeOrRefreshScrollSpy(); // Refresh ScrollSpy when navbar size changes
      }
    }
  };

  // Navbar Toggler and Link Click Behavior
  function setupNavbarInteraction() {
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNav = document.getElementById("navbarResponsive");

    if (!navbarToggler || !responsiveNav) return;

    const responsiveNavItems = responsiveNav.querySelectorAll(
      ".nav-link.page-scroll"
    );

    responsiveNavItems.forEach(function (responsiveNavItem) {
      responsiveNavItem.addEventListener("click", () => {
        // Check if the toggler button is visible (indicating mobile/collapsed view)
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          const bsCollapse = bootstrap.Collapse.getInstance(responsiveNav);
          if (bsCollapse && responsiveNav.classList.contains("show")) {
            bsCollapse.hide();
          }
        }
      });
    });
  }

  // Smooth Scrolling for Page Scroll Links
  function setupSmoothScroll() {
    document.querySelectorAll("a.page-scroll").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        // Ensure it's an internal link
        if (targetId && targetId.startsWith("#") && targetId.length > 1) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault(); // Prevent default jump
            const offset = getNavbarHeight();
            // Calculate position correctly, considering scroll offset
            const elementPosition =
              targetElement.getBoundingClientRect().top + window.pageYOffset;
            let scrollToPosition =
              targetId === "#page-top" ? 0 : elementPosition - offset + 5; // Small adjustment

            window.scrollTo({
              top: scrollToPosition,
              behavior: "smooth",
            });

            // Optional: Update URL hash after scrolling (without triggering jump)
            // if (history.pushState) {
            //     history.pushState(null, null, targetId);
            // } else {
            //     // Fallback for older browsers
            //     // location.hash = targetId; // This might cause a jump
            // }
          }
        }
        // If it's just "#", prevent default jump to top
        else if (targetId === "#") {
          e.preventDefault();
        }
        // Allow default behavior for external links or non-hash links
      });
    });
  }

  // Header Text Scroll Effect
  function setupHeaderTextScrollEffect() {
    const introTextElement = document.querySelector(
      "header.masthead .intro-text"
    );
    const headerElement = document.querySelector("header.masthead");
    if (!introTextElement || !headerElement) return;

    const totalMoveRange = 100; // Pixels to move left
    const initialTranslateX = 0;
    introTextElement.style.transform = `translateX(${initialTranslateX}px)`;

    window.addEventListener(
      "scroll",
      () => {
        const scrollY = window.scrollY || window.pageYOffset;
        const headerHeight = headerElement.offsetHeight;
        const viewportHeight = window.innerHeight;
        // Get header's position relative to the viewport
        const headerRect = headerElement.getBoundingClientRect();
        const headerTop = headerRect.top;

        let currentTranslateX = initialTranslateX;

        // Calculate progress based on how much of the header has scrolled into/past the viewport
        if (headerTop < viewportHeight && headerRect.bottom > 0) {
          // Header is partially or fully in view
          // Progress: 0 when top is at bottom of viewport, 1 when bottom is at top of viewport
          let progress =
            (viewportHeight - headerTop) / (viewportHeight + headerHeight);
          progress = Math.min(1, Math.max(0, progress)); // Clamp between 0 and 1

          // Apply transform based on progress (moving left as it scrolls up)
          // Move halfway through the total range as it scrolls through the viewport
          currentTranslateX =
            initialTranslateX - progress * (totalMoveRange / 1.5);
        } else if (headerRect.bottom <= 0) {
          // Header is completely scrolled past
          currentTranslateX = initialTranslateX - totalMoveRange / 1.5;
        } else {
          // Header is below the viewport
          currentTranslateX = initialTranslateX;
        }

        // Use requestAnimationFrame for smoother updates
        requestAnimationFrame(() => {
          introTextElement.style.transform = `translateX(${currentTranslateX}px)`;
        });
      },
      { passive: true }
    ); // Use passive listener for scroll performance
  }

  // --- 3D Background for Contact Section ---
  function initContact3DBackground() {
    const contactSection = document.getElementById("contact");
    const canvas = document.getElementById("contactBackground3D");

    if (!canvas || typeof THREE === "undefined") {
      console.warn(
        "Three.js canvas or library not found. Using fallback background."
      );
      if (canvas) canvas.style.display = "none";
      if (contactSection) {
        // Apply a fallback background image or color if Three.js fails
        contactSection.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')"; // Example fallback
        contactSection.style.backgroundPosition = "center";
        contactSection.style.backgroundRepeat = "no-repeat";
        contactSection.style.backgroundSize = "cover";
        contactSection.style.backgroundColor = "#1a1a1a"; // Ensure dark base
      }
      return;
    }

    // If Three.js is available, remove any fallback image and proceed
    if (contactSection) contactSection.style.backgroundImage = "none";

    let scene, camera, renderer, knot, pointLight;
    let mouseX = 0,
      mouseY = 0;
    let animationFrameId = null; // To control the animation loop

    function init() {
      scene = new THREE.Scene();
      const sectionRect = contactSection.getBoundingClientRect();

      camera = new THREE.PerspectiveCamera(
        50,
        sectionRect.width / sectionRect.height,
        0.1,
        1000
      );
      camera.position.z = 6;

      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setSize(sectionRect.width, sectionRect.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const geometry = new THREE.TorusKnotGeometry(1.5, 0.4, 100, 16);
      const material = new THREE.MeshStandardMaterial({
        color: 0x22ddee, // Adjusted color
        metalness: 0.8,
        roughness: 0.3,
        // emissive: 0x050505, // Removed emissive for better lighting effect
      });
      knot = new THREE.Mesh(geometry, material);
      scene.add(knot);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Slightly brighter ambient
      scene.add(ambientLight);

      pointLight = new THREE.PointLight(0xffffff, 1.0, 200); // Brighter point light
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      const pointLight2 = new THREE.PointLight(0x1ee2e7, 0.8, 150); // Secondary light
      pointLight2.position.set(-5, -3, 2);
      scene.add(pointLight2);

      // Add listeners only once
      document.removeEventListener("mousemove", onDocumentMouseMove); // Remove first if re-initializing
      document.addEventListener("mousemove", onDocumentMouseMove, {
        passive: true,
      });

      window.removeEventListener("resize", onWindowResize);
      window.addEventListener("resize", onWindowResize, false);

      onWindowResize(); // Initial size setup
      animate(); // Start animation loop
    }

    function onDocumentMouseMove(event) {
      // Normalize mouse position (-1 to +1)
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function onWindowResize() {
      const sectionRect = contactSection.getBoundingClientRect();
      const newWidth = sectionRect.width;
      const newHeight = sectionRect.height;

      if (newWidth === 0 || newHeight === 0) return; // Avoid issues if section is hidden

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    let targetRotationX = 0;
    let targetRotationY = 0;
    const rotationFactor = 0.03; // Smoothing factor

    function animate() {
      animationFrameId = requestAnimationFrame(animate); // Store the frame ID

      // Calculate target rotation based on mouse position
      targetRotationY = mouseX * 0.5; // Horizontal mouse movement affects Y rotation
      targetRotationX = mouseY * 0.3; // Vertical mouse movement affects X rotation

      // Smoothly interpolate towards the target rotation
      knot.rotation.y += (targetRotationY - knot.rotation.y) * rotationFactor;
      knot.rotation.x += (targetRotationX - knot.rotation.x) * rotationFactor;

      // Gentle constant rotation
      knot.rotation.z += 0.001;

      renderer.render(scene, camera);
    }

    // --- Intersection Observer to start/stop animation ---
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (!animationFrameId) {
                // Start animation only if not already running
                console.log("Contact section visible, starting 3D animation.");
                animate();
              }
            } else {
              if (animationFrameId) {
                // Stop animation if running
                console.log("Contact section hidden, stopping 3D animation.");
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
              }
            }
          });
        },
        { threshold: 0.01 }
      ); // Trigger even if 1% is visible

      observer.observe(contactSection);
    } else {
      // Fallback for browsers without IntersectionObserver: always animate
      console.warn(
        "IntersectionObserver not supported, 3D background will always animate."
      );
      animate();
    }

    // Initial call to setup
    init();
  } // End of initContact3DBackground

  // --- Run Initialization Functions ---
  populateNavigation();
  populateHeader();
  populateServices();
  populateProducts(); // Sets up category buttons initially
  populatePortfolio();
  populateAbout();
  populateContact(); // Populates form placeholders and sets up validation
  populateFooter();

  // Initialize Effects and Interactions
  navbarShrink(); // Call initially in case page loads scrolled
  document.addEventListener("scroll", navbarShrink);
  initializeOrRefreshScrollSpy(); // Initial call after content is populated
  setupNavbarInteraction();
  setupSmoothScroll();
  setupHeaderTextScrollEffect();
  initContact3DBackground(); // Initialize the 3D background

  // Add event listeners for product section
  if (productSearchInput) {
    productSearchInput.addEventListener("input", () => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        currentSearchTerm = productSearchInput.value;
        filterProducts();
      }, 300); // Debounce search input
    });
  }

  if (loadMoreProductsBtn) {
    loadMoreProductsBtn.addEventListener("click", renderProductPage); // Load next page on click
  }
}); // End DOMContentLoaded
