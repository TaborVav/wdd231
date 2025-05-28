import spritePath from '../images/sprite.symbol.svg'; // Vite will track this path


export function mediaCardTemplate(info) {
    return `
      <div class="media-card">
        <a href="${info.link}">
          <img src="${info.image}" alt="${info.name}" class="media-card__img">
          <h3 class="media-card__title">${info.name}</h3>
        </a>
        <p>${info.description}</p>
      </div>
    `;
  }
  
  export function parkInfoTemplate(info) {
    return `
      <a href="/" class="hero-banner__title">${info.name}</a>
      <p class="hero-banner__subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
      </p>
    `;
  }
  
  export function alertTemplate(alert) {
    let alertType = "";
  
    switch (alert.category) {
      case "Park Closure":
        alertType = "closure";
        break;
      default:
        alertType = alert.category.toLowerCase();
    }
  
    return `<li class="alert">
      <svg class="icon" focusable="false" aria-hidden="true">
        <use xlink:href="${spritePath}#alert-${alertType}"></use>  
      </svg>
      <div>
        <h3 class="alert-${alertType}">${alert.title}</h3>
        <p>${alert.description}</p>
      </div>
    </li>`;
  }
  

  
  export function visitorCenterTemplate(center) {
    return `
      <li class="visitor-center">
        <h3>${center.name}</h3>
        <p>${center.description}</p>
        <p><strong>Directions:</strong> ${center.directionsInfo}</p>
      </li>
    `;
  }
  

  export function activityTemplate(activity) {
  return `<li>${activity.name}</li>`;
}
