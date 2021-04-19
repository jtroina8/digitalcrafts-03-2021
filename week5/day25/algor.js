const isAnagram = (string1, string2) => {
    string1 = str1.replace(/[^\w]/g, "").toLowerCase().split("");
    string2 = str2.replace(/[^\w]/g, "").toLowerCase().split("");

    let cache1 = {}

    for (let letter of string1) {
        if(!cache1[letter]) {
            cache1[letter] = 1;
        } else {
            cache1[letter] += 1;
        }}

    let cache2 = {}

    for (let letter of string2) {
        if(!cache2[letter]) {
            cache2[letter] = 1;
        } else {
            cache2[letter] += 1;
        }}

        for (let key in cache1) {
            if (!(cache1[key] == cache2[key])) {
                return false;
            }
        }

    return true;0
}
