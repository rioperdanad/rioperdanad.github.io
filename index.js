// =========================UMUM==================
const cardContainer = document.querySelector(".card__container");
const progressBar = document.querySelector(".progress__bar");
let progressBarChange = progressBar.style.Width;
const card1 = document.querySelector("#card1");
const card2 = document.querySelector(".card-2");
const button1Card2 = document.querySelectorAll(".card-2 .button-1");

const dialogCard5 = document.querySelectorAll(".dialog-card-5");
const buttoncard5 = document.querySelectorAll(".buttoncard5");
const yahh = document.querySelector(".yahh");
const card6 = document.querySelector(".card-6");

const backsound = new Audio();
backsound.loop = true;
backsound.src = "Assets/musik/romantis.mp3";
backsound.volume = 0.3;

function bubbles() {
   var countt = 200;
   var section = document.querySelector(".main");
   var i = 0;
   while (i < countt) {
      var bubble = document.createElement("i");
      bubble.classList.add("gelembung");
      var x = Math.floor(Math.random() * window.innerWidth);
      var y = Math.floor(Math.random() * window.innerHeight);

      var size = Math.random() * 10;
      bubble.style.left = x + "px";
      bubble.style.top = y + "px";
      bubble.style.width = 1 + size + "px";
      bubble.style.height = 1 + size + "px";

      section.appendChild(bubble);
      i++;
   }
}

bubbles();

function terompet() {
   let countt = 200;
   const as = document.querySelector(".card-8");
   let i = 0;
   while (i < countt) {
      let terompet = document.createElement("i");
      terompet.classList.add("terompet");
      var u = Math.floor(Math.random() * window.innerHeight);
      var v = Math.floor(Math.random() * window.innerHeight);

      var size = Math.random() * 10;
      terompet.style.left = u + "px";
      terompet.style.top = v + "px";
      terompet.style.width = 10 + size + "px";
      terompet.style.height = 10 + size + "px";

      as.appendChild(terompet);
      i++;
   }
}

terompet();

var vic = "Assets/musik/voice2.mp3";
const voice = new Audio();
voice.src = vic;
voice.loop = false;

const voiceButton = new Audio();
voiceButton.src = "Assets/musik/clik.mp3";
voiceButton.loop = false;

// ========================CARD-0==================\
const button1card0 = document.getElementsByClassName("button1-card0")[0];
const card0 = document.querySelector(".card-0");
button1card0.addEventListener("click", () => {
   voiceButton.play();

   card0.classList.add("hilang");
   card1.classList.remove("hilang");
   vic = "voice2.mp3";
   jalancard1();
   setTimeout(() => {
      voice.play();
      progressBar.classList.remove("hilang");
      backsound.play();
   }, 1200);
});
//=========================CARD-1==================

function winEvent() {
   {
      card1.style.display = "none";
      progressBar.classList.add("hilang");
      card2.classList.remove("hilang");
      setTimeout(() => {
         setTimeout(() => {
            voice.src = "Assets/musik/voice1.mp3";
            voice.play();
            card2.classList.remove("hilang");
            const bc = document.querySelectorAll(".bc");
            setTimeout(() => {
               bc[0].classList.remove("hilang");
               bc[1].classList.remove("hilang");
            }, 800);
         }, 1000);
      }, 1200);
   }
}

const jalancard1 = function () {
   setTimeout(winEvent, 7500);
};

// =====================CARD-2======================

const card3 = document.querySelector(".card-3");
const card4 = document.querySelector(".card-4");
button1Card2.forEach((e) => {
   e.addEventListener("click", () => {
      if (e == button1Card2[1]) {
         voiceButton.play();
         card2.classList.add("hilang");
         card3.classList.remove("hilang");
      } else {
         voiceButton.play();
         card2.classList.add("hilang");
         card4.classList.remove("hilang");

         setTimeout(() => {
            const pcard4 = (document.querySelector(
               ".header__card-4"
            ).style.opasity = 0);
         }, 5000);
         setTimeout(() => {
            voice.src = "Assets/musik/voice3.mp3";
            voice.play();
         }, 1000);
      }
   });
});
// =================CARD-4=========================

