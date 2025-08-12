---
title: "Understanding REST APIs"
date: "2025-08-12"
---

For this post I wanted to briefly cover REST APIs again just as a refresher for me. REST revolves around using methods like GET, Post, Put, and Delete.

## Example Fetch Code Block

fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
