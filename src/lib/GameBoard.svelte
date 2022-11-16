<script>
import triangleImage from "../assets/bg-triangle.svg"
import paperIcom from "../assets/icon-paper.svg"
import scissorsIcon from "../assets/icon-scissors.svg"
import rockIcon from "../assets/icon-rock.svg"
import { showGameBoard, paperIsChosen, scissorsIsChosen, rockIsChosen, letAIRollaPick, AIchosePaper, AIchoseScissors, AIchoseRock, playOutcome, score } from "./gameState";
let appear = false

function updateScore() {
	if ($playOutcome == "You Win") {
		$score += 1
	}

	else if ($playOutcome == "You Lose") {
		$score -= 1
	}
}

function determineResult() {
	// paper 
	if ($paperIsChosen) {
		if ($AIchosePaper) {
			$playOutcome = "Draw";
		} else if ($AIchoseScissors) {
			$playOutcome = "You Lose";
		} else if ($AIchoseRock) {
			$playOutcome = "You Win";
		}
	}
	// scissors
	else if ($scissorsIsChosen) {
		if ($AIchosePaper) {
			$playOutcome = "You Win";
		} else if ($AIchoseScissors) {
			$playOutcome = "Draw";
		} else if ($AIchoseRock) {
			$playOutcome = "You Lose";
		}
	}
	// rock
	else if ($rockIsChosen) {
		if ($AIchosePaper) {
			$playOutcome = "You Lose";
		} else if ($AIchoseScissors) {
			$playOutcome = "You Win";
		} else if ($AIchoseRock) {
			$playOutcome = "Draw";
		}
	}
	updateScore()
}

function choosePaper() {
	$showGameBoard = false
	$paperIsChosen = true
	$scissorsIsChosen = false
	$rockIsChosen = false
	letAIRollaPick()
	determineResult()
}

function chooseScissors() {
	$showGameBoard = false
	$paperIsChosen = false
	$scissorsIsChosen = true
	$rockIsChosen = false
	letAIRollaPick()
	determineResult()
}

function chooseRock() {
	$showGameBoard = false
	$paperIsChosen = false
	$scissorsIsChosen = false
	$rockIsChosen = true
	letAIRollaPick()
	determineResult()
}

window.setTimeout(() => {
		appear = true
	},0)
</script>

<div class="gameBoard" class:active={appear}>
	<img class="triangle" src={triangleImage} alt="triangle">
	<button class="circle paper" on:click={choosePaper}>
		<div class="insideCircle">
			<img src={paperIcom} alt="paper">
		</div>
	</button>
	<button class="circle scissors" on:click={chooseScissors}>
		<div class="insideCircle">
			<img src={scissorsIcon} alt="scissors">
		</div>
	</button>
	<button class="circle rock" on:click={chooseRock}>
		<div class="insideCircle">
			<img src={rockIcon} alt="rock">
		</div>
	</button>
</div>

<style>
.gameBoard.active {
	opacity: 1;
}

.gameBoard {
	opacity: 0;
	position: relative;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	transition: 0.5s;
}

.triangle {
	width: 15rem;
}

.circle {
	width: 6.5rem;
	height: 6.5rem;
	border-radius: 50%;
	border: none;
	position: absolute;
	cursor: pointer;
}

.circle:hover .insideCircle img {
	transform: scale(0.9) rotate(-15deg);
}

.circle.paper {
	background: var(--paper);	
	left: -2rem;
	top: -2rem;
	box-shadow: 0 .25rem 0 .1rem hsl(230, 89%, 47%);
	transition: 0.25s;
}

.circle.paper:hover {
	box-shadow: 0 0 0 1.5rem hsla(230, 89%, 47%, 0.15);
}

.circle.scissors {
	background: var(--scissors);
	right: -2rem;
	top: -2rem;
	box-shadow: 0 .25rem 0 .1rem hsl(39, 89%, 34%);
	transition: 0.25s;
}

.circle.scissors:hover {
	box-shadow: 0 0 0 1.5rem hsla(39, 89%, 34%, 0.15);
}

.circle.rock {
	background: var(--rock);
	bottom: 0;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	box-shadow: 0 .25rem 0 .1rem hsl(349, 71%, 37%);
	transition: 0.25s;
}

.circle.rock:hover {
	box-shadow: 0 0 0 1.5rem hsla(349, 71%, 37%, 0.15);
}

.insideCircle {
	position: absolute;
	background: white;
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: auto;
	margin-top: auto;
	display: flex;
	justify-content: center;
	align-items: center;
}

.insideCircle img {
	display: block;
	width: 2.5rem;
	transition: 0.25s;
}

/* DESKTOP VIEWPORT */
@media screen and (min-width: 1366px) {
	.triangle {
		width: 24rem;
	}

	.gameBoard {
		top: 4rem;
	}

	.circle {
		width: 11rem;
		height: 11rem;
	}

	.insideCircle {
		width: 8rem;
		height: 8rem;
	}

	.insideCircle img {
		width: 4rem;
	}

	.circle.paper {
		left: -3rem;
		top: -3rem;
	}

	.circle.scissors {
		right: -3rem;
		top: -3rem;
	}
}
</style>