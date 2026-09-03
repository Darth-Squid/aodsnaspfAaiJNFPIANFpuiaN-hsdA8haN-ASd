emailjs.init("MNISgcK-Hfj-rsOI0");

function uploadGuess() {
    const answer = document.getElementById('answer-input-box').value;

    if (!answer.trim()) {
        alert("Please enter a guess first.");
        return;
    }

    emailjs.send("service_z2v0vtf", "template_v359guo", {
        guess: answer,
        email: "benjaminburton2020@outlook.com",
        name: document.getElementById("name-input-box").value,
    })
        .then(() => {
            alert("Guess sent!");
            document.getElementById('answer-input-box').value = "";
        })
        .catch((error) => {
            console.error("Failed to send:", error.text || error);
            alert("Something went wrong — try again.");
        });
}