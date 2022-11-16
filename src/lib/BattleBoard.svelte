<script>
import { AIchosePaper, AIchoseRock, AIchoseScissors, paperIsChosen, playOutcome, rockIsChosen, scissorsIsChosen, showGameBoard } from "./gameState";
import paperIcon from "../assets/icon-paper.svg"
import scissorsIcon from "../assets/icon-scissors.svg"
import rockIcon from "../assets/icon-rock.svg"
let playerWin = false
let AIwin = false
let showAIpick = false
let showPlayerpick = false
let showPlayOutcome = false
let showPlayAgain = false

function playAnimations() {
	window.setTimeout(() => {
		showPlayerpick = true
	},0)
	window.setTimeout(() => {
		showAIpick = true
	},150)
	window.setTimeout(() => {
		showPlayOutcome = true
	},450)
	window.setTimeout(() => {
		showPlayAgain = true
	},600)
}

$:if($playOutcome == "You Win") {
	playAnimations()
	window.setTimeout(() => {
		playerWin = true
		AIwin = false
	},300)
}

else if ($playOutcome == "You Lose"){
	playAnimations()
	window.setTimeout(() => {
		playerWin = false
		AIwin = true
	},300)

}

else {
	playAnimations()
	window.setTimeout(() => {
		playerWin = false
		AIwin = false
	},300)
}

function playAgain()
{
	$showGameBoard = true;
	playerWin != playerWin
}
</script>

<div class="wrapper">
	<div class="battleBoard" class:active={!$showGameBoard}>
		<div class="playerPick" class:active={showPlayerpick}>
			{#if $paperIsChosen}
				<div class="circle paper" class:win={playerWin}>
					<div class="insideCircle">
						<img src={paperIcon} alt="paper">
					</div>
				</div>
			{:else if $scissorsIsChosen}
				<div class="circle scissors" class:win={playerWin}>
					<div class="insideCircle">
						<img src={scissorsIcon} alt="scissors">
					</div>
				</div>
			{:else if $rockIsChosen}
				<div class="circle rock" class:win={playerWin}>
					<div class="insideCircle">
						<img src={rockIcon} alt="rock">
					</div>
				</div>
			{/if}
			<p>You Picked</p>
		</div>
		<div class="housePick" class:active={showAIpick}>
			{#if $AIchosePaper}
				<div class="circle paper" class:win={AIwin}>
					<div class="insideCircle">
						<img src={paperIcon} alt="paper">
					</div>
				</div>
			{:else if $AIchoseScissors}
				<div class="circle scissors" class:win={AIwin}>
					<div class="insideCircle">
						<img src={scissorsIcon} alt="scissors">
					</div>
				</div>
			{:else if $AIchoseRock}
				<div class="circle rock" class:win={AIwin}>
					<div class="insideCircle">
						<img src={rockIcon} alt="rock">
					</div>
				</div>
			{/if}
			<p>AI Picked</p>
		</div>
	</div>
	<h2 class:active={showPlayOutcome}>{$playOutcome}</h2>
	<button class:active={showPlayAgain} on:click={playAgain}>Play Again</button>
</div>

<style>
.wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
}

.battleBoard {
	display: none;
	width: 100%;
	justify-content: space-between;
	gap: 5rem;
}

.battleBoard.active {
	display: flex;
}

.playerPick.active,
.housePick.active {
	opacity: 1;
}


.playerPick,
.housePick {
	opacity: 0;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	justify-content: center;
	transition: 0.5s;
}

p {
	font-size: 1rem;
	font-weight: 700;
	text-transform: uppercase;
	color: white;
	letter-spacing: .15rem;
}

.circle {
	width: 6.5rem;
	height: 6.5rem;
	border-radius: 50%;
	border: none;
	position: relative;
	transition: 0.5s;
}

.circle.win  {
	box-shadow: 0 0 0 2rem rgba(255, 255, 255, .05) !important;
}

.circle.paper {
	background: var(--paper);
	box-shadow: 0 .25rem 0 .1rem hsl(230, 89%, 47%);
}

.circle.scissors {
	background: var(--scissors);
	box-shadow: 0 .25rem 0 .1rem hsl(39, 89%, 34%);
}

.circle.rock {
	background: var(--rock);
	box-shadow: 0 .25rem 0 .1rem hsl(349, 71%, 37%);
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
}

h2.active {
	opacity: 1;
}

h2 {
	opacity: 0;
	font-size: 2.5rem;
	color: white;
	text-transform: uppercase;
	letter-spacing: .15rem;
	transition: 0.5s;
}

button.active {
	opacity: 1;
}

button {
	opacity: 0;
	font-size: 1rem;
	color: var(--mainBackground);
	text-transform: uppercase;
	font-family: 'Barlow Semi Condensed', sans-serif;
	padding: 1rem 3rem;
	border-radius: .5rem;
	letter-spacing: .15rem;
	border: none;
	cursor: pointer;
	transition: 0.5s;
}

button:hover {
	color: hsl(349, 70%, 56%);
}

/* DESKTOP VIEWPORT */
@media screen and (min-width: 1366px) {
	.battleBoard.active {
		width: initial;
		gap: 8rem;
	}

	p {
		font-size: 1.5rem;
	}

	.battleBoard .playerPick,
	.battleBoard .housePick {
		flex-direction: column-reverse;
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

	.circle.win  {
		box-shadow: 0 0 0 5rem rgba(255, 255, 255, .05) !important;
	}
}
</style>