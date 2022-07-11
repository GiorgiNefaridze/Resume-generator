import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas'
import jspdf from 'jspdf'
import './Export.scss'

export default function Export() {

    const location = useLocation();

    useEffect(()=> {
        console.log(location)
    })

    return (
        <div className="export-container">
            <h1>Export</h1>
        </div>
    );
}