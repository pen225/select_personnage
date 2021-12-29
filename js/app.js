
let joueurs = document.querySelectorAll('.joueurs');
let contain = document.querySelector('.contain');
let li = document.querySelectorAll('li');


let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');
let image_joueur = document.querySelector('.image_joueur');
let description_joueur = document.querySelector('.description_joueur');


joueurs.forEach(element => {
    // console.log(element);
    element.addEventListener('click', e =>{
        changeJoueur(e);
    })
});

img.forEach(element => {
    
})
// console.log(img);
//////// FONCTION

function changeJoueur (e){
    if (e.target.classList.value
        == "joueur1 joueurs") {
            
            console.log(img1.classList);

            // let ddd = document.querySelector('.active');
            document.querySelector('.active').classList.toggle("disble");
            document.querySelector('.active').classList.toggle("active");
            img1.classList.toggle("active");
            img1.classList.toggle("disble");
            const audio = new Audio("../son/rebond1.mp3");
            audio.play();
            contain.style.backgroundColor ="#e968f7";
            description_joueur.style.color= "red";
            li.style.color="blue"
            //  description_joueur.textContent = "Lorem ipsum dolor sit";
    }
    else if (e.target.classList.value
        == "joueur2 joueurs") {
        // img2.classList.toggle("active")
        // img1.classList.toggle("disble")
        let ddd = document.querySelector('.active');
        
        ddd.classList.toggle("active");
        ddd.classList.toggle("disble");
             img2.classList.toggle("active")
             img2.classList.toggle("disble")
             const audio = new Audio("../son/SF-rebond2.mp3");
             audio.play();
             
             contain.style.backgroundColor ="#e968f7";
             description_joueur.style.color= "red";
             li.style.color="blue"
        // console.log(ddd.classList);
        // console.log(img2.classList);
    }else if (e.target.classList.value
        == "joueur3 joueurs") {
            let ddd = document.querySelector('.active')
            ddd.classList.toggle("active");
            ddd.classList.toggle("disble");
                img3.classList.toggle("active")
                img3.classList.toggle("disble")
                const audio = new Audio("../son/SF-hopping.mp3");
                audio.play();
                contain.style.backgroundColor ="#e968f7";
                description_joueur.style.color= "red";
                li.style.color="blue"
                 
    }else{
        let ddd = document.querySelector('.active')
        ddd.classList.toggle("active");
        ddd.classList.toggle("disble");
             img4.classList.toggle("active")
             img4.classList.toggle("disble")
             //Audio
             const audio = new Audio("../son/toondong.mp3");
             audio.play();
             contain.style.backgroundColor ="#e968f7";
             description_joueur.style.color= "red";
             li.style.color="blue"
             //setProperty
            //  document.documentElement.style.setProperty('--bgColorContain','#2f2c2c');
            
            //  description_joueur.style.color.setProperty(--textColor);
    }
}
    
