
import Category from "../models/category.js"    
import { categoryValidate } from "../schemas/category.js";  // Import schema validate cho category

// Lấy tất cả category
export const getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error getting categories" });
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);  
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error getting category" });
    }
};


export const createCategory = async (req, res) => {
    try {
        const { error } = categoryValidate.validate(req.body, { abortEarly: false });  // Validate dữ liệu đầu vào
        if (error) {
            const errorMessage = error.details.map((message) => message.message);  // Lấy tất cả lỗi
            return res.status(400).json({ message: errorMessage });
        }
        const newCategory = await Category(req.body).save();  // Lưu category mới
        res.status(201).json(newCategory);  // Trả về dữ liệu category vừa tạo
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating category", error: error.message });
    }
};

// Cập nhật category
export const updateCategory = async (req, res) => {
    try {
        const { error } = categoryValidate.validate(req.body, { abortEarly: false });  // Validate dữ liệu đầu vào
        if (error) {
            const errorMessage = error.details.map((message) => message.message);  // Lấy tất cả lỗi
            return res.status(400).json({ message: errorMessage });
        }

        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });  // Cập nhật category
        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json(updatedCategory);  // Trả về dữ liệu category vừa cập nhật
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating category" });
    }
};

// Xóa category
export const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);  // Xóa category
        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json(deletedCategory);  // Trả về dữ liệu category vừa xóa
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting category" });
    }
};
