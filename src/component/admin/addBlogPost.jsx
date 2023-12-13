import React, { useState } from "react";
import { collection, addDoc, getFirestore } from "@firebase/firestore";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "@firebase/storage";
import { v4 as uuidv4 } from "uuid";

import withFirebaseCollection from "../HOK/withFirebaseCollection";

const AddBlogPost = ({ data }) => {
  const id = uuidv4();
  const [blogData, setBlogData] = useState({
    addData: new Date(),
    category: "",
    description: "",
    fotoUrl: "",
    longDesck: "",
    seoDescription: "",
    seoTitle: "",
    title: "",
    uid: id, // Замініть на фактичний user_id
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    uploadImageToStorage(file);
  };

  const uploadImageToStorage = async (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "blog_images/" + file.name);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    console.log(downloadURL);
    setBlogData((prevData) => ({
      ...prevData,
      fotoUrl: downloadURL,
    }));
  };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const firestore = getFirestore();
  //     const docRef = await addDoc(collection(firestore, "blog"), blogData);
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //   }
  // };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const firestore = getFirestore();
      const docRef = await addDoc(collection(firestore, "blog"), blogData);
      console.log("Document written with ID: ", docRef.id);

      // Перезавантаження сторінки після успішного завантаження
      window.location.reload();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div>
      <h2>Add Blog Post</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Add other input fields based on your requirements */}
        <label>
          Category:
          <select
            name="category"
            value={blogData.category}
            onChange={handleInputChange}
          >
            <option value="">Select Category</option>
            {data.map((category, index) => (
              <option key={index} value={category.categoryName}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
           Малий опис:
          <textarea
            name="description"
            value={blogData.description}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <br />
        <label>
          Великий опис:
          <textarea
            name="longDesck"
            value={blogData.longDesck}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <br />
        <label>
          Сео опис:
          <textarea
            name="seoDescription"
            value={blogData.seoDescription}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <br />
        <label>
          Сео title:
          <textarea
            name="seoTitle"
            value={blogData.seoTitle}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <br />
        <label>
          title:
          <textarea
            name="title"
            value={blogData.title}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <br />
        <label>
          Foto:
          <input type="file" onChange={handleFileChange} />
        </label>
        <br />
        {/* Add other input fields */}
        <button type="submit">Add Blog Post</button>
      </form>
    </div>
  );
};

export default withFirebaseCollection("categoryBlogUa")(AddBlogPost);
