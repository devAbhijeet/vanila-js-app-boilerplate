export const Storage = {
  getData: (key) => {
    try {
      const value = localStorage.getItem(key);
      try {
        return JSON.parse(value);
      }
      catch (e) {
        return value;
      }
    }
    catch (e) {
      return null;
    }
  },
  setData: (key, value) => {
    if (typeof (value) === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    }
    else {
      localStorage.setItem(key, value);
    }
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};

export const SessionStorage = {
  getData: (key) => {
    try {
      const value = sessionStorage.getItem(key);
      try {
        return JSON.parse(value);
      }
      catch (e) {
        return value;
      }
    }
    catch (e) {
      return null;
    }
  },
  setData: (key, value) => {
    if (typeof (value) === 'object') {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
    else {
      sessionStorage.setItem(key, value);
    }
  },
  remove: (key) => {
    sessionStorage.removeItem(key);
  },
  clear: () => {
    sessionStorage.clear();
  },
};
