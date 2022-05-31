function Przycisk1() {
    // zdjecie.innerHTML = '<img src="z1.jpg" alt="ZDJ1"><br> <a onclick="PrzyciskZ()"><p> Zamknij </p></a>';
    window.open("./z1.html")
}

function Przycisk2() {
    // zdjecie.innerHTML = '<img src="z2.jpg" alt="ZDJ2"><br> <a onclick="PrzyciskZ()"><p> Zamknij </p></a>';
    window.open("./z2.html")
}

function Przycisk3() {
    // zdjecie.innerHTML = '<img src="z3.jpg" alt="ZDJ3"><br> <a onclick="PrzyciskZ()"><p> Zamknij </p></a>';
    window.open("./z3.html")
}

function Przycisk4() {
    // zdjecie.innerHTML = '<img src="z4.jpg" alt="ZDJ4"><br> <a onclick="PrzyciskZ()"><p> Zamknij </p></a>';
    window.open("./z4.html")
}

function Przycisk5() {
    // zdjecie.innerHTML = '<img src="z5.jpg" alt="ZDJ5"><br> <a onclick="PrzyciskZ()"><p> Zamknij </p></a>';
    window.open("./z5.html")
}


function Przycisk6() {
    // zdjecie.innerHTML = '<img src="z6.jpg" alt="ZDJ6"><br> <a onclick="PrzyciskZ()"><p> Zamknij </p></a>';
    window.open("./z6.html")
}

function PrzyciskZ() {
    // zdjecie.innerHTML = '' ;
}

function zamknij() {
    window.close()
}


const JEDEN =  document.querySelector('.jeden');
const JEDENimg = document.querySelectorAll('.jeden img');

const Poprz = document.querySelector('#poprz')
const Nast  = document.querySelector('#nast')



let licz = 0;
const size = JEDENimg[0].clientWidth;

JEDEN.style.transform = 'TranslateX(' + (-size*licz) + "px)";

Nast.addEventListener('click',()=>{
    JEDEN.style.transition = "transform 0.5s ease-in-out";
    
    if ( licz >= 4) {
        console.log("tak");
      } else {
        licz++
        JEDEN.style.transform = 'TranslateX(' + (-308*licz) + "px)";  
    }
    

});

Poprz.addEventListener('click',()=>{
    JEDEN.style.transition = "transform 0.5s ease-in-out";
   
    if ( licz <= 0) {
        console.log("tak");
      } else {
        licz--;
        JEDEN.style.transform = 'TranslateX(' + (-308*licz) + "px)";
    }
    

    
});
