fetch('http://localhost:3000')
    .then(response => response.json())
    .then(data => document.write(data.message))