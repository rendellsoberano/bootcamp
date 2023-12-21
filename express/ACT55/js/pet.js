const ex = require("express");
const fs = require("fs");
const ps = require("./pet_list");
const cors = require("cors");

const app = ex();

app.use(ex.json());
app.use(cors());

const p = ps.pets;

app.get("/api/pet", (req, res) => {
  res.send(p);
});

app.get("/api/pet/:id", (req, res) => {
  let pet = false;
  for (let i = 0; i < p.length; i++) {
    if (p[i].id == Number(req.params.id)) {
      pet = p[i];
      break;
    }
  }

  if (pet) {
    res.send(pet);
    console.log(pet);
  } else {
    let err = "Pet not found!";
    res.status(404);
    res.send(err);
    console.error(err);
  }
});

app.get("/api/pets/list/species", (req, res) => {
  let species = [];
  for (let i = 0; i < p.length; i++) {
    if (species.includes(p[i].species) == false) {
      species.push(p[i].species);
    }
  }

  res.send(species);
});

app.put("/api/pets", (req, res) => {
  let new_book = {
    id: p.length,
    pet_name: req.body.pet_name,
    species: req.body.species,
    eating_habit: req.body.eating_habit,
    image_url: req.body.image_url,
  };

  console.log(new_pet);
  p.push(new_pet);
  res.send(new_pet);
});

app.put("/api/pets/:id", (req, res) => {
  let pet = false;
  for (let i = 0; i < p.length; i++) {
    if (p[i].id == Number(req.params.id)) {
      pet = p[i];
      break;
    }
  }

  if (pet) {
    if (req.body.title) {
      pet.pet_name = req.body.pet_name;
    }
    if (req.body.genre) {
      pet.species = req.body.species;
    }
    if (req.body.genre) {
      pet.eating_habit = req.body.eating_habit;
    }
    if (req.body.genre) {
      pet.image_url = req.body.image_url;
    }
    console.log(pet);
    res.send(pet);
  } else {
    let err = "Pet not found!";
    res.status(404);
    console.log(err);
    res.send(err);
  }
});

app.delete("/api/pets/:id", (req, res) => {
  let pet = false;
  for (let i = 0; i < p.length; i++) {
    if (p[i].id == Number(req.params.id)) {
      pet = p[i];
      break;
    }
  }

  if (pet) {
    let index = p.indexOf(pet);
    console.log(pet);
    // p.splice(index, 1);
    p[index] = {};
    res.send(pet);
  } else {
    let err = "Pet not found!";
    res.status(404);
    console.log(err);
    res.send(err);
  }
});

// Server setup
let port = 3020;
app.listen(port);
console.log("Starting server at .." + port + ".");
