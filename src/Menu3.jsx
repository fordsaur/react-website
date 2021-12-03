import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { RiDashboardLine } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import {GiBanknote } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBuysellads } from "react-icons/fa";



function Menu2()
{return(
<>
<ul class="nav  navpad">
  <li class="nav-item ">
    <a class="nav-link btn btn-outline-success " aria-current="page" href="#"><RiDashboardLine/>Dashboard</a>
  </li>
  <li class="nav-item">
    <a class="nav-link btn btn-outline-success" aria-current="page"href="#"><BiMessage/>Message</a>
  </li>
  <li class="nav-item">
    <a class="nav-link btn btn-outline-success" aria-current="page" href="#"><GiBanknote/>Wallet</a>
  </li>
<li class="nav-item">
    <a class="nav-link btn btn-outline-success " href="#" tabindex="-1" aria-current="page"><BsFillPersonFill/> Profile</a>
  </li>
  <li class="nav-item ">
    <a class="nav-link btn btn-outline-success " aria-current="page" href="#"><FaBuysellads/> Hire a Freelancer</a>
  </li>
  <li class="nav-item">
    <a class="nav-link btn btn-outline-success" aria-current="page" href="#"><FiLogOut/>Logout</a>
  </li>
  </ul>
  <div>
  <h2 className=" container text-center display-1">Welcome ,User</h2>
</div>
</>
)
}
export default Menu2;