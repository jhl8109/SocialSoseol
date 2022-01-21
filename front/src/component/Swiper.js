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
    const cardStyle = {'margin' : '10px', 'width' : '500px'};
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

function MainSwipe() {
    const [cardList,setCardList] = useState([]);
    const cardStyle = {'margin' : '10px', 'width' : '600px'};

    function clickTest(id) {
        console.log("clicked", id);
    }

    SwiperCore.use([Navigation]);

    return (
        <div style={{'padding' : '10px', 'marginTop':'70px'}}>
            <Swiper 
            style={cardStyle}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)
            }
            > 
                <SwiperSlide onClick={()=>clickTest(1)} >
                <CustomCard >hi1</CustomCard >
                </SwiperSlide>
                <SwiperSlide >
                <CustomCard >hi2</CustomCard >
                </SwiperSlide>
                <SwiperSlide >
                <CustomCard >hi3</CustomCard >
                </SwiperSlide>
                <SwiperSlide >
                <CustomCard >hi4</CustomCard >
                </SwiperSlide>
                <SwiperSlide >
                <CustomCard >hi5</CustomCard >
                </SwiperSlide>
            </Swiper>
    </div>
      );
};

export default MainSwipe;