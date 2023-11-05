const descriptions = [
    "Enjoy the finest coffee in town.",
    "A cozy place for coffee lovers.",
    "Experience the magic of caffeine at Caffeine Corner."
];

let currentDescriptionIndex = 0;
const descriptionElement = document.getElementById("description");

function typeDescription(description) {
    let index = 0;
    const interval = setInterval(function() {
        descriptionElement.innerHTML = description.substring(0, index);
        index++;
        if (index > description.length) {
            clearInterval(interval);
            setTimeout(function() {
                eraseDescription(description);
            }, 1000);
        }
    }, 50);
}

function eraseDescription(description) {
    let index = description.length;
    const interval = setInterval(function() {
        descriptionElement.innerHTML = description.substring(0, index);
        index--;
        if (index < 0) {
            clearInterval(interval);
            currentDescriptionIndex = (currentDescriptionIndex + 1) % descriptions.length;
            setTimeout(function() {
                typeDescription(descriptions[currentDescriptionIndex]);
            }, 1000);
        }
    }, 50);
}

typeDescription(descriptions[currentDescriptionIndex]);