class Grocery {
    constructor(grocery, groceryJson){ 
        this.id = grocery.id
        this.marketId = groceryJson.market_id
        this.market = groceryJson.market
        this.groceryItem = groceryJson.grocery_item
        this.groceryNotes = groceryJson.notes
        // this.qty = groceryJson.qty
       
     }
    
    render() {
        return `<p grocery.id= ${this.id}>${this.market.name}</p>
            <dl>
                <dt>${this.groceryItem}</dt>
                <dd>- ${this.groceryNotes}</dd>
                           

            </dl>`
    }



   
}