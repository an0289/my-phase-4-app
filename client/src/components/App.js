import React from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Login from "../pages/Login"
import ItemList from "../pages/ItemList"
import NewReview from "../pages/NewReview"
import Test from "./Test"
import { Menu, Container, Button, Header } from 'semantic-ui-react'

function App() {
  return (
   <div>
   {/* {/* <Header >
    Hotdogs 
    <a href='espn.com'>Link</a>
   </Header>
   <NavBar />

      <Routes>
        <Route path="/new"
          element={<NewReview />}
        />
        <Route path="/"
          element={<ItemList />}
        />
      </Routes> */}
   </div>
  );
}

export default App;
