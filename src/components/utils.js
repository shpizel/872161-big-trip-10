const render = (html, target, where = `beforeend`) => target.insertAdjacentHTML(where, html);

export {render};
