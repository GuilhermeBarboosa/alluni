export function removeBlankValuesFromObject(object: any): any {
    object = { ... object };
    for (const key in object) {
        const value = object[key];
        if (value === null || value === undefined || value === '') {
            delete object[key];
        }
    }

    return object;
}