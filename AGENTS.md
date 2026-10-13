<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Shared navigation and footer live in the root layout; each content section has a dedicated route so the site supports real page navigation.
- Company and project copy is centralized in browser-safe data modules; project photography carries a source and must identify the exact development.
- Enquiry forms open WhatsApp with user-provided text; do not imply messages are stored or delivered before the user sends them.
- Desktop WhatsApp anchors use native navigation; form submissions include a same-tab fallback when popups are blocked, so chat links remain usable.
- Scroll reveals use one observer per content group with a zero intersection threshold and register added items; tall mobile sections and filtered content must remain visible.
- Residential portfolio data lives separately from community data and resolves through the shared project-detail route, so home status and reference photos do not change development claims.
- Residential detail pages describe construction locations; reference-house images use an uncropped frame and location-specific enquiries rather than sale-listing language.
- Footer content stays visible independently of reveal observers so navigation and contact details cannot disappear during route transitions.
- Background video retries playback on visibility restoration and user interaction, retaining a poster if device autoplay is blocked and disabling video for reduced motion.
- Serve the architectural film with VP9 WebM and a lightweight baseline H.264 fallback, so browser codec support does not leave the background frozen.
