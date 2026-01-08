const cryptids = [
  {
    name: "MOTHMAN",
    location: "POINT PLEASANT, WV",
    threat: "UNKNOWN",
    description: "Red-eyed entity reported prior to infrastructure collapse."
  },
  {
    name: "THE CRAWLER",
    location: "APPALACHIAN REGION",
    threat: "HIGH",
    description: "Pale humanoid. Audio reports inconsistent."
  },
  {
    name: "BLACK SHUCK",
    location: "ENGLAND",
    threat: "MODERATE",
    description: "Spectral canine associated with storms."
  }
];

const search = document.getElementById("search");
const results = document.getElementById("results");

search.addEventListener("input", () => {
  const query = search.value.toLowerCase();
  results.innerHTML = "";

  cryptids
    .filter(c => c.name.toLowerCase().includes(query))
    .forEach(c => {
      const div = document.createElement("div");
      div.className = "cryptid";
      div.innerHTML = `
        <strong>${c.name}</strong><br>
        LOCATION: ${c.location}<br>
        THREAT LEVEL: ${c.threat}<br>
        <em>${c.description}</em>
      `;
      results.appendChild(div);
    });
});
