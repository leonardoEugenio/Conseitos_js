// casso esteja querendo aprender tente execultar os exercicios com seus codigos

const vals = [10, 2];

function OrdenarVals() {
    if (vals[0] > vals [1]) {
        let lastNum;
        lastNum = vals[1];
        vals[1] = vals[0];
        vals[0] = lastNum;
    }
    return(vals);
}
console.log(OrdenarVals());