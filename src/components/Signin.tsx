import { Label } from "@mui/icons-material";
import { Box, Button, TextField, Link, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

function Signin() {
  return (
    <>
      <Box sx={{display:"flex", flexDirection: "column"}}>
        <Typography component={Box} variant="h5">Sign in to your Account</Typography>
        <TextField placeholder="Username" size="small" sx={{marginTop: "23px"}}/>
        <TextField placeholder="Password" size="small" sx={{marginTop: "23px"}}/>
        <Button  sx={{marginTop: "23px",backgroundColor:"blue", "&:hover":{backgroundColor:"#148efa"}, color: "white", textTransform: "none"}}>Sign in</Button>
        <Link href="/signup" mt={2} fontSize={14}>Don't have an Account? sign up</Link>
      </Box>
    </>
  );
}

export default Signin;
