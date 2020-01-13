export const RenderType = Object.freeze({
  BEFOREEND: `beforeend`,
  AFTERBEGIN: `afterbegin`,
  AFTEREND: `afterend`
});

export const render = (html, target, where = RenderType.BEFOREEND) => target.insertAdjacentHTML(where, html);

