const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener("click", function () {
    console.log(sidebar.classList);
    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar')
    } else {
        sidebar.classList.add('show-sidebar')
    }
    //faster way is in comments
    //sidebar.classList.toggle("show-sidebar")
});

//closeBtn.addEventListener('click', function(){
//    sidebarbar.classList.remove("side-bar")
//})