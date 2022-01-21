import React, {useState} from "react";
import SwiperCore, {Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import {Swiper, SwiperSlide} from "swiper/react";
import { Card,Typography, CardHeader, CardMedia,CardContent, IconButton, Grid } from '@mui/material';
import {DeleteOutlined} from '@mui/icons-material';
import {AiOutlineHeart, AiTwotoneHeart} from 'react-icons/ai';

function CustomCard() {
    const [heart,setHeart] = useState(false);
    
    const cardStyle = {'margin' : '10px', 'width' : '95%'};

    function heartClick() {
        setHeart(!heart);
    }
    
    return (
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
                    title = "test"
                    subheader = "test2"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        details
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

function MainSwipe(props) {
    const {novelList,setNovelList} = props
    const cardStyle = {'margin' : '10px', 'width' : '600px'};
    const showNovelList = novelList.map( (card, index) => {
        console.log(index);
        return (novelList[index] === true ? <SwiperSlide key={index} onClick={()=>{makeNovel(index)}}> 
        <CustomCard ></CustomCard >
        </SwiperSlide > : <></>)
        }
    )

    function makeNovel(index) {
        var tmp = novelList;
        tmp[index] = false;
        setNovelList([...tmp])
    }

    SwiperCore.use([Navigation]);

    return (
        <div style={{'padding' : '10px', 'marginTop':'30px'}}>
            <Swiper 
            style={cardStyle}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)
            }
            > 
                {showNovelList}
            </Swiper>
        </div>
      );
};

export default MainSwipe;