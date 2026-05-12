import os

files = [
    "san-pham.html", "giai-phap.html", "pricing.html", 
    "khach-hang.html", "tai-nguyen.html", "dang-ky.html"
]
base_path = "/Users/krystalnguyen/Documents/xcorp.app/"

replacements = {
    'lang="vi"': 'lang="en"',
    "Sản phẩm": "Products",
    "Giải pháp": "Solutions",
    "Bảng giá": "Pricing",
    "Khách hàng": "Customers",
    "Tài nguyên": "Resources",
    "Dùng thử miễn phí": "Free trial",
    "Dùng thử ngay": "Start free trial now",
    "Dùng thử": "Free trial",
    "Không cần thẻ tín dụng": "No credit card required",
    "Hủy bất kỳ lúc nào": "Cancel anytime",
    "Dùng thử miễn phí 30 ngày": "30 days free",
    "Tìm hiểu thêm": "Learn more",
    "Liên hệ": "Contact",
    "Help Center": "Help Center",
    "Integrations": "Integrations",
    "Blog": "Blog",
    "Về xcorp": "About xcorp",
    "Privacy Policy": "Privacy Policy",
    "Terms of Service": "Terms of Service",
    "subset=vietnamese": ""
}

# Sort replacements by length descending to avoid partial matches
sorted_replacements = sorted(replacements.items(), key=lambda x: len(x[0]), reverse=True)

updated_files = []

for filename in files:
    filepath = os.path.join(base_path, filename)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = content
        for old, new in sorted_replacements:
            new_content = new_content.replace(old, new)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            updated_files.append(filename)
            print(f"Updated: {filename}")
        else:
            print(f"No changes needed for: {filename}")
    else:
        print(f"File not found: {filename}")

print("\nSummary of updated files:")
for f in updated_files:
    print(f"- {f}")
