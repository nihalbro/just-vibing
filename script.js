document.getElementById("startBtn").addEventListener("click", () => {
  const key = "971b5615aa6256c4448a3daa5957f9e5";
  const quoteEl = document.querySelector(".quote");
  const iframe = document.getElementById("youtube-lofi");
  const pokemon = document.getElementById("pokemon");

  if (!navigator.geolocation) {
    quoteEl.textContent = "Location not supported by your browser.";
    return;
  }

  navigator.geolocation.getCurrentPosition(async ({ coords }) => {
    const { latitude, longitude } = coords;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`
      );

      const data = await res.json();
      const weather = data.weather[0].main.toLowerCase();

      quoteEl.textContent = `Weather: ${weather}`;
      quoteEl.classList.add("visible");

      applyVibe(weather);
    } catch (err) {
      quoteEl.textContent = "Could not fetch weather data.";
      console.error("Weather fetch failed:", err);
    }
  });

  function applyVibe(weather) {
    if (weather.includes("clear")) {
      document.body.style.backgroundColor = "#fff7d6";
      document.body.style.color = "#111";
      iframe.src = "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1";
      pokemon.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"; // Pikachu
    } else if (weather.includes("rain")) {
      document.body.style.backgroundColor = "#2f3e46";
      document.body.style.color = "#cbd5e1";
      iframe.src = "https://www.youtube.com/embed/B4nqECN6o_c?autoplay=1";
      pokemon.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"; // Squirtle
    } else if (weather.includes("cloud")) {
      document.body.style.backgroundColor = "#d1d5db";
      document.body.style.color = "#1f2937";
      iframe.src = "https://www.youtube.com/embed/7NOSDKb0HlU?autoplay=1";
      pokemon.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"; // Snorlax
    } else if (weather.includes("snow")) {
      document.body.style.backgroundColor = "#f0f9ff";
      document.body.style.color = "#0f172a";
      iframe.src = "https://www.youtube.com/embed/9UMxZofMNbA?autoplay=1";
      pokemon.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png"; // Articuno
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#111827";
      iframe.src = "https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1";
      pokemon.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"; // Ditto
    }

    iframe.width = "560";
    iframe.height = "315";
    iframe.classList.add("visible");

    pokemon.style.display = "block";
  }
});
