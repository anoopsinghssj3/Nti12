import { Router } from "express";
const router = Router();
import {
  applyForCertificateCtrl,
  onlineRegistrationCtrl,
  enquiryFormCtrl
} from "../controllers/app.controllers.js";

router.route("/apply-for-certificate").post(applyForCertificateCtrl);
router.route("/enquiry").post(enquiryFormCtrl);
router.route("/registration").post(onlineRegistrationCtrl);

export default router;
