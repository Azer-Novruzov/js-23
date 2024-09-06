let firstTask = document.querySelector('div.first-task');
firstTask.style.marginLeft = '15vh';
firstTask.style.paddingTop = '5vh';
let lastTask = document.querySelector('div.last-task')
lastTask.style.marginTop = '10vh'
lastTask.style.marginLeft = '50vh'
let liPrimary1 = document.querySelector('li.primary:nth-child(3)');
liPrimary1.style.backgroundColor = 'teal';
liPrimary1.style.width = 'max-content'
let liPrimary2 = document.querySelector('li.primary:nth-child(6)');
liPrimary2.style.backgroundColor = 'teal';
liPrimary2.style.width = 'max-content'
let h1 = document.querySelector("h1");
h1.innerText = "Series";
let liPrimary = document.querySelectorAll('li.primary');
function addStudent(name) {
    let ul = document.querySelector('.ul-two');
    let li = document.createElement('li');
    li.textContent = name;
    ul.append(li);
}
addStudent('Azer Novruzov');
addStudent('Ali Aliyev');
addStudent('Hesen Hesenli');
let ul = document.querySelector('.ul-two');
ul.style.listStyle = 'none';
for (let i = 2; i <= 28; i += 2) {
    let color = document.querySelector(`.ul-two li:nth-child(${i})`);
    if (color) {
        color.style.backgroundColor = 'aqua';
        color.style.width = '50%';
    }
}
// let firstTask = document.querySelector('div.first-task');
// firstTask.style.marginLeft = '15vh';
// firstTask.style.paddingTop = '5vh';
// let lastTask = document.querySelector('div.last-task')
// lastTask.style.marginTop = '10vh'
// lastTask.style.marginLeft = '50vh'

// let h1 = document.querySelector("h1");
// h1.innerText = "Series";
// let liPrimary = document.querySelectorAll('li.primary');

// liPrimary.forEach(function(item) {
//     item.style.color = 'teal';
// });

// for (let i = 0; i < liPrimary.length; i++) {
//     liPrimary[i].style.color = 'teal';
// }
// liPrimary.forEach(item => {
//     item.style.color = 'teal';
// });
// let ul = document.querySelector('.ul-two');
// ul.style.listStyle = 'number';
// ul.style.listStyle = 'none'
// let liColor = document.querySelectorAll('li.color')
// liColor.forEach(item => {
//     item.style.backgroundColor = 'aqua';
//     item.style.width = '50%'

// });
// function addStudent(name, bgColor) {
//     let ulElement = document.querySelector('ul.ul-two');
//     if (ulElement) {
//         let newLi = document.createElement('li');
//         newLi.textContent = name;
//         if (bgColor) {
//             newLi.style.backgroundColor = bgColor;
//         }
//         newLi.style.width = '50%';
        
//         ulElement.append(newLi);
//     }
// }
// addStudent('Azer Novruzov');
// addStudent('Ali Aliyev', 'aqua');
// addStudent('Hesen Hesenli');
