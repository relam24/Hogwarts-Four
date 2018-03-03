$(() => {
// Modal
// grab the open button
	const $openButton = $('#openModal');
// grab modal element
	const $modal = $('#modal');
// grab the close button
	const $closeButton = $('#closeModal');
// put handler above event listener
// open Modal
// close Modal
	const openModal = () => {
		$modal.css('display', 'block');
	};
	const closeModal = () => {
		$modal.css('display', 'none');
	};
// make event listener
// open button
// close button
	$openButton.on('click', openModal);
	$closeButton.on('click', closeModal);
// set timeout for two seconds
	// setTimeout(openModal, 2000);
	// end of Modal
// ===============================================================//
// create click rules for each column
// column 1 click rules
// added gameClicks function
	let click1 = 0;
	const columnOneClick = (event) => {
		console.log('column1');
		click1++;
		if (click1 === 1) {
			$(event.currentTarget).append($circle1F) .addClass('clickedCircle');
			gameClicks();
			console.log('gameclicks');
		} else if (click1 === 2) {
			$(event.currentTarget).append($circle1E) .addClass('clickedCircle');
			gameClicks();
		} else if (click1 === 3) {
			$(event.currentTarget).append($circle1D) .addClass('clickedCircle');
			gameClicks();
		} else if (click1 === 4) {
			$(event.currentTarget).append($circle1C) .addClass('clickedCircle');
			gameClicks();
		} else if (click1 === 5) {
			$(event.currentTarget).append($circle1B) .addClass('clickedCircle');
			gameClicks();
		} else if (click1 === 6) {
			$(event.currentTarget).append($circle1A) .addClass('clickedCircle');
			gameClicks();
		}
	};
// column 2 click rules
// changed clickedCircle from add class to append
	let click2 = 0;
	const columnTwoClick = (event) => {
		console.log('column2');
		click2++;
		if (click2 === 1) {
			$(event.currentTarget).append($circle2F) .addClass('clickedCircle');
			gameClicks();
		} else if (click2 === 2) {
			$(event.currentTarget).append($circle2E) .addClass('clickedCircle');
			gameClicks();
		} else if (click2 === 3) {
			$(event.currentTarget).append($circle2D) .addClass('clickedCircle');
			gameClicks();
		} else if (click2 === 4) {
			$(event.currentTarget).append($circle2C) .addClass('clickedCircle');
			gameClicks();
		} else if (click2 === 5) {
			$(event.currentTarget).append($circle2B) .addClass('clickedCircle');
			gameClicks();
		} else if (click2 === 6) {
			$(event.currentTarget).append($circle2A) .addClass('clickedCircle');
			gameClicks();
		}
	};
// column 3 click rules
// changed clickedCircle from add class to append
	let click3 = 0;
	const columnThreeClick = (event) => {
		console.log('column3');
		click3++;
		if (click3 === 1) {
			$(event.currentTarget).append($circle3F) .addClass('clickedCircle');
			gameClicks();
		} else if (click3 === 2) {
			$(event.currentTarget).append($circle3E) .addClass('clickedCircle');
			gameClicks();
		} else if (click3 === 3) {
			$(event.currentTarget).append($circle3D) .addClass('clickedCircle');
			gameClicks();
		} else if (click3 === 4) {
			$(event.currentTarget).append($circle3C) .addClass('clickedCircle');
			gameClicks();
		} else if (click3 === 5) {
			$(event.currentTarget).append($circle3B) .addClass('clickedCircle');
			gameClicks();
		} else if (click3 === 6) {
			$(event.currentTarget).append($circle3A) .addClass('clickedCircle');
			gameClicks();
		}
	};
// column 4 click rules
// changed clickedCircle from add class to append
	let click4 = 0;
	const columnFourClick = (event) => {
		console.log('column4');
		click4++;
		if (click4 === 1) {
			$(event.currentTarget).append($circle4F) .addClass('clickedCircle');
			gameClicks();
		} else if (click4 === 2) {
			$(event.currentTarget).append($circle4E) .addClass('clickedCircle');
			gameClicks();
		} else if (click4 === 3) {
			$(event.currentTarget).append($circle4D) .addClass('clickedCircle');
			gameClicks();
		} else if (click4 === 4) {
			$(event.currentTarget).append($circle4C) .addClass('clickedCircle');
			gameClicks();
		} else if (click4 === 5) {
			$(event.currentTarget).append($circle4B) .addClass('clickedCircle');
			gameClicks();
		} else if (click4 === 6) {
			$(event.currentTarget).append($circle4A) .addClass('clickedCircle');
			gameClicks();
		}
	};
// column 5 click rules
// changed clickedCircle from add class to append
	let click5 = 0;
	const columnFiveClick = (event) => {
		console.log('column5');
		click5++;
		if (click5 === 1) {
			$(event.currentTarget).append($circle5F) .addClass('clickedCircle');
			gameClicks();
		} else if (click5 === 2) {
			$(event.currentTarget).append($circle5E) .addClass('clickedCircle');
			gameClicks();
		} else if (click5 === 3) {
			$(event.currentTarget).append($circle5D) .addClass('clickedCircle');
			gameClicks();
		} else if (click5 === 4) {
			$(event.currentTarget).append($circle5C) .addClass('clickedCircle');
			gameClicks();
		} else if (click5 === 5) {
			$(event.currentTarget).append($circle5B) .addClass('clickedCircle');
			gameClicks();
		} else if (click5 === 6) {
			$(event.currentTarget).append($circle5A) .addClass('clickedCircle');
			gameClicks();
		}
	};
// column 6 click rules
// changed clickedCircle from add class to append
	let click6 = 0;
	const columnSixClick = (event) => {
		console.log('column6');
		click6++;
		if (click6 === 1) {
			$(event.currentTarget).append($circle6F) .addClass('clickedCircle');
			gameClicks();
		} else if (click6 === 2) {
			$(event.currentTarget).append($circle6E) .addClass('clickedCircle');
			gameClicks();
		} else if (click6 === 3) {
			$(event.currentTarget).append($circle6D) .addClass('clickedCircle');
			gameClicks();
		} else if (click6 === 4) {
			$(event.currentTarget).append($circle6C) .addClass('clickedCircle');
			gameClicks();
		} else if (click6 === 5) {
			$(event.currentTarget).append($circle6B)
			.addClass('clickedCircle');
			gameClicks();
		} else if (click6 === 6) {
			$(event.currentTarget).append($circle6A)
			.addClass('clickedCircle');
			gameClicks();
		}
	};
// ==============================================================//
// game click function each click goes between players checks on win
	let game = 0;
	const gameClicks = () => {
		console.log('game clicks');
		game++;
		if (game === 1) {
				playerOne();
		} else if (game === 2) {
				playerTwo();
		} else if (game === 3) {
				playerOne();
		} else if (game === 4) {
				playerTwo();
				youWin();
		} else if (game === 5) {
				playerOne();
				youWin();
		} else if (game === 6) {
				playerTwo();
				youWin();
		} else if (game === 7) {
				playerOne();
				youWin();
		} else if (game === 8) {
				playerTwo();
				youWin();
		} else if (game === 9) {
				playerOne();
				youWin();
		} else if (game === 10) {
				playerTwo();
				youWin();
		} else if (game === 11) {
				playerOne();
				youWin();
		} else if (game === 12) {
				playerTwo();
				youWin();
		} else if (game === 13) {
				playerOne();
				youWin();
		} else if (game === 14) {
				playerTwo();
				youWin();
		} else if (game === 15) {
				playerOne();
				youWin();
		} else if (game === 16) {
				playerTwo();
				youWin();
		} else if (game === 17) {
				playerOne();
				youWin();
		} else if (game === 18) {
				playerTwo();
				youWin();
		} else if (game === 19) {
				playerOne();
				youWin();
		} else if (game === 20) {
				playerTwo();
				youWin();
		} else if (game === 21) {
				playerOne();
				youWin();
		} else if (game === 22) {
				playerTwo();
				youWin();
		} else if (game === 23) {
				playerOne();
				youWin();
		} else if (game === 24) {
				playerTwo();
				youWin();
		} else if (game === 25) {
				playerOne();
				youWin();
		} else if (game === 26) {
				playerTwo();
				youWin();
		} else if (game === 27) {
				playerOne();
				youWin();
		} else if (game === 28) {
				playerTwo()
				youWin();
				restart()
		} else if (game === 29) {
				playerOne();
				youWin();
				restart();
		} else if (game === 30) {
				playerTwo();
				youWin();
				restart();
		} else if (game === 31) {
				playerOne();
				youWin();
				restart();
		} else if (game === 31) {
				playerTwo();
				youWin();
				restart();
		} else if (game === 32) {
				playerOne();
				youWin();
				restart();
		} else if (game === 33) {
				playerTwo();
				youWin();
				restart();
		} else if (game === 34) {
				playerOne();
				youWin();
				restart();
		} else if (game === 35) {
				playerTwo();
				youWin();
				restart();
		} else if (game === 36) {
				playerOne();
				youWin();
				restart();
		}
	};
// ============================================//
// playerOne
	const playerOne = () => {
		console.log('playerone');
		$circle.css('background-color', 'red');
	};
// playerTwo
	const playerTwo = () => {
		console.log('playerTwo');
		$circle.css('background-color', 'gold');
	};
// youWin
	const youWin = () => {
		console.log('you win');

	};
// ==============================================//
// create circles
// column 1
	const $circle1A = $('#circle1A');
	const $circle1B = $('#circle1B');
	const $circle1C = $('#circle1C');
	const $circle1D = $('#circle1D');
	const $circle1E = $('#circle1E');
	const $circle1F = $('#circle1F');
// column 2
	const $circle2A = $('#circle2A');
	const $circle2B = $('#circle2B');
	const $circle2C = $('#circle2C');
	const $circle2D = $('#circle2D');
	const $circle2E = $('#circle2E');
	const $circle2F = $('#circle2F');
// column 3
	const $circle3A = $('#circle3A');
	const $circle3B = $('#circle3B');
	const $circle3C = $('#circle3C');
	const $circle3D = $('#circle3D');
	const $circle3E = $('#circle3E');
	const $circle3F = $('#circle3F');
 // column 4
	const $circle4A = $('#circle4A');
	const $circle4B = $('#circle4B');
	const $circle4C = $('#circle4C');
	const $circle4D = $('#circle4D');
	const $circle4E = $('#circle4E');
	const $circle4F = $('#circle4F');
// column 5
	const $circle5A = $('#circle5A');
	const $circle5B = $('#circle5B');
	const $circle5C = $('#circle5C');
	const $circle5D = $('#circle5D');
	const $circle5E = $('#circle5E');
	const $circle5F = $('#circle5F');
// column 6
	const $circle6A = $('#circle6A');
	const $circle6B = $('#circle6B');
	const $circle6C = $('#circle6C');
	const $circle6D = $('#circle6D');
	const $circle6E = $('#circle6E');
	const $circle6F = $('#circle6F');
// =========================================//
// grab container div
	const $container = $('.container');
// grab gameboard div
	const $gameboard = $('.gameboard');
	// grab circle
	const $circle = $('.circle');
// =========================================//
// grab column1 div
// create click event
// send to function
	const $column1 = $('.column1');
	$column1.on('click', columnOneClick);
// grab column2 div
	const $column2 = $('.column2');
	$column2.on('click', columnTwoClick);
// grab column3 div
	const $column3 = $('.column3');
	$column3.on('click', columnThreeClick);
// grab column4 div
	const $column4 = $('.column4');
	$column4.on('click', columnFourClick);
// grab column5 div
	const $column5 = $('.column5');
	$column5.on('click', columnFiveClick);
// grab column 6 div
	const $column6 = $('.column6');
	$column6.on('click', columnSixClick);
// ===========================================//

});
