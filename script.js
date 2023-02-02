function searchInternships() {
    const searchTerm = document.getElementById("search").value;
    const cards = document.querySelectorAll(".card");
  
    for (const card of cards) {
      const title = card.querySelector("h2").textContent;
      const description = card.querySelector("p").textContent;
      if (!title.includes(searchTerm) && !description.includes(searchTerm)) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }

    }
}
      

  