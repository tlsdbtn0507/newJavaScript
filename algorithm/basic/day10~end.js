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