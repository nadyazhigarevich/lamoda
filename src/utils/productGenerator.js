import { v4 as uuidv4 } from 'uuid'
import Chance from 'chance'
import { COLORS, CATEGORIES, IMAGE_URLS } from './constants'

const chance = new Chance()

export const generateProducts = (totalProducts = 20) => {
    const products = []

    COLORS.forEach(color => {
        products.push({
            id: uuidv4(),
            name: chance.word(),
            description: chance.sentence(),
            color: color,
            category: chance.pickone(CATEGORIES),
            price: chance.integer({ min: 10, max: 9999 }),
            rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
            imageUrl: `/images/${chance.pickone(IMAGE_URLS)}`,
        })
    })

    const additionalProductsCount = Math.max(0, totalProducts - COLORS.length)
    for (let i = 0; i < additionalProductsCount; i++) {
        products.push({
            id: uuidv4(),
            name: chance.word(),
            description: chance.sentence(),
            color: chance.pickone(COLORS),
            category: chance.pickone(CATEGORIES),
            price: chance.integer({ min: 10, max: 9999 }),
            rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
            imageUrl: `/images/${chance.pickone(IMAGE_URLS)}`,
        })
    }

    return chance.shuffle(products)
}