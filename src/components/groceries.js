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