import express from "express";
import { JewelleryController } from "../controllers/jewellery.controller.js";

const router = express.Router();

router.get("/jewellery", JewelleryController.getAllJewellery);
router.get("/:id", JewelleryController.getJewelleryById);
router.post("/", JewelleryController.createJewellery);
router.put("/:id", JewelleryController.updateJewellery);
router.delete("/:id", JewelleryController.deleteJewellery);

export default router;
