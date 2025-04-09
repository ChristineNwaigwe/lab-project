import React from 'react';
import { Bubble } from 'react-chartjs-2';
// import {getResearchOutput} from './api';

import {
    Chart as ChartJS,
    PointElement,
    LinearScale,
    Tooltip,
    Legend,
    Title,
} from 'chart.js'


ChartJS.register(PointElement, LinearScale, Tooltip, Legend, Title);


async function getResearchOutput() {
    return [
        {width:10,height:20, count:5},
        {width:15,height:10, count:4},
        {width:20,height:15, count:8},
        {width:25,height:35, count:10},
    ];
}

async function createBubbleChart(){
    const chartData = await getResearchOutput();
    const correctData = chartData.map(row => ({
        x: row.width,
        y: row.height,
        r: row.count
    }));

    new Chart(
        document.getElementById('researchChart').getContext('2d'),
        {
            type: 'bubble',
            data: {
                responsive: true,
                options: {
                    aspectRatio: 1,
                },
                plugins: {
                    legend: {
                        position: "top",
                    },
                    title: {
                        display: true,
                        text: "Research Output",
                    }
                },
                datasets: [
                    {
                        label: 'Ouputs',
                        data: correctData,
                    }
                ]

            },
            scales: {
                x :{
                    max: 500
                },
                y: {
                    max:500
                }
            }
        }
    );
}();


