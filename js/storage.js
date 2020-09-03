class Storage {
    constructor() {
        this.boutonStorage = document.getElementById('validation');
        this.saveStorage()
        
        


    }

    saveStorage() {
        this.boutonStorage.addEventListener('click', (e) => {
            e.preventDefault();
            this.prenomStorage = document.getElementById("prenom").value;
            localStorage.setItem("prenom", this.prenomStorage);// enregistrement du prenom ds localstorage

            this.nomStorage = document.getElementById("nom").value;
            localStorage.setItem("nom", this.nomStorage);// enregistrement du nom ds localstorage

            



        });



        this.pStorage = localStorage.getItem('prenom');//récuperation du prenom ds localstorage
        this.nStorage = localStorage.getItem('nom');

        document.getElementById('prenom').value = this.pStorage;// recuperation du nom ds localstorage
        document.getElementById('nom').value = this.nStorage;

    };
    
 
 


}

let storage = new Storage();

