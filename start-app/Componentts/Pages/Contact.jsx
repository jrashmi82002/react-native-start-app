import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { firebase_db } from "../../FirebaseConfig";
import {
  getDocs,
  addDoc,
  getDoc,
  deleteDoc,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";

const Contact = () => {
  const [contactlist, setContactlist] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [phone, setPhone] = useState(0);

  const contcollectionref = collection(firebase_db, "cont");
  useEffect(() => {
    getcontactlist();
  }, []);
  const getcontactlist = async () => {
    // read data
    try {
      const datas = await getDocs(contcollectionref);
      const filterdata = datas.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setContactlist(filterdata);
      console.log(filterdata);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitcon = async () => {
    try {
      console.log(`${email} ${username} ${phone} ${query}`);
      await addDoc(contcollectionref, {
        email: email,
        phone: phone,
        query: query,
        username: username,
      });
      getcontactlist();
      alert("Submitted");
    } catch (error) {
      console.log(error);
    }
  };

  const deletecon = async (id) => {
    try {
      const condoc = doc(firebase_db, "cont", id);
      await deleteDoc(condoc);
      getcontactlist();
    } catch (error) {
      console.log(error);
    }
  };
  const [updatequery, setUpdatequery] = useState("");
  const updatecon = async (id, updateq) => {
    try {
      const condoc = doc(firebase_db, "cont", id);
      await updateDoc(condoc, { query: updateq });
      getcontactlist();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>Contact Us!</Text>
      <ImageBackground
      // source={{ uri: "https://source.unsplash.com/1024x768/?water" }}
      >
        <Text>Hey</Text>
        <TextInput
          placeholder="username"
          autoCapitalize="none"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="number"
          autoCapitalize="none"
          onChangeText={(text) => setPhone(text)}
        />
        <TextInput
          placeholder="query"
          autoCapitalize="none"
          onChangeText={(text) => setQuery(text)}
        />
        <Button title="submit" onPress={onSubmitcon} />
      </ImageBackground>
      <View>
        {contactlist.map((con) => (
          <View style={{ margin: 5 }}>
            <Text>Email: {con.email}</Text>
            <Text>Query: {con.query}</Text>
            <Text>Id: {con.id}</Text>
            <Button title="Delete query" onPress={() => deletecon(con.id)} />
            <TextInput
              placeholder="change query"
              onChangeText={(text) => setUpdatequery(text)}
            />
            <Button
              title="Update query"
              onPress={() => updatecon(con.id, updatequery)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
});
