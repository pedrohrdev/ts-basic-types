// O que será impresso?

const valor: unknown = "TypeScript";

if (typeof valor === "string") {
    console.log(valor.toUpperCase());
}

// "TYPESCRIPT" will be printed here, because we check the type before using the value.