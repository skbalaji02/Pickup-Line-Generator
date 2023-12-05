const pickuplines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Do you have a name, or can I call you mine?",
    "Are you a Wi-Fi signal? Because I'm feeling a connection.",
    "If you were a vegetable, you'd be a cute-cumber!",
    "Do you have a map? I keep getting lost in your eyes.",
    "Do you have a name, or can I call you mine? And by the way, I love food.",

    "If you were a vegetable, you'd be a cute-cumber!",

    "Are you a pizza? Because I want a pizza you!",

    "Do you believe in love at first bite?",

    "Are you a burger? Because you've got all the toppings I'm looking for.",

    "If you were a fruit, you'd be a fineapple.",

    "Do you have a sunburn, or are you always this hot? Maybe it's just the jalapeños in your eyes.",

    "If beauty were time, you’d be an eternity of chocolate."
];

function generatepickuplines() {
    const randomIndex = Math.floor(Math.random() * pickuplines.length);
    const line = pickuplines[randomIndex];
    document.getElementById("pickupline").textContent = line;
}