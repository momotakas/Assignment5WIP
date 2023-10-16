const express = require('express');
const app = express();

const port = 8000;

app.listen(port, () => {
    console.log(`Staring server at ${port}`);
});

async function loadAir() {
    const aq_url = "https://api.openaq.org/v2/latest";
    const aq_response = await fetch(aq_url);
    const aq_data = await aq_response.json();
    console.log(aq_data);
}

loadAir();