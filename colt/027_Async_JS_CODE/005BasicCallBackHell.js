// ===============
// YIKES!!!!!!!!!!!
// ===============
setTimeout(() => {
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "orange";
    setTimeout(() => {
      document.body.style.backgroundColor = "yellow";
      setTimeout(() => {
        document.body.style.backgroundColor = "green";
        setTimeout(() => {
          document.body.style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
