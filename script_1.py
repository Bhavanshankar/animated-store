# Let's search for all links in the HTML file to identify what pages need to be created
import re

# Find all href attributes
href_pattern = r'href=["\']([^"\']*)["\']'
hrefs = re.findall(href_pattern, html_content)

print("All href attributes found:")
for i, href in enumerate(hrefs, 1):
    print(f"{i}. {href}")

print("\n" + "="*50)
print("Filtering for internal page links (excluding external URLs and fragments):")
print("="*50)

internal_links = []
for href in hrefs:
    # Filter out external URLs, fragments, and JavaScript calls
    if not href.startswith(('http', 'mailto:', 'tel:', '#', 'javascript:')):
        if href and href != '/':
            internal_links.append(href)

# Remove duplicates while preserving order
seen = set()
unique_internal_links = []
for link in internal_links:
    if link not in seen:
        seen.add(link)
        unique_internal_links.append(link)

print("Internal page links that need separate pages:")
for i, link in enumerate(unique_internal_links, 1):
    print(f"{i}. {link}")