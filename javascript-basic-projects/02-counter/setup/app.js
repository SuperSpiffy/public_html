//set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value'); //this is the span value
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) { //function checks for button clicked
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }

        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }

        if(count === 0){
            value.style.color = "black";
        }

        value.textContent = count; //sets span value to count value
    });
});
