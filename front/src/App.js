import './App.css';
import RequestService from './config/index'
import React,{useState,useEffect} from 'react'


function App() {
  const [user, setUsers] = useState([]);
  //const [data, setData] = useState([]);

  const getUsers = async () => {
    const {data} = await RequestService.get('api/task/');
    console.log(data);
    //const {users} = data;
    setUsers(data);
    //setData(user);
    
    }; 
    //console.log(user._id);
    useEffect(() => {
      getUsers();
      }, []); 
    
  return (
    
    <div className="App">
      {user.map((item) => (
          <h1 key={item.id}>
            {item.description} 
          </h1>
      ))}
      
    </div>
  )
}

export default App;
