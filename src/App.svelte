<script>
import rulesImage from "./assets/image-rules.svg"
import closeIcon from "./assets/icon-close.svg"
import GameBoard from "./lib/GameBoard.svelte"
import ScoreBoard from "./lib/ScoreBoard.svelte";
import BattleBoard from "./lib/BattleBoard.svelte";
import { showGameBoard } from "./lib/gameState";


let rulesIsShown = false;

function showRules() {
	rulesIsShown = true;
}

function closeRules () {
	rulesIsShown = false;
}
</script>

<div class="blackLayer" class:active={rulesIsShown} on:click={closeRules} on:keypress={closeRules}>
	<div class="whiteCard">
		<div>
			<p>Rules</p>
			<img src={closeIcon} alt="close" on:click={closeRules} on:keypress={closeRules}>
		</div>
		<img src={rulesImage} alt="rules">
	</div>
</div>
<main>
	<ScoreBoard/>
	{#if $showGameBoard}
		<GameBoard />
	{:else}
		<BattleBoard/>
	{/if}
	<button on:click={showRules}>Rules</button>
</main>

<style>
/* MOBILE APPROACH FIRST */
.blackLayer {
	display: none;
}

.blackLayer.active {
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	min-height: 100vh;
	width: 100%;
	z-index: 1;
	background: rgba(0, 0, 0, 0.5);
}

.whiteCard {
	display: inherit;
	background-color: white;
	padding: 1rem 2rem 2rem;
	border-radius: .5rem;
	flex-direction: column;
	gap: 2rem;
}

.whiteCard div {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.whiteCard div p {
	font-size: 2rem;
	text-transform: uppercase;
	font-weight: 700;
	color: var(--darkText);
}

.whiteCard div img {
	cursor: pointer;
}

main {
	background: var(--mainBackground);
	min-height: 100vh;
	padding: 2rem;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
}

button {
	border: .1rem solid var(--headerOutline);
	border-radius: .25rem;
	cursor: pointer;
	padding: .5rem 2rem;
	background-color: transparent;
	color: white;
	font-family: 'Barlow Semi Condensed', sans-serif;
	text-transform: uppercase;
	letter-spacing: .15rem;
}

/* DESKTOP VIEWPORT */
@media screen and (min-width: 1366px) {
	main {
		justify-content: space-between;
	}

	button {
		align-self: flex-end;
	}
}

/* 4K SCREENS AND ABOVE */
@media screen and (min-width: 2560px) {
	main {
		justify-content: center;
		gap: 5rem;
	}

	button {
		align-self: initial;
		margin-top: 5rem;
	}
}
</style>