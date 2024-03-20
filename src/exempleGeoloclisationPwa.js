function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("La géolocalisation n'est pas prise en charge par ce navigateur.");
  }
}

function showPosition(position) {
  alert(
    "Latitude: " +
      position.coords.latitude +
      "\nLongitude: " +
      position.coords.longitude
  );
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("L'utilisateur a refusé la demande de géolocalisation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Les informations de localisation ne sont pas disponibles.");
      break;
    case error.TIMEOUT:
      alert(
        "La demande pour obtenir la localisation de l'utilisateur a expiré."
      );
      break;
    case error.UNKNOWN_ERROR:
      alert("Une erreur inconnue est survenue.");
      break;
  }
}
