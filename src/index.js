module.exports = function check(str, bracketsConfig) {
    let cycleCounter = 0;
    let prevLength;
    let bracketsPairs = bracketsConfig.map (item => item.join (''));

    while (str.length !== 0) {
        prevLength = str.length;
        bracketsPairs.forEach (item => {
            str = str.split (item)
                     .join ('');
        })

        if (str.length == prevLength) return false;
        if (cycleCounter > 100) return 'error: it\'s cycle';
        cycleCounter++;
    }
    return true;
}
