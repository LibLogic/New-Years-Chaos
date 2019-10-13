function minimumBribes(q) {
  let count = 0;
  for (let i = q.length; i >= 0; i--) {
    if (q[i] > i + 3) {
      console.log("Too chaotic");
      return;
    }
    console.log(q[q.length]);
    let j = i;
    while (j >= q.length - q.length + q[i - 1]) {
      count = q[j - 2] > q[i - 1] ? (count += 1) : count;
      j--;
    }
  }
  console.log(count);
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
