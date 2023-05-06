// To store a value
const storeData = (key: string, value: any) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

// To retrieve a value
const getData = (key: string) => {
  try {
    const value = localStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

const checkForSpecialChar = (text) => {
  if (/[\&\!\?\:\.\.\.,]/g.test(text)) {
    return true;
  }
  return false;
};

export { storeData, getData, checkForSpecialChar };
