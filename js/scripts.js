// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

let rotationDegree = 0;

const opacityMap = {
	0: { yellow: 1, red: 0.5, white: 0.5, black: 0.5, blue: 0.5 },
	72: { yellow: 0.5, red: 1, white: 0.5, black: 0.5, blue: 0.5 },
	144: { yellow: 0.5, red: 0.5, white: 0.5, black: 0.5, blue: 1 },
	216: { yellow: 0.5, red: 0.5, white: 0.5, black: 1, blue: 0.5 },
	288: { yellow: 0.5, red: 0.5, white: 1, black: 0.5, blue: 0.5 },
};

const positionMap = {
	0: {
		yellow: { top: -15, left: 50 },
		red: { top: 25, left: -10 },
		blue: { top: 95, left: 15 },
		black: { top: 95, left: 85 },
		white: { top: 25, left: 110 },
	},
	72: {
		red: { top: -15, left: 50 },
		blue: { top: 25, left: -10 },
		black: { top: 95, left: 15 },
		white: { top: 95, left: 85 },
		yellow: { top: 25, left: 110 },
	},
	144: {
		blue: { top: -15, left: 50 },
		black: { top: 25, left: -10 },
		white: { top: 95, left: 15 },
		yellow: { top: 95, left: 85 },
		red: { top: 25, left: 110 },
	},
	216: {
		black: { top: -15, left: 50 },
		white: { top: 25, left: -10 },
		yellow: { top: 95, left: 15 },
		red: { top: 95, left: 85 },
		blue: { top: 25, left: 110 },
	},
	288: {
		white: { top: -15, left: 50 },
		yellow: { top: 25, left: -10 },
		red: { top: 95, left: 15 },
		blue: { top: 95, left: 85 },
		black: { top: 25, left: 110 },
	},
}

window.onload = function () {
	document.getElementById('red').style.width = '20%';
	document.getElementById('red').style.height = '20%';
	document.getElementById('white').style.width = '20%';
	document.getElementById('white').style.height = '20%';
	document.getElementById('blue').style.width = '20%';
	document.getElementById('blue').style.height = '20%';
	document.getElementById('black').style.width = '20%';
	document.getElementById('black').style.height = '20%';
}

function rotateCircle(degrees) {
	rotationDegree += degrees;

	document.getElementById('wheel').style.transform = `rotate(${rotationDegree}deg)`;

	const opacityValues = opacityMap[(3600 + rotationDegree) % 360] || {};
	const positionValues = positionMap[(3600 + rotationDegree) % 360] || {};

	for (const color in opacityValues) {
		const textElement = document.getElementById(color);
		textElement.style.opacity = opacityValues[color];

		if (opacityValues[color] === 1) {
			textElement.style.width = '';
			textElement.style.height = '';
		} else {
			textElement.style.width = '20%';
			textElement.style.height = '20%';
		}
	}

	for (const color in positionValues) {
		const textElement = document.getElementById(color);
		const { top, left } = positionValues[color];
		textElement.style.top = `${top}%`;
		textElement.style.left = `${left}%`;
	}

	const galleryButton = document.getElementById('button-gallery');
	const rotationMappings = [
		{ degree: 0, href: 'yellow.html' },
		{ degree: 72, href: 'red.html' },
		{ degree: 144, href: 'blue.html' },
		{ degree: 216, href: 'black.html' },
		{ degree: 288, href: 'white.html' },
	];
	for (const mapping of rotationMappings) {
		if ((3600 + rotationDegree) % 360 === mapping.degree) {
			galleryButton.href = mapping.href;
			break;
		}
	}
}

function blinking() {
	const blinkingSection = document.getElementById('arrow');
	blinkingSection.style.visibility = (blinkingSection.style.visibility === 'hidden') ? 'visible' : 'hidden';
}

const blinkInterval = setInterval(blinking, 1000);

setTimeout(() => {
	clearInterval(blinkInterval);
}, 10000);
