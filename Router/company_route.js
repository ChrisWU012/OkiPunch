const { json } = require("body-parser");
const Auth = require("./company_AuthRouter");

class nodeRouterCompany {
    constructor(companyService, express, passport) {
        this.companyService = companyService;
        this.express = express;
        this.passport = passport;
        this.auth = new Auth();
    }
    router() {
        let router = this.express.Router();

        router.use(this.auth.isAdminLogged);

        router.get("/showworkers", this.rendershowAll.bind(this)); //employ
        router.get("/showworkers/api", this.showAll.bind(this));

        //need interface for adding new worker {username, email, password, department_id, title, salaries, fName, lName, alias varchar, phone_number, address, gender Enum('M', 'F'),date_of_brith date,image}
        router.get("/worker/addnew", this.renderAddNew.bind(this));

        router.get("/worker/otp", this.renderOtp.bind(this));
        router.post("/worker/otp", this.submitOtp.bind(this))

        router.get("/worker/:id/calendar", this.renderCalendar.bind(this)); //attendance
        router.get("/worker/:id/calendar/api", this.showCalendarData.bind(this)); //attendance
        router.put("/worker/:id/calendar/update", this.updateCalendar.bind(this)); //attendance

        router.get("/worker/:id/info", this.renderInfo.bind(this)); //employ_information
        router.get("/worker/:id/info/api", this.showInfo.bind(this)); //employ_information
        router.post("/worker/:id/info/update", this.updateInfo.bind(this)); //employ_information
        router.delete("/worker/:id", this.deleteOne.bind(this)); //employ , employ_information
        return router;
    }

    loadLoginPage(req, res) {
        res.type(".html");
        res.render("company_login");
    }

    loadSignupPage(req, res) {
        res.type(".html");
        res.render("company_signup");
    }

    rendershowAll(req, res) {
        res.type(".html");
        res.render("company_summary");
    }

    async showAll(req, res) {
        var data = await this.companyService.showWorkers();
        res.json(data);
    }

    renderAddNew(req, res) {
        res.render("company_new_worker");
    }

    renderOtp(req, res) {
        res.render("company_otp");
    }

    async submitOtp(req, res) {
        var id = req.body.id;
        var otp = req.body.otp;
        console.log("id:", id, "\notp:", otp)
        var data = await this.companyService.optVerification(id, otp);
        console.log("data:", data)
        res.json(data);

    }

    renderCalendar(req, res) {
        res.type(".html");
        res.render("company_calendar");
    }

    async showCalendarData(req, res) {
        var data = await this.companyService.showWorkerCanlendar(req.params.id);
        console.log("showCalendarData" + req.params.id);
        res.json(data);
    }

    async updateCalendar(req, res) {
        var data = await this.companyService.updateWorkerCanlendar(req.params.id);
        res.json(data);
    }

    async renderInfo(req, res) {
        res.type(".html");
        res.render("company_information");
    }

    async showInfo(req, res) {
        var data = await this.companyService.showWorkerDayRecord(req.params.id);
        res.json(data);
    }

    async updateInfo(req, res) {
        var id = req.body.id;
        let phone_number = req.body.phone_number;
        let address = req.body.addr;
        var data = await this.companyService.updateWorkerInfo(id, title, active_status, hourly_rate, phone_number, address);
        res.end;
    }

    async deleteOne(req, res) {
        var data = await this.companyService.layoffWorker(null, req.params.id);
        res.json(data);
    }
}

module.exports = nodeRouterCompany;
