import {render} from './components/utils.js';
import {getMenuHTML} from './components/menu.js';
import {getCreateFormHTML, getEditFormHTML, getFiltersFormHTML, getSorterFormHTML} from './components/forms.js';
import {getTripCardHTML, getTripDayHTML, getTripDaysHTML, getTripInfoHTML} from './components/trip.js';

const tripInfoNode = document.querySelector(`.trip-main__trip-info`);
render(getTripInfoHTML(), tripInfoNode, `afterbegin`);

const tripControlsNode = document.querySelector(`.trip-controls`);
render(getMenuHTML(), tripControlsNode);
render(getFiltersFormHTML(), tripControlsNode);

const tripEvents = document.querySelector(`.trip-events`);
render(getSorterFormHTML(), tripEvents);
render(getCreateFormHTML(), tripEvents);
render(getTripDaysHTML(), tripEvents);

const tripDaysNode = document.querySelector(`.trip-days`);
render(getTripDayHTML(), tripDaysNode);

const tripEventsListNode = document.querySelector(`.trip-events__list`);

render(getEditFormHTML(), tripEventsListNode);

for (let i = 0; i < 3; i++) {
  render(getTripCardHTML(), tripEventsListNode);
}
