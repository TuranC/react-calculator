export default function execute(formula) {
  const modifiedFormula = formula.replace(/\+/g, ' + ')
    .replace(/-/g, ' - ')
    .replace(/\*/g, ' * ')
    .replace(/\//g, ' / ')
    .split(' ');

  while (modifiedFormula.length !== 1) {
    if (modifiedFormula.includes('*')) {
      const index = modifiedFormula.indexOf('*');
      const [a, b] = [modifiedFormula[index - 1], modifiedFormula[index + 1]];
      const res = a * b;
      modifiedFormula.splice(index - 1, 3, res.toString());
    } else if (modifiedFormula.includes('/')) {
      const index = modifiedFormula.indexOf('/');
      const [a, b] = [modifiedFormula[index - 1], modifiedFormula[index + 1]];
      const res = a / b;
      modifiedFormula.splice(index - 1, 3, res.toString());
    } else if (modifiedFormula.includes('-')) {
      const index = modifiedFormula.indexOf('-');
      const [a, b] = [modifiedFormula[index - 1], modifiedFormula[index + 1]];
      const res = a - b;
      modifiedFormula.splice(index - 1, 3, res.toString());
    } else if (modifiedFormula.includes('+')) {
      const index = modifiedFormula.indexOf('+');
      const [a, b] = [modifiedFormula[index - 1], modifiedFormula[index + 1]];
      const res = Number(a) + Number(b);
      modifiedFormula.splice(index - 1, 3, res.toString());
    }
  }

  return modifiedFormula[0];
}
