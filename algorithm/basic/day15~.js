//17_1
function solution17_1(myString, pat) {
    const ind = myString.lastIndexOf(pat);
    
    return myString.slice(0,ind+pat.length);
}

//17_2
function solution17_2(myString, pat) {
    let answer = 0;
    
    for(let i = 0; i < myString.length; i++){
      if (myString
        .slice(i, i + pat.length)
        .includes(pat)) answer++;
    }
    
    return answer;
}

//17_3
function solution17_3(strArr) {
    return strArr.filter(e=>!e.includes('ad'));
}

//17_4
function solution17_4(my_string) {
    return my_string.split(' ');
}

//17_5
function solution17_5(my_string) {
    return my_string.trim().split(' ').filter(e=>e!=='')
}