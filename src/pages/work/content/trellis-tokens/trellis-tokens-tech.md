---
title: "The Tokens Tech Stack"
---

When the design tokens project began in 2023, Figma hadn't yet released Figma Variables. The feature had been rumored for months, but at the outset of the project we didn't have a reliable avenue for keeping Figma and React in sync with the same source of true.

However, the Token Studio plugin would empower me to quickly create token sets with a visual editor that could both create the JSON needed for code and .

The Token Studio Figma file stood as a creation source of truth. The JSON would then be uploaded to Github, supporting React component building. Additionally, I could leverage Token Studio to experiment with applying tokens(variables) to Figma components. Without Token Studio, I would have needed to manually craft 1000s lines of JSON. Token Studio's visual UI made this process easier and saved me the likely frustration of finding the missing <code>}</code> in a file.

The Token Studio file