function submitData() {
    const jsonInput = document.getElementById('json-input').value;
    const responseFilter = document.getElementById('response-filter').value;
    const outputElement = document.getElementById('response-output');

    let parsedData;
    try {
        parsedData = JSON.parse(jsonInput);
        if (!parsedData.data || !Array.isArray(parsedData.data)) {
            throw new Error("Invalid JSON: 'data' field must be an array.");
        }
    } catch (error) {
        outputElement.innerHTML = `<p id="error-message">Error: ${error.message}</p>`;
        return;
    }

    const numbers = extractNumbers(parsedData.data);
    const alphabets = extractAlphabets(parsedData.data);
    const highestLowercaseAlphabet = findHighestLowercase(alphabets);

    const data = {
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    };

    displayOutput(data, responseFilter, outputElement);
}

function extractNumbers(data) {
    return data.filter(item => !isNaN(item));
}

function extractAlphabets(data) {
    return data.filter(item => isNaN(item) && typeof item === 'string');
}

function findHighestLowercase(alphabets) {
    return alphabets.filter(item => item === item.toLowerCase()).sort().pop();
}

function displayOutput(data, filter, element) {
    let output;
    switch (filter) {
        case 'numbers':
            output = `<p>Numbers: ${JSON.stringify(data.numbers)}</p>`;
            break;
        case 'alphabets':
            output = `<p>Alphabets: ${JSON.stringify(data.alphabets)}</p>`;
            break;
        case 'highest_lowercase_alphabet':
            output = `<p>Highest Lowercase Alphabet: ${data.highest_lowercase_alphabet || 'None'}</p>`;
            break;
        default:
            output = '<p>No valid selection made.</p>';
    }
    element.innerHTML = output;
}
