# Kodeøvelse med React og Typescript

<img src="https://user-images.githubusercontent.com/45217974/208365483-56679b3c-9ba4-4b21-92ad-bb6348691d38.png" alt="Screenshot av prosjekt">

Hensikten med oppgaven er å vise kodepatterns og valg av pakker, rammeverk og bibliotek. 
Du står fritt til å strukturere prosjektet, velge pakker, rammeverk og bibliotek.

## Kravspesifikasjon

-   Sette opp frontendprosjekt med React og Typescript.
-   Prosjektet skal kunne kjøres lokalt.

## Skjema med gjenbrukbare elementer

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

* * *

## Prosjektforklaring

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

## Hvordan kjøre prosjektet

Sørg for å ha nyere versjon av Node og Npm (eller Yarn) installert. 

Kjør så: 

```bash
cd frontend
npm install
# eller
yarn
```

Du trenger å sette opp `/frontend/.env` ved å rename `.env.example` til `.env` og legge til følgende:

```bash
NEXT_PUBLIC_API_URL="https://rickandmortyapi.com/api"
```

(Det er dårlig praksis å commite .env til Git, og den er lagt til i .gitignore, derfor må dette settes opp manuelt)

Etterfulgt av:

```bash
npm run dev
# eller
yarn dev
```

Åpne <http://localhost:3000> i nettleseren.

Foretrekker du Docker, følg denne guiden: <https://github.com/vercel/next.js/tree/canary/examples/with-docker#in-existing-projects>

Vil du kjøre Storybook, kjør:

```bash
npm run storybook
```

Vil du kjøre Cypress (for tester), kjør:

```bash
npm run cypress:open
# for headless testing
npm run cypress:headless
```

* * *

## Statehåndtering

-   Statehåndtering er akkurat nå implementert via useState i index.tsx
-   Hvis man planlegger å utvide prosjektet med mange komponenter og i mye større skala ville jeg vurdert andre løsninger
-   Trenger man state i bare noen komponenter er React Context et godt alternativ
-   Trenger man state i mange komponenter er Redux med Redux Toolkit et bedre alternativ

# Hvorfor teknologi X?

## useSwr

-   Caching av data fra API
-   Fungerer bra med Next.js
-   Forenkler datahåndtering
-   Paginering ut av boksen
-   Fungerer best med data som endres ofte
-   Støtte for Typescript
-   Slipper å bruke feks useEffect for datahåndtering

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

* * *

# TODO

## Ting jeg ville vurdert å se nærmere på om jeg skulle brukt mer tid på prosjektet

-   Flere og bedre tester, blant annet med React Testing Library og se på testdekning (over 80% er et godt utgangspunkt)
-   Storybook story for alle komponenter (ikke bare Button)
-   Forbedre Typescript definisjoner, særlig i useGetSingleCharacter
-   Se mer på forhåndsinnlasting av data feks med getStaticProps eller getServerSideProps
-   Se på validering av API data med Zod som allerede brukes til skjemaet
-   Forbedre feilmeldinger vist i skjemaet
-   Lage en custom favicon for prosjektet
-   Revurdere struktur og mappevalg hvis prosjektet skal skaleres, vurdere å organisere per feature/view istedenfor som nå (ref React: The Road To Enterprise)
-   Implementert statehåndtering med en custom Context hook med Typescript for bruk i resten av prosjektet
