function result(){
  var age = document.getElementById('age').value;
  if(isNaN(age) == false && age > 0 && age < 120){
    if (age >= 18){
      alert('Vous êtes majeur');
    }
    else{
      alert('Vous êtes mineur');
    }
  }else{
    alert('merci de remplir correctement');
  }

}
