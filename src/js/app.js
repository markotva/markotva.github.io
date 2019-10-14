import getReadyStructure from "./modules/words"
import getTemplate from "./modules/template";
import {
	fireAsync
} from "./modules/utils";

const page = () => {
	const structure = getReadyStructure;
	structure.forEach(function (word) {
		$('.words').append(getTemplate(word))
	});
};

const bindEvents = () => {
	const variant = $('.variant');
	variant.on('click',  (event) => {
		const $self = event.currentTarget;
		const idVariant = $($self).data('id');
		const isRightVar = $($self).data('right-var');
		const addStyle = isRightVar ? 'right' : 'fail';
		$($self).addClass(addStyle);
	})
};

const init = () =>
	fireAsync([
		page,
		bindEvents
	]);
document.addEventListener('DOMContentLoaded', init);
