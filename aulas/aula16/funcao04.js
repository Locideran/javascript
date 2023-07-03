//5! = 5x4x3x2x1 
    let fat = 1
function fatorial(n) {
    for(let c = n; c > 1; c--) {
        fat *= c
    } 
    return fat 
}

console.log(fatorial(5))