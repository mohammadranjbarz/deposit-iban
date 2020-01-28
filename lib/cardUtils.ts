export const isCardValid = (card:string)=>{
  if (!card ||card.length !== 16) {
    return false;
  }
  let cardTotal = 0;
  for (let i = 0; i < 16; i += 1) {
    const c = Number(card[i]);
    if (i % 2 === 0) {
      cardTotal += ((c * 2 > 9) ? (c * 2) - 9 : (c * 2));
    } else {
      cardTotal += c;
    }
  }
  return (cardTotal % 10 === 0);
}