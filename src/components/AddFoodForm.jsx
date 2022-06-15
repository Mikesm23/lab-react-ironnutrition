import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm({onNew}) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    function handleSubmit(e) {
        let newFood = {name, image, calories, servings}
        e.preventDefault()
        onNew(e, newFood)
        setName('')
        setImage('')
        setCalories(0)
        setServings(0)
    }

  return (
    <form onSubmit = {handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" placeholder='Bitoque' onChange={(e) => {
        setName(e.target.value)
      }} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(e) => {
        setImage(e.target.value)
      }} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={(e) => {
        setCalories(e.target.value)
      }} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={(e) => {
        setServings(e.target.value)
      }} />

      <button className='create-btn' type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
