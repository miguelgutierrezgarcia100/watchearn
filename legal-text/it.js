'use strict';
Legal.add('it', {
  note: 'Questa traduzione è fornita per comodità. In caso di differenze con la versione spagnola, prevale la versione spagnola.',
  pending: 'da completare',
  fields: {name: 'nome o ragione sociale', taxId: 'codice fiscale', address: 'indirizzo', email: 'e-mail di contatto', hosting: 'fornitore di hosting'},
  registry: ', iscritta presso {registry}',
  adrYes: 'Aderiamo a {adr}.',
  adrNo: 'Non aderiamo ad alcun sistema di risoluzione alternativa delle controversie dei consumatori.',
  version: 'Versione {version} · In vigore dal {date}',
  rules: {
    intro: 'Fino a {c25} monete, il fattore dei premi scende da {f0} a {f25} del loro valore base; fino a {c30}, a {f30}; fino a {c40}, a {f40}; poi il calo accelera. Da {c45} monete, un secondo freno progressivo riduce tutte le ricompense fino a dividerle per 300 a {c50}. Nessun premio singolo supera {max} monete.',
    reference: 'Il tuo riferimento attuale · 5 secondi di video',
    coins: '{n} monete',
    head: ['Saldo', 'Video · 5 s', 'Forziere massimo'],
    rounding: 'Gli importi sono mostrati arrotondati, ma i calcoli usano sei decimali. Il prelievo è disponibile solo quando l’importo scelto è stato effettivamente raggiunto.'
  },
  terms: {
    title: 'Condizioni d’uso',
    summaryTitle: '**L’essenziale** (questo riepilogo non sostituisce il testo completo):',
    summary: [
      'WatchEarn è gratuito ed è in fase beta. Solo per maggiori di {age} anni residenti in {countries}.',
      '{c1} monete = {rate}. Il primo prelievo è di {goal} e viene verificato manualmente prima del pagamento.',
      '**Le ricompense diminuiscono.** Arrivare al primo prelievo richiede circa {range} ore di uso attivo; l’ultimo 10% dell’obiettivo, da solo, oltre {last} ore. Non è una fonte di reddito.',
      'Il tuo saldo è salvato solo su questo dispositivo (nel browser o nell’app). Se cancelli i dati, disinstalli l’app o cambi dispositivo, va perso e non possiamo recuperarlo.',
      'Bot, trucchi o più profili per persona annullano le monete e i prelievi.'
    ],
    sections: [
      ['1. Titolare del servizio', [
        'WatchEarn è un servizio fornito da {name}, codice fiscale {taxId}, con sede in {address}{registry}. E-mail di contatto: {email}. Informazioni fornite ai sensi dell’articolo 10 della legge spagnola 34/2002 sui servizi della società dell’informazione e il commercio elettronico (LSSI).'
      ]],
      ['2. Oggetto, fase beta e accettazione', [
        'Queste condizioni regolano l’uso dell’app web WatchEarn durante la fase beta: un servizio gratuito in cui guardi brevi video, completi attività e giochi e accumuli monete riscattabili in denaro secondo la sezione 6. Non è richiesto alcun acquisto, pagamento o abbonamento.',
        'La beta è una versione di prova: può avere errori e interruzioni e cambiare secondo la sezione 9. Non garantiamo la sua disponibilità continua.',
        'Per accettare queste condizioni, tocca «Ho letto e accetto». Accettandole dichiari di soddisfare i requisiti della sezione 3. Senza accettarle i video non vengono riprodotti e non si ottengono ricompense. Salviamo nel tuo browser la versione accettata e la data.',
        'Non archiviamo una copia individuale della tua accettazione: queste condizioni sono sempre disponibili nella pagina [Condizioni d’uso](terms.html), dove puoi salvarle o stamparle (articolo 27 LSSI). Sono offerte in più lingue; se una traduzione è diversa, prevale la versione spagnola.'
      ]],
      ['3. Chi può partecipare', [
        'Puoi usare WatchEarn se hai almeno {age} anni, la capacità di contrarre e risiedi in {countries}. Ogni persona può partecipare con un solo profilo, cioè un browser su un dispositivo. I saldi di browser o dispositivi diversi non possono essere sommati, trasferiti né riscattati insieme.'
      ]],
      ['4. Come si ottengono monete', [
        '**Visione.** Conta il tempo di riproduzione attiva della prima visione di ogni apparizione di un video, accreditato a intervalli da 3,5 a 6,5 secondi. Non contano le pause, l’app in background, i salti né le ripetizioni automatiche.',
        '**Bonus e giochi.** Ogni 2-4 video può comparire un bonus facoltativo: forzieri (tre premi possibili, ciascuno con probabilità di 1 su 3), bonus di monete, regalo o moltiplicatore (×2 55%, ×3 25%, ×4 12%, ×5 6%, ×10 1,8% e ×20 0,2%). Ci sono inoltre un premio giornaliero, cinque attività che si rinnovano ogni ora e quattro giochi con tre partite al giorno ciascuno; la ruota e il gratta e vinci hanno sei premi equiprobabili.',
        'Tutto è gratuito: non ci sono scommesse, acquisti né partecipazioni a pagamento. I risultati casuali sono generati sul tuo dispositivo con il suo generatore crittografico. L’app per Android include pubblicità e video con ricompensa facoltativi (sezione 16); la versione web non ha pubblicità.'
      ]],
      ['5. Valore delle monete e ricompense decrescenti', [
        'Le monete non sono denaro, moneta elettronica né un deposito: non producono interessi, non possono essere trasferite né vendute e si riscattano solo secondo la sezione 6. Il loro valore di riscatto dipende dalla valuta del tuo paese di residenza: il primo prelievo, {c50} monete, equivale a {goal} e {c1} monete a {rate}. L’importo mostrato nell’app è questa equivalenza, non un saldo bancario. Valore del primo prelievo in ogni valuta:',
        '{currencies}',
        '**Le ricompense diminuiscono man mano che il saldo cresce:**',
        '{rules}',
        '**Tempo stimato.** Secondo le nostre simulazioni del sistema attuale, arrivare al primo prelievo richiede circa {range} ore di uso attivo, con o senza bonus e giochi. Guardando solo video: metà dell’obiettivo in meno di {m25} minuti, l’80% in circa {h40} ore, il 90% in circa {h45} ore, il 98% in circa {h49} ore e l’obiettivo completo in circa {h50} ore. Con tre ore al giorno sono più di due anni. Sono stime, non una garanzia, e WatchEarn non è un lavoro né una fonte di reddito.'
      ]],
      ['6. Prelievi', [
        'Puoi richiedere un prelievo di {amounts} quando il tuo saldo raggiunge quell’importo. Paghiamo tramite PayPal o, in Spagna, tramite Bizum, su un conto intestato a te.',
        'Quando confermi il prelievo nel Portafoglio, le monete vengono scalate e si apre la tua e-mail con la richiesta e il suo codice. Inviala a {email} con i dati del tuo conto di pagamento e il nome dell’intestatario. Se non è stata inviata, puoi reinviarla o copiarla dal Portafoglio.',
        'Verifichiamo ogni richiesta e possiamo chiederti informazioni ragionevoli per controllare identità, età, residenza e titolarità del conto. Paghiamo le richieste valide entro {payoutDays} giorni di calendario dal ricevimento della richiesta completa. Non applichiamo commissioni; il tuo fornitore di pagamento può applicare le proprie.',
        'Se una richiesta viola queste condizioni, te lo comunicheremo via e-mail con il motivo e potrai rispondere. Se il problema si può correggere, ti spiegheremo come, senza perdere l’importo.',
        'Le somme ricevute possono avere effetti fiscali e sei responsabile di dichiararle. Se la legge ci obbliga a effettuare ritenute o a informare l’amministrazione fiscale, lo faremo e te lo comunicheremo.'
      ]],
      ['7. Uso corretto e prevenzione delle frodi', [
        'Non è consentito ottenere monete tramite bot, script, emulatori o qualsiasi automazione; manipolare l’archiviazione, il codice, l’orologio del dispositivo o le richieste dell’app; sfruttare errori; usare più profili per moltiplicare le ricompense; né vendere o cedere monete o profili.',
        'Se rileviamo questi comportamenti, potremo annullare le monete ottenute indebitamente, rifiutare i prelievi interessati ed escluderti dalla beta, in modo proporzionato e comunicandoti il motivo quando possibile. Possiamo anche correggere importi accreditati per un errore tecnico evidente.'
      ]],
      ['8. Contenuti e proprietà intellettuale', [
        'I video appartengono ai loro creatori e titolari dei diritti; WatchEarn mostra il nome del creatore e un link all’originale. Non ricevi alcun diritto su di essi: puoi solo guardarli nell’app, per uso personale. I link a YouTube e ad altri siti portano a servizi di terzi con le proprie condizioni.',
        'Se sei titolare di diritti e ritieni che un contenuto sia usato senza autorizzazione, scrivici a {email} indicando il contenuto, i tuoi diritti e i tuoi recapiti. Lo rimuoveremo con diligenza non appena avremo effettiva conoscenza della sua illiceità.',
        'Il nome, il design e il codice di WatchEarn appartengono al titolare, salvo le risorse di terzi con licenza propria, come i font DM Sans e Manrope (SIL Open Font License).'
      ]],
      ['9. Modifiche e fine della beta', [
        'Possiamo modificare il servizio, le ricompense o queste condizioni per motivi validi (legali, tecnici, di sicurezza, prevenzione delle frodi, sostenibilità o evoluzione del servizio), avvisandoti nell’app con almeno 15 giorni di anticipo, salvo modifiche urgenti imposte dalla legge o dalla sicurezza. Per continuare a usare l’app dovrai accettare la nuova versione; se non la accetti, puoi smettere di usarla e richiedere i prelievi a cui avevi già diritto. Le monete già ottenute conservano il loro valore di riscatto.',
        'Annunceremo la chiusura della beta con almeno {noticeDays} giorni di anticipo e potrai richiedere il prelievo del saldo che raggiunge la soglia fino a {claimDays} giorni dopo la chiusura. **Il saldo inferiore al primo prelievo non è riscattabile e si estingue alla chiusura della beta.**'
      ]],
      ['10. Responsabilità', [
        'Rispondiamo dei danni causati da dolo o colpa grave e di quelli la cui responsabilità non può essere esclusa per legge. Non rispondiamo delle interruzioni indipendenti dalla nostra volontà né della perdita del saldo dovuta alla cancellazione dei dati del browser, alla navigazione privata o al cambio di dispositivo. Nulla in queste condizioni limita i tuoi diritti di consumatore.'
      ]],
      ['11. Durata, recesso e diritto di ripensamento', [
        'Il contratto dura finché usi il servizio e, al massimo, fino alla chiusura della beta. Puoi smettere di usare WatchEarn quando vuoi, senza costi, e cancellare tutti i suoi dati da Impostazioni → Elimina i miei dati. Puoi anche recedere dal contratto entro i 14 giorni di calendario previsti dall’articolo 102 della legge generale spagnola per la tutela dei consumatori e degli utenti, senza indicarne il motivo: basta smettere di usare l’app e, se vuoi, comunicarcelo. Possiamo risolvere il contratto se violi queste condizioni, comunicandoti il motivo.'
      ]],
      ['12. Privacy', [
        'Il trattamento dei tuoi dati è descritto nell’[Informativa sulla privacy](privacy.html).'
      ]],
      ['13. Assistenza e reclami', [
        'Puoi inviarci domande e reclami a {email}. Risponderemo il prima possibile e al più tardi entro un mese. {adr} Puoi anche rivolgerti alle autorità per la tutela dei consumatori del tuo luogo di residenza o chiedere un arbitrato di consumo, volontario per entrambe le parti.'
      ]],
      ['14. Legge applicabile e foro competente', [
        'Queste condizioni sono regolate dalla legge spagnola. Se sei un consumatore, puoi rivolgerti ai tribunali del tuo domicilio e conservi la tutela delle norme imperative del tuo paese di residenza.'
      ]],
      ['15. Nullità parziale', [
        'Se una clausola viene dichiarata nulla, le altre restano in vigore e quella interessata è sostituita dalla disciplina di legge applicabile.'
      ]],
      ['16. App per Android e pubblicità', [
        'WatchEarn è offerto anche come app per Android, con lo stesso servizio e queste stesse condizioni. Nell’app, i riferimenti al browser si intendono fatti all’app: il tuo saldo è salvato al suo interno e va perso se ne cancelli i dati o la disinstalli, e ogni installazione su un dispositivo conta come un profilo (sezione 3).',
        'L’app mostra pubblicità fornita da AppLovin e dai suoi partner di mediazione: **annunci a schermo intero** tra un video e l’altro, al massimo ogni pochi video e senza monete, e **video con ricompensa** facoltativi, che scegli di guardare per ottenere monete extra in Ricompense (fino a {adsPerDay} al giorno) o per raddoppiare un premio del forziere o un bonus di monete. Anche un premio raddoppiato non supera mai {max} monete.',
        'Le monete di un video con ricompensa vengono accreditate solo se AppLovin conferma che l’hai guardato fino alla fine. Se lo chiudi prima o non funziona, non c’è ricompensa e il premio in sospeso resta senza raddoppio. Non garantiamo che ci siano sempre annunci disponibili. Toccare un annuncio è facoltativo e non dà monete; generare visualizzazioni o clic artificiali è vietato (sezione 7). Gli annunci e ciò che pubblicizzano sono responsabilità dei rispettivi inserzionisti.',
        'Gli annunci personalizzati vengono mostrati solo con il tuo consenso, che puoi modificare in Impostazioni; il trattamento dei tuoi dati è spiegato nell’[Informativa sulla privacy](privacy.html).'
      ]]
    ]
  },
  privacy: {
    title: 'Informativa sulla privacy',
    summaryTitle: '**L’essenziale**',
    summary: [
      'Nessuna registrazione né account: i tuoi progressi sono salvati sul tuo dispositivo e non li riceviamo.',
      'Trattiamo dati personali solo se ci scrivi o richiedi un prelievo.',
      'Il sito web non ha pubblicità, analisi né cookie di tracciamento. L’app per Android mostra annunci di AppLovin, che riceve dati dal tuo dispositivo; quelli personalizzati solo con il tuo consenso.',
      'Puoi cancellare i tuoi dati da Impostazioni → Elimina i miei dati ed esercitare i tuoi diritti scrivendoci.'
    ],
    sections: [
      ['1. Titolare del trattamento', [
        '{name}, codice fiscale {taxId}, con sede in {address}{registry}. E-mail di contatto e per la privacy: {email}.'
      ]],
      ['2. Quali dati trattiamo', [
        '**Sul tuo dispositivo.** L’app salva nell’archiviazione locale del tuo browser saldo, movimenti, attività, giochi, video salvati, ordine del feed, tempo di visione, premi in sospeso, richieste di prelievo, impostazioni e lingua, oltre a versione e data delle condizioni accettate, nei record `watchearn-v1`, `watchearn-terms` e `watchearn-language`. Non vengono inviati ai nostri server e non vi abbiamo accesso.',
        '**Prelievi e messaggi.** Se ci invii una richiesta di prelievo o ci scrivi, trattiamo il tuo indirizzo e-mail, il tuo nome, i dati del tuo conto di pagamento (numero Bizum o e-mail PayPal), il tuo paese di residenza, codice, importo e data della richiesta e il contenuto dei messaggi. Se necessario per verificare i requisiti, possiamo chiederti informazioni che provino identità, età e residenza, solo quelle indispensabili.',
        '**Connessione.** Al caricamento dell’app, il fornitore di hosting ({hosting}) riceve il tuo indirizzo IP, la pagina richiesta, data e ora e dati tecnici del browser per servire il sito e proteggerlo. Valuta e lingua sono scelte in base al fuso orario e alle lingue del tuo dispositivo, senza inviarli a nessuno né usare la tua posizione.',
        '**Link.** Se apri un video originale vai su YouTube, che tratta i tuoi dati secondo la propria informativa. Se usi Condividi, titolo e link vengono passati alla funzione di condivisione del tuo dispositivo.'
      ]],
      ['3. Finalità e basi giuridiche', [
        [
          'Fornire il servizio (video, ricompense, impostazioni e accettazione delle condizioni): esecuzione del contratto (art. 6.1.b GDPR).',
          'Gestire, verificare e pagare i prelievi: esecuzione del contratto (art. 6.1.b GDPR).',
          'Prevenire le frodi: legittimo interesse a proteggere il programma e i partecipanti (art. 6.1.f GDPR).',
          'Rispondere a domande, reclami e richieste di esercizio dei diritti: esecuzione del contratto e obbligo legale (art. 6.1.b e 6.1.c GDPR).',
          'Adempiere agli obblighi contabili e fiscali dei pagamenti: obbligo legale (art. 6.1.c GDPR).',
          'Servire il sito in sicurezza: legittimo interesse (art. 6.1.f GDPR).'
        ],
        'Non creiamo profili né prendiamo decisioni basate unicamente su un trattamento automatizzato: ogni prelievo è esaminato da una persona. Nell’app per Android, AppLovin e i suoi partner personalizzano gli annunci solo se dai il tuo consenso (sezione 11).'
      ]],
      ['4. Destinatari', [
        'I fornitori di hosting e di posta elettronica del titolare, come responsabili del trattamento; PayPal o la banca che elabora il pagamento, come titolari autonomi; nell’app per Android, AppLovin e le reti pubblicitarie della sua mediazione (sezione 11); e le autorità quando lo richiede la legge. Non vendiamo i tuoi dati.'
      ]],
      ['5. Trasferimenti internazionali', [
        'Se un fornitore tratta dati fuori dallo Spazio economico europeo, lo farà con le garanzie del capo V del GDPR, come una decisione di adeguatezza o le clausole contrattuali tipo della Commissione europea.'
      ]],
      ['6. Conservazione', [
        [
          'Dati del tuo dispositivo: finché non li cancelli.',
          'Richieste di prelievo e pagamenti: il tempo necessario a gestirli e poi bloccati per i termini di legge (in genere 4 anni in materia fiscale e 6 anni per la contabilità).',
          'Domande e reclami: fino alla loro risoluzione e poi per il periodo di eventuali contestazioni.',
          'Log tecnici: il periodo applicato dal fornitore di hosting.'
        ]
      ]],
      ['7. Sicurezza', [
        'Il sito è servito tramite HTTPS. I dati locali non sono cifrati all’interno dell’app: chi ha accesso al tuo browser potrebbe vederli o modificarli. Nessun sistema garantisce una sicurezza assoluta.'
      ]],
      ['8. Minori', [
        'WatchEarn è solo per maggiori di {age} anni. Se scopriamo che una richiesta proviene da un minore, la rifiuteremo e cancelleremo i suoi dati, salvo quelli che dobbiamo conservare per legge.'
      ]],
      ['9. I tuoi diritti', [
        'Puoi esercitare i diritti di accesso, rettifica, cancellazione, opposizione, limitazione e portabilità scrivendo a {email}. Rispondiamo entro un mese, prorogabile di altri due mesi nei casi complessi. Puoi cancellare tu stesso i dati del tuo dispositivo in Impostazioni → Elimina i miei dati. Puoi anche presentare reclamo all’[Agenzia spagnola per la protezione dei dati (AEPD)](https://www.aepd.es/) o all’autorità per la protezione dei dati del tuo paese.'
      ]],
      ['10. Archiviazione locale e cookie', [
        'WatchEarn non usa cookie. I registri locali sono strettamente necessari per fornire il servizio che richiedi e quindi non richiedono consenso (articolo 22.2 LSSI). Il sito web non ha analisi, pubblicità né tracciamento di terzi. Nell’app per Android, l’SDK di AppLovin salva e legge informazioni sul tuo dispositivo per mostrare annunci (sezione 11).'
      ]],
      ['11. Pubblicità nell’app per Android', [
        '**Chi.** L’app per Android integra l’SDK AppLovin MAX di AppLovin Corporation, che fornisce gli annunci direttamente o tramite le reti pubblicitarie della sua mediazione. AppLovin e tali reti trattano i dati come titolari autonomi, secondo le proprie informative ([informativa sulla privacy di AppLovin](https://www.applovin.com/privacy/)). Non riceviamo questi dati in una forma che ti identifichi, ma solo report aggregati su annunci e ricavi.',
        '**Quali dati.** L’identificativo pubblicitario del tuo dispositivo (a meno che tu non l’abbia eliminato nelle impostazioni di Android), l’indirizzo IP, il modello e il sistema operativo, la lingua, il fuso orario, l’operatore e il tipo di connessione, l’app e gli annunci mostrati e le tue interazioni con essi (visualizzazioni, clic e ricompense).',
        '**Finalità e basi giuridiche.** Mostrare annunci non personalizzati, limitarne la frequenza, misurarli, accreditare le ricompense e prevenire le frodi pubblicitarie: legittimo interesse a finanziare il servizio gratuito e a proteggerlo (art. 6.1.f GDPR). Mostrare annunci personalizzati in base ai tuoi interessi e misurarli: solo con il tuo consenso (art. 6.1.a GDPR).',
        '**La tua scelta.** La prima volta che apri l’app ti chiediamo se accetti gli annunci personalizzati; rifiutare è altrettanto facile e non ti impedisce di usare l’app né di ottenere ricompense. Puoi revocare o dare il consenso quando vuoi in Impostazioni → Annunci personalizzati, e reimpostare o eliminare il tuo identificativo pubblicitario nelle impostazioni di Android. Puoi anche opporti al trattamento basato sul legittimo interesse scrivendoci.',
        '**Trasferimenti e conservazione.** AppLovin e alcune reti trattano dati negli Stati Uniti e in altri paesi al di fuori dello Spazio economico europeo, con le garanzie del capo V del GDPR (come il quadro UE-USA per la protezione dei dati o le clausole contrattuali tipo). Li conservano per i periodi indicati nelle loro informative.'
      ]],
      ['12. Modifiche', [
        'Se modifichiamo questa informativa, aggiorneremo versione e data e ti avviseremo nell’app delle modifiche rilevanti. Se un nuovo trattamento richiede il tuo consenso, te lo chiederemo prima di attivarlo.'
      ]]
    ]
  }
});
