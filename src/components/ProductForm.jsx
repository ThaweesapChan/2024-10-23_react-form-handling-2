import React, { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้าเมื่อส่งฟอร์ม

    const productData = {
      name,
      price: parseFloat(price),
      image,
      description,
    };

    // แสดงข้อมูลใน Alert
    alert(JSON.stringify(productData, null, 2));

    // เคลียร์ข้อมูลในฟอร์ม
    setName("");
    setPrice("");
    setImage("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div>
        <label htmlFor="name">Product Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
}

export default ProductForm;