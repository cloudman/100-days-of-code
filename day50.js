index.js function convertToRoman(theNum) {
    if (isNaN(theNum)) {
        return NaN;
    } else {
        let digits = String(+theNum).split("");
        let lookup = {M:1000, CM:900, D:500, CD:400,C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
        var roman = "";
        for (let i in lookup) {
            while (theNum >= lookup[i]) {
                roman += i;
                theNum -= lookup[i];
            }
        }
    }
 return roman;
}

convertToRoman(36);
