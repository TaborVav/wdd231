
console.log("JS is running");

import { getParkData, parkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

const parkData = getParkData();

// ------------------------------
// ----- In templates.mjs ------
// ------------------------------
// function parkInfoTemplate(info) {
//   return `<a href="/" class="hero-banner__title">${info.name}</a>
//     <p class="hero-banner__subtitle">
//       <span>${info.designation}</span>
//       <span>${info.states}</span>
//     </p>`;
// }
// ------------------------------

// ------------------------------
// ----- In setHeaderFooter.mjs ------
// ------------------------------
// function setHeaderInfo(data) {
//   // insert data into disclaimer section
//   const disclaimer = document.querySelector(".disclaimer > a");
//   disclaimer.href = data.url;
//   disclaimer.innerHTML = data.fullName;
//   // update the title of the site. Notice that we can select things in the head just like in the body with querySelector
//   document.querySelector("head > title").textContent = data.fullName;
//   // set the banner image
//   document.querySelector(".hero-banner > img").src = data.images[0].url;
//   // use the template function above to set the rest of the park specific info in the header
//   document.querySelector(".hero-banner__content").innerHTML =
//     parkInfoTemplate(data);
// }
// ------------------------------


// 1
function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `
    <h1>${data.fullName}</h1>
    <p>${data.description}</p>
  `;
}

// ------------------------------
// ----- In templates.mjs ------
// ------------------------------
// function mediaCardTemplate(info) {
//   return `
//     <div class="media-card">
//       <a href="${info.link}">
//         <img src="${info.image}" alt="${info.name}" class="media-card__img">
//         <h3 class="media-card__title">${info.name}</h3>
//       </a>
//       <p>${info.description}</p>
//     </div>
//   `;
// }
// ------------------------------


// ------------------------------
// ----- In parkService.mjs ------
// ------------------------------
// export const parkInfoLinks = [
//   {
//     name: "Current Conditions &#x203A;",
//     link: "conditions.html",
//     image: parkData.images[2].url,
//     description: "See what conditions to expect in the park before leaving on your trip!"
//   },
//   {
//     name: "Fees and Passes &#x203A;",
//     link: "fees.html",
//     image: parkData.images[3].url,
//     description: "Learn about the fees and passes that are available."
//   },
//   {
//     name: "Visitor Centers &#x203A;",
//     link: "visitor_centers.html",
//     image: parkData.images[9].url,
//     description: "Learn about the visitor centers in the park."
//   }
// ];
// ------------------------------------

// 4
function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEl.innerHTML = html.join("");
}


// function getMailingAddress(addresses) {
//   const mailing = addresses.find((address) => address.type === "Mailing");
//   return mailing;
// }


// function getVoicePhone(numbers) {
//   const voice = numbers.find((number) => number.type === "Voice");
//   return voice.phoneNumber;
// }


// function footerTemplate(info) {
//   const mailing = getMailingAddress(info.addresses);
//   const voice = getVoicePhone(info.contacts.phoneNumbers);

//   return `
//     <section class="contact">
//       <h3>Contact Info</h3>
//       <h4>Mailing Address:</h4>
//       <div>
//         <p>${mailing.line1}</p>
//         <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
//       </div>
//       <h4>Phone:</h4>
//       <p>${voice}</p>
//     </section>
//   `;
// }

// ------------------------------
// ----- In setHeaderFooter.mjs ------
// ------------------------------
// function setFooter(data) {
//   const footerEl = document.querySelector("#park-footer");
//   footerEl.innerHTML = footerTemplate(data);
// }
// ------------------------------



setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);
// setFooter(parkData);

// setHeaderInfo(parkData);
// setParkIntro(parkData);
// setParkInfo(parkInfoLinks);
// setParkFooter(parkData);





// setHeaderFooter(parkData);
// setParkIntro(parkData);
// setParkInfoLinks(parkInfoLinks);

