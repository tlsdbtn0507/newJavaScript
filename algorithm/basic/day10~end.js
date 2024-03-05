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
