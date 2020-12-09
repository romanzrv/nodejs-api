import { Request, Response } from "express";
const express = require('express');
const ParrotModel = require('../database/models/Parrot');

export default class ParrotController {
    constructor() {
    }

    public saveParrot = async (req: Request, res: Response) => {
        try {
            const newParrot = new ParrotModel(req.body);
            await newParrot.save();
            res.status(200).json({status: 200, message: 'Parrot successfully saved'});
        } catch (error) {
            res.status(500).json({status: 500, message: 'Error saving parrot', error: error})
        }
    }

    public getParrotByUniqueId = async (req: Request, res: Response) => {
        const uniqueId = req.params.uniqueId;
        const parrot = await ParrotModel.findOne({uniqueId: uniqueId}).exec();

        if (parrot) {
            res.status(200).json({status: 200, data: parrot});
            return;
        }

        res.status(400).json({status: 400, message: 'Parrot not found!'})
    }
}