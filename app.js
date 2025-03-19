document.getElementById("calculateBtn").addEventListener("click", function() {
    // Get user inputs
    const name1 = document.getElementById("name1").value.trim();
    const dob1 = new Date(document.getElementById("dob1").value);

    const name2 = document.getElementById("name2").value.trim();
    const dob2 = new Date(document.getElementById("dob2").value);

    // Validate inputs
    if (!name1 || !dob1 || !name2 || !dob2) {
        alert("Please fill in all fields!");
        return;
    }

    // Calculate compatibility score (using a fun and improved algorithm)
    const compatibility = calculateCompatibility(name1, dob1, name2, dob2);

    // Display results
    document.getElementById("compatibilityResult").innerText = `You and ${name2} are ${compatibility}% compatible!`;

    // Love message based on compatibility
    let loveMessage = '';
    if (compatibility > 80) {
        loveMessage = "Perfect match!";
    } else if (compatibility > 50) {
        loveMessage = "You're almost there!";
    } else {
        loveMessage = "Room for improvement...";
    }
    document.getElementById("loveMessage").innerText = loveMessage;

    document.getElementById("compatibilityPercentage").innerText = `Compatibility: ${compatibility}%`;

    // Store the compatibility result in LocalStorage
    storeCompatibilityInLocalStorage(name1, name2, compatibility);
});

// Enhanced compatibility calculation (using more fun logic like astrology or numerology)
function calculateCompatibility(name1, dob1, name2, dob2) {
    const nameScore = Math.abs(name1.length - name2.length) * 10;  // Based on name length difference
    const dobDiff = Math.abs(dob1.getFullYear() - dob2.getFullYear()); // Based on birth year difference

    // Numerology-based factor (sum of birthdates)
    const dobNumerology = (dob1.getDate() + dob2.getDate()) % 10;

    // Generate a random number and mix with calculated factors
    const randomFactor = Math.floor(Math.random() * 100);
    const compatibility = Math.min(100, (100 - nameScore - dobDiff + randomFactor + dobNumerology) / 2);

    return Math.max(0, compatibility);
}

// Store compatibility data in LocalStorage
function storeCompatibilityInLocalStorage(name1, name2, compatibility) {
    let pastCompatibilities = JSON.parse(localStorage.getItem("compatibilities")) || [];
    pastCompatibilities.push({ name1, name2, compatibility });
    localStorage.setItem("compatibilities", JSON.stringify(pastCompatibilities));
}

// Bonus feature: Retrieve past compatibility scores from LocalStorage
function displayPastCompatibilities() {
    const pastCompatibilities = JSON.parse(localStorage.getItem("compatibilities")) || [];
    console.log(pastCompatibilities);
}

displayPastCompatibilities();  // Optional call to display the past results (can be used for a history section)
