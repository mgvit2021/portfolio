import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CodeIcon from '@material-ui/icons/Code';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import { Container } from 'react-bootstrap';
import WFH from '../images/WFH.png';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    marginBottom: '16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function MyTimeline() {
  const classes = useStyles();

  return (
    <Container id='timeline'>
      <div className='timeline container'>
        <h4 className='lead about-head text-center'>Experience</h4>
        <hr className='about-line'></hr>
      </div>
      <div style={{ float: 'left' }} className='coffeeImage'>
        <img src={WFH} alt='Work from Home' />
      </div>
      <Timeline align='alternate' className='mt-4'>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='primary' variant='outlined'>
              <LaptopMacIcon fontSize='large' />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant='h6' component='h2'>
                <b>Honeywell</b>
                <p style={{ fontSize: '16px', margin: 'none' }}>
                  <i className='font-weight-bolder'>Software Engineer 1</i>
                  <br />
                  <i>Aug'21 - Present</i>
                </p>
              </Typography>
              <Typography variant='h6' component='h2'>
                <p style={{ fontSize: '16px', margin: 'none' }}>
                  <i className='font-weight-bolder'>Software Engineering Intern</i>
                  <br />
                  <i>Jan'21 - July'21</i>
                </p>
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='primary' variant='outlined'>
              <DeveloperModeIcon fontSize='large' />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant='h6' component='h1'>
                <b>JP Morgan Chase</b>
                <p style={{ fontSize: '15px' }}>
                  <i>Apr'20 - May'20</i>
                </p>
              </Typography>
              <Typography>Software Engineering virtual experience.</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='primary' variant='outlined'>
              <MonetizationOnIcon fontSize='large' />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant='h6' component='h1'>
                <b>PayPal</b>
                <p style={{ fontSize: '15px' }}>
                  <i>Jan'20 - Mar'20</i>
                </p>
              </Typography>
              <Typography>Trainee</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant='outlined'>
              <CodeIcon fontSize='large' />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant='h6' component='h1'>
                <b>Shine Projects</b>
                <p style={{ fontSize: '15px' }}>
                  <i>May'19 - June'19</i>
                </p>
              </Typography>
              <Typography>Full Stack Developer</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
