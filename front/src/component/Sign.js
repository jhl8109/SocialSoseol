import React, {useState} from "react";
import { Paper, Grid, Avatar, Typography, TextField, FormControlLabel,Checkbox, Button, Link} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const inputProps = {minLength: "6", maxLength: "15", step: "1"};

function SignIn(props) {
    const paperStyle={padding : 20, height:'50vh',width:500, margin: "20px auto"};
    const avatarStyle={backgroundColor:'#1bbd7e'};
    const btnStyle = {margin:'8px 0'}
    const textStyle = {margin:'8px 0'}
    const {setSign} = props;
    
    const [idValue, setIdValue] = useState('');
    const [pwValue, setPwValue] = useState('');


    let idChange = (e) => {
        setIdValue(e.target.value);
    }

    let pwChange = (e) => {
        setPwValue(e.target.value);
    }

    let btnSign = (e) => {
        e.preventDefault();
        setSign(1);
        console.log(1);
    }
    let btnSubmit = (e) => {
        e.preventDefault();
        setIdValue('');
        setPwValue('');
    }

    return (
        <Grid style={{ 'padding' : '10px', 'marginTop':'70px'}}>
            <Paper elevation={8} style = {paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <Typography variant="h5">Sign in</Typography> 
                </Grid>
                <TextField variant='standard' style = {textStyle} label='아이디' placeholder="Enter ID"  inputProps={inputProps} onChange={e=>idChange(e)} fullWidth required/>
                <TextField variant='standard' style = {textStyle} label='비밀번호' placeholder="Enter password" type='password' inputProps={inputProps} onChange={e=>pwChange(e)} fullWidth required/>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                            />
                    }
                    label="ID 기억하기"
                />
                <Button type='submit' color='primary' variant="contained" style={btnStyle} onClick={btnSubmit}fullWidth>Sign in</Button>
                <Typography style = {textStyle}> 계정이 없으신가요? 
                    <Link href="#" onClick={btnSign}>회원가입</Link>
                </Typography>
            </Paper>
        </Grid>
      );
};

function SignUp() {
    const paperStyle={padding : 20, height:'50vh',width:500, margin: "20px auto"};
    const avatarStyle={backgroundColor:'#1bbd7e'};
    const btnStyle = {margin:'8px 0'}
    const textStyle = {margin:'8px 0'}

    const [idValue, setIdValue] = useState('');
    const [pwValue, setPwValue] = useState('');
    const [idErr,setIdErr] = useState(false);
    const [pwErr,setPwErr] = useState(false);

    function handleClick() {
        window.location.href = "/main";
    }
    let idChange = (e) => {
        setIdValue(e.target.value);
        if (idValue.length < 6) {
            setIdErr(true);
        } else {
            setIdErr(false);
        }
    }

    let pwChange = (e) => {
        setPwValue(e.target.value);
        if (pwValue.length < 6) {
            setPwErr(true);
        } else {
            setPwErr(false);
        }
    }
    return (
        <Grid style={{ 'padding' : '10px', 'marginTop':'70px'}}>
            <Paper elevation={8} style = {paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <Typography variant="h5">Sign Up</Typography> 
                </Grid>
                <TextField style = {textStyle} label='이름' placeholder="Enter Name" inputProps={inputProps} fullWidth required/>
                <TextField style = {textStyle} label='아이디' placeholder="Enter ID" inputProps={inputProps} onChange={(e) => idChange(e)} error={idErr === true ? true : false}  fullWidth required/>
                <TextField style = {textStyle} label='비밀번호' placeholder="Enter password" type='password' onChange={(e) => pwChange(e)} error={pwErr === true ? true : false} inputProps={inputProps} fullWidth required/>
                <Button onClick = {handleClick} type='submit' color='primary' variant="contained" style={btnStyle} disabled={(idErr || pwErr) ? true : false} fullWidth>sign up</Button>
            </Paper>
        </Grid>
      );
};

function Sign() {
    const [sign, setSign] = useState(0);

    return(
        <>
            {sign === 0? <SignIn setSign={setSign}/> : <SignUp/>}
        </>
    )
};

export default Sign;