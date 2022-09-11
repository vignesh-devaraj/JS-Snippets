const user = {
  name: {
    firstName: 'vignesh',
    lastName: 'D',
    fullName: {
      getFullName: 'Vignesh D',
    },
  },
  age: 24,
  date: new Date(),
};

export default function ObjectSnippetImpl() {
  // shallowCopy();
  // shallowCopyObjectCreate();
  // oneLevelDeepCopy();
  // deepCopy();
  // deepCopyUsingstructuredClone();
  objIteration();
}

function shallowCopy() {
  let newUser = user; // shallow copy - obj's reference will be copied
  newUser.name.firstName = 'Testing';
  newUser.age = 34;
  console.log('printing old user => ', user);
}

function shallowCopyObjectCreate() {
  let newUser = Object.create(user); // shallow copy
  newUser.name.fullName = 'Testing';
  console.log('printing old user => ', user);
}

function oneLevelDeepCopy() {
  let newUser = { ...user }; // using spread
  newUser.name.firstName = 'Testing';
  newUser.age = 34; // as one level of deep copy, it won't affect old obj
  console.log('printing old user => ', user);
}

// Not suitable for date, functions, maps, sets
function deepCopy() {
  let newUser = JSON.parse(JSON.stringify(user)); // create a new copy of user
  newUser.name.fullName.getFullName = 'Testing';
  console.log('printing old user => ', user);
  // console.log(newUser.date.getFullYear()); it will throw errpr
}

// Recommended one
function deepCopyUsingstructuredClone() {
  let newUser = structuredClone(user); // create a new copy of user
  newUser.name.fullName.getFullName = 'Testing';
  console.log('printing old user => ', user);
  console.log(newUser.date.getFullYear()); // print year as expected
  // console.log(new Date().getFullYear());
}

function objIteration() {
  for (let obj in user) {
    console.log(obj); // prints the key
    console.log(user[obj]); // prints the each value
  }
  // console.log();
  // for(let obj in Object.values(user)) {
  //   console.log(obj); // prints the key
  // }
}
