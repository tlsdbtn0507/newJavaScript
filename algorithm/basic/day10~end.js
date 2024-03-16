//글자수 세기
function solution(my_string) {
    const abc = 'abcdefghijklmnopqrstuvwxyz'
    const total =[...abc]
                .map(e=>e.toUpperCase())
                .concat(...abc)
                .map(e=>({key:e,value:0}));
    for(let i = 0; i < my_string.length; i++){
        for(let j = 0; j < total.length; j ++){
            if(total[j].key === my_string[i]) {
                total[j].value+=1
            }
        }
    }
    return total.map(e=>e.value);
}

//day11 
//if
function solution11_switch(n, slicer, num_list) {
    var answer = [];
    
    const a = slicer[0];
    const b = slicer[1]+1;
    const c = slicer[2];
    
    if(n === 1) answer = num_list.slice(0,b);
    if(n === 2) answer = num_list.slice(a)
    if(n === 3) answer = num_list.slice(a,b)
    if(n === 4 && c === 1) answer = num_list.slice(a,b)
    if(n === 4 && c !== 1) {
        const arr = num_list.slice(a,b)
        for(let i = a; i <= b; i+=c) 
            answer.push(num_list[i])   
    }

    return answer;
}

//switch
function solution11_switch(n, slicer, num_list) {
    // a, b, c 값을 slicer에서 추출
    const [a, b, c] = slicer;

    // 슬라이싱한 결과를 담을 배열
    let result;

    // n에 따라 다르게 슬라이싱
    switch (n) {
        case 1:
            result = num_list.slice(0, b + 1);
            break;
        case 2:
            result = num_list.slice(a);
            break;
        case 3:
            result = num_list.slice(a, b + 1);
            break;
        case 4:
            result = [];
            for (let i = a; i <= b; i += c) {
                result.push(num_list[i]);
            }
            break;
        default:
            result = [];
    }

    return result;
}

//이게 9점..?
function solution12_slicingArr(arr, query) {
    let ans = arr
    for(let i = 0 ; i < query.length; i++){
        let ind = query[i]+1
        let min = query[i]
        
        if(i%2 === 0) ans.splice(ind)
        if(i%2 !== 0) ans.splice(0,min)
    }

    return ans;
}

//이게 15점..?
function solution13_left_right(str_list) {
    var answer = [];
    
    const emptyCond = !str_list.includes('l') && !str_list.includes('r') 
          
    
    for(let i = 0; i < str_list.length; i++){
        if(str_list[i] === 'l'){
            answer = str_list.slice(0,i);
            break
        }
        if(str_list[i] === 'r'){
            answer = str_list.slice(i+1);
            break
        }
    }
    
    
    return emptyCond ? [] : answer;

}
//14
function solution14_1(num_list) {

    const o = num_list.filter((_,i)=> i%2 !== 0).reduce((a,b)=>a+b)
    const a = num_list.filter((_,i)=> i%2 === 0).reduce((a,b)=>a+b)
    
    return o > a ? o : a;
}
//14-5
function solution14_5(arr, queries) {
    
    queries.forEach(([s,e]) =>{
        for(let i = s ;i <= e; i++) arr[i]++
    })

    return arr;
}

//15
function solution15_1(arr) {
    var answer = [];
    return arr.map(e=>{
        if(e >= 50 && e%2 === 0) return e/2
        if(e < 50 && e%2 !== 0) return e*2
        else return e
    });
}