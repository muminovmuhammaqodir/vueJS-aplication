export const getItem = (key) => {
  try {
    return localStorage.getItem(JSON.parse(key));
  } catch (error) {
    console.log(error);
  }
};

export const setItem = (key, value) => {
  try {
    return localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};