document.getElementById("search-icon").addEventListener("click", function() {
    var searchInput = document.getElementById("search");
    var searchBtn = document.getElementById("search-btn");
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "block";
        searchBtn.style.display = "block";
    } else {
        searchInput.style.display = "none";
        searchBtn.style.display = "none";
    }
});
// JavaScript for toggling active stage in sidebar
document.addEventListener("DOMContentLoaded", function() {
    const stageLinks = document.querySelectorAll(".stage-link");

    stageLinks.forEach(link => {
        link.addEventListener("click", function() {
            stageLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        });
    });
});
