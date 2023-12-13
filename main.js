// Updates the total number of visitors.
document.addEventListener('DOMContentLoaded', function () {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    fetch("API-INVOKE-URL", requestOptions)
    .then(response => response.text())
    .catch(error => console.log('error', error));

});

// Gets the total number of visitors.
document.addEventListener('DOMContentLoaded', function () {
    fetch('API-INVOKE-URL') // Replace with your actual API Gateway Invoke URL
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('visitor-count').innerText = data.body;
        })
        .catch(error => console.error('Error:', error));
});

