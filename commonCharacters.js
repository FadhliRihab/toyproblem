/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


 var commonCharacters = function(string1, string2) {
  var res='' ;
  var test;
  for(var i=0;i<string1.length;i++)
  {
    test=string1[i];
    for(var j=0;i<string2.length;j++)
    {
      if(test===string2[j])
      { 
        res=res+string2[j];
      }
    }
  }
  for(var i=0;i<res.length;i++)
  {
    test=res[i];
    for(var j=1;i<res.length;j++)
    {
      if(res[j]===test)
      res.replace(res[j],'');
    }
  }
  return(res);
} 
console.log();
