// ============= By Rahat vai ================
// forEach return a new array
// return multiple element from an array based on condition or test case

const filterdNumber = [3, 46, 87, 5, 4, 98, 56]
const filterResult = filterdNumber.filter((number) => number > 46)
console.log(filterResult);
// =========================================================

const oddNumber = filterdNumber.filter(number => number % 2 !== 0);
console.log(oddNumber);

const friends = ['rifat', 'rafi', 'shifat', 'sujon', 'kholil', 'nazmul', 'suvo']
const friendName = friends.filter(friend => friend.length > 5);
console.log(friendName);