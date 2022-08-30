class emAuthRouter {
    constructor(express, passport) {
        this.express = express;
        this.passport = passport;
    }

    isLogged(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect("/employee_login");
    }

    isNotLogged(req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        res.redirect("/");
    }

    isEmployeeLogged(req, res, next) {
        if (req.isAuthenticated() && req.user.role == "employee") {
            return next();
        }
    }

    router() {
        let router = this.express.Router();

        router.post(
            "/employee_login",
            this.isNotLogged,
            this.passport.authenticate("employee-login", {
                successRedirect: "/employee/punch",
                failureRedirect: "/employee_login",
                failureFlash: true,
            })
        );

        router.get("/logout", this.isLogged, (req, res) => {
            req.logout(function (err) {
                if (err) {
                    return err;
                }
                res.redirect("/employee_login");
            });
        });

        return router;
    }
}

module.exports = emAuthRouter;
