const localisationElement = document.getElementById('localisation');

function getLocation()
{
  if (!navigator.geolocation)
    localisationElement.textContent = "Le navigateur ne supporte pas la géolocalisation";

  navigator.geolocation.getCurrentPosition(handleLocation);
}

function handleLocation(position)
{
  if (null == position)
    localisationElement.textContent = "La géolocalisation n'est pas disponible";

  localisationElement.textContent = `Localisation - Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`;
}