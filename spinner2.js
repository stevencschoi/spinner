const loader = ['|', '/', '-','\\'];
const animate = (arr) => {
  let timer = 100;
  for (const char of arr) {
    setTimeout(() => {
      process.stdout.write('\r' + char + '     ');
    }, timer);
    timer += 200;
  };
};

animate(loader);