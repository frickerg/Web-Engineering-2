import CenterHeader from '../../typography/headings/CenterHeader'
import FilledTableHeader from '../../typography/headings/FilledTableHeader'
import Item from '../../typography/texts/Item'
import ScoreLabel from '../../elements/Label/ScoreLabel'
import GameContainer from '../../elements/Container/GameContainer'
import GameResultsContainer from '../../elements/Container/GameResultsContainer'
import StartButton from '../../elements/Button/StartButton'
import { Fragment, useContext } from 'react'
import { GameContext } from '../../../session/Context'
import { startNewGame } from '../../../session/helper'

export default function GameResultPage() {
  const { state, dispatch } = useContext(GameContext)
  const { gameCards, storeCards } = state

  const scoreLabel = () => {
    const score = gameCards.filter(card => card.isAccepted).length
    return `Solved ${score} out of ${' '}${gameCards.length} correctly.`
  }

  return (
    <GameContainer>
      <StartButton
        label="Start New Game"
        onClick={() => startNewGame(storeCards, dispatch)}
      />
      <CenterHeader>Game Results</CenterHeader>
      <ScoreLabel label={scoreLabel()}></ScoreLabel>
      <GameResultsContainer>
        <FilledTableHeader>Front</FilledTableHeader>
        <FilledTableHeader>Back</FilledTableHeader>
        <FilledTableHeader>Your Answer</FilledTableHeader>
        <FilledTableHeader>Accepted</FilledTableHeader>
        {gameCards.map(card => (
          <Fragment key={card.id}>
            <Item>{card.front}</Item>
            <Item>{card.back}</Item>
            <Item>{card.answer}</Item>
            <Item>{card.isAccepted ? '✓' : '✗'}</Item>
          </Fragment>
        ))}
      </GameResultsContainer>
    </GameContainer>
  )
}
