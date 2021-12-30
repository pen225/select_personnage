
let joueurs = document.querySelectorAll('.joueurs');
let joueur1 = document.querySelector('.joueur1');
let joueur2 = document.querySelector('.joueur2');
let joueur3 = document.querySelector('.joueur3');
let joueur4 = document.querySelector('.joueur4');
let contain = document.querySelector('.contain');
let titre = document.querySelector("h4");
let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');


let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');
let image_joueur = document.querySelector('.image_joueur');
let description_joueur = document.querySelector('.description_joueur');

let wrapper = document.querySelector('.wrapper');
let containt = document.querySelector('.contain');

// joueurs.forEach(element => {
//     // console.log(element);
//     element.addEventListener('mouseout', e =>{
//         if (e.target.classList.value
//             == "joueur1 joueurs") {
//             joueur1.style.backgroundColor= "#fff8dc91";
//             joueur1.style.color= "#333";
//         }else if (e.target.classList.value
//             == "joueur2 joueurs") {
//             joueur2.style.backgroundColor= "#fff8dc91";
//             joueur2.style.color= "#333";
//         }else if (e.target.classList.value
//             == "joueur3 joueurs") {
//             joueur3.style.backgroundColor= "#fff8dc91";
//             joueur3.style.color= "#333";
//         }else{
//             joueur4.style.backgroundColor= "#fff8dc91";
//             joueur4.style.color= "#333";
//         }
//     });
// });
// joueurs.forEach(element => {
//     // console.log(element);
//     element.addEventListener('mouseover', e =>{
//         if (e.target.classList.value
//             == "joueur1 joueurs") {
//             joueur1.style.backgroundColor= "cornsilk";
//             joueur1.style.color= "brown";
//         }else if (e.target.classList.value
//             == "joueur2 joueurs") {
//             joueur2.style.backgroundColor= "cornsilk";
//             joueur2.style.color= "brown";
//         }else if (e.target.classList.value
//             == "joueur3 joueurs") {
//             joueur3.style.backgroundColor= "cornsilk";
//             joueur3.style.color= "brown";
//         }else{
//             joueur4.style.backgroundColor= "cornsilk";
//             joueur4.style.color= "brown";
//         }
//     });
// });

joueurs.forEach(element => {
    // console.log(element);
    element.addEventListener('click', e =>{
        changeJoueur(e);
    })
});


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
           

            joueur1.style.backgroundColor= "cornsilk";
            joueur1.style.color= "brown";
            wrapper.style.backgroundColor = "#bcf05d";
            // desactive
            joueur2.style.backgroundColor= "#fff8dc91";
            joueur2.style.color= "#333";
            joueur3.style.backgroundColor= "#fff8dc91";
            joueur3.style.color= "#333";
            joueur4.style.backgroundColor= "#fff8dc91";
            joueur4.style.color= "#333";

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

            joueur2.style.backgroundColor= "cornsilk";
            joueur2.style.color= "brown";
            wrapper.style.backgroundColor = "#ecc30d";
            //desactive
            joueur1.style.backgroundColor= "#fff8dc91";
            joueur1.style.color= "#333";
            joueur3.style.backgroundColor= "#fff8dc91";
            joueur3.style.color= "#333";
            joueur4.style.backgroundColor= "#fff8dc91";
            joueur4.style.color= "#333";
             
             
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
               
            joueur3.style.backgroundColor= "cornsilk";
            joueur3.style.color= "brown";
            wrapper.style.backgroundColor = "#01294e";
            //desactive
            joueur1.style.backgroundColor= "#fff8dc91";
            joueur1.style.color= "#333";
            joueur2.style.backgroundColor= "#fff8dc91";
            joueur2.style.color= "#333";
            joueur4.style.backgroundColor= "#fff8dc91";
            joueur4.style.color= "#333";
    }else{
        let ddd = document.querySelector('.active')
        ddd.classList.toggle("active");
        ddd.classList.toggle("disble");
             img4.classList.toggle("active")
             img4.classList.toggle("disble")
             //Audio
             const audio = new Audio("../son/toondong.mp3");
             audio.play();
             //setProperty

             joueur4.style.backgroundColor= "cornsilk";
             joueur4.style.color= "brown";
             wrapper.style.backgroundColor = "#f651e9";
             //desactive
             joueur1.style.backgroundColor= "#fff8dc91";
             joueur1.style.color= "#333";
             joueur2.style.backgroundColor= "#fff8dc91";
             joueur2.style.color= "#333";
             joueur3.style.backgroundColor= "#fff8dc91";
             joueur3.style.color= "#333";
            //  document.documentElement.style.setProperty('--bgColorContain','#2f2c2c');
            
            //  description_joueur.style.color.setProperty(--textColor);
    }
}

titre.addEventListener('click', () =>{
    nav.classList.add("translate");
    console.log("Bonjour");
})
