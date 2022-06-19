
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//question 1

const cat = {
    
    complain: function() {

        console.log("Meaow!");

    }
} ;

cat.complain();

//question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

//question 3

heading.style.fontSize = "2em";

//question 4

heading.classList.add("subheading");

//question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {

    let paragraphColor = "red";

    paragraphs[i].style.color = paragraphColor;

}

//question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//question 7

function myFunction (list) {

    for (let i = 0; i < list.length; i++) {

        const name = list[i].name;

        console.log(name);

    }

}

myFunction(cats);

//question 8

function createCats (cats) {

    const catHtml = "";

    for (let i = 0; i < cats.length; i++) {

        const nameOfCat = cats[i].name;
        const ageOfCat = cats[i].age;

        catHtml =
        `<div>
        <h5>${nameOfCat}</h5>
        <p>${ageOfCat}</p>
        </div>
        `;
        
        return catHtml;

    }
    
}

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);
