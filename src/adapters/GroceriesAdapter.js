class GroceriesAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/groceries'
    }

    getGroceries() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    groceryFetch(marketId, groceryItem, groceryNote, marketName) {
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({ market_id: marketId, grocery_item: groceryItem, notes: groceryNote, name: marketName}),
        })
        .then(res => res.json())
    }

    //function to update grocery list
    // groceryUpdate(marketId, groceryItem, groceryNote, marketName) {
    //     return fetch(this.baseUrl, {
    //         method: 'PATCH',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ market_id: marketId, grocery_item: groceryItem, notes: groceryNote, name: marketName }),
    //     })
    //         .then(res => res.json())
    // }

    updateGrocery(newValue, id) {
        return fetch(`${this.baseUrl}/${market_id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ market_id: marketId, grocery_item: groceryItem, notes: groceryNote, name: marketName }),
        })
            .then(res => res.json())
    }









}






