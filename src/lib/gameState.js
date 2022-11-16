import { readable, writable } from "svelte/store";

// true to showgamebard , false to show battleboard
export let showGameBoard = writable(true)
export let score = writable(12);

// player choice
export let paperIsChosen = writable(false);
export let scissorsIsChosen = writable(false);
export let rockIsChosen = writable(false);

// AI choice
export let AIchosePaper = writable(false);
export let AIchoseScissors = writable(false);
export let AIchoseRock = writable(false);

// battle result
export let playOutcome = writable("");

export function letAIRollaPick() {
	// create random number from 0 - 30
	let randomRoll = Math.floor(Math.random() * 30);

	// 0 - 10 -> chose paper
	if (randomRoll <= 10) {
		AIchosePaper.set(true) 
		AIchoseScissors.set(false)
		AIchoseRock.set(false)
	}

	// 11 - 20 -> chose scissors
	else if (randomRoll > 10 && randomRoll <= 20) {
		AIchosePaper.set(false);
		AIchoseScissors.set(true);
		AIchoseRock.set(false);
	}

	// 21 - 30 -> chose rock
	else if (randomRoll > 20 && randomRoll <= 30) {
		AIchosePaper.set(false);
		AIchoseScissors.set(false);
		AIchoseRock.set(true);
	}
}