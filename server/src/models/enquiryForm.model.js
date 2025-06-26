import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: Number,
      required: [true, "Phone number is required"],
    },
    center: {
      type: String,
      default: "Noida",
      enum: ["Noida", "Pune", "Rewa"],
    },
    course: {
      type: String,
      enum: [
        "Digital Marketing",
        "Business Analyst",
        "HR",
        "Software Testing",
        "Automation Testing",
        "Web Development",
        "Graphic Design",
        "Data Science",
        "Video Editing",
        "Cloud Computing",
        "SQL",
        "Java",
        "Python",
        "C",
        "C++",
      ],
    },
    companyName: {
      type: String,
      required: [true, "Company name is required"],
      lowercase: true,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Enquiry = mongoose.model("Enquiry", enquirySchema);
