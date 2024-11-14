async function findpoke() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + random(1, 151));
    let data = await response.json()
    console.log(data);
  let img = document.querySelector("#image-pokemon  img")
  img.src = data.sprites.other.dream_world.front_default
  image.appendChild()

   

}
findpoke()
let image = document.querySelector("#image-pokemon")

function random(min, max ){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}


