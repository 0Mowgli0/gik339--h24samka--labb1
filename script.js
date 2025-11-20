/* Uppgift 2 - Variabler och scope */

/* console.log("Före", a,b,c); */
{
  let a = 2;
  const b = 4;
  var c = 6;
  console.log("Inne", a, b, c);
}
/*console.log("Efter", a,b,c); */

/*Reflektion uppgift 2:     
  let och const fungerar bara inuti blocket { ... }, medan var är tillgänglig både utanför/inuti blocket. var är alltså inte begränsad av klamrarna {} 
  Om console.log() står innan blocket körs bara var — men värdet blir undefined, eftersom var inte har tilldelat något värde en. Är console.log() inannför blocket{} så skriver den ut allt både let,const och var. Om console.log() står efter blocket fungerar bara var, eftersom let och const är blockscopade och inte finns utanför blocket, denna gång så följer deklarationen med i detta fall nummer 6 från var */

/* Uppgift 3 - Jämförelser och specialvärden */
// 1.

console.log("3" == 3);
console.log("3" === 3);
console.log(NaN === NaN);
console.log(undefined == null);
console.log(undefined === null);

// 2.
console.log(undefined ? "Truthy" : "Falsy");

/*Reflektion uppgift 3:
1. 
== gör automatisk typkonvertering, så strängen '3' konverteras till talet 3 vilket blir true då.  medans === i detta fall blir false då de kräver att båda typ och värde är samma vilket de inte är. 
NaN är aldrig lika med sig själv, så NaN === NaN blir alltid false
Null och undefined är lika med varandra när man använder == eftersom den typkonvereterar till samma, men inte när man använder ===, eftersom de har olika typer.

2. 
När ett uttryck står för sig självt i en if-sats eller ternary-operator (?:) blir tolkningen antingen sant eller falskt. Värden som 0 undefined, "" (tom sträng), null, NaN och false räknas som falsy, medans värden som tal och strings med innehåll räknas då som truthy. 

3. 
Specialvärdena NaN, undefined och null har olika betydelser: NaN betyder "Not a Number", det uppstår när uppstår när en numerisk operation inte ger ett giltigt tal, exempelvis försöka göra matematik på text iställe för nummer.
Undefined betyder att en variabel är deklarerad men inte tilldelats något värde, de saknar då innehåll. 
null används för att uttryckligen sätta ett medvetet tomt värde. Skillnaden mellan null och undefined är att undefined uppstår automatiskt, medan null sätts medvetet.
*/

/* Uppgift 4 - Funktioner */

//console.log(name)

function greet(name) {
  return "hej" + name;
  //console.log(name)
}
console.log(greet(" Samuel"));

let greeting = greet(" Hannah");
console.log(greeting);

let name = "Jonathan";
console.log(name);

/* Reflektion uppgift 4

1. Sätt att skapa funktioner:
: Funktionsdeklaration: function greet() { … } denna funktion kan anropas innan de definieras i koden (mest flexibel).
: Funktionsuttryck: const greet = function() { … } måste anropas efter definitionen annars blir de syntax error.
: Arrowfunktion: const greet = () => { … }  kort syntax, måste också anropas efter definitionen (Läste att de oftast används i moderna projekt ).

Jag valde funktionsdeklaration eftersom de är något jag har sett förut och såg enklast ut att förstå logiken bakom. 
Dock efter att ha läst på lite om arrowfunktion så kommer jag jobba mer med det i framtiden. 

2. Var man anropa funktionen beror som sagt på vad för typ av funktion man väljer: 
(funktionsuttryck/arrow) går då inte att anropa innan de definierats, medans med funktionsdeklarationer går det att anopa innan och efter de definerats. 

3. Om du ändrar parametern name inne i funktionen påverkar det bara funktionen och inte den globala variabeln let name = "Jonathan"; . På samma sätt påverkar ändringar av den globala variabeln inte vad funktionen skriver ut. 
   Lokala parametrar och globala variabler fungerar alltså helt separat.

4. Parameter = Namnet på det värde som en funktion förväntar sig när den definieras. 
   Argument = Det faktiska värdet som skickas till funktionen när den anropas.
   Variabel = ett namn som lagrar data i koden.
*/

// Extrauppgift (frivillig)
//OBS! uppdatera gärna 1 gång efter att ha kört igenom, för att få rätt utskrift av array och objekt. Tydligen Vissa konsoler (särskilt Chrome) "tappar" strukturerad visning av objekt som loggats innan konsolen öppnades första gången

let tal1;
let tal2;
let input1;
let input2;

// --- Första talet ---
while (true) {
  input1 = prompt("Mata in första talet:");

  if (input1 === null || input1 === "") {
    alert("Ogiltig input: du måste skriva något.");
    continue;
  }

  tal1 = Number(input1);

  if (isNaN(tal1)) {
    alert("Ogiltig input: det måste vara siffror.");
    continue;
  }

  break;
}

// Andra talet
while (true) {
  input2 = prompt("Mata in andra talet:");

  if (input2 === null || input2 === "") {
    alert("Ogiltig input: du måste skriva något.");
    continue;
  }

  tal2 = Number(input2);

  if (isNaN(tal2)) {
    alert("Ogiltig input: det måste vara siffror.");
    continue;
  }

  break;
}

// Funktion som utför beräkningar
function calculate(tal1, tal2) {
  let summ = tal1 + tal2;
  let produkt = tal1 * tal2;
  let same = tal1 === tal2;

  // Sträng
  let str = `Summan är ${summ}, produkten är ${produkt}, och om talet är lika (true) annars (false): ${same}`;

  // Array
  let array = [summ, produkt, same];

  // Objekt
  let obj = { summ, produkt, same };

  return { str, array, obj };
}

// Kör funktionen
let resultat = calculate(tal1, tal2);

//  Skriv ut till konsolen
console.log(resultat.str);
console.log("Array:", resultat.array);
console.log("Objekt:");
console.table(resultat.obj);

//bugg jag har är att jag inte kan avbryta i promten
