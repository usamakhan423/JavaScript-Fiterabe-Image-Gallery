console.log('hello')
const calc = () => {
    const filterContainer = document.querySelector(".gallery_buttons_container");
    const galleryItems = document.querySelectorAll(".gallery_item");


    filterContainer.addEventListener("click", (event) => {

        if(event.target.classList.contains('image-filter')) {
            filterContainer.querySelector(".active").classList.remove("active");

            event.target.classList.add("active");

            const filterValue = event.target.getAttribute("data-filter");

            galleryItems.forEach((item) => {

            if(item.classList.contains(filterValue) || filterValue === 'all') {
            item.classList.remove('hide');
            item.classList.add('show');
            } else {
            item.classList.remove('show');
            item.classList.add('hide');
            }
        })
    }

 })
}
calc();