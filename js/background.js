

const imgLinks = [
	'img/back1.jpg',
	'img/back2.jpg',
	'img/back3.jpg',
	'img/back4.jpg',
	'img/back5.jpg',
	'img/back6.jpg',
	'img/back7.jpg',
	'img/back8.jpg',
	'img/back9.jpg',
]

document.body.style.backgroundImage=`
linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
url(${imgLinks[Math.floor(Math.random() * imgLinks.length )]})`