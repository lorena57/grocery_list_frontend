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
    



    render() {
        const groceriesContainer = document.getElementById('groceries-container')
        groceriesContainer.innerHTML = 'my notes'
    }

}

// The meat of my code will on the page