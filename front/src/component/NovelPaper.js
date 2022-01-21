import React, {useState} from "react";
import {Paper,Typography} from '@mui/material';

function NovelPaper(props) {
    const paperStyle = {'marginTop' : '30px', 'width' : '75vh', 'height' : '200px'};
    const {novelList,setNovelList} = props;
    const showNovelList = novelList.map( (card, index) => {
        return (novelList[index] === false ?   
        <Paper style = {paperStyle} elevation={4}>
            <Typography style = {{textAlign: "center", marginBottom:"10px", border:"1px solid black"}}variant="h5">jhl8109</Typography>
            <Typography variant="body2">zzzzzzzzzzzzzzzzzzzzzzzzzzzzz</Typography>
        </Paper>
            : <></>)
        }
    )
    return(
        <div>
            {showNovelList}
        </div>
    )
}

export default NovelPaper;