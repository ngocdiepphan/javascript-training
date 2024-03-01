getSize = () => {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;

  document.getElementById("widthHeight").innerHTML =
    "<h1>Width: " + width + "\n" + " Height: " + height + "</h1>";
};
