import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
        <div className='nav-bar'>
            <li>
            <Link to='/'>Task 1</Link>

            </li>
            
            <li>
            <Link to='/task2'>Task 2</Link>

            </li>
            
            <li>
            <Link to='/task3'>Task 3</Link>

            </li>
            
            <li>
            <Link to='/task4'>Task 4</Link>

            </li>
            
            <li>
            <Link to='/task5'>Task 5</Link>

            </li>
            
            <li>
            <Link to='/portfolio'>Portfolio</Link>

            </li>
        </div>
        </>
    );
}

export default NavBar;