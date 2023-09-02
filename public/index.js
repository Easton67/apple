const dropdown = document.querySelector('#dropdown');
const macDropdown = document.querySelector('#macDropdown');
const ipadDropdown = document.querySelector('#ipadDropdown');
const iphoneDropdown = document.querySelector('#iphoneDropdown');
const watchDropdown = document.querySelector('#watchDropdown');
const airpodsDropdown = document.querySelector('#airpodsDropdown');
const tvDropdown = document.querySelector('#tvDropdown');
const entertainmentDropdown = document.querySelector('#entertainmentDropdown');
const accessoriesDropdown = document.querySelector('#accessoriesDropdown');
const supportDropdown = document.querySelector('#supportDropdown');
const logo = document.querySelector('#logo');
const search = document.querySelector('#search');
const bag = document.querySelector('#bag');
const vision = document.querySelector('#vision');

const nav = document.querySelector('#nav-div');
const storeMenu = document.querySelector('#store-menu');

const test = document.querySelector('#menu-portion');

const macMenu = document.querySelector('#mac-menu');
const ipadMenu = document.querySelector('#ipad-menu');
const iphoneMenu = document.querySelector('#iphone-menu');
const watchMenu = document.querySelector('#watch-menu');
const airpodsMenu = document.querySelector('#airpods-menu');
const tvMenu = document.querySelector('#tv-menu');
const entertainmentMenu = document.querySelector('#entertainment-menu');
const accessoriesMenu = document.querySelector('#accessories-menu');
const supportMenu = document.querySelector('#support-menu');

const blur = document.querySelector('#blur-content');

logo.addEventListener('mouseover', (e) => {
    storeMenu.classList.add('hidden')
    macMenu.classList.add('hidden')
    ipadMenu.classList.add('hidden')
    iphoneMenu.classList.add('hidden')
    watchMenu.classList.add('hidden')
    airpodsMenu.classList.add('hidden')
    tvMenu.classList.add('hidden')
    entertainmentMenu.classList.add('hidden')
    accessoriesMenu.classList.add('hidden')
    supportMenu.classList.add('hidden')
    blur.classList.remove('blur-md')
    nav.classList.remove('bg-white')
});

search.addEventListener('mouseover', (e) => {
    storeMenu.classList.add('hidden')
    macMenu.classList.add('hidden')
    ipadMenu.classList.add('hidden')
    iphoneMenu.classList.add('hidden')
    watchMenu.classList.add('hidden')
    airpodsMenu.classList.add('hidden')
    tvMenu.classList.add('hidden')
    entertainmentMenu.classList.add('hidden')
    accessoriesMenu.classList.add('hidden')
    supportMenu.classList.add('hidden')
    blur.classList.remove('blur-md')
    nav.classList.remove('bg-white')
});

bag.addEventListener('mouseover', (e) => {
    storeMenu.classList.add('hidden')
    macMenu.classList.add('hidden')
    ipadMenu.classList.add('hidden')
    iphoneMenu.classList.add('hidden')
    watchMenu.classList.add('hidden')
    airpodsMenu.classList.add('hidden')
    tvMenu.classList.add('hidden')
    entertainmentMenu.classList.add('hidden')
    accessoriesMenu.classList.add('hidden')
    supportMenu.classList.add('hidden')
    blur.classList.remove('blur-md')
    nav.classList.remove('bg-white')
});

vision.addEventListener('mouseover', (e) => {
    storeMenu.classList.add('hidden')
    macMenu.classList.add('hidden')
    ipadMenu.classList.add('hidden')
    iphoneMenu.classList.add('hidden')
    watchMenu.classList.add('hidden')
    airpodsMenu.classList.add('hidden')
    tvMenu.classList.add('hidden')
    entertainmentMenu.classList.add('hidden')
    accessoriesMenu.classList.add('hidden')
    supportMenu.classList.add('hidden')
    blur.classList.remove('blur-md')
    nav.classList.remove('bg-white')
});

dropdown.addEventListener('mouseover', (e) => {
    macMenu.classList.add('hidden')
    ipadMenu.classList.add('hidden')
    iphoneMenu.classList.add('hidden')
    watchMenu.classList.add('hidden')
    airpodsMenu.classList.add('hidden')
    tvMenu.classList.add('hidden')
    entertainmentMenu.classList.add('hidden')
    accessoriesMenu.classList.add('hidden')
    supportMenu.classList.add('hidden')

    storeMenu.classList.remove('hidden')
    blur.classList.add('blur-md')
    nav.classList.add('bg-white')
});

macDropdown.addEventListener('mouseover', (e) => {
    storeMenu.classList.add('hidden')
    ipadMenu.classList.add('hidden')
    iphoneMenu.classList.add('hidden')
    watchMenu.classList.add('hidden')
    airpodsMenu.classList.add('hidden')
    tvMenu.classList.add('hidden')
    entertainmentMenu.classList.add('hidden')
    accessoriesMenu.classList.add('hidden')
    supportMenu.classList.add('hidden')

    macMenu.classList.remove('hidden')
    blur.classList.add('blur-md')
    nav.classList.add('bg-white')
});

ipadDropdown.addEventListener('mouseover', (e) => {
    storeMenu.classList.add('hidden')
    macMenu.classList.add('hidden')

    ipadMenu.classList.remove('hidden')

    iphoneMenu.classList.add('hidden')
    watchMenu.classList.add('hidden')
    airpodsMenu.classList.add('hidden')
    tvMenu.classList.add('hidden')
    entertainmentMenu.classList.add('hidden')
    accessoriesMenu.classList.add('hidden')
    supportMenu.classList.add('hidden')

    blur.classList.add('blur-md')
    nav.classList.add('bg-white')
});

