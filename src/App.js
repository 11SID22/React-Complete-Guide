import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Movies',
      amount: 200,
      date: new Date(2020, 7, 14),
      location: 'PVR Oberoi (Mumbai)'
    },
    {
      id: 'e2',
      title: 'New Bike',
      amount: 400000,
      date: new Date(2021, 2, 12),
      location: 'BMW motors (Mumbai)'
    },
    {
      id: 'e3',
      title: 'Trip',
      amount: 2000,
      date: new Date(2021, 2, 28),
      location: 'Ratnagiri'
    },
    {
      id: 'e4',
      title: 'Shopping',
      amount: 1500,
      date: new Date(2021, 5, 12),
      location: 'Borivali (Mumbai)'
    },
  ];

  return (
    <div>
      <h2>Expense Items:</h2>
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;
