const toplam_deger = topla(9, 5);
console.log(toplam_deger);

function topla(a, b) {
  if(a < b){      
    const toplam = a + b;
    return toplam;
  }
  else { 
    return a - b;
  }
}