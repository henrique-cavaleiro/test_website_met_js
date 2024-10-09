function showAlert() {
    alert("Je gaat nu naar een externe site!");
    

}
//

function calculateTotal() {
    const days = document.getElementById("days").value;
    const baseCost = 500;
    const dayCost = 300;
    const totalCost = baseCost + (dayCost * days);
    document.getElementById("total-cost").innerText = `€${totalCost}`;
}
//

function changeText() {
    document.getElementById("about").innerText = "Griekenland is echt een fantastisch land met een rijke cultuur!";

}

//

function toggleSpin() {
    const textElement = document.getElementById('spinning-text');
    textElement.classList.toggle('spin'); // Toggle the 'spin' class on click
}

//
function shakeText() {
    const textElement = document.getElementById('shake');
    textElement.classList.add('shake');
    setTimeout(() => {
        textElement.classList.remove('shake');
    }, 500); // Remove shake after 0.5 seconds
}
document.getElementById('spinning-text').addEventListener('click', shakeText);

//
function bounceText() {
    const textElement = document.getElementById('bounce');
    textElement.classList.toggle('bounce');
}

document.getElementById('spinning-text').addEventListener('click', bounceText);
//
function updateDateTime() {
    // Haal de huidige datum en tijd op
    const now = new Date();
   
    // Formatteer de datum naar de Nederlandse stijl
    // Voorbeeld: "dinsdag 2 oktober 2024"
    const date = now.toLocaleDateString('nl-NL', {
        weekday: 'long', // Weergave van de dag van de week (bijv. "dinsdag")
        year: 'numeric', // Weergave van het jaar (bijv. "2024")
        month: 'long',   // Weergave van de maand (bijv. "oktober")
        day: 'numeric'   // Weergave van de dag van de maand (bijv. "2")
    });
   
    // Formatteer de tijd naar de Nederlandse stijl
    // Voorbeeld: "14:30:15"
    const time = now.toLocaleTimeString('nl-NL');
   
    // Plaats de geformatteerde datum en tijd in het HTML element met id 'currentDateTime'
    document.getElementById('datetime').innerHTML = `${date}, ${time}`;
}

// Roep de updateDateTime functie aan zodra de pagina geladen is
updateDateTime();

// Blijf de datum en tijd elke seconde bijwerken
setInterval(updateDateTime, 1000);

//
function showModal() {
    document.getElementById('myModal').style.display = 'block';
}

//
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
