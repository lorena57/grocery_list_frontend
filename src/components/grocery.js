class Grocery {
    constructor(grocery, groceryJson){ 
        this.id = grocery.id
        this.market = groceryJson.market
        this.groceryItem = groceryJson.grocery_item
        this.qty = groceryJson.qty
        Grocery.all.push(this)
     }
    
    render() {
        return `<li grocery.id=${this.id}>${this.market.name}${this.groceryItem}</li>`
    }



}

Grocery.all = []

    