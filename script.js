function classify() {
    const input = document.getElementById("userInput").value.toLowerCase();
    let result = "Не удалось определить";

    if (input.includes("мяч")) {
        result = "мяч";
    } else if (input.includes("ракетка")) {
        result = "ракетка";
    } else if (input.includes("штанга")) {
        result = "штанга";
    } else if (input.includes("скакалка")) {
        result = "скакалка";
    }

    document.getElementById("result").textContent = "Распознанный предмет: " + result;
}
