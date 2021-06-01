import AsyncStorage from '@react-native-community/async-storage'
const STORAGE_KEY = 'TOKEN_USER'

const saveData = async (data) => {
    try {
    
      const response = await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      console.log('Data successfully saved')
      return response;
    } catch (e) {
        console.log('Failed to save the data to the storage')
    }
  }

const readData = async () => {
    try {
        const response = await AsyncStorage.getItem(STORAGE_KEY)
        return response;
    } catch (e) {
        console.log('Failed to fetch the data from storage')
    }
}

const clearStorage = async () => {
    try {
      await AsyncStorage.clear()
      console.log('Storage successfully cleared!')
      return true;
    } catch (e) {
        console.log('Failed to clear the async storage.')
        return false;
    }
  }

export {
    saveData,
    readData,
    clearStorage
}