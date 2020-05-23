function leetCode(target, n) {
  let list = [];
  let result = [];
  let count = 0;
  for (i=1; i<=n; i++) {
    list.push((i));
  }
  list.forEach(ele => {
    if (count !== target.length) {
      if (target.indexOf(ele) < 0) {
        result.push("Push", "Pop");
      } else {
        result.push("Push");
        count++;
      }
    }
  });
  return result;
};

console.log(leetCode([1,2], 4));

