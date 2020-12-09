import ParrotController from "../controllers/ParrotController";
import { Router } from "express";
const express = require('express');

export default class ParrotRouter {
    private readonly controller: ParrotController;
    private readonly router: Router;

    constructor() {
        this.controller = new ParrotController();
        this.router = express.Router();
    }

    public createParrotRoutes = (): Router => {
        this.router.post('/create', this.controller.saveParrot);
        this.router.get('/get', this.controller.getParrotByUniqueId);
        return this.router;
    }
}