**English** | [العربية](README.md)

# Maher & Hashem Al-Soufi Consulting & General Services website

A one-page website in Arabic and English that presents the office's services: accounting, Al-Ameen software, point-of-sale systems, training and more. The site opens in Arabic on the first visit, and visitors can switch to English.

It is built with [Vite](https://vitejs.dev) and plain JavaScript, with no framework.

## Run it on your computer

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Then open the link shown in the terminal (usually `http://localhost:5173`). Any change you save shows up in the browser straight away.

> Don't open `index.html` by double-clicking it, because you'll get a white page. Always use `npm run dev`.

## Build

```bash
npm run build
npm run preview
```

The first command builds the final site into the `dist` folder. The second serves it so you can check it before publishing.

## Publishing to GitHub Pages

Publishing is automatic. On every `git push` to the `main` branch, `.github/workflows/pages.yml` builds the site and publishes it within one to three minutes. You can follow it in the repository's **Actions** tab.

**Settings → Pages → Source** must be set to **GitHub Actions**. The `dist` and `node_modules` folders are not uploaded to GitHub.

## Where to edit

| What you want to change | File |
|---|---|
| All site content: name, slides, services, about, stats, address, map, social links | `src/content.js` |
| Button labels, fixed headings and prefilled WhatsApp messages | `src/translations.js` |
| Colours and design | `src/style.css` (variables at the top) |
| How sections are laid out | `src/main.js` |
| Logos | `public/images/logo/` |
| Photos | `public/images/` |

Every text in `src/content.js` has an Arabic `ar` and an English `en` version, so edit both together. Write image paths without a leading slash, for example `images/pos-counter.jpg`.

## Contact form

To make the form work, create a free key at [web3forms.com](https://web3forms.com) and put it in `web3formsKey` in `src/content.js`. Messages go to the email address registered with Web3Forms.
