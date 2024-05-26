import './Ongoing.css'
import { useState, useEffect, useContext } from 'react'
import Button from '../../elements/Button/Button'
import { getGameCards, isAnswerCorrect } from '../../../../api/card'
import { GameContext, GameResultItem } from '../../../../api/GameContext'
import { useNavigate } from 'react-router-dom'
import { FlashcardProps } from '../../elements/Flashcard/Flashcard'

function mapCardToGameResultItem(cards: FlashcardProps[]): GameResultItem[] {
  return cards.map(card => ({
    id: card.id,
    front: card.front,
    back: '',
    answer: '',
    accepted: false,
  }))
}

export default function Ongoing() {
  const { state, dispatch } = useContext(GameContext)
  const { cards } = state
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const navigate = useNavigate()

  const progress =
    cards.length > 0 ? Math.round((index / cards.length) * 100) : 0

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const fetchedCards = await getGameCards()
        dispatch({
          type: 'SET_CARDS',
          payload: mapCardToGameResultItem(fetchedCards),
        })
      } catch (error) {
        console.error(error)
      }
    }

    fetchCards()
  }, [dispatch])

  const incrementIndex = () => {
    setIndex(prevIndex =>
      prevIndex < cards.length - 1 ? prevIndex + 1 : prevIndex
    )
  }

  const handleDeleteGame = () => {
    dispatch({ type: 'DELETE_GAME' })
    navigate('/')
  }

  const validateCard = async () => {
    const currentCard = cards[index]
    const isCorrect = await isAnswerCorrect(currentCard.id, answer)
    const updatedCards = cards.map((card, i) =>
      i === index
        ? {
            ...card,
            answer: answer,
            accepted: isCorrect,
          }
        : card
    )
    dispatch({
      type: 'SET_CARDS',
      payload: updatedCards,
    })

    incrementIndex()
    setAnswer('')

    if (index >= cards.length - 1) {
      navigate('/end')
    }
  }

  return (
    <div className="ongoing-page">
      <div className="ongoing-header">
        <div className="ongoing-progress">Progress: {progress}%</div>
        <Button
          label="Delete Game"
          onClick={handleDeleteGame}
          className="ongoing-delete-button"
        />
      </div>
      <div className="ongoing-card">
        <div className="ongoing-card-content">
          {cards.length > 0 && cards[index].front}
        </div>
      </div>
      <div className="ongoing-answer-section">
        <input
          type="text"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          className="ongoing-answer-input"
          placeholder="Answer"
        />
        <Button
          label="Submit"
          onClick={validateCard}
          className="ongoing-submit-button"
        />
      </div>
    </div>
  )
}
