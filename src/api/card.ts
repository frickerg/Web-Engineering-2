import type {
  CardProps,
  FlashcardAnswerValidation,
  FlashcardProps,
} from '../model/Card'

export const fetchCards = async (): Promise<CardProps[]> => {
  const response = await fetch('/api/cards/getCards')
  if (!response.ok) {
    throw new Error(`HTTP status: ${response.status} - Failed to fetch cards.`)
  }
  return response.json()
}

export const fetchCardById = async (id: string): Promise<CardProps> => {
  const response = await fetch(`/api/cards/getCardById/${id}`)
  if (!response.ok) {
    throw new Error(`HTTP status: ${response.status} - Failed to fetch card.`)
  }
  return response.json()
}

export const updateCard = async (card: CardProps) => {
  const response = await fetch(`/api/cards/updateCard/${card.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(card),
  })
  if (!response.ok) {
    throw new Error(`HTTP status: ${response.status} - Failed to update card.`)
  }
}

export const addCard = async (card: {
  front: string
  back: string
}): Promise<CardProps> => {
  const response = await fetch('/api/cards/addCard', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(card),
  })
  if (!response.ok) {
    throw new Error(`HTTP status: ${response.status} - Failed to add card.`)
  }
  return response.json()
}

export const deleteCard = async (id: string) => {
  const response = await fetch(`/api/cards/deleteCard/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw new Error(`HTTP status: ${response.status} - Failed to delete card.`)
  }
}

export const fetchFlashcards = async (): Promise<FlashcardProps[]> => {
  const response = await fetch(`/api/cards/fetchFlashcards`)
  if (!response.ok) {
    throw new Error(`HTTP status: ${response.status} - Failed to fetch cards.`)
  }
  return response.json()
}

export const validateAnswer = async (
  id: string,
  userAnswer: string
): Promise<FlashcardAnswerValidation> => {
  const response = await fetch(`/api/cards/getCardById/${id}`)
  if (!response.ok) {
    throw new Error(`HTTP status: ${response.status} - Failed to fetch card.`)
  }
  return response.json().then(e => {
    const isAnswerCorrect =
      e.back.trim().toLowerCase() === userAnswer.trim().toLowerCase()
    return {
      expectedAnswer: e.back,
      isAnswerCorrect,
    }
  })
}
