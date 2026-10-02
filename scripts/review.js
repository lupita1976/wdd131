document.addEventListener("DOMContentLoaded", function () {

    // --- Increment review counter in localStorage ---
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    // Display the counter
    const counterElement = document.getElementById("reviewCounter");
    if (counterElement) {
        counterElement.textContent = reviewCount;
    }

    // --- Parse URL parameters from the GET submission ---
    const urlParams = new URLSearchParams(window.location.search);

    const productName = urlParams.get("productName");
    const rating = urlParams.get("rating");
    const installDate = urlParams.get("installDate");
    const features = urlParams.getAll("features");
    const writtenReview = urlParams.get("writtenReview");
    const userName = urlParams.get("userName");

    // Map product id back to product name for display
    const products = [
        { id: "fc-1888", name: "flux capacitor" },
        { id: "fc-2050", name: "power laces" },
        { id: "fs-1987", name: "time circuits" },
        { id: "ac-2000", name: "low voltage reactor" },
        { id: "jj-1969", name: "warp equalizer" }
    ];

    let displayProductName = productName;
    products.forEach(function (product) {
        if (product.id === productName) {
            displayProductName = product.name;
        }
    });

    // Build the review summary
    const summaryDiv = document.getElementById("reviewSummary");
    if (summaryDiv) {
        let html = "";

        if (displayProductName) {
            html += `<p><strong>Product:</strong> ${displayProductName}</p>`;
        }
        if (rating) {
            const stars = "★".repeat(parseInt(rating)) + "☆".repeat(5 - parseInt(rating));
            html += `<p><strong>Rating:</strong> ${stars} (${rating}/5)</p>`;
        }
        if (installDate) {
            html += `<p><strong>Date of Installation:</strong> ${installDate}</p>`;
        }
        if (features && features.length > 0) {
            html += `<p><strong>Useful Features:</strong> ${features.join(", ")}</p>`;
        }
        if (writtenReview) {
            html += `<p><strong>Written Review:</strong> ${writtenReview}</p>`;
        }
        if (userName) {
            html += `<p><strong>Reviewed by:</strong> ${userName}</p>`;
        }

        summaryDiv.innerHTML = html;
    }
});