import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PermIdentity from '@material-ui/icons/PermIdentityRounded';
import Phone from '@material-ui/icons/PhoneIphoneRounded';
import Email from '@material-ui/icons/EmailRounded';
import Company from '@material-ui/icons/LaptopRounded';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    item: {
      marginTop: theme.spacing(2),
    },
    container:{
        marginTop:theme.spacing(6)
      },
      margin: {
        margin: theme.spacing(1),
      },
      margingTop: {
        marginTop: theme.spacing(3),
      },
      textField: {
        width: '25ch',
      },
  }),
);



export default function InputWithIcon() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
      name: '',
      email: '',
      phone: '',
      company: '',
      project: '',
  });
  var templateParams = values;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    // console.log(templateParams);
  };
  const data = {
    userid: 'user_d7hwHiS6HgfKzJBdrgInH',
    template: 'template_rhhoblo' ,
    service: 'service_soo1vaq',
  }
  const reset ={
      name:"",
      email: "",
      phone: '',
      company: '',
      project: ''
  };
  const clearValues = () => {
    setValues({ ...reset });
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.send(data.service , data.template, templateParams, data.userid)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      clearValues()
  }
  return (
      <div>
      <form onSubmit={sendEmail} >
      <Grid container justify="center" alignItems="center" >
        <Grid className={classes.item} container xs={6} md={3}  spacing={1} justify="center" alignItems="flex-end">
          <Grid item>
            <PermIdentity/>
          </Grid>
          <Grid item>
            <TextField  
            value={values.name}
            onChange={handleChange('name')}
            id="Name" 
            label="Name" />
          </Grid>
        </Grid>
        <Grid className={classes.item} container xs={6} md={3}  spacing={1} justify="center" alignItems="flex-end">
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <TextField 
            value={values.email}
            onChange={handleChange('email')}
            id="Email" 
            label="Email" />
          </Grid>
        </Grid>
        <Grid className={classes.item} container xs={6} md={3}  spacing={1} justify="center" alignItems="flex-end">
          <Grid item>
            <Phone />
          </Grid>
          <Grid item>
            <TextField
            value={values.phone}
            onChange={handleChange('phone')} 
            id="Phone" 
            label="Phone(Optional)" />
          </Grid>
        </Grid>
        <Grid className={classes.item} container xs={6} md={3}  spacing={1} justify="center" alignItems="flex-end">
          <Grid item>
            <Company />
          </Grid>
          <Grid item>
            <TextField
            value={values.company}
            onChange={handleChange('company')}  
            id="Company" 
            label="Company" />
          </Grid>
        </Grid>
        <Grid container className={classes.container} xs={12} md={12}  spacing={1} justify="center" alignItems="flex-end">
          <Grid xs={11} md={11}  item>
          <FormControl fullWidth className={classes.margin} variant="outlined">
          <TextField
          label="Tell Us About your Project"
          value={values.project}
          onChange={handleChange('project')}  
          id="outlined-multiline-static"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
        />
          </FormControl>
          </Grid>
        </Grid>
        <Grid container xs={6} md={3}  className={classes.margingTop} justify="center" alignItems="flex-end">
          <Grid item>
          <Button color="white" type="submit"   variant="contained" >Send</Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
    </div>
  );
}