# MovieDatabase
---
### modules: funktionella byggstenar
#### Är det en specifik function på sidan?
🟢api.js -> pratar med servern. ska bara hantera data, inte bestämma när eller var något visas på skärmen.
🟢carousel -> handerar karusell
🟡search -> handerar söklogik

---
### utils: hjälpfunktioner
### Är detta en hjälpfunktion som kan användas överallt?
🟠domUtils.js -> createElement, addClass, removeClass
🟠utils.js -> formatDate(), 

---
### 🟢script: startmotor, kopplar ihop allt
### Startar detta sidan eller kopplar den ihop saker?
importerar moduler, starta functioner, lyssna på event, bestämma vad som ska hända





anropa carusellen och lägga in filmerna

*välj design
*hämta de första filmerna. 5filmer

loppa igenom 5 filmer och skicka    ut dem.
i varje loop anropa funktionen renderTrailer och skicka med filmen den är på just nu och nummret den är på just nu.
koden är färsig, det är bara att skicka en film till den funktionen
skapa film-korten på sidan
fixa sökningen
klicka på en film så kommer man till nästa sida
kunna välja favorit och lägga till i favoriter


dölja karusell på mobilvy, under 700
inget får stecka ut men mellanstorlekarna behöver inte vara optimala

insomnia:
3anrop
de rekomenderade (GET recomended)
sökningen efter filmer (GET search movies)
filmens egen data (GET movie dettails)