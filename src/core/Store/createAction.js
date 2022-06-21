export default function createAction(type, createPayload) {
    const action = (...args) => {
        return {
            type,
            ...createPayload.apply(null, args),
        };
    };

    return [type, action];
}
