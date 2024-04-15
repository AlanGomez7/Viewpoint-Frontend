import {} from "@hookform/resolvers";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Link } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";

const inputSchema = z.object({
  username: z.string().min(5),
  password: z.string().min(8),
});
type SigninType = z.infer<typeof inputSchema>;

function Signin() {
  const onSubmit: SubmitHandler<SigninType> = (data) => {
    try {
      axios.post("http://localhost:3000/api/signin", {userName: data.username, password: data.password})
      .then(()=>console.log("submited"))
    } catch (error) {
      console.log(error)
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninType>({
    mode: "onBlur",
    resolver: zodResolver(inputSchema),
  });
  return (
    <>
      <Box className="basis-2/3 lg:basis-1/3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col"
          noValidate
        >
          <h5 className="font-logoFont text-4xl">Clickies</h5>
          <h5 className="">Signin to your account</h5>
          <TextField
            {...register("username")}
            type="Email"
            placeholder="Username"
            size="small"
            sx={{ marginTop: "23px" }}
          />
          <p className="text-red-500 text-xs">{errors.username?.message}</p>
          <TextField
            {...register("password")}
            type="password"
            placeholder="Password"
            size="small"
            sx={{ marginTop: "23px" }}
          />
          <p className="text-red-500 text-xs">{errors.password?.message}</p>
          <Button
            type="submit"
            sx={{
              marginTop: "23px",
              backgroundColor: "blue",
              "&:hover": { backgroundColor: "#148efa" },
              color: "white",
              textTransform: "none",
            }}
          >
            Sign in
          </Button>
          <Link href="/signup" mt={2} fontSize={14}>
            Don't have an Account? sign up
          </Link>
        </form>
      </Box>
    </>
  );
}

export default Signin;
