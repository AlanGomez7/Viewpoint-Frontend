import {} from "@hookform/resolvers";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Link, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { infer, z } from "zod";

const inputSchema = z.object({
  username: z.string().min(5),
  Password: z.string().min(8),
});
type signinType = z.infer<typeof inputSchema>;
function Signin() {
  const onSubmit: SubmitHandler<signinType> = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signinType>({
    mode: "onBlur",
    resolver: zodResolver(inputSchema),
  });
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col"
        noValidate
      >
        <h5 className="font-logoFont text-4xl">Clickies</h5>
        <TextField
          {...register("username")}
          type="Email"
          placeholder="Username"
          size="small"
          sx={{ marginTop: "23px" }}
        />
        <p className="text-red-500 text-xs">{errors.username?.message}</p>
        <TextField
          {...register("Password")}
          type="Password"
          placeholder="Password"
          size="small"
          sx={{ marginTop: "23px" }}
        />
        <p className="text-red-500 text-xs">{errors.Password?.message}</p>
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
    </>
  );
}

export default Signin;
