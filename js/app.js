
let joueurs = document.querySelectorAll('.joueurs');
let img = document.querySelectorAll('.img');

let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');
let image_joueur = document.querySelector('.image_joueur');
let description_joueur = document.querySelector('.description_joueur');


joueurs.forEach(element => {
    console.log(element);
    element.addEventListener('click', e =>{
        
        changeJoueur(e);

    })
});

img.forEach(element => {
    
})
console.log(img);
//////// FONCTION

function changeJoueur (e){
    if (e.target.classList.value
        == "joueur1 joueurs") {
            
            console.log(img1.classList);
             document.querySelector('.active').classList.toggle("disble");
             document.querySelector('.active').classList.toggle("active");
             img1.classList.toggle("active")
             img1.classList.toggle("disble")
    }
    else if (e.target.classList.value
        == "joueur2 joueurs") {
        // img2.classList.toggle("active")
        // img1.classList.toggle("disble")
        let ddd = document.querySelector('.active');
        description_joueur.textContent =`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Nisi nam exercitationem consequuntur, 
        sunt quos eveniet fugiat tempora reiciendis sequi iure 
        unde, nesciunt rerum ea cupiditate. 
        Reiciendis ea architecto velit mollitia.`
        ddd.classList.toggle("active");
        ddd.classList.toggle("disble");
             img2.classList.toggle("active")
             img2.classList.toggle("disble")
      
        console.log(ddd.classList);
        console.log(img2.classList);
    }else if (e.target.classList.value
        == "joueur3 joueurs") {
            let ddd = document.querySelector('.active')
            ddd.classList.toggle("active");
            ddd.classList.toggle("disble");
                 img3.classList.toggle("active")
                 img3.classList.toggle("disble")
    }else{
        let ddd = document.querySelector('.active')
        ddd.classList.toggle("active");
        ddd.classList.toggle("disble");
             img4.classList.toggle("active")
             img4.classList.toggle("disble")
    }
}
    
