function initMap() {
	var latlng = new google.maps.LatLng(-25.2744, 133.7751);

	// function addmarker(latilongi) {
    var marker = new google.maps.Marker({
        position: latlng,
        title: 'new marker',
        draggable: true,
        map: map
    });
    // map.setCenter(marker.getPosition())
	// }

	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
	  // center: {lat: -25.2744, lng: 133.7751},
	  center: latlng,
	  zoom: 2
	});
}
// Setup chart
function setUpChart(){
	var ctx = document.getElementById("chart-area").getContext("2d");
	window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});

	var ctx = document.getElementById("chart-area2").getContext("2d");
	window.myDoughnut = new Chart(ctx).Doughnut(doughnutData2, {responsive : true});
}
		var doughnutData = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Grey"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Dark Grey"
				}

			];
			var doughnutData2 = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Grey"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Dark Grey"
				}

			];
function funFact(){
	var position = $(".position-js");
	$.each(position, function(index, val) {
		 if (index == 1) {
		 	$(val).css({"clear":"both","margin-left":"-15px"});
		 	$(val).find('.col-xs-4').css({"float":"right","left":"-31px"});
		 	$(val).find('.number').css({"left":"89px"});
		 }
	});
}

$(document).ready(function () {
	initMap();
	setUpChart();
	funFact();
});

// MODAL

  $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
  })



    $(function () {
        $(".custom-close-register").on('click', function() {
            $('#myModal').modal('hide');
            $('#myModal9').modal('show');
            $('#myModal10').modal('hide');
            $('#myModal11').modal('hide');
        });
    });



    $(function () {
        $(".custom-close-login").on('click', function() {
            $('#myModal').modal('show');
            $('#myModal9').modal('hide');
            $('#myModal10').modal('hide');
            $('#myModal11').modal('hide');
        });
    });



    $(function () {
        $(".custom-close-register-name").on('click', function() {
            $('#myModal10').modal('show');
            $('#myModal9').modal('hide');
            $('#myModal').modal('hide');
            $('#myModal11').modal('hide');
        });
    });

    $(function () {
        $(".custom-close-register-travelling").on('click', function() {
            $('#myModal11').modal('show');
            $('#myModal9').modal('hide');
            $('#myModal').modal('hide');
            $('#myModal10').modal('hide');
        });
    });

    $(function () {
        $(".custom-close-start-travelling").on('click', function() {
            $('#myModal11').modal('hide');
            $('#myModal9').modal('hide');
            $('#myModal').modal('hide');
            $('#myModal10').modal('hide');
        });
    });
