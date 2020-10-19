import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/FastfoodRounded";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SportsCricketRoundedIcon from "@material-ui/icons/SportsCricketRounded";
import { Container } from "react-bootstrap";
import WFH from "../images/WFH.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
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
        <h4 className='lead about-head text-center'>What my day looks like?</h4>
        <hr className='about-line'></hr>
      </div>
      <div style={{ float: "left" }} className='coffeeImage'>
        <img src={WFH} alt='Work from Home' />
      </div>
      <Timeline align='alternate' className='mt-4'>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='secondary'>
              <FastfoodIcon fontSize='large' />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant='h6' component='h1'>
                Eat
              </Typography>
              <Typography>Well, you need strength</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant='outlined'>
              <LaptopMacIcon fontSize='large' />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant='h6' component='h1'>
                Code
              </Typography>
              <Typography>Just give me my coffee!</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='primary' variant='outlined'>
              <SportsCricketRoundedIcon fontSize='large' />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant='h6' component='h1'>
                Play
              </Typography>
              <Typography>Who likes nerd&apos;s anyway!</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='primary'>
              <HotelIcon fontSize='large' />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant='h6' component='h1'>
                Sleep
              </Typography>
              <Typography>Ahh, the reward!</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant='outlined'>
              <RepeatIcon fontSize='large' />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant='h6' component='h1'>
                Repeat
              </Typography>
              <Typography>It's rewind time.</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
