import React, { useEffect } from 'react'
import { connect } from 'react-redux/es/exports'
import { link } from '../interface/common'
import { useNavigate } from 'react-router-dom'
import { setActiveLinkAction } from '../Redux/actions'

type props = {
    sidebar: link[],
    linkClick: any
}

function Sidebar({sidebar, linkClick}: props) {
    const navigate = useNavigate();
    const linkClicked = (id: number)=>{
        linkClick(id);
        switch (id){
            case 1:
                navigate("contact");
                break
            case 2:
                navigate("maps")
                break
            default:
                break
        }
    }
  return (
    <div className='sidebar'>
        {
            sidebar.map((link)=>{
                return (
                    <span 
                        // className={`link ${link.active ? "active" : ""}`} 
                        className='link'
                        key={link.id}
                        onClick={()=>{linkClicked(link.id)}}
                    >
                        {link.name}
                    </span>
                )
            })
        }
    </div>
  )
}

const mapStateToProps = (state: any)=>({
    sidebar: state.sidebar.allLinks
})

const mapDispatchToProps = (dispatch: any)=>({
    linkClick: (id: number)=>{dispatch(setActiveLinkAction(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)