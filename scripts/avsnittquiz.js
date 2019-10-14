




function sjekksvar(){
  let svarListe = document.getElementsByName('1');
  for (var i = 0; i < svarListe.length; i++) {
    if (svarListe[i].checked) {
      svar = svarListe[i].value;
      console.log(svar);
    }
  }
}
