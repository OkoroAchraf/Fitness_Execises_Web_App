import React from 'react'
import {Box} from "@mui/material";
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {
  return (
    <div className='horizontal-scroll-menu'>
        {data.map((item) => (
        <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            className="horizontal-scroll-menu-item"
            m ="0 40px"
        >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}></BodyPart>
        </Box>
            ))}
    </div>
  )
}

export default HorizontalScrollbar;