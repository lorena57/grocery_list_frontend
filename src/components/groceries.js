class Groceries {  
    constructor() {
        this.adapter = new GroceriesAdapter()
        this.bindEventListeners()
        this.fetchAndLoadGroceries()
    }

    bindEventListeners() {

        // renders items to the index dl tag
        this.groceriesContainer = document.getElementById('groceries-container')


        this.groceryForm = document.querySelector('new-grocery-form')
    }

    selectHandler(e) {
        const marketId = e.target.value

        if (marketId == '4') {
            // verify id correct for winco
            this.groceryForm.innerHTML = Grocery.renderWinco();
            }
            else if (marketId == '3') {
                this.groceryForm.innerHTML = Grocery.renderWholeFoods();
            }
            else if (marketId == '2') {
                // verify id correct for Albertsons
            this.groceryForm.innerHTML = Grocery.renderAlbertsons();
            }
            else {
            this.groceryForm.innerHTML = Grocery.renderSafeWay();
            }
    }


    


    fetchAndLoadGroceries() {
        this.adapter
        .getGroceries()
        .then(groceries => {
        groceries.data.forEach(grocery => {  
        const newGrocery = new Grocery(grocery, grocery.attributes)
        this.groceriesContainer.innerHTML += newGrocery.render()
        })
    })
}
   
}
