class Groceries {
    constructor() {
        this.adapter = new GroceriesAdapter()
        this.bindEventListeners()
        this.fetchAndLoadGroceries()
    }

    bindEventListeners() {

        // renders items to the index dl tag
        this.groceriesContainer = document.getElementById('groceries-container')


        this.groceryForm = document.querySelector('#create-grocery-form')
        this.groceryForm.addEventListener('submit', this.createGrocery.bind(this))
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

    createGrocery(e) {
            e.preventDefault()
            const groceryItem = document.querySelector('#input-grocery').value
            const groceryNote = document.querySelector('#notes').value
            const marketId = parseInt(document.querySelector('#markets').value)
        this.groceryFetch(marketId, groceryItem, groceryNote)
    }

     groceryFetch(marketId, groceryItem, groceryNote) {
        
         this.adapter.groceryFetch(marketId, groceryItem, groceryNote).then(grocery => {
            const newGroceryList = new Grocery(grocery.data.id, grocery.data.attributes)
            this.groceriesContainer.innerHTML += newGroceryList.render()
        })
    }

    


}