const bungkus = document.querySelector(".bungkus");
const wh = document.querySelector(".input__card4");
const music = document.querySelectorAll(".music");
const next = document.querySelectorAll(".next");
const XA = document.getElementById("XA");
const xx = document.getElementsByClassName("xx")[0].innerHTML;
const a = document.querySelector(".a");
const card5 = document.querySelector(".card-5");
const uuk = document.querySelector(".uuk");

const musik = new Audio();
musik.src = "Assets/musik/lagu.mp3";
musik.loop = false;

function kTombol() {
   uuk.classList.remove("hilang");
}

uuk.addEventListener("click", () => {
   if (wh.value != "") {
      uuk.classList.add("hilang");
      bungkus.classList.remove("hilang");
      const hasil = xx.replace(/\ang/, wh.value.toString());
      XA.innerHTML = hasil;
      setTimeout(() => {
         voice.src = "Assets/musik/voice4.mp3";
         voice.play();
      }, 2000);
      setTimeout(cd4, 8000);
   }
});

function cd4() {
   music[0].classList.remove("hilang");
   next[0].classList.remove("hilang");
}

const play = document.getElementById("play");
const stops = document.getElementById("stop");
const musicButton = new Audio();
musicButton.loop = false;
musicButton.src = "Assets/musik/mclick.mp3";

const plays = function (play, stop) {
   setTimeout(() => {
      if (musik.paused) {
         musik.play();
         play.classList.toggle("hilang");
         stop.classList.toggle("hilang");
         backsound.pause();
      } else {
         musik.pause();
         play.classList.toggle("hilang");
         stop.classList.toggle("hilang");
         backsound.play();
      }
   }, 500);
};

musik.ontimeupdate = () => {
   if (musik.currentTime == musik.duration) {
      play.classList.remove("hilang");
      stops.classList.add("hilang");
   }
};

music.forEach(function (e) {
   e.addEventListener("click", () => {
      musicButton.play();
      plays(play, stops);
   });
});

a.addEventListener("click", (e) => {
   e.preventDefault();
   voiceButton.play();
   card4.classList.add("hilang");
   card5.classList.remove("hilang");
   musik.pause();

   setTimeout(() => {
      buttoncard5[0].classList.remove("hilang");
      buttoncard5[1].classList.remove("hilang");
   }, 4000);

   setTimeout(() => {
      voice.src = "Assets/musik/voice5.mp3";
      voice.play();
   }, 1000);
});

// ========================CARD-5========================================

buttoncard5.forEach((e) => {
   e.addEventListener("click", () => {
      voiceButton.play();
      if (e == buttoncard5[0]) {
         dialogCard5[1].classList.remove("hilang");
         yahh.classList.add("hilang");
         setTimeout(() => {
            voice.src = "Assets/musik/voice6.mp3";
            voice.play();
         }, 1000);
         setTimeout(() => {
            buttoncard5[2].classList.remove("hilang");
            buttoncard5[3].classList.remove("hilang");
         }, 4000);
      } else if (e == buttoncard5[1]) {
         dialogCard5[1].classList.add("hilang");
         yahh.classList.remove("hilang");
      } else if (e == buttoncard5[2]) {
         yahh.classList.add("hilang");
         dialogCard5[2].classList.remove("hilang");
         setTimeout(() => {
            voice.src = "Assets/musik/voice7.mp3";
            voice.play();
         }, 1000);

         setTimeout(aa, 3000);
         setTimeout(() => {
            card5.classList.add("hilang");
            progressBar.classList.add("hilang");
            card6.classList.remove("hilang");
            setTimeout(() => {
               voice.src = "Assets/musik/voice9.mp3";
               voice.play();
            }, 2000);

            setTimeout(() => {
               const button2 = document
                  .querySelector(".bv")
                  .classList.remove("hilang");
            }, 3000);
         }, 9000);
      } else if (e == buttoncard5[3]) {
         dialogCard5[2].classList.add("hilang");
         yahh.classList.remove("hilang");
      }
   });
});

function aa() {
   dialogCard5[3].classList.remove("hilang");
   progressBar.classList.remove("hilang");
}

// ========================CARD-6================================

const button2 = document.querySelectorAll(".button2");
const dialogcard6 = document.querySelector(".dialog-card6");
const card7 = document.querySelector(".card-7");
const pOld = dialogcard6.children[1];

// alternatif jawaban
const jawaban = document.createElement("p");
jawaban.className = "xx";

function rep() {
   pOld.parentNode.replaceChild(jawaban, pOld);
   setTimeout(() => {
      progressBar.classList.remove("hilang");
      countdown();
   }, 5000);

   var count1 = 5;
   var countdown = () => {
      var timeI = setInterval(() => {
         count1--;
         if (count1 == 0) {
            clearInterval(timeI);
            card6.classList.add("hilang");
            progressBar.classList.add("hilang");
            card7.classList.remove("hilang");

            setTimeout(() => {
               voice.src = "Assets/musik/voice15.mp3";
               voice.play();
            }, 2000);

            setTimeout(() => {
               for (i = 0; i <= 1; i++) {
                  bb[i].classList.remove("hilang");
               }
            }, 8000);
         }
      }, 1000);
   };
}
const playsa = (v) => {
   setTimeout(() => {
      voice.src = v;
      voice.play();
   }, 2000);
};

const jawab = (gum) => {
   voiceButton.play();
   if (gum == "Memasak") {
      jawaban.innerHTML =
         "Istri idaman nihh.. Oiya kalau masak dikit aja gulanya,kamu udah manis soalnya";
      var v = "Assets/musik/voice11.mp3";
      rep();
      playsa(v);
   } else if (gum == "Travelling") {
      jawaban.innerHTML =
         "Travelling kemana aja tuh.. Jangan lupa kalo travelling bawa gandengan biar ga nyasar";
      var v = "Assets/musik/voice10.mp3";
      rep();
      playsa(v);
   } else if (gum == "Kayang") {
      jawaban.innerHTML =
         "Bahasa indonesianya I love u apa ya.. emm Aku Kayang kamu hehehe";
      var v = "Assets/musik/voice12.mp3";
      rep();
      playsa(v);
   } else if (gum == "Menulis") {
      jawaban.innerHTML =
         "Wahh, aku juga suka menulis, menulis namamu di hatiku hehehe";
      var v = "Assets/musik/voice13.mp3";
      rep();
      playsa(v);
   } else if (gum == "Nonton Film") {
      jawaban.innerHTML =
         "Udah pernah nonton forest gumb belum ? kalo belum coba tonton deh. Terbaik pokoknya hehe ";
      var v = "Assets/musik/voice14.mp3";
      rep();
      playsa(v);
   }
};

button2.forEach((e) => {
   e.addEventListener("click", (e) => {
      let gum = e.target.innerHTML;
      jawab(gum);
      dialogcard6.classList.remove("hilang");
   });
});

// =======================CARD-7=====================================

const bb = document.querySelectorAll(".dd");
const birthday = document.querySelector(".card-8");
const jarjit = document.querySelector(".jarjit");
const tsas = document.querySelector(".tas");
const satu = document.querySelector(".satu");

bb.forEach((e) => {
   e.addEventListener("click", () => {
      if (e.children.innerHTML == "Hobi Rio") {
         console.log("ah");
      } else {
         card7.classList.add("hilang");
         birthday.classList.remove("hilang");
         jarjit.classList.remove("hilang");
         setTimeout(() => {
            backsound.pause();
            satu.classList.remove("hilang");
            voice.src = "Assets/musik/jarjit.mp3";
            voice.play();
         }, 1000);
         setTimeout(() => {
            jarjit.classList.add("hilang");
            tsas.classList.remove("hilang");
            voice.src = "Assets/musik/jamrut.mp3";
            voice.play();

            setTimeout(xxx, 3000);

            function xxx() {
               tsas.classList.add("hilang");
               document.querySelector(".ssatu").classList.remove("hilang");
               var hitungg = 13;
               var tt = setInterval(() => {
                  hitungg--;
                  if (hitungg == 9) {
                     document.querySelector(".ddua").classList.remove("hilang");
                  } else if (hitungg == 13) {
                  } else if (hitungg == 6) {
                     document.querySelector(".tiga").classList.remove("hilang");
                  } else if (hitungg == 3) {
                     document
                        .querySelector(".empat")
                        .classList.remove("hilang");
                  } else if (hitungg == 0) {
                     document.querySelector(".lima").classList.remove("hilang");
                     document.querySelector(".rose").classList.remove("hilang");
                     clearInterval(tt);
                  }
               }, 1200);
            }
         }, 3000);
      }
   });
});
