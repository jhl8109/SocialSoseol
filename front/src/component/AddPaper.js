import React, {useState, useRef} from "react";
import { Paper, Grid, Typography, TextField,Button} from '@mui/material';
import { makeStyles } from '@mui/styles';

function AddPaper(props) {
    const paperStyle={padding : 20, height:'300px',width:"1000px", margin: "20px auto"};
    const btnStyle = {margin:'8px 0'}
    const textStyle = {margin:'8px 0'}
    const [textValue, setTextValue] = useState('');
    const textProps = {maxLength: "300", step: "1"};
    const {novelList,setNovelList} = props
    const inputTexts = useRef();
    
    const useStyles = makeStyles(() => ({
        input1: {
          height: 300
        },
        input2: {
          height: 500,
          width : "60vh",
          maxLength:300, step: "1"
        }
      }));
      
      const classes = useStyles();

    let textChange = (e) => {
        setTextValue(e.target.value); // text 받기
    }

    let btnSubmit = (e) => {
        e.preventDefault();
        console.log(textValue);

        /* postman code */
        var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "bookfrom": 4,
        "writer": 14,
        "content": textValue // db에 보낼 텍스트
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:80/node", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        /* postman code */
        setTextValue("");
        var tmp = novelList;
        setNovelList([...novelList,true]);
    }

    return (
        <Grid style={{ 'padding' : '10px', 'marginTop':'10px'}}>
            <Paper elevation={4} style = {paperStyle}>
                <Grid align="center">
                    <Typography variant="h5">릴레이 소설</Typography> 
                </Grid>
                <TextField multiline value = {textValue} rows={8}  variant='standard' style = {textStyle} ref = {inputTexts} label='릴레이 소설' placeholder="최대 300자 입니다." InputProps={{ classes: { input: classes.input2 }}} inputProps={textProps} onChange={e=>textChange(e)} fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnStyle} onClick={btnSubmit} fullWidth>등록</Button>
            </Paper>
        </Grid>
      );
};

export default AddPaper;