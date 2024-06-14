import express from "express";
import {
  getPayments,
  getPaymentById,
  savePayment,
  updatePayment,
  deletePayment
} from "../controllers/PaymentController.js";

const router = express.Router();

router.get('/payments', getPayments);
router.get('/payments/:id', getPaymentById);
router.post('/payments', savePayment);
router.patch('/payments/:id', updatePayment);
router.delete('/payments/:id', deletePayment);

export default router;
