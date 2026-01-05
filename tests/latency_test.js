const axios = require("axios");
const { performance } = require("perf_hooks");

async function testAPI() {
  const url =
    "https://authen.79club8.club/w-portapi/bank/getBankAccount?bankCode=VCB&amount=199999&cp=R&cl=R&pf=web";

  const headers = {
    accept: "*/*",
    origin: "https://play.79club8.club",
    "user-agent": "Mozilla/5.0",
    cookie: ".79.club=s%3AkHnuhVq2IPB3HKkWeFs7...",
  };

  const start = performance.now();

  try {
    const response = await axios.get(url, { headers });
    const latency = performance.now() - start;

    console.log("Status:", response.status);
    console.log("Response:", response.data);
    console.log("Latency:", latency.toFixed(2), "ms");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

testAPI();
