/*  @TODO - Add references to the elements we want to use  */
const changeButton = document.getElementById('change_button');
const addButton = document.getElementById('add_button');
const deleteButton = document.getElementById('delete_button');
const imageDiv = document.getElementById('image_div');

/*  @TODO - Create an array of Pokemon to select from  */
const PokemonArray = ["bulbasaur", "charmander", "squirtle", "pikachu"];

/*  @TODO - Create a Function for our changeButton to change first Pokemon  */
let counter = 0;

function changeFirstPokemon() {
    let firstImage = imageDiv.children[0];
    counter = (counter + 1) % PokemonArray.length;
    firstImage.src = 'images/' + PokemonArray[counter] + '.png';
}

changeButton.onclick = changeFirstPokemon;



/*  @TODO - Create a Function for our addButton to Add New Pokemon  */
function addNewPokemon () {
    let newImg = document.createElement('img');
    counter = (counter + 1) % PokemonArray.length;
    newImg.src = 'images/' + PokemonArray[counter] + '.png';
    imageDiv.appendChild(newImg);
}

addButton.onclick = addNewPokemon;

/*   @TODO - Create a Function for our deleteButton to Delete the First Pokemon   */

function deleteFirstPokemon() {
    if (imageDiv.children.length > 0) {
        imageDiv.removeChild(imageDiv.children[0]);
    }
}

deleteButton.onclick = deleteFirstPokemon