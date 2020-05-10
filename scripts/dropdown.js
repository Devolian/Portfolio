var dropped = false;
function dropdown()
{
    dropped = !dropped;
    document.getElementById("dd").classList.toggle("show");
    toggleDropImg();
}

function toggleDropImg()
{
    if(dropped)
    {
        document.getElementById('projects').src='images/downarrow.png';
    }
    else
    {
        document.getElementById('projects').src='images/rightarrow.png';
    }
}