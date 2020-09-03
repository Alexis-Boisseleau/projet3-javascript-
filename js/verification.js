class Personne {
	constructor(prenom, nom) {
		this.prenom = prenom;
		this.nom = nom;
		this.validation()



	}


	validation() {

		this.boutonValid = document.getElementById("validation");
		let regex = /^[a-zA-Z][a-z]/;


		this.boutonValid.addEventListener('click', (e) => {

			e.preventDefault();

			if (regex.test(document.getElementById("prenom").value) && regex.test(document.getElementById("nom").value) === true) {

				$('#message').text('');
				$('#signature').css('display', 'inline');
				$('#reservation').css('display', 'none');




			} else if (document.getElementById("prenom").validity.valueMissing || document.getElementById("nom").validity.valueMissing) {

				$('#message').text("Il manque une information").css('color','red');
				$('#signature').css('display', 'none');



			} else {

				$('#message').text("Le format est incorrect!").css('color','red');
				$('#signature').css('display', 'none');
			}

		});



	}


}