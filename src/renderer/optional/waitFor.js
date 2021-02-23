// eslint-disable-next-line func-names
const waitFor = function (exitCondition, callback, force) {
  let checkCount = 100;
  const timeout = 1000;

  (function check() {
    const result = exitCondition();
    if (result) {
      callback(result);
      return;
    }

    if (checkCount === 0) {
      if (force) {
        callback();
      }
      return;
    }

    checkCount -= 1;
    setTimeout(check, timeout);
  }());
};