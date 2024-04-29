function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, bodu: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
