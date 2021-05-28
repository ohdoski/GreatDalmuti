import { FC } from 'react'

export enum CardName {
  Jester = 'Jester',
  Peasant = 'Peasant',
  Stonecutter = 'Stonecutter',
  Shepherdess = 'Shepherdess',
  Cook = 'Cook',
  Mason = 'Mason',
  Seamstress = 'Seamstress',
  Knight = 'Knight',
  Abbess = 'Abbess',
  Baroness = 'Baroness',
  Earl = 'Earl',
  Archbishop = 'Archbishop',
  Dalmuti = 'Dalmuti',
}

export const CardRank = {
  [CardName.Jester]: 13,
  [CardName.Peasant]: 12,
  [CardName.Stonecutter]: 11,
  [CardName.Shepherdess]: 10,
  [CardName.Cook]: 9,
  [CardName.Mason]: 8,
  [CardName.Seamstress]: 7,
  [CardName.Knight]: 6,
  [CardName.Abbess]: 5,
  [CardName.Baroness]: 4,
  [CardName.Earl]: 3,
  [CardName.Archbishop]: 2,
  [CardName.Dalmuti]: 1,
} as const

interface CardProps {
  name: CardName
}

const Card: FC<CardProps> = ({ name }) => {
  const rank = CardRank[name]
  return (
    <div data-testid={`Card-rank-${rank}`}>
      <p>name: {name}</p>
      <p>rank: {rank}</p>
    </div>
  )
}

export default Card
