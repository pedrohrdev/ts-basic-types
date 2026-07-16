/*
Complete the code below using `never` to ensure that all roles are handled:
*/

type Cargo = "dev" | "designer" | "gerente";

function salario(cargo: Cargo) {
    switch (cargo) {
        case "dev":
            return 5000;

        case "designer":
            return 4500;

        case "gerente":
            return 8000;

        default: {
            let exhaustiveCheck: never = cargo;
            throw new Error(`Cargo nao tratado: ${exhaustiveCheck}`)
        }    
            
    }

};

salario("pedreiro")