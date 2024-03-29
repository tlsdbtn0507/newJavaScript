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

//20_3
function solution20_3(strArr) {

    const strList = Array.from(new Set(strArr.map(e=>e.length)))

    return strList.map(e=>{
        let a = [];
        for(let i = 0; i <strArr.length; i++){
            if(strArr[i].length === e) a.push(strArr[i])
        }
        return a.length
    }).sort().pop();
}

//20_4
function solution20_4(arr, n) {
    var answer = [];
    
    if(arr.length%2 === 0) return arr.map((e,i)=>i%2 === 0 ? e : e+n)
    
    return arr.map((e,i)=> i%2 === 0 ? e+n : e);
}

//20_5
function solution20_5(num_list) {
    const answer = [];
    
    for(let i = 0; i < num_list.length; i++){
        for(let j = 0; j < num_list.length; j++){
            if(num_list[j] > num_list[j+1]){
                let temp = num_list[j];
                num_list[j] = num_list[j+1];
                num_list[j+1] = temp
            }
        }
    }
    
    return num_list.slice(0,5);
}

//21_1
function solution21_1(num_list) {
    return num_list.map(e=> +e).sort((a,b)=>a-b).slice(5);
}

//21_2
function solution21_2(rank, attendance) {
    
    const [a, b, c] = rank.
        map((e, i) => [e, attendance[i], i]).
        sort((a,b)=>a[0]-b[0]).
        filter(e=>e[1]).
        map(e=>e[2]).slice(0,3)

    return a*10000+ b*100 +c;
}

//21_4
function solution21_4(num_str) {
    return [...num_str].reduce((a,b)=>+a + +b);
}

//22_1
function solution22_1(n_str) {
    var answer = '';
    
    for(let i = 0; i < n_str.length; i++){
        if(n_str[i] !== '0') break
        answer = answer + n_str[i]
    }
    
    return n_str.replace(answer,'');
}

//22_2
function solution22_2(a, b) {
    return `${BigInt(a) + BigInt(b)}`;
}

//22_4
function solution22_4(arr, delete_list) {
    return arr.filter(e=>!delete_list.includes(e));
}

//22_5
function solution22_5(my_string, target) {
    return +my_string.includes(target);
}

//23_1
function solution23_1(str1, str2) {
    return +str2.includes(str1);
}

//23_2
function solution23_2(str_list, ex) {
    return str_list.filter(e=>!e.includes(ex)).join('');
}

//23_4
function solution23_4(a, b) {
    if(a%2 === 1 && b%2 === 1) return a**2 + b**2
    if(a%2 === 1 || b%2 === 1) return 2*(a+b)
    if(a%2 === 0 && b%2 === 0) return Math.abs(a-b)
}

//23_5
function solution23_5(date1, date2) {
    return +(new Date(date1) < new Date(date2))
}

//24_1
function solution24_1(order) {
    
    const ame = 'americano';
    const latte = 'cafelatte';
    
    return order.
        map(e => {
        if(e.includes(ame)) return 4500;
        if(e.includes(latte)) return 5000;
            else return 4500
        })
        .reduce((a, b) => a + b);
}

//24_3
function solution24_3(picture, k) {
    var answer = [];

    picture.forEach(e=>{
        for(let i = 0; i < k; i++)
            answer.push([...e].map(c=>c.repeat(k)).join(''))
    })
    return answer;
}

//24_3
function solution24_3(arr, k) {
    return arr.map(e=> k%2 ? e*k : e+k )
}

//24_4
function solution24_4(myString) {
    const l = 'l'.charCodeAt(0) - 96
    return [...myString].map(e => e.charCodeAt(0) - 96 < l ? 'l' : e).join('');
}

//24_5
function solution24_5(n) {
    var answer = []
    
    for(let i = 0; i< n; i++){
        let arr = []
        for(let j = 0; j < n; j++){
            arr.push(i === j ? 1 :0)
        }
        answer.push(arr)
    }
    
    return answer;
}

//25_2
function solution25_2(arr) {
    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] !== arr[j][i]) return 0 
        }
    }
    return 1;
}

//24_3
function solution24_3(arr) {
    
    const garo = arr.length;
    const [sero] = Array.from(new Set(arr.map(e => e.length)))
    
    if(garo > sero)
        return arr.map(e=>{
            let a = e
            for(let i = 0; i < garo - sero; i++) 
                a.push(0)
            return a
        })
    
    if(garo < sero){
        for(let i = 0; i < sero-garo; i++){
            arr.push(new Array(sero).fill(0))
        }
        return arr
    }
        
    return arr;
}

//24_4
function solution24_4(board, k) {
    let answer = []

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(i+j <=k ) answer.push(board[i][j])
        }
    }
    return answer.reduce((a,b)=>a+b);
}