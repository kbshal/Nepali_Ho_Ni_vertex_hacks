fetch('https://example.com/submit-form', {
  method: 'POST',
  body: new FormData(document.getElementById('formId'))
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));