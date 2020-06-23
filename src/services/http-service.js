const API_URL = `https://api.github.com/users/`

const get = async(params) => {
  const FETCH_URL = API_URL + params
  let response = await fetch(FETCH_URL, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  return response.json()
}

export {
  get,
}