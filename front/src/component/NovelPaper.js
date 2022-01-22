import React, {useState} from "react";
import { Card,Typography, CardHeader, CardMedia,CardContent, IconButton, Grid } from '@mui/material';
import {DeleteOutlined} from '@mui/icons-material';
import {AiOutlineHeart, AiTwotoneHeart} from 'react-icons/ai';

function NovelPaper(props) {
    const [heart,setHeart] = useState(false);
    const {novelList,setNovelList} = props;
    const cardStyle = {'margin' : '10px', 'width' : '1000px'};
   
    function heartClick() {
        setHeart(!heart);
    }
    const showNovelList = novelList.map( (card, index) => {
        return (novelList[index] === false ? 
            <div>
            <Card style={cardStyle}>
                <CardHeader
                    action={
                        <div>
                            <IconButton aria-label="settings" >
                                <DeleteOutlined />
                            </IconButton>
                            <IconButton aria-label="settings" onClick={heartClick}>
                            {heart === false?  <AiOutlineHeart/>: <AiTwotoneHeart color="red"/>}
                            </IconButton>
                        </div>
                    }
                    title = "title"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                   zzzz
                    </Typography>
                </CardContent>
            </Card>
        </div>
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