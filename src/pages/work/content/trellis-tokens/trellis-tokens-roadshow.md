---
title: "Early progress and initial success"
---

After a successful quarter-plus of work, we had a solid first iteration of a new token system:

* A Base Token layer of about 125 tokens, describing all the unopionated options for color, typography, spacing and shape. This was easy to create, as it describes all the visual design decisions of the system today.
* A Semantic Tokens layer of about 300 tokens. The semantic layer was actually a mixture of truly semantic tokens like `color-text-default` and more contextually precise component tokens, like `button-color-bg-primary`.

We had agreed that some level of contextual precision would be needed, we just exactly sure how far down this rabbit hole we needed or wanted to go. The old rumor of Adobe Spectrum having 1000s of component tokens was the campfire story we'd tell while debating the right level of precision.

The new token system was also powering new `<Text />`, `<Spacer />` and `<View />` foundational components the engineers had built. Additionally, we had the toke infrastructure to support Buttons, Links, Inputs, FormControls and Radio and Checkboxes, as well as Tile, Card and Modal components.

The new foundation components were being tested with Early Adopters and in some cases already shipping to Prod.