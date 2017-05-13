# ionic2-indexed-scroll

ionic2 indexed scroll bar DEMO

## Running
* Clone this repository: `git clone https://github.com/HsuanXyz/ionic2-indexed-scroll.git`.
* Run `npm install` from the project root.
* If you do not install the ionic CLI (`npm install -g ionic`)
* Run `ionic serve` in a terminal from the project root.

## App Preview
<img src="https://github.com/HsuanXyz/hsuan.github.io/blob/master/assets/ionic2-indexed-scroll/indexed-scroll-demo.gif?raw=true" alt="Preview">

## File Structure
```
.
├── LICENSE
├── README.md
├── config.xml
├── ionic.config.json
├── package.json
├── resources
├── src
│   ├── index.html
│   ├── app
│   │   ├── app.component.ts
│   │   ├── app.html
│   │   ├── app.module.ts
│   │   ├── app.scss
│   │   └── main.ts
│   ├── assets
│   │   ├── data
│   │   │   └── contacts.json     * ContactsData
│   │   └── icon
│   │       └── favicon.ico
│   ├── pages
│   │   ├── about
│   │   │   ├── about.html
│   │   │   ├── about.scss
│   │   │   └── about.ts
│   │   ├── contact
│   │   │   ├── contact.html
│   │   │   ├── contact.scss
│   │   │   └── contact.ts
│   │   ├── home
│   │   │   ├── home.html         * Contacts template
│   │   │   ├── home.scss         * Contacts stylesheet
│   │   │   └── home.ts           * Contacts code
│   │   └── tabs
│   │       ├── tabs.html
│   │       └── tabs.ts
│   ├── providers
│   │   └── contacts.ts           * ContactsData code
│   ├── service-worker.js
│   └── theme
│       └── variables.scss
├── tsconfig.json
└── tslint.json
```
## Environment
```
global packages:

    @ionic/cli-utils : 1.0.0
    Ionic CLI        : 3.0.0

local packages:

    @ionic/app-scripts              : 1.3.7
    @ionic/cli-plugin-ionic-angular : 1.0.0
    Ionic Framework                 : ionic-angular 3.2.0

```
