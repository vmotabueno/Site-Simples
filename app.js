'use strict';
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    var className = document.body.className;
    if (className.includes("light-theme")) {
        this.textContent = "Dark";    
    } else {
        this.textContent = "Light";
    }
    console.log('Current class name: ' + className);
});
