// Appel de Ajax pour récupérer infos JC Deceaux
const url = "https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=798126ddc7369bca9b25af0670d37938f4e69e43"; // Url de l'API 
ajaxGet(url, function (reponse) {
        station = JSON.parse(reponse)

        // instanciation de la carte avec marqueurs
        let long = -1.553621;
        let lat = 47.218371;
        let map = new Carte(lat, long);

        //instanciation de la   verification du nom et prenom
        let prenom = $('#prenom');
        let nom = $('#nom');
        let client = new Personne(prenom, nom);




});

// session storage pr la résa en cours

window.addEventListener("load", () => {
        console.log(sessionStorage);
        
        if (sessionStorage.length != 0) {

                //session storage du nom de la station
                this.rencours = sessionStorage.getItem('resaEnCours');
                document.getElementById('messagevelo').textContent = this.rencours;


                //session storage du timer
               
                this.timerSession = sessionStorage.getItem('resultat');
                this.test = parseInt(this.timerSession);
                $('#annulation').css('display', 'inline');
                let timersession = new Timer(this.test);

        } else {

                $('#annulation').css('display', 'none');
                
        }

});




