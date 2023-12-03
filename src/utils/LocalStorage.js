export const saveToLocalStorage = (name, array) => {
  try {
    const arrayString = JSON.stringify(array);
    localStorage.setItem(name, arrayString);
  } catch (error) {
    console.error("Error saving array to localStorage:", error);
  }
};

export const getFromLocalStorage = (name) => {
  try {
    const arrayString = localStorage.getItem(name);
    if (arrayString) {
      return JSON.parse(arrayString);
    }
  } catch (error) {
    console.error("Error getting array from localStorage:", error);
  }
  return [];
};
