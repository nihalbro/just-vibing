function applyVibe(weather) {
  let pokeName = "", pokeQuote = "", pokeImg = "", youtubeLink = "";

  // Always black background
  document.body.style.backgroundColor = "#000";
  document.body.style.color = "#fff";

  if (weather.includes("clear")) {
    pokeName = "Pikachu ⚡";
    pokeQuote = "Let’s vibe and recharge today!";
    pokeImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png";
    youtubeLink = "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1";
  } else if (weather.includes("rain")) {
    pokeName = "Squirtle 💧";
    pokeQuote = "Let it pour. Let's vibe.";
    pokeImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png";
    youtubeLink = "https://www.youtube.com/embed/21qNxnCS8WU?autoplay=1";
  } else if (weather.includes("cloud")) {
    pokeName = "Snorlax 😴";
    pokeQuote = "Cloudy days = nap + lo-fi.";
    pokeImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png";
    youtubeLink = "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1";
  } else {
    pokeName = "Bulbasaur 🌱";
    pokeQuote = "Every weather’s a vibe.";
    pokeImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
    youtubeLink = "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1";
  }

  nameEl.textContent = `Your Pokémon: ${pokeName}`;
  messageEl.textContent = pokeQuote;

  nameEl.classList.add("visible");
  messageEl.classList.add("visible");

  pokemon.src = pokeImg;
  pokemon.style.display = "block";

  iframe.src = youtubeLink;
}
