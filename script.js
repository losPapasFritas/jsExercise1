function test() {
    //declare variables
    let equation = document.getElementById("input"),
    eqFull = [],
    operator = [],
    temp = [],
    maxPriority = 0,
    priority = 0,
    notPriority = 0,
    finalAnsw = 0;
    equation = input.value
    //remove spaces from the user input
    equation = equation.split(` `);
    equation = equation.join(``);
    equation = equation.split(``);
    //
    if (equation.includes(`a`) || equation.includes(`b`) || equation.includes(`c`) || equation.includes(`d`) || equation.includes(`e`) || equation.includes(`f`) || equation.includes(`g`) || equation.includes(`h`)
        || equation.includes(`j`) || equation.includes(`k`) || equation.includes(`l`) || equation.includes(`m`) || equation.includes(`n`) || equation.includes(`o`) || equation.includes(`q`) ||
        equation.includes(`r`) || equation.includes(`s`) || equation.includes(`t`) || equation.includes(`u`) || equation.includes(`v`) || equation.includes(`w`) || equation.includes(`y`) || equation.includes(`z`)
        || equation.includes(`A`) || equation.includes(`B`) || equation.includes(`C`) || equation.includes(`D`) || equation.includes(`E`) || equation.includes(`F`) || equation.includes(`G`) ||
        equation.includes(`H`) || equation.includes(`J`) || equation.includes(`K`) || equation.includes(`L`) || equation.includes(`M`) || equation.includes(`N`) || equation.includes(`O`) || equation.includes(`Q`)
        || equation.includes(`R`) || equation.includes(`S`) || equation.includes(`T`) || equation.includes(`U`) || equation.includes(`V`) || equation.includes(`W`) || equation.includes(`Y`)
        || equation.includes(`Z`)) {
        document.getElementById("output").innerHTML = `This equation includes a non-supported character`;
        return `This equation includes a non-supported character`;
    }
    for (let i = 0; i < equation.length; i++) {
        if ((equation[i] != `x`) && (equation[i] != `X`) && (equation[i] != `/`) && (equation[i] != `+`) && (equation[i] != `-`) && (equation[i] != `*`) && (equation[i] != `^`)) {
            temp[temp.length] = equation[i];
        }
        else if (equation[i] === `-` && temp.length === 0) {
            temp[0] = [`-`];
        }
        else if (equation[i] === `^`){
            operator[operator.length] = `^`;
            eqFull[eqFull.length] = temp.join(``);
            temp = [];
        }
        else if ((equation[i] === `x`) || (equation[i] === `X`) || (equation[i] === `*`)) {
            operator[operator.length] = `*`;
            eqFull[eqFull.length] = temp.join(``);
            temp = [];
        }
        else if (equation[i] === `+`) {
            operator[operator.length] = `+`;
            eqFull[eqFull.length] = temp.join(``);
            temp = [];
        }
        else if (equation[i] === `-`) {
            operator[operator.length] = `-`;
            eqFull[eqFull.length] = temp.join(``);
            temp = [];
        }
        else if (equation[i] === `/`) {
            operator[operator.length] = `/`;
            eqFull[eqFull.length] = temp.join(``);
            temp = [];
        }
        if (i === equation.length - 1) {
            eqFull[eqFull.length] = temp.join(``);
            temp = [];
        }
    }
    for (let i = 0; i < eqFull.length; i++) {
        if (eqFull.includes(`pi`)) {
            eqFull[eqFull.indexOf(`pi`)] = Math.PI;
        }
        else if (eqFull.includes(`Pi`)) {
            eqFull[eqFull.indexOf(`Pi`)] = Math.PI;
        }
        else if (eqFull.includes(`pI`)) {
            eqFull[eqFull.indexOf(`pI`)] = Math.PI;
        }
        else if (eqFull.includes(`PI`)) {
            eqFull[eqFull.indexOf(`PI`)] = Math.PI;
        }
        else if (equation.includes(`p`) || equation.includes(`i`) || equation.includes(`P`) || equation.includes(`I`)) {
            document.getElementById("output").innerHTML = `This equation includes a non-supported character`;
            return `This equation includes a non-supported character`;
        }
    }
    for (let i = 0; i < operator.length; i++) {
        if (operator[i] === `^`){
            maxPriority++;
        }
        else if ((operator[i] === `*`) || (operator[i] === `/`)) {
            priority++;
        } else {
            notPriority++;
        }
    }
    
    while (priority + notPriority + maxPriority > 0) {
        if (maxPriority > 0) {
            for (let i = 0; i < operator.length; i++) {
                if (operator[i] === `^`) {
                    eqFull[i] =Math.pow(parseFloat(eqFull[i]), parseFloat(eqFull[i + 1]));
                    operator.splice(i, 1);
                    eqFull.splice(i + 1, 1);
                    maxPriority--;
                }
            }
            console.log(Math.pow(2,3))
        }
        else if (priority > 0) {
            for (let i = 0; i < operator.length; i++) {
                if (operator[i] === `*`) {
                    eqFull[i] = parseFloat(eqFull[i]) * parseFloat(eqFull[i + 1]);
                    operator.splice(i, 1);
                    eqFull.splice(i + 1, 1);
                    priority--;
                }
                else if (operator[i] === `/`) {
                    eqFull[i] = parseFloat(eqFull[i]) / parseFloat(eqFull[i + 1]);
                    operator.splice(i, 1);
                    eqFull.splice(i + 1, 1);
                    priority--;
                }
            }
        }
        else {
            for (let i = 0; i < operator.length; i++) {
                if (operator[i] === `+`) {
                    eqFull[i] = parseFloat(eqFull[i]) + parseFloat(eqFull[i + 1]);
                    operator.splice(i, 1);
                    eqFull.splice(i + 1, 1);
                    notPriority--;
                }
                else if (operator[i] === `-`) {
                    eqFull[i] = parseFloat(eqFull[i]) - parseFloat(eqFull[i + 1]);
                    operator.splice(i, 1);
                    eqFull.splice(i + 1, 1);
                    notPriority--;
                }
            }
        }
    }
    finalAnsw = eqFull[0];
    if (finalAnsw === 42) {
        finalAnsw = `The answer to life. The Universe. Everything`;
    }
    document.getElementById("output").innerHTML = finalAnsw;
    return finalAnsw;
}