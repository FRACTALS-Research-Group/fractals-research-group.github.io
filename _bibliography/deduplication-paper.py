import re

def clean_bib(input_path, output_path):
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by @ symbols to get individual entries
    # We keep the @ by using a lookahead
    entries = re.split(r'\n(?=@)', content)
    
    unique_entries = []
    seen_dois = set()
    seen_titles = set()

    for entry in entries:
        if not entry.strip():
            continue
            
        # Extract DOI and Title using Regex
        doi_match = re.search(r'doi\s*=\s*[{"\']?(.*?)["\'},]', entry, re.IGNORECASE)
        title_match = re.search(r'title\s*=\s*[{"\']?(.*?)["\'},]', entry, re.IGNORECASE)
        
        doi = doi_match.group(1).lower().strip() if doi_match else None
        title = title_match.group(1).lower().strip() if title_match else None

        # Logic: Deduplicate by DOI first, then Title
        is_duplicate = False
        
        if doi and doi in seen_dois:
            is_duplicate = True
        elif title and title in seen_titles:
            is_duplicate = True
            
        if not is_duplicate:
            if doi: seen_dois.add(doi)
            if title: seen_titles.add(title)
            unique_entries.append(entry)

    # Write the cleaned entries back to a new file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(unique_entries))

    print(f"Success! Processed {len(entries)} entries.")
    print(f"Kept {len(unique_entries)} unique papers.")

# Update these paths to match your VS Code structure
input_file = '_bibliography/papers.bib' 
output_file = '_bibliography/papers.bib'

clean_bib(input_file, output_file)