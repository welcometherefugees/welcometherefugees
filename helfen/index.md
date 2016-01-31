---
title: Helfen
---

Hier werden alle Resourcen die zum Helfen der Menschen in Not dienen. Bisher ist hier nicht viel, aber ihr könnt uns helfen diese Liste zu füllen. Unter "Über die Seite" findet ihr eine Email Adresse unter der ihr uns kontaktieren könnt.

### Aktiv helfen
* Unterkunft bieten mit [Flüchtlinge Willkommen](http://www.fluechtlinge-willkommen.de).

Es gibt viele weitere Möglichkeiten aktiv zu helfen, am besten indem ihr euch aktiv an ehrenamtlichen Aktionen in eurer Region beteiligt. Sehr wichtig ist vor allem, dass die Flüchtlinge in die Gesellschaft eingebunden werden und nicht ausgeschlossen bleiben. Versucht Zeit mit Flüchtlingen zu verbringen und auf diesem Wege neue Kontakte zu knüpfen! Ihr könnt ihnen zum Beispiel auch im Alltag helfen, wo die Sprachbarriere problematisch wird.

### Spenden
* [Aktion Deutschland hilft](http://www.aktion-deutschland-hilft.de/)
* [Amadeu-Antoni-Stiftung gegen Rechtsextremismus](http://www.amadeu-antonio-stiftung.de/)

## Regionale Hilfe


{% for bundesland in site.pages %}
    {% if bundesland.bundesland == true and page.language == de %}
    
###{{bundesland.title}} 

        {% for kreis in site.pages %}

            {% if kreis.kreis == true and kreis.bundesland == bundesland.title %}
####[{{kreis.title}}]({{kreis.url}})
            {% endif %}
        {% endfor %}
        
    {% endif%}
{% endfor %}


Wir haben die Daten verschiedenen Seiten entnommen, die Quellen sind angegeben. Sollte irgendetwas hier nicht gewünscht sein, [kontaktieren Sie uns bitte](/kontakt).

## Zu WelcomeTheRefugees beitragen
### Artikel schreiben

Artikel könnt ihr mir [per E-Mail zusenden](/kontakt). Wenn ihr regelmäßig Beiträge schreiben möchtet, kann ich euch den Prozess etwas vereinfachen, aber fürs erste ist das der Standardweg.

Wir wollen auch gerne weitere Informationsseiten anbieten, so zum Beispiel typische Fragen die ein Flüchtling hat beantworten und bestimmte Dinge erklären, die es hier gibt, aber vielleicht in anderen Ländern nicht, oder nicht in der Form.

Aber da viele Flüchtlinge noch kein Deutsch sprechen, brauchen wir Übersetzungen.

### Übersetzen

Übersetzen ist etwas komplizierter, da diese Seite auf einem bestimmten Dateibasierten Inhaltssystem läuft. Im Grunde können Artikel und Seiten gerne auch einfach übersetzt per Email gesendet werden. Wichtig für Übersetzungen ist, dass diese zumindest die Grundsteine komplett übersetzen, d.h. die Navigation, der Footer, Start- und Kontaktseite.

Wenn ihr eine relevante Sprache kennt, [kontaktiert uns](/kontakt) bitte sofort und wir kümmern uns darum, eine Lösung zu finden wie wir eine Übersetzung leicht für Sie machen können.

Wer sich näher mit dem System auseinandersetzen möchte, um besser beitragen zu können, ist eingeladen auf [GitHub](http://github.com/welcometherefugees/welcometherefugees) vorbeizuschauen.

### Für Entwickler und Designer

Diese Seite läuft auf Jekyll, welches die Liquid Templating Language nutzt. WelcomeTheRefugees wird kostenlos auf GitHub Pages gehostet, deshalb stehen uns viele Funktionen nicht zur Verfügung. Wir stecken diesen kleinen Schlag ein, da uns ein zuverlässigerer Server wichtiger ist und wir so weitere Spendengelder sparen und besser nutzen können.

Auch für euch gilt, ihr seid eingeladen uns auf [GitHub](http://github.com/welcometherefugees/welcometherefugees) zu besuchen. Dort findet ihr den kompletten Sourcecode der Seite.
