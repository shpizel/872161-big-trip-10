export const getMenuTemplate = (menuItems) => `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${menuItems.map(({name, isActive}) => `<a class="trip-tabs__btn ${isActive ? `trip-tabs__btn--active` : ``}" href="#">${name}</a>`).join(`\n`)}
</nav>`;

const getFilterSnippet = (filter, isChecked) => {
  const {name, title} = filter;
  return `<div class="trip-filters__filter">
    <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name}" ${isChecked ? `checked` : ``}>
    <label class="trip-filters__filter-label" for="filter-${name}">${title}</label>
  </div>`;
};

export const getFiltersFormTemplate = (filters) => {
  const filtersSnippet = filters.map((it, i) => getFilterSnippet(it, i === 0)).join(`\n`);
  return `<form class="trip-filters" action="#" method="get">
    ${filtersSnippet}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;
};
