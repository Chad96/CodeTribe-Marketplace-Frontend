import React, { useState } from 'react';
import axios from 'axios';
import './AddItem.css'; // Import a CSS file for styling

const AddItem = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [images, setImages] = useState([]); // Store image files

  const handleAddItem = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', parseFloat(price));
    formData.append('sellerId', sellerId);
    
    // Append each image file to the FormData object
    images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const response = await axios.post('/api/items', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Item added successfully:', response.data);
      alert('Item added successfully!');
      // Optionally reset the form or redirect the user
      resetForm();
    } catch (error) {
      console.error('Error adding item:', error);
      alert(error.message); // Show error message to the user
    }
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]); // Store the selected files
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setPrice('');
    setSellerId('');
    setImages([]);
  };

  return (
    <div className="add-item-container">
      <h2>Add Item</h2>
      <form onSubmit={handleAddItem} className="add-item-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Seller ID"
          value={sellerId}
          onChange={(e) => setSellerId(e.target.value)}
          required
        />
        <div>
          <h4>Upload Images</h4>
          <input
            type="file"
            multiple
            accept="image/*" // Accept only image files
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
