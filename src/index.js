import React from 'react'
import ReactDOM from 'react-dom'

function Cartoon(props){
	return<h1> Hello,{props.name} on {props.show} </h1>
}

function Show(){
	return<div>
	
	<Cartoon name='pop' show='ssss'/>
	
	<Cartoon name='hop' show='mmm'/>
	
	
	</div>
	}


ReactDOM.render(
<Show/>,
document.getElementById('root')
);