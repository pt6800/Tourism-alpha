document.getElementById("flightBookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Retrieve form data
    const departureDate = document.getElementById("departureDate").value;
    const returnDate = document.getElementById("returnDate").value;
    const numPassengers = document.getElementById("numPassengers").value;
    // Validate form data
    if (departureDate && numPassengers) {
        // Perform booking process (e.g., redirect to booking confirmation page)
        alert("Flight booked successfully!");
        // You can redirect to another page using window.location.href = "confirmation.html";
    } else {
        alert("Please fill in all required fields.");
    }
});