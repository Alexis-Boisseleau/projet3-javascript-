
class Canvas {
	constructor() {
		this.canvas = document.getElementById('canvas1');
		this.ctx = this.canvas.getContext('2d');
		this.signature = false;

		this.positionDepart()
		this.positionFin()
		this.dessiner()
		this.reset()


	}


	// point de depart
	positionDepart() {
		this.canvas.addEventListener('mousedown', () => {

			this.signature = true;


		});

	}


	positionFin() {

		this.canvas.addEventListener('mouseup', () => {

			this.signature = false;
			this.ctx.beginPath();// pr ne pas reprende au dernier point

		});

	}



	dessiner() {

		this.canvas.addEventListener('mousemove', (e) => {

			if (!this.signature) return; // pour voir si on dessine ou non 
			this.ctx.lineWidth = 2;
			this.ctx.strokeStyle = 'red';
			this.ctx.lineTo(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop);
			this.ctx.stroke();
			$('#reservation').css('display','inline');




		});


	}

	reset() {

		document.getElementById('reset').addEventListener('click', (e) => {
			e.preventDefault();
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		});
		document.getElementById('reservation').addEventListener('click', (e) => {
			e.preventDefault();
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		});

	};


}

let canvasss = new Canvas();