'use static'

window.onload = function () {
	const parallax = document.querySelector('.parallax');

	if (parallax) {
		const content = document.querySelector('.parallax__container');
		const clouds = document.querySelector('.images-parallax__clouds');
		const city = document.querySelector('.images-parallax__city');
		const cityColor = document.querySelector('.images-parallax__cityColor');
		const human = document.querySelector('.images-parallax__human');

		// Coefficients
		const forClouds = 40;
		const forCity = 20;
		const forCityColor = 15;
		const forHuman = 10;

		// Animation speed
		const speed = 0.05;

		// Declaring variables
		let positionX = 0, positionY = 0;
		let coordXprocent = 0, coordYprocent = 0;

		function setMouseParallaxStyle() {
			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX = positionX + (distX * speed);
			positionY = positionY + (distY * speed);

			// Passing styles
			clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%);`;
			city.style.cssText = `transform: translate(${positionX / forCity}%,${positionY / forCity}%);`;
			cityColor.style.cssText = `transform: translate(${positionX / forCityColor}%,${positionY / forCityColor}%);`;
			human.style.cssText = `transform: translate(${positionX / forHuman}%,${positionY / forHuman}%);`;

			requestAnimationFrame(setMouseParallaxStyle);
		}
		setMouseParallaxStyle();

		parallax.addEventListener("mousemove", function (e) {
			// Getting the block width and height
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			// Zero in the middle
			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			// Getting percentages
			coordXprocent = coordX / parallaxWidth * 100;
			coordYprocent = coordY / parallaxHeight * 100;
		});

		// Parallax on scrolling

		let thresholdSets = [];
		for (let i = 0; i <= 1.0; i += 0.005) {
			thresholdSets.push(i);
		}
		const callback = function (entries, observer) {
			const scrollTopPercent = window.pageYOffset / parallax.offsetHeight * 100;
			setParallaxItemsStyle(scrollTopPercent);
		};
		const observer = new IntersectionObserver(callback, {
			threshold: thresholdSets
		});

		observer.observe(document.querySelector('.page__about'));

		function setParallaxItemsStyle(scrollTopPercent) {
			content.style.cssText = `transform: translate(0%,-${scrollTopPercent / 9}%);`;
			city.parentElement.style.cssText = `transform: translate(0%,-${scrollTopPercent / 6}%);`;
			cityColor.parentElement.style.cssText = `transform: translate(0%,-${scrollTopPercent / 4}%);`;
			human.parentElement.style.cssText = `transform: translate(0%,-${scrollTopPercent / 3}%);`;
		}
	}
}