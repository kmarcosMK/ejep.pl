EJEP - prosty statyczny szkielet bloga
-------------------------------------
Pliki:
  - index.html        (strona główna)
  - css/style.css     (style)
  - artykuly/         (folder z artykułami)
  - img/logo.svg      (proste logo)
  - privacy.html      (polityka prywatności minimalna)
  - regulamin.html    (prosty regulamin)

Jak wdrożyć na GitHub Pages:
  1. Stwórz repozytorium na GitHub, np. `ejep`.
  2. Skomituj zawartość tego folderu do gałęzi `gh-pages` lub `main`.
  3. W ustawieniach repo -> Pages wybierz branch `main` (root) lub `gh-pages`.
  4. Podłącz domenę ejep.pl w ustawieniach GitHub Pages i dodaj rekordy DNS zgodnie z instrukcjami GitHub.

Jak dodawać artykuły:
  - Dodaj nowy plik HTML do folderu artykuly i dopisz wpis w index.html (sekcja 'cards').
  - Możesz też wygenerować wpisy dynamicznie, gdy w przyszłości podłączysz Publii lub Netlify CMS.

Uwaga:
  - To prosty start. Mogę przygotować wersję z Netlify CMS lub Publii, jeśli zechcesz edytować treści z telefonu.
