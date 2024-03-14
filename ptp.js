// Function to generate and render trip plan with loading bar
function renderTripPlan(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve user selections from the form
    var destination = document.getElementById('destination').value;
    var duration = document.getElementById('duration').value;

    // Show loading bar
    var loader = document.createElement('div');
    loader.classList.add('loader');
    document.getElementById('tripPlan').appendChild(loader);

    // Hide trip plan container
    var tripPlanContainer = document.getElementById('tripPlan');
    tripPlanContainer.style.display = 'none';

    // Simulate loading for 3 seconds
    setTimeout(function () {
        // Detailed itinerary
        var itinerary = '';
        for (var i = 1; i <= duration; i++) {
            itinerary += `
                <div class="trip-day">
                    <div class="trip-day-title">Day ${i}: ${i === 3 ? 'Travel to Shanghai' : 'Exploring ' + destination}</div>
                    <div class="trip-activity">`;

            switch (i) {
                case 1:
                    itinerary += `
                        - Check into hotel in ${destination}<br>
                        - Explore Tiananmen Square<br>
                        - Visit the Forbidden City<br>
                        - Enjoy traditional Peking Duck dinner`;
                    break;
                case 2:
                    itinerary += `
                        - Visit the Great Wall of China (Mutianyu section)<br>
                        - Explore the Summer Palace<br>
                        - Stroll around the historic Hutongs<br>
                        - Optional: Attend a traditional Chinese opera performance`;
                    break;
                case 3:
                    itinerary += `
                        - Take a high-speed train to Shanghai<br>
                        - Check into hotel in Shanghai<br>
                        - Visit the Bund and enjoy the skyline view<br>
                        - Explore the Yu Garden and Old Town<br>
                        - Experience the vibrant nightlife at Xintiandi`;
                    break;
                case 4:
                    itinerary += `
                        - Visit the Shanghai Museum<br>
                        - Explore the French Concession area<br>
                        - Optional: Take a Huangpu River cruise for skyline views<br>
                        - Shopping at Nanjing Road<br>
                        - Departure from Shanghai`;
                    break;
            }
            itinerary += `</div></div>`;
        }

        // Display trip plan
        tripPlanContainer.innerHTML = itinerary;

        // Hide loading bar
        loader.remove();

        // Show trip plan container
        tripPlanContainer.style.display = 'block';
    }, 3000);
}

// Add event listener to form submission
document.getElementById('tripForm').addEventListener('submit', renderTripPlan);

