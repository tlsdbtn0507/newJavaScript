type F = (x: number) => number;

function compose(functions: F[]): F {
    return function(x) {
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    };
};

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    return args.length
};

type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    let i = 0
    return function (...args) {
        if(i > 0) return undefined
        i++
        return fn(...args);
    };
}
