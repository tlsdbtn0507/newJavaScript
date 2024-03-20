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

//18_1
function solution18_1(myString) {

    return myString.split('x').map(e=>e.length);
}

//18_2
function solution18_2(myString) {
    return myString.split('x').filter(e=>e!=='').sort();
}

//18_3
function solution18_3(binomial) {
    
    const [a,op,b] = binomial.split(' ')
    
    if(op === '*') return +a*+b;
    if(op === '+') return +a + +b;
    if(op === '-') return +a - +b
    
}

//18_4
function solution(myString, pat) {
    var answer = 0;
  return [...myString]
    .map(e => e === "A" ? "B" : 'A')
    .join('')
    .includes(pat) ? 1 : 0;
}

//18_5
function solution18_5(rny_string) {
    var answer = '';
    return rny_string.replaceAll('m','rn');
}