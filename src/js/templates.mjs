

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
  