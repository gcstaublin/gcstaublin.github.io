---
title: "The token tooling stack"
---

The creation source of truth for the token system was Token Studio file in Figma. I generally like to think of code as the source of truth for design system decisions. So this was a slight deviation, but with a purpose.

When this project started, Figma hadn't yet announced it's long rumored Figma Variables feature. Token Studio would give us a meaningful way to apply style to Figma Components as proof of concepts.

Token Studio gave me a quick, handy visual UI, empowering me to quickly iterate on tokens and create JSON that could be pasted into code and pushed to github and PRed. I've written plenty of JSON by hand. I've also spent plenty of time hunting for a missing closing curly brace or missing comma. The Token Studio plugin was a powerful tool.

This was a manual process. I would manually copy the JSON from Token Studio into VS Code and push the changes, rather than automatically syncing Token Studio with HubSpot enterprise version of Github.

Again. I shared my process and progress with the team each week, and created Looms for async sharing and review.