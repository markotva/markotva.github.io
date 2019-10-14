import getRandomWord from "../random-words";
import words from "./words";

const getReadyStructure = () => {
	let readyWord = {};
	let readyWords = [];
	words.forEach(function ({trans, word, id}) {
		readyWord =
			readyWords.push({
				id: id,
				trans: trans,
				right: word,
				words: shuffleStructure(word)
			});
	});
	return readyWords;
};

function shuffleStructure(rightVar) {
	const words = [rightVar, getRandomWord(), getRandomWord()];
	let roundOrder, temp;
	for (let order = words.length - 1; order > 0; order--) {
		roundOrder = Math.floor(Math.random() * (order + 1));
		temp = words[roundOrder];
		words[roundOrder] = words[order];
		words[order] = temp;
	}
	return words;
}

export default getReadyStructure();
