import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Container, Grid, Table, TableHead, TableRow, TableBody, TableCell, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    }
}));

function buildRanking(stage) {
    let teamScores = {}
    stage.matches.forEach(match => {
        // if(!teamScores[match.competitors[0].id]) {
        //     teamScores[match.competitors[0].id] = {
        //         team:
        //     }
        // }
    });
}

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        OWL Calculator
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="xl" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid xl={12} item >
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Team</TableCell>
                                        <TableCell>Wins</TableCell>
                                        <TableCell>Losses</TableCell>
                                        <TableCell>Differentials</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>New York</TableCell>
                                        <TableCell>10</TableCell>
                                        <TableCell>0</TableCell>
                                        <TableCell>10</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Vancouver</TableCell>
                                        <TableCell>10</TableCell>
                                        <TableCell>0</TableCell>
                                        <TableCell>10</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

let mapStateToProps = state => ({
    stages: state.stages
})

export default connect(mapStateToProps)(App);