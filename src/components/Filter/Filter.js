import React from 'react';
import { FilterBox, FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterBox>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterBox>
  );
};

export default Filter;
