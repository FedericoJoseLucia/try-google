// Get Document Localized Text Fields
getLocalizations = function(){
    var docLang = document.documentElement.lang.toLowerCase();

    switch (docLang) {
        case "cs-cz": return {name: "Zkusit Google",        title: "Zkusit hledat Googlem"};            // Czech
        case "sk-sk": return {name: "Vyskúšat Google",      title: "Vyskúšajte vyhľadávanie v Google"}; // Slovak
        case "de-de": return {name: "Versuchen Sie Google", title: "Versuchen Sie eine Google-Suche"};  // German
        case "de-at": return {name: "Versuchen Sie Google", title: "Versuchen Sie eine Google-Suche"};  // German (Austria)
    }
    switch (docLang.substr(0, 2)) {
        case "es":    return {name: "Intentar con Google",  title: "Intentar usando Google"};           // Spanish
        case "en":                                                                                      // English
        default:      return {name: "Try Google",           title: "Try using Google"}                  // Default
    }
;};

var params = new URLSearchParams(window.location.search);

if (params.has("q")) {

    var searchText = params.get("q");
    var googleUri = "https://google.com/search?q=" + encodeURIComponent(searchText);

    var localizations = getLocalizations();

    var anchor = document.createElement("a");
    anchor.setAttribute("href", googleUri);
    anchor.setAttribute("title", localizations.title);
    anchor.setAttribute("target", "_blank");
    anchor.setAttribute("rel", "noopener nofollow noreferrer");
    anchor.innerText = localizations.name;

    document.querySelector(".search-filters").appendChild(anchor);
}