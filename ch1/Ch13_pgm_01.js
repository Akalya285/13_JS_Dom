const firstParagraph = document.querySelector('p');
console.log(firstParagraph);

const para1 = document.querySelector('#para1');
const para2 = document.querySelector('#para2');
const para3 = document.querySelector('#para3');
const para4 = document.querySelector('#para4');

console.log(para1, para2, para3, para4);

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

paragraphs.forEach(para => console.log(para.textContent));

para4.textContent = 'Fourth Paragraph';

paragraphs.forEach((para, index) => {
    para.id = `paragraph${index + 1}`;
    para.className = `text text-${index + 1}`;
});

paragraphs.forEach(para => {
    para.style.color = 'blue';
    para.style.backgroundColor = 'lightgray';
    para.style.border = '1px solid black';
    para.style.fontSize = '16px';
    para.style.fontFamily = 'Arial, sans-serif';
});

paragraphs.forEach((para, index) => {
    if (index === 0 || index === 2) {
        para.style.color = 'green';
    } else if (index === 1 || index === 3) {
        para.style.color = 'red';
    }
});

paragraphs.forEach((para, index) => {
    para.textContent = `Paragraph ${index + 1}`;
    para.id = `para${index + 1}`;
    para.className = `paraClass paraClass-${index + 1}`;
});
