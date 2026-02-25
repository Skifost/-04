const resultsElement = document.getElementById('results');

function logResult(data) {
    const result = JSON.stringify(data, null, 2);
    resultsElement.textContent = result;
    console.log('Результат:', data);
}

async function testGet() {
    try {
        const response = await fetch('/api/data?name=Тест&id=123&active=true');
        const data = await response.json();
        logResult(data);
    } catch (error) {
        logResult({ error: error.message });
    }
}

async function testGetEcho() {
    const message = document.getElementById('getMessage').value;
    try {
        const response = await fetch(`/api/echo?message=${encodeURIComponent(message)}`);
        const data = await response.json();
        logResult(data);
    } catch (error) {
        logResult({ error: error.message });
    }
}

async function testPost() {
    try {
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: 'Иван',
                email: 'ivan@example.com',
                items: ['item1', 'item2', 'item3'],
                settings: {
                    notifications: true,
                    theme: 'dark'
                }
            })
        });
        const data = await response.json();
        logResult(data);
    } catch (error) {
        logResult({ error: error.message });
    }
}

async function testPostEcho() {
    const message = document.getElementById('postMessage').value;
    try {
        const response = await fetch('/api/echo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        logResult(data);
    } catch (error) {
        logResult({ error: error.message });
    }
}

async function test404() {
    try {
        const response = await fetch('/api/not-found');
        const data = await response.json();
        logResult(data);
    } catch (error) {
        logResult({ error: error.message });
    }
}
