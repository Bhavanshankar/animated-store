# It seems all links are fragments (anchors). Let me examine the navigation structure more carefully
# Let's look for navigation menus and buttons to understand the site structure

# Search for navigation patterns
nav_pattern = r'<nav[^>]*>(.*?)</nav>'
nav_matches = re.findall(nav_pattern, html_content, re.DOTALL | re.IGNORECASE)

print("Navigation sections found:")
print("="*50)
for i, nav in enumerate(nav_matches, 1):
    print(f"Navigation {i}:")
    print(nav[:500] + "..." if len(nav) > 500 else nav)
    print("\n" + "-"*30 + "\n")

# Let's also look for menu items and button texts to understand the site structure
menu_pattern = r'<a[^>]*href=["\']#([^"\']*)["\'][^>]*>([^<]*)</a>'
menu_items = re.findall(menu_pattern, html_content)

print("Menu items with their anchor targets:")
print("="*50)
for anchor, text in menu_items:
    if text.strip():
        print(f"#{anchor} -> {text.strip()}")

# Let's also check for any data-page or similar attributes that might indicate pages
page_pattern = r'data-page=["\']([^"\']*)["\']'
page_matches = re.findall(page_pattern, html_content)
print(f"\nData-page attributes found: {page_matches}")