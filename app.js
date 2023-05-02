
const allTheRooms = [];

const rooms = document.querySelector('#hotels_grid').children

for (let room of rooms) {
  const nameSuites = room.querySelector('div.desciption.position-relative > span').textContent

  function removeSpaceText(textInput) {
    const text = textInput.trim()
    return text
  }

  const desciptionSuite = room.querySelector('p.description.hotel-description').textContent
  const desciption = desciptionSuite.replace('(ver mais)', '')


  let priceText;
  let priceSrtring = room.querySelector('div.roomrate .price-after');
  if (priceSrtring) {
    priceText = priceSrtring.textContent
  }

  function convertertPriceToNumber(priceInput) {
    if (!priceText) {
      return 0;
    }
    const removeSpace = priceInput.trim();
    const separateArray = removeSpace.split(' ')[1];
    const removeDot = separateArray.replace('.', '');
    const replaceComma = removeDot.replace(',', '.');
    const price = Number(replaceComma);

    return price
  }


  const setOfFacilities = []
  const imgs = room.querySelectorAll(" div.amenities-room-icons.position-absolute > div > img");

  for (const img of imgs) {
    const amenity = img.alt
    const amenityLowerCase = amenity.toLocaleLowerCase()
    setOfFacilities.push(amenityLowerCase)
  }
  const amenities = setOfFacilities.sort()

  let nightText;
  let nightString = room.querySelector('span > span:nth-child(2) > span')
  if (nightString) {
    nightText = nightString.textContent
  }

  function nuberNights(nightsInpu) {
    if (!nightText) {
      return 0;
    }
    const nightsNum = nightsInpu.slice(39, 40);
    const numberOfNights = Number(nightsNum);
    return numberOfNights
  }

  const area = room.querySelector(' div.view-icons > span:nth-child(2) > span').textContent
  const areaReplace = area.replace('m2', '');
  const areaNumber = Number(areaReplace)

  const image = room.querySelector('div.flex-view-step2 > div.t-tip__next > div > img.image-step2').src

  allTheRooms.push(
    {
      'name': removeSpaceText(nameSuites),
      'description': removeSpaceText(desciption),
      'price': convertertPriceToNumber(priceText),
      'amenities': amenities,
      'numberOfNights': nuberNights(nightText),
      'area': areaNumber,
      'imageUrl': image
    }
  )
}
