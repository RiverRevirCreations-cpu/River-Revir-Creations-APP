River Revir Creations — GitHub Pages installation shell

Files in this folder are only the static installation page, manifest, logo icons, and a minimal service worker for Android PWA installability checks.

Upload the extracted files to the ROOT of the existing GitHub repository, replacing index.html and README.txt, and adding sw.js. Keep manifest.webmanifest and the icons folder.

This patch does not modify Google Apps Script source, deployments, databases, or sign-in. The service worker intentionally does not cache requests or provide offline access.

After committing, wait for GitHub Pages to redeploy. On Android, close the old install prompt, reload the site in Chrome, wait a few seconds, then check Chrome menu for Install app. If it still hangs, cancel and tell us what Chrome displays.
