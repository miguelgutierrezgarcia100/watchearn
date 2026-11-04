'use strict';
Legal.add('en', {
  note: 'This translation is provided for your convenience. If it differs from the Spanish version, the Spanish version prevails.',
  pending: 'pending',
  fields: {name: 'name or company name', taxId: 'tax ID', address: 'address', email: 'contact email', hosting: 'hosting provider'},
  registry: ', registered with {registry}',
  adrYes: 'We are members of {adr}.',
  adrNo: 'We are not members of any alternative consumer dispute resolution scheme.',
  version: 'Version {version} · In force since {date}',
  rules: {
    intro: 'Up to {c25} coins, the prize factor falls from {f0} to {f25} of each prize’s base value; up to {c30}, to {f30}; up to {c40}, to {f40}; after that the decline speeds up. From {c45} coins, a second progressive brake reduces every reward until it is divided by 300 at {c50}. No single prize exceeds {max} coins.',
    reference: 'Your current reference · 5 seconds of video',
    coins: '{n} coins',
    head: ['Balance', 'Video · 5 s', 'Largest chest'],
    rounding: 'Amounts are shown rounded, but calculations use six decimal places. A withdrawal is only enabled once the chosen amount has actually been reached.'
  },
  terms: {
    title: 'Terms of use',
    summaryTitle: '**The essentials** (this summary does not replace the full text):',
    summary: [
      'WatchEarn is free and in beta. Only for people aged {age} or over who live in {countries}.',
      '{c1} coins = {rate}. The first withdrawal is {goal} and is reviewed by hand before it is paid.',
      '**Rewards decrease.** Reaching the first withdrawal takes about {range} hours of active use; the last 10% of the goal alone takes more than {last} hours. This is not a source of income.',
      'Your balance is stored only on this device (in the browser or in the app). If you clear its data, uninstall the app or switch devices, it is lost and we cannot recover it.',
      'Bots, cheating or more than one profile per person void the coins and the withdrawals.'
    ],
    sections: [
      ['1. Service provider', [
        'WatchEarn is provided by {name}, tax ID {taxId}, with its address at {address}{registry}. Contact email: {email}. This information is given under Article 10 of Spanish Law 34/2002 on information society services and e-commerce (LSSI).'
      ]],
      ['2. Purpose, beta and acceptance', [
        'These terms govern the use of the WatchEarn web app during its beta: a free service in which you watch short videos, complete tasks and games and collect coins that can be redeemed for money under section 6. No purchase, payment or subscription is required.',
        'The beta is a test version: it may have errors and interruptions and may change under section 9. We do not guarantee that it will always be available.',
        'To accept these terms, press “I have read and accept”. By accepting them you declare that you meet the requirements in section 3. Without accepting them, videos do not play and no rewards are earned. We store the accepted version and the date in your browser.',
        'We do not file an individual copy of your acceptance: these terms are always available on the [Terms of use](terms.html) page, where you can save or print them (Article 27 LSSI). They are offered in several languages; if a translation differs, the Spanish version prevails.'
      ]],
      ['3. Who can take part', [
        'You can use WatchEarn if you are {age} or over, have legal capacity to enter into contracts and live in {countries}. Each person may take part with a single profile, that is, one browser on one device. Balances from different browsers or devices cannot be added together, transferred or redeemed jointly.'
      ]],
      ['4. How coins are earned', [
        '**Watching.** Active playback time counts for the first viewing of each appearance of a video, credited in intervals of 3.5 to 6.5 seconds. Pauses, the app in the background, skipping and automatic repeats do not count.',
        '**Bonuses and games.** Every 2 to 4 videos an optional bonus may appear: chests (three possible prizes, each with a 1 in 3 chance), coin bonus, gift or multiplier (×2 55%, ×3 25%, ×4 12%, ×5 6%, ×10 1.8% and ×20 0.2%). There is also a daily prize, five tasks that refresh every hour and four games with three rounds a day each; the wheel and the scratch card have six equally likely prizes.',
        'Everything is free: there are no bets, purchases or paid entries. Random results are generated on your device with its cryptographic generator. The Android app includes advertising and optional rewarded videos (section 16); the web version has no advertising.'
      ]],
      ['5. Value of coins and decreasing rewards', [
        'Coins are not money, e-money or a deposit: they earn no interest, cannot be transferred or sold and can only be redeemed under section 6. Their redemption value depends on the currency of your country of residence: the first withdrawal, {c50} coins, is worth {goal}, and {c1} coins are worth {rate}. The amount shown in the app is that equivalent value, not a bank balance. Value of the first withdrawal in each currency:',
        '{currencies}',
        '**Rewards decrease as your balance grows:**',
        '{rules}',
        '**Estimated time.** According to our simulations of the current system, reaching the first withdrawal takes about {range} hours of active use, with or without bonuses and games. Watching videos only: half of the goal in under {m25} minutes, 80% in about {h40} hours, 90% in about {h45} hours, 98% in about {h49} hours and the full goal in about {h50} hours. At three hours a day that is more than two years. These are estimates, not a guarantee, and WatchEarn is neither a job nor a source of income.'
      ]],
      ['6. Withdrawals', [
        'You can request a withdrawal of {amounts} once your balance reaches that amount. We pay by PayPal or, in Spain, by Bizum, to an account in your name.',
        'When you confirm the withdrawal in the Wallet, the coins are deducted and your email app opens with the request and its code. Send it to {email} with the details of your payout account and the name of its holder. If it was not sent, you can resend or copy it from the Wallet.',
        'We review every request and may ask for reasonable information to check your identity, age, residence and ownership of the account. We pay valid requests within {payoutDays} calendar days of receiving the complete request. We charge no fees; your payment provider may charge its own.',
        'If a request breaches these terms, we will tell you by email, giving the reason, and you can reply. If the problem can be fixed, we will tell you how, without you losing the amount.',
        'Amounts received may have tax consequences and you are responsible for declaring them. If the law requires us to withhold tax or report to the tax authorities, we will do so and tell you.'
      ]],
      ['7. Fair use and fraud prevention', [
        'You may not obtain coins through bots, scripts, emulators or any automation; tamper with the app’s storage, code, device clock or requests; exploit errors; use several profiles to multiply rewards; or sell or transfer coins or profiles.',
        'If we detect such conduct, we may cancel coins obtained improperly, reject the affected withdrawals and exclude you from the beta, proportionately and telling you the reason where possible. We may also correct amounts credited through an obvious technical error.'
      ]],
      ['8. Content and intellectual property', [
        'The videos belong to their creators and rights holders; WatchEarn shows the creator’s name and a link to the original. You receive no rights over them: you may only watch them inside the app, for personal use. Links to YouTube and other sites lead to third-party services with their own terms.',
        'If you hold rights and believe content is being used without permission, write to {email} identifying the content, your rights and your contact details. We will remove it promptly once we have actual knowledge that its use is unlawful.',
        'The WatchEarn name, design and code belong to the provider, except third-party resources with their own licences, such as the DM Sans and Manrope fonts (SIL Open Font License).'
      ]],
      ['9. Changes and end of the beta', [
        'We may change the service, the rewards or these terms for valid reasons (legal, technical, security, fraud prevention, sustainability or development of the service), giving you at least 15 days’ notice in the app, except for urgent changes required by law or security. To keep using the app you will have to accept the new version; if you do not, you can stop using it and request any withdrawals you were already entitled to. Coins already earned keep their redemption value.',
        'We will announce the end of the beta at least {noticeDays} days in advance, and you can request withdrawals of any balance that reaches the threshold for up to {claimDays} days after it closes. **A balance below the first withdrawal cannot be redeemed and expires when the beta closes.**'
      ]],
      ['10. Liability', [
        'We are liable for damage caused by wilful misconduct or gross negligence and for any damage whose liability cannot be excluded by law. We are not liable for interruptions beyond our control or for the loss of your balance because you cleared the browser’s data, used private browsing or changed device. Nothing in these terms limits your rights as a consumer.'
      ]],
      ['11. Duration, leaving and withdrawal from the contract', [
        'The contract lasts while you use the service and at most until the beta closes. You can stop using WatchEarn whenever you like, at no cost, and delete all its data from Settings → Delete my data. You can also withdraw from the contract within the 14 calendar days granted by Article 102 of the Spanish General Law for the Protection of Consumers and Users, without giving a reason: simply stop using the app and, if you wish, tell us. We may terminate the contract if you breach these terms, telling you the reason.'
      ]],
      ['12. Privacy', [
        'How we process your data is described in the [Privacy policy](privacy.html).'
      ]],
      ['13. Customer service and complaints', [
        'You can send us questions and complaints at {email}. We will reply as soon as possible and within one month at the latest. {adr} You can also contact the consumer authorities where you live or request consumer arbitration, which is voluntary for both parties.'
      ]],
      ['14. Governing law and jurisdiction', [
        'These terms are governed by Spanish law. If you are a consumer, you may go to the courts of your place of residence and you keep the protection of the mandatory rules of your country of residence.'
      ]],
      ['15. Severability', [
        'If any clause is declared void, the others will remain in force and the affected clause will be replaced by the applicable legal rules.'
      ]],
      ['16. Android app and advertising', [
        'WatchEarn is also offered as an Android app, with the same service and these same terms. In the app, references to the browser mean the app: your balance is stored in it and is lost if you clear its data or uninstall it, and each installation on a device counts as one profile (section 3).',
        'The app shows advertising served by AppLovin and its mediation partners: **full-screen ads** between videos, at most every few videos and without coins, and optional **rewarded videos**, which you choose to watch to get extra coins in Rewards (up to {adsPerDay} a day) or to double a chest prize or a coin bonus. A doubled prize never exceeds {max} coins either.',
        'Coins from a rewarded video are only credited if AppLovin confirms that you watched it to the end. If you close it early or it fails, there is no reward and the pending prize is kept without doubling. We do not guarantee that ads will always be available. Tapping an ad is voluntary and earns no coins; generating artificial views or clicks is prohibited (section 7). Ads and what they promote are the responsibility of their advertisers.',
        'Personalised ads are only shown with your consent, which you can change in Settings; how your data is processed is explained in the [Privacy policy](privacy.html).'
      ]]
    ]
  },
  privacy: {
    title: 'Privacy policy',
    summaryTitle: '**The essentials**',
    summary: [
      'There is no registration or account: your progress is stored on your device and we do not receive it.',
      'We only process personal data if you write to us or request a withdrawal.',
      'The website has no advertising, analytics or tracking cookies. The Android app shows AppLovin ads, and AppLovin receives data from your device; personalised ads only with your consent.',
      'You can delete your data from Settings → Delete my data and exercise your rights by writing to us.'
    ],
    sections: [
      ['1. Data controller', [
        '{name}, tax ID {taxId}, with its address at {address}{registry}. Contact and privacy email: {email}.'
      ]],
      ['2. What data we process', [
        '**On your device.** The app stores in your browser’s local storage your balance, transactions, tasks, games, saved videos, feed order, watch time, pending prizes, withdrawal requests, settings and language, and the version and date of the accepted terms, in the records `watchearn-v1`, `watchearn-terms` and `watchearn-language`. They are not sent to our servers and we have no access to them.',
        '**Withdrawals and messages.** If you send us a withdrawal request or write to us, we process your email address, your name, your payout account details (Bizum number or PayPal email), your country of residence, the code, amount and date of the request and the content of the messages. If needed to check the requirements, we may ask for information proving your identity, age and residence, and only what is strictly necessary.',
        '**Connection.** When the app loads, the hosting provider ({hosting}) receives your IP address, the page requested, the date and time and technical browser data to serve the site and protect it. The currency and language are chosen from your device’s time zone and languages, without sending them to anyone or using your location.',
        '**Links.** If you open an original video you go to YouTube, which processes your data under its own policy. If you use Share, the title and link are handed to your device’s sharing feature.'
      ]],
      ['3. Purposes and legal bases', [
        [
          'Providing the service (videos, rewards, settings and acceptance of the terms): performance of the contract (Art. 6(1)(b) GDPR).',
          'Handling, verifying and paying withdrawals: performance of the contract (Art. 6(1)(b) GDPR).',
          'Preventing fraud: legitimate interest in protecting the programme and its participants (Art. 6(1)(f) GDPR).',
          'Answering questions, complaints and requests to exercise rights: performance of the contract and legal obligation (Art. 6(1)(b) and 6(1)(c) GDPR).',
          'Meeting accounting and tax obligations for payments: legal obligation (Art. 6(1)(c) GDPR).',
          'Serving the site securely: legitimate interest (Art. 6(1)(f) GDPR).'
        ],
        'We do not build profiles or take solely automated decisions: a person reviews every withdrawal. In the Android app, AppLovin and its partners only personalise ads if you consent (section 11).'
      ]],
      ['4. Recipients', [
        'The controller’s hosting and email providers, as processors; PayPal or the bank processing the payment, as independent controllers; in the Android app, AppLovin and the ad networks in its mediation (section 11); and the authorities when the law requires it. We do not sell your data.'
      ]],
      ['5. International transfers', [
        'If a provider processes data outside the European Economic Area, it will do so with the safeguards of Chapter V of the GDPR, such as an adequacy decision or the European Commission’s standard contractual clauses.'
      ]],
      ['6. Retention', [
        [
          'Data on your device: until you delete it.',
          'Withdrawal requests and payments: as long as needed to handle them and then blocked for the legal periods (generally 4 years for tax and 6 years for accounting).',
          'Questions and complaints: until resolved and then for the period in which claims may be brought.',
          'Technical logs: the period applied by the hosting provider.'
        ]
      ]],
      ['7. Security', [
        'The site is served over HTTPS. Local data is not encrypted inside the app: anyone with access to your browser could see or change it. No system can guarantee absolute security.'
      ]],
      ['8. Minors', [
        'WatchEarn is only for people aged {age} or over. If we learn that a request comes from a minor, we will reject it and delete their data, except what we must keep by law.'
      ]],
      ['9. Your rights', [
        'You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to {email}. We reply within one month, extendable by two more months in complex cases. You can delete the data on your device yourself in Settings → Delete my data. You can also complain to the [Spanish Data Protection Agency (AEPD)](https://www.aepd.es/) or to the data protection authority of your country.'
      ]],
      ['10. Local storage and cookies', [
        'WatchEarn does not use cookies. The local records are strictly necessary to provide the service you request, so they do not require consent (article 22.2 LSSI). The website has no analytics, advertising or third-party tracking. In the Android app, the AppLovin SDK stores and reads information on your device to show ads (section 11).'
      ]],
      ['11. Advertising in the Android app', [
        '**Who.** The Android app includes the AppLovin MAX SDK from AppLovin Corporation, which serves ads directly or through the ad networks in its mediation. AppLovin and those networks process the data as independent controllers under their own policies ([AppLovin privacy policy](https://www.applovin.com/privacy/)). We do not receive that data in a form that identifies you; only aggregated reports on ads and revenue.',
        '**What data.** Your device’s advertising ID (unless you have deleted it in the Android settings), IP address, model and operating system, language, time zone, carrier and connection type, the app and the ads shown, and your interactions with them (views, clicks and rewards).',
        '**Purposes and legal bases.** Showing non-personalised ads, limiting how often they appear, measuring them, crediting rewards and preventing ad fraud: legitimate interest in funding the free service and protecting it (art. 6.1.f GDPR). Showing ads personalised to your interests and measuring them: only with your consent (art. 6.1.a GDPR).',
        '**Your choice.** The first time you open the app we ask whether you accept personalised ads; declining is just as easy and does not stop you from using the app or earning rewards. You can withdraw or give consent at any time in Settings → Personalised ads, and reset or delete your advertising ID in the Android settings. You can also object to processing based on legitimate interest by writing to us.',
        '**Transfers and retention.** AppLovin and some networks process data in the United States and other countries outside the European Economic Area, with the safeguards of Chapter V of the GDPR (such as the EU-US Data Privacy Framework or the standard contractual clauses). They keep it for the periods set out in their policies.'
      ]],
      ['12. Changes', [
        'If we change this policy, we will update the version and date and tell you about relevant changes in the app. If new processing requires your consent, we will ask for it before starting it.'
      ]]
    ]
  }
});
