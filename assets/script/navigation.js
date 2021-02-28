function broomMagic() {
    let  alohomora= document.getElementById("navDropdownMenu");
    if (alohomora.className === "navbar__link-container") {
        alohomora.className += "menu";
    } else {
        alohomora.className = "navbar__link-container";
    }
    let  obliviate= document.getElementById("line-break");
    if (obliviate.className === "heading__line") {
        obliviate.className += "hide";
    } else {
        obliviate.className = "heading__line";
    }
}
