import axios from "axios";
import { test, expect } from "@playwright/test";

test("API: Login returns 200 & token", async () => {
  const response = await axios.post("https://login.79club8.club/acc/Login", {
    username: "zara01",
    password: "z12345",
  });
  console.log("TOKEN:", response.data.token);
  expect(response.status).toBe(200);
  expect(response.data.token).toBeTruthy();
});
