// Set up social sharing links
function setupShareLinks() {
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);

    // Twitter
    document.querySelectorAll('a[aria-label="Share on Twitter"]').forEach(link => {
        link.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
    });

    // LinkedIn
    document.querySelectorAll('a[aria-label="Share on LinkedIn"]').forEach(link => {
        link.href = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
    });

    // Email
    document.querySelectorAll('a[aria-label="Share via Email"]').forEach(link => {
        link.href = `mailto:?subject=${pageTitle}&body=Check out this article: ${pageUrl}`;
    });
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', setupShareLinks);