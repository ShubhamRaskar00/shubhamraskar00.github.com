document.addEventListener("DOMContentLoaded", () => {
  if (typeof siteData === "undefined") {
    console.error("Site data (data.js) not loaded.");
    return;
  }

  // --- Content Population Functions ---
  // ... (all your populate functions: populateNavigation, populateHeader, etc.) ...
  function populateNavigation() {
    const navLogo = document.getElementById("navLogo");
    if (navLogo && siteData.navigation.logo) {
      navLogo.src = siteData.navigation.logo.src;
      navLogo.alt = siteData.navigation.logo.alt;
    }
  }

  function populateHeader() {
    const headerData = siteData.header;
    const headerVideo = document.getElementById("headerVideo");
    const videoSource = headerVideo.querySelector("source");

    if (headerVideo && videoSource && headerData.videoSrc) {
      videoSource.src = headerData.videoSrc;
      headerVideo.poster = headerData.videoPoster || "";
      headerVideo.load();
    }

    document.getElementById("headerContactButton").textContent =
      headerData.contactButtonText;

    const leadInEl = document.getElementById("headerLeadIn");
    const headingEl = document.getElementById("headerHeading");
    const subtextEl = document.getElementById("headerSubtext");

    leadInEl.innerHTML = "";
    headingEl.innerHTML = "";
    subtextEl.innerHTML = "";

    async function typeLines(
      element,
      lines,
      speed = 100,
      initialDelay = 0,
      addFinalCursor = false
    ) {
      await new Promise((resolve) => setTimeout(resolve, initialDelay));
      let overallCursor = element.querySelector(".typing-cursor");
      if (overallCursor) overallCursor.remove();
      overallCursor = document.createElement("span");
      overallCursor.className = "typing-cursor";

      for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        const line = lines[lineIndex];
        const lineSpan = document.createElement("span");
        if (lineIndex > 0) element.appendChild(document.createElement("br"));
        element.appendChild(lineSpan);
        if (overallCursor.parentNode)
          overallCursor.parentNode.removeChild(overallCursor);
        element.appendChild(overallCursor);
        for (let i = 0; i < line.length; i++) {
          lineSpan.textContent += line.charAt(i);
          await new Promise((resolve) => setTimeout(resolve, speed));
        }
      }
      if (!addFinalCursor && overallCursor.parentNode)
        overallCursor.parentNode.removeChild(overallCursor);
      else if (addFinalCursor && !overallCursor.parentNode)
        element.appendChild(overallCursor);
    }

    (async () => {
      if (headerData.leadInLines && headerData.leadInLines.length > 0)
        await typeLines(leadInEl, headerData.leadInLines, 80, 500);
      if (headerData.headingLines && headerData.headingLines.length > 0)
        await typeLines(headingEl, headerData.headingLines, 100, 200);
      if (headerData.subtextLines && headerData.subtextLines.length > 0)
        await typeLines(subtextEl, headerData.subtextLines, 60, 200, true);
    })();
  }

  function populateServices() {
    document.getElementById("servicesHeading").textContent =
      siteData.services.heading;
    document.getElementById("servicesSubheading").textContent =
      siteData.services.subheading;
    const itemsContainer = document.getElementById("servicesItemsContainer");
    const detailsContainer = document.getElementById("serviceDetailsContainer");
    itemsContainer.innerHTML = "";
    detailsContainer.innerHTML = "";

    siteData.services.items.forEach((service, index) => {
      const colDiv = document.createElement("div");
      colDiv.className = "col-md-4 mb-4";

      let iconHTML = '<span class="fa-stack fa-4x">';
      service.iconStack.forEach((iconClass) => {
        iconHTML += `<i class="${iconClass}"></i>`;
      });
      iconHTML += "</span>";

      const serviceLink = document.createElement("a");
      serviceLink.href = `#${service.id}`;
      serviceLink.className =
        "service-item-link page-scroll d-block text-center";

      serviceLink.innerHTML = `
                ${iconHTML}
                <h4 class="my-3 service-heading">${service.title}</h4>
                <p class="text-muted">${service.shortDescription}</p>
            `;
      colDiv.appendChild(serviceLink);
      itemsContainer.appendChild(colDiv);

      if (service.details) {
        const detailSection = document.createElement("section");
        detailSection.id = service.id;
        detailSection.className = `page-section service-detail ${
          index % 2 === 0 ? "bg-white" : "bg-light"
        }`;

        let plansHTML = '<div class="row plans-container">';
        service.details.plans.forEach((plan) => {
          plansHTML += `
                        <div class="col-lg-4 mb-4">
                            <div class="card plan-card h-100">
                                <div class="card-header text-center text-uppercase text-white">${
                                  plan.name
                                }</div>
                                <div class="card-body d-flex flex-column">
                                    ${
                                      plan.price
                                        ? `<h5 class="card-title text-center mb-4">${plan.price}</h5>`
                                        : ""
                                    }
                                    <ul class="list-group list-group-flush text-center mb-4 flex-grow-1">
                                        ${plan.features
                                          .map(
                                            (feature) =>
                                              `<li class="list-group-item">${feature}</li>`
                                          )
                                          .join("")}
                                    </ul>
                                    <a href="${
                                      plan.ctaLink
                                    }" class="btn btn-primary mt-auto page-scroll text-white">${
            service.details.contactButtonText || "Learn More"
          }</a>
                                </div>
                            </div>
                        </div>
                    `;
        });
        plansHTML += "</div>";

        detailSection.innerHTML = `
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">${
                              service.details.heading
                            }</h2>
                            <p class="text-muted lead mb-5">${
                              service.details.description
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

  function populateProducts() {
    const productsData = siteData.products;
    document.getElementById("productsHeading").textContent =
      productsData.heading;
    document.getElementById("productsSubheading").textContent =
      productsData.subheading;

    const categoriesContainer = document.getElementById(
      "productCategoriesContainer"
    );
    categoriesContainer.innerHTML = "";

    productsData.categories.forEach((category) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "col-lg-auto col-md-4 col-sm-6 mb-3";
      categoryDiv.innerHTML = `
                <div class="category-link-item" data-category-id="${category.id}">
                    <h5 class="mb-1">${category.name}</h5>
                </div>`;
      categoriesContainer.appendChild(categoryDiv);

      categoryDiv
        .querySelector(".category-link-item")
        .addEventListener("click", function () {
          displayProductItems(this.dataset.categoryId);
          document
            .querySelectorAll("#productCategoriesContainer .category-link-item")
            .forEach((item) => {
              item.classList.remove("active");
            });
          this.classList.add("active");
        });
    });
  }

  function displayProductItems(categoryId) {
    const productItemsGrid = document.getElementById(
      "productItemsGridContainer"
    );
    productItemsGrid.innerHTML = "";
    productItemsGrid.style.display = "flex";

    const category = siteData.products.categories.find(
      (cat) => cat.id === categoryId
    );
    if (category && category.items) {
      category.items.forEach((product) => {
        const productCol = document.createElement("div");
        productCol.className = "col-lg-4 col-md-6 mb-4";
        productCol.innerHTML = `
                    <div class="card h-100 product-card" data-product-id="${product.id}" data-category-id="${categoryId}">
                        <img src="${product.previewImage}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                        </div>
                    </div>
                `;
        productItemsGrid.appendChild(productCol);

        productCol
          .querySelector(".product-card")
          .addEventListener("click", function () {
            showProductDetailModal(
              this.dataset.productId,
              this.dataset.categoryId
            );
          });
      });
    }
  }

  function showProductDetailModal(productId, categoryId) {
    const category = siteData.products.categories.find(
      (cat) => cat.id === categoryId
    );
    if (!category) return;
    const product = category.items.find((item) => item.id === productId);
    if (!product || !product.details) return;

    const details = product.details;
    const modalBody = document.getElementById("productDetailModalBody");
    const modalLabel = document.getElementById("productDetailModalLabel");
    const modalContactBtn = document.getElementById(
      "productDetailModalContactBtn"
    );

    modalLabel.textContent = details.name;
    modalContactBtn.textContent = details.contactButtonText || "Contact Us";

    let imagesHTML = "";
    if (details.images && details.images.length > 0) {
      if (details.images.length === 1) {
        imagesHTML = `<img src="${details.images[0]}" class="img-fluid rounded mb-3" alt="${details.name}">`;
      } else {
        imagesHTML = `
                    <div id="productImageCarousel" class="carousel slide mb-3" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            ${details.images
                              .map(
                                (_, index) => `
                                <button type="button" data-bs-target="#productImageCarousel" data-bs-slide-to="${index}" class="${
                                  index === 0 ? "active" : ""
                                }" aria-current="${
                                  index === 0 ? "true" : "false"
                                }" aria-label="Slide ${index + 1}"></button>
                            `
                              )
                              .join("")}
                        </div>
                        <div class="carousel-inner">
                            ${details.images
                              .map(
                                (imgSrc, index) => `
                                <div class="carousel-item ${
                                  index === 0 ? "active" : ""
                                }">
                                    <img src="${imgSrc}" class="d-block w-100" alt="${
                                  details.name
                                } image ${index + 1}">
                                </div>`
                              )
                              .join("")}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#productImageCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#productImageCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>`;
      }
    }

    modalBody.innerHTML = `
            ${imagesHTML}
            <h4>Use Cases:</h4>
            <ul>${details.useCases.map((uc) => `<li>${uc}</li>`).join("")}</ul>
            <h4>Key Features:</h4>
            <ul>${details.features.map((f) => `<li>${f}</li>`).join("")}</ul>
            <h4 class="mt-3">Price: ${details.price}</h4>
        `;

    const productModal = new bootstrap.Modal(
      document.getElementById("productDetailModal")
    );
    productModal.show();
  }

  function populatePortfolio() {
    document.getElementById("portfolioHeading").textContent =
      siteData.portfolio.heading;
    document.getElementById("portfolioSubheading").textContent =
      siteData.portfolio.subheading;
    const gridContainer = document.getElementById("portfolioGridContainer");
    const modalsContainer = document.getElementById("portfolioModalsContainer");
    gridContainer.innerHTML = "";
    modalsContainer.innerHTML = "";

    siteData.portfolio.items.forEach((item) => {
      const gridItemDiv = document.createElement("div");
      gridItemDiv.className = "col-lg-4 col-sm-6 mb-4 portfolio-item";

      let thumbnailHTML = "";
      if (item.type === "video" && item.videoSrcPreview) {
        thumbnailHTML = `
                    <img src="${
                      item.gridImage
                    }" class="img-fluid portfolio-thumbnail-image has-video-preview" alt="${
          item.gridImageAlt || item.title + " poster"
        }">
                    <video class="portfolio-thumbnail-video" poster="${
                      item.gridImage
                    }" muted loop playsinline>
                        <source src="${item.videoSrcPreview}" type="video/mp4">
                    </video>
                `;
      } else {
        thumbnailHTML = `<img src="${
          item.gridImage
        }" class="img-fluid portfolio-thumbnail-image" alt="${
          item.gridImageAlt || item.title
        }">`;
      }

      gridItemDiv.innerHTML = `
                <a class="portfolio-link" data-bs-toggle="modal" href="#${item.id}">
                    ${thumbnailHTML}
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                </a>
                <div class="portfolio-caption">
                    <h4 class="portfolio-caption-heading">${item.title}</h4>
                    <p class="portfolio-caption-subheading text-muted">${item.category}</p>
                </div>
            `;
      gridContainer.appendChild(gridItemDiv);

      if (item.type === "video" && item.videoSrcPreview) {
        const linkElement = gridItemDiv.querySelector(".portfolio-link");
        const videoElement = linkElement.querySelector(
          ".portfolio-thumbnail-video"
        );
        if (videoElement) {
          linkElement.addEventListener("mouseenter", () => {
            videoElement
              .play()
              .catch((e) =>
                console.warn("Video preview play interrupted or failed:", e)
              );
          });
          linkElement.addEventListener("mouseleave", () => {
            videoElement.pause();
            videoElement.currentTime = 0;
          });
        }
      }

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
                            <source src="${
                              modalData.videoSrc
                            }" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>`;
      } else if (modalData.type === "image" && modalData.image) {
        mediaHTML = `<img class="img-fluid d-block mx-auto modal-image" src="${
          modalData.image
        }" alt="${modalData.imageAlt || modalData.title}" />`;
      }

      let tagsHTML = "";
      if (modalData.tags && modalData.tags.length > 0) {
        tagsHTML = `<div class="portfolio-tags text-center ">${modalData.tags
          .map((tag) => `<span class="badge text-white">${tag}</span>`)
          .join(" ")}</div>`;
      }

      let projectInfoHTML = '<ul class="list-inline text-center">';
      if (modalData.date)
        projectInfoHTML += `<li><strong>Date:</strong> ${modalData.date}</li>`;
      if (modalData.client)
        projectInfoHTML += `<li><strong>Client:</strong> ${modalData.client}</li>`;
      if (
        modalData.category &&
        !siteData.portfolio.items.find((p) => p.id === item.id).category
      ) {
        projectInfoHTML += `<li><strong>Category:</strong> ${modalData.category}</li>`;
      }
      projectInfoHTML += "</ul>";
      if (projectInfoHTML === '<ul class="list-inline text-center"></ul>')
        projectInfoHTML = "";

      let linksHTML = "";
      if (modalData.liveProjectHref && modalData.liveProjectText) {
        linksHTML += `<p class="text-center"><a href="${modalData.liveProjectHref}" class="btn btn-sm btn-outline-primary me-2" target="_blank" rel="noopener noreferrer">${modalData.liveProjectText}</a></p>`;
      }
      if (modalData.githubLinkText && modalData.githubLinkHref) {
        linksHTML += `<p class="text-center"><a href="${modalData.githubLinkHref}" class="btn btn-sm btn-outline-secondary" target="_blank" rel="noopener noreferrer">${modalData.githubLinkText}</a></p>`;
      }

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
                                        }Label">${modalData.title}</h2>
                                        <p class="item-intro text-muted">${
                                          modalData.intro
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

      if (modalData.type === "video") {
        const modalElement = document.getElementById(item.id);
        const modalVideoPlayer = modalElement.querySelector(
          ".modal-video-player"
        );
        if (modalVideoPlayer) {
          modalElement.addEventListener("hidden.bs.modal", () => {
            modalVideoPlayer.pause();
          });
        }
      }
    });
  }

  function populateAbout() {
    document.getElementById("aboutHeading").textContent =
      siteData.about.heading;
    document.getElementById("aboutSubheading").textContent =
      siteData.about.subheading;
    const container = document.getElementById("timelineContainer");
    container.innerHTML = "";
    siteData.about.timeline.forEach((item, index) => {
      const li = document.createElement("li");
      li.classList.add("timeline-item-for-animation");
      if (index % 2 !== 0) {
        li.classList.add("timeline-inverted");
      }

      if (item.type === "event") {
        li.innerHTML = `
                    <div class="timeline-image">
                        <img class="rounded-circle h-100 w-100 object-fit-cover" src="${item.image}" alt="${item.imageAlt}"/>
                    </div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="text-uppercase">${item.dateRange}</h4>
                            <h4 class="subheading">${item.title}</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">${item.description}</p></div>
                    </div>
                `;
      } else if (item.type === "milestone") {
        li.innerHTML = `
                    <div class="timeline-image">
                        <h4 class="text-uppercase">${item.textLines.join(
                          "<br />"
                        )}</h4>
                    </div>
                `;
      }
      container.appendChild(li);
    });
    observeTimelineItems();
  }

  function populateContact() {
    document.getElementById("contactHeading").textContent =
      siteData.contact.heading;
    document.getElementById("contactSubheading").textContent =
      siteData.contact.subheading;

    const nameInput = document.getElementById("name");
    nameInput.placeholder = siteData.contact.formPlaceholders.name;
    nameInput.dataset.validationRequiredMessage =
      siteData.contact.validationMessages.name;

    const emailInput = document.getElementById("email");
    emailInput.placeholder = siteData.contact.formPlaceholders.email;
    emailInput.dataset.validationRequiredMessage =
      siteData.contact.validationMessages.email;

    const phoneInput = document.getElementById("phone");
    phoneInput.placeholder = siteData.contact.formPlaceholders.phone;
    phoneInput.dataset.validationRequiredMessage =
      siteData.contact.validationMessages.phone;

    const messageTextarea = document.getElementById("message");
    messageTextarea.placeholder = siteData.contact.formPlaceholders.message;
    messageTextarea.dataset.validationRequiredMessage =
      siteData.contact.validationMessages.message;

    document.getElementById("sendMessageButton").textContent =
      siteData.contact.submitButtonText;
  }

  function populateFooter() {
    document.getElementById(
      "footerCopyright"
    ).innerHTML = `Copyright © ${siteData.footer.copyrightText}`;
    const socialContainer = document.getElementById("footerSocialLinks");
    socialContainer.innerHTML = "";
    siteData.footer.socialLinks.forEach((link) => {
      const li = document.createElement("li");
      li.className = "list-inline-item";
      li.innerHTML = `<a href="${link.href}" target="_blank" aria-label="${link.label}"><i class="${link.iconClass}"></i></a>`;
      socialContainer.appendChild(li);
    });
  }

  // --- Initialize Content ---
  populateNavigation();
  populateHeader();
  populateServices();
  populateProducts();
  populatePortfolio();
  populateAbout();
  populateContact();
  populateFooter();
  initContact3DBackground();

  // --- Interactivity & Effects ---
  let scrollSpyInstance = null; // Variable to hold the ScrollSpy instance

  function getNavbarHeight() {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    return navbarCollapsible ? navbarCollapsible.offsetHeight : 70; // Default offset if navbar not found
  }

  function initializeOrRefreshScrollSpy() {
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
      const currentOffset = getNavbarHeight() + 10; // Add a small buffer
      if (scrollSpyInstance) {
        // If instance exists, dispose and re-create (or update options if BS5 allows)
        scrollSpyInstance.dispose();
      }
      scrollSpyInstance = new bootstrap.ScrollSpy(document.body, {
        target: "#mainNav",
        offset: currentOffset,
      });
    }
  }

  const navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) return;
    const isShrunk = navbarCollapsible.classList.contains("navbar-shrink");
    if (window.scrollY === 0) {
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
  navbarShrink();
  document.addEventListener("scroll", navbarShrink);
  initializeOrRefreshScrollSpy(); // Initial call

  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link.page-scroll")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        const collapseElement = document.getElementById("navbarResponsive");
        const bsCollapse = bootstrap.Collapse.getInstance(collapseElement);
        if (bsCollapse && collapseElement.classList.contains("show"))
          bsCollapse.hide();
      }
    });
  });

  document.querySelectorAll("a.page-scroll").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offset = getNavbarHeight();
          const elementPosition =
            targetElement.getBoundingClientRect().top + window.pageYOffset;
          let scrollToPosition =
            targetId === "#page-top" ? 0 : elementPosition - offset + 5;
          window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
        }
      }
    });
  });

  const introTextElement = document.querySelector(
    "header.masthead .intro-text"
  );
  const headerElement = document.querySelector("header.masthead");
  if (introTextElement && headerElement) {
    const totalMoveRange = 100;
    const initialTranslateX = 0;
    introTextElement.style.transform = `translateX(${initialTranslateX}px)`;
    window.addEventListener(
      "scroll",
      () => {
        const scrollY = window.scrollY;
        const headerHeight = headerElement.offsetHeight;
        const viewportHeight = window.innerHeight;
        const headerTop = headerElement.getBoundingClientRect().top;
        let currentTranslateX = initialTranslateX;
        if (headerTop < viewportHeight && headerTop + headerHeight > 0) {
          let progress =
            (viewportHeight - headerTop) / (viewportHeight + headerHeight);
          progress = Math.min(1, Math.max(0, progress));
          currentTranslateX =
            initialTranslateX - progress * (totalMoveRange / 2);
        } else if (headerTop + headerHeight <= 0) {
          currentTranslateX = initialTranslateX - totalMoveRange / 2;
        } else {
          currentTranslateX = initialTranslateX;
        }
        introTextElement.style.transform = `translateX(${currentTranslateX}px)`;
      },
      { passive: true }
    );
  }

  function observeTimelineItems() {
    const timelineItems = document.querySelectorAll(
      ".timeline-item-for-animation"
    );
    if (!timelineItems.length) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const timelineObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    timelineItems.forEach((item) => {
      timelineObserver.observe(item);
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");
    const phoneField = document.getElementById("phone");

    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      if (
        !nameField.value ||
        !emailField.value ||
        !messageField.value ||
        !phoneField.value
      ) {
        alert("Please fill in all required fields.");
        if (!nameField.value) nameField.classList.add("is-invalid");
        else nameField.classList.remove("is-invalid");
        if (!emailField.value) emailField.classList.add("is-invalid");
        else emailField.classList.remove("is-invalid");
        if (!phoneField.value) phoneField.classList.add("is-invalid");
        else phoneField.classList.remove("is-invalid");
        if (!messageField.value) messageField.classList.add("is-invalid");
        else messageField.classList.remove("is-invalid");
        return;
      } else {
        nameField.classList.remove("is-invalid");
        emailField.classList.remove("is-invalid");
        phoneField.classList.remove("is-invalid");
        messageField.classList.remove("is-invalid");
      }

      const submitButton = document.getElementById("sendMessageButton");
      const originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      const formData = {
        name: nameField.value,
        email: emailField.value,
        message: messageField.value,
        phoneNumber: phoneField.value,
      };

      try {
        const response = await fetch(
          "https://shubh-backend.onrender.com/api/contact/sendmail",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          alert("Your message has been sent successfully!");
          contactForm.reset();
        } else {
          alert(
            `There was an error sending your message. Status: ${response.status}`
          );
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert(
          "There was an error sending your message. Please try again later."
        );
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });

    [nameField, emailField, phoneField, messageField].forEach((field) => {
      field.addEventListener("input", () => {
        if (field.value.trim() !== "") field.classList.remove("is-invalid");
      });
    });
  }

  // --- 3D Background for Contact Section ---
  function initContact3DBackground() {
    const contactSection = document.getElementById("contact");
    const canvas = document.getElementById("contactBackground3D");

    if (!canvas || typeof THREE === "undefined") {
      console.warn("Three.js canvas not found or Three.js library not loaded.");
      if (canvas) canvas.style.display = "none";
      if (contactSection) {
        contactSection.style.backgroundImage = "none";
        contactSection.style.backgroundColor = "#1a1a1a";
      }
      return;
    }
    if (contactSection) contactSection.style.backgroundImage = "none";

    let scene, camera, renderer, knot, pointLight;
    let mouseX = 0,
      mouseY = 0;

    let sectionRect = contactSection.getBoundingClientRect(); // Initial rect

    function init() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        50,
        contactSection.offsetWidth / contactSection.offsetHeight,
        0.1,
        1000
      );
      camera.position.z = 6;

      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setSize(contactSection.offsetWidth, contactSection.offsetHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const geometry = new THREE.TorusKnotGeometry(1.5, 0.4, 100, 16);
      const material = new THREE.MeshStandardMaterial({
        color: 0x22ddee,
        metalness: 0.8,
        roughness: 0.3,
        emissive: 0x050505,
      });
      knot = new THREE.Mesh(geometry, material);
      scene.add(knot);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      pointLight = new THREE.PointLight(0xffffff, 0.8, 200);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      const pointLight2 = new THREE.PointLight(0x1ee2e7, 0.5, 150);
      pointLight2.position.set(-5, -3, 2);
      scene.add(pointLight2);

      document.addEventListener("mousemove", onDocumentMouseMove, false);
      window.addEventListener("resize", onWindowResize, false);
      onWindowResize();
    }

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function onWindowResize() {
      // Update sectionRect in case layout changes dynamically (though less likely for a fixed section)
      sectionRect = contactSection.getBoundingClientRect();

      const newWidth = contactSection.offsetWidth;
      const newHeight = contactSection.offsetHeight;
      if (newWidth === 0 || newHeight === 0) return; // Avoid issues if section is hidden

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    let targetRotationX = 0;
    let targetRotationY = 0;

    function animate() {
      requestAnimationFrame(animate);

      targetRotationY = mouseX * 0.5;
      targetRotationX = mouseY * 0.3;

      knot.rotation.y += (targetRotationY - knot.rotation.y) * 0.03;
      knot.rotation.x += (targetRotationX - knot.rotation.x) * 0.03;
      knot.rotation.z += 0.001;

      renderer.render(scene, camera);
    }

    // Ensure THREE is defined before calling init
    if (typeof THREE !== "undefined") {
      init();
      animate();
    } else {
      console.error(
        "Three.js is still not loaded after DOMContentLoaded. 3D background initialization failed."
      );
      if (canvas) canvas.style.display = "none";
      if (contactSection) {
        contactSection.style.backgroundImage =
          "url(https://unsplash.imgix.net/44/C3EWdWzT8imxs0fKeKoC_blackforrest.JPG?q=75&fm=jpg&auto=format&s=986aaa92169d4e97975fa66ebd60bafd)";
        contactSection.style.backgroundPosition = "center";
        contactSection.style.backgroundRepeat = "no-repeat";
        contactSection.style.backgroundSize = "cover";
      }
    }
  }
});
