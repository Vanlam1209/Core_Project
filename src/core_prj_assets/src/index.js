import { core_prj } from "../../declarations/core_prj";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await core_prj.greet(name);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
});
