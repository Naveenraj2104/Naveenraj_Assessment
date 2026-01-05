import http from "k6/http";
import { sleep } from "k6";

export let options = {
  stages: [
    { duration: "10s", target: 10 }, // ramp-up to 10 users
    { duration: "20s", target: 50 }, // ramp-up to 50 users
    { duration: "10s", target: 0 }, // ramp-down
  ],
};

export default function () {
  let url =
    "https://authen.79club8.club/w-portapi/bank/getBankAccount?bankCode=VCB&amount=199999&cp=R&cl=R&pf=web";

  let params = {
    headers: {
      accept: "*/*",
      origin: "https://play.79club8.club",
      "user-agent": "Mozilla/5.0",
      cookie: ".79.club=s%3AkHnuhVq2IPB3HKkWeFs7...",
    },
  };

  let res = http.get(url, params);

  // Print response body only if error
  if (res.status !== 200) {
    console.error("Failed:", res.status, res.body);
  }
  sleep(1);
}
