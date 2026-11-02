# Maturitní kvíz s adaptivní obtížností

## O projektu

Webová aplikace sloužící k procvičování maturitních otázek. Obtížnost otázek se automaticky přizpůsobuje znalostem uživatele na základě jeho odpovědí.

Aplikace je vytvořena pomocí technologií React, JavaScript, HTML a CSS.

### Hlavní funkce
- Procvičování maturitních otázek.
- Tři úrovně obtížnosti: lehká, střední a těžká.
- Automatické přizpůsobování obtížnosti podle odpovědí.
- Kontrola správnosti odpovědí.
- Závěrečné vyhodnocení úspěšnosti.
- Historie předchozích výsledků.
- Ukládání výsledků pomocí `localStorage`.

## Použité technologie

- **React** – tvorba uživatelského rozhraní.
- **JavaScript** – programování logiky aplikace.
- **HTML** – struktura stránek.
- **CSS** – vzhled a stylování.
- **Vite** – vývojový server a sestavení aplikace.
- **React Router** – navigace mezi stránkami.
- **localStorage** – ukládání výsledků v prohlížeči.

## Požadavky

Před spuštěním projektu je potřeba mít nainstalované:

- [Node.js](https://nodejs.org/) včetně npm.
- Webový prohlížeč.
- Editor kódu, například [Visual Studio Code](https://code.visualstudio.com/).

## Instalace

1. Stáhněte nebo naklonujte projekt do počítače.
2. Otevřete terminál v kořenové složce projektu, ve které se nachází soubor `package.json`.
3. Nainstalujte potřebné závislosti:

```bash
npm install
```

## Spuštění aplikace

Pro spuštění vývojového serveru použijte příkaz:

```bash
npm run dev
```

Terminál zobrazí adresu, na které aplikace běží. Obvykle se jedná o:

```text
http://localhost:5173
```

Tuto adresu otevřete ve webovém prohlížeči.

Pro ukončení vývojového serveru stiskněte v terminálu `Ctrl + C`.

## Sestavení aplikace

Pro vytvoření produkční verze aplikace spusťte:

```bash
npm run build
```

Výsledné soubory se standardně uloží do složky `dist`.

Pro místní náhled produkční verze lze použít:

```bash
npm run preview
```

## Struktura projektu

Základní struktura projektu může vypadat například takto:

```text
react_zaklad/
├── public/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   └── Footer/
│   ├── pages/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Quiz/
│   │   ├── Results/
│   │   └── History/
│   ├── css/
│   │   └── style.css
│   ├── AppRouter.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

Jedná se o orientační strukturu. Skutečné složky a soubory se mohou podle aktuálního stavu projektu lišit.

## Princip adaptivní obtížnosti

Kvíz začíná na lehké úrovni. Na základě správnosti odpovědí se obtížnost postupně zvyšuje nebo snižuje.

Otázky jsou rozděleny do tří úrovní:

1. **Lehká** – základní otázky.
2. **Střední** – otázky vyžadující hlubší znalosti.
3. **Těžká** – náročnější otázky.

Konkrétní pravidla změny obtížnosti určuje implementace aplikace.

## Ukládání výsledků

Výsledky dokončených kvízů se ukládají do `localStorage` webového prohlížeče. Díky tomu zůstávají dostupné i po zavření nebo obnovení stránky.

Data jsou uložena pouze v daném prohlížeči a automaticky se nepřenášejí na jiná zařízení.

## Vývoj projektu

Projekt je vytvořen jako školní práce zaměřená na procvičování maturitních otázek a využití adaptivní obtížnosti ve webové aplikaci.