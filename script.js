function openTab(event, tabName) {
    const tabContent = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabContent.forEach((content) => content.classList.remove('active'));
    tabButtons.forEach((button) => button.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}
document.querySelector('.add-image-btn').addEventListener('click', function() {
    // Create an invisible file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Accepts only image files

    // Add an event listener to handle the file selection
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Create a new image element
                const newImage = document.createElement('img');
                newImage.src = e.target.result;
                newImage.alt = `Image ${document.querySelectorAll('.gallery-images img').length + 1}`;
                newImage.style.width = '100px'; // Set width for the new image
                newImage.style.height = 'auto';
                newImage.style.borderRadius = '10px';
                newImage.style.objectFit = 'cover';
                
                // Append the new image to the gallery
                document.querySelector('.gallery-images').appendChild(newImage);
            };
            reader.readAsDataURL(file);
        }
    });

    // Simulate a click on the file input
    fileInput.click();
});
