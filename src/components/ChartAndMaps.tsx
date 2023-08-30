import React, { useEffect, useState } from 'react'
import Maps from './Maps'
import '../styles/mapsAndCharts.css'
import AllDataStats from './AllDataStats'

type iButtons = {
  name: string,
  active: boolean,
  id: string,
}

function ChartAndMaps() {
  const [allButtons, setAllButtons] = useState([
    {
      active: true,
      name: "Country",
      id: "country"
    },
    {
      active: false,
      name: "Fluctuation",
      id: "fluctuation"
    },
    {
      active: false,
      name: "All",
      id: "all"
    }
  ] as iButtons[]);
  const [activeId, setActiveId] = useState<String>("")

  const headerButtonClicked = (id: string)=>{
    let temp = allButtons.map((x)=>{
      if(x.id === id){
        x.active = true
      }else{
        x.active = false
      }
      return x
    });
    setAllButtons([...temp])
  }

  useEffect(()=>{
    let act = allButtons.find((x)=>{return x.active})
    if(act){
      setActiveId(act.id);
    }
  }, [allButtons])

  return (
    <div className='chartNMaps'>
      <div className="topHeader">
        {
          allButtons.map((x)=>{
            return (
              <span 
                className={`btn ${x.active ? "btnActive" : ""}`}
                onClick={()=>{headerButtonClicked(x.id)}}
              >{x.name}</span>
            )
          })
        }
      </div>
      {
        activeId === "country" &&
        <Maps/>
      }
      {
        activeId === "all" &&
        <AllDataStats/>
      }
    </div>
  )
}

export default ChartAndMaps