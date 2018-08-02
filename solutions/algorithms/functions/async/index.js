function sequence(fns) {
  let complete = 0;
  let callback;
  let error;
  let result;

  const done = (err, data) => {
    error = err;
    result = data;

    if (callback && (complete === fns.length || error != null)) {
      callback(error, result);
    }
  };

  const next = (err, out) => {
    if (err != null) {
      done(err, out);
      return;
    }

    if (complete < fns.length) {
      fns[complete++](next, out);
    } else {
      done(err, out);
    }
  };

  next();

  return (cb) => {
    callback = cb;

    done(error, result);
  };
}

function parallel(fns) {
  const results = new Array(fns.length).fill(null);
  let complete = 0;
  let error;
  let callback;

  const report = () => {
    if (callback == null) {
      return;
    }

    if (complete < fns.length && error == null) {
      return;
    }

    callback(error, results);
  };

  const done = index => (err, data) => {
    if (err != null) {
      error = err;
    }

    complete++;

    results[index] = data;

    report();
  };

  fns.forEach((fn, idx) => {
    fn(done(idx));
  });

  return (cb) => {
    callback = cb;

    report();
  };
}

function race(fns) {
  let result;
  let error;
  let callback;

  const report = (err, data) => {
    error = err;
    result = data;

    if (callback == null) {
      return;
    }

    callback(error, result);
  };

  const done = (err, data) => {
    if (result == null && error == null) {
      report(err, data);
    }
  };

  fns.forEach((fn) => {
    fn(done);
  });

  return (cb) => {
    callback = cb;

    if (result != null || error != null) {
      callback(error, result);
    }
  };
}

module.exports = {
  sequence,
  parallel,
  race,
};
