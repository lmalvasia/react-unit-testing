export const summ = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Error');
    }
    return a+b;
}