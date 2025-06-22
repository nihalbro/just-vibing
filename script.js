function applyVibe(weather) {
  let pokeName = "", pokeQuote = "", pokeImg = "", youtubeLink = "";
  let evolvedName = "", evolvedQuote = "", evolvedImg = "";

  document.body.style.backgroundColor = "#000";
  document.body.style.color = "#fff";

  // Base setup depending on weather
  if (weather.includes("clear")) {
    pokeName = "Pikachu ⚡";
    pokeQuote = "Let’s vibe and recharge today!";
    pokeImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png";
    evolvedName = "Raichu ⚡⚡";
    evolvedQuote = "Fully charged and vibin’ harder!";
    evolvedImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png";
    youtubeLink = "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1";
  } else if (weather.includes("rain")) {
    pokeName = "Squirtle 💧";
    pokeQuote = "Let it pour. Let's vibe.";
    pokeImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png";
    evolvedName = "Blastoise 🌊";
    evolvedQuote = "Now we're making waves!";
    evolvedImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png";
    youtubeLink = "https://www.youtube.com/embed/21qNxnCS8WU?autoplay=1";
  } else if (weather.includes("cloud")) {
    pokeName = "Snorlax 😴";
    pokeQuote = "Cloudy days = nap + lo-fi.";
    pokeImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png";
    evolvedName = "Mega Snorlax 💤";
    evolvedQuote = "This nap has gone legendary.";
    evolvedImg = "https://img.pokemondb.net/artwork/vector/snorlax.png"; // Just reuse — no mega art
    youtubeLink = "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1";
  } else {
    pokeName = "Bulbasaur 🌱";
    pokeQuote = "Every weather’s a vibe.";
    pokeImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
    evolvedName = "Ivysaur 🌿";
    evolvedQuote = "From seed to vibe warrior!";
    evolvedImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png";
    youtubeLink = "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1";
  }

  nameEl.textContent = `Your Pokémon: ${pokeName}`;
  messageEl.textContent = pokeQuote;
  pokemon.src = pokeImg;
  pokemon.style.display = "block";
  iframe.src = youtubeLink;

  nameEl.classList.add("visible");
  messageEl.classList.add("visible");

  let tapCount = 0;
  let evolved = false;

  pokemon.addEventListener("click", () => {
    tapCount++;
    pokemon.classList.add("pokemon-wiggle");
    setTimeout(() => {
      pokemon.classList.remove("pokemon-wiggle");
    }, 600);

    // Show fun message before evolution
    const messages = [
      "Pika Pika! That tickles ⚡",
      "Still vibing... 😎",
      "What’s this glow?! ✨"
    ];
    reactionText.textContent = messages[Math.min(tapCount - 1, messages.length - 1)];
    reactionText.style.display = "block";

    // On 3rd click, evolve
    if (tapCount === 3 && !evolved) {
      pokemon.src = evolvedImg;
      nameEl.textContent = `Your Pokémon: ${evolvedName}`;
      messageEl.textContent = evolvedQuote;
      evolved = true;
      reactionText.textContent = "🎉 Your Pokémon evolved!";
    }
  });
}
