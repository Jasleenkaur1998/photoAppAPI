import React, { useState } from 'react';


export default function PhotoContainer(props) {

   const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(counter + 1);
        console.log(setCounter)
      };

    return (
        <div>
            <div style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                
                <img src={props.data.imageURL} style={{ width: '100%' }} />

                <div id="avatar-container" style={{ display: 'flex', gap: '8px', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: '4px 10px' }}>
                   
                    <img src={props.data.avatar} style={{ width: '50px', borderRadius: 50 }} />

                    <h5 style={{ flexGrow: '2' }}>{props.data.name}</h5>

                    <button  onClick={increase} id="likeButton" style={{padding:'10px', borderRadius:'40%', border:'1px'}} type='button'>
                       
                        <i className="fa fa-heart"></i>
                        <span>{counter}</span>
                    
                    </button>

                </div>
            </div>
        </div>
    )
}
