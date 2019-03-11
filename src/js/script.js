function getBodyScrollTop() {
    var offset = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
    if (offset > 600) {
        document.querySelector('.icons-bar').classList.add('fixed');
    }
    else {
        document.querySelector('.icons-bar').classList.remove('fixed');
    }
}
window.addEventListener("scroll", getBodyScrollTop);