---
title: ''
type: landing
sections:
  - block: hero
    content:
      title: Sunflowers Wales
      text: >
        A non-profit community group founded by Ukrainian volunteers in Wales
        to support Ukrainians affected by Russia's invasion of Ukraine.
      primary_action:
        text: Donate now
        url: /donate/
      impact_stats:
        - value: "£118K"
          label: raised for Ukraine
        - value: "89"
          label: shipments sent
        - value: "£99.7K"
          label: spent on aid
      social_links:
        - icon: hero/envelope
          label: Contact us by email
          url: mailto:sunflowerswales@gmail.com
        - icon: brands/facebook
          label: Facebook group
          url: https://www.facebook.com/groups/601579067497655
        - icon: brands/telegram
          label: Telegram chat
          url: https://t.me/SunflowersWales_Chat
        - icon: brands/linkedin
          label: LinkedIn
          url: https://www.linkedin.com/company/sunflowers-wales/
        - icon: brands/youtube
          label: YouTube
          url: https://www.youtube.com/@sunflowerswales
        - icon: brands/tiktok
          label: TikTok
          url: https://www.tiktok.com/@sunflowerswales
        - icon: brands/instagram
          label: Instagram
          url: https://www.instagram.com/sunflowerswales/
      media:
        type: image
        src: homepage/hero-community.jpg
        alt: Sunflowers Wales community members celebrating Vyshyvanka Day in Singleton Park, Swansea
    design:
      size: compact
      layout: split-left
      css_class: hero-tight-bottom
      spacing:
        padding: ["8px", "0", "0", "0"]

  - block: focus-areas
    id: what-we-do
    content:
      title: What we do
      items:
        - name: Fundraising
          description: Markets, marathons and community events that keep donations flowing to Ukraine.
          image: homepage/card-fundraising.jpg
          url: /fundraising/
        - name: Shipments to Ukraine
          description: Regular deliveries of medical and humanitarian aid to hospitals and frontline volunteers.
          image: homepage/card-shipments.jpg
          url: /shipments/
        - name: Dancing group
          description: A weekly gathering where Ukrainian women displaced by war share their culture through dance.
          image: homepage/card-dancing.jpg
          url: /dancing/
        - name: Children's classes
          description: Creative art and cooking classes that bring Ukrainian children together.
          image: homepage/card-classes.jpg
          url: /classes/
        - name: Family activities
          description: Fun days, parties and celebrations for Ukrainian families throughout the year.
          image: homepage/card-family.jpg
          url: /family-activities/
        - name: Day trips
          description: Outings to castles, farms, gardens and museums across Wales.
          image: homepage/card-trips.jpg
          url: /day-trips/
    design:
      layout: cards
      spacing:
        padding: ["24px", "0", "0", "0"]

  - block: markdown
    id: impact
    content:
      title: Our impact
      text: |
        As of 26 June 2026
    design:
      spacing:
        padding: ["24px", "0", "0px", "0"]

  - block: stats
    content:
      text: Every pound you donate goes to buy and send vital aid to Ukraine
      items:
        - statistic: "£118K"
          description: raised for Ukraine
          sub_metric: "£118,448 exactly — see our Reports"
          icon: hero/currency-dollar
        - statistic: "£99.7K"
          description: spent on aid sent to Ukraine
          icon: hero/heart
        - statistic: "89"
          description: shipments sent to Ukraine
          sub_metric: over 118 m³ of aid
          icon: hero/truck
    design:
      layout: compact
      spacing:
        padding: ["0px", "0", "4px", "0"]

  - block: stats
    content:
      text: Every grant we receive funds our activities here in Wales
      items:
        - statistic: "£23.3K"
          description: funding received
          sub_metric: "£23,250 exactly — see our Reports"
          icon: hero/gift
        - statistic: "34"
          description: fundraising events organised
          icon: hero/banknotes
        - statistic: "89"
          description: social events, classes & trips
          icon: hero/calendar
    design:
      layout: compact
      spacing:
        padding: ["0px", "0", "0px", "0"]

  - block: collection
    id: latest-news
    content:
      title: Latest news
      count: 6
      filters:
        folders:
          - shipments
          - fundraising
          - events
      archive:
        enable: false
    design:
      view: alternating
      spacing:
        padding: ["120px", "0", "0px", "0"]

  - block: partner-logos
    content:
      title: Our partners
      items:
        - name: SCVS
          image: /uploads/SCVS.jpg
          url: https://www.scvs.org.uk/membership
        - name: Race Council Cymru
          image: /uploads/partners/race-council-cymru.png
          url: https://racecouncilcymru.org.uk/
        - name: Llanelli Multicultural Network (LMCN)
          image: /uploads/partners/lmcn.jpg
          url: https://www.facebook.com/p/Llanelli-Multicultural-Network-LMCN-100075695632917
    design:
      spacing:
        padding: ["120px", "0", "48px", "0"]
---
