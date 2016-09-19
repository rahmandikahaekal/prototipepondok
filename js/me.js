        $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
      })

$(function () {
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'pie'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [{
            name: 'Apa yg dipelajari?',
            colorByPoint: true,
            data: [{
                name: 'Programming',
                y: 50.00,
                drilldown: 'Programming'
            }, {
                name: 'Agama',
                y: 50.00,
                drilldown: 'Agama'
            }]
        }],
        drilldown: {
            series: [{
                name: 'Programming',
                id: 'Programming',
                data: [
                    ['Web Development', 33.33],
                    ['Mobile Development', 33.33],
                    ['Design', 33.33]
                ]
            }, {
                name: 'Agama',
                id: 'Agama',
                data: [
                    ['Bahasa Arab', 30.00],
                    ['Fiqih', 20.00],
                    ['Kajian Tematik', 10.00 ],
                    ['Aqidah', 15.00],
                    ['Hafalan Surah', 25.00]
                ]
            }]
        }
    });
});

  new WOW().init();

// external js: isotope.pkgd.js

// init Isotope
var iso = new Isotope( '.grid', {
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function( itemElem ) {
    var number = itemElem.querySelector('.number').textContent;
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function( itemElem ) {
    var name = itemElem.querySelector('.name').textContent;
    return name.match( /ium$/ );
  }
};

// bind filter button click
var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}

      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -7.0305875, lng: 109.6075859},
          zoom: 16
        });
      }