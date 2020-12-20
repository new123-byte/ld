/*
Fork jsfiddle.net/a14n4vhn/ by Taufik Nurrohman
and https://codepen.io/dissimulate/pen/vlfyA by dissimulate
*/
(function() {
    var o = document.getElementById('protect-overlay');
    o.getElementsByTagName('form')[0].onsubmit = function() {
      //   `aSBsb3ZlIHlvdQ==` => `i love you`
        if (this.answer.value === atob('Ym9iYQ==')) {
            o.style.display = "none";
          /*
          alert('Are you Ryan Reynolds?');
          */
        } else {
            alert('Wrong!');
        }
        return false;
    };
})();
