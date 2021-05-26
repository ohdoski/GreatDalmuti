import { pickCards } from './order'
import { mockRandomForEach } from 'jest-mock-random'
// https://namu.wiki/w/%EB%8B%AC%EB%AC%B4%ED%8B%B0

describe('Order Arrangment', () => {
  context('Start the game', () => {
    mockRandomForEach([
      0, 0.2, 0.2, 0.2, 0.2, 0.4, 0.5, 1.2, 1.2, 1.2, 0.6, 0.7, 0.8, 0.9, 0.3,
      0,
    ])

    it('returns cards as much the number of players', () => {
      const cards = pickCards(5)
      expect(cards.length).toBe(5)
    })

    it('cannot return N cards more than N', () => {
      const cards = pickCards(8)
      const thirdCards = cards.filter((card) => card === 3)
      expect(thirdCards.length).toBeLessThanOrEqual(3)
    })

    it('cannot return joker(13) more than 2', () => {
      const cards = pickCards(8)
      const thirdCards = cards.filter((card) => card === 13)
      expect(thirdCards.length).toBeLessThanOrEqual(2)
    })

    it('throws error if the number of players are more than 8', () => {
      expect(() => pickCards(10)).toThrow(
        'the number of players cannot be more than 8',
      )
    })

    it('excludes cards already picked', () => {
      const _cardsIncludingDalmuti = pickCards(8)
      const secondCards = pickCards(8)
      expect([1]).not.toEqual(expect.arrayContaining(secondCards))
    })
  })
})
