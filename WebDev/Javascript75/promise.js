console.log("This is promises");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number is supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes i am done");
      resolve("Tanishq you have done a great job");
    }, 3000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number is supporting you 2");
  } else {
    setTimeout(() => {
      console.log("Yes i am done 2");
      resolve("Tanishq you have done a great job 2");
    }, 1000);
  }
});

let p3 = promise.all([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});

// Promise
// Promise.allSettled()
// Promise.any()
// Promise.race()