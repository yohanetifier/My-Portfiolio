// Pour faire apparaitre les lettres de manière random
export const shuffledLetters = (array: Array<string>) => {
	return array.sort(() => Math.random() - 0.5);
};
