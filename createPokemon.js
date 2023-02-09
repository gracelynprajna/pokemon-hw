import express from "express";
import { Low } from "lowdb"; 
import { JSONFile } from "lowdb/node";
import setupPokemonRoutes from "./controllers/pokemonRoutes.js";


export default async function createPokemon() {
  const adapter = new JSONFile("db.json");
  const db = new Low(adapter);

  await db.read();

  db.data = db.data || { pokemons: [] };

  await db.write();

  const app = express();

  app.use(express.json());
  app.use('/pokemon', setupPokemonRoutes(db))

  return app;
}