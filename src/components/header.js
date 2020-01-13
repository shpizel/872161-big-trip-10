import DateTimeUtils from "../utils/datetime";

export const getTripDaysTemplate = () => `<ul class="trip-days"></ul>`;

export const getTripDayHTML = () => `<li class="trip-days__item  day">
  <div class="day__info">
    <span class="day__counter">1</span>
    <time class="day__date" datetime="2019-03-18">MAR 18</time>
  </div>
  <ul class="trip-events__list"></ul>
</li>`;

export const getTripInfoTemplate = (cities, dates) => `<div class="trip-info__main">
  <h1 class="trip-info__title">${cities.join(` &mdash; `)}</h1>
  <p class="trip-info__dates">${dates}</p>
</div>`;

const getOfferSnippet = (items) => items.map((offer) => `<li class="event__offer">
  <span class="event__offer-title">${offer.name}</span>
  &plus;
  &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
</li>`).join(``);

const getOptionsSumPrice = (options) => {
  let ret = 0;
  options.forEach((option) => {
    ret += option.price;
  });
  return ret;
};

export const getTripPointTemplate = ({eventType, date, options}) => `<li class="trip-events__item">
  <div class="event">
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${eventType.icon}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${eventType.text} airport</h3>

    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${DateTimeUtils.getDateFormat(date)}T${DateTimeUtils.getTimeFormat(date)}">${DateTimeUtils.getTimeFormat(date)}</time>
        &mdash;
        <time class="event__end-time" datetime="${DateTimeUtils.getDateFormat(date)}T${DateTimeUtils.getTimeFormat(date)}">${DateTimeUtils.getTimeFormat(date)}</time>
      </p>
      <p class="event__duration">1H 30M</p>
    </div>

    <p class="event__price">&euro;&nbsp;<span class="event__price-value">${getOptionsSumPrice(options)}</span></p>

    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${getOfferSnippet(options)}
    </ul>

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;
