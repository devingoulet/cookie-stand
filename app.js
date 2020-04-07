'use strict';

var seattleStore = {
    minCustomer : 23,
    maxCustomer : 65,
    aveCookieSale: 6.3,
    customerPerHour: [],
    openHours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
}

 

seattleStore.totalCustomerPerHour = function(){
    
    for (var i = 0; 1 < this.openHours.length; i++) {
        var randoCustomerCount = Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
        this.customerPerHour.push(randoCustomerCount);
    }
}

// New Method

seattleStore.totalCustomerPerHour()
console.log(seattleStore.totalCustomerPerHour);

seattleStore.totalCookieSales = function() {
    for(var i = 0; i < openHours.length; i++) {
        var customerPerHour = this.randoCustomerCount();
        var cookiesPerHour = this.averageCookieSales * customerPerHour;
        this.cookiesPerHour.push(cookiesPerHour)
    }
}

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']