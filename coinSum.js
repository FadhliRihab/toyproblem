/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p
2p
5p
10p
20p
50p
£1 (100p)
£2 (200p)
Given a given number of pence, return the possible number of ways someone could make change.
It is possible to make 5 pence in the following ways:
5 * 1p
3 * 1p + 1 * 2p
1 * 1p + 2 * 2p
1 * 5p
In other words, find all the possible combinations of coins that sum to a given pence value.
*/

// HELPERS
<<<<<<< HEAD
var coins = [1, 2, 5, 10, 20, 50, 100, 200];

function coinSums(total) {
  // your code here..
    var count = 0;
  
    for (var a = total; a >= 0; a -= coins[coins.length-1]) {
      for (var b = a; b >= 0; b -= coins[coins.length-2]) {
        for (var c = b; c >= 0; c -= coins[coins.length-3]) {
          for (var d = c; d >= 0; d -= coins[coins.length-4]) {
            for (var e = d; e >= 0; e -= coins[coins.length-5]) {
              for (var f = e; f >= 0; f -= coins[coins.length-6]) {
                for (var g = f; g >= 0; g -= coins[coins.length-7]) {
                  count++;
                }
              }
            }
          }
        }
      }
    }
    return count;
  };
  
=======
var coins = [1,2,5,10,20,50,100,200];
function coinSums (total) {
  var sums = 0;  // this is for keeping track of all the possibilities
  function innerRecursion(recurseIndex, leftover){
    var current = coins[recurseIndex];

    if (recurseIndex === 0){
      if (leftover % current === 0){
            

        sums++;
      }
      return;
    }
    while (leftover >= 0){
      innerRecursion(recurseIndex - 1, leftover);
      leftover -= current;
    }
  }
  innerRecursion(coins.length - 1, total);
  return sums;
}
>>>>>>> 3057e06217ddd49177c3dad69834ba00be532e2e
