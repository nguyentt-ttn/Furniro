import Joi from "joi";

export const productValidate = Joi.object({
  title: Joi.string().trim().min(4).required().messages({
    "any.required": "Tên sản phẩm là trường bắt buộc",
    "string.empty": "Tên sản phẩm không được để trống",
    "string.min": "Tên sản phẩm phải có ít nhất 4 ký tự",
  }),
  price: Joi.number().min(0).required().messages({
    "any.required": "Giá là trường bắt buộc",
    "number.min": "Giá phải lớn hơn hoặc bằng 0",
    "number.base": "Giá phải là số hợp lệ",
  }),
  available: Joi.boolean().messages({
    "boolean.base": "Tình trạng phải là true hoặc false",
  }),
  type: Joi.string().valid("type1", "type2").required().messages({
    "any.required": "Loại sản phẩm là bắt buộc",
    "any.only": 'Loại sản phẩm phải là "type1" hoặc "type2"',
  }),
  category: Joi.string().required().messages({
    "any.required": "Danh mục là bắt buộc",
    "string.empty": "Danh mục không được để trống",
  }),
  description: Joi.string().optional(),
  images: Joi.array().items(Joi.string().uri()).optional(),
});
