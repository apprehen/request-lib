import { explosion } from './utils/explosion'
const run = () => {
  for (const i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    console.log(i)
    explosion()
  }
}

run()
