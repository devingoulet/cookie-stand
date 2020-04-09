'use strict';

class Cities {
    constructor() {
        this.minimumCust = minimumCust;
        this.maximumCust = maximumCust;
        this.location = location;
        this.averageCookieSales = averageCookieSales;
        this.hourlySales = [];
        this.picture = picture;
        this.totalSales = 0;
    }
}

var time = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

var multiply = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.4, 0.5, 0.6]
var copy = []
copy = multiply;

Cities.prototype.getRandom = function(){
    var min = Math.ceil(this.minimumCust);
    var max = Math.floor(this.maximumCust);
    return Math.floor(Math.random() * (max - min)) + min;
}

Cities.prototype.overallSales = function(){
    for (var i = 6; i <= 19; i++){
        var hourlyCustomers = this.getRandom();
        var hourlyCookieSales = (hourlyCustomers * this.averageCookieSales);
        this.hourlySales.push(Math.round(hourlyCustomers))
    }
    for (i = 0; < this.hourlySales.length; i++){
        this.overallSales = this.overallSales + this.hourlySales
    }
};

Cities.prototype.renderTableRow =(){
    var tableElToTarget = document.getElementById('sales-table');

    var newTrEl = document.createElement('tr');
    var newTdEl = document.createElement('td');
    newTdEl.textContent = this.location
    newTrEl.appendChild(newTdEl);

    for (var i = 0; i < 14; i++){
        newTdEl = document.createElement('td');
        newTdEl.textContent = this.hourlySales[i];
        newTrEl.appendChild(newTdEl);
    }

    var newTotalTd = document.createElement('td')
    newTotalTd.textContent = this.overallSales
    newTrEl.appendChild(newTotalTd);

    tableElToTarget.appendChild(newTrEl);
};

function time(){
    var tableElToTarget = document.getElementById('sales-table');
    var newTrEl = document.createElement('tr');
    var newThEl = document.createElement('th');
    newTrEl.appendChild(newThEl);
    for (var i = 0; i < 15; i++){
        var newThEl = document.createElement('th');
        newThEl.textContent = time [i];
        newTrEl.appendChild(newThEl);

    }

    tableElToTarget.appendChild(newTrEl);
};

function totalCities(){
    var tableElToTarget = document.getElementById('sales-table');
    var newTrEl = document.createElement('tr');
    var newThEl = document.createElement('th');
    newThEl.textContent = 'Totals';
    newTrEl.appendChild(newThEl);
    for (var i = 0; i < 14; i++){
        var newThEl = document.createElement('th');
        newThEl.textContent = result[i];
        newTrEl.appendChild(newThEl);
    }
    var array1 = result;
    var sum = array1.reduce(function(a, b){
        return a + b;
    }, 0);
    
    var newThEl = document.createElement('th');
    newThEl.textContent = sum;
    newTrEl.appendChild(newThEl);

    tableElToTarget.appendChild(newTrEl);

};

time();

var seattle = new Cities('Seattle', 23, 65, 6.3);
seattle.getRandom();
seattle.totalSales();
seattle.renderTableRow();

var tokyo = new Cities('Tokyo', 3, 24, 1.2);
tokyo.getRandom();
tokyo.totalSales();
tokyo.renderTableRow();

var lima = new Cities('Lima', 2, 16, 4.6);
lima.getRandom();
lima.totalSales();
lima.renderTableRow();

var dubai = new Cities('Dubai', 11, 38, 3.7);
dubai.getRandom();
dubai.totalSales();
dubai.renderTableRow();

var paris = new Cities('Paris', 20, 38, 2.3)
paris.getRandom();
paris.totalSales();
paris.renderTableRow();
