var aSound, wSound, sSound, eSound, dSound;
var angle = 0;
var bool = 0;
var bool2 = 0;

function preload() {
  aSound = loadSound("sound/C4.mp3");
  wSound = loadSound("sound/Db4.mp3");
  sSound = loadSound("sound/D4.mp3");
  eSound = loadSound("sound/Eb4.mp3");
  dSound = loadSound("sound/E4.mp3");
  fSound = loadSound("sound/F4.mp3");
  tSound = loadSound("sound/Gb4.mp3");
  gSound = loadSound("sound/G4.mp3");
  ySound = loadSound("sound/Ab4.mp3");
  hSound = loadSound("sound/A4.mp3");
  uSound = loadSound("sound/Bb4.mp3");
  jSound = loadSound("sound/B4.mp3");
  kSound = loadSound("sound/C5.mp3");
  oSound = loadSound("sound/Db5.mp3");
  lSound = loadSound("sound/D5.mp3");
  pSound = loadSound("sound/Eb5.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(193, 193, 193);
  aKey = new Key(bool, 150, 30, 94, 168);   // a = C
  wKey = new Key(bool, 160, 84, 115, 173);  // w = C#
  sKey = new Key(bool, 170, 135, 173, 135); // s = D
  eKey = new Key(bool, 180, 92, 141, 130);  // e = D#
  dKey = new Key(bool, 190, 173, 142, 34);  // d = E
  fKey = new Key(bool, 200, 178, 162, 14);  // f = F
  tKey = new Key(bool, 210, 173, 93, 8);    // t = F#
  gKey = new Key(bool, 220, 173, 70, 65);   // g = G
  yKey = new Key(bool, 230, 175, 31, 55);   // y = G#
  hKey = new Key(bool, 240, 168, 30, 103);  // h = A
  uKey = new Key(bool, 250, 159, 79, 129);  // u = A#
  jKey = new Key(bool, 260, 150, 52, 137);  // j = B
  kKey = new Key(bool, 270, 30, 94, 168);   // k = C
  oKey = new Key(bool, 280, 84, 115, 173);  // o = C#
  lKey = new Key(bool, 290, 135, 173, 135); // l = D 
  pKey = new Key(bool, 300, 92, 141, 130);  // p = D#
  
}

class Key{
  constructor(pbool, pradius, pr, pg, pb){ // p for passed in
    this.bool = pbool; //bool
    this.radius = pradius;
    this.r = pr;
    this.g = pg;
    this.b = pb;
    this.hor = 20;
    this.ver = 20;
  }
}

function draw(){
  background(193, 193, 193,1.5);
  fill(203, 224, 109);
  translate(windowWidth/2, windowHeight/2);
  var r = 0;
  var g = 0;
  var b = 0;
  var radius = 0;
  
  angle += .008;

  if (aKey.bool == 1){
    drawCirle(aKey.radius, aKey.r, aKey.g, aKey.b, aKey.hor, aKey.ver);
    aKey.hor -= 0.06;
    aKey.ver -= 0.06;
  }
  if (wKey.bool == 1){
    drawCirle(wKey.radius, wKey.r, wKey.g, wKey.b, wKey.hor, wKey.ver);
    wKey.hor -= 0.06;
    wKey.ver -= 0.06;
  }
  if (sKey.bool == 1){
    drawCirle(sKey.radius, sKey.r, sKey.g, sKey.b, sKey.hor, sKey.ver);
    sKey.hor -= 0.06;
    sKey.ver -= 0.06;
  }
  if (eKey.bool == 1){
    drawCirle(eKey.radius, eKey.r, eKey.g, eKey.b, eKey.hor, eKey.ver);
    eKey.hor -= 0.06;
    eKey.ver -= 0.06;
  }
  if (dKey.bool == 1){
    drawCirle(dKey.radius, dKey.r, dKey.g, dKey.b, dKey.hor, dKey.ver);
    dKey.hor -= 0.06;
    dKey.ver -= 0.06;
  }
  if (fKey.bool == 1){
    drawCirle(fKey.radius, fKey.r, fKey.g, fKey.b, fKey.hor, fKey.ver);
    fKey.hor -= 0.06;
    fKey.ver -= 0.06;
  }
  if (tKey.bool == 1){
    drawCirle(tKey.radius, tKey.r, tKey.g, tKey.b, tKey.hor, tKey.ver);
    tKey.hor -= 0.06;
    tKey.ver -= 0.06;
  }
  if (gKey.bool == 1){
    drawCirle(gKey.radius, gKey.r, gKey.g, gKey.b, gKey.hor, gKey.ver);
    gKey.hor -= 0.06;
    gKey.ver -= 0.06;
  }
  if (yKey.bool == 1){
    drawCirle(yKey.radius, yKey.r, yKey.g, yKey.b, yKey.hor, yKey.ver);
    yKey.hor -= 0.06;
    yKey.ver -= 0.06;
  }
  if (hKey.bool == 1){
    drawCirle(hKey.radius, hKey.r, hKey.g, hKey.b, hKey.hor, hKey.ver);
    hKey.hor -= 0.06;
    hKey.ver -= 0.06;
  }
  if (uKey.bool == 1){
    drawCirle(uKey.radius, uKey.r, uKey.g, uKey.b, uKey.hor, uKey.ver);
    uKey.hor -= 0.06;
    uKey.ver -= 0.06;
  }
  if (jKey.bool == 1){
    drawCirle(jKey.radius, jKey.r, jKey.g, jKey.b, jKey.hor, jKey.ver);
    jKey.hor -= 0.06;
    jKey.ver -= 0.06;
  }
  if (kKey.bool == 1){
    drawCirle(kKey.radius, kKey.r, kKey.g, kKey.b, kKey.hor, kKey.ver);
    kKey.hor -= 0.06;
    kKey.ver -= 0.06;
  }
  if (oKey.bool == 1){
    drawCirle(oKey.radius, oKey.r, oKey.g, oKey.b, oKey.hor, oKey.ver);
    oKey.hor -= 0.06;
    oKey.ver -= 0.06;
  }
  if (lKey.bool == 1){
    drawCirle(lKey.radius, lKey.r, lKey.g, lKey.b, lKey.hor, lKey.ver);
    lKey.hor -= 0.06;
    lKey.ver -= 0.06;
  }
  if (pKey.bool == 1){
    drawCirle(pKey.radius, pKey.r, pKey.g, pKey.b, pKey.hor, pKey.ver);
    pKey.hor -= 0.06;
    pKey.ver -= 0.06;
  }
}

function drawCirle(radius, r, g, b, hor, ver){
  if (hor <2) {
    hor = 0;
    ver = 0;
  }
  var a = 200;
  var x = radius*cos(angle);
  var y = radius*sin(angle);
  noStroke();
  fill(r, g, b, a);
  ellipse(x, y, hor, ver);
}

function keyTyped() {
  if (key === 'a'){
    aKey.bool = 1;
    aSound.play();
  }
  if (key === 'w'){
    wKey.bool = 1;
    wSound.play();
  }
  if (key === 's'){
    sKey.bool = 1;
    sSound.play();
  }
  if (key === 'e'){
    eKey.bool = 1;
    eSound.play();
  }
  if (key === 'd'){
    dKey.bool = 1;
    dSound.play();
  }
  if (key === 'f'){
    fKey.bool = 1;
    fSound.play();
  }
  if (key === 't'){
    tKey.bool = 1;
    tSound.play();
  }
  if (key === 'g'){
    gKey.bool = 1;
    gSound.play();
  }
  if (key === 'y'){
    yKey.bool = 1;
    ySound.play();
  }
  if (key === 'h'){
    hKey.bool = 1;
    hSound.play();
  }
  if (key === 'u'){
    uKey.bool = 1;
    uSound.play();
  }
  if (key === 'j'){
    jKey.bool = 1;
    jSound.play();
  }
  if (key === 'k'){
    kKey.bool = 1;
    kSound.play();
  }
  if (key === 'o'){
    oKey.bool = 1;
    oSound.play();
  }
  if (key === 'l'){
    lKey.bool = 1;
    lSound.play();
  }
  if (key === 'p'){
    pKey.bool = 1;
    pSound.play();
  }
}

function keyReleased() {
  if (key === 'a') {
    aKey.bool = 0;
    aSound.setVolume(0.0);
    aSound.setVolume(1.0);
    aKey.hor = 20;
    aKey.ver = 20;
  }
  if (key === 'w') {
    wKey.bool= 0;
    wSound.setVolume(0.0);
    wSound.setVolume(1.0);
    wKey.hor = 20;
    wKey.ver = 20;
  }
  if (key === 's') {
    sKey.bool= 0;
    wSound.setVolume(0.0);
    wSound.setVolume(1.0);
    sKey.hor = 20;
    sKey.ver = 20;
  }
  if (key === 'e') {
    eKey.bool= 0;
    eSound.setVolume(0.0);
    eSound.setVolume(1.0);
    eKey.hor = 20;
    eKey.ver = 20;
  }
  if (key === 'd') {
    dKey.bool= 0;
    dSound.setVolume(0.0);
    dSound.setVolume(1.0);
    dKey.hor = 20;
    dKey.ver = 20;
  }
  if (key === 'f') {
    fKey.bool = 0;
    fSound.setVolume(0.0);
    fSound.setVolume(1.0);
    fKey.hor = 20;
    fKey.ver = 20;
  }
  if (key === 't') {
    tKey.bool = 0;
    tSound.setVolume(0.0);
    tound.setVolume(1.0);
    tKey.hor = 20;
    tKey.ver = 20;
  }
  if (key === 'g') {
    gKey.bool = 0;
    gSound.setVolume(0.0);
    gSound.setVolume(1.0);
    gKey.hor = 20;
    gKey.ver = 20;
  }
  if (key === 'y') {
    yKey.bool= 0;
    ySound.setVolume(0.0);
    ySound.setVolume(1.0);
    yKey.hor = 20;
    yKey.ver = 20;
  }
  if (key === 'h') {
    hKey.bool= 0;
    hSound.setVolume(0.0);
    hSound.setVolume(1.0);
    hKey.hor = 20;
    hKey.ver = 20;
  }
  if (key === 'u') {
    uKey.bool= 0;
    uSound.setVolume(0.0);
    uSound.setVolume(1.0);
    uKey.hor = 20;
    uKey.ver = 20;
  }
  if (key === 'j') {
    jKey.bool= 0;
    jSound.setVolume(0.0);
    jSound.setVolume(1.0);
    jKey.hor = 20;
    jKey.ver = 20;
  }
  if (key === 'k') {
    kKey.bool= 0;
    kSound.setVolume(0.0);
    kSound.setVolume(1.0);
    kKey.hor = 20;
    kKey.ver = 20;
  }
  if (key === 'o') {
    oKey.bool= 0;
    oSound.setVolume(0.0);
    oSound.setVolume(1.0);
    oKey.hor = 20;
    oKey.ver = 20;
  }
  if (key === 'l') {
    lKey.bool= 0;
    lSound.setVolume(0.0);
    lSound.setVolume(1.0);
    lKey.hor = 20;
    lKey.ver = 20;
  }
  if (key === 'p') {
    pKey.bool= 0;
    pSound.setVolume(0.0);
    pSound.setVolume(1.0);;
    pKey.hor = 20;
    pKey.ver = 20;
  }
}