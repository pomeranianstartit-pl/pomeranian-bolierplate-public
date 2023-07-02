export const getLocalStorageState = (key, initialValue) => {
    console.log(localStorage, 'localStorage')

    const localStore = localStorage.getItem('store')

    if (!localStore) {
        setLocalStorageState(key, initialValue)
        return initialValue
    } else {
        const obj = JSON.parse(localStore)
        return obj.counter
    }

}

export const setLocalStorageState = (key, value) => {
    const localStore = JSON.parse(localStorage.getItem('store'))

    localStorage.setItem('store', JSON.stringify({ ...localStore, [key]: value }))
}