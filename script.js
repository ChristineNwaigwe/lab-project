window.onload = () => {
    const data = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    
    const svg = d3.select("#line-chart");
    const width = parseInt(svg.attr("width"), 10);
    const height = parseInt(svg.attr("height"), 10);
    
    const x = d3.scaleLinear()
        .domain([0, data.length - 1])
        .range([0, width]);
    
    const y = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([height, 0]);
    
    const line = d3.line()
        .x((d, i) => x(i))
        .y(d => y(d));
    
    svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", line)
        .attr("stroke", "blue")
        .attr("fill", "none")
        .attr("stroke-width", 2);
};
