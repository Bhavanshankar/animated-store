# First, let's read and analyze the HTML file to understand its structure
with open('index.html', 'r', encoding='utf-8') as file:
    html_content = file.read()

print("HTML file length:", len(html_content))
print("\n" + "="*50)
print("FIRST 2000 characters of the HTML:")
print("="*50)
print(html_content[:2000])