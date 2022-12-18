let open = true;
function menuclick(){
    const submenuopendata = document.querySelector("#submenuopendata");
    const menuicon = document.querySelector("#menuicon");
    document.addEventListener('click',(e)=>{
        e.stopImmediatePropagation()
        if(e.target != submenuopendata && e.target != menuicon){
            submenuopendata.classList.remove("opensubmenu");
            submenuopendata.classList.add("closesubmenu");
            open = !open;
        }else{
           
        }
    })

    if(open){
        submenuopendata.classList.remove("closesubmenu");
        submenuopendata.classList.add("opensubmenu");
        open = !open
    }else{
        submenuopendata.classList.remove("opensubmenu");
        submenuopendata.classList.add("closesubmenu");
        open = !open
    }
}