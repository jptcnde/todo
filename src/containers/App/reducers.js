export const update = (state, prop, val) => ({
  ...state,
  [prop]: val
});

export const updateConfiguration = (state, { settings }) => ({
  ...state,
  settings
});
