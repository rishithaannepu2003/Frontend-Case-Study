import SearchAppBar from './components/Navbar';
import CardWrapper from './components/CardWrapper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import CircularProgress from '@mui/joy/CircularProgress';
import "./App.css";
function App() {
  const [text, setText] = useState("");
  const [oriData, setOriData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLogin,setIsLogin] = useState(false);
  const [isLoad,setIsLoad] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/users');
        setOriData(res.data.users);
        setIsLoad(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (text.trim() === "") {
      setFilteredData(oriData); 
    } else {
      setFilteredData(
        oriData.filter(user =>
          user.firstName.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  }, [text, oriData]);

  console.log(isLogin);

  return (
    <div>
      <SearchAppBar text={text} setText={setText} isLogin={isLogin} setIsLogin={setIsLogin} />

      <Routes>
        <Route path="/login" element={<Login setIsLogin={setIsLogin} isLogin={isLogin}/>}/>
        <Route exact path="/" element={isLoad?(<div className="loadbar"><CircularProgress size="lg"/></div>):(<CardWrapper filteredData={filteredData} />)} />
        <Route path="/adminpanel" element={<AdminPanel filteredData={filteredData}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
