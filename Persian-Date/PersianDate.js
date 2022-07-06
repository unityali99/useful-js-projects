 var persianDate = require("./date-fns-jalali/index")
 
 var now = persianDate.format(new Date(), 'yyyy-MM-dd');

 console.log(`Today's Date is =>`,now);
