import express from "express";

import { receiveData, getLatestData } from "../controllers/motorController.js";

const router = express.Router();

router.post("/esp-data", receiveData);
router.get("/latest", getLatestData);

export default router;
