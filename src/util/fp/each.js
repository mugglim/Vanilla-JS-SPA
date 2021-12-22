export default (initValue, ...fn) => {
    fn.forEach(f => f(initValue));
};
