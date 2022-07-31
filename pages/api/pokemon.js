const axios = require("axios");

async function handler(req, res) {
  const { method } = req;
  const URL = process.env.BACKEND_URL;
  const api = "/api/pokemon/team";

  const backend = URL + api;

  if (method === "GET") {
    await axios.get(backend).then((response) => {
      console.log("Data fetched successfully");
      res.status(200).send(response.data);
    });
  } else if (method === "POST") {
    const { pokemons } = req.body;

    await axios
      .post(backend, {
        pokemons,
      })
      .then((response) => {
        console.log("Team created");
        res.status(200).send(response.data);
      });
  }
}

export default handler;
