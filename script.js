function test() {
    //declare variables
    let equation = prompt(`Write an equation!`);
    let eqFull = [];
    let operator = [];
    let temp = [];
    let priority = 0;
    let notPriority = 0;
    //remove spaces from the user input
    equation = equation.split(` `);
    equation = equation.join(``);
    equation = equation.split(``);
    //
    for (let i = 0; i < equation.length; i++) {
        if ((equation[i] != `x`) && (equation[i] != `X`) && (equation[i] != `/`) && (equation[i] != `+`) && (equation[i] != `-`) && (equation[i] != `*`)) {
            temp[temp.length] = equation[i];
        }
        else if (equation[i] === `-` && temp.length === 0) {
            temp[0] = [`-`];
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
        if (i === equation.length-1){
            eqFull[eqFull.length] = temp.join(``);
            temp = [];
        }
    }
    for (let i = 0; i < operator.length; i++){
        if ((operator[i] === `*`) || (operator[i] === `/`)){
            priority++;
        } else{
            notPriority++;
        }
    }
    while (priority + notPriority > 0){
        if (priority > 0){
            for(let i = 0; i < operator.length; i++){
                if(operator[i] === `*`){
                    eqFull[i] = parseInt(eqFull[i]) * parseInt(eqFull[i+1]);
                    operator.splice(i,1);
                    eqFull.splice(i+1,1);
                    priority--;
                }
                else if (operator[i] === `/`){
                    eqFull[i] = parseInt(eqFull[i]) / parseInt(eqFull[i+1]);
                    operator.splice(i,1);
                    eqFull.splice(i+1,1);
                    priority--;
                }
            }
        }
        else{
            for(let i = 0; i < operator.length; i++){
                if(operator[i] === `+`){
                    eqFull[i]=parseInt(eqFull[i]) + parseInt(eqFull[i+1]);
                    operator.splice(i,1);
                    eqFull.splice(i+1,1);
                    notPriority--;
                }
                else if (operator[i] === `-`){
                    eqFull[i] = parseInt(eqFull[i]) - parseInt(eqFull[i+1]);
                    operator.splice(i,1);
                    eqFull.splice(i+1,1);
                    notPriority--;
                }
            }
        }
    }
    console.log(eqFull);
}