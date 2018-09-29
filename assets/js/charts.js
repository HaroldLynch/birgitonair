let myChart = document.getElementById('myChart').getContext('2d');


		// Global Options
		Chart.defaults.global.defaultFontFamily = 'Helvetica';
		Chart.defaults.global.defaultFontSize = 18;
		Chart.defaults.global.defaultFontColor = '#777';

		let Verkehr = new Chart(myChart, {
			type: 'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
			data: {
				labels: ['Verkehr', 'Energiewirtschaft', 'Landwirtschaft', 'Haushalte/Kleinverbraucher', 'Verarbeitendes Gewerbe', 'Industrieprozesse', 'Sonstige'],
				datasets: [{
					label: '%',
					data: [
						38.4,
						24.8,
						10.8,
						10.6,
						7.6,
						7.3,
						0.5,
					],
					backgroundColor: 'lightblue',


					//   borderWidth:1,
					//   borderColor:'#777',
					//   hoverBorderWidth:3,
					//   hoverBorderColor:'#000'
				}]
			},



			options: {


				title: {
					display: true,
					text: 'Stickstoffdioxid-Quellen in Deutschland 2015',
					padding: 30,
					fontSize: 25,
				},

				legend: {
					display: false,
					position: 'right',
					labels: {
						fontColor: '#000'
					}
				},
				layout: {
					padding: {
						left: 0,
						right: 150,
						bottom: 60,
						top: 10,
					}
				},
				tooltips: {
					enabled: true
				},

				scales: {
					xAxes: [{
						ticks: {
							min: 0,
							max: 100,
							callback: function (value) {
								return value + "%"
							}
						},
						scaleLabel: {
							display: true,
							// labelString: "Anteil der Stickstoff-Emissionen in Prozent"

						}
					}]
				},

			}


		});

		function draw() {
			var canvas = document.getElementById('canvas');
			if (canvas.getContext) {
				var ctx = canvas.getContext('2d');

				ctx.fillStyle = "#FF0000";
				ctx.fillRect(25, 25, 100, 100);

			}
		}


		// <!-- Schwefel - chart.js  -->

		let myChart2 = document.getElementById('myChart2').getContext('2d');


		// Global Options
		Chart.defaults.global.defaultFontFamily = 'Helvetica';
		Chart.defaults.global.defaultFontSize = 18;
		Chart.defaults.global.defaultFontColor = '#777';

		let Schwefel = new Chart(myChart2, {
			type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
			data: {
				labels: ['1990', '1991', '1993', '1995', '2000', '2006', '2010', '2012', '2013', '2015'],
				datasets: [{
					label: 'Tsd. Tonnen',
					data: [
						3135,
						2606,
						2081,
						1211,
						336,
						252,
						231,
						232,
						231,
						213,




					],
					backgroundColor: 'lightblue',


					//   borderWidth:1,
					//   borderColor:'#777',
					//   hoverBorderWidth:3,
					//   hoverBorderColor:'#000'
				}]
			},



			options: {


				title: {
					display: true,
					text: 'Schwefeldioxid-Emissionen der Energiewirtschaft (DEU)',
					padding: 30,
					fontSize: 25,
				},

				legend: {
					display: false,
					position: 'right',
					labels: {
						fontColor: '#000'
					}
				},
				layout: {
					padding: {
						left: 0,
						right: 100,
						bottom: 40,
						top: 0,
					}
				},
				tooltips: {
					enabled: true
				},

				scales: {
					xAxes: [{
						ticks: {
							min: 0,
							max: 3500,
							callback: function (value) {
								return value + ""
							}
						},
						scaleLabel: {
							display: true,
							// labelString: "Anteil der Stickstoff-Emissionen in Prozent"

						}
					}]
				},

			}


		});

		function draw() {
			var canvas = document.getElementById('canvas');
			if (canvas.getContext) {
				var ctx = canvas.getContext('2d');

				ctx.fillStyle = "#FF0000";
				ctx.fillRect(25, 25, 100, 100);

			}
		}
