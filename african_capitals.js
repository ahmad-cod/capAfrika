function find() {
let input1 = document.getElementById('input_one')
console.log(input1);
var africanCountry = input1.value;

//prompt('Type a name of an African country A - L');
var countryName = africanCountry.toLowerCase();
var capital = document.getElementById('capital');
console.log(countryName);

switch(countryName) {
    case 'algeria':
        capital.innerHTML = 'Algiers' + ' is the capital of ' + africanCountry;
    break;
    case 'angola':
        capital.innerHTML = 'Luanda ' + ' is the capital of ' + africanCountry ;
    break;
    case 'benin':
        capital.innerHTML = 'Porto-Novo' + ' is the capital of ' + africanCountry ;
    break;
    case 'botswana':
        capital.innerHTML = 'Gaborone' + ' is the capital of ' + africanCountry ;
    break;
    case 'burkina faso':
        capital.innerHTML = 'Ouagadougou' + ' is the capital of ' + africanCountry ;
    break;
    case 'burundi':
        capital.innerHTML = 'Bujumbura' + ' is the capital of ' + africanCountry ;
    break;
    case 'cabo verde':
        capital.innerHTML = 'Praia' + ' is the capital of ' + africanCountry ;
    break;
    case 'cameroon':
        capital.innerHTML = 'Yaounde' + ' is the capital of ' + africanCountry ;
    break;
    case 'central african republic':
        capital.innerHTML = 'Bangui' + ' is the capital of ' + africanCountry ;
    break;
    case 'chad':
        capital.innerHTML = "N'Djamena" + ' is the capital of ' + africanCountry ;
    break;
    case 'comoros':
        capital.innerHTML = 'Moroni' + ' is the capital of ' + africanCountry ;
    break;
    case 'democratic republic of congo':
        capital.innerHTML = 'Kinshasa' + ' is the capital of ' + africanCountry ;
    break;
    case 'republic of the congo':
        capital.innerHTML = 'Brazzaville' + ' is the capital of ' + africanCountry ;
    break;
    case 'algeria':
    capital.innerHTML = 'Algiers' + ' is the capital of ' + africanCountry ;
    break;
    case 'algeria':
    capital.innerHTML = 'Algiers' + ' is the capital of ' + africanCountry ;
    break;
    case 'egypt':
    capital.innerHTML = 'Cairo' + ' is the capital of ' + africanCountry ;
    break;
    case 'algeria':
    capital.innerHTML = 'Algiers' + ' is the capital of ' + africanCountry;
    break;
    case 'algeria':
    capital.innerHTML = 'Algiers' + ' is the capital of ' + africanCountry;
    break;
    case 'algeria':
    capital.innerHTML = 'Algiers' + ' is the capital of ' + africanCountry;
    break;
    case 'ethiopia':
    capital.innerHTML = 'Addis Ababa' + ' is the capital of ' + africanCountry;
    break;
    case 'gabon':
    capital.innerHTML = 'Libreville' + ' is the capital of ' + africanCountry;
    break;
    case 'algeria':
    capital.innerHTML = 'Algiers' + ' is the capital of ' + africanCountry;
    break;
    case 'ghana':
    capital.innerHTML = 'Accra' + ' is the capital of ' + africanCountry;
    break;
    case 'guinea':
    capital.innerHTML = 'Conakry' + ' is the capital of ' + africanCountry;
    break;
    case 'algeria':
    capital.innerHTML = 'Algiers' + ' is the capital of ' + africanCountry;
    break;
    case 'kenya':
    capital.innerHTML = 'Nairobi' + ' is the capital of ' + africanCountry;
    break;
    case 'algeria':
    capital.innerHTML = 'Algiers' + ' is the capital of ' + africanCountry;
    break;
    case 'liberia':
    capital.innerHTML = 'Monrovia' + ' is the capital of ' + africanCountry;
    break;
    case 'libya':
    capital.innerHTML = 'Tripoli' + ' is the capital of ' + africanCountry;
    break;
    case 'madagascar':
    capital.innerHTML = 'Antananarivo' + ' is the capital of ' + africanCountry;
    break;
    case 'malawi':
    capital.innerHTML = 'Lilongwe' + ' is the capital of ' + africanCountry;
    break;
    case 'mali':
    capital.innerHTML = 'Bamako' + ' is the capital of ' + africanCountry;
    break;
    case 'mauritania':
    capital.innerHTML = 'Nouakchott' + ' is the capital of ' + africanCountry;
    break;
    case 'nigeria':
    capital.innerHTML = 'Abuja' + ' is the capital of ' + africanCountry;
    break;
    case 'morocco':
    capital.innerHTML = 'Rabat' + ' is the capital of ' + africanCountry;
    break;
    case 'mozambique':
    capital.innerHTML = 'Maputo' + ' is the capital of ' + africanCountry;
    break;
    case 'namibia':
    capital.innerHTML = 'Windhoek' + ' is the capital of ' + africanCountry;
    break;
    case 'niger':
    capital.innerHTML = 'Niamey' + ' is the capital of ' + africanCountry;
    break;
    case 'nigeria':
    capital.innerHTML = 'Abuja' + ' is the capital of ' + africanCountry;
    break;
    case 'rwanda':
    capital.innerHTML = 'Kigali' + ' is the capital of ' + africanCountry;
    break;
    case 'senegal':
    capital.innerHTML = 'Dakar' + ' is the capital of ' + africanCountry;
    break;
    case 'south africa':
    capital.innerHTML = 'Cape Town' + ' is the capital of ' + africanCountry;
    break;
    case 'south sudan':
       capital.innerHTML = 'Juba' + ' is the capital of ' + africanCountry;
      break;            
    case 'sudan':
    capital.innerHTML = 'Khartoum' + ' is the capital of ' + africanCountry;
    break;
    case 'tanzania':
    capital.innerHTML = 'Dodoma' + ' is the capital of ' + africanCountry;
    break;
    case 'togo':
    capital.innerHTML = 'Lome' + ' is the capital of ' + africanCountry;
    break;
    case 'tunisia':
        capital.innerHTML = 'Tunis' + ' is the capital of ' + africanCountry;
      break;
    case 'uganda':
        capital.innerHTML = 'Kampala' + ' is the capital of ' + africanCountry;
      break;
    case 'zambia':
        capital.innerHTML = 'Lusaka' + ' is the capital of ' + africanCountry;
      break;
    case 'zimbabwe':
        capital.innerHTML = 'Harare' + ' is the capital of ' + africanCountry;
      break;

    default: 
    capital.innerHTML = `Your input ${africanCountry} is invalid`
}
input1.value = ""
}