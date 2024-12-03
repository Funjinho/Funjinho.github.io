const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(goat.dietType);
    }
  };
  goat.diet(); 
  // Output will be "ReferenceError: dietType is not defined"
  