/*

*/

function showValue(value: unknown) {

    if(typeof value === "string") {

        console.log(value.toUpperCase());

    } else if(typeof value === "number") {

        console.log(value * 2);

    } else if(typeof value === "boolean") {

        switch(value) {
            case true:
                console.log("Yees");
                break

            case false:
                console.log("No")
                break
        }

    } else {
        console.log("Type not supported")
    }

};

showValue("I'm improving my skills")
showValue(false)
showValue(33.5)
showValue(
    {
    nameUser: "pedro",
})