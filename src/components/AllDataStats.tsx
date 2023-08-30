import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { Line } from 'react-chartjs-2';

function AllDataStats() {
    const [allData, setAllData] = useState<any>({})
    const { data, error, isLoading } = useQuery('countryData', async ()=>{
        let d = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
        return d.data
    });

    const [x, setX] = useState<string[]>([]);
    const [y, setY] = useState<number[]>([]);

    const options = {
        scales: {
            x: {
              type: 'category', // Use the 'category' scale for categorical data
            },
            y: {
              // Other y-axis scale options
            },
          },
      };

    useEffect(()=>{
        let d = data?.cases as object;
        if(d){
            let xData: string[] = [];
            let yData: number[] = [];
            Object.entries(d).forEach(([key, value])=>{
                xData.push(String(key));
                yData.push(parseInt(value));
            });
            setX([...xData]);
            setY([...yData]);
        }
    }, [data])
  return (
    (x.length && y.length) ? 
        // <Line 
        //     data={{
        //         labels: x,
        //         datasets: [
        //             {
        //                 label: 'My Line Chart',
        //                 data: y,
        //                 fill: false,
        //                 borderColor: 'rgb(75, 192, 192)',
        //                 tension: 0.1,
        //             },
        //         ],
        //     }}
        //     options={{scales: {
        //         x: {
        //             type: "timeseries"
        //         },
        //         y: {
        //             type: "linear"
        //         }
        //     }}}
        // />
        <span></span>
    : <span>Loading..</span>
  )
}

export default AllDataStats