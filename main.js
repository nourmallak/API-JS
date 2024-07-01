async function getPosts() {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const posts = await response.json();
    
    const result = posts.recipes.map(function(recipe) {
        return `<div class='recipe'>
                    <h2>${recipe.title}</h2>
                    <img src="${recipe.image_url}" alt="${recipe.title}" />
                </div>`;
    }).join('');

    document.querySelector(".recipes").innerHTML = result;
} 

getPosts();
