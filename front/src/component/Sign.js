import React, {useState} from "react";
import { Paper, Grid, Avatar, Typography, TextField, FormControlLabel,Checkbox, Button, Link} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const inputProps = {minLength: "6", maxLength: "15", step: "1"};

function SignIn(props) {
    const paperStyle={padding : 20, height:'60vh',width:500, margin: "20px auto"};
    const avatarStyle={backgroundColor:'#1bbd7e'};
    const btnStyle = {margin:'8px 0'}
    const textStyle = {margin:'8px 0'}
    const {setSign} = props;
    const [idErr, setIdErr] = useState(false);
    const [pwErr, setPwErr] = useState(false);
    const [idErrMsg, setIdErrMsg] = useState(null);
    const [pwErrMsg, setPwErrMsg] = useState(null);
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
        var json_result;
        e.preventDefault();
        setIdValue('');
        setPwValue('');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "loginid":idValue,
            "password":pwValue,
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:80/login", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result); 
            var obj = JSON.parse(result);
            let index = [];
            var message;
            for (let x in obj) {
                index.push(x);
            }
            
            if ((index[0]+"") === "errors") {
                console.log("aaaa");
                console.log(obj[`${index[0]}`][0].msg);
                message = obj[`${index[0]}`][0].msg;
                const arr = message.split(" ");
                if (arr[0] === "Id") {
                    console.log("id error");
                    setIdErr(true);
                    setPwErr(false);
                    setIdErrMsg(obj[`${index[0]}`][0].msg);
                    setPwErrMsg(null);
                } else if (arr[0] === "Password") {
                    console.log("pw error");
                    setIdErr(false);
                    setPwErr(true);
                    setIdErrMsg(null);
                    setPwErrMsg(obj[`${index[0]}`][0].msg);
                }
            } else if ((index[0]+"") === "loginSuccess") {
                console.log("bbbb");
                window.location.href = "/main";
            }
        })
        .catch(error => console.log('error', error));
    
        //  로그인시 메인화면으로 이동하는 코드
        //window.location.href = "/main";
        
    }

    return (
        <Grid style={{ 'padding' : '10px', 'marginTop':'70px'}}>
            <Paper elevation={8} style = {paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <Typography variant="h5">Sign in</Typography> 
                </Grid>
                <TextField error = {idErr===true?true:false} helperText = {idErrMsg!=null?idErrMsg : ""} variant='standard' value = {idValue} style = {textStyle} label='아이디' placeholder="Enter ID"  inputProps={inputProps} onChange={e=>idChange(e)} fullWidth required/>
                <TextField error = {pwErr===true?true:false} helperText = {pwErrMsg!=null?pwErrMsg : ""} variant='standard' value = {pwValue} style = {textStyle} label='비밀번호' placeholder="Enter password" type='password' inputProps={inputProps} onChange={e=>pwChange(e)} fullWidth required/>
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

function SignUp(props) {
    const paperStyle={padding : 20, height:'50vh',width:500, margin: "20px auto"};
    const avatarStyle={backgroundColor:'#1bbd7e'};
    const btnStyle = {margin:'8px 0'}
    const textStyle = {margin:'8px 0'}
    const [nameValue, setNameValue] = useState('');
    const [idValue, setIdValue] = useState('');
    const [pwValue, setPwValue] = useState('');
    const [idErr,setIdErr] = useState(false);
    const [pwErr,setPwErr] = useState(false);
    const {setSign} = props;

    function handleClick() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "loginid":idValue,
            "password":pwValue,
            "nickname":nameValue,
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:80/register", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        setSign(0);
    }
    let nameChange = (e) => {
        setNameValue(e.target.value);
    }
    let nameChange = (e) => {
        setNameValue(e.target.value);
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
                <TextField style = {textStyle} label='닉네임' placeholder="Enter NickName" inputProps={inputProps} onChange={(e) => nameChange(e)} fullWidth required/>
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
            {sign === 0? <SignIn setSign={setSign}/> : <SignUp setSign={setSign}/>}
        </>
    )
};

export default Sign;