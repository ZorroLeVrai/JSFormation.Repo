function* creerIterateur(nb) {
  for (let indexSuivant = 0; indexSuivant < nb; ++indexSuivant)
    yield indexSuivant;
}

