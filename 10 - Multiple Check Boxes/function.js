const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let previouslyChecked;

function checkHandler(e) {
    let inbetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
        if (checkbox === this || checkbox === previouslyChecked) {
            inbetween = !inbetween;
            console.log("start checking them inbetween");
        }
        if (inbetween) {
            checkbox.checked = true;
        }
        });
    }
    previouslyChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', checkHandler));