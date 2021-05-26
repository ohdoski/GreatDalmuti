import { shuffle as shuffleDeck, chunk } from 'lodash'

// TODO: make dealer class

/**
 * @return card deck
 * ex. [1, 2, 2, 3, 3, 3 ...]
 */
export const createDeck = (): number[] => {
  const range = Array.from({ length: 12 }, (_, i) => i + 1)
  const jockers = [13, 13]
  const deck = range.reduce(
    (acc: number[], cur: number) => acc.concat(Array(cur).fill(cur)),
    jockers,
  )
  return deck
}

/**
 * deal cards to players
 * if there are remaining card, deal the cards in order by reversed player rank
 * @return cardBundles: its order is reversed. the last cardBundle is for the first player(or winner)
 *
 * ex)
 * remainingCard = [2, 3]
 * cardBundles = [[3, 5, 5], [1, 5, 6], [6, 7, 10]]
 * return [[3, 5, 5, '2'], [1, 5, 6, '3'], [6, 7, 10]]
 */
export const dealCards = (
  deck: number[],
  numberOfPlayers: number,
): Array<number[]> => {
  const numberOfStack = Math.floor(deck.length / numberOfPlayers)
  const cardBundles = chunk(deck, numberOfStack)
  const hasRemainingCard = deck.length % numberOfPlayers
  if (!hasRemainingCard) return cardBundles

  const remainingCard = cardBundles.pop()
  remainingCard.forEach((card, idx) => cardBundles[idx].push(card))
  return cardBundles
}

const main = () => {
  const deck = createDeck()
  const shuffledDeck = shuffleDeck(deck)
  const cards = dealCards(shuffledDeck, 7)
  console.log({ cards })
}

main()
