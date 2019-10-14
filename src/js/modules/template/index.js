function getTemplate({id, trans, right, words}) {
	return `
		<div class="word" data-id="${id}">
			<span>${trans}</span>
			${getAllVariants(words, right, id)}
		</div>`;
}

function getAllVariants(words, right ,id) {
	let str = '';
	words.forEach(function (word) {
		const isRightVar = Number(word === right);
		const variant = `
			<button class="btn variant" data-right-var="${isRightVar}" data-id=${id}>
				${word}
			</button>
		`;
		str += variant;
	});
	return str;
}

export default getTemplate;
