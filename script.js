console.log("Getting a secret, then making a quote");

// const out = document.querySelector("div#quote");
    
function test() {
    console.log("__BEARER_TOKEN__");
    return "__BEARER_TOKEN__";
};

const token = test();
console.log(token);

const API_BASE_URL = "https://nf-api.onrender.com/";
const api = `${API_BASE_URL}/api/v1/quotes`;

const options = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
};

console.log(api, options);
getStuff(api, options);

async function getStuff(api, options) {
    const response = await fetch(api, options);
    console.log(response);
    const data = await response.json();
    console.log(data);    
}
