const str1 = "yoeJ si eman yM";

// string reversal
const stringReversal = (str) => {
    const strArray = str.split("");
    let newArray = []

    for (let i = str.length - 1; i >= 0; i--) {
        newArray.push(strArray[i]);
    }

    const result = newArray.join("");

    return result;
}