// Import required modules from React Router DOM
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Import your CSS styles
import './App.css';
// Import the component that will be shown at the root path "/"
import StudentTable from './StudentTable';
import EditStudent from './EditStudent';
import ViewDetails from './ViewDetails';
import CreateStudent from './CreateStudent';

function App() {
  return (                // BrowserRouter enables routing in your React app
    <BrowserRouter>
      <Routes>

        {/* Define a route for path "/"
            - When user visits the root URL (localhost:5173/), show StudentTable component
            - "element" is the component that should render  */}
        <Route path="/" element={<StudentTable></StudentTable>}> </Route>
        <Route path="/student/edit/:studentid" element={<EditStudent></EditStudent>}> </Route>
        <Route path="/student/view/:studentid" element={<ViewDetails></ViewDetails>}> </Route>
        <Route path="/student/create" element={<CreateStudent></CreateStudent>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
