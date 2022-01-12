function getSortedString(s, n) {
    var v1 = [];
    var v2 = [];
    var i = 0;
    for (i = 0; i < n; i++) {
      if (
        s[i].charCodeAt(0) > "a".charCodeAt(0) &&
        s[i].charCodeAt(0) <= "z".charCodeAt(0)
      )
        v1.push(s[i]);

      if (
        s[i].charCodeAt(0) > "A".charCodeAt(0) &&
        s[i].charCodeAt(0) <= "Z".charCodeAt(0)
      )
        v2.push(s[i]);
    }
    v1.sort();
    v2.sort();
    var j = 0;
    i = 0;
    for (var k = 0; k < n; k++) {
      if (
        s[k].charCodeAt(0) > "a".charCodeAt(0) &&
        s[k].charCodeAt(0) <= "z".charCodeAt(0)
      ) {
        s[k] = v1[i];
        ++i;
      }
      else if (
        s[k].charCodeAt(0) > "A".charCodeAt(0) &&
        s[k].charCodeAt(0) <= "Z".charCodeAt(0)
      ) {
        s[k] = v2[j];
        ++j;
      }
    }

    return s.join("");
  }
  var s = ['a','A','x','T','y','b','t'];
  var n = s.length;
 console.log(getSortedString(s, n));