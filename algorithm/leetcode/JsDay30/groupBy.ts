interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    const res = {}; 

    for (let e of this) {
        const key = fn(e);
        if (!res[key]) {
            res[key] = [];  // 그룹이 없으면 초기화
        }
        res[key].push(e);  // 해당 그룹에 항목 추가
    }

    return res;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */