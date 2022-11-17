import React,{useRef,useState,useEffect} from "react";
import Navbar from "../Navbar/Navbar"
import {Busca} from "../Busca/Busca"
import {SearchGroupsResullt} from "../Resultado/SearchGroupsResult";
const userToken = window.localStorage.getItem("token");
//import data from "../dataGroup";

export const SearchGroups = () => {

  const [dataGroup, setDataGroup] = useState([])
  const [dataSearch, setDataSearch] = useState([])
  const inputref = useRef();
  const [filter, setFilter] = useState('');

  const searchText = (e) =>{
    setFilter(e.target.value)
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      inputref.current.blur();
    }
  }

  useEffect(() => {

    var requestOptions = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        'x-access-token': userToken
      },
      redirect: 'follow'
    };
    
    fetch("http://localhost:5000/grupos-de-estudos", requestOptions)
      .then((res) => res.json())
      .then((data) => {
         console.log(data)
         setDataGroup(data)
         
      }   
      
      )

  }, []);

  useEffect(()=>{
    const data = dataGroup.filter(item=>{
      return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase().trim())
        )
    })
    setDataSearch(data)
  }, [filter,dataGroup])


  return (
  
    <>
      <Navbar/>
      <div>
      <h1 className="titleSearchGroups">Buscar grupos</h1>
      <Busca searchText={searchText} filter={filter} handleKeyPress={handleKeyPress} inputref={inputref}/>
      <SearchGroupsResullt dataSearch={dataSearch}/>
      
    </div>
    
    </>
  );
};
