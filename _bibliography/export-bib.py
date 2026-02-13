# Install dependencies first if you haven't:
# pip install scholarly bibtexparser

from scholarly import scholarly
import bibtexparser

def export_scholar_to_bib(user_id, output_file='publications.bib'):
    """
    Export all publications from a Google Scholar profile to a .bib file.

    Args:
        user_id (str): Google Scholar ID from profile URL.
        output_file (str): Output BibTeX filename.
    """
    # Fetch author profile by ID
    author = scholarly.search_author_id(user_id)
    author = scholarly.fill(author, sections=['publications'])
    
    bib_database = {"entries": []}

    for pub in author['publications']:
        pub_filled = scholarly.fill(pub)
        bib_info = pub_filled.get('bib', {})
        
        # Skip if no title/author
        if 'title' not in bib_info or 'author' not in bib_info:
            continue

        # Build BibTeX entry
        bib_entry = {
            'ENTRYTYPE': bib_info.get('ENTRYTYPE', 'article'),
            'ID': bib_info['title'].replace(' ', '_').replace(':','').replace(',',''),
            'title': bib_info['title'],
            'author': bib_info['author'],
            'journal': bib_info.get('journal', bib_info.get('booktitle', '')),
            'year': bib_info.get('year', ''),
            'volume': bib_info.get('volume', ''),
            'number': bib_info.get('number', ''),
            'pages': bib_info.get('pages', ''),
            'doi': bib_info.get('doi', ''),
            'url': bib_info.get('url', '')
        }
        bib_database['entries'].append(bib_entry)

    # Write to .bib file
    with open(output_file, 'w', encoding='utf-8') as bibfile:
        bibtexparser.dump(bib_database, bibfile)

    print(f"✅ Export complete! {len(bib_database['entries'])} publications saved to '{output_file}'.")

# Example usage:
google_scholar_id = "38WygboAAAA"  # Replace with your Scholar ID
export_scholar_to_bib(google_scholar_id)
