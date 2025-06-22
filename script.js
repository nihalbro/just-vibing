// script.js
(async () => {
  const key = "971b5615aa6256c4448a3daa5957f9e";
  const quoteEl = document.querySelector(".quote");

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
      quoteEl.textContent = `Detected weather: ${weather}`;

      applyVibe(weather);
    } catch (err) {
      quoteEl.textContent = "Could not fetch weather data.";
      console.error("Weather fetch failed:", err);
    }
  });

  function applyVibe(weather) {
    const audio = document.getElementById("vibe-audio");

    if (weather.includes("clear")) {
      document.body.style.backgroundColor = "#fff7d6";
      document.body.style.color = "#111";
      audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";
    } else if (weather.includes("rain")) {
      document.body.style.backgroundColor = "#2f3e46";
      document.body.style.color = "#cbd5e1";
      audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3";
    } else if (weather.includes("cloud")) {
      document.body.style.backgroundColor = "#d1d5db";
      document.body.style.color = "#1f2937";
      audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3";
    } else if (weather.includes("snow")) {
      document.body.style.backgroundColor = "#f0f9ff";
      document.body.style.color = "#0f172a";
      audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#111827";
      audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3";
    }

    audio.play();
  }
})();
