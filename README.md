
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/5dc6f7632b354d30bd8a6637d69af48d)](https://www.codacy.com/gh/w3bdesign/carasent-react-typescript/dashboard)
[![CodeFactor](https://www.codefactor.io/repository/github/w3bdesign/carasent-react-typescript/badge)](https://www.codefactor.io/repository/github/w3bdesign/carasent-react-typescript)

# Kodeøvelse med React og Typescript

Hjemmeoppgave gitt av Carasent.

Hensikten med oppgaven er å vise kodepatterns og valg av pakker, rammeverk og bibliotek.
Du står fritt til å strukturere prosjektet, velge pakker, rammeverk og bibliotek.

Løsningen skal ikke ferdigstilles.

Sett opp et frontendprosjekt med React og Typescript. Prosjektet skal kunne kjøres lokalt.

## Frontend

 <img src="https://user-images.githubusercontent.com/45217974/211206001-0fa2f34a-882c-4bb4-a04c-9f9ba4c058d8.png" alt="Screenshot av prosjekt" />

## Dokumentasjon (Storybook)

 <img src="https://user-images.githubusercontent.com/45217974/211168415-300d889e-0b8f-4d0d-993e-a41b005a0f46.png" alt="Storybook dokumentasjon" />

* * *

## Innholdsfortegnelse

-   [Komponenter](#Komponenter)
-   [Prosjektforklaring](#Prosjektforklaring)
-   [Mappeoppsett](#Mappeoppsett)
-   [Installasjon](#Installasjon)
-   [Docker](#Docker)
-   [Statehåndtering](#Statehåndtering)
-   [Teknologivalg](#Teknologivalg)
-   [TODO](#TODO)

## Komponenter

<details>
    <summary>Klikk for å vise mer</summary>

-   Input
-   Select
-   Radio
-   Primærknapp
-   Sekundærknapp
-   Komponenter skal styles med fritt valg av løsning.
-   Komponenter skal kunne gjenbrukes.
-   En innsendelse og avbryt knapp (primær og sekundærknapp).
-   Skjema må lagre data, men trenger ikke persistere eller sende data noe sted.
-   Implementere eller fortelle hvordan du ville løst kommunikasjonen med et API.
-   Hvordan ville du håndtert state?

</details>

## Prosjektforklaring

<details>
    <summary>Klikk for å vise mer</summary>

-   Monorepo med Turborepo satt opp med pnpm.
-   Deployment er mulig via Docker (Dockerfile).
-   Frontend med Next.js (React) 13 med bruk av Typescript template.
-   Testing med Cypress og Cypress Axe for testing av a11y/WCAG.
-   Testing med Jest og React Testing Library.
-   Dokumentasjon av komponenter med Storybook og JSDoc.
-   Styling med Tailwind.css.
-   Formhåndtering med React hook og Zod for validering.
-   Kommunikasjonen med et API med useSWR og fetch.
-   Statehåndtering med useState.
-   Reset for form elementer med @tailwindcss/forms.
-   Oppdatering av pakker i package.json med Renovate.

</details>

## Mappeoppsett

<details>
    <summary>Klikk for å vise mer</summary>

-   `storybook`: en [Storybook](https://storybook.js.org/) applikasjon
-   `web`: en [Next.js](https://nextjs.org/) applikasjon
-   `ui`: et React komponent bibliotek delt av både `web` og `storybook`
-   `eslint-config-custom`: `eslint` konfigurasjoner (inkluderer `eslint-config-next` and `eslint-config-prettier`)
-   `tsconfig`: `tsconfig.json`brukt i monorepo

</details>

## Installasjon

<details>
    <summary>Klikk for å vise mer</summary>

Du kan kjøre prosjektet lokalt enten via [Docker desktop](https://www.docker.com/products/docker-desktop/) eller [pnpm](https://pnpm.io) og [Node](https://nodejs.org/en/).

Forklaring på hvordan du kjører det via [Docker desktop](https://www.docker.com/products/docker-desktop/) finner du her: [Docker](#Docker).

Du trenger å installere [pnpm](https://pnpm.io) som pakkehåndterer.

Sørg også for å ha [Node](https://nodejs.org/en/) versjon 16 (ikke nyere, da kan du få feilmeldinger fra Storybook) installert. 
Alternativt kan du bruke [nvm](https://github.com/nvm-sh/nvm) for å sette Node versjon til versjon 16. 

Git clone eller [last ned Git repository](https://github.com/w3bdesign/carasent-react-typescript/archive/refs/heads/main.zip).

Kjør så:

```bash
cd carasent-react-typescript
pnpm i
```

Du trenger å sette opp `/apps/web/.env` ved å rename `.env.example` til `.env` og legge til følgende:

```bash
NEXT_PUBLIC_API_URL="https://rickandmortyapi.com/api"
```

(Det er dårlig praksis å commite .env til Git, og den er lagt til i .gitignore, derfor må dette settes opp manuelt)

Etterfulgt av:

```bash
pnpm dev
```

Åpne <http://localhost:3000> i nettleseren.

Storybook starter automatisk.

Vil du kjøre Cypress (for E2E tester), sørg for å ha startet applikasjonen og så kjør:

```bash
pnpm cypress:open
```

Vil du kjøre Jest (for unit-testing), kjør:

```bash
pnpm test
```

</details>

## Docker

<details>
    <summary>Klikk for å vise mer</summary>

Ønsker du å bygge et Docker image, sørg for å ha satt opp og installert [Docker desktop](https://www.docker.com/products/docker-desktop/) og kjør kommandoen:

```bash
docker build -t carasent .

```

Nå kan du starte Docker kontaineren.

Gå inn i `Optional settings` og velg 3333 som port.

Trykk `Run`.

Nå kan du åpne <http://localhost:3333> i nettleseren.

</details>

## Statehåndtering

<details>
    <summary>Klikk for å vise mer</summary>

-   Statehåndtering er akkurat nå implementert via useState i index.tsx
-   Hvis man planlegger å utvide prosjektet med mange komponenter og i mye større skala ville jeg vurdert andre løsninger
-   Trenger man state i bare noen komponenter er React Context et godt alternativ
-   Trenger man state i mange komponenter er Redux med Redux Toolkit et bedre alternativ

## Teknologivalg

## Turborepo

-   Forenkler utvikling med monorepo
-   Veldig rask (har blant annet støtte for gratis remote caching med Vercel, så man sparer tid ved bygging)
-   Støtter alle pakkehåndteringsprogrammer (npm, yarn og pnpm)
-   Les mer om [Turbo](https://turbo.build) og [Turbo dokumentasjon](https://turbo.build/repo/docs)

## useSwr

-   Caching av data fra API
-   Fungerer bra med Next.js
-   Forenkler datahåndtering
-   Paginering ut av boksen
-   Fungerer best med data som endres ofte
-   Støtte for Typescript
-   Slipper å bruke useEffect for datahåndtering

## Next.js

-   Erfaring med React er nevnt i stillingsannonsen
-   Populært rammeverk for utvikling med React
-   Basert på React
-   Støtte for SSR (Server side rendering), SSG (Static site generation), ISR (Incremental Static Regeneration) med mer ut av boksen
-   Kan utvides med støtte for serverless via /api (API routes)
-   Bra for SEO
-   Bra community støtte
-   Støtte for Typescript

## React hook form

-   Erfaring med React hook form er nevnt i stillingsannonsen
-   Forenkler håndtering av kontaktskjema
-   Lett å integrere med andre biblioteker (som feks Yup, Zod eller Material UI)
-   Optimalisert for ytelse
-   Mindre kode å vedlikeholde
-   Lav læringskurve
-   Støtte for Typescript

## Storybook

-   En naturlig del av utvikling av designsystemer
-   Dokumentasjon av komponenter
-   Gjør onboarding av utviklere enklere fordi man ser hvilke komponenter man har og hvordan de fungerer
-   Gjør gjenbruk og testing av komponenter enklere
-   Designere og andre ikke-tekniske brukere kan se komponentene og hvordan de fungerer
-   Kan enkelt integreres med visuell testing og andre verktøy (feks Chromatic)

## Tailwind

-   Erfaring med Tailwind er nevnt i stillingsannonsen
-   Mindre CSS å skrive
-   CSS klasser er lokalisert til komponenten som bruker den (scoped) og påvirker ikke andre elementer
-   Lett å gjenbruke klasser og design
-   Designsystemet til Tailwind er godt gjennomtenkt
-   Sparer tid på design

## Cypress

-   Visuell testing (E2E) av komponenter og sider
-   Man kan forsikre seg om at endringer man gjør i designet eller koden ikke ødelegger noe
-   Lett å skrive tester
-   Man kan bruke nettleseren for å debugge tester og få hjelp til å skrive tester
-   Lett å automatisk teste tilgjengelighet med cypress-axe

## Renovate

-   Automatisk oppdatering av npm pakker
-   Hindrer lettere sårbarheter og sikkerhetsproblemer
-   Kan settes opp og konfigureres etter ønske

## Zod

-   Enkel validering av både kontaktskjema (React hook form) og API data
-   Lett å integrere med React hook form
-   Populært bibliotek

## Cypress axe (Axe core)

-   Tester WCAG (tilgjengelighet) av sider og komponenter
-   Tilgjengelighet er lovpålagt på alle norske nettsider

## Jest med React testing library

-   Industristandard for unit testing av komponenter i React
-   Kan utvides med feks coverage report (--coverage) så man oppnår ønsket testdekning

</details>

## TODO

## Ting jeg ville vurdert å se nærmere på om jeg skulle brukt mer tid på prosjektet

<details>
    <summary>Klikk for å vise mer</summary>

-   Se om jeg kan Forbedre Typescript definisjoner
-   Implementere forhåndsinnlasting av data med getStaticProps eller getServerSideProps
-   Se på validering av API data med Zod som allerede brukes til skjemaet
-   Sett opp path alias for ryddigere importeringer
-   Revurder mappestruktur (ref boken React - The Road To Enterprise for inspirasjon)
-   Implementert statehåndtering med en custom Context hook med Typescript for bruk i resten av prosjektet
-   Sette opp og integrere DevOps (feks CircleCI) med feks Applitools, CodeCov, Chromatic, Cypress og Jest for automatisk testing i skyen før merge av pull requests

</details>
