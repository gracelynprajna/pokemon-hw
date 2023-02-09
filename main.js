import createPokemon from "./createPokemon.js";


const server = await createPokemon()


server.listen(8080, function () {

    console.log("App running on http://localhost:8080");
  });
  