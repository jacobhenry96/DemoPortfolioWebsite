// Get references to the canvas element and its drawing context
const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

// Set the canvas width to the window's inner width and height to the window's inner height
// This ensures the canvas covers the entire viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the characters to be used for the rain effect
// This combines Japanese Katakana characters, Latin alphabet characters, and numbers
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums; // Combine all characters into a single string

// Set the font size and calculate the number of columns
const fontSize = 16;
const columns = canvas.width / fontSize;

// An array to store the y-coordinate of each character in a column
const rainDrops = [];

// Initialize the rainDrops array with random starting positions within the top 1/5th of the canvas height (Change 1)
for (let x = 0; x < columns; x++) {
    rainDrops[x] = Math.floor(Math.random() * canvas.height / 5);
}

const draw = () => {
    // Clear the canvas with a semi-transparent black fill to create a fading trail effect
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Set the font style for the characters
    context.fillStyle = '#0F0'; // Green color for the characters
    context.font = fontSize + 'px monospace'; // Set font size and monospace font

    // Loop through each column
    for (let i = 0; i < rainDrops.length; i++) {
        // Randomly select a character from the alphabet string
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));

        // Draw the character at the current position (i * fontSize, rainDrops[i] * fontSize)
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        // Check if the character has reached the bottom of the canvas
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            // If it has reached the bottom, reset its y-coordinate to the top
            rainDrops[i] = 0;
        }

        // Increment the y-coordinate of the character with a random value between 0 and 2 (Change 2)
        rainDrops[i] += Math.random() * 200;
    }
};

// Call the draw function every 30 milliseconds to create the animation
setInterval(draw, 30);
