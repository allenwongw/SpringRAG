async function askQuestion() {
    const question = document.getElementById("question").value;
    const response = await fetch('/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: question })
    });
    if (response.ok) {
        const data = await response.json();
        document.getElementById("answer").innerText = data.answer;
    } else {
        document.getElementById("answer").innerText = "Error: " + response.statusText;
    }
}
