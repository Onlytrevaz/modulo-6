document.getElementById("formulário").addEventListener("submit", function(event) {
event.preventDefault(); 

var campoA = document.getElementById("campoA").value;
var campoB = document.getElementById("campoB").value;

if (parseInt(campoB) > parseInt(campoA)) {
alert("UAU! Você conseguiu pensar em número que fosse maior que o outro! Você deve ser um gênio ou algo assim...");
event.preventDefault(); }

if (parseInt(campoB) < parseInt(campoA)) {
alert("Acho que você não entendeu bem, é pra colocar um numero menor na esquerda e um maior na direita.");
event.preventDefault(); 
}
});
