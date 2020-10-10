import React from 'react';
import './ImageFormLink.css';
const ImageFormLink = ({onInputChange,onButtonClick}) => {
    return(
        <div><p>Magic brain app For Face Reconigintion</p>
          <div className='center'>
            <div className='form center f3 pa4 shadow-5 br3 '>
                <input onChange={onInputChange} className='f4 pa2 w-70 center' type="text"/>
                <button onClick={onButtonClick} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' >Detect</button>
            </div>
           </div>
        </div>
    )
}
export default ImageFormLink;