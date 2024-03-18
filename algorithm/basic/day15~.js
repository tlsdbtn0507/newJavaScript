//17_1
function solution17_1(myString, pat) {
    const ind = myString.lastIndexOf(pat);
    
    return myString.slice(0,ind+pat.length);
}
