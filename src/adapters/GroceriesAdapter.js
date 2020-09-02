class GroceriesAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/groceries'
    }

    getPosts() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createPost(marketId, groceryItem, qty, notes) {
        const grocery = {
            market_id: marketId,
            groceryItem: groceryItem,
            qty: qty,
            notes: notes,
        }
        
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ grocery }),
        })
            .then(res => res.json())
    }

    updatePost(groceryId, groceryItem, qty, notes, market_id) {
        //debugger
        const grocery = {
            groceryItem: groceryItem,
            qty: qty,
            notes: notes,
            market_id: market_id,
        }
        return fetch(`${this.baseUrl}/${groceryId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ grocery }),
        })
            .then(res => res.json())
    }
}
