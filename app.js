//array rooms
const allTheRooms = [];

// functions
function removeSpaceText(textInput) {
  if(textInput){
    return textInput.trim();
  }
}

function convertertPriceToNumber(priceInput) {
  if (!priceInput) {
    return 0;
  }
  const removeSpace = priceInput.trim();
  const separateArray = removeSpace.split(' ')[1];
  const removeDot = separateArray.replace('.', '');
  const replaceComma = removeDot.replace(',', '.');
  return Number(replaceComma);
}

function numberOfNights(nightsInput) {
  if (!nightsInput) {
    return 0;
  }
  const nightsNum = nightsInput.slice(39, 40);
  return  Number(nightsNum);
}

function formatDesciptionSuites(desciptionInput) {
  if(desciptionInput){
    return desciptionInput.split('(ver mais)')[0];
  }
}

function formatArea(areaInput) {
  if(areaInput){
    const areaReplace = areaInput.replace('m2', '');
    return  Number(areaReplace);
  }
}

// loop in array of rooms

const rooms = document.querySelector('#hotels_grid').children

for (let room of rooms) {

  let nameRoom;
  let nameSuites = room.querySelector('div.desciption.position-relative > span');
  if(nameSuites) {
    nameRoom = nameSuites.textContent;
  }

  let desciptionRoom;
  let desciptionSuite = room.querySelector('p.description.hotel-description');
  
  if(desciptionSuite){
    desciptionRoom = desciptionSuite.textContent;
  }

  let priceText;
  let priceSrtring = room.querySelector('div.roomrate .price-after');
  if (priceSrtring) {
    priceText = priceSrtring.textContent;
  }

  if(!priceText) {
    continue
  }

  const setOfFacilities = []
  const imgs = room.querySelectorAll(" div.amenities-room-icons.position-absolute > div > img");

  for (const img of imgs) {
    const amenity = img.alt;
    const amenityLowerCase = amenity.toLocaleLowerCase();
    setOfFacilities.push(amenityLowerCase);
  }
  const amenities = setOfFacilities.sort();

  let nightText;
  let nightString = room.querySelector('span > span:nth-child(2) > span');
  if (nightString) {
    nightText = nightString.textContent;
  }

  let areaRoom;
  let area = room.querySelector(' div.view-icons > span:nth-child(2) > span');
  if(area){
    areaRoom = area.textContent;
  }

 
  let imageRoom;
  let image = room.querySelector('div.flex-view-step2 > div.t-tip__next > div > img.image-step2');
  if(image){
    imageRoom = image.src;
  }

  //push fourth in array
  
  allTheRooms.push(
    {
      'name': removeSpaceText(nameRoom),
      'description': removeSpaceText(formatDesciptionSuites(desciptionRoom)),
      'price': convertertPriceToNumber(priceText),
      'amenities': amenities,
      'numberOfNights': numberOfNights(nightText),
      'area': formatArea(areaRoom),
      'imageUrl': imageRoom
    }
  )
}

console.log(allTheRooms);


