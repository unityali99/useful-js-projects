const stars = (starsCount) => {
  for (let i = 1; i <= starsCount; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
};

stars(10);
