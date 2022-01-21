import React, {useState} from "react";
import { Paper, Grid, Avatar, Typography, TextField, FormControlLabel,Checkbox, Button, Link} from '@mui/material';
import { makeStyles } from '@mui/styles';

function AddPaper(props) {
    const paperStyle={padding : 20, height:'45vh',width:"100%", margin: "20px auto"};
    const avatarStyle={backgroundColor:'#1bbd7e'};
    const btnStyle = {margin:'8px 0'}
    const textStyle = {margin:'8px 0'}
    const [textValue, setTextValue] = useState('');
    const inputProps = {minLength: "6", maxLength: "15", step: "1"};
    const textProps = {maxLength: "300", step: "1"};
    const {novelList,setNovelList} = props
    
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
        setTextValue(e.target.value);
        console.log(textValue);
    }

    let btnSubmit = (e) => {
        e.preventDefault();
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
                <TextField multiline rows={8}  variant='standard' style = {textStyle} label='릴레이 소설' placeholder="최대 300자 입니다." InputProps={{ classes: { input: classes.input2 }}} inputProps={textProps} onChange={e=>textChange(e)} fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnStyle} onClick={btnSubmit} fullWidth>등록</Button>
            </Paper>
        </Grid>
      );
};

export default AddPaper;