let apiUrl = "https://sv443.net/jokeapi/v2/joke/Any";

document.getElementById('btn').onclick = function () {
    axios.get(apiUrl)
        .then(res => {
            let jokeElement = document.getElementById('joke-text');
            if (res.data.type === "single") {
                jokeElement.innerHTML = res.data.joke;
            } else if (res.data.type === "twopart") {
                jokeElement.innerHTML = `<strong>${res.data.setup}</strong><br>${res.data.delivery}`;
            }
        })
        .catch(error => {
            document.getElementById('joke-text').innerHTML = "⚠️ Failed to load joke.";
            console.error(error);
        });
};
