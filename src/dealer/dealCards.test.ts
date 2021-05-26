import { mockRandomForEach } from 'jest-mock-random'
// https://namu.wiki/w/%EB%8B%AC%EB%AC%B4%ED%8B%B0

const dealer = new Dealer()

beforeAll(() => {
  dealer.createDeck()
})

afterEach(() => {
  dealer.suffleDeck()
})

describe('Deal Cards', () => {
  context('Order the player placement by card', () => {
    mockRandomForEach([
      0, 0.2, 0.2, 0.2, 0.2, 0.4, 0.5, 1.2, 1.2, 1.2, 0.6, 0.7, 0.8, 0.9, 0.3,
      0,
    ])

    it('returns cards as much the number of players', () => {
      const cards = dealer.dealCards(5)
      expect(cards.length).toBe(5)
    })

    it('cannot return N cards more than N', () => {
      const cards = dealer.dealCards(8)
      const card3s = cards.filter((card) => card === 3)
      expect(card3s.length).toBeLessThanOrEqual(3)
    })

    it('cannot return joker(13) more than 2', () => {
      const cards = dealer.dealCards(8)
      const card13s = cards.filter((card) => card === 13)
      expect(card13s.length).toBeLessThanOrEqual(2)
    })

    it('throws error if the number of players are more than 8', () => {
      expect(() => dealer.dealCards(10)).toThrow(
        'the number of players cannot be more than 8',
      )
    })

    // TODO: fix test
    it('excludes cards already picked', () => {
      const cardsIncludingDalmuti = dealer.dealCards(8)
      const secondCards = dealer.dealCards(8)
      expect(cardsIncludingDalmuti).toEqual(expect.arrayContaining([1]))
      expect(secondCards).not.toEqual(expect.arrayContaining([1]))
    })
  })
})
