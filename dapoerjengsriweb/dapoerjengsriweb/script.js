function showPage(pageId) {
    // Get all pages
    const pages = document.querySelectorAll('.page');
    
    // Hide all pages
    pages.forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show the selected page
    document.getElementById(pageId).classList.remove('hidden');
    
    // Scroll to top of the page
    window.scrollTo(0, 0);
}