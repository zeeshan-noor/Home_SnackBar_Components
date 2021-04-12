
import Lottie from "react-lottie";  
import coding from './code-debugging.json';
import student from './student.json';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { SnackbarProvider } from 'notistack';
import Snack from './snack';
function App() {
  
  return (
    <>
    <div style={{display:'flex',marginTop:'100px'}}>
      {/* <CssBaseline /> */}
      <Container maxWidth="sm"style={{marginLeft:'100px',marginTop:'70px'}}>
        <Typography component="div" >
          <h1>Teamwork builds morale.</h1>
          </Typography>
          <Typography>
          <p>You'll feel that your work is valued when you contribute to something that produces results. If you offer an idea that helps improve productivity, such as a new filing system, confidence and trust is built within the team.</p>
          </Typography>
      </Container>
   <Lottie 
   style={{marginLeft:'100px'}}
          options={{
            animationData:coding , ///require("../Animations/teamWork.json")
            renderer: 'svg',
            loop: true,
            autoplay: true,
          }}
  
      height= {380}  />

    </div>
    <div style={{display:'flex',marginTop:'200px'}}>
      <CssBaseline />
      <Container maxWidth="sm"style={{marginLeft:'100px',marginTop:'50px'}}>
        <Typography component="div" >
          <h1>OUR STUDENTS</h1>
          </Typography>
          <Typography>
          <p>We welcome students of all ages, educational stages, and cultures. We aim to make our platform safe and comfortable and easy to use by any student from any place around the world.</p>
          </Typography>
      </Container>
   <Lottie 
   style={{marginLeft:'100px'}}
          options={{
            animationData:student , ///require("../Animations/teamWork.json")
            renderer: 'svg',
            loop: true,
            autoplay: true,
          }}
  
      height= {400}  />
    </div>
  
          <Snack/>
    </>
  );
}

export default App;
