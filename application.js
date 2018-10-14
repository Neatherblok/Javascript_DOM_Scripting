//opdracht 1

let course = document.getElementsByTagName('tr');
let allGrades = [];


for(let i = 0; i < course.length; i++) {
    const grade = course[i].lastElementChild.innerHTML;
    let integerGrade = Number(grade);
    allGrades.push(integerGrade);
}

console.log(allGrades);

let total = 0;
for(let x = 0; x < allGrades.length; x++) {
    total += allGrades[x];
}
let avg = total / allGrades.length;
let totalAvg = avg.toFixed(1);

console.log(avg.toFixed(3));

const table = document.getElementById("table");
const trAvg = document.createElement("tr");
const tdAvg = document.createElement("td");
const dataAvg = `My average schoolgrade is ${totalAvg}`;

tdAvg.innerText = dataAvg;
trAvg.appendChild(tdAvg);
table.appendChild(trAvg);

console.log("----------------------------------------------------");

//opdracht 2

const li = document.getElementsByTagName('li');
console.log(li.length);

    for(let i = 0; i < li.length; i++){
        if (i % 2 === 0 ) {
            li[i].style.backgroundColor = 'grey';
        }
    }

console.log("----------------------------------------------------");

//opdracht 3

function createImageElement(imageSrcName) {
    const image = document.createElement('img');
    image.setAttribute('src', imageSrcName);
    image.setAttribute('alt', 'random image from picsum.');
    body.appendChild(image);
}

createImageElement('https://picsum.photos/200/300/?random');