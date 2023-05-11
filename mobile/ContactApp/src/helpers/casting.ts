export function castThunkAction<T>(val: any) {
	return val as Promise<T>;
}

export function isEmptyObject(obj: any) {
	return !Object.values(obj).some(element => element !== null);
}