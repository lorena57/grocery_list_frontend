class Grocery {
    constructor(grocery){ 
        // this.id = grocery.id
        this.marketId = grocery.market_id
        // this.name = grocery.market.name Not passing in the name
        this.groceryItem = grocery.grocery_item
        this.groceryNotes = grocery.notes
        
       
        // this.qty = groceryJson.qty
       
     }
    
    render() {
        return `<p grocery.id= ${this.id}>${this.name}</p>
            <dl>
                <dt>${this.groceryItem}</dt>
                <dd>- ${this.groceryNotes}</dd>
                           

            </dl>`
    }



   
}

