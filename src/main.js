/* Base imports */
import {removeNode} from './utils/utils';
import {render, RenderType} from './utils/render';
import Random from './utils/random';
import DateTimeUtils from './utils/datetime';

/* Mocks */
import {menuItems} from "./mock/menu";
import {filters} from "./mock/filters";
import {cities} from "./mock/geo";
import {eventTypes, tripPointOptions} from "./mock/items";

/* Components */
import {getMenuTemplate, getFiltersFormTemplate} from './components/menu';
import {getLoadingTemplate} from "./components/messages";

import {getCreateFormTemplate, getEditFormTemplate, getSorterFormTemplate} from './components/forms';
import {getTripPointTemplate, getTripDayHTML, getTripDaysTemplate, getTripInfoTemplate} from './components/header';

const newEventButton = document.querySelector(`.trip-main__event-add-btn`);
const tripControlsNode = document.querySelector(`.trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const tripInfoNode = document.querySelector(`.trip-main__trip-info`);

newEventButton.disabled = true;

render(getMenuTemplate(menuItems), tripControlsNode);
render(getFiltersFormTemplate(filters), tripControlsNode);
render(getLoadingTemplate(), tripEvents);
setTimeout(() => {
  removeNode(document.querySelector(`.trip-events__msg`));
  newEventButton.disabled = false;

  render(getTripInfoTemplate(cities, `Mar 18&nbsp;&mdash;&nbsp;21`), tripInfoNode, RenderType.AFTERBEGIN);
  render(getSorterFormTemplate(), tripEvents);
  render(getCreateFormTemplate(), tripEvents);
  render(getTripDaysTemplate(), tripEvents);

  const tripDaysNode = document.querySelector(`.trip-days`);
  render(getTripDayHTML(), tripDaysNode);

  const tripEventsListNode = document.querySelector(`.trip-events__list`);
  render(getEditFormTemplate(), tripEventsListNode);

  for (let i = 0; i < 3; i++) {
    let randomPointData = {
      'eventType': Random.getRandomChoice(eventTypes),
      'cities': cities,
      'options': Random.getRandomChoice(tripPointOptions, Random.getRandomInteger(1, tripPointOptions.length - 1)),
      'date': DateTimeUtils.getRandomDate(),
    };
    render(getTripPointTemplate(randomPointData), tripEventsListNode);
  }

}, 500);
