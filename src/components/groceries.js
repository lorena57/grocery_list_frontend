class Groceries {
    constructor() {
        this.adapter = new GroceriesAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadPosts()
    }

    initBindingAndEventListeners() {
        this.postForm = document.querySelector('#newpost-form')

        this.searchForm = document.querySelector('#search-form')
        this.searchForm.addEventListener('submit', this.filterFormHandler.bind(this))


        this.updatePost = document.querySelector('#update-post')
        this.updatePost.addEventListener('submit', this.updateFormHandler.bind(this))

        this.select = document.getElementById('categories')
        this.select.addEventListener('change', this.selectHandler.bind(this))

        this.postsContainer = document.querySelector('#posts-container')
        this.postsContainer.addEventListener('click', this.editButtonHandler.bind(this))
    }

    // EVENT LISTENER FOR RENDERING A SPECIFIC FORM BASED ON CATEGORY CHOSEN
    selectHandler(e) {
        const marketId = e.target.value

        if (marketId == '2') {
            this.postForm.innerHTML = Grocery.renderSelfCare();
        } else if (marketId == '1') {
            this.postForm.innerHTML = Grocery.renderDailyCare();
        } else {
            this.postForm.innerHTML = Grocery.renderGoal();
        }

        this.postForm.addEventListener('submit', (e) => {
            e.preventDefault()
            const groceryItem = document.querySelector('#content1').value
            const qty = document.querySelector('#content2').value
            const notes = document.querySelector('#content3').value
            this.createPost(marketId, groceryItem, qty, notes)
        })
    }

    // CREATE POST
    createPost(marketId, groceryItem, qty, notes) {
        
        this.adapter.createPost(marketId, groceryItem, qty, notes).then(grocery => {
            console.log(grocery.data.id)
            const newPost = new Grocery(grocery.data.id, grocery.data.attributes)
            console.log(newPost)
            document.querySelector('#content1').value = ''
            document.querySelector('#content2').value = ''
            document.querySelector('#content3').value = ''
            this.postsContainer.innerHTML += newPost.renderLi()
        })
    }

    // EDIT BUTTON
    editButtonHandler(e) {
        const id = e.target.dataset.id
        const grocery = Grocery.findById(id);
        const hideNewForm = document.querySelector('#newpost-form')

        this.updatePost.innerHTML = grocery.renderUpdateForm()
        hideNewForm.style.display = "none";
    }

    filterFormHandler(e) {
        e.preventDefault()
        const input = e.target.search.value
        const casedInput = input.toLowerCase()

        const filteredPosts = Grocery.all.filter(grocery =>
            grocery.market.name.toLowerCase() == casedInput)

        this.postsContainer.innerHTML = filteredPosts.map(grocery => grocery.renderLi()).join("")
    }

    // UPDATE FORM
    updateFormHandler(e) {
        e.preventDefault()
        const id = e.target.dataset.id
        const grocery = Grocery.findById(id)
        const groceryItem = document.querySelector('#input-content1').value
        const qty = document.querySelector('#input-content2').value
        const notes = document.querySelector('#input-content3').value
        const market_id = grocery.market.id

        this.adapter.updatePost(grocery.id, groceryItem, qty, notes, market_id)
            .then(updatedPost => {
                grocery.update(updatedPost)
                document.querySelector('#input-content1').value = ''
                document.querySelector('#input-content2').value = ''
                document.querySelector('#input-content3').value = ''
                //this.updatePost.style.display = "none";
                //this.postForm.style.display = "block";
                this.addPosts();
            })
    }

    addPosts() {
        //Clears innerHTML when function is called to avoid duplication of posts
        this.postsContainer.innerHTML = '';
        Grocery.all.forEach(
            grocery => (this.postsContainer.innerHTML += grocery.renderLi())
        );
    }

    // INITIAL FETCH GET POSTS
    fetchAndLoadPosts() {
        this.adapter.getPosts().then(groceries => {
            groceries.data.sort((a, b) => a.id - b.id).forEach(grocery => {
                const newPost = new Grocery(grocery, grocery.attributes)
                this.postsContainer.innerHTML += newPost.renderLi()
            })
        })
    }
}
