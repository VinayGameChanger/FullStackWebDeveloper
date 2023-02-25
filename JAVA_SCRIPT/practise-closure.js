const outer = function () {
let count = 0;
  return function () {
    if (count == 0) {
      count++;
      console.log("you called me");
    } else {
      console.log("mai already called ho chuka hu");
    }
  }
}

let ans = outer();
ans();
ans();
ans();