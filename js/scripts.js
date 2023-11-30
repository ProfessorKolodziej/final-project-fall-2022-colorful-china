// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

document.addEventListener("DOMContentLoaded", function () {
	const wheel = document.getElementById("wheel-start");
	const startLink = document.getElementById("startLink");

	startLink.addEventListener("click", function (event) {
		event.preventDefault();
		moveWheelWithAnimation();
		setTimeout(function () {
			window.location.href = startLink.getAttribute("href");
		}, 1000);
	});

	function moveWheelWithAnimation() {
		wheel.classList.add("animate-wheel-move");
		setTimeout(function () {
			wheel.classList.remove("animate-wheel-move");
		}, 1000);
	}
});
