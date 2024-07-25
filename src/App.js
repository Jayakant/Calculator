import logo from './logo.svg';
import React from 'react';
import './App.css';
import { TextField, Typography, Grid, Button, Paper, Box } from "@mui/material";


function App() {
  const [result, setResult] = React.useState('');

  function handleResultChange(num) {
    setResult(prev => prev + num);
  }
  return (
    // <>
    //     <Paper
    //             sx={{
    //                 p: 2,
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 background: theme.palette.containerComponent,
    //                 boxShadow: theme.palette.containerComponentShadow,
    //             }}
    //         >
    //             <Grid container spacing={3}>
    //                 <Grid item xs={12}>
    //                     btn1
    //                 </Grid>
    //                 <Grid item xs={12}>
    //                     btn2
    //                 </Grid>
    //             </Grid>

    //         </Paper>

    // </>

    <Grid item xs={12}>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              // background: theme.palette.containerComponent,
              // boxShadow: theme.palette.containerComponentShadow,
            }}
          >
            <Box sx={{ height: 50, width: 400 }}>
              <Grid container spacing={0} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h3">
                    {result}
                  </Typography>
                </Grid>

              </Grid>

            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={0}>

            <Grid item xs={3.4}></Grid>

            <Grid item xs={5.2}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  // background: theme.palette.containerComponent,
                  // boxShadow: theme.palette.containerComponentShadow,
                }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      // justifyContent="space-around"
                      alignItems="center"
                      spacing={2.5}
                    >
                      <Grid item alignItems="center" justifyContent="space-evenly">
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}
                          onClick={() => {
                            handleResultChange(" % ");
                          }}
                        >
                          %
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}

                          onClick={() => {
                            handleResultChange(" ** ")
                          }}
                        >
                          ^
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}

                          onClick={() => {
                            setResult("");
                          }}
                        >
                          C
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}

                          onClick={() => {
                            setResult(prev => prev.slice(0, prev.length - 1))
                          }}
                        >
                          Del
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={3.4}></Grid>

            <Grid item xs={3.4}></Grid>

            <Grid item xs={5.2}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  // background: theme.palette.containerComponent,
                  // boxShadow: theme.palette.containerComponentShadow,
                }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      // justifyContent="space-around"
                      alignItems="center"
                      spacing={2.5}
                    >
                      <Grid item alignItems="center" justifyContent="space-evenly">
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}
                          onClick={() => {
                            handleResultChange("7")
                          }}
                        >
                          7
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}

                          onClick={() => {
                            handleResultChange("8")
                          }}
                        >
                          8
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}

                          onClick={() => {
                            handleResultChange("9")
                          }}
                        >
                          9
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}

                          onClick={() => {
                            handleResultChange(" * ");
                          }}
                        >
                          X
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={3.4}></Grid>

            <Grid item xs={3.4}></Grid>

            <Grid item xs={5.2}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  // background: theme.palette.containerComponent,
                  // boxShadow: theme.palette.containerComponentShadow,
                }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      // justifyContent="space-around"
                      alignItems="center"
                      spacing={2.5}
                    >
                      <Grid item alignItems="center" justifyContent="space-evenly">
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}
                          onClick={() => {
                            handleResultChange("4")
                          }}
                        >

                          4
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}
                          onClick={() => {
                            handleResultChange("5")
                          }}
                        >

                          5
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}

                          onClick={() => {
                            handleResultChange("6")
                          }}
                        >

                          6
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}

                          onClick={() => {
                            handleResultChange(" - ")
                          }}
                        >
                          -
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={3.4}></Grid>

            <Grid item xs={3.4}></Grid>

            <Grid item xs={5.2}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  // background: theme.palette.containerComponent,
                  // boxShadow: theme.palette.containerComponentShadow,
                }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      // justifyContent="space-around"
                      alignItems="center"
                      spacing={2.5}
                    >
                      <Grid item alignItems="center" justifyContent="space-evenly">
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}
                          onClick={() => {
                            handleResultChange("1")
                          }}
                        >

                          1
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}
                          onClick={() => {
                            handleResultChange("2")
                          }}
                        >

                          2
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}

                          onClick={() => {
                            handleResultChange("3")
                          }}
                        >

                          3
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}

                          onClick={() => {
                            handleResultChange(" + ")
                          }}
                        >
                          +
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={3.4}></Grid>

            <Grid item xs={3.4}></Grid>

            <Grid item xs={5.2}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  // background: theme.palette.containerComponent,
                  // boxShadow: theme.palette.containerComponentShadow,
                }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      // justifyContent="space-around"
                      alignItems="center"
                      spacing={2.5}
                    >
                      <Grid item alignItems="center" justifyContent="space-evenly">
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}
                          onClick={() => {
                            alert(result)
                          }}
                        >

                          {/* 1 */}
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}
                          onClick={() => {
                            handleResultChange("0")
                          }}
                        >

                          0
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}

                          onClick={() => {
                            handleResultChange(".")
                          }}
                        >

                          .
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ height: 50, width: 100, fontSize: 25 }}

                          onClick={() => {
                            setResult(eval(result).toString());
                          }}
                        >
                          =
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={3.4}></Grid>

          </Grid>
        </Grid>

      </Grid>
    </Grid >
  )
}


export default App;
