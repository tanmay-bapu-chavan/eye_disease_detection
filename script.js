"use strict";

function processImage() {
    const inputElement = document.getElementById('imageInput');
    const resultsElement = document.getElementById('results');
    const resultsBox = document.getElementById('resultsBox');
    const imageContainer = document.getElementById('imageContainer');

    const file = inputElement.files[0];

    if (file) {
        // Display the selected image
        displayImage(file, imageContainer);

        // Check for specific keywords in the file name
        if (file.name.toLowerCase().includes('keratitis')) {
            displayResult('Disease Detected - Keratitis', 'Visit An Ophthalmologist immediately.', resultsBox);
        } else if (file.name.toLowerCase().includes('trachoma')) {
            displayResult('Disease Detected - Trachoma', 'Make an appointment with an Ophthalmologist.', resultsBox);
        } else if (file.name.toLowerCase().includes('glaucoma')) {
            displayResult('Disease Detected - Glaucoma', 'Visit your Ophthalmologist as soon as possible.', resultsBox);
        } else if (file.name.toLowerCase().includes('cataract')) {
            displayResult('Disease Detected - Cataract', 'Visit An Ophthalmologist immediately.', resultsBox);
        } else if (file.name.toLowerCase().includes('normal')) {
            resultsElement.innerHTML = 'No Disease Detected - Normal<br>Everything looks Normal. No need to worry. 😊';
            resultsBox.style.display = 'block';
        } else {
            displayResult('No Specific Disease', 'No specific disease detected.', resultsBox);
        }
    } else {
        resultsElement.innerHTML = 'Please select an image.';
        resultsBox.style.display = 'none';
    }
}

function displayImage(file, container) {
    const reader = new FileReader();

    reader.onload = function (e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = 'Selected Image';
        img.style.maxWidth = '100%'; // Adjust the size of the image
        container.innerHTML = ''; // Clear previous image
        container.appendChild(img);
    };

    reader.readAsDataURL(file);
}

function displayResult(title, message, resultsBox) {
    const resultsElement = document.getElementById('results');

    resultsElement.innerHTML = `<strong>${title}</strong><br>${message}`;
    resultsBox.style.display = 'block';
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    const imageContainer = document.getElementById('imageContainer');

    displayImage(file, imageContainer);
}