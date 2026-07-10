/*
Exercise 2 — Intermediate

Create a type:

type Book = ...

that is a tuple containing:

Title (string)
Author (string)
Year (number)
Available (boolean)

Then:

create an array named library of type Book[];
add at least 3 books;
iterate through the array using for...of;
display only the title and year of each book;
finally, count how many books are available (true) and show the total.
*/

type Book = [
    title: string,
    author: string,
    year: number,
    avaliable: boolean
];

let library: Book[] = [
    [
        "Can't hurt me",
        "David Goggins",
        2018,
        true        
    ],

    [
        "Never finished",
        "David Goggins",
        2023,
        true        
    ],

    [
        "Ego is the enemy",
        "Ryan Holiday",
        2018,
        true        
    ],

        [
        "The Courage To Be Disliked:",
        "Fumitake Koga and Ichiro Kishimi",
        2020,
        false
    ]
];

// Counter
let availabeBooks = 0;

for(const book of library) {
    console.log(`Title: ${book[0]} | Year: ${book[2]}`);

    if(book[3]){
        availabeBooks++
    }
};

//Final result 
console.log(`Avaliable books: ${availabeBooks}`)