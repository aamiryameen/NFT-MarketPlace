const AsyncStorage = require('localStorage')

const setData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
console.log('error while saving data in asyncstorage', e)
    }
  };

  const getData = async (val) => {
    try {
      const value = await AsyncStorage.getItem(val);
      if (value !== null) {
        // value previously stored
        return value
      }
    } catch (e) {
        console.log('erro while getting data ', e)
    }
  };

  export {setData, getData}