RRC INSTALL PAGE RESTORE — NO AUTO-REDIRECT

Purpose: restore the GitHub Pages install/launch page so it does NOT automatically redirect to Google Apps Script. This matches the reported symptom: the direct-launch patch redirected after 700 ms and prevented the launch page from staying open.

Upload the files in this ZIP to the ROOT of the existing GitHub repository, replacing index.html and README.txt, and adding/replacing sw.js and manifest.webmanifest plus icons/ if needed. The ZIP contains the whole static page set.

After committing, wait for GitHub Pages to redeploy. On Android Chrome, open https://riverrevircreations-cpu.github.io/River-Revir-Creations-APP/ directly, reload, wait several seconds, then check the ⋮ menu for Install app or Add to Home screen. If no option appears, send a screenshot of the page and Chrome menu.

Important limitations: this does not modify Code.gs, Index.html in Apps Script, the database, authentication, or deployment. It does not promise offline access. The button intentionally opens the existing Apps Script URL; Google may show its hosted sign-in header. Do not configure a redirect to script.google.com in GitHub Pages settings.
