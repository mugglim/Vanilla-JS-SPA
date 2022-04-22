export function curry(fn) {
    return function curriedFn(...args) {
        return args.length >= fn.length
            ? fn.apply(null, args)
            : curriedFn.bind(null, ...args);
    };
}

export function map(fn, iterable) {
    let result = [];
    for (const el of iterable) {
        result.push(fn(el));
    }
    return result;
}

export function filter(fn, iterable) {
    let result = [];
    for (const el of iterable) {
        if (fn(el)) {
            result.push(fn(el));
        }
    }
    return result;
}

export function reduce(fn, iterable, acc) {
    iterator = iterable[Symbol.iterator]();

    if (!acc) {
        acc = iterator.next().value;
    }

    for (const el of iterator) {
        acc = fn(acc, el);
    }

    return acc;
}

export const go = (...fns) => fns.reduce((acc, f) => f(acc));

export const pipe =
    (fn, ...remainFns) =>
    (...args) =>
        go(fn(...args), ...remainFns);

export const _map = curry(map);
export const _filter = curry(filter);
export const _reduce = curry(reduce);
