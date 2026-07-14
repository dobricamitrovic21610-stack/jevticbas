# Jevtić BAS — Portfolio

Premium portfolio sajt na srpskom (latinica).

- **GitHub:** https://github.com/dobricamitrovic21610-stack/jevticbas
- **Site (GitHub Pages):** https://dobricamitrovic21610-stack.github.io/jevticbas/

## Lokalno

```bash
npm install
npm run dev
```

## Deploy

Statički build ide u `docs/` (GitHub Pages: branch `main` / folder `/docs`).

```bash
$env:GITHUB_PAGES="true"
npm run build
Remove-Item -Recurse -Force docs
Copy-Item -Recurse out docs
New-Item -ItemType File -Path docs\.nojekyll -Force
```
