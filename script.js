// This will run when the page loads
console.log("JavaScript file is linked correctly!");

// Example: Alert when clicking 'Pictures' button
document.addEventListener("DOMContentLoaded", function() {
    const picturesBtn = document.querySelector("li button a[href='#']");
    picturesBtn.addEventListener("click", function(event) {
        event.preventDefault(); // stops default jump
        alert("Pictures button clicked!");
    });
});