<script>
import logoIcon from "../assets/logo.svg"
import { score } from "./gameState";
</script>


<div class="top">
	<img src={logoIcon} alt="main logo">
	<div class="scoreContainer">
		<p>score</p>
		<p class="score">{$score}</p>
	</div>
</div>

<style>
.top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: .2rem solid var(--headerOutline);
	border-radius: .25rem;
	padding: 1rem;
	width: 100%;
}

.top img {
	display: block;
	width: 6rem
}

.scoreContainer {
	background-color: white;
	color: var(--darkText);
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: .5rem 1.5rem;
	border-radius: .25rem;
}

.scoreContainer p:first-child {
	color: var(--scoreText);
	text-transform: uppercase;
	font-size: .75rem;
}

.score {
	font-size: 2rem;
	font-weight: 700;
}

@media screen and (min-width: 1366px) {
	.top {
		width: max-content;
		gap: 15rem;
	}

	.top img {
		width: 100%;
	}

	.scoreContainer {
		padding: 1rem 2rem;
	}

	.scoreContainer p:first-child {
		font-size: 1rem;
	}

	.score {
		font-size: 3rem;
	}
}
</style>