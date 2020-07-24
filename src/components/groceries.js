class Groceries {  
    constructor() {
        this.adapter = new GroceriesAdapter()
        this.bindEventListeners()
        this.fetchAndLoadGroceries()
    }

    bindEventListeners() {
        this.groceriesContainer = document.getElementById('groceries-container')
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
