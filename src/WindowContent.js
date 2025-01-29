// Settings Window Logic
const settingsBtn = document.getElementById('settingsBtn');
const settingsWindow = document.getElementById('settingsWindow');
const closeBtn = document.getElementById('closeBtn');
const minimizeBtn = document.getElementById('minimizeBtn');
const windowContent = document.getElementById('windowContent');
const posX = document.getElementById('posX');
const posY = document.getElementById('posY');

let isDragging = false;
let currentX = 100;
let currentY = 100;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

// Initialize window position
settingsWindow.style.left = `${currentX}px`;
settingsWindow.style.top = `${currentY}px`;

settingsBtn.addEventListener('click', () => {
	settingsWindow.style.display = 'block';
	updatePositionDisplay();
});

closeBtn.addEventListener('click', () => {
	settingsWindow.style.display = 'none';
});

minimizeBtn.addEventListener('click', () => {
	windowContent.style.display = windowContent.style.display === 'none' ? 'block' : 'none';
});

// Drag functionality
document.addEventListener('mousedown', (e) => {
	if (e.target.closest('#windowHeader')) {
		initialX = e.clientX - currentX;
		initialY = e.clientY - currentY;
		isDragging = true;
	}
});

document.addEventListener('mousemove', (e) => {
	if (isDragging) {
		e.preventDefault();
		currentX = e.clientX - initialX;
		currentY = e.clientY - initialY;

		const rect = settingsWindow.getBoundingClientRect();
		const maxX = window.innerWidth - rect.width;
		const maxY = window.innerHeight - rect.height;

		currentX = Math.min(Math.max(currentX, 0), maxX);
		currentY = Math.min(Math.max(currentY, 0), maxY);

		settingsWindow.style.left = `${currentX}px`;
		settingsWindow.style.top = `${currentY}px`;
		updatePositionDisplay();
	}
});

document.addEventListener('mouseup', () => {
	isDragging = false;
});

function updatePositionDisplay() {
	posX.textContent = Math.round(currentX);
	posY.textContent = Math.round(currentY);
}