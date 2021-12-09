import React, { useEffect, useState } from "react";
import * as d3 from 'd3';
import Scatterplot from './scatterplot';
import './Search.css'
import 'font-awesome/css/font-awesome.min.css';


    function SearchSelect(props) {
         
         let [selected, setGame] = useState(''); 
         const [name, setName] = useState('');
         const [data, setData] = useState([]);

         const handleChange = (e) => {
            console.log("Game Selected: " + e.target.value);
            setGame(e.target.value);
         };

         useEffect(()=> {
            d3.csv("/data/clean_data.csv")
               .then((da) =>{
                  setData(da);
               })
         }, []);
         const [short, setShort] = useState(data);
         const [dataSet, setDataSet] = useState(data);
         const [foundGames, setFoundGames] = useState(data)

         
         const filter = (e) => {
            const keyword = e.target.value;
            const placeholder = {id: 999999, Title:"Select an option", Platform:"", Year:""}
            if(keyword !== ''){
               const results = data.filter((game) =>{
                  return game.Title.toLowerCase().startsWith(keyword.toLowerCase());
               });
               setFoundGames(results);
               if(foundGames.length > 0){
                  const li = foundGames.slice(0,10);
                  li.splice(0,0,placeholder);
                  setShort(li);
               }
            }else{
               setFoundGames(data);
               if(foundGames.length > 0){
                  const li = foundGames.slice(0,10);
                  li.splice(0,0,placeholder);
                  setShort(li);
               }
            }
            setName(keyword);
         };
 
         useEffect(() => {
            d3.csv("/data/clean_data.csv")
               .then((da) => {
                  if(da[selected]){
                     console.log(da[selected]);
                  const columns = da.columns;
                  const list = da.map(function(element){
                     let count = 0;
                     columns.forEach(col =>{
                        if(element[col] === da[selected][col] && element[col]){
                           count += 1;
                        }
                     })
                     return{
                        row: element,
                        value: count
                     }
                  })
                  list.sort((a,b)=>
                     a.value < b.value
                  )
                  setDataSet(list.slice(0, 100));
                  console.log(dataSet)
                  return dataSet;
                  }
               })
         },[selected]);

         return (
         <React.Fragment>
            <div className="container">
               <input
                  type="search"
                  value={name}
                  onChange={filter}
                  className="input"
                  placeholder="&#xf002; Search for a Game"
               />
               <div className="game-list">
                  <select value={selected} onChange={handleChange} className="game-dropdown">
                  {short && short.length > 0 ?(
                     short.map((game) => (
                        <option key={game.id} className="game" value={game.id}>
                           {game.Title}
                           , {game.Platform}
                           , {game.Year}
                        </option>
                     ))
                  ):(
                     <option></option>
                  )}
                  </select>
               </div>
            </div>
            {dataSet && dataSet.length > 0 ?(
            <Scatterplot dataSet={dataSet}></Scatterplot>
            ):(
               <h1>Select a Game</h1>
            )}
         </React.Fragment>
      );
   }

export default SearchSelect;