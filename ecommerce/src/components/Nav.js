import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <Outlet></Outlet>
    </div>
  )
}
