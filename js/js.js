function myFunction() {
  document.getElementById("dp1").classList.toggle("show");
}
	
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//for charts

window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
   animationEnabled: true,
   theme: "light2", // "light1", "light2", "dark1", "dark2"
   title:{
      text: "Top Oil Reserves"
   },
   axisY: {
      title: "Reserves(MMbbl)"
   },
   data: [{        
      type: "column",  
      showInLegend: true, 
      legendMarkerColor: "grey",
      legendText: "MMbbl = one million barrels",
      dataPoints: [      
         { y: 300878, label: "Venezuela" },
         { y: 266455,  label: "Saudi" },
         { y: 169709,  label: "Canada" },
         { y: 158400,  label: "Iran" },
         { y: 142503,  label: "Iraq" },
         { y: 101500, label: "Kuwait" },
         { y: 97800,  label: "UAE" },
         { y: 80000,  label: "Russia" }
      ]
   }]
});
chart.render();

}