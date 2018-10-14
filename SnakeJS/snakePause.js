function pauzirajIgru(event) {
    if (event.keyCode == 80) {
        if (!pauzirano) {
            pauzirano = true;
        } else if (pauzirano) {
            pauzirano = false;
        }
    }
}
document.body.addEventListener("keydown", pauzirajIgru);