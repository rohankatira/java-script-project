const btn = document.querySelector(".btn");
const inputElement = document.querySelector(".inputElement");

btn.addEventListener("click", getData);
inputElement.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getData();
  }
});

function getData() {
  const country = inputElement.value.trim();

  if (!country) {
    alert("Please enter a country name.");
    return;
  }

  fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Country not found");
      }
      return response.json();
    })
    .then((data) => {
      document.querySelector(".activeCases").innerHTML =
        data.active?.toLocaleString() ?? "N/A";
      document.querySelector(".newCases").innerHTML =
        data.todayCases != null ? `+${data.todayCases.toLocaleString()}` : "N/A";
      document.querySelector(".recoveredCases").innerHTML =
        data.recovered?.toLocaleString() ?? "N/A";
      document.querySelector(".totalCases").innerHTML =
        data.cases?.toLocaleString() ?? "N/A";
      document.querySelector(".totalDeaths").innerHTML =
        data.deaths?.toLocaleString() ?? "N/A";
      document.querySelector(".totalTests").innerHTML =
        data.tests?.toLocaleString() ?? "N/A";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Could not fetch data. Please check the country name.");
    });
}
