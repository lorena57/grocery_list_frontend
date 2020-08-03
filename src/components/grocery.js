class Grocery {
    constructor(grocery){ 
        this.marketId = grocery.market_id
        this.market = grocery.market
        this.groceryItem = grocery.grocery_item
        this.groceryNotes = grocery.notes
        Grocery.all.push(this)
     }
    
    render() {
        return `<p grocery.id= ${this.id}></p>
            <dl>
            <dt>${this.market.name}</dt>
                <dt>${this.groceryItem}</dt>
                <dd>- ${this.groceryNotes}</dd>
            </dl>`
    }



   
}

Grocery.all = []