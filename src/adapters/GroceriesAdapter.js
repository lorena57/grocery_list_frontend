class GroceriesAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/groceries'
    }

    getGroceries() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    groceryFetch(marketId, groceryItem, groceryNote) {
        // const newGrocery = {
        //     marketId: marketId,
        //     grocery: groceryItem,
        //     notes: groceryNote,
        // }
        const newGrocery = { marketId, groceryItem, groceryNote}
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({newGrocery}),

        })
        .then(res => res.json())
    }






}