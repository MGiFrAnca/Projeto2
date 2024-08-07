Skip to Play Sketch
Cookies
The p5.js Editor uses cookies. Some are essential to the website functionality and allow you to manage an account and preferences. Others are not essential—they are used for analytics and allow us to learn more about our community. We never sell this data or use it for advertising. You can decide which cookies you would like to allow, and learn more in our Privacy Policy.


Allow All

Allow Essential
Arquivo
Editar
Esboço
Ajuda
Português
Olá, 00001114867445sp!



Auto-atualizar

projeto 2
por 00001114867445sp



sketch.js
Salvo: 3 meses atrás
1
let cor;
2
let horizontal;
3
let vertical;
4
​
5
function setup() {
6
  createCanvas(600, 600);
7
  background("rgb(8,73,88)");
8
  cor= color(random(0,255),random(0,255),random(0,255));
9
  horizontal = 300;
10
  vertical = 300;
11
}
12
​
13
function draw() {
14
  circle(horizontal,vertical,70);
15
  fill(cor);
16
  
17
  if (mouseX > horizontal){
18
    horizontal++
19
  }
20
  if (mouseX < horizontal){
21
    horizontal--
22
  }
23
  
24
   if (mouseY < vertical){
Não há mensagens de Lint
Linha atuallinha 1

Terminal
Limpar

​
Prévia
