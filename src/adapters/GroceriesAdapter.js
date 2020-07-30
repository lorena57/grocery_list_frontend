class GroceriesAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/groceries'
    }

    getGroceries() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createGrocery(groceryItem, groceryNote, marketId) {
        const newGrocery = {
            grocery: groceryItem,
            notes: groceryNote,
            marketId: marketId,
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({newGrocery }),

        })
        .then(res => res.json())
    }






}