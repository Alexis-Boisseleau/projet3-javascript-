
class Carte {
	constructor(lat, long) {
		this.lat = lat;
		this.long = long;
		this.carte = null;
		this.initMap()
		this.markersInit()



	}
	// Fonction d'initialisation de la carte


	initMap() {
		// Créer l'objet macarte et le place ds la div "map";

		this.carte = L.map('map').setView([this.lat, this.long], 12.6);
		// filtres  récupéres avec openstreetmap.fr
		L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
			//  lien vers la source des données
			attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
			minZoom: 2,
			maxZoom: 20
		}).addTo(this.carte);

	};


	markersInit() {



		let markersCluster = new L.MarkerClusterGroup();

		station.forEach((station) => {
			this.station = station;
			this.latitude = station.position.lat;
			this.longitude = station.position.lng;
			this.marker = L.marker(new L.LatLng(this.latitude, this.longitude));
			markersCluster.addLayer(this.marker);
			this.marker.on("click", (e) => {
				


				$('#formulaire').css('display', 'inline');
				$("#adresse").text('Adresse : ' + station.address);
				$("#nom_station").text('Station : ' + station.name);
				$("#statut").text('Statut : ' + station.status);
				$("#velos").text('Nombres de places : ' + station.bike_stands);
				$('#velos_dispo').text('Vélo(s) disponible(s) : ' + station.available_bikes);
				$('#pasVelo').text('');


				//reservation 

				if (station.available_bikes == 0) {
					$('#formulaire').css('display', 'none');
					$('#pasVelo').text("Il y a plus de vélos disponible a cette station ");
				} else {

					this.bouttonDemarage = document.getElementById('reservation');
					this.bouttonDemarage.addEventListener('click', (e) => {

						e.preventDefault();
						
						let timer = new Timer(1202000);
						$('#messagevelo').text('Vous venez de réserver un vélo à la station: ' + station.name + ' il sera disponible pendant encore : ');
						$('#formulaire').css('display', 'none');
						$('#annulation').css('display', 'inline');

						//session storage la resercvation en cas de rafraichissement de la page
						
						this.resaEnCours = document.getElementById("messagevelo").textContent;
						window.sessionStorage.setItem("resaEnCours", this.resaEnCours);
						



					});

				};


			});




		});

		


		this.carte.addLayer(markersCluster);




	}



}






