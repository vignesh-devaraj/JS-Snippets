const users = [
  {
    name: 'vignesh',
    age: 24,
    task: 2,
  },
  {
    name: 'Demo',
    age: 20,
    task: 3,
  },
  {
    name: 'test',
    age: 30,
    task: 3,
  },
];

const user = {
  name: 'newUser 1',
  age: 20,
  task: 4,
};

export default function ArrayMethodsImpl() {
  const addNewUsers = pushArr([...users]);
  console.log('Adding new users => ', addNewUsers);

  const deleteUsers = popArr([...users]);
  console.log('Deleting users => ', deleteUsers);

  const shiftUsers = shiftArr([...users]);
  console.log('Shifting users => ', shiftUsers);

  const unShiftUsers = unShiftArr([...users]);
  console.log('UnShiftUsers users => ', unShiftUsers);

  const spliceUsers = spliceArr([...users]);
  console.log('spliceUsers users => ', spliceUsers);

  const sliceUsers = sliceArr([...users]);
  console.log('sliceUsers users => ', sliceUsers);

  const mappedUsers = mapArr([...users]); // Spread operator to clone the obj and pass it as a arguement
  console.log('mappedUsers => ', mappedUsers);

  const filteredUsers = filterArr([...users]);
  console.log('filteredUsers => ', filteredUsers);

  const reducedUsers = reduceArr([...users]);
  console.log('reducedTasks => ', reducedUsers);

  const findUser = findArr([...users]);
  console.log('FInding a user => ', findUser);

  const someUsers = someArr([...users]);
  console.log('check some user => ', someUsers);

  const everyUsers = everyArr([...users]);
  console.log('check every user => ', everyUsers);

  const sortUsers = sortArr([...users]);
  console.log('sorting users in ASC=> ', sortUsers);
  console.log('sorting users in DSC => ', sortUsers.reverse()); // inbuilt reverse function used to reverese the array

  // console.log('orginal users => ', users);
}

function pushArr(users) {
  users.push(user); // adding the item in the last position
  return users;
}

function popArr(users) {
  users.pop(); // removing the last item
  return users;
}

function shiftArr(users) {
  users.shift(0); // removing the item from 0th position
  return users;
}

function unShiftArr(users) {
  users.unshift(user, user); // adding a new items from the 0th position
  return users;
}

function spliceArr(users) {
  const splice = users.splice(0, 1, user, user); // it will change the original array
  // console.log("spliced items ", splice)
  /*
  1st - index
  2nd - delete count
  3rd - if there any items to add
  splice return the deleted items and also makes changes in the original array
  */
  return users;
}

function sliceArr(users) {
  return users.slice(0, 1); // return the sliced values, doesn't modify original array
  /* 
   1st - start index
   2nd - end index
  */
}

function mapArr(users) {
  return users.map((user) => ({ ...user, name: user.name + ' - UI' })); // change the original array
}

function filterArr(users) {
  return users.filter((user) => user.age >= 24); // change the original array
}

function reduceArr(users) {
  return users.reduce((total, user) => total + user.task, 0); // give the single result
}

function findArr(users) {
  return users.find((user) => user.age === 24); // return a finded item or undefined
}

function someArr(users) {
  return users.some((user) => user.age > 20); // return true if any of the user have the age greater than 20
}

function everyArr(users) {
  return users.every((user) => user.age > 20); // return true if all of the user have the age greater than 20
}

function sortArr(users) {
  return users.sort((user1, user2) => {
    // if(user1.age > user2.age) return 1;
    // else if (user1.age < user2.age) return -1;
    // else return 0
    return user1.age - user2.age; // based on the value ascending sort will happen
  });
}
