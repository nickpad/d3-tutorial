import D3 from 'd3';

// Bar chart 1

const data = [4, 8, 15, 16, 23, 42];
const scale = D3.scale.linear().domain([0, D3.max(data)]).range([0, 400]);

D3.select('.chart')
  .selectAll('div')
    .data(data)
  .enter().append('div')
    .style('width', (d) => { return `${scale(d)}px`; })
    .text((d) => { return d; });
