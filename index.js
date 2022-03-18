// Code your solutions in this file

const cards = ["Guadalupe", "Ollie", "Aki"];
const cards2 =[]
function writeCards(cards) {
  let x = 0
  while (x < cards.length) {
    cards2.push(`Thank you, ${cards[x]}, for the wonderful surprise gift!`)
    x++;
  }
    return cards2
}
writeCards(cards2)


function countDown(number) {
        while (number > -1) {
            console.log(number--);
        }
    }
