import { render, screen } from '@testing-library/react'
import Card, { CardName, CardRank } from '../Card'

describe('Card', () => {
  test(`name and rank appear`, () => {
    render(<Card name={CardName.Peasant} />)

    const rank = CardRank[CardName.Peasant]
    const cardEl = screen.getByTestId(`Card-rank-${rank}`)
    expect(cardEl).toHaveTextContent(CardName.Peasant)
    expect(cardEl).toHaveTextContent(rank.toString())
  })
})