iphoneDropdown.addEventListener('mouseover', (e) => {
    storeMenu.classList.add('hidden')
    macMenu.classList.add('hidden')
    ipadMenu.classList.add('hidden')

    iphoneMenu.classList.remove('hidden')

    watchMenu.classList.add('hidden')
    airpodsMenu.classList.add('hidden')
    tvMenu.classList.add('hidden')
    entertainmentMenu.classList.add('hidden')
    accessoriesMenu.classList.add('hidden')
    supportMenu.classList.add('hidden')


    blur.classList.add('blur-md')
    nav.classList.add('bg-white')
});

watchDropdown.addEventListener('mouseover', (e) => {
    storeMenu.classList.add('hidden')
    macMenu.classList.remove('hidden')
    ipadMenu.classList.add('hidden')
    iphoneMenu.classList.add('hidden')

    watchMenu.classList.remove('hidden')

    airpodsMenu.classList.add('hidden')
    tvMenu.classList.add('hidden')
    entertainmentMenu.classList.add('hidden')
    accessoriesMenu.classList.add('hidden')
    supportMenu.classList.add('hidden')

    blur.classList.add('blur-md')
    nav.classList.add('bg-white')
});

airpodsDropdown.addEventListener('mouseover', (e) => {
    storeMenu.classList.add('hidden')
    macMenu.classList.add('hidden')
    ipadMenu.classList.add('hidden')
    iphoneMenu.classList.add('hidden')
    watchMenu.classList.add('hidden')

    airpodsMenu.classList.remove('hidden')

    tvMenu.classList.add('hidden')
    entertainmentMenu.classList.add('hidden')
    accessoriesMenu.classList.add('hidden')
    supportMenu.classList.add('hidden')

    blur.classList.add('blur-md')
    nav.classList.add('bg-white')
});

tvDropdown.addEventListener('mouseover', (e) => {
    storeMenu.classList.add('hidden')
    macMenu.classList.add('hidden')
    ipadMenu.classList.add('hidden')
    iphoneMenu.classList.add('hidden')
    watchMenu.classList.add('hidden')
    airpodsMenu.classList.add('hidden')

    tvMenu.classList.remove('hidden')

    entertainmentMenu.classList.add('hidden')
    accessoriesMenu.classList.add('hidden')
    supportMenu.classList.add('hidden')


    blur.classList.add('blur-md')
    nav.classList.add('bg-white')
});

entertainmentDropdown.addEventListener('mouseover', (e) => {
    storeMenu.classList.add('hidden')
    macMenu.classList.add('hidden')
    ipadMenu.classList.add('hidden')
    iphoneMenu.classList.add('hidden')
    watchMenu.classList.add('hidden')
    airpodsMenu.classList.add('hidden')
    tvMenu.classList.add('hidden')

    entertainmentMenu.classList.remove('hidden')

    accessoriesMenu.classList.add('hidden')
    supportMenu.classList.add('hidden')

    blur.classList.add('blur-md')
    nav.classList.add('bg-white')
});

accessoriesDropdown.addEventListener('mouseover', (e) => {
    storeMenu.classList.add('hidden')
    macMenu.classList.add('hidden')
    ipadMenu.classList.add('hidden')
    iphoneMenu.classList.add('hidden')
    watchMenu.classList.add('hidden')
    airpodsMenu.classList.add('hidden')
    tvMenu.classList.add('hidden')
    entertainmentMenu.classList.add('hidden')

    accessoriesMenu.classList.remove('hidden')

    supportMenu.classList.add('hidden')

    blur.classList.add('blur-md')
    nav.classList.add('bg-white')
});

supportDropdown.addEventListener('mouseover', (e) => {
    storeMenu.classList.add('hidden')
    macMenu.classList.add('hidden')
    ipadMenu.classList.add('hidden')
    iphoneMenu.classList.add('hidden')
    watchMenu.classList.add('hidden')
    airpodsMenu.classList.add('hidden')
    tvMenu.classList.add('hidden')
    entertainmentMenu.classList.add('hidden')
    accessoriesMenu.classList.add('hidden')

    supportMenu.classList.remove('hidden')

    blur.classList.add('blur-md')
    nav.classList.add('bg-white')
});

supportDropdown.addEventListener('mouseover', (e) => {
    storeMenu.classList.add('hidden')
    macMenu.classList.add('hidden')
    ipadMenu.classList.add('hidden')
    iphoneMenu.classList.add('hidden')
    watchMenu.classList.add('hidden')
    airpodsMenu.classList.add('hidden')
    tvMenu.classList.add('hidden')
    entertainmentMenu.classList.add('hidden')
    accessoriesMenu.classList.add('hidden')

    supportMenu.classList.remove('hidden')

    blur.classList.add('blur-md')
    nav.classList.add('bg-white')
});

blur.addEventListener('mouseover', (e) => {
    storeMenu.classList.add('hidden')
    macMenu.classList.add('hidden')
    ipadMenu.classList.add('hidden')
    iphoneMenu.classList.add('hidden')
    watchMenu.classList.add('hidden')
    airpodsMenu.classList.add('hidden')
    tvMenu.classList.add('hidden')
    entertainmentMenu.classList.add('hidden')
    accessoriesMenu.classList.add('hidden')
    supportMenu.classList.add('hidden')

    blur.classList.remove('blur-md')
    nav.classList.remove('bg-white')
});