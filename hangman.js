import { appendFileSync, readFileSync } from 'node:fs'

appendFileSync('data', 'here is some content for the data file\n', 'utf-8')

const data = readFileSync('data', 'utf-8')

console.log(data) 