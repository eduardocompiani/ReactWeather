function addPromise (a,b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    } else {
      reject("Values are not a number");
    }
  });
}

addPromise(1,2).then(function (value) {
    console.log(value);
  }, function (err) {
    console.log(err);
  }
);

addPromise(1).then(function (value) {
    console.log(value);
  }, function (err) {
    console.log(err);
  }
);

addPromise(1,'a').then(function (value) {
    console.log(value);
  }, function (err) {
    console.log(err);
  }
);
