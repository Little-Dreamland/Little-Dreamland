(function () {

    const cursor = document.querySelector('.cursor');

    

    const editCursor = e => {
          const { clientX: x, clientY: y } = e;
          //event.target
          cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
          if(e.target.tagName==="A" || e.target.className==="copy-btn"
          || e.target.className.indexOf("menu-item")!==-1) {
              cursor.style.background="#009688";
              cursor.style.opcity="1";
          } else {
              cursor.style.background="#212121";
          }
          if(e.target.className.indexOf("site-title")!==-1) {
            cursor.style.background="transparent";
            cursor.style.opcity="0";
          }
    };

    window.addEventListener('mousemove', editCursor);

})();