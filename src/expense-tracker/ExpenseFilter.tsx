import React from "react";
import { categories } from "../App";

interface Props {
  onChange: () => void;
  selectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onChange, selectCategory }: Props) => {
  return (
    <div className="mb-3">
      <select
        id="category"
        className="form-select"
        onChange={(e) => {
          onChange;
          selectCategory(e.target.value);
        }}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
