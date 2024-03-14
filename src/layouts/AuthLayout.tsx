import { Box } from "@mui/material"
import React from "react"
import Login from "../components/Signin"

type AuthLayoutProp = {
    children: React.ReactNode
}
function AuthLayout({children}: AuthLayoutProp) {
  return (
    <Box height={"100dvh"} display={"flex"} justifyContent={"center"} sx={{placeItems:"center"}}>{children}</Box>
  )
}

export default AuthLayout