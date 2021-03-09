process.stdout.write('hello from spinner1.js... \rheyyy\n');

const arr1 = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   \n'];
let time = 100;

for(let i = 0; i < arr1.length; i++) {
  time += 200;
  setTimeout(() => {
    process.stdout.write(arr1[i]);
  }, time);
}