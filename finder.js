import text from "./data.js";

const emailRegex = /(?<= )[^ ]+@.+?(?= )/g
const emails = text.match(emailRegex)
console.log(emails)

const urlRegex = /http.+?(?= )/g
const urls = text.match(urlRegex)
console.log(urls)

const phoneRegex = /\(?\d{3}\)?[\.\- ]\d{3}[\.\- ]\d{4}/g
const phones = text.match(phoneRegex)
console.log(phones)

const cardRegex = /\d{4}([\- ])\d{4}\1\d{4}\1\d{4}/g
const cards = text.match(cardRegex)
console.log(cards)

const timeRegex = /\d{1,2}\:\d{1,2}( [AP]M)?/g
const times = text.match(timeRegex)
console.log(times)

const htmlRegex = /<.+?>/g
const htmls = text.match(htmlRegex)
console.log(htmls)

const hashRegex = /#.+?(?= )/g
const hashes = text.match(hashRegex)
console.log(hashes)

const currRegex = /\$[1-9\.\,]+/g
const currs = text.match(currRegex)
console.log(currs)