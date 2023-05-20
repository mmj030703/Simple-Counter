//* Way One :: Accessing each button one by one
// let count = 0;
// const countElement = document.querySelector(".count");
// const decrease = document.querySelector(".decrease");
// const increase = document.querySelector(".increase");
// const reset = document.querySelector(".reset");

// decrease.addEventListener('click', () => {
//     count--;
//     countElement.innerHTML = count;
//     checkColor(count);
// });

// increase.addEventListener('click', () => {
//     count++;
//     countElement.innerHTML = count;
//     checkColor(count);
// });

// reset.addEventListener('click', () => {
//     count = 0;
//     countElement.innerHTML = count;
//     checkColor(count);
// });

// const checkColor = (count) => {
//     if(count > 0) {
//         countElement.style.color = "#008000";
//     }  
//     else if(count < 0) {
//         countElement.style.color = "#ff0000";
//     }  
//     else {
//         countElement.style.color = "var(--primaryColor)";
//     }
// }

//* Way Two :: Accessing all buttons at once using forEach method 
//* Good & Efficient Code 

//? initalizing count to 0.
let count  = 0;
const value = document.querySelector('.count');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (eventObj) => {
        if(eventObj.target.classList.contains('decrease')) {
            count--;
        }
        else if(eventObj.target.classList.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        value.textContent = count;
        setColor(count);
    })
});

const setColor = (count) => {
    if(count > 0) {
        value.style.color = "#008000";
    }
    else if(count < 0) {
        value.style.color = "#ff0000";
    }
    else {
        value.style.color = "var(--primaryColor)";
    }
}