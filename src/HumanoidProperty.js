document.querySelectorAll('.body-part').forEach(part => {
    let isEnabled = true;
    
    part.addEventListener('mouseover', function() {
        if (!this.classList.contains('active')) {
            this.style.stroke = isEnabled ? 'red' : 'white';
        }
    });
    
    part.addEventListener('mouseout', function() {
        if (!this.classList.contains('active')) {
            this.style.stroke = 'transparent';
        }
    });
    
    part.addEventListener('click', function() {
        isEnabled = !isEnabled;
        this.classList.toggle('active');
        this.classList.toggle('disabled');
        this.style.stroke = isEnabled ? 'red' : 'white';
        
        if (!isEnabled) {
            this.style.strokeWidth = '3px';
        } else {
            this.style.strokeWidth = '2px';
        }
    });
});