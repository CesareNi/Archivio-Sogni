document.getElementById("form-contributo").addEventListener("submit", function(e) {
  e.preventDefault();

  const nik = document.getElementById("nik").value;
  const idea = document.getElementById("idea").value;

  alert(`Grazie ${nik}! Contributo ricevuto.`);

  document.getElementById("form-contributo").reset();
});