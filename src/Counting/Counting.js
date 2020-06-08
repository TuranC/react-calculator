export default function execute(formula) {
    let modifiedFormula = formula.replace(/\+/g, " + ")
        .replace(/-/g, " - ")
        .replace(/\*/g, " * ")
        .replace(/\//g, " / ")
        .split(" ");

    while(modifiedFormula.length !== 1) {
        if(modifiedFormula.includes("*")) {
            let index = modifiedFormula.indexOf("*");
            let [a, b] = [modifiedFormula[index - 1], modifiedFormula[index + 1]];
            let res = a * b;
            modifiedFormula.splice(index - 1, 3, res.toString());
        }
        else if(modifiedFormula.includes("/")) {
            let index = modifiedFormula.indexOf("/");
            let [a, b] = [modifiedFormula[index - 1], modifiedFormula[index + 1]];
            let res = a / b;
            modifiedFormula.splice(index - 1, 3, res.toString());
        }
        else if(modifiedFormula.includes("-")) {
            let index = modifiedFormula.indexOf("-");
            let [a, b] = [modifiedFormula[index - 1], modifiedFormula[index + 1]];
            let res = a - b;
            modifiedFormula.splice(index - 1, 3, res.toString());
        }
        else if(modifiedFormula.includes("+")) {
            let index = modifiedFormula.indexOf("+");
            let [a, b] = [modifiedFormula[index - 1], modifiedFormula[index + 1]];
            let res = Number(a) + Number(b);
            modifiedFormula.splice(index - 1, 3, res.toString());
        }
    }

    return modifiedFormula[0];
}