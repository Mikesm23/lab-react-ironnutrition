import React from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
function SearchBar({search, onSearch}) {

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={(event) => {
        onSearch(event.target.value)
      }} />
    </>
  );
}

export default SearchBar;