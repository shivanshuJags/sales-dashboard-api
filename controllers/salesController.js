import Sales from "../models/Sales.js";

// Create a new sale (Only Authenticated Users)
export const createSale = async (req, res) => {
  try {
    const { productName, price, quantity } = req.body;

    if (!productName || !price || !quantity) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const sale = await Sales.create({
      productName,
      price,
      quantity,
      user: req.user._id, // Assign the authenticated user
    });

    res.status(201).json(sale);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all sales for a user (Protected Route)
export const getUserSales = async (req, res) => {
  try {
    const sales = await Sales.find({ user: req.user._id });
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all sales (Admin Only)
export const getAllSales = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied, admin only" });
  }

  try {
    const sales = await Sales.find().populate("user", "name email");
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
