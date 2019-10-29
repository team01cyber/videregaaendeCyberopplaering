let riktigSvarListe = {
    quiz0: {riktigSvar: 2},
    quiz1: {riktigSvar: 3},
    quiz2: {riktigSvar: 2},
    quiz3: {riktigSvar: 1},
    quiz4: {riktigSvar: 1},
    quiz5: {riktigSvar: 2},
    quiz6: {riktigSvar: 2},
}









//sjekker om svaret er riktig
function sjekksvar(x){
  let svarListe = document.getElementsByName(x);
  let svar;
  let quizID = "quiz"+x;

  for (let i = 0; i < svarListe.length; i++) {
    if (svarListe[i].checked) {
      svar = svarListe[i].value;

    }
  }

if (svar == riktigSvarListe[quizID].riktigSvar) {
  document.querySelector('.svarOutput'+x).innerHTML =  "<p style='text-decoration:underline; color:blue;'><b>Riktig svar!</p>"
} else {
    document.querySelector('.svarOutput'+x).innerHTML =  "<p style='text-decoration:underline; color:red; '><b>Galt svar...</p>"
}

}
