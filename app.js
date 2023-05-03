//array rooms
const allTheRooms = [];

// functions
function removeSpaceText(textInput) {
  return textInput ? textInput.trim() : '';
}

function convertertPriceToNumber(priceInput) {
  !priceInput ? 0: priceInput;
  const removeSpace = priceInput.trim();
  const separateArray = removeSpace.split(' ')[1];
  const removeDot = separateArray.replace('.', '');
  const replaceComma = removeDot.replace(',', '.');
  return Number(replaceComma);
}

function numberOfNights(nightsInput) {
  !nightsInput ? 0 : nightsInput;
  const nightsNum = nightsInput.slice(39, 40);
  return  Number(nightsNum);
}

function formatDescriptionSuites(descriptionInput) {
  return descriptionInput ? descriptionInput.split('(ver mais)')[0]: '';
}

function formatArea(areaInput) {
  const areaReplace = areaInput ? areaInput.replace('m2', ''): '';
  return  Number(areaReplace);
}

// loop in array of rooms

const rooms = document.querySelector('#hotels_grid').children

for (let room of rooms) {

  let priceSrtring = room.querySelector('div.roomrate .price-after');
  let priceText = priceSrtring ? priceSrtring.textContent: '';
  if(!priceText) {
    continue
  }

  let nameSuites = room.querySelector('div.desciption.position-relative > span');
  let nameRoom = nameSuites ? nameSuites.textContent: '';
 
  let descriptionSuite = room.querySelector('p.description.hotel-description');
  let descriptionRoom = descriptionSuite ? descriptionSuite.textContent: '';
  

  const setOfFacilities = []
  const imgs = room.querySelectorAll(" div.amenities-room-icons.position-absolute > div > img");

  for (const img of imgs) {
    const amenity = img.alt;
    const amenityLowerCase = amenity.toLocaleLowerCase();
    setOfFacilities.push(amenityLowerCase);
  }
  const amenities = setOfFacilities.sort();

  let nightString = room.querySelector('span > span:nth-child(2) > span');
  let nightText = nightString ? nightString.textContent: '';

  let area = room.querySelector(' div.view-icons > span:nth-child(2) > span');  
  let areaRoom = area ? area.textContent:'';
  
  let image = room.querySelector('div.flex-view-step2 > div.t-tip__next > div > img.image-step2');
  let imageRoom = image ? image.src: '';

  //push fourth in array
  
  allTheRooms.push(
    {
      'name': removeSpaceText(nameRoom),
      'description': removeSpaceText(formatDescriptionSuites(descriptionRoom)),
      'price': convertertPriceToNumber(priceText),
      'amenities': amenities,
      'numberOfNights': numberOfNights(nightText),
      'area': formatArea(areaRoom),
      'imageUrl': imageRoom
    }
  )
}

console.log(allTheRooms);


