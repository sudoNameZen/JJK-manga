document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector(".card"); // Make sure this class exists in your HTML
  
    if (!container) {
      console.error("Container element not found in the DOM.");
      return;
    }
  
    const url = "./assets/characters.json";
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Fetched JSON:", data); // Debugging step to see actual JSON
  
      if (!data.data || !Array.isArray(data.data)) {
        throw new Error("Invalid JSON structure: 'data' key must contain an array.");
      }
  
      // Loop through each object in the array and create an <img> tag
      data.data.forEach((item) => {
        if (item.name) {
          const divElement = document.createElement("div");
            divElement.className = "card";
            divElement.innerHTML = `
            <div>${item.name}</div>
            <div>${item.grade}</div>`;
         
          container.appendChild(divElement); // Add image to the container
        }
      });
    } catch (error) {
      console.error("Error fetching the image:", error);
    }
  });
  