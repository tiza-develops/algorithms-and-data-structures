let total = 0;
for (let i = 0; i < 1001; i++) {
  if (i % 5 === 0 || i % 3 === 0){
    total = total + i;
  };
};
console.log(total);
