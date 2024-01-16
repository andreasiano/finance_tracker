import AddExpenseForm from "./components/AddExpenseForm";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import Remaining from "./components/Remaining";
import { AppProvider } from "./context/AppContext";


function App() {
  return (
    <AppProvider>
    <div className="lg:px-20 px-3">
      <h1 className="text-4xl mt-3 font-bold text-slate-700 text-center">Finance Tracker</h1>
      <div className="flex lg:text-2xl text-xl flex-col md:flex-row md:space-x-4 mt-8">
        <Budget/>
        <Remaining/>
        <ExpenseTotal/>
      </div>
      <h3 className="text-2xl font-bold mb-2 mt-3 text-slate-700">Expenses</h3>
      <ExpenseList/>
      <h3 className="text-2xl font-bold mb-2 mt-8 text-slate-700">Add Expense</h3>
      <AddExpenseForm/>
    </div>
    </AppProvider>
  );
}

export default App;
