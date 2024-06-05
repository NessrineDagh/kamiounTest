import './App.css';
import DeleteAccount from './components/deleteaccount';
import Register from './components/register';


function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Register />
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <DeleteAccount />
      </div>
    </div>
  );
}

export default App;
