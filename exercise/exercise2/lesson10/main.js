function calculateVolume() {
  var radiusInput = document.getElementById("radius");
  var volumeOutput = document.getElementById("volume");

  var radius = parseFloat(radiusInput.value);
  if (isNaN(radius) || radius <= 0) {
    alert("Please enter a valid positive number for the radius.");
    radiusInput.focus();
    return;
  }

  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volumeOutput.value = volume.toFixed(2);
}
