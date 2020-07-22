class Groceries {  
    constructor() {
        this.groceries = []
        this.adapter = new GroceriesAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadNotes()
    }

    fetchAndLoadNotes() {
        this.adapter.getGroceries().then(grocery => {
            console.log(grocery)
        })
    }

}

// The meat of my code will on the page