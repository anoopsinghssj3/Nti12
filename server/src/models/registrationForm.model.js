import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
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
      unique: true,
    },
    branch: {
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
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    country: {
      type: String,
      default: "India",
    },
    pincode: {
      type: Number,
      required: [true, "Pin code is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Registration = mongoose.model("Registration", registrationSchema);
