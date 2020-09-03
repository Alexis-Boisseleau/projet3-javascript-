class Timer {
	constructor(count) {
		this.count = count;
		this.interval = null;
		this.countDown()
		this.reset()



	}



	countDown() {


		this.bouttonDemarage = document.getElementById('reservation');

		this.bouttonDemarage.addEventListener('click', (e) => {
			e.preventDefault();
			clearInterval(this.interval);



		});
		this.departTimer = new Date();//date précise au click
		this.interval = setInterval(() => {

			
			this.currentTime = new Date();// date précise chaque seconde depuis le click
			this.tempsEcoule = this.currentTime - this.departTimer; // calcul de la différence des 2 chaques secondes
			this.resultat = this.count - this.tempsEcoule;// timer de 20 mintes

			// calcul pr mettre les millisecondes en minutes et secondes
			this.minutes = Math.floor((this.resultat % (1000 * 60 * 60)) / (1000 * 60));
			this.secondes = Math.floor((this.resultat % (1000 * 60)) / 1000);


			// affichage des resultats avec des 0 devant minutes et secondes qd ils sont <10

			if (this.secondes < 10) {
				this.secondes = '0' + this.secondes;

			};

			if (this.minutes < 10) {
				this.minutes = '0' + this.minutes;

			};

			window.sessionStorage.setItem('resultat', this.resultat);

			$('#timer').text( this.minutes + 'm' + ' ' + this.secondes + 's');


			// on reset le timer qd il est < a 0
			if (this.resultat < 0) {

				clearInterval(this.interval);
				
				sessionStorage.removeItem('resultat');
				sessionStorage.removeItem('resaEnCours');
				
				$('#annulation').css('display', 'none');
				$('#timer').text("le temps est écoulé votre réservation a été annulée");
				$('#messagevelo').text('');

			};



		}, 1000);



	};

	reset() {

		this.reset = document.getElementById('annulation');
		this.reset.addEventListener('click', (e) => {
			e.preventDefault();
			clearInterval(this.interval);
			sessionStorage.removeItem('resultat');
			sessionStorage.removeItem('resaEnCours');
			$('#messagevelo').text("Vous avez annulé votre réservation");
			$('#timer').text('');
			$('#annulation').css('display', 'none');




		});


	}



}







