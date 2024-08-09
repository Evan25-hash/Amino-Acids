function toggleCollapsibleContent(header) {
    const content = header.nextElementSibling;
    const isVisible = content.style.display === 'block';
    content.style.display = isVisible ? 'none' : 'block';
    header.innerHTML = header.innerHTML.replace(isVisible ? '&#9652;' : '&#9662;', isVisible ? '&#9662;' : '&#9652;');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.collapsible-content').forEach(content => {
        content.style.display = 'block';
    });

    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', () => {
            toggleCollapsibleContent(header);
        });
    });
});
