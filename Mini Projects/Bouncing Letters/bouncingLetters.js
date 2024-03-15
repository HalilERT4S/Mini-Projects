let icerik = "MAVİ&BEYAZ";
let diziIcerik = icerik.split("");
let htmlIcerik = "";
for (let i = 0; i < diziIcerik.length; i++) {
  if (diziIcerik[i] === " ") {
    htmlIcerik += " ";
    continue;
  }
  htmlIcerik += `<span class="bounceLetter">${diziIcerik[i]}</span>`;
}
document.getElementById("ziplangac").innerHTML = htmlIcerik;
