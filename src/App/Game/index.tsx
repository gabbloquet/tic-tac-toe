import React, { useState } from "react";
import {calculateNextValue, calculateStatus, calculateWinner} from './Game.service';
import Board from './Board';
import './Game.css';

function Game(): JSX.Element {
	const [history, setHistory] = useState([Array(9).fill(null)])
	const [currentStep, setCurrentStep] = useState<number>(0)

	const currentSquares = history[currentStep]
	const winner = calculateWinner(currentSquares)
	const nextValue = calculateNextValue(currentSquares)
	const status = calculateStatus(winner, currentSquares, nextValue)

	function selectSquare(square: number) {
		if (winner || currentSquares[square]) {
			return
		}

		const newHistory = history.slice(0, currentStep + 1)
		const squares = [...currentSquares]

		squares[square] = nextValue
		setHistory([...newHistory, squares])
		setCurrentStep(newHistory.length)
	}

	function restart() {
		setHistory([Array(9).fill(null)])
		setCurrentStep(0)
	}

	const moves = history.map((stepSquares: Array<string>, step: number) => {
		const desc = step ? `Go to move #${step}` : 'Go to game start'
		const isCurrentStep = step === currentStep
		return (
			<li key={step}>
				<button disabled={isCurrentStep} onClick={() => setCurrentStep(step)}>
					{desc} {isCurrentStep ? '(current)' : null}
				</button>
			</li>
		)
	})

	return (
		<div className="game">
			<div className="game-board">
				<Board onClick={selectSquare} squares={currentSquares}/>
				<button className="restart" onClick={restart}>
          restart
				</button>
			</div>
			<div className="game-info">
				<div>{status}</div>
				<ol>{moves}</ol>
			</div>
		</div>
	)
}

export default Game;
