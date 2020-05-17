import React from 'react'
import { MDBContainer, MDBStepper, MDBStep, MDBIcon, MDBCard, MDBRow, MDBCol, MDBBtn } from 'mdbreact'

const styles = {
    lblCompleted: {
        background: 'green'
    },
    lblInProgress: {
        backgroundColor: '#c78f1f'
    },
    lblYetToStart: {
        backgroundColor: 'black'
    },
    desc: {
        marginTop: -10,
        paddingLeft: 30,
        color: 'rgba(0,0,0,0.38)'
    },
    cardWidth: {
        width: 400,
        height: '100vh'
    },
    label:{
        color: 'black'
    },
    heading: {
        fontSize: 17,
        fontWeight: 20
    }
}

const UiTimeLine = () => {
    return (
        <MDBContainer>
            <br/>
            <div style={styles.heading}>Machine Learning Progress Bar</div>
            <MDBCard style={styles.cardWidth}>
                <MDBStepper vertical>
                    <MDBStep>
                        <a href="#!">
                            <span className="circle" style={styles.lblCompleted}>
                                <MDBIcon icon="check" />
                            </span>
                            <span className="label" style={styles.label}>Wednesday, Jan 01</span>
                        </a>
                        <div style={styles.desc}>
                            <ul type="disc">
                                <li>Machine Learning Introduction.</li>
                                <li>All about html programming.</li>
                                <li>completed</li>
                            </ul>
                        </div>
                    </MDBStep>

                    <MDBStep>
                        <a href="#!">
                            <span className="circle" style={styles.lblCompleted}>
                                <MDBIcon icon="check" />
                            </span>
                            <span className="label" style={styles.label}>Wednesday, Jan 15</span>
                        </a>
                        <div style={styles.desc}>
                            <ul type="disc">
                                <li>What is Machine Learning.</li>
                                <li>All about javascript programming.</li>
                                <li>completed</li>
                            </ul>
                        </div>
                    </MDBStep>

                    <MDBStep>
                        <a href="#!">
                            <span className="circle" style={styles.lblInProgress}>
                                <MDBIcon icon="spinner" />
                            </span>
                            <span className="label" style={styles.label}>Wednesday, Jan 20</span>
                        </a>
                        <div style={styles.desc}>
                            <ul type="disc">
                                <li>The Machine Learning Process.</li>
                                <li>All about python programming.</li>
                                <li>completed</li>
                            </ul>
                        </div>
                    </MDBStep>

                    <MDBStep>
                        <a href="#!">
                            <span className="circle" style={styles.lblYetToStart}>
                                <MDBIcon icon="dot-circle" />
                            </span>
                            <span className="label" style={styles.label}>Wednesday, Mar 25</span>
                        </a>
                        <div style={styles.desc}>
                            <ul type="disc">
                                <li>Closure Look to Machine Learning.</li>
                                <li>All about visual dot net programming.</li>
                                <li>progress</li>
                            </ul>
                        </div>
                    </MDBStep>

                    <MDBStep>
                        <a href="#!">
                            <span className="circle" style={styles.lblYetToStart}>
                                <MDBIcon icon="dot-circle" />
                            </span>
                            <span className="label" style={styles.label}>Friday, Apr 01</span>
                        </a>
                        <div style={styles.desc}>
                            <ul type="disc">
                                <li>Test Your ML Skills.</li>
                                <li>All about machine learning programming.</li>
                                <li>waitlist</li>
                            </ul>
                        </div>
                    </MDBStep>

                    {/* <MDBRow className="mt-1">
                    <MDBCol md="12" className="text-right">
                        <MDBBtn flat>Cancel</MDBBtn>
                        <MDBBtn color="primary">Next </MDBBtn>
                    </MDBCol>
                </MDBRow> */}
                </MDBStepper>
            </MDBCard>
            <br/>
        </MDBContainer>
    )
}

export default UiTimeLine