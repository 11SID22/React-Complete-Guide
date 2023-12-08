// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Movies',
      amount: 200,
      date: new Date(2022, 4, 22),
      location: 'PVR Oberoi (Mumbai)'
    },
    {
      id: 'e2',
      title: 'New Bike',
      amount: 400000,
      date: new Date(2024, 9, 11),
      location: 'BMW motors (Mumbai)'
    },
    {
      id: 'e3',
      title: 'Trip',
      amount: 2000,
      date: new Date(2024, 2, 25),
      location: 'Ratnagiri'
    },
    {
      id: 'e4',
      title: 'Shopping',
      amount: 1500,
      date: new Date(2021, 11, 15),
      location: 'Borivali (Mumbai)'
    },
  ];

  return (
    <div>
      <h2>Expense Items:</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
