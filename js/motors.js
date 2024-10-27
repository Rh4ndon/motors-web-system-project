window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    const motorcycleDiv = document.getElementById(hash);
    if (motorcycleDiv) {
        motorcycleDiv.style.display = 'block';
    }
});