//print my bio
const fname = "dennis";
const age = 23;
const nationality = "Nigeria";
console.log(`my name is  ${fname} am ${age} from ${nationality}`);

//change my favorite quote to uppercase
const myQuote = "a thousand mile begins with a single step";
console.log(myQuote.toLocaleUpperCase());
console.log(myQuote.toLocaleLowerCase());
//reverse word in javascript
const revOrder = ["a", "b", "c", "d", "e", "f"];
console.log(revOrder.toReversed());

//calculate the total of three items
const rice = 1800;
const beans = 3000;
const yam = 2000;
const total = rice + beans + yam;
console.log(total);

//avg of 5 test score
const score1 = 10;
const score2 = 20;
const score3 = 30;
const score4 = 40;
const score5 = 50;
const average = score1 + score2 + score3 + score4 + score5 / 5;
console.log(average);

//display first and last item in the array""
const myFavoriteFoods = ["Rice", "Beans", "yam", "egg", "plantain "];
console.log(myFavoriteFoods[0]);
//display the last item of an array
console.log(myFavoriteFoods[myFavoriteFoods.length - 1]);

// adding an item to the begining of myfavoritefoods
myFavoriteFoods.unshift("fish");
console.log(myFavoriteFoods);
// adding an item to the end of myfavoritefoods
myFavoriteFoods.push("chicken");
console.log(myFavoriteFoods);

//creating three arrays with 10 student names as string values
const jssOne = [
  "alice",
  "emma",
  "ben",
  "chloe",
  "david",
  "ella",
  "frank",
  "grace",
  "henry",
  "isla",
  "jack",
];

const jssTwo = [
  "quinn",
  "tina",
  "ben",
  "sam",
  "rita",
  "paul",
  "olive",
  "noah",
  "mona",
  "liam",
  "kara",
];
const jssThree = [
  "uma",
  "victor",
  "wendy",
  "xander",
  "yara",
  "rooney",
  "gigs",
  "owen",
  "victor",
  "osuman",
];
console.log(jssOne);
console.log(jssTwo);
console.log(jssThree);
