class Grocery {
    constructor(grocery, groceryJSON) {
        this.id = grocery.id
        this.marketId = groceryJSON.market_id
        // this.date = groceryJSON.date
        this.groceryItem = groceryJSON.groceryItem
        this.qty = groceryJSON.qty
        this.notes = groceryJSON.notes
        this.market = groceryJSON.market
        Grocery.all.push(this)
    }

    renderLi() {
        return `
        <li data-id=${this.id}>
            <span>${this.market.name}</span><br>
            ${this.groceryItem}<br> 
            ${this.qty}<br> 
            ${this.notes}<br>
            <button class="btn" data-id=${this.id}>edit</button>
        </li><br>`
    }

    update({ groceryItem, qty, notes, market_id }) {
        this.groceryItem = groceryItem
        this.qty = qty
        this.notes = notes
        this.marketId = market_id
    }

    renderUpdateForm() {
        if (this.marketId === 1) {
            return this.updateDailyCare();
        } else if (this.marketId === 2) {
            return this.updateSelfCare();
        } else {
            return this.updateGoalSetting();
        }
    }

    updateSelfCare() {
        return `<form data-id=${this.id} >
        <h3>Edit Journal Entry</h3>
        <fieldset>
          <legend>I am grateful for: </legend>
          <textarea name="content1" maxlength="200" rows="4" id="input-content1">${this.content1}</textarea>
        </fieldset>
        <fieldset>
          <legend>Daily Affirmation </legend>
          <textarea name="content2" maxlength="200" rows="4" id="input-content2">${this.content2}</textarea>
        </fieldset>
        <fieldset>
          <legend>How could I have made today better? </legend>
          <textarea name="content3" maxlength="200" rows="4" id="input-content3">${this.content3}</textarea>
        </fieldset>
          <input class="btn" type="submit" value="Edit Entry"></input>
      </form><br>`
    }

    updateDailyCare() {
        return `<form data-id=${this.id} >
            <h3>Edit Journal Entry</h3>
            <fieldset>
            <legend>How was your mental state today? </legend>
            <textarea name="content1" maxlength="200" rows="4" id="input-content1">${this.content1}</textarea>
        </fieldset>
        <fieldset>
            <legend>What did I acccomplish today? </legend>
            <textarea name="content2" maxlength="200" rows="4" id="input-content2">${this.content2}</textarea>
        </fieldset>
        <fieldset>
            <legend>How much did I spend today? </legend>
            <textarea name="content3" maxlength="200" rows="4" id="input-content3">${this.content3}</textarea>
        </fieldset>
            <input class="btn" type="submit" value="Edit Entry"></input>
            </form></br>`
    }

    updateGoalSetting() {
        return `<form data-id=${this.id} >
            <h3>Edit Journal Entry</h3>
            <fieldset>
                        <legend>Today I commit to: </legend>
                        <textarea name="content1" maxlength="200" rows="4" id="input-content1">${this.content1}</textarea>
                    </fieldset>
                    <fieldset>
                        <legend>Three things I must do today: </legend>
                        <textarea name="content2" maxlength="200" rows="4" id="input-content2">${this.content2}</textarea>
                    </fieldset>
                    <fieldset>
                        <legend>What is my inspiration for today? </legend>
                        <textarea name="content3" maxlength="200" rows="4" id="input-content3">${this.content3}</textarea>
                    </fieldset>
                        <input class="btn" type="submit" value="Edit Entry"></input>`
    }

    static findById(id) {
        return this.all.find(grocery => grocery.id === id);
    }

    static renderSelfCare() {
        return `
                    <fieldset>
                        <legend>I am grateful for: </legend>
                        <textarea name="content1" maxlength="200" rows="4" id="content1"></textarea>
                    </fieldset >
                    <fieldset>
                        <legend>Daily Affirmation </legend>
                        <textarea name="content2" maxlength="200" rows="4" id="content2"></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>How could I have made today better? </legend>
                        <textarea name="content3" maxlength="200" rows="4" id="content3"></textarea>
                    </fieldset>
                        <input class="btn" type="submit" value="Create Entry"></input><br><br>`
    }

    static renderDailyCare() {
        return `<fieldset>
                        <legend>How was your mental state today? </legend>
                        <textarea name="content1" maxlength="200" rows="4" id="content1"></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>What did I acccomplish today? </legend>
                        <textarea name="content2" maxlength="200" rows="4" id="content2"></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>How much did I spend today? </legend>
                        <textarea name="content3" maxlength="200" rows="4" id="content3"></textarea>
                    </fieldset>
                        <input class="btn" type="submit" value="Create Entry"></input><br><br>`
    }
    static renderGoal() {
        return `<fieldset>
                            <legend>Today I commit to: </legend>
                            <textarea name="content1" maxlength="200" rows="4" id="content1"></textarea>
                        </fieldset>
                        <fieldset>
                            <legend>Three things I must do today: </legend>
                            <textarea name="content2" maxlength="200" rows="4" id="content2"></textarea>
                        </fieldset>
                        <fieldset>
                            <legend>What is my inspiration for today? </legend>
                            <textarea name="content3" maxlength="200" rows="4" id="content3"></textarea>
                        </fieldset>
                            <input class="btn" type="submit" value="Create Entry"></input><br><br>`
    }

}

Grocery.all = [];

