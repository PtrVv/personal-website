document.getElementById("copyImage").addEventListener("click", function () {
    const text = document.getElementById("textToCopy").textContent;

    const tempInput = document.createElement("textarea");
    tempInput.value = text;

    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("Text copied to clipboard!");
});
