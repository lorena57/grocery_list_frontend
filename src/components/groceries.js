class Groceries {  
    constructor() {
        this.groceries = []
        this.adapter = new GroceriesAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadNotes()
    }

    fetchAndLoadNotes() {
        this.adapter
        .getGroceries()
        .then(groceries => {
         return console.log(groceries)
        })
        .then(() => {
            this.render()
        })
    }
    
    render() {
        const groceriesContainer = document.getElementById('groceries-container')
        groceriesContainer.innerHTML = 'my notes'
    }

}

// The meat of my code will on the page