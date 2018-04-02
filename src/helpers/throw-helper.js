const mustNotBeNullOrUndefined = (value, valueName) => {
    if (value === null || value === undefined) {
        if (valueName) {
            throw new TypeError(`${valueName} must not be null or undefined.`);
        }

        throw new TypeError('Must not be null or undefined.');
    }
};

export default mustNotBeNullOrUndefined;