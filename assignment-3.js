// https://github.com/jyotirm0y-paul/assignment-03


// 01.kilometerToMeter Assignment
function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    var warning = "Distance cannot be negative.";
    return warning;
  }
  var meter = kilometer * 1000;
  return meter;
}
var result = kilometerToMeter(10);
console.log(result);




// 02.budgetCalculator Assignment
function bugetCalculator(watch, phone, laptop) {
  if (watch < 0) {
    var warning = "The number of objects is not negative.";
    return warning;
  } else if (phone < 0) {
    var warning = "The number of objects is not negative.";
    return warning;
  } else if (laptop < 0) {
    var warning = "The number of objects is not negative.";
    return warning;
  } else {
    var watch = watch * 50;
    var phone = phone * 100;
    var laptop = laptop * 500;
    totalCost = watch + phone + laptop;
    return totalCost;
  }
}
var total = bugetCalculator(5, 2, 2);
console.log(total);





// 03.hotelCost Assignment
function hotelCost(day) {
  if (day < 0) {
    var negative = "Day cannot be negative.";
    return negative;
  } else {
    if (day <= 10) {
      taka = day * 100;
    }
    else if (day <= 20) {
      var first10Days = 10 * 100;
      var remaining = day - 10;
      var second10Days = remaining * 80;
      taka = first10Days + second10Days;
    }
    else {
      var first10Days = 10 * 100;
      var second10Days = 10 * 80;
      var remaining = day - 20;
      var thirdAllDays = remaining * 50;
      taka = first10Days + second10Days + third10Days;
    }
    return taka;
  }
}
var total = hotelCost(10);
console.log(total);




// 04.megaFriend Assignment
function megaFriend(name) {
  var lgth = 0;
  var longest;
  if (name == "") {
    var warning = "It is a blank element.";
    return warning;
  }
  for (var i = 0; i < name.length; i++) {
    if (name[i].length > lgth) {
      var lgth = name[i].length;
      longest = name[i];
    }
  }
  return longest;
}
var largeName = megaFriend(['Ripon', 'Sumon', 'Subroto', 'Rafsan']);
console.log(largeName);