// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import ExpenseForm from "./expense-tracker/ExpenseForm";
import ExpenseFilter from "./expense-tracker/ExpenseFilter";
import ExpenseList from "./expense-tracker/ExpenseList";

export const categories = ["Groceries", "Utilities", "Entertainment"];

function App() {
  const [items, setItems] = useState([
    { id: 1, description: "abc", amount: 22, category: "Groceries" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? items.filter((e) => e.category === selectedCategory)
    : items;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(data) => {
            setItems([...items, { ...data, id: items.length + 1 }]);
            console.log(data);
          }}
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onChange={() => console.log("Clicked")}
          selectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        onDelete={(id) => setItems(items.filter((e) => e.id !== id))}
        expenses={visibleExpenses}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
