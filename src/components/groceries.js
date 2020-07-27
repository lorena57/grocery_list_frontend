class Groceries {  
    constructor() {
        this.adapter = new GroceriesAdapter()
        this.bindEventListeners()
        this.fetchAndLoadGroceries()
    }

    bindEventListeners() {
        this.groceriesContainer = document.getElementById('groceries-container')
        this.newGroceryBody = document.getElementById('new-grocery-body')
        this.groceryForm = document.getElementById('new-grocery-form')
        this.groceryForm.addEventListener('change', this.createGrocery.bind(this))
    }

    createGrocery(e){
        e.preventDefault()
        const value = this.newGroceryBody.value

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
