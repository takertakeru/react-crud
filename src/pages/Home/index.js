import axios from "axios";
import React, { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../http/firebase";
import { toast } from "react-toastify";

export default function Home({ title }) {
  // Declare a new state variable, which we'll call "count"
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
  });

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "diomari"));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setUsers(users);
    console.log(users);
  };

  const deleteData = async (col, id) => {
    try {
      const deletedDoc = await deleteDoc(doc(db, col, id));
      toast("Deleted Data!");
    } catch (error) {
      console.log(error);
    }
  };

  const addDocument = async (col, doc) => {
    // Add a new document with a generated id.
    try {
      const docRef = await addDoc(collection(db, col), doc);
      toast("Succesfully added a record");
    } catch (error) {
      toast.error(error);
    }
  };

  const handleDelete = (id) => {
    deleteData("diomari", id);
    getData();
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    if (!form.first_name && !form.last_name) {
      return;
    }
    e.preventDefault();
    addDocument("diomari", form);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Covid Tracker</h2>
      <div className="box-1">
        <form onSubmit={handleSubmit}>
          <br></br>
          <label>First Name</label>
          <input type="text" name="first_name" onChange={handleInput}></input>
          <br></br>
          <label>Last Name</label>
          <input type="text" name="last_name" onChange={handleInput}></input>
          <button type="submit">Submit</button>
        </form>
        <h2>{JSON.stringify(form)}</h2>
      </div>
      <div className="box-2">
        <h2>List of Users</h2>
        <ul>
          {users?.map((user) => (
            <li key={user.first_name}>
              {user.first_name} {user.last_name}
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
