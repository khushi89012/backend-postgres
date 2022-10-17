import React from "react";
import {BsPrinterFill} from 'react-icons/bs'
export const  Pdfmaker = () => {


	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('SamplePDF.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'SamplePDF.pdf';
				alink.click();
			})
		})
	}
	return (
		<>
			<center>
				
				<button onClick={onButtonClick}>
                <BsPrinterFill/>
				</button>
			</center>
		</>
	);
};


