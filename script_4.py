# Let's extract the complete HTML structure to understand the sections better
# and identify what content should go on each page

# Find section content for each main page
sections = {
    'home': [],
    'categories': [],
    'products': [],
    'about': [],
    'contact': []
}

# Extract sections by looking for id attributes
section_pattern = r'<section[^>]*id=["\']([^"\']*)["\'][^>]*>(.*?)</section>'
section_matches = re.findall(section_pattern, html_content, re.DOTALL | re.IGNORECASE)

print("Sections found in the HTML:")
print("="*50)
for section_id, content in section_matches:
    print(f"Section ID: {section_id}")
    print(f"Content length: {len(content)} characters")
    # Show first 200 characters of content
    clean_content = re.sub(r'<[^>]+>', '', content[:200]).strip()
    print(f"Preview: {clean_content}...")
    print("-" * 30)

# Also look for main content areas
main_pattern = r'<main[^>]*>(.*?)</main>'
main_matches = re.findall(main_pattern, html_content, re.DOTALL | re.IGNORECASE)

print(f"\nMain content sections found: {len(main_matches)}")

# Let's identify the key sections that need to be converted to separate pages
pages_needed = [
    'home',      # Landing page content
    'categories', # Product categories
    'products',   # Product listings
    'about',      # About us
    'contact'     # Contact information
]

print(f"\nPages to create: {pages_needed}")

# Let's also check for any product detail patterns that might need individual product pages
product_detail_pattern = r'(Hades Gaming Laptop Pro|Hades Fire Sneakers|Smart Watch Elite|Gaming Headset Pro|Midnight Black Hoodie|RGB Keyboard Elite)'
product_names = re.findall(product_detail_pattern, html_content)
unique_products = list(set(product_names))

print(f"\nIndividual product pages that might be needed: {unique_products}")