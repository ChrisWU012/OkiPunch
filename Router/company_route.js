class nodeRouterCompany {
    constructor(noteServiceCompany, express) {
        this.noteServiceCompany = noteServiceCompany;
        this.express = express;
    }
    router() {
        let router = this.express.Router();
        router.get("/", this.get.bind(this));
        router.post("/", this.post.bind(this));
        router.put("/", this.put.bind(this));
        router.delete("/", this.delete.bind(this));
        return router;
    }

    //Login


    //GET method
    get(req, res) {
        return this.noteServiceCompany;
    }

    //POST method
    post(req, res) {
        return this.noteServiceCompany;
    }

    //PUT method
    put(req, res) {
        return this.noteServiceCompany;
    }

    //DELETE method
    delete(req, res) {
        return this.noteServiceCompany;
    }
}

module.exports = nodeRouterCompany;