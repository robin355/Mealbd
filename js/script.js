const loadmeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaymeals(data.meals));
}
const displaymeals = meals => {
    console.log(meals);
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="mealDetail(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
    </div>
        `;
        mealsContainer.appendChild(div);

    });
}
const mealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => detailMeal(data.meals[0]))
}
const detailMeal = data => {
    console.log(data)
    const detailDiv = document.getElementById('detail-container');
    detailDiv.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${data.strMealThumb}" class="card-img-top" alt="...">
    <h5 class="card-title">${data.strMeal}</h5>
    <p class="card-text">${data.strInstructions.slice(0, 200)}</p>
  
    `;
    detailDiv.appendChild(div);
}





const mealSearching = () => {
    const inputValue = document.getElementById('input-text');
    const inputSearch = inputValue.value;
    loadmeals(inputSearch);
    inputValue.value = '';
}

// loadmeals();