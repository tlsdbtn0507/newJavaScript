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

//19_1
function solution19_1(myStr) {

    const answer = [...myStr]
        .map(e=>e !== 'a' && e !== 'b' && e !=='c' ? e : ' ')
        .join('')
        .split(' ')
        .filter(e=>e!=='')

    return answer.length === 0 ? ['EMPTY'] : answer;
}

//19_2
function solution19_2(arr) {
    const answer = [];
    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i]; j++){
            answer.push(arr[i])
        }
    }
    
    return answer;
}

//19_3
function solution19_3(arr, flag) {
    var answer = [];
    
    for(let i = 0; i < arr.length; i++){
        if(flag[i]) for(let j = 0; j < arr[i]*2; j++) answer.push(arr[i])
        else for(let j = 0; j < arr[i]; j++) answer.pop()
    }
    
    return answer;
}

//19_4
function solution19_4(arr) {
    var answer = [];
    for(let  i = 0; i < arr.length; i++){
      if (answer.length === 0)
        answer.push(arr[i]);
        else{
        if (answer.at(-1) === arr[i])
          answer.pop()
        else answer.push(arr[i])
        }
    }
    return answer.length === 0 ? [-1] : answer;
}

//19_5
function solution19_5(arr, k) {
    const ans  = Array.from(new Set(arr)).slice(0,k)
    
    if(ans.length < k) {
        for (let i = ans.length; i < k ; i++) ans.push(-1)
    }

    return ans;
}

//20_1
function solution20_1(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return arr1.length > arr2.length ? 1: -1;
    if(arr1.reduce((a,b)=>a+b) === arr2.reduce((a,b)=> a+b)) 
        return 0;
    return arr1.reduce((a,b)=>a+b) > arr2.reduce((a,b)=> a+b) ? 1 : -1;
}

//20_2
function solution20_2(arr) {
    
    const total = 2**Math.ceil(Math.log2(arr.length));
    
    if(total !== arr.length) 
        for(let i = arr.length; i < total; i++) arr.push(0)
    
    return arr;
}