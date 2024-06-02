---
# Documentation: https://wowchemy.com/docs/page-builder/
widget: pages
headless: true
weight: 20

title: Latest News
subtitle:

content:
  count: 20
  filters:
    author: ''
    category: ''
    exclude_featured: false
    publication_type: ''
    tag: ''
  offset: 0
  order: desc
  folders:
    - shipments
    - fundraising
    - events
design:
  view: community/datedshowcase
  flip_alt_rows: true
  columns: '1'  
  spacing:
    # Customize the section spacing. Order is top, right, bottom, left. 
    padding: ["20px", "0", "20px", "0"]
  background:
    color: 'var(--bg)'
    # Text color (true=light, false=dark, or remove for the dynamic theme color).
    text_color_light: false
---