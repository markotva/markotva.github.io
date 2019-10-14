export const fireAsync = (functionsArr, timeout = 0) => {
	return functionsArr.forEach(
		element => setTimeout(element, timeout)
	);
};
