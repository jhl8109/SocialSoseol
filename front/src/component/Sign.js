import React, {useState} from "react";
import { Paper, Grid, Avatar, Typography, TextField, FormControlLabel,Checkbox, Button, Link} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

function SignIn(props) {
    const paperStyle={padding : 20, height:'50vh',width:500, margin: "20px auto"};
    const avatarStyle={backgroundColor:'#1bbd7e'};
    const btnStyle = {margin:'8px 0'}
    const textStyle = {margin:'8px 0'}

    const {setSign} = props;
    let btnSign = (e) => {
        e.preventDefault();
        setSign(1);
        console.log(1);
    }
    return (
        <Grid style={{ 'padding' : '10px', 'marginTop':'70px'}}>
            <Paper elevation={8} style = {paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <Typography variant="h5">Sign in</Typography> 
                </Grid>
                <TextField style = {textStyle} label='아이디' placeholder="Enter ID" fullWidth required/>
                <TextField style = {textStyle} label='비밀번호' placeholder="Enter password" type='password' fullWidth required/>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                            />
                    }
                    label="ID 기억하기"
                />
                <Button type='submit' color='primary' variant="contained" style={btnStyle} fullWidth>Sign in</Button>
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

    function handleClick() {
        window.location.href = "/main";
    }
    return (
        <Grid style={{ 'padding' : '10px', 'marginTop':'70px'}}>
            <Paper elevation={8} style = {paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <Typography variant="h5">Sign Up</Typography> 
                </Grid>
                <TextField style = {textStyle} label='이름' placeholder="Enter Name" fullWidth required/>
                <TextField style = {textStyle} label='아이디' placeholder="Enter ID" fullWidth required/>
                <TextField style = {textStyle} label='비밀번호' placeholder="Enter password" type='password' fullWidth required/>
                <Button onClick = {handleClick} type='submit' color='primary' variant="contained" style={btnStyle} fullWidth>sign up</Button>
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