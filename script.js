fetch("http://api.sr.se/api/v2/channels?format=json&size=100")
  .then((response) => response.json())
  .then((data) => {
    const channels = data.channels;
    const container = document.getElementById("channels-container");

    channels.forEach((channel) => {
      // Create a channel container
      const channelDiv = document.createElement("div");
      channelDiv.classList.add("channel");
      channelDiv.style.backgroundColor = channel.color;

      // Left column: Image
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("channel-image");
      const channelImage = document.createElement("img");
      channelImage.src = channel.image || "placeholder.png"; // Use placeholder if no image
      channelImage.alt = channel.name;
      imageDiv.appendChild(channelImage);

      // Right column: Info and Audio
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("channel-info");

      const channelName = document.createElement("h3");
      channelName.classList.add("channel-name");
      channelName.textContent = channel.name;

      const audioPlayer = document.createElement("audio");
      audioPlayer.classList.add("audio-player");
      audioPlayer.controls = true;
      audioPlayer.src = channel.liveaudio.url;

      // Append name and audio player to the info div
      infoDiv.appendChild(channelName);
      infoDiv.appendChild(audioPlayer);

      // Append the image and info divs to the channel container
      channelDiv.appendChild(imageDiv);
      channelDiv.appendChild(infoDiv);

      // Append the channel to the main container
      container.appendChild(channelDiv);
    });
  });
