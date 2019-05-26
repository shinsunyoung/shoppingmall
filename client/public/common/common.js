function ajaxGet(uri, callback) {
    fetch(uri).then(function (res) {
        if (res.ok) {
            res.json().then(callback);
        } else {
            console.log("Looks like the response wasn't perfect, got status", res.status);
        }
    }, function (e) {
        console.log("Fetch failed!", e);
    });
}



function ajaxPost(uri, body, callback) {
    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(function (res) {
        if (res.ok) {
            res.json().then(callback);
        } else {
            console.log("Looks like the response wasn't perfect, got status", res.status);
        }
    }, function (e) {
        console.log("Fetch failed!", e);
    });
}