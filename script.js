// Function to handle appointment button click
function bookAppointment() {
    let telephoneNo = "9117437173";
    
    // Alert message for the user
    alert("Thank you for choosing our hospital!\nPlease call us at " + telephoneNo + " to confirm your appointment with Dr. Gulshan Kumar.");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Welcome message in console
console.log("Welcome to Sanjeevani Care Hospital Website - Located in Bettiah, Bihar.");