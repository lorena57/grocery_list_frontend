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
                console.log(groceries)
                groceries.data.forEach(grocery => {
                    const newGrocery = new Grocery(grocery.attributes)
                    this.groceriesContainer.innerHTML += newGrocery.render()
                })
            })
            
    }

    createGrocery(e) {
            e.preventDefault()
            const groceryItem = document.querySelector('#input-grocery').value
            const groceryNote = document.querySelector('#notes').value
            const marketId = parseInt(document.querySelector('#markets').value)
            const marketName = document.querySelector('#markets').text
        this.groceryFetch(marketId, groceryItem, groceryNote, marketName)
    }

    groceryFetch(marketId, groceryItem, groceryNote, marketName) {
        
        this.adapter.groceryFetch(marketId, groceryItem, groceryNote, marketName).then(grocery => {
             console.log(grocery)
            const newGroceryList = new Grocery(grocery)
            
            this.groceriesContainer.innerHTML += newGroceryList.render()
        })
    }

    


}
