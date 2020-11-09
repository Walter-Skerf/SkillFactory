let task8 = new Map();
task8.set (2, 'two');
task8.set(3,'three');
task8.set(1,'one');
task8.forEach(function(value, key) {
  console.log(`Ключ - ${key} Значение - ${value}`);
})
