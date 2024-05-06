/* eslint-disable antfu/no-import-dist */
/* eslint-disable import/no-duplicates */
// eslint-disable-next-line eslint-comments/no-duplicate-disable
// eslint-disable-next-line antfu/no-import-dist
import eson6 from '../dist/index.js'
import { efunction, estring } from '../dist/index.js'

console.log(eson6({
  test: estring('hello'),
  func: efunction(() => {
    console.log('Hello ESON6!')
  })
}).stringify())