import React from 'react';
import './index.css'
import {Link} from 'react-router-dom'

export default () => (
    <footer id="contact" className="flex-container footer">
        <div><div>© MultiSend</div></div>
        <div><Link to="/donate">Donate</Link></div>
        <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Multisend-ETH/client-v1">Github</a></li>
        </ul>
    </footer>
)
