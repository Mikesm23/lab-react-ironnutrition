import './App.css';
import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';


function App() {

const [foods, setFoods] = useState(foodsJSON)
const [search, setSearch] = useState('')

function handleNew(e, newFood){
  e.preventDefault()
  setFoods([newFood, ...foods])

}

return (
    <div className="App">

      <div className='form-div'>
        <AddFoodForm onNew = {handleNew}/>
      </div>

      <SearchBar onSearch = {setSearch} search= {search}/>

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.filter((elem) => {
          return (
            elem.name.toLowerCase().includes(search.toLowerCase())
          )
        })
        
        .map((elem, i) => {
          return (
            <FoodBox key={elem.name+i} food={elem}/>
          )
        })}
        
      </Row>
    </div>
  );
}

export default App;
