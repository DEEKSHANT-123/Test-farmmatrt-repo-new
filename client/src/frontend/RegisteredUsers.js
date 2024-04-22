import React, { useEffect, useState } from "react";
import axios from "axios";

const RegisteredUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUsername, setEditedUsername] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/registered-users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching registered users:", error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Initial fetch when component mounts
  }, []); // Empty dependency array ensures it only runs once after initial mount

  const handleEdit = (userId, username, email) => {
    setEditingUserId(userId);
    setEditedUsername(username);
    setEditedEmail(email);
  };

  const handleUpdate = async (userId) => {
    try {
      await axios.put(`http://localhost:5000/api/registered-users/${userId}`, {
        username: editedUsername,
        email: editedEmail,
      });
      // After successful update, fetch updated users
      await fetchUsers(); // Refetch updated data
      setEditingUserId(null); // Reset editing state
      setEditedUsername(""); // Clear edited username
      setEditedEmail(""); // Clear edited email
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/registered-users/${userId}`);
      // After successful delete, fetch updated users
      await fetchUsers(); // Refetch updated data
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h2>Registered Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {editingUserId === user._id ? (
              <div>
                <input
                  type="text"
                  value={editedUsername}
                  onChange={(e) => setEditedUsername(e.target.value)}
                />
                <input
                  type="email"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                />
                <button onClick={() => handleUpdate(user._id)}>Save</button>
              </div>
            ) : (
              <div>
                <strong>Username:</strong> {user.username}<br />
                <strong>Email:</strong> {user.email}<br />
                <button onClick={() => handleEdit(user._id, user.username, user.email)}>Edit</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegisteredUsers;