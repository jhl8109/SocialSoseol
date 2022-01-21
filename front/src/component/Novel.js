import MainSwipe from './Swiper';
import NovelPaper from './NovelPaper';
import AddPaper from './AddPaper';
import React, {useState} from "react";


function Novel() {
    const [novelList,setNovelList] = useState([true,true,]);
    
    return (
        <div style = {{display:"flex", flexDirection:"column", alignItems:"center"}} elevation={3}>
            <NovelPaper novelList = {novelList} setNovelList = {setNovelList}/>
            <MainSwipe novelList = {novelList} setNovelList = {setNovelList}/>
            <AddPaper novelList = {novelList} setNovelList = {setNovelList}/>
        </div>
    )
}

export default Novel;