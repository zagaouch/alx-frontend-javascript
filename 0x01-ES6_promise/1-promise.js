function getFullResponseFromAPI(success) {
  const object = {
    status: 200,
    body: 'Success',
  };
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve(object);
    } else {
      reject('The fake API is not working currently');
    }
  });
}

module.exports = getFullResponseFromAPI;
