/*
Challenge (mixing void and any)

Create a function:

showInformation(info: any): void

It accepts any data type (any) and simply prints:

Information:
<value>

Test it by passing various values.
*/

function showInformation(info: any): void {
    console.log(info);
};

showInformation(
    [
        1, 5, 2, 7, 8
    ]
);

showInformation(
    {
        nameUser: "Pedro",
        job: "Software Developer, future Software Engineer!",
        age: 16,
        dataOfThisPost: "Jun2nd 2026"
        
    }
)