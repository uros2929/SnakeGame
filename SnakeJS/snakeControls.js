function promeniSmer(event) {
    if (event.keyCode == 37) {
        if (trenutniSmer == 'desno') {
            smer = 'desno';
        } else {
            smer = 'levo';
        }
    } else if (event.keyCode == 39) {
        if (trenutniSmer == 'levo') {
            smer = "levo";
        } else {
            smer = 'desno';
        }
    } else if (event.keyCode == 38) {
        if (trenutniSmer == 'dole') {
            smer = 'dole'
        } else {
            smer = 'gore';
        }
    } else if (event.keyCode == 40) {
        if (trenutniSmer == 'gore') {
            smer = "gore";
        } else {
            smer = 'dole';
        }
    }
}
document.body.addEventListener("keydown", promeniSmer);