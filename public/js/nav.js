
// monitor keypress, on pressing 1 navigate to /
window.addEventListener('keypress', function(e) {
	e.preventDefault();
	if (e.key === '1') {
		window.location.href = '/';
	} else if (e.key === '2') {
		window.location.href = '/research';
	} else if (e.key === '3') {
		window.location.href = '/notes';
	} else if (e.key === '4') {
		window.location.href = '/about';
	} else if (e.key === '/') {
		window.location.href = '/search';
	}
});
