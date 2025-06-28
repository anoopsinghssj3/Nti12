import { ApplyForCertificate } from "../models/ApplyForCertificate.model.js";
import { Registration } from "../models/registrationForm.model.js";
import { Enquiry } from "../models/enquiryForm.model.js";
import { sendMsgToWhatsApp } from "../utils/whatsapp.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import { generatePdf } from "../utils/pdfGenerator.js";
import fs from "fs";

export const applyForCertificateCtrl = async (req, res) => {
  try {
    const { name, email, phone, center, course, studentId } = req.body;
    const data = {
      name,
      email,
      phone,
      center,
      course,
      studentId,
    };

    console.log("Received certificate application data:", req.body);
    await ApplyForCertificate.create(data);

    const fieldKeys = [
      "name",
      "email",
      "phone",
      "center",
      "course",
      "studentId",
    ];

    const subject = "Application for Certificate";

    // Generate PDF
    const pdfPath = await generatePdf(data, fieldKeys, subject);

    // Upload PDF to Cloudinary
    const pdfUrl = await uploadToCloudinary(pdfPath);

    // Delete local file
    if (pdfUrl) {
      fs.unlink(pdfPath, (err) => {
        if (err) {
          console.error("Error deleting local PDF:", err);
        } else {
          console.log("Local PDF deleted:", pdfUrl);
        }
      });
    }

    // Send WhatsApp message with PDF link
    await sendMsgToWhatsApp(name, pdfUrl, subject);

    res.status(200).json({
      success: true,
      message: "Certificate application submitted successfully",
    });
  } catch (error) {
    console.error("Error processing certificate application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit certificate application",
      error: error.message,
    });
  }
};

export const enquiryFormCtrl = async (req, res) => {
  try {
    const { name, email, phone, center, course, companyName, message } =
      req.body;
    const data = {
      name,
      email,
      phone,
      center,
      course,
      companyName,
      message,
    };
    console.log("Received enquiry data:", req.body);
    await Enquiry.create(data);

    const fieldKeys = [
      "name",
      "email",
      "phone",
      "center",
      "course",
      "companyName",
      "message",
    ];

    const subject = "Enquiry Form";

    // Generate PDF
    const pdfPath = await generatePdf(data, fieldKeys, subject);

    // Upload PDF to Cloudinary
    const pdfUrl = await uploadToCloudinary(pdfPath);

    // Delete local file
    if (pdfUrl) {
      fs.unlink(pdfPath, (err) => {
        if (err) {
          console.error("Error deleting local PDF:", err);
        } else {
          console.log("Local PDF deleted:", pdfUrl);
        }
      });
    }

    // Send WhatsApp message with PDF link
    await sendMsgToWhatsApp(name, pdfUrl, subject);
    res
      .status(200)
      .json({ success: true, message: "Enquiry submitted successfully" });
  } catch (error) {
    console.error("Error processing enquiry form:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to submit enquiry", error });
  }
};

export const onlineRegistrationCtrl = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      branch,
      course,
      address,
      city,
      country,
      pincode,
    } = req.body;

    const data = {
      name,
      email,
      phone,
      branch,
      course,
      address,
      city,
      country,
      pincode,
    };

    console.log("Received online registration data:", req.body);
    await Registration.create(data);

    const fieldKeys = [
      "name",
      "email",
      "phone",
      "branch",
      "course",
      "address",
      "city",
      "country",
      "pincode",
    ];

    const subject = "Online Registration Form";

    // Generate PDF
    const pdfPath = await generatePdf(data, fieldKeys, subject);

    // Upload PDF to Cloudinary
    const pdfUrl = await uploadToCloudinary(pdfPath);

    // Delete local file
    if (pdfUrl) {
      fs.unlink(pdfPath, (err) => {
        if (err) {
          console.error("Error deleting local PDF:", err);
        } else {
          console.log("Local PDF deleted:", pdfUrl);
        }
      });
    }

    // Send WhatsApp message with PDF link
    await sendMsgToWhatsApp(name, pdfUrl, subject);

    res.status(200).json({
      success: true,
      message: "Online registration successful",
    });
  } catch (error) {
    console.error("Error processing online registration:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process online registration",
      error: error.message,
    });
  }
};
