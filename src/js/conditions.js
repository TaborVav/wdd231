
import { getVisitorCenterData, getParkData, getParkAlerts } from "./parkService.mjs";
import { alertTemplate, visitorCenterTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

function setVisitorCenters(centers) {
    const container = document.querySelector(".visitor-centers details ul");
    container.innerHTML = "";
    const html = centers.map(visitorCenterTemplate).join("");
    container.insertAdjacentHTML("beforeend", html);
  }
  

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}

async function init() {
    const parkData = await getParkData();
    const alerts = await getParkAlerts(parkData.parkCode);
    const visitorCenters = await getVisitorCenterData(parkData.parkCode);
  
    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(visitorCenters);
  }
  
  init();
  

