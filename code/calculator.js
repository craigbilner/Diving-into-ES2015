import { taxedPrice } from './math'

export const items = [
  { price: 10, taxable: true },
  { price: 22, taxable: false },
  { price: 13.45, taxable: true }
]

export function calculate({ taxRate = 8, items = [] }) {
  var total = 0

  items.forEach(function(item) {
    total += taxedPrice({ taxRate, ...item })
  })

  return total
}