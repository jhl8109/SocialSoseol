import MainSwipe from './Swiper';
import NovelPaper from './NovelPaper';
import AddPaper from './AddPaper';
import Navbar from './Navbar';
import React, {useState} from "react";


function Novel() {
    const [novelList,setNovelList] = useState([]);
    
    return (
        <div>
            <div style = {{display:"flex", flexDirection:"column", alignItems:"center"}} elevation={3}>
                <NovelPaper novelList = {novelList} setNovelList = {setNovelList}/>
                <MainSwipe />
                <AddPaper novelList = {novelList} setNovelList = {setNovelList}/>
            </div>
        </div>
        
    )
}

export default Novel;