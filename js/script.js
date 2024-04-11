/* Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg */


/* 
MILESTONE :zero::
Creare l’array di oggetti con le informazioni fornite.
MILESTONE :uno:
Stampare su console le informazioni di nome, ruolo e la stringa della foto per ogni membro del team
MILESTONE :due::
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1 :stella2::
Trasformare la stringa foto in una immagine effettiva
BONUS 2 :stella2: :stella2:
Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato. */


//Milestone 0
const teamArray = [
    {
        name : "Wayne",
        surname : "Barnett",
        role : "Founder & CEO",
        image : "./img/wayne-barnett-founder-ceo.jpg",
    },
    {
        name : "Angela",
        surname : "Caroll",
        role : "Chief Editor",
        image : "./img/angela-caroll-chief-editor.jpg",
    },
    {
        name : "Walter",
        surname : "Gordon",
        role : "Office Manager",
        image : "./img/walter-gordon-office-manager.jpg",
    },
    {
        name : "Angela",
        surname : "Lopez",
        role : "Social Media Manager",
        image : "./img/angela-lopez-social-media-manager.jpg",
    },
    {
        name : "Scott",
        surname : "Estrada",
        role : "Developer",
        image : "./img/scott-estrada-developer.jpg",
    },
    {
        name : "Barbara",
        surname : "Ramos",
        role : "Graphic Designer",
        image : "./img/barbara-ramos-graphic-designer.jpg",
    }
]

{/* <img src="./img/angela-caroll-chief-editor.jpg" alt=""> */}
//Milestone 1
//Uso forEach()
let cont = 1; //Contatore per capire quali oggetti stampa
teamArray.forEach((curElem) => {
    console.log('--------', cont, '---------');
    console.log('Questo è object : ',curElem);
    cont++;
    for(let key in curElem){
        console.log('Questa è la proprietà : ', key, 'Questo è il contenuto : ', curElem[key]);
    }
})

//Milestone 2 + 3 + Bonus 1 + Bonus 2
let rowElem = document.getElementById('card-group');

//Ciclo for dove prendo ogni Oggetto e ne scrivo le proprietà e i valori nel DOM
for(let i = 0; i < teamArray.length; i++){
    let curItem = teamArray[i];
    
    rowElem.innerHTML += `
        <div class = "col-30">
            <img src="${curItem.image}" alt ="" height ="200px">
            <p class="mt-10 white-txt"> <b>Nome</b> : <i>${curItem.name}</i></p>
            <p class = "white-txt"> <b>Cognome</b> : <i>${curItem.surname}</i></p>
            <p class = "white-txt"> <b>Ruolo</b> : <i>${curItem.role}</i></p>
        </div>
        `
    
}