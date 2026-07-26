# AIC landing page — Design direction

## Visual direction

- The site is a single, section-based landing page. Keep every section focused: one clear heading, a short supporting sentence, and one relevant action.
- Use a balanced grid: centred copy for introductions; two columns for copy paired with media; three cards for grouped choices. Collapse all grids to one column on small screens.
- Give the page room to breathe. Sections use generous vertical rhythm, headings use an open line-height, and body copy is limited to a readable measure.

## Colour system

| Role | Value | Use |
| --- | --- | --- |
| Hero navy | `#001a33` | Main hero banner and dark emphasis areas; matches the preloader background. |
| Gold CTA | `#ffca4f` | Primary calls to action placed on navy. Text on this button is navy. |
| Light text | `#ffffff` | Main heading and important copy on a dark banner. |
| Supporting text | `rgb(255 255 255 / 88%)` | Hero descriptions only. |
| Light surface | `#eaf5ff` | Alternating content sections. |

Navy is the dominant hero colour. Do not use a bright blue gradient as the hero base. Gold is reserved for primary actions and small emphasis, so it remains meaningful and highly visible.

## Hero banners

Every hero, including research, cooperation, student, and inner-page banners, follows the same construction:

1. A solid `#001a33` base layer.
2. A full-bleed video or image, using `object-fit: cover` and `filter: brightness(1.05) contrast(1.06) saturate(0.95)` so its light level remains even and details stay visible.
3. A uniform navy veil (`rgb(0 26 51 / 55%)`) over the full media. This is deliberately even—not a heavy dark-to-light gradient—so one side of the video is not brighter than the other.
4. A local scrim directly behind the copy: `rgb(0 26 51 / 78%)`, with 16–24px blur and a subtle border. It protects text when the underlying video has bright or moving areas.
5. White type, with a restrained text shadow. Never place text directly over unprotected video.

The video must remain visibly present after the overlay. Tune the veil between 50% and 60% opacity according to the supplied media, but do not lower contrast of the text to reveal more video.

### Contrast example

```text
[ video, brightness normalised across the entire frame ]
[ uniform navy veil, 55% opacity ]
          [ copy scrim, 78% opacity ]
          AIC HAU I
          Research · Innovation · Impact
          [ Explore research ]
```

- Heading: white, at least 4.5:1 contrast against its own scrim.
- Supporting copy: white at 88% opacity, maximum two lines on desktop where possible.
- Gold CTA: use navy text; keep a visible focus ring and a darker gold hover state.

## Typography and spacing

- Hero headings: `line-height: 1.2–1.25`; body copy: `line-height: 1.7–1.8`.
- Main hero padding: at least 112px top/bottom on desktop and 88px on mobile.
- Standard sections: 80–96px vertical padding on desktop; 56–64px on mobile.
- Limit hero copy to 60–65 characters per line and supporting copy to roughly 640px wide.
- Keep at least 24px between heading and description, and 32px between description and CTA group.

## Navigation and scrolling

- Navigation and hero CTAs point to home-page anchors (`#ve-chung-toi`, `#to-chuc`, `#nghien-cuu`, `#hop-tac`, `#sinh-vien`, `#lien-he`).
- Scrolling is smooth, accounts for the fixed header, updates the URL hash, and respects `prefers-reduced-motion`.
- Highlight the matching menu item when its section enters the viewport.

## Accessibility checks

- Test every hero against a bright and a dark frame of its video; the copy scrim must maintain readable contrast in both.
- Do not encode important text into video or images.
- All buttons must retain visible keyboard focus and a minimum 44px interactive height.
- Motion must be optional through `prefers-reduced-motion`.
