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
  const links = [
  {
    title: "Archived Field Database",
    url: "https://carmenravanya616-droid.github.io/New-site/",
    category: "External",
    keywords: "cryptid anomaly field sightings archive"
  },

  {
    title: "Internal Medical Research Notes",
    url: "#",
    category: "Internal",
    keywords: "cellular tissue regeneration studies"
  }
];

const searchInput = document.getElementById("search");
const linkList = document.getElementById("link-list");

function displayLinks(results) {
  linkList.innerHTML = "";

  results.forEach(link => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${link.url}" target="_blank">${link.title}</a>`;
    linkList.appendChild(li);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  const filtered = links.filter(link =>
    link.title.toLowerCase().includes(query) ||
    link.keywords.toLowerCase().includes(query)
  );

  displayLinks(filtered);
});

// show all links at page load (optional)
displayLinks(links);
});
