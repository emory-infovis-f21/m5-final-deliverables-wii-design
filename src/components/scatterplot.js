import React, {useRef, useEffect, useState} from "react";
import * as d3 from 'd3';
import {legendColor }from "d3-svg-legend";
import './scatterplot.css'


const Scatterplot = (dataSet) => {

    const svgRef = useRef();
    const [data, setData] = useState([]);
    const list = new Array();
    const cat = useRef('Critic Score');
    const num = useRef('North America Sales')
    const col = useRef('Genres')

    const optX = [
        {value: 'Critic Score', label: 'Critic Score'},
        {value: 'User Score', label: 'User Score'},
        {value: 'Global Sales', label: 'Global Sales'},
        {value: 'North America Sales', label: 'North America Sales'},
        {value: 'Average Play Length_All PlayStyles', label: 'Average All Playstyles Play Time'},
        {value: 'Average Play Length_Leisure', label: 'Average Leisure Play Time'}
    ]

    const optY = [
        {value: 'North America Sales', label: 'North America Sales'},
        {value: 'Average Play Length_All PlayStyles', label: 'Average All Playstyles Play Time'},
        {value: 'Average Play Length_Leisure', label: 'Average Leisure Play Time'},
        {value: 'Critic Score', label: 'Critic Score'},
        {value: 'User Score', label: 'User Score'},
        {value: 'Global Sales', label: 'Global Sales'}
    ]

    const optColor = [
        {value: 'Genres', label: 'Genres'},
        {value: 'Platform', label:'Platform'},
        {value: 'Developer', label:'Developer'},
        {value: 'Rating', label: 'Rating'}
    ]

    const selectionStyle = {
        display: 'flex',
        margin: '20px'
    }

    const chartStyle = {
        overflow: 'auto',
        height: '500px',
        width: '800px',
        display:'flex',
    }
    const tableStyle = {
        align: 'center',
        display: 'flex',
        padding: '20px',
        margin: '20px'
     }

    useEffect(()=> {
        d3.csv("/data/clean_data.csv")
            .then((da) =>{
                var list1 = dataSet.dataSet.map((game)=>{
                    return game.row;
                })
                setData(list1);
        })
    }, [dataSet.dataSet]);

    useEffect(() => {

        d3.selectAll('circle').remove()
        d3.selectAll('#legendArea').remove()
        d3.selectAll('text').remove()
        d3.selectAll('text').remove()
        d3.select('#x-cat').selectAll('option').remove()
        d3.select('#y-cat').selectAll('option').remove()
        d3.select('#color-cat').selectAll('option').remove()

        cat.current = 'Critic Score';
        num.current = 'North America Sales'
        col.current = 'Genres'

        let labelX = '';
        let labelY = '';
        //set up color
        const color = d3.scaleOrdinal()
            .domain(data.map(function(d) {return d[col.current]}))
            .range(d3.schemeCategory10)

        //set up container
        const w = 800;
        const h = 400;
        const margin = {top:20, right:20, bottom:30, left:40};
        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)
            .style('overflow', 'visible')
            .style('margin-top', '10px')
            .style('margin-bottom', '50px')
            .style('position', 'absolute')
            .style('left', '100px')
            .append('g')

        //set options
        d3.select('#x-cat')
            .selectAll('option')
                .data(optX)
            .join('option')
            .text(function(d){return d.label})
            .attr('value', function(d){return d.value})
            .attr('label', function(d){return d.label})

        d3.select('#y-cat')
            .selectAll('option')
                .data(optY)
            .join('option')
            .text(function(d){return d.label})
            .attr('value', function(d){return d.value})
            .attr('label', function(d){return d.label})

        d3.select('#color-cat')
            .selectAll('option')
                .data(optColor)
            .join('option')
            .text(function(d){return d.label})
            .attr('value', function(d){return d.value})
            .attr('label', function(d){return d.label})

            //setting scales
            const yScale = d3.scaleLinear()
                .domain([0, d3.max(data, function(d) {return d[num.current]})])
                .range([h,0]);

            const xScale = d3.scaleLinear()
                .domain([0, d3.max(data,function(d) {return d[cat.current]})])
                .range([0,w])


            //set up legend
            const legend = legendColor()
                .shapeWidth(20)
                .shapeHeight(5)
                .scale(color)

            d3.selectAll('#chartArea')
                .append('div')
                .attr('id','legendArea')
                .style('height', '400px')
                .style('width', '500px')
                .style('position', 'absolute')
                .style('left', '930px')
                .style('overflow-y', 'scroll')
                .append('svg')
                .attr('id', 'legend')
                .attr('height', '120vh')
                .attr('width', '100vh')
                .style('overflow', 'scroll')
                .style('display', 'flex')
                .call(legend)

            //set up zoom
            const zoom = d3.zoom()
                .on('zoom', zoomed);

            // rescaling
            function zoomed(e) {
                const newY = e.transform.rescaleY(yScale)
                const newX = e.transform.rescaleX(xScale)

                xAxis.call(d3.axisBottom(newX))
                yAxis.call(d3.axisLeft(newY))

                circle
                    .selectAll('circle')
                    .attr('cy', function(d) {return newY(d[num.current])})
                    .attr('cx', function(d) {return newX(d[cat.current])})
            }
    
        
            //clipPath - nothing draw outside the area

            svg.append('defs').append('svg:clipPath')
                .attr("id", "clip")
                .append('svg:rect')
                .attr('width', w)
                .attr('height',h)
                .attr('x', 0)
                .attr('y',0)

            //invisible rect on top of the chart to recover pointer events
            svg.append('rect')
                .attr('width', w)
                .attr('height',h)
                .style('fill', 'none')
                .style('pointer-events', 'all')
                .call(zoom)


            //set up axes
            const xAxis = d3.select('#x-axis')
                .attr('transform', `translate(0, ${h})`)
                .call(d3.axisBottom(xScale))
            
            const yAxis = d3.select('#y-axis')
                //.attr('transform', `translate(0, ${w})`)
                .call(d3.axisLeft(yScale))

            //set label
            svg.append('text')
                .attr('id','x-label')
                .attr('x', w/2)
                .attr('y', h+50)
                .text('Critic Score')
            
            svg.append('text')
                .attr('id', 'y-label')
                .attr('y', h-450)
                .attr('x', -320)
                .attr("transform", "rotate(270)")
                .text('North America Sales')

            //set up tooltip
            const tooldiv = d3.select('#chartArea')
                .append('div')
                .style('visibility', 'hidden')
                .style('position', 'absolute')
                .style('background-color', '#ccc')
                .style('padding', '10px')
                .style('border-radius', '5px')
                .style('color', 'black')

            //setting up data
            const circle = svg.append('g')
            .attr("clip-path", 'url(#clip)')
            
            circle
                .selectAll('circle')
                .data(data)
                .join('circle')
                    .attr('cx', d => xScale(d[cat.current]))
                    .attr('cy', d => yScale(d[num.current]))
                    .attr('r',5)
                    .attr('fill', d=>color(d[col.current]))
                    .on('mouseover',(e,d) => {
                        d3.select(e.currentTarget)
                            .attr('r', 5*2)
                            .attr('fill', 'orange')
                        tooldiv.style('visibility','visible')
                            .text(`${d['Title']}`)
                    })
                    .on('mousemove', (e,d)=>{
                        tooldiv.style('top', (e.pageY-50) + 'px')
                            .style('left', (e.pageX-50)+ 'px')
                    })
                    .on('mouseout', (e,d) => {
                        d3.select(e.currentTarget)
                            .attr('r', 5)
                            .attr('fill', '#ff00ad')
                        tooldiv.style('visibility','hidden')
                    })
                    .on('click', (e,d)=>{
                        list.push(d)
                        var rows = tbody.selectAll("tr")
                            .data(list)
                            .join('tr')

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
                    })
        
        //update option
        function updateX(selectedGroup) {
            cat.current = selectedGroup
            console.log(cat.current + ' ' + num.current)

            const newXScale = d3.scaleLinear()
                .domain([0, d3.max(data,function(d) {return d[cat.current]})])
                .range([0,w])

            const newYScale = d3.scaleLinear()
                .domain([0, d3.max(data, function(d) {return d[num.current]})])
                .range([h,0])

            d3.select('#x-axis')
                //.attr('transform', `translate(0, ${h})`)
                .call(d3.axisBottom(newXScale))

            d3.select('#y-axis')
                //.attr('transform', `translate(0, ${w})`)
                .call(d3.axisLeft().scale(yScale))

            //set up zoom
            const zoom = d3.zoom()
            .on('zoom', zoomed);

            function zoomed(e){
                const newY = e.transform.rescaleY(newYScale)
                const newX = e.transform.rescaleX(newXScale)

                xAxis.call(d3.axisBottom(newX))
                yAxis.call(d3.axisLeft(newY))

                circle
                    .selectAll('circle')
                    .attr('cy', function(d) {return newY(d[num.current])})
                    .attr('cx', function(d) {return newX(d[selectedGroup])})
            }

            svg.selectAll('rect')
                .call(zoom)

            circle
                .selectAll('circle')
                    .on('mouseover',(e,d) => {
                        if(selectedGroup !== 'Title') {
                            d3.select(e.currentTarget)
                            .attr('r', 5*2)
                            .attr('fill', 'orange')

                            tooldiv.style('visibility','visible')
                            .text(`Title: ${d['Title']}  ${labelX}: ${d[selectedGroup]} ${labelY}: ${d[num.current]}`)
                        }
                        else {
                            d3.select(e.currentTarget)
                            .attr('r', 5*2)
                            .attr('fill', 'orange')

                            tooldiv.style('visibility','visible')
                            .text(`${d['Title']}`)
                        }

                    })
                .transition()
                .duration(1000)
                .attr('fill', d=>color(d['Genres']))
                .attr('cx', function(d){return newXScale(d[selectedGroup])})    
                .attr('cy', function(d){return newYScale(d[num.current])})
            
        }

        d3.select('#x-cat').on('change', function(e,d) {
            const selectedOpt = d3.select(this).property('value')
            labelX = e.target.selectedOptions[0].getAttribute('label')
            d3.selectAll('#x-label').text(labelX)
            updateX(selectedOpt);
        })

        function updateY(selectedGroup) {
            num.current = selectedGroup
            console.log(cat.current + ' ' + num.current)

            const newXScale = d3.scaleLinear()
                .domain([0, d3.max(data,function(d) {return d[cat.current]})])
                .range([0,w])

            const newYScale = d3.scaleLinear()
                .domain([0, d3.max(data,function(d){return d[selectedGroup]})])
                .range([h,0])

            d3.select('#y-axis')
                .call(d3.axisLeft(newYScale))

            d3.select('#x-axis')
                .call(d3.axisBottom(newXScale))

                //set up zoom
            const zoom = d3.zoom()
            .on('zoom', zoomed);

            function zoomed(e){
                const newY = e.transform.rescaleY(newYScale)
                const newX = e.transform.rescaleX(newXScale)

                xAxis.call(d3.axisBottom(newX))
                yAxis.call(d3.axisLeft(newY))

                circle
                    .selectAll('circle')
                    .attr('cy', function(d) {return newY(d[selectedGroup])})
                    .attr('cx', function(d) {return newX(d[cat.current])})
            }

            svg.selectAll('rect')
                .call(zoom)

            circle
                .selectAll('circle')
                .transition()
                .duration(1000)
                .attr('cy', d=> newYScale(d[selectedGroup]))
                .attr('cx', function(d){return newXScale(d[cat.current])})
                .attr('fill', d=>color(d['Genres']))
            
        }
        d3.select('#y-cat').on('change', function(e,d) {
            const selectedOpt = d3.select(this).property('value');
            labelY = e.target.selectedOptions[0].getAttribute('label')
            d3.selectAll('#y-label').text(labelY);
            updateY(selectedOpt);
        })
        function updateColor(selectedGroup) {

            col.current = selectedGroup;

            const color = d3.scaleOrdinal()
                .domain(data.map(function(d) {return d[selectedGroup]}))
                .range(d3.schemeCategory10)

                const legend = legendColor()
                .shapeWidth(20)
                .shapeHeight(5)
                .scale(color)

            d3.selectAll('#legendArea').remove()
            
            if(selectedGroup === 'Rating') {
                d3.selectAll('#chartArea')
                .append('div')
                .attr('id','legendArea')
                .style('height', '400px')
                .style('width', '500px')
                .style('position', 'absolute')
                .style('left', '930px')
                .style('overflow-y', 'scroll')
                .append('svg')
                .attr('id', 'legend')
                .style('overflow', 'scroll')
                .style('display', 'flex')
                .call(legend)
            }
            else if (selectedGroup === 'Platform') {
                d3.selectAll('#chartArea')
                .append('div')
                .attr('id','legendArea')
                .style('height', '400px')
                .style('width', '500px')
                .style('position', 'absolute')
                .style('left', '930px')
                .style('overflow-y', 'scroll')
                .append('svg')
                .attr('id', 'legend')
                .style('overflow', 'scroll')
                .style('display', 'flex')
                .call(legend)
            }
            else if(selectedGroup === 'Developer') {
                d3.selectAll('#chartArea')
                .append('div')
                .attr('id','legendArea')
                .style('height', '400px')
                .style('width', '500px')
                .style('position', 'absolute')
                .style('left', '930px')
                .style('overflow-y', 'scroll')
                .append('svg')
                .attr('id', 'legend')
                .attr('height', '90vh')
                .style('overflow', 'scroll')
                .style('display', 'flex')
                .call(legend)
            }
            else {
            d3.selectAll('#chartArea')
                .append('div')
                .attr('id','legendArea')
                .style('height', '400px')
                .style('width', '500px')
                .style('position', 'absolute')
                .style('left', '930px')
                .style('overflow-y', 'scroll')
                .append('svg')
                .attr('id', 'legend')
                .attr('height', '120vh')
                .attr('width', '100vh')
                .style('overflow', 'scroll')
                .style('display', 'flex')
                .call(legend)
            }

            circle
                .selectAll('circle')
                .attr('fill', d => color(d[selectedGroup]))
        }

        d3.select('#color-cat').on('change', function(e,d) {
            const selectedOpt = d3.select(this).property('value')
            updateColor(selectedOpt);
        })

        d3.selectAll('table').remove()
        var table = d3.select("#tableArea").append("table")
        var thead = table.append("thead")
        var tbody = table.append("tbody")

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

        thead.append("tr")
            .selectAll("th")
            .data(columns)
            .join("th")
            .text(function(d) {
                return d;
            })
   
    }, [data]);

    return(
        <React.Fragment>
            <div className='selection' style={selectionStyle}>
                <p>Select X Value</p>
                <select id='x-cat'>Select X Value</select>&nbsp;&nbsp;
                <p>Select Y Value</p>
                <select id= 'y-cat'>Select Y Value</select>&nbsp;&nbsp;
                <p>Select Color Code</p>
                <select id= 'color-cat'></select>
            </div>
            <div id = 'chartArea' style={chartStyle}>
                <svg ref = {svgRef}>
                    <g id ='x-axis'></g>
                    <g id = 'y-axis'></g>
                </svg>
            </div>
            <div id = 'tableArea' style={tableStyle}></div>

            
        </React.Fragment>
    )
}

export default Scatterplot;
