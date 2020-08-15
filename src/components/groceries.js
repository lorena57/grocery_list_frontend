class Groceries {
    constructor() {
        this.adapter = new GroceriesAdapter()
        this.bindEventListeners()
        this.fetchAndLoadGroceries()
    }

    bindEventListeners() {
        this.groceriesContainer = document.getElementById('groceries-container')
        this.body = document.querySelector('body')
        this.groceryForm = document.querySelector('#create-grocery-form')
        this.groceryForm.addEventListener('submit', this.createGrocery.bind(this))
        this.groceriesContainer.addEventListener('dblclick', this.handleGroceryClick.bind(this))
        this.body.addEventListener('blur', this.updateGrocery.bind(this), true)
    }


    //function to post a new grocery list
    fetchAndLoadGroceries() {
        this.adapter
            .getGroceries()
            .then(groceries => {
                groceries.data.forEach(grocery => {
                   
                    const newGrocery = new Grocery(grocery.id, grocery.attributes)
                  
                    //Text area of what grocery list
                    document.querySelector('#input-grocery').value = ''
                    //Text area of notes
                    document.querySelector('#notes').value = ''
                    //Select option value
                    parseInt(document.querySelector('#markets').value='')
                    this.groceriesContainer.innerHTML += newGrocery.render()
                })
            })
    }

    handleGroceryClick(e){
        const li = e.target
        li.contentEditable = true
        li.focus()
        li.classList.add('editable')
    }

    updateGrocery(e){
        const li = e.target
        li.contentEditable = false
        li.focus()
        li.classList.remove('editable')
        const newValue = li.innerHTML
        const id = li.dataset.id
        // console.log(id)
        this.adapter.updateGrocery(newValue, id)
    }

    // 
    createGrocery(e) {
        e.preventDefault()
        const groceryItem = document.querySelector('#input-grocery').value
        const groceryNote = document.querySelector('#notes').value
        const marketId = parseInt(document.querySelector('#markets').value)
        const marketName = document.getElementById('#markets')
        this.groceryFetch(marketId, groceryItem, groceryNote, marketName)
    }

    //Function shows initial fetch of groceries
    groceryFetch(marketId, groceryItem, groceryNote, marketName) {
        this.adapter.groceryFetch(marketId, groceryItem, groceryNote, marketName).then(grocery => {
            console.log(grocery)
            const newGroceryList = new Grocery(grocery)
            // console.log(newGroceryList)
            // console.log(grocery)
            // this.groceriesContainer.innerHTML += newGroceryList.render()
            this.fetchAndLoadGroceries()
        })

    }

    




}