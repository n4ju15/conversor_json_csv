const converterForm = document.querySelector("#converterForm");
const converterInput = document.querySelector("#converterInput");
const jsonToCsvButton = document.querySelector("#jsonToCsvButton");
const csvToJsonButton = document.querySelector("#converterForm");

function jsonToCsv(json) {
    const headers = Object.keys[json[0]];
    const csvRows = [];

    csvRows.push(headers.join(","));

    console.log(csvRows);

    for (const row of json) {
        const values = headers.map((header) => {
            let value = row[header];

            console.log(value);
        });
    }
}

jsonToCsvButton.addEventListener("click", jsonToCsv);

//Criando CSV de JSON 3:44 min