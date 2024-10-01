console.log(document.documentElement.clientWidth)

if(document.documentElement.clientWidth < 800) {

    document.getElementById('style').remove()
     document.getElementById("base_nav").remove()
     document.getElementById('header_section_button').remove()
     console.log(document.getElementById('Slaider'))
     

    document.getElementById('burger_button').addEventListener('click', () => { 
        document.getElementById('burger_menu').toggleAttribute("open")
    })
    
    
}

if(document.documentElement.clientWidth > 800) {
    document.getElementById('burger').remove()
    const js = document.createElement("script");
    js.type = "text/javascript";
    js.src = "./SlaiderBack.js";
    document.body.appendChild(js);
}