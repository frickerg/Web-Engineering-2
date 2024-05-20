import type { CardProps } from '../../model/Card'
import { v4 as uuidv4 } from 'uuid'

const cards: CardProps[] = [
  {
    id: uuidv4(),
    front: 'Gegenwart',
    back: 'Present',
  },
  {
    id: uuidv4(),
    front: 'Stunde',
    back: 'Hour',
  },
  {
    id: uuidv4(),
    front: 'Minute',
    back: 'Minute',
  },
  {
    id: uuidv4(),
    front: 'Sekunde',
    back: 'Second',
  },
  {
    id: uuidv4(),
    front: 'Vergangenheit',
    back: 'Past',
  },
  {
    id: uuidv4(),
    front: 'Zukunft',
    back: 'Future',
  },
]

export default cards
