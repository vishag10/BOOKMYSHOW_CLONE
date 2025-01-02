import { Router } from "express";
import * as rh from "./requesthandler/user.requesthandler.js"
import Auth from "./middleware/auth.js";
import * as mh from "./requesthandler/movie.requesthandler.js"

const router = Router();
router.route("/adduser").post(rh.addUser);
router.route("/login").post(rh.loginUser);
router.route("/home").get(Auth,rh.Home);
router.route("/forgot").post(rh.passwordRequest);
router.route("/addmovie").post(mh.addMovie);
router.route("/getmovie").get(mh.getMovies);


export default router;