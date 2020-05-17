import React, { useState } from 'react'
import { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TimeLineData from '../services/timeLineData'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    timeLineDesc: {
        textTransform: 'capitalize',
        color: 'rgba(0, 0, 0, 0.54)',
        fontWeight: 700
    }
}));

const styles = {
    paperStyle: {
        height: '90vh'
    }
}

const UiTimeLine = () => {

    const classes = useStyles()
    const [timeLineList, setTimeLineList] = useState([])
    const [activeStep, setActiveStep] = React.useState(0)
    const [topic, setTopic] = useState([])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    useEffect(() => {
        getTimeLineData()
    }, [])

    const getTimeLineData = function () {
        let data = TimeLineData.myData
        let topicList = data.map(dat => {
            return dat.topic
        })

        setTimeLineList(data)
        setTopic(topicList)
    }

    const getStepContent = (element) => {
        // console.log("timeLineList", timeLineList)
        switch (element) {
            case timeLineList[0].id:
              return (
                  <>
                <span>{timeLineList[0].date} </span> <br/>
                 <span className={classes.timeLineDesc}>{timeLineList[0].description}</span> <br/>
                 <span>{timeLineList[0].status}</span> <br/>
                  </>
              );
              case timeLineList[1].id:
              return (
                  <>
                  <span>{timeLineList[1].date} </span> <br/>
                  <span className={classes.timeLineDesc}>{timeLineList[1].description}</span> <br/>
                  <span>{timeLineList[1].status}</span> <br/>
                  </>
              );
              case timeLineList[2].id:
              return (
                  <>
                <span>{timeLineList[2].date} </span> <br/>
                <span className={classes.timeLineDesc}>{timeLineList[2].description}</span> <br/>
                <span>{timeLineList[2].status}</span> <br/>
                  </>
              );
              case timeLineList[3].id:
              return (
                  <>
                <span>{timeLineList[3].date} </span> <br/>
                <span className={classes.timeLineDesc}>{timeLineList[3].description}</span> <br/>
                <span>{timeLineList[3].status}</span> <br/>
                  </>
              );
              case timeLineList[4].id:
              return (
                  <>
                <span>{timeLineList[4].date} </span> <br/>
                <span className={classes.timeLineDesc}>{timeLineList[4].description}</span> <br/>
                <span>{timeLineList[4].status}</span> <br/>
                  </>
              );
          default:
              return 'Unknown step';
      }
    }

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">

                <h2> Machine Learning Progress</h2>

                <Paper style={styles.paperStyle} elevation={15}>
                    {timeLineList.length !== 0 ?
                        <div className={classes.root}>
                            <Stepper activeStep={activeStep} orientation="vertical" expanded='false'>
                                {topic.map((label, index) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                        <StepContent>
                                            <Typography>{getStepContent(index)}</Typography>
                                            <div className={classes.actionsContainer}>
                                                <div>
                                                    <Button
                                                        disabled={activeStep === 0}
                                                        onClick={handleBack}
                                                        className={classes.button}
                                                        variant="contained"
                                                        color='inherit'
                                                    >
                                                        Back
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={handleNext}
                                                        className={classes.button}
                                                    >
                                                        {activeStep === topic.length - 1 ? 'Finish' : 'Next'}
                                                    </Button>
                                                </div>
                                            </div>
                                        </StepContent>
                                    </Step>
                                ))}
                            </Stepper>
                            {activeStep === topic.length && (
                                <Paper square elevation={0} className={classes.resetContainer}>
                                    <Typography>All topic completed - you&apos;re finished</Typography>
                                    <Button onClick={handleReset} variant="contained" className={classes.button}>
                                        Reset
                            </Button>
                                </Paper>
                            )}
                        </div>
                        : <h3>No data</h3>
                    }
                </Paper>

            </Container>
        </>
    )
}

export default UiTimeLine