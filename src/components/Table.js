import React, { useEffect, useState } from "react";
import * as d3 from 'd3';

const Table = (data, num) => {

   const [GAMES, setData] = useState([]);
 
   const tableStyle = {
      align: 'center',
      display: 'flex',
      padding: '20px'
   }

   useEffect(()=> {
      console.log(data.data.length);
        d3.csv(`${process.env.PUBLIC_URL}/data/clean_data.csv`)
            .then((da) =>{
                var list = data.data.map((game)=>{
                    return game;
                })
                setData(list);
                console.log(list)
        })
    });

   const columns = [
      'Title',
      'Year',
      'Platform',
      'Critic Score',
      'User Score',
      'Developer',
      'Genres',
      'Rating'
   ]

   useEffect(() => {
   d3.selectAll('table').remove()
   var table = d3.select("#tableArea").append("table")
   var thead = table.append("thead")
   var tbody = table.append("tbody")

   thead.append("tr")
      .selectAll("th")
      .data(columns)
      .join("th")
      .text(function(d) {
         return d;
      })
   
   var rows = tbody.selectAll("tr")
      .data(GAMES)
      .join('tr')

      rows.exit().remove()
   
      var cells = rows.selectAll('td')
      .data(function(cell) {
         return columns.map(function(game) {
               return {
                  column: game,
                  value: cell[game]
               }
         })
      }).enter()
      .append('td')
      .text(function(d) {
         return d.value;
      });
      
      cells.exit().remove()

   }, [GAMES])

   return(
   <React.Fragment>
      <h1>Recommendations</h1>
         <div id='tableArea' style={tableStyle}></div>
      
   </React.Fragment>
   )
}
export default Table;