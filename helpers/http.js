export const post = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}

export const get = url => {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch(error => {
      console.log(error.message);
    })
}