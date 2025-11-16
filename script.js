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
if ("3" == 3) {
  console.log("'3' == 3 är sant");
} else {
  console.log("'3' == 3 är falskt");
}

if ("3" === 3) {
  console.log("'3' === 3 är sant");
} else {
  console.log("'3' === 3 är falskt");
}
if (NaN === NaN) {
  console.log("NaN === NaN är sant");
} else {
  console.log("NaN === NaN är falskt");
}

if (null == undefined) {
  console.log("null == undefined är sant");
} else {
  console.log("null == undefined är falskt");
}

if (null === undefined) {
  console.log("null === undefined är sant");
} else {
  console.log("null === undefined är falskt");
}

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


INTE KLAR HÄR: 

3. Parametern "name" i funktionen gäller bara inuti funktionen. Variabeln "name"
   utanför funktionen påverkar bara utskrifter utanför. Ändringar på en påverkar inte den andra.

4. Parameter = namnet på värdet som funktionen tar emot. Argument = det värde man skickar in. 
   Variabel = ett namn som lagrar data i koden.
*/
