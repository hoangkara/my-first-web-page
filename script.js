
/* Toggle for the dropdown button in header navbar */

function contactInfo() {
    document.getElementById('myDropdown').classList.toggle('show')
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var contactDropdown = document.getElementById('myDropdown');
        if (contactDropdown.classList.contains('show')) {
            contactDropdown.classList.remove('show');
        }
    }
}