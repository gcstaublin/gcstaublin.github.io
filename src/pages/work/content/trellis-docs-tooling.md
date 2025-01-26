---
title: "Planning for future tooling"
---

As we built the Trellis Documentation Site, our decisions were viewed through the lens of future needs. Pages like our components page rely on a JSON API we created to support the site. This improves upon the current Storybook paradigm where component status needs to manually updated on individual Storybook stories, and in many cases across multiple Github repositories. A future improvement is to leverage this JSON data to keep status in sync across all these endpoints.

Additionally, we talked about ways to leverage component data for Figma plugins, VS Code extensions. As Design Technologists, we’re looking for ways to meet users wherever they are.