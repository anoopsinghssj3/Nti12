import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";
import QRCode from "qrcode";
import { fileURLToPath } from "url";

// Setup __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function generatePdf(data, fieldKeys = [], subject = "Certificate") {
  const doc = new PDFDocument({ size: "A4", margin: 20 });

  const fileName = `afc-${data.name || "document"}.pdf`;
  const filePath = path.join("./", fileName);
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  const pageWidth = doc.page.width;
  const pageHeight = doc.page.height;

  // Background Gradient
  const gradientColors = ["#E3F2FD", "#BBDEFB"];
  gradientColors.forEach((color, i) => {
    doc
      .fillColor(color)
      .rect(
        0,
        i * (pageHeight / gradientColors.length),
        pageWidth,
        pageHeight / gradientColors.length
      )
      .fill();
  });

  // Logo
  const logoPath = path.join(__dirname, "assets", "images.png");
  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, pageWidth / 2 - 25, 15, { width: 50 });
  }

  // Title
  doc
    .fillColor("#000000")
    .fontSize(14)
    .font("Helvetica-Bold")
    .text(`${subject}`, 0, 70, { align: "center" });

  // Table
  const tableWidth = 340;
  const labelColWidth = 130;
  const valueColWidth = tableWidth - labelColWidth;
  const rowHeight = 20;
  const tableStartX = pageWidth / 2 - tableWidth / 2;
  let currentY = 100;

  // Label map to customize field names
  const labelMap = {
    name: "Name",
    email: "Email",
    phone: "Phone",
    center: "Center",
    course: "Course",
    studentId: "Student ID",
    companyName: "Company Name",
    message: "Message",
  };

  // Create dynamic fields array
  const fields = fieldKeys.map((key) => ({
    label: labelMap[key] || key,
    value: data[key] || "",
  }));

  fields.forEach((field, index) => {
    const bgColor = index % 2 === 0 ? "#FFFFFF" : "#E0F7FA";
    doc
      .fillColor(bgColor)
      .rect(tableStartX, currentY, tableWidth, rowHeight)
      .fill();

    doc
      .strokeColor("#90A4AE")
      .lineWidth(0.3)
      .rect(tableStartX, currentY, tableWidth, rowHeight)
      .stroke();

    doc
      .fillColor("#000000")
      .font("Helvetica-Bold")
      .fontSize(8.5)
      .text(field.label, tableStartX, currentY + 5, {
        width: labelColWidth,
        align: "center",
      });

    doc
      .font("Helvetica")
      .text(field.value, tableStartX + labelColWidth, currentY + 5, {
        width: valueColWidth,
        align: "center",
      });

    currentY += rowHeight;
  });

  // QR Code
  let qrCodePath;
  if (
    data.studentId &&
    typeof data.studentId === "string" &&
    data.studentId.trim() !== ""
  ) {
    qrCodePath = path.join(`./qr-${data.studentId}.png`);
    await QRCode.toFile(qrCodePath, data.studentId.trim());
  }

  const qrSize = 50;
  const gapBetween = 20;

  const qrX = pageWidth / 2 - (qrSize + gapBetween + 60) / 2; // left side
  const signatureX = qrX + qrSize + gapBetween; // right side of QR
  const qrY = currentY + 10;

  if (qrCodePath && fs.existsSync(qrCodePath)) {
    doc.image(qrCodePath, qrX, qrY, {
      width: qrSize,
      height: qrSize,
    });
  }

  // Signature Image
  const signaturePath = path.join(__dirname, "assets", "signature.png");
  if (fs.existsSync(signaturePath)) {
    doc.image(signaturePath, signatureX, qrY + 10, {
      width: 60, // smaller signature
      height: 30,
    });
  }

  return new Promise((resolve, reject) => {
    doc.end(); // trigger writing

    stream.on("finish", () => {
      if (qrCodePath && fs.existsSync(qrCodePath)) {
        fs.unlink(qrCodePath, () => {});
      }
      resolve(filePath);
    });

    stream.on("error", (err) => {
      reject(err);
    });
  });
}
