'use strict';
Legal.add('de', {
  note: 'Diese Übersetzung dient deiner Information. Weicht sie von der spanischen Fassung ab, ist die spanische Fassung maßgeblich.',
  pending: 'ausstehend',
  fields: {name: 'Name oder Firma', taxId: 'Steuernummer', address: 'Anschrift', email: 'Kontakt-E-Mail', hosting: 'Hosting-Anbieter'},
  registry: ', eingetragen bei {registry}',
  adrYes: 'Wir nehmen an {adr} teil.',
  adrNo: 'Wir nehmen an keinem Verfahren zur alternativen Beilegung von Verbraucherstreitigkeiten teil.',
  version: 'Version {version} · Gültig seit {date}',
  rules: {
    intro: 'Bis {c25} Münzen sinkt der Faktor der Preise von {f0} auf {f25} ihres Grundwerts; bis {c30} auf {f30}; bis {c40} auf {f40}; danach beschleunigt sich der Rückgang. Ab {c45} Münzen verringert eine zweite, zunehmende Bremse alle Belohnungen, bis sie bei {c50} durch 300 geteilt sind. Kein einzelner Preis übersteigt {max} Münzen.',
    reference: 'Dein aktueller Richtwert · 5 Sekunden Video',
    coins: '{n} Münzen',
    head: ['Guthaben', 'Video · 5 s', 'Größte Truhe'],
    rounding: 'Beträge werden gerundet angezeigt, die Berechnungen nutzen jedoch sechs Nachkommastellen. Eine Auszahlung ist erst möglich, wenn der gewählte Betrag tatsächlich erreicht ist.'
  },
  terms: {
    title: 'Nutzungsbedingungen',
    summaryTitle: '**Das Wichtigste** (diese Zusammenfassung ersetzt nicht den vollständigen Text):',
    summary: [
      'WatchEarn ist kostenlos und in der Beta-Phase. Nur für Personen ab {age} Jahren mit Wohnsitz in {countries}.',
      '{c1} Münzen = {rate}. Die erste Auszahlung beträgt {goal} und wird vor der Zahlung manuell geprüft.',
      '**Die Belohnungen sinken.** Bis zur ersten Auszahlung brauchst du etwa {range} Stunden aktive Nutzung; allein die letzten 10 % des Ziels über {last} Stunden. Das ist keine Einkommensquelle.',
      'Dein Guthaben wird nur auf diesem Gerät gespeichert (im Browser oder in der App). Wenn du die Daten löschst, die App deinstallierst oder das Gerät wechselst, geht es verloren und wir können es nicht wiederherstellen.',
      'Bots, Schummeln oder mehrere Profile pro Person machen Münzen und Auszahlungen ungültig.'
    ],
    sections: [
      ['1. Anbieter', [
        'WatchEarn wird angeboten von {name}, Steuernummer {taxId}, Anschrift {address}{registry}. Kontakt-E-Mail: {email}. Angaben gemäß Artikel 10 des spanischen Gesetzes 34/2002 über Dienste der Informationsgesellschaft und den elektronischen Geschäftsverkehr (LSSI).'
      ]],
      ['2. Gegenstand, Beta-Phase und Annahme', [
        'Diese Bedingungen regeln die Nutzung der Web-App WatchEarn während ihrer Beta-Phase: ein kostenloser Dienst, in dem du kurze Videos ansiehst, Aufgaben und Spiele erledigst und Münzen sammelst, die nach Abschnitt 6 gegen Geld eingelöst werden können. Kauf, Zahlung oder Abonnement sind nicht erforderlich.',
        'Die Beta ist eine Testversion: Sie kann Fehler und Unterbrechungen haben und sich nach Abschnitt 9 ändern. Wir garantieren keine ständige Verfügbarkeit.',
        'Um diese Bedingungen anzunehmen, tippe auf „Gelesen und akzeptiert“. Mit der Annahme erklärst du, die Voraussetzungen aus Abschnitt 3 zu erfüllen. Ohne Annahme werden keine Videos abgespielt und keine Belohnungen vergeben. Wir speichern die angenommene Version und das Datum in deinem Browser.',
        'Wir archivieren keine individuelle Kopie deiner Annahme: Diese Bedingungen sind jederzeit auf der Seite [Nutzungsbedingungen](terms.html) verfügbar, wo du sie speichern oder drucken kannst (Artikel 27 LSSI). Sie werden in mehreren Sprachen angeboten; weicht eine Übersetzung ab, ist die spanische Fassung maßgeblich.'
      ]],
      ['3. Wer teilnehmen kann', [
        'Du kannst WatchEarn nutzen, wenn du mindestens {age} Jahre alt und geschäftsfähig bist und deinen Wohnsitz in {countries} hast. Jede Person darf mit nur einem Profil teilnehmen, also einem Browser auf einem Gerät. Guthaben aus verschiedenen Browsern oder Geräten können nicht zusammengelegt, übertragen oder gemeinsam eingelöst werden.'
      ]],
      ['4. So verdienst du Münzen', [
        '**Ansehen.** Es zählt die aktive Wiedergabezeit beim ersten Ansehen jedes Auftretens eines Videos, gutgeschrieben in Abständen von 3,5 bis 6,5 Sekunden. Pausen, die App im Hintergrund, Sprünge und automatische Wiederholungen zählen nicht.',
        '**Boni und Spiele.** Alle 2 bis 4 Videos kann ein freiwilliger Bonus erscheinen: Truhen (drei mögliche Preise mit je 1 zu 3 Wahrscheinlichkeit), Münzbonus, Geschenk oder Multiplikator (×2 55 %, ×3 25 %, ×4 12 %, ×5 6 %, ×10 1,8 % und ×20 0,2 %). Dazu gibt es einen Tagespreis, fünf stündlich erneuerte Aufgaben und vier Spiele mit je drei Runden pro Tag; Glücksrad und Rubbellos haben sechs gleich wahrscheinliche Preise.',
        'Alles ist kostenlos: Es gibt keine Wetten, Käufe oder kostenpflichtige Teilnahme. Zufallsergebnisse werden auf deinem Gerät mit dessen kryptografischem Zufallsgenerator erzeugt. Die Android-App enthält Werbung und freiwillige Videos mit Belohnung (Abschnitt 16); die Webversion hat keine Werbung.'
      ]],
      ['5. Wert der Münzen und sinkende Belohnungen', [
        'Münzen sind weder Geld noch E-Geld noch eine Einlage: Sie bringen keine Zinsen, können nicht übertragen oder verkauft werden und werden nur nach Abschnitt 6 eingelöst. Ihr Einlösewert hängt von der Währung deines Wohnsitzlandes ab: Die erste Auszahlung, {c50} Münzen, entspricht {goal}, und {c1} Münzen entsprechen {rate}. Der in der App angezeigte Betrag ist dieser Gegenwert, kein Bankguthaben. Wert der ersten Auszahlung in jeder Währung:',
        '{currencies}',
        '**Die Belohnungen sinken, je höher dein Guthaben ist:**',
        '{rules}',
        '**Geschätzte Zeit.** Nach unseren Simulationen des aktuellen Systems brauchst du bis zur ersten Auszahlung etwa {range} Stunden aktive Nutzung, mit oder ohne Boni und Spiele. Nur mit Videos: die Hälfte des Ziels in weniger als {m25} Minuten, 80 % in etwa {h40} Stunden, 90 % in etwa {h45} Stunden, 98 % in etwa {h49} Stunden und das volle Ziel in etwa {h50} Stunden. Bei drei Stunden täglich sind das mehr als zwei Jahre. Dies sind Schätzungen, keine Garantie, und WatchEarn ist weder ein Job noch eine Einkommensquelle.'
      ]],
      ['6. Auszahlungen', [
        'Du kannst eine Auszahlung von {amounts} beantragen, sobald dein Guthaben diesen Betrag erreicht. Wir zahlen per PayPal oder, in Spanien, per Bizum auf ein Konto auf deinen Namen.',
        'Wenn du die Auszahlung im Wallet bestätigst, werden die Münzen abgezogen und dein E-Mail-Programm öffnet sich mit dem Antrag und seinem Code. Sende ihn an {email} mit den Daten deines Auszahlungskontos und dem Namen des Kontoinhabers. Wurde er nicht gesendet, kannst du ihn im Wallet erneut senden oder kopieren.',
        'Wir prüfen jeden Antrag und können angemessene Informationen anfordern, um Identität, Alter, Wohnsitz und Kontoinhaberschaft zu prüfen. Gültige Anträge zahlen wir spätestens {payoutDays} Kalendertage nach Eingang des vollständigen Antrags aus. Wir erheben keine Gebühren; dein Zahlungsanbieter kann eigene erheben.',
        'Verstößt ein Antrag gegen diese Bedingungen, teilen wir dir das per E-Mail mit Begründung mit, und du kannst antworten. Lässt sich das Problem beheben, erklären wir dir wie, ohne dass du den Betrag verlierst.',
        'Erhaltene Beträge können steuerliche Folgen haben, und du bist für ihre Angabe verantwortlich. Verpflichtet uns das Gesetz zu einem Steuerabzug oder einer Meldung an die Steuerbehörden, tun wir das und informieren dich.'
      ]],
      ['7. Faire Nutzung und Betrugsvorbeugung', [
        'Es ist nicht erlaubt, Münzen mit Bots, Skripten, Emulatoren oder sonstiger Automatisierung zu erlangen; Speicher, Code, Geräteuhr oder Anfragen der App zu manipulieren; Fehler auszunutzen; mehrere Profile zur Vervielfachung von Belohnungen zu verwenden oder Münzen oder Profile zu verkaufen oder weiterzugeben.',
        'Stellen wir solches Verhalten fest, können wir unrechtmäßig erlangte Münzen annullieren, betroffene Auszahlungen ablehnen und dich von der Beta ausschließen, verhältnismäßig und, wo möglich, mit Angabe des Grundes. Durch einen offensichtlichen technischen Fehler gutgeschriebene Beträge können wir korrigieren.'
      ]],
      ['8. Inhalte und geistiges Eigentum', [
        'Die Videos gehören ihren Urhebern und Rechteinhabern; WatchEarn zeigt den Namen des Urhebers und einen Link zum Original. Du erhältst keine Rechte daran: Du darfst sie nur in der App für den persönlichen Gebrauch ansehen. Links zu YouTube und anderen Seiten führen zu Diensten Dritter mit eigenen Bedingungen.',
        'Wenn du Rechteinhaber bist und meinst, dass ein Inhalt ohne Erlaubnis genutzt wird, schreib uns an {email} mit Angabe des Inhalts, deiner Rechte und deiner Kontaktdaten. Wir entfernen ihn unverzüglich, sobald wir tatsächliche Kenntnis von seiner Rechtswidrigkeit haben.',
        'Name, Design und Code von WatchEarn gehören dem Anbieter, ausgenommen Ressourcen Dritter mit eigener Lizenz wie die Schriften DM Sans und Manrope (SIL Open Font License).'
      ]],
      ['9. Änderungen und Ende der Beta', [
        'Wir können den Dienst, die Belohnungen oder diese Bedingungen aus berechtigten Gründen ändern (rechtliche, technische, Sicherheit, Betrugsvorbeugung, Wirtschaftlichkeit oder Weiterentwicklung des Dienstes) und kündigen dies mindestens 15 Tage vorher in der App an, außer bei dringenden gesetzlich oder sicherheitsbedingt erforderlichen Änderungen. Um die App weiter zu nutzen, musst du die neue Version annehmen; andernfalls kannst du die Nutzung beenden und bereits bestehende Auszahlungsansprüche geltend machen. Bereits verdiente Münzen behalten ihren Einlösewert.',
        'Das Ende der Beta kündigen wir mindestens {noticeDays} Tage vorher an, und du kannst Guthaben, das die Schwelle erreicht, bis {claimDays} Tage nach dem Ende auszahlen lassen. **Guthaben unter der ersten Auszahlung kann nicht eingelöst werden und verfällt mit dem Ende der Beta.**'
      ]],
      ['10. Haftung', [
        'Wir haften für Schäden durch Vorsatz oder grobe Fahrlässigkeit und für Schäden, deren Haftung gesetzlich nicht ausgeschlossen werden kann. Wir haften nicht für Unterbrechungen außerhalb unseres Einflusses oder für den Verlust des Guthabens durch Löschen der Browserdaten, privates Surfen oder einen Gerätewechsel. Nichts in diesen Bedingungen schränkt deine Verbraucherrechte ein.'
      ]],
      ['11. Laufzeit, Beendigung und Widerruf', [
        'Der Vertrag läuft, solange du den Dienst nutzt, längstens bis zum Ende der Beta. Du kannst WatchEarn jederzeit kostenlos nicht mehr nutzen und alle Daten unter Einstellungen → Meine Daten löschen entfernen. Du kannst den Vertrag außerdem innerhalb der 14 Kalendertage nach Artikel 102 des spanischen Allgemeinen Verbraucherschutzgesetzes ohne Angabe von Gründen widerrufen: Hör einfach auf, die App zu nutzen, und teile es uns auf Wunsch mit. Wir können den Vertrag kündigen, wenn du gegen diese Bedingungen verstößt, und nennen dir den Grund.'
      ]],
      ['12. Datenschutz', [
        'Wie wir deine Daten verarbeiten, steht in der [Datenschutzerklärung](privacy.html).'
      ]],
      ['13. Kundenservice und Beschwerden', [
        'Fragen und Beschwerden kannst du an {email} senden. Wir antworten so schnell wie möglich, spätestens innerhalb eines Monats. {adr} Du kannst dich auch an die Verbraucherbehörden an deinem Wohnort wenden oder ein Verbraucherschiedsverfahren beantragen, das für beide Seiten freiwillig ist.'
      ]],
      ['14. Anwendbares Recht und Gerichtsstand', [
        'Für diese Bedingungen gilt spanisches Recht. Als Verbraucher kannst du die Gerichte an deinem Wohnsitz anrufen und behältst den Schutz der zwingenden Vorschriften deines Wohnsitzlandes.'
      ]],
      ['15. Salvatorische Klausel', [
        'Ist eine Klausel unwirksam, bleiben die übrigen in Kraft, und an die Stelle der unwirksamen Klausel tritt die anwendbare gesetzliche Regelung.'
      ]],
      ['16. Android-App und Werbung', [
        'WatchEarn wird auch als Android-App angeboten, mit demselben Dienst und denselben Bedingungen. In der App gelten Verweise auf den Browser als Verweise auf die App: Dein Guthaben wird dort gespeichert und geht verloren, wenn du ihre Daten löschst oder sie deinstallierst, und jede Installation auf einem Gerät zählt als ein Profil (Abschnitt 3).',
        'Die App zeigt Werbung von AppLovin und seinen Mediationspartnern: **Vollbildanzeigen** zwischen Videos, höchstens alle paar Videos und ohne Münzen, und freiwillige **Videos mit Belohnung**, die du dir ansiehst, um unter Belohnungen zusätzliche Münzen zu erhalten (bis zu {adsPerDay} pro Tag) oder einen Truhenpreis oder Münzbonus zu verdoppeln. Auch ein verdoppelter Preis übersteigt nie {max} Münzen.',
        'Münzen aus einem Video mit Belohnung werden nur gutgeschrieben, wenn AppLovin bestätigt, dass du es bis zum Ende angesehen hast. Wenn du es vorher schließt oder es fehlschlägt, gibt es keine Belohnung und der ausstehende Preis bleibt unverdoppelt erhalten. Wir garantieren nicht, dass immer Werbung verfügbar ist. Das Antippen einer Anzeige ist freiwillig und bringt keine Münzen; künstliche Aufrufe oder Klicks zu erzeugen ist verboten (Abschnitt 7). Für die Anzeigen und die beworbenen Produkte sind die Werbetreibenden verantwortlich.',
        'Personalisierte Werbung wird nur mit deiner Einwilligung angezeigt, die du in den Einstellungen ändern kannst; die Verarbeitung deiner Daten wird in der [Datenschutzerklärung](privacy.html) erklärt.'
      ]]
    ]
  },
  privacy: {
    title: 'Datenschutzerklärung',
    summaryTitle: '**Das Wichtigste**',
    summary: [
      'Keine Registrierung und kein Konto: Dein Fortschritt wird auf deinem Gerät gespeichert und wir erhalten ihn nicht.',
      'Wir verarbeiten personenbezogene Daten nur, wenn du uns schreibst oder eine Auszahlung beantragst.',
      'Die Website hat keine Werbung, keine Analyse und keine Tracking-Cookies. Die Android-App zeigt Werbung von AppLovin, das Daten von deinem Gerät erhält; personalisierte Werbung nur mit deiner Einwilligung.',
      'Du kannst deine Daten unter Einstellungen → Meine Daten löschen entfernen und deine Rechte per E-Mail an uns ausüben.'
    ],
    sections: [
      ['1. Verantwortlicher', [
        '{name}, Steuernummer {taxId}, Anschrift {address}{registry}. Kontakt- und Datenschutz-E-Mail: {email}.'
      ]],
      ['2. Welche Daten wir verarbeiten', [
        '**Auf deinem Gerät.** Die App speichert im lokalen Speicher deines Browsers dein Guthaben, Bewegungen, Aufgaben, Spiele, gespeicherte Videos, die Reihenfolge des Feeds, die Wiedergabezeit, offene Preise, Auszahlungsanträge, Einstellungen und Sprache sowie Version und Datum der angenommenen Bedingungen, in den Einträgen `watchearn-v1`, `watchearn-terms` und `watchearn-language`. Sie werden nicht an unsere Server gesendet und wir haben keinen Zugriff darauf.',
        '**Auszahlungen und Nachrichten.** Wenn du uns einen Auszahlungsantrag sendest oder schreibst, verarbeiten wir deine E-Mail-Adresse, deinen Namen, die Daten deines Auszahlungskontos (Bizum-Nummer oder PayPal-E-Mail), dein Wohnsitzland, Code, Betrag und Datum des Antrags sowie den Inhalt der Nachrichten. Falls nötig, um die Voraussetzungen zu prüfen, können wir Nachweise zu Identität, Alter und Wohnsitz anfordern, nur das Unerlässliche.',
        '**Verbindung.** Beim Laden der App erhält der Hosting-Anbieter ({hosting}) deine IP-Adresse, die aufgerufene Seite, Datum und Uhrzeit sowie technische Browserdaten, um die Website bereitzustellen und zu schützen. Währung und Sprache werden anhand der Zeitzone und der Sprachen deines Geräts gewählt, ohne sie an jemanden zu senden oder deinen Standort zu nutzen.',
        '**Links.** Öffnest du ein Originalvideo, gelangst du zu YouTube, das deine Daten nach eigener Richtlinie verarbeitet. Nutzt du Teilen, werden Titel und Link an die Teilen-Funktion deines Geräts übergeben.'
      ]],
      ['3. Zwecke und Rechtsgrundlagen', [
        [
          'Bereitstellung des Dienstes (Videos, Belohnungen, Einstellungen und Annahme der Bedingungen): Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).',
          'Bearbeitung, Prüfung und Zahlung von Auszahlungen: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).',
          'Betrugsvorbeugung: berechtigtes Interesse am Schutz des Programms und seiner Teilnehmer (Art. 6 Abs. 1 lit. f DSGVO).',
          'Beantwortung von Fragen, Beschwerden und Anträgen auf Ausübung von Rechten: Vertragserfüllung und rechtliche Verpflichtung (Art. 6 Abs. 1 lit. b und c DSGVO).',
          'Erfüllung buchhalterischer und steuerlicher Pflichten bei Zahlungen: rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO).',
          'Sicherer Betrieb der Website: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).'
        ],
        'Wir erstellen keine Profile und treffen keine ausschließlich automatisierten Entscheidungen: Jede Auszahlung prüft ein Mensch. In der Android-App personalisieren AppLovin und seine Partner die Werbung nur mit deiner Einwilligung (Abschnitt 11).'
      ]],
      ['4. Empfänger', [
        'Die Hosting- und E-Mail-Anbieter des Verantwortlichen als Auftragsverarbeiter; PayPal oder die Bank, die die Zahlung abwickelt, als eigenständige Verantwortliche; in der Android-App AppLovin und die Werbenetzwerke seiner Mediation (Abschnitt 11); sowie Behörden, wenn das Gesetz es verlangt. Wir verkaufen deine Daten nicht.'
      ]],
      ['5. Internationale Übermittlungen', [
        'Verarbeitet ein Anbieter Daten außerhalb des Europäischen Wirtschaftsraums, geschieht das mit den Garantien von Kapitel V DSGVO, etwa einem Angemessenheitsbeschluss oder den Standardvertragsklauseln der Europäischen Kommission.'
      ]],
      ['6. Speicherdauer', [
        [
          'Daten auf deinem Gerät: bis du sie löschst.',
          'Auszahlungsanträge und Zahlungen: so lange wie für die Bearbeitung nötig, danach gesperrt für die gesetzlichen Fristen (in der Regel 4 Jahre steuerlich und 6 Jahre für die Buchhaltung).',
          'Fragen und Beschwerden: bis zu ihrer Erledigung, danach für die Frist möglicher Ansprüche.',
          'Technische Protokolle: die vom Hosting-Anbieter angewandte Frist.'
        ]
      ]],
      ['7. Sicherheit', [
        'Die Website wird über HTTPS bereitgestellt. Lokale Daten werden in der App nicht verschlüsselt: Wer Zugriff auf deinen Browser hat, könnte sie sehen oder ändern. Kein System garantiert absolute Sicherheit.'
      ]],
      ['8. Minderjährige', [
        'WatchEarn ist nur für Personen ab {age} Jahren. Erfahren wir, dass ein Antrag von einer minderjährigen Person stammt, lehnen wir ihn ab und löschen ihre Daten, außer denen, die wir gesetzlich aufbewahren müssen.'
      ]],
      ['9. Deine Rechte', [
        'Du kannst deine Rechte auf Auskunft, Berichtigung, Löschung, Widerspruch, Einschränkung und Datenübertragbarkeit per E-Mail an {email} ausüben. Wir antworten innerhalb eines Monats, in komplexen Fällen verlängerbar um zwei weitere Monate. Die Daten auf deinem Gerät kannst du selbst unter Einstellungen → Meine Daten löschen entfernen. Du kannst dich auch bei der [spanischen Datenschutzbehörde (AEPD)](https://www.aepd.es/) oder bei der Datenschutzbehörde deines Landes beschweren.'
      ]],
      ['10. Lokaler Speicher und Cookies', [
        'WatchEarn verwendet keine Cookies. Die lokalen Einträge sind für den von dir angeforderten Dienst unbedingt erforderlich und benötigen daher keine Einwilligung (Artikel 22.2 LSSI). Die Website hat keine Analyse, keine Werbung und kein Tracking durch Dritte. In der Android-App speichert und liest das SDK von AppLovin Informationen auf deinem Gerät, um Werbung anzuzeigen (Abschnitt 11).'
      ]],
      ['11. Werbung in der Android-App', [
        '**Wer.** Die Android-App enthält das SDK AppLovin MAX der AppLovin Corporation, das Anzeigen direkt oder über die Werbenetzwerke seiner Mediation ausliefert. AppLovin und diese Netzwerke verarbeiten die Daten als eigenständige Verantwortliche nach ihren eigenen Richtlinien ([Datenschutzrichtlinie von AppLovin](https://www.applovin.com/privacy/)). Wir erhalten diese Daten nicht in einer Form, die dich identifiziert, sondern nur zusammengefasste Berichte über Anzeigen und Einnahmen.',
        '**Welche Daten.** Die Werbe-ID deines Geräts (sofern du sie nicht in den Android-Einstellungen gelöscht hast), IP-Adresse, Modell und Betriebssystem, Sprache, Zeitzone, Mobilfunkanbieter und Verbindungstyp, die App und die angezeigten Anzeigen sowie deine Interaktionen damit (Aufrufe, Klicks und Belohnungen).',
        '**Zwecke und Rechtsgrundlagen.** Nicht personalisierte Werbung anzeigen, ihre Häufigkeit begrenzen, sie messen, Belohnungen gutschreiben und Werbebetrug verhindern: berechtigtes Interesse an der Finanzierung und dem Schutz des kostenlosen Dienstes (Art. 6 Abs. 1 lit. f DSGVO). Personalisierte Werbung nach deinen Interessen anzeigen und messen: nur mit deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).',
        '**Deine Wahl.** Beim ersten Öffnen der App fragen wir dich, ob du personalisierte Werbung akzeptierst; Ablehnen ist genauso einfach und hindert dich nicht daran, die App zu nutzen oder Belohnungen zu erhalten. Du kannst deine Einwilligung jederzeit unter Einstellungen → Personalisierte Werbung widerrufen oder erteilen und deine Werbe-ID in den Android-Einstellungen zurücksetzen oder löschen. Du kannst der Verarbeitung auf Grundlage berechtigter Interessen auch widersprechen, indem du uns schreibst.',
        '**Übermittlungen und Speicherdauer.** AppLovin und einige Netzwerke verarbeiten Daten in den USA und in anderen Ländern außerhalb des Europäischen Wirtschaftsraums, mit den Garantien von Kapitel V DSGVO (etwa dem EU-US-Datenschutzrahmen oder den Standardvertragsklauseln). Sie speichern sie für die in ihren Richtlinien angegebenen Fristen.'
      ]],
      ['12. Änderungen', [
        'Ändern wir diese Erklärung, aktualisieren wir Version und Datum und informieren dich in der App über wesentliche Änderungen. Erfordert eine neue Verarbeitung deine Einwilligung, holen wir sie vorher ein.'
      ]]
    ]
  }
});
