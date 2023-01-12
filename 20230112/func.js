const { odd, even } = requir('./var');

function checkOddOrEven(num){
    if(num%2){
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;