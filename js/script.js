//1) L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

 var parola1 = prompt("Inserisci una parola qualsiasi.");
 var parola2 = prompt("Bene! Ora inserisci un'altra parola qualsiasi.");
 if (parola1.length < parola2.length){
     document.getElementById("stampa").innerHTML += "</br>" + "Hai scelto: " + parola1 + ";" + " " + parola2;
 } else if (parola2.length < parola1.length){
     document.getElementById("stampa").innerHTML += "</br>" +  "Hai scelto: " + parola2 + ";" + " " + parola1;
 } else {
     document.getElementById("stampa").innerHTML += "</br>" +  "Hai scelto: " + parola1 + ";" + " " + parola2;
 }


// 2) Il software deve chiedere per 5 volte all’utente di inserire un numero.
 var somma = 0;
 for ( var i = 0; i < 5; i++){
     var n = parseInt(prompt("Inserisci un numero."));
     somma += n;
 }

 var i = 0;
 while(i < 5){
     var n = parseInt(prompt("Inserisci un numero."));
     somma += n;
     i++
 }

 document.getElementById("stampa1").innerHTML += " " + somma;

// 3)Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

  var numeriDisp = [];
 for (var i = 0; i < 6; i++){
     var n = parseInt(prompt("Inserisci un numero."));
     if(n % 2 != 0){
         numeriDisp.push(n);
     }
 }

//  var i = 0;
//  while( i < 6){
//  var n = parseInt(prompt("Inserisci un numero."));
//      if(n % 2 != 0){
//       numeriDisp.push(n);
//      }
//      i++
//  }

 document.getElementById("stampa2").innerHTML += " " + numeriDisp;

// 4) In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby

var invitati = ["Pippo", "Paperina", "Pluto", "Minni", "Clarabella", "Nonna",  "Papera"];
// chiedi all’utente il suo nome 
var nomeUtente = prompt("Inserisci il tuo nome, per favore.");
nomeUtente = nomeUtente.charAt(0).toUpperCase() + nomeUtente.substr(1).toLowerCase();
// e comunicagli se può partecipare o no alla festa
var check = "nonPresente";
for (var i = 0; i < invitati.length && check == "nonPresente"; i++){
    if(invitati[i] == nomeUtente){
        check = "presente";        
    }
}
document.getElementById("stampa3").innerHTML += " " + check;