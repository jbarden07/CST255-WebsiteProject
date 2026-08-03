"use strict";

/* Grid Insight - Week 5 JavaScript
   Two simple interaction features using the DOM */

/* Feature 1: Show or hide the Key Terms list */
let termsButton = document.getElementById("termsButton");
let termsList = document.getElementById("termsList");

termsButton.onclick = function () {
   if (termsList.style.display === "none") {
      termsList.style.display = "block";
      termsButton.textContent = "Hide Key Terms";
   } else {
      termsList.style.display = "none";
      termsButton.textContent = "Show Key Terms";
   }
};

/* Feature 2: Change page content with a button click */
let statusButton = document.getElementById("statusButton");

statusButton.onclick = function () {
   let statusMessage = document.getElementById("statusMessage");
   statusMessage.textContent = "No faults detected. Power ratio and plant performance is within set point values.";
};

