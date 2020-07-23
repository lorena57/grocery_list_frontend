class Groceries {  
    constructor() {
        this.groceries = []
        this.adapter = new GroceriesAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadGroceries()
    }

    fetchAndLoadGroceries() {
        this.adapter
        .getGroceries()
        .then(groceries => {
        //  return console.log(groceries)
        groceries.data.forEach(note => this.groceries.push(note))
        console.log(this.groceries)
        })
        .then(() => {
            this.render()
        })
    }
    
    render() {
        const groceriesContainer = document.getElementById('groceries-container')
        groceriesContainer.innerHTML = 'my notes'
        // console.log('my groceries are', this.groceries)
    }

}

// The meat of my code will on the page