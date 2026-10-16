River Revir Creations — Local Installation Prototype (Updated Logo)

Included:
- index.html: launch-page mockup using your supplied actual logo
- manifest.webmanifest: proposed PWA metadata
- icons/rrc-icon-192.png and icons/rrc-icon-512.png: square icon assets preserving the full logo

Limitations:
- Opening index.html from a file does not make it installable as a PWA.
- Browsers generally require HTTPS (or localhost during development), a valid manifest, and additional install criteria.
- The launch button opens the existing Apps Script deployment:
  https://script.google.com/macros/s/AKfycbzIOUPNTBminVmAFroB-KkAehrsJM5cWSYO0_EyD5sHx-WbV7D0vVV3pPP-nwb1oOkm/exec
- Navigation to the Apps Script origin may leave the standalone app window or show browser UI. Authentication/session behavior needs testing.
- No Apps Script source files were modified and no deployment was performed.
- No offline functionality is included or promised.

Review the page and icons before deciding whether to use a local development server or hosting service. Do not replace the existing RRC deployment.
