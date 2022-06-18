const timetoString = (time) =>{
	return String(time).padStart(2,'0')
}

const getTimeString = () =>{
	const date = new Date()
	const hour = date.getHours()
	return `${timetoString(hour > 12 ? (hour - 12): hour)}:${timetoString(date.getMinutes())}`
}

const clock = document.querySelector('#clock');
clock.textContent = getTimeString()


setInterval(()=>{
	clock.textContent = getTimeString()
},10000);