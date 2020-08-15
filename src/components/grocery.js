class Grocery {
    constructor(id, groceryAttributes){ 
        debugger
        this.id = id
        
        this.market = groceryAttributes.market
        this.groceryItem = groceryAttributes.grocery_item
        this.groceryNotes = groceryAttributes.notes
        Grocery.all.push(this)
     }
    
    // render() {
    //     return `<p grocery.id= ${this.id}></p>
    //         <dl>
    //         <dt>${this.market.name}</dt>
    //             <dt>${this.groceryItem}</dt>
    //             <dd>- ${this.groceryNotes}</dd>
    //         </dl>`
    // }

    render() {
        // return `<li grocery.id= ${this.id}>
        return `<li data-id=${ this.id }>
        
            ${this.market.name}
            <br>
            ${this.groceryItem}
            <br>
            ${this.groceryNotes}
            <br>
            <button class="btn" data-id=${this.id}>Update List</button>

            </li>
            `
    }



   
}

Grocery.all = []