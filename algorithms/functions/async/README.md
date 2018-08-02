# Async

You are going to implement three async functions `sequence`, `parallel` [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) and `race` [Promise.race](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race).

Each of these functions will take an array of fns to call with a callback and return a function that accepts a callback to be executed on completion/ if complete.

```javascript

const async = require('./') // <- this is the file you make;

const getUser = function(userId) {
  return function(cb) {
    setTimeout(function() {
      cb(null, {userId: userId, name: 'Joe'});
    }, Math.random() * 100);
  };
};

const upperCaseName = function(cb, user) {
  cb(null, user.name.toUpperCase());
};

const userThunk = getUser(22);

async.sequence([userThunk, upperCaseName])(function(err, data) {
  console.log(data); // JOE
});

const userThunk1 = getUser(1);
const userThunk2 = getUser(2);

async.parallel([userThunk1, userThunk2])(function(err, users) {
  console.log(users); // [ { userId: 1, name: 'Joe' }, { userId: 2, name: 'Joe' } ]
});

const faster = function(cb) {
  setTimeout(cb.bind(null, null, "I'm faster"), 10);
}
async.race([userThunk1, faster])(function(err, winner) {
  console.log(winner); // I'm faster
});
```

## References

- [source](https://github.com/kolodny/exercises/blob/master/async/README.md)