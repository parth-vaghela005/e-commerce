import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GoTriangleDown } from "react-icons/go";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {Link} from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [UserData, setUserData] = useState({
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value });
  };
const submithandle = async(e)=>{
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:8080/api/v1/auth/Login', UserData, {
      withCredentials: true, // Include cookies in the request
    });
    console.log(res.data);
  }
  catch (error) {
    console.error(error);
}
}
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={UserData.email}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={UserData.password}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button variant="primary" onClick={submithandle} className="w-full bg-black text-white">
            Login
          </Button>
          <p className="text-center text-sm">
            Don't have an account? <Link to="/auth/register" className="text-blue-600 hover:underline">Register</Link>
          </p>
        </CardFooter>
      </Card>
      <DropdownMenu>
  <DropdownMenuTrigger>
    
  <div className="flex justify-center items-center gap-1 bg-black px-3 py-1 rounded-[2px]   text-white">
  Parth <GoTriangleDown/>
      </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    
    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
    {/* <DropdownMenuSeparator /> */}
    <DropdownMenuItem>My Account</DropdownMenuItem>
    <DropdownMenuItem>Logout</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    </div>
    
  );
}
export default Login;
