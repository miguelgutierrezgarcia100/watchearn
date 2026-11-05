'use strict';
Legal.add('fr', {
  note: 'Cette traduction est fournie pour votre commodité. En cas de divergence avec la version espagnole, la version espagnole prévaut.',
  pending: 'à compléter',
  fields: {name: 'nom ou raison sociale', taxId: 'numéro fiscal', address: 'adresse', email: 'e-mail de contact', hosting: 'hébergeur'},
  registry: ', immatriculée auprès de {registry}',
  adrYes: 'Nous adhérons à {adr}.',
  adrNo: 'Nous n’adhérons à aucun dispositif de règlement extrajudiciaire des litiges de consommation.',
  version: 'Version {version} · Dernière mise à jour : {date}',
  rules: {
    intro: 'Jusqu’à {c25} pièces, le facteur des gains passe de {f0} à {f25} de leur valeur de base ; jusqu’à {c30}, à {f30} ; jusqu’à {c40}, à {f40} ; ensuite, la baisse s’accélère. À partir de {c45} pièces, un second frein progressif réduit toutes les récompenses jusqu’à les diviser par 300 à {c50}. Aucun gain individuel ne dépasse {max} pièces.',
    reference: 'Votre référence actuelle · 5 secondes de vidéo',
    coins: '{n} pièces',
    head: ['Solde', 'Vidéo · 5 s', 'Coffre maximal'],
    rounding: 'Les montants sont affichés arrondis, mais les calculs utilisent six décimales. Le retrait n’est possible qu’une fois le montant choisi réellement atteint.'
  },
  terms: {
    title: 'Conditions d’utilisation',
    summaryTitle: '**L’essentiel** (ce résumé ne remplace pas le texte complet) :',
    summary: [
      'WatchEarn est gratuit. Réservé aux personnes de {age} ans ou plus résidant dans l’un de ces pays : {countries}.',
      '{c1} pièces = {rate}. Le premier retrait est de {goal} et il est vérifié manuellement avant d’être payé.',
      '**Les récompenses diminuent.** Atteindre le premier retrait demande environ {range} heures d’utilisation active ; les 10 % restants de l’objectif, plus de {last} heures à eux seuls. Ce n’est pas une source de revenus.',
      'Votre solde est stocké uniquement sur cet appareil (dans le navigateur ou dans l’app). Si vous effacez ses données, désinstallez l’app ou changez d’appareil, il est perdu et nous ne pouvons pas le récupérer.',
      'Les bots, la triche ou plusieurs profils par personne annulent les pièces et les retraits.'
    ],
    sections: [
      ['1. Prestataire du service', [
        'WatchEarn est un service fourni par {name}, numéro fiscal {taxId}, domicilié à {address}{registry}. E-mail de contact : {email}. Informations fournies conformément à l’article 10 de la loi espagnole 34/2002 sur les services de la société de l’information et le commerce électronique (LSSI).'
      ]],
      ['2. Objet et acceptation', [
        'Les présentes conditions régissent l’utilisation de WatchEarn : un service gratuit dans lequel vous regardez de courtes vidéos, réalisez des missions et des jeux et accumulez des pièces échangeables contre de l’argent selon l’article 6. Aucun achat, paiement ni abonnement n’est nécessaire.',
        'Le service peut comporter des erreurs et des interruptions et évoluer selon l’article 9. Nous ne garantissons pas sa disponibilité continue.',
        'Pour accepter ces conditions, appuyez sur « J’ai lu et j’accepte ». En les acceptant, vous déclarez remplir les conditions de l’article 3. Sans acceptation, les vidéos ne sont pas lues et aucune récompense n’est obtenue. Nous enregistrons dans votre navigateur la version acceptée et la date.',
        'Nous n’archivons pas de copie individuelle de votre acceptation : ces conditions sont toujours disponibles sur la page [Conditions d’utilisation](terms.html), où vous pouvez les enregistrer ou les imprimer (article 27 LSSI). Elles sont proposées en plusieurs langues ; en cas de divergence d’une traduction, la version espagnole prévaut.'
      ]],
      ['3. Qui peut participer', [
        'Vous pouvez utiliser WatchEarn si vous avez {age} ans ou plus, la capacité de contracter et que vous résidez dans l’un de ces pays : {countries}. Chaque personne peut participer avec un seul profil, c’est-à-dire un navigateur sur un appareil. Les soldes de différents navigateurs ou appareils ne peuvent être ni additionnés, ni transférés, ni échangés ensemble.'
      ]],
      ['4. Comment obtenir des pièces', [
        '**Visionnage.** Compte le temps de lecture active du premier visionnage de chaque apparition d’une vidéo, crédité par intervalles de 3,5 à 6,5 secondes. Les pauses, l’application en arrière-plan, les sauts et les répétitions automatiques ne comptent pas.',
        '**Bonus et jeux.** Toutes les 2 à 4 vidéos, un bonus facultatif peut apparaître : coffres (trois gains possibles, chacun avec une probabilité de 1 sur 3), bonus de pièces, cadeau ou multiplicateur (×2 55 %, ×3 25 %, ×4 12 %, ×5 6 %, ×10 1,8 % et ×20 0,2 %). Il y a aussi un gain quotidien, cinq missions renouvelées toutes les heures et quatre jeux avec trois parties par jour chacun ; la roue et la carte à gratter ont six gains équiprobables.',
        'Tout est gratuit : il n’y a ni paris, ni achats, ni participation payante. Les résultats aléatoires sont générés sur votre appareil par son générateur cryptographique. L’app Android comprend de la publicité et des vidéos récompensées facultatives (article 16) ; la version web n’a pas de publicité.'
      ]],
      ['5. Valeur des pièces et récompenses décroissantes', [
        'Les pièces ne sont ni de l’argent, ni de la monnaie électronique, ni un dépôt : elles ne produisent pas d’intérêts, ne peuvent être ni transférées ni vendues et ne s’échangent que selon l’article 6. Leur valeur d’échange dépend de la monnaie de votre pays de résidence : le premier retrait, {c50} pièces, équivaut à {goal}, et {c1} pièces à {rate}. Le montant affiché dans l’application est cette équivalence, pas un solde bancaire. Valeur du premier retrait dans chaque monnaie :',
        '{currencies}',
        '**Les récompenses diminuent à mesure que votre solde augmente :**',
        '{rules}',
        '**Temps estimé.** Selon nos simulations du système actuel, atteindre le premier retrait demande environ {range} heures d’utilisation active, avec ou sans bonus et jeux. En regardant seulement des vidéos : la moitié de l’objectif en moins de {m25} minutes, 80 % en environ {h40} heures, 90 % en environ {h45} heures, 98 % en environ {h49} heures et l’objectif complet en environ {h50} heures. À trois heures par jour, cela fait plus de deux ans. Ce sont des estimations, pas une garantie, et WatchEarn n’est ni un emploi ni une source de revenus.'
      ]],
      ['6. Retraits', [
        'Vous pouvez demander un retrait de {amounts} lorsque votre solde atteint ce montant. Nous payons par PayPal ou, en Espagne, par Bizum, sur un compte à votre nom.',
        'Lorsque vous confirmez le retrait dans le Portefeuille, les pièces sont déduites et votre messagerie s’ouvre avec la demande et son code. Envoyez-la à {email} avec les coordonnées de votre compte de paiement et le nom de son titulaire. Si elle n’a pas été envoyée, vous pouvez la renvoyer ou la copier depuis le Portefeuille.',
        'Nous vérifions chaque demande et pouvons vous demander des informations raisonnables pour contrôler votre identité, votre âge, votre résidence et la titularité du compte. Nous payons les demandes valides dans un délai maximal de {payoutDays} jours calendaires après réception de la demande complète. Nous ne prélevons aucun frais ; votre prestataire de paiement peut appliquer les siens.',
        'Si une demande ne respecte pas ces conditions, nous vous en informerons par e-mail en indiquant le motif, et vous pourrez répondre. Si le problème peut être corrigé, nous vous expliquerons comment, sans que vous perdiez le montant.',
        'Les sommes reçues peuvent avoir des conséquences fiscales et vous êtes responsable de leur déclaration. Si la loi nous oblige à effectuer une retenue ou à informer l’administration fiscale, nous le ferons et vous en informerons.'
      ]],
      ['7. Bon usage et prévention de la fraude', [
        'Il est interdit d’obtenir des pièces au moyen de bots, de scripts, d’émulateurs ou de toute automatisation ; de manipuler le stockage, le code, l’horloge de l’appareil ou les requêtes de l’application ; d’exploiter des erreurs ; d’utiliser plusieurs profils pour multiplier les récompenses ; ou de vendre ou céder des pièces ou des profils.',
        'Si nous détectons de tels comportements, nous pourrons annuler les pièces obtenues indûment, refuser les retraits concernés et vous exclure du service, de manière proportionnée et en vous indiquant le motif lorsque c’est possible. Nous pouvons aussi corriger les montants crédités à la suite d’une erreur technique manifeste.'
      ]],
      ['8. Contenus et propriété intellectuelle', [
        'Les vidéos appartiennent à leurs créateurs et aux titulaires de droits ; WatchEarn affiche le nom du créateur et un lien vers l’original. Vous ne recevez aucun droit sur elles : vous pouvez seulement les regarder dans l’application, pour un usage personnel. Les liens vers YouTube et d’autres sites mènent à des services tiers soumis à leurs propres conditions.',
        'Si vous êtes titulaire de droits et estimez qu’un contenu est utilisé sans autorisation, écrivez-nous à {email} en indiquant le contenu, vos droits et vos coordonnées. Nous le retirerons promptement dès que nous aurons effectivement connaissance de son caractère illicite.',
        'Le nom, le design et le code de WatchEarn appartiennent au prestataire, à l’exception des ressources tierces sous leur propre licence, comme les polices DM Sans et Manrope (SIL Open Font License).'
      ]],
      ['9. Modifications et fermeture du service', [
        'Nous pouvons modifier le service, les récompenses ou ces conditions pour des motifs valables (juridiques, techniques, de sécurité, de prévention de la fraude, de viabilité ou d’évolution du service), en vous prévenant dans l’application au moins 15 jours à l’avance, sauf modifications urgentes imposées par la loi ou la sécurité. Pour continuer à utiliser l’application, vous devrez accepter la nouvelle version ; sinon, vous pouvez cesser de l’utiliser et demander les retraits auxquels vous aviez déjà droit. Les pièces déjà obtenues conservent leur valeur d’échange.',
        'Si nous fermons le service, nous l’annoncerons au moins {noticeDays} jours à l’avance, et vous pourrez demander le retrait de tout solde atteignant le seuil jusqu’à {claimDays} jours après la fermeture. **Le solde inférieur au premier retrait n’est pas échangeable et s’éteint à la fermeture du service.**'
      ]],
      ['10. Responsabilité', [
        'Nous répondons des dommages causés par dol ou faute lourde et de ceux dont la responsabilité ne peut être exclue par la loi. Nous ne répondons pas des interruptions indépendantes de notre volonté ni de la perte du solde due à l’effacement des données du navigateur, à la navigation privée ou à un changement d’appareil. Rien dans ces conditions ne limite vos droits de consommateur.'
      ]],
      ['11. Durée, départ et rétractation', [
        'Le contrat dure tant que vous utilisez le service et, au plus tard, jusqu’à la fermeture du service. Vous pouvez cesser d’utiliser WatchEarn à tout moment, sans frais, et effacer toutes ses données depuis Réglages → Supprimer mes données. Vous pouvez aussi vous rétracter du contrat dans les 14 jours calendaires prévus par l’article 102 de la loi générale espagnole de défense des consommateurs et usagers, sans motif : il suffit de cesser d’utiliser l’application et, si vous le souhaitez, de nous en informer. Nous pouvons résilier le contrat si vous ne respectez pas ces conditions, en vous indiquant le motif.'
      ]],
      ['12. Confidentialité', [
        'Le traitement de vos données est décrit dans la [Politique de confidentialité](privacy.html).'
      ]],
      ['13. Service client et réclamations', [
        'Vous pouvez nous envoyer vos questions et réclamations à {email}. Nous répondrons dès que possible et au plus tard dans un délai d’un mois. {adr} Vous pouvez aussi vous adresser aux autorités de protection des consommateurs de votre lieu de résidence ou demander un arbitrage de consommation, volontaire pour les deux parties.'
      ]],
      ['14. Droit applicable et juridiction', [
        'Les présentes conditions sont régies par le droit espagnol. Si vous êtes consommateur, vous pouvez saisir les tribunaux de votre domicile et vous conservez la protection des règles impératives de votre pays de résidence.'
      ]],
      ['15. Nullité partielle', [
        'Si une clause est déclarée nulle, les autres restent en vigueur et la clause concernée est remplacée par la réglementation légale applicable.'
      ]],
      ['16. App Android et publicité', [
        'WatchEarn est aussi proposé sous forme d’app Android, avec le même service et ces mêmes conditions. Dans l’app, les références au navigateur s’entendent comme faites à l’app : votre solde y est stocké et il est perdu si vous effacez ses données ou la désinstallez, et chaque installation sur un appareil compte comme un profil (article 3).',
        'L’app affiche de la publicité diffusée par AppLovin et ses partenaires de médiation : des **publicités plein écran** entre les vidéos, au plus toutes les quelques vidéos et sans pièces, et des **vidéos récompensées** facultatives, que vous choisissez de regarder pour obtenir des pièces supplémentaires dans Récompenses (jusqu’à {adsPerDay} par jour) ou pour doubler un prix de coffre ou un bonus de pièces. Un prix doublé ne dépasse pas non plus {max} pièces.',
        'Les pièces d’une vidéo récompensée ne sont créditées que si AppLovin confirme que vous l’avez regardée jusqu’au bout. Si vous la fermez avant ou si elle échoue, il n’y a pas de récompense et le prix en attente est conservé sans être doublé. Nous ne garantissons pas qu’il y ait toujours des publicités disponibles. Toucher une publicité est facultatif et ne rapporte pas de pièces ; générer des vues ou des clics artificiels est interdit (article 7). Les publicités et ce qu’elles promeuvent relèvent de la responsabilité de leurs annonceurs.',
        'Les publicités personnalisées ne sont affichées qu’avec votre consentement, que vous pouvez modifier dans Réglages ; le traitement de vos données est expliqué dans la [Politique de confidentialité](privacy.html).'
      ]]
    ]
  },
  privacy: {
    title: 'Politique de confidentialité',
    summaryTitle: '**L’essentiel**',
    intro: 'WatchEarn (« nous ») s’engage à protéger votre vie privée. La présente politique explique quelles informations nous collectons, comment nous les utilisons et comment nous les protégeons lorsque vous utilisez WatchEarn, y compris les services tiers intégrés à l’application.',
    summary: [
      'Pas d’inscription ni de compte : votre progression est stockée sur votre appareil et nous ne la recevons pas.',
      'Nous ne traitons des données personnelles que si vous nous écrivez ou demandez un retrait.',
      'Le site web n’a ni publicité, ni mesure d’audience, ni cookies de suivi. L’app Android affiche des publicités d’AppLovin, qui reçoit des données de votre appareil ; les publicités personnalisées, uniquement avec votre consentement.',
      'Vous pouvez effacer vos données depuis Réglages → Supprimer mes données et exercer vos droits en nous écrivant.'
    ],
    sections: [
      ['1. Informations que nous collectons', [
        '**1.1 Données personnelles.** Si vous nous envoyez une demande de retrait ou nous écrivez, nous traitons votre adresse e-mail, votre nom, les coordonnées de votre compte de paiement (numéro Bizum ou e-mail PayPal), votre pays de résidence, le code, le montant et la date de la demande et le contenu des messages. Si cela est nécessaire pour vérifier les conditions, nous pouvons vous demander des informations prouvant votre identité, votre âge et votre résidence, uniquement l’indispensable.',
        '**1.2 Données d’utilisation.** L’application enregistre dans le stockage local de votre navigateur votre solde, vos mouvements, missions, jeux, vidéos enregistrées, l’ordre du fil, le temps de visionnage, les gains en attente, les demandes de retrait, vos réglages et votre langue, ainsi que la version et la date des conditions acceptées, dans les enregistrements `watchearn-v1`, `watchearn-terms` et `watchearn-language`. Ils ne sont pas envoyés à nos serveurs et nous n’y avons pas accès.',
        '**1.3 Données de l’appareil.** Dans l’app Android, le SDK publicitaire d’AppLovin collecte des données techniques de votre appareil, comme l’identifiant publicitaire, l’adresse IP, le modèle et le système d’exploitation (article 3). Si vous visitez le site web de WatchEarn, l’hébergeur ({hosting}) reçoit votre adresse IP, la page demandée, la date et l’heure et des données techniques du navigateur pour le servir et le protéger. La devise et la langue sont choisies d’après le fuseau horaire et les langues de votre appareil, sans les envoyer à quiconque ni utiliser votre position.',
        '**1.4 Liens.** Si vous ouvrez une vidéo originale, vous accédez à YouTube, qui traite vos données selon sa propre politique. Si vous utilisez Partager, le titre et le lien sont transmis à la fonction de partage de votre appareil.',
        'Nous ne collectons pas de données sensibles, comme l’origine ethnique, les convictions religieuses, la santé ou les données biométriques, et nous vous demandons de ne pas nous en envoyer.',
        '**Stockage local et cookies.** WatchEarn n’utilise pas de cookies. Les enregistrements locaux sont strictement nécessaires pour fournir le service que vous demandez et ne requièrent donc pas de consentement (article 22.2 de la LSSI). Le site web n’a ni mesure d’audience, ni publicité, ni suivi par des tiers. Dans l’app Android, le SDK d’AppLovin enregistre et lit des informations sur votre appareil pour afficher des publicités (article 3).'
      ]],
      ['2. Comment nous utilisons vos informations', [
        [
          'Fournir le service (vidéos, récompenses, réglages et acceptation des conditions) : exécution du contrat (art. 6.1.b RGPD).',
          'Traiter, vérifier et payer les retraits : exécution du contrat (art. 6.1.b RGPD).',
          'Prévenir la fraude : intérêt légitime à protéger le programme et ses participants (art. 6.1.f RGPD).',
          'Répondre aux questions, réclamations et demandes d’exercice de droits : exécution du contrat et obligation légale (art. 6.1.b et 6.1.c RGPD).',
          'Respecter les obligations comptables et fiscales liées aux paiements : obligation légale (art. 6.1.c RGPD).',
          'Servir le site en toute sécurité : intérêt légitime (art. 6.1.f RGPD).'
        ],
        'Nous n’établissons pas de profils et ne prenons pas de décisions exclusivement automatisées : chaque retrait est examiné par une personne. Dans l’app Android, AppLovin et ses partenaires ne personnalisent les publicités que si vous y consentez (article 3).'
      ]],
      ['3. Services et SDK tiers', [
        '**Qui.** L’app Android intègre le SDK AppLovin MAX d’AppLovin Corporation, qui diffuse les publicités directement ou via les réseaux publicitaires de sa médiation. AppLovin et ces réseaux traitent les données en tant que responsables indépendants, selon leurs propres politiques ([politique de confidentialité d’AppLovin](https://legal.applovin.com/privacy/)). Nous ne recevons pas ces données sous une forme qui vous identifie ; seulement des rapports agrégés sur les publicités et les revenus.',
        '**Quelles données.** L’identifiant publicitaire de votre appareil (sauf si vous l’avez supprimé dans les paramètres d’Android), l’adresse IP, le modèle et le système d’exploitation, la langue, le fuseau horaire, l’opérateur et le type de connexion, l’app et les publicités affichées, ainsi que vos interactions avec elles (vues, clics et récompenses).',
        '**Finalités et bases juridiques.** Afficher des publicités non personnalisées, limiter leur fréquence, les mesurer, créditer les récompenses et prévenir la fraude publicitaire : intérêt légitime à financer le service gratuit et à le protéger (art. 6.1.f RGPD). Afficher des publicités personnalisées selon vos centres d’intérêt et les mesurer : uniquement avec votre consentement (art. 6.1.a RGPD).',
        '**Votre choix.** La première fois que vous ouvrez l’app, nous vous demandons si vous acceptez les publicités personnalisées ; refuser est tout aussi simple et ne vous empêche ni d’utiliser l’app ni d’obtenir des récompenses. Vous pouvez retirer ou donner votre consentement à tout moment dans Réglages → Publicités personnalisées, et réinitialiser ou supprimer votre identifiant publicitaire dans les paramètres d’Android. Vous pouvez aussi vous opposer au traitement fondé sur l’intérêt légitime en nous écrivant.',
        '**Transferts et conservation.** AppLovin et certains réseaux traitent des données aux États-Unis et dans d’autres pays hors de l’Espace économique européen, avec les garanties du chapitre V du RGPD (comme le cadre de protection des données UE–États-Unis ou les clauses contractuelles types). Ils les conservent pendant les durées indiquées dans leurs politiques.',
        'Nous vous recommandons de lire les politiques de confidentialité de ces tiers :',
        [
          'AppLovin (publicité, SDK AppLovin MAX) : [politique de confidentialité](https://legal.applovin.com/privacy/)',
          'Google (Google Play, où vous téléchargez l’app, et l’identifiant publicitaire Android ; YouTube, si vous ouvrez une vidéo originale) : [règles de confidentialité](https://policies.google.com/privacy)',
          'GitHub (hébergement du site web) : [déclaration de confidentialité](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement)'
        ],
        'Nous n’intégrons aucun autre SDK d’analyse, d’attribution ou de publicité. Si nous en ajoutons un, nous l’inclurons dans cette liste avant de l’activer.'
      ]],
      ['4. Avec qui nous partageons vos informations', [
        'Les fournisseurs d’hébergement et de messagerie du responsable, en tant que sous-traitants ; PayPal ou la banque qui traite le paiement, en tant que responsables indépendants ; dans l’app Android, AppLovin et les réseaux publicitaires de sa médiation (article 3) ; et les autorités lorsque la loi l’exige. Nous ne vendons pas vos données.',
        'Nous pouvons aussi communiquer des données lorsque la loi, une décision de justice ou une autorité l’exige ; pour protéger nos droits, les utilisateurs ou des tiers contre la fraude ou des activités illicites ; et, si le service est cédé à un autre titulaire, au nouveau titulaire, qui devra respecter la présente politique. Nous vous en informerons avant cette cession.',
        '**Transferts internationaux.** Si un prestataire traite des données hors de l’Espace économique européen, il le fera avec les garanties du chapitre V du RGPD, comme une décision d’adéquation ou les clauses contractuelles types de la Commission européenne.'
      ]],
      ['5. Sécurité et conservation', [
        'Les pages web de WatchEarn sont servies en HTTPS. Les e-mails contenant des demandes de retrait et des données de paiement sont conservés dans une boîte aux lettres protégée, à laquelle seul le titulaire a accès, et ne servent qu’à traiter les paiements. Les données de l’app ne sont pas chiffrées sur votre appareil : toute personne y ayant accès pourrait les voir ou les modifier. Aucun système ne garantit une sécurité absolue.',
        '**Conservation.** Nous conservons chaque donnée uniquement le temps nécessaire :',
        [
          'Données de votre appareil : jusqu’à ce que vous les effaciez.',
          'Demandes de retrait et paiements : le temps nécessaire à leur traitement, puis bloqués pendant les délais légaux (en général 4 ans en matière fiscale et 6 ans pour la comptabilité).',
          'Questions et réclamations : jusqu’à leur résolution, puis pendant le délai des éventuels recours.',
          'Journaux techniques : la durée appliquée par l’hébergeur.'
        ]
      ]],
      ['6. Mineurs', [
        'WatchEarn est réservé aux personnes de {age} ans ou plus. Si nous apprenons qu’une demande provient d’un mineur, nous la refuserons et supprimerons ses données, sauf celles que la loi nous oblige à conserver.'
      ]],
      ['7. Vos droits et vos choix', [
        'Vous pouvez utiliser WatchEarn sans nous fournir aucune donnée personnelle : nous n’en avons besoin que si vous nous écrivez ou demandez un retrait.',
        'Vous pouvez exercer vos droits d’accès, de rectification, d’effacement, d’opposition, de limitation et de portabilité en écrivant à {email}. Nous répondons dans un délai d’un mois, prolongeable de deux mois dans les cas complexes. Vous pouvez effacer vous-même les données de votre appareil dans Réglages → Supprimer mes données. Vous pouvez aussi saisir l’[Agence espagnole de protection des données (AEPD)](https://www.aepd.es/) ou l’autorité de protection des données de votre pays.'
      ]],
      ['8. Modifications', [
        'Si nous modifions cette politique, nous mettrons à jour la version et la date et vous informerons des changements importants dans l’application. Si un nouveau traitement nécessite votre consentement, nous vous le demanderons avant de l’activer.'
      ]],
      ['9. Contact', [
        '**Responsable du traitement.** {name}, numéro fiscal {taxId}, domicilié à {address}{registry}. E-mail de contact et de confidentialité : {email}.',
        'Pour toute question, préoccupation ou demande concernant la présente politique ou le traitement de vos données, écrivez-nous à {email}.'
      ]]
    ]
  }
});
