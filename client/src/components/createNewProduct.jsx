import React, { useState } from "react";
import { createProduct } from "../api/productApi"; // Removed uploadProductImage import
import toast from "react-hot-toast";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import {
  PlusCircleIcon,
  TagIcon,
  CurrencyDollarIcon,
  CubeIcon,
  ArchiveBoxIcon,
  DocumentTextIcon,
  LinkIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

const CreateNewProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    category: "",
    stockQuantity: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.productName.trim()) {
      toast.error("Product name is required");
      return;
    }

    if (!formData.description.trim()) {
      toast.error("Description is required");
      return;
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      toast.error("Please enter a valid price");
      return;
    }

    if (!formData.category) {
      toast.error("Please select a category");
      return;
    }

    if (!formData.stockQuantity || parseInt(formData.stockQuantity) < 0) {
      toast.error("Please enter a valid stock quantity");
      return;
    }

    if (!formData.imageUrl.trim()) {
      toast.error("Please enter an image URL");
      return;
    }

    // Validate URL format
    try {
      new URL(formData.imageUrl);
    } catch {
      toast.error("Please enter a valid image URL");
      return;
    }

    setLoading(true);

    try {
      // Prepare product data matching backend expectations
      const productData = {
        name: formData.productName,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category,
        stock: parseInt(formData.stockQuantity),
        imageUrl: formData.imageUrl,
      };

      console.log("Creating product with data:", productData);

      const response = await createProduct(productData);

      toast.success("Product created successfully! 🎉");

      // Reset form
      setFormData({
        productName: "",
        description: "",
        price: "",
        category: "",
        stockQuantity: "",
        imageUrl: "",
      });

      console.log("Product created:", response);
    } catch (error) {
      console.error("Product creation error:", error);
      toast.error(error.message || "Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (
      window.confirm(
        "Are you sure you want to cancel? All unsaved changes will be lost."
      )
    ) {
      setFormData({
        productName: "",
        description: "",
        price: "",
        category: "",
        stockQuantity: "",
        imageUrl: "",
      });
      toast("Form cleared", { icon: "🗑️" });
    }
  };

  const categories = [
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
    { value: "home", label: "Home & Living" },
    { value: "beauty", label: "Beauty & Care" },
    { value: "sports", label: "Sports & Fitness" },
    { value: "books", label: "Books & Media" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-4">
            <PlusCircleIcon className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Add New Product
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Create{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              New Product
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill in the details below to add a new product to your store
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-2xl shadow-black/5 overflow-hidden border border-gray-200"
        >
          {/* Form Header */}
          <div className="px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary">
                <CubeIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Product Details
                </h2>
                <p className="text-sm text-gray-500">
                  Enter all required information
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Product Name */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-semibold">
                <TagIcon className="w-5 h-5 text-primary" />
                Product Name *
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className="w-full px-5 py-3.5 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder-gray-400"
                placeholder="Enter product name"
                required
                disabled={loading}
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-semibold">
                <DocumentTextIcon className="w-5 h-5 text-primary" />
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-5 py-3.5 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder-gray-400 resize-none"
                placeholder="Enter detailed product description"
                required
                disabled={loading}
              />
            </div>

            {/* Price and Category Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">
                  <CurrencyDollarIcon className="w-5 h-5 text-primary" />
                  Price *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full pl-10 pr-5 py-3.5 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder-gray-400"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">
                  <CubeIcon className="w-5 h-5 text-primary" />
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-700 appearance-none cursor-pointer"
                  required
                  disabled={loading}
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Stock and Image URL Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Stock Quantity */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">
                  <ArchiveBoxIcon className="w-5 h-5 text-primary" />
                  Stock Quantity *
                </label>
                <input
                  type="number"
                  name="stockQuantity"
                  value={formData.stockQuantity}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder-gray-400"
                  placeholder="Enter stock quantity"
                  min="0"
                  required
                  disabled={loading}
                />
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">
                  <LinkIcon className="w-5 h-5 text-primary" />
                  Image URL *
                </label>
                <div className="space-y-2">
                  <div className="relative">
                    <input
                      type="url"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder-gray-400 pr-10"
                      placeholder="https://example.com/product-image.jpg"
                      required
                      disabled={loading}
                    />
                    {formData.imageUrl && (
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, imageUrl: "" }))
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500"
                        disabled={loading}
                      >
                        <XCircleIcon className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">
                    Enter a direct URL to the product image (JPEG, PNG, WebP,
                    GIF)
                  </p>
                </div>
              </div>
            </div>

            {/* Preview Image */}
            {formData.imageUrl && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-2"
              >
                <label className="text-gray-700 font-semibold">
                  Image Preview
                </label>
                <div className="relative h-64 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden">
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    className="w-full h-full object-contain p-4"
                    onError={() => {
                      toast.error(
                        "Failed to load image preview. Please check the URL."
                      );
                    }}
                  />
                  {!formData.imageUrl.match(
                    /\.(jpeg|jpg|gif|png|webp|svg)$/i
                  ) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <LinkIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500 text-sm">
                          Image preview may not be available for all URL types
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Form Actions */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <motion.button
                type="button"
                onClick={handleCancel}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </motion.button>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating Product...
                  </>
                ) : (
                  <>
                    <PlusCircleIcon className="w-5 h-5" />
                    Create Product
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Form Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10"
        >
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-primary">💡</span> Tips for Better Products
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Use high-quality images for better conversion</li>
            <li>• Write detailed descriptions with key features</li>
            <li>• Set competitive pricing based on market research</li>
            <li>• Choose accurate categories for better discoverability</li>
            <li>• Use direct image URLs from reliable sources</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateNewProduct;