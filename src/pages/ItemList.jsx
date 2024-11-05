import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../uthContext'; // Import the Auth context

const ItemList = () => {
  const { user } = useAuth(); // Get the logged-in user
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      if (user) {
        try {
          const response = await axios.get(`/api/items?userId=${user.id}`); // Fetch items by user ID
          setItems(response.data);
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      }
    };

    fetchItems();
  }, [user]);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`/api/items/${itemId}`); // Delete the item by ID
      setItems(items.filter(item => item._id !== itemId)); // Update the state
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h2>Your Items</h2>
      <div>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item._id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
              {/* Add an Edit button that redirects to the edit page */}
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
};

export default ItemList;
