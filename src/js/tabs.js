// Toggle cities dropdown
const officesTitle = document.querySelector('.offices__title');
const citiesDropdown = document.querySelector('.offices__cities-dropdown');
const arrow = document.querySelector('.offices__arrow');
const officesRegion = document.querySelectorAll('.offices__region-title');

officesTitle.addEventListener('click', function () {
    citiesDropdown.classList.toggle('offices__cities-dropdown--active');
    arrow.classList.toggle('active');
});

officesRegion.forEach(region => {
    region.addEventListener('click', function () {
        const arrowSmall = this.querySelector('.offices__region-title-arrow');
        if (arrowSmall) {
            arrowSmall.classList.toggle('rotate'); 
        }
    });
});



    document.querySelectorAll('.offices__region-title').forEach(title => {
        title.addEventListener('click', function() {
            const cities = this.nextElementSibling;
            cities.classList.toggle('offices__cities--mobile-visible');
        });
    });


document.querySelectorAll('.offices__tabs-button').forEach(button => {
    button.addEventListener('click', function() {
        const activeButton = document.querySelector('.offices__tabs-button--active');
        if (activeButton) {
            activeButton.classList.remove('offices__tabs-button--active');
        }

        this.classList.add('offices__tabs-button--active');

        document.querySelector('.offices__tabs-image--active')?.classList.remove('offices__tabs-image--active');
        document.querySelector(`.offices__tabs-image[data-content="${this.dataset.tab}"]`)?.classList.add('offices__tabs-image--active');
    });
});


new WOW().init();


