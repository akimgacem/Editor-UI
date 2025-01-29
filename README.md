# Drag-and-Drop Image/Video Upload Interface

## Overview
This project is a simple HTML-based drag-and-drop interface for uploading images and videos. The interface features a futuristic design with a grid background and a responsive layout. Users can drag and drop files or click to upload them. The uploaded content is displayed within a fixed-size area while maintaining its aspect ratio.

This project was created by **DeepSeek** to evaluate coding proficiency in HTML, CSS, and JavaScript.

---

## How to Use
1. **Drag and Drop:**
   - Drag an image or video file from your computer and drop it into the designated area.

2. **Click to Upload:**
   - Click the drag-and-drop area to open a file dialog and select an image or video file.

3. **View Uploaded Content:**
   - The uploaded image or video will be displayed within the drag-and-drop area, replacing the placeholder text.

4. **Reset:**
   - To upload a new file, simply drag and drop or click to upload again. The previous content will be replaced.

---

## Code Structure
### HTML
- The HTML file defines the structure of the page, including:
  - A toolbar with buttons.
  - A header with action buttons.
  - A drag-and-drop area with a grid background.
  - A viewport area for additional content (currently a placeholder).
  - A status bar at the bottom.

### JavaScript
- The JavaScript file handles:
  - Drag-and-drop events (`dragover`, `dragleave`, `drop`).
  - File input changes.
  - Dynamic insertion of uploaded images or videos into the drag-and-drop area.
  - Removal of previous content (except the grid background) when a new file is uploaded.

---

## Notes
- This project was created by **DeepSeek** as part of a coding evaluation.
- The design is intentionally minimalistic and focuses on functionality.
- The code is fully commented for clarity and ease of understanding.

---

Enjoy using the Drag-and-Drop Image/Video Upload Interface! 🚀
