// Drag-and-Drop Functionality
const dragArea = document.getElementById('dragArea');
const fileInput = document.getElementById('fileInput');

dragArea.addEventListener('dragover', (e) => {
	e.preventDefault();
	dragArea.classList.add('dragover');
});

dragArea.addEventListener('dragleave', () => {
	dragArea.classList.remove('dragover');
});

dragArea.addEventListener('drop', (e) => {
	e.preventDefault();
	dragArea.classList.remove('dragover');

	const files = e.dataTransfer.files;
	handleFiles(files);
});

fileInput.addEventListener('change', (e) => {
	const files = e.target.files;
	handleFiles(files);
});

function handleFiles(files) {
	if (files.length > 0) {
		const file = files[0];
		if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const url = e.target.result;

				// Clear any previously uploaded content and text, except the .grid-lines
				Array.from(dragArea.children).forEach(child => {
					if (!child.classList.contains('grid-lines')) {
						child.remove();
					}
				});

				
				
				// Create and append the new content
				if (file.type.startsWith('image/')) {
					const img = document.createElement('img');
					img.src = url;
					img.alt = "Uploaded Image";
					img.style.maxHeight = "100%";
					img.style.width = "auto";
					img.style.borderRadius = "8px";
					dragArea.appendChild(img);
				} else if (file.type.startsWith('video/')) {
					const video = document.createElement('video');
					video.src = url;
					video.controls = true;
					video.style.maxHeight = "100%";
					video.style.width = "auto";
					video.style.borderRadius = "8px";
					dragArea.appendChild(video);
				}
			};
			reader.readAsDataURL(file);
		} else {
			alert('Please upload an image or video file.');
		}
	}
}
