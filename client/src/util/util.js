const Util = {
  moveEnterHandler: (e) => {
    var element = document.getElementsByClassName(e.target.id);
    alert(e.target.id);
    // element.classList.toggle("fadein");
    // element.classList.toggle("fadeout");
  },

  moveOutHandler: (e) => {
    var element = document.getElementsByClassName(e.target.id)[0];
    // alert(element);
    element.classList.toggle("fadeout");
    element.classList.toggle("fadein");
  },
};

export default Util;
