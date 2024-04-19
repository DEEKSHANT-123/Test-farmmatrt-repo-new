import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  margin-right: 5px;
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: ${({ bg }) => bg || '#007bff'};
  color: #fff;
`;

const RegisteredUsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/registered-users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching registered users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/api/registered-users/${userId}`);
      // Refresh the user list after deletion
      const response = await axios.get('http://localhost:3001/api/registered-users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Container>
      <h2>Registered Users</h2>
      <Table>
        <thead>
          <tr>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <Td>{user.username}</Td>
              <Td>{user.email}</Td>
              <Td>
                <Button bg="#007bff">Edit</Button>
                <Button bg="#dc3545" onClick={() => handleDelete(user._id)}>Delete</Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default RegisteredUsersPage;