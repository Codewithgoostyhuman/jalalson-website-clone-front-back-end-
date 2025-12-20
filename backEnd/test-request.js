import fetch from "node-fetch";

async function makeRequest() {
  try {
    const response = await fetch("http://localhost:5000/data", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ name: "Zeeshan" }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error making request:", error);
  }
}
makeRequest();