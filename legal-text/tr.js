'use strict';
Legal.add('tr', {
  note: 'Bu çeviri kolaylık amacıyla sunulmuştur. İspanyolca sürümle farklılık olursa İspanyolca sürüm geçerlidir.',
  pending: 'eksik',
  fields: {name: 'ad veya şirket unvanı', taxId: 'vergi numarası', address: 'adres', email: 'iletişim e-postası', hosting: 'barındırma sağlayıcısı'},
  registry: ', {registry} nezdinde kayıtlı',
  adrYes: '{adr} sistemine üyeyiz.',
  adrNo: 'Herhangi bir alternatif tüketici uyuşmazlığı çözüm sistemine üye değiliz.',
  allCountries: 'PayPal ile ödeme yapabildiğimiz ve katılımın yasal olduğu tüm ülkeler ({excluded} hariç)',
  version: 'Sürüm {version} · Son güncelleme: {date}',
  rules: {
    intro: '{c25} jetona kadar ödül katsayısı, ödüllerin temel değerinin {f0} oranından {f25} oranına iner; {c30} jetona kadar {f30}, {c40} jetona kadar {f40} olur; sonra düşüş hızlanır. {c45} jetondan itibaren ikinci, giderek artan bir fren tüm ödülleri azaltır ve {c50} jetona ulaşıldığında 300’e böler. Hiçbir tekil ödül {max} jetonu aşmaz.',
    reference: 'Şu anki referansın · 5 saniyelik video',
    coins: '{n} jeton',
    head: ['Bakiye', 'Video · 5 sn', 'En büyük sandık'],
    rounding: 'Tutarlar yuvarlanarak gösterilir, ancak hesaplamalar altı ondalık basamakla yapılır. Para çekme yalnızca seçilen tutara gerçekten ulaşıldığında açılır.'
  },
  terms: {
    title: 'Kullanım koşulları',
    summaryTitle: '**Özet** (bu özet tam metnin yerine geçmez):',
    summary: [
      'WatchEarn ücretsizdir. Yalnızca {age} yaş ve üzeri, şu ülkelerde yaşayan kişiler içindir: {countries}.',
      '{c1} jeton = {rate}. İlk çekim {goal} tutarındadır ve ödenmeden önce elle incelenir.',
      '**Ödüller azalır.** İlk çekime ulaşmak yaklaşık {range} saat aktif kullanım gerektirir; hedefin son %10’u tek başına {last} saatten fazla sürer. Bu bir gelir kaynağı değildir.',
      'Bakiyen yalnızca bu cihazda (tarayıcıda veya uygulamada) saklanır. Verilerini silersen, uygulamayı kaldırırsan ya da cihaz değiştirirsen kaybolur ve geri getiremeyiz.',
      'Bot, hile veya kişi başına birden fazla profil jetonları ve çekimleri geçersiz kılar.'
    ],
    sections: [
      ['1. Hizmet sağlayıcı', [
        'WatchEarn hizmetini {name} sunar; vergi numarası {taxId}, adresi {address}{registry}. İletişim e-postası: {email}. Bu bilgiler, bilgi toplumu hizmetleri ve elektronik ticarete ilişkin İspanya 34/2002 sayılı Kanunu’nun (LSSI) 10. maddesi uyarınca verilmektedir.'
      ]],
      ['2. Konu ve kabul', [
        'Bu koşullar, WatchEarn’ün kullanımını düzenler: kısa videolar izlediğin, görev ve oyunları tamamladığın ve 6. bölüme göre paraya çevrilebilen jetonlar biriktirdiğin ücretsiz bir hizmettir. Satın alma, ödeme veya abonelik gerekmez.',
        'Hizmette hata ve kesintiler olabilir ve 9. bölüme göre değişebilir. Sürekli erişilebilir olacağını garanti etmeyiz.',
        'Bu koşulları kabul etmek için «Okudum, kabul ediyorum» düğmesine bas. Kabul ederek 3. bölümdeki şartları karşıladığını beyan edersin. Kabul etmeden videolar oynatılmaz ve ödül kazanılmaz. Kabul edilen sürümü ve tarihi tarayıcında saklarız.',
        'Kabulünün ayrı bir kopyasını arşivlemeyiz: bu koşullar, kaydedebileceğin veya yazdırabileceğin [Kullanım koşulları](terms.html) sayfasında her zaman mevcuttur (LSSI madde 27). Birkaç dilde sunulur; bir çeviri farklıysa İspanyolca sürüm geçerlidir.'
      ]],
      ['3. Kimler katılabilir', [
        'WatchEarn’ü {age} yaşında veya daha büyüksen, sözleşme yapma ehliyetin varsa ve şu ülkelerden birinde yaşıyorsan kullanabilirsin: {countries}. Her kişi yalnızca tek bir profille, yani tek cihazdaki tek tarayıcıyla katılabilir. Farklı tarayıcı veya cihazlardaki bakiyeler toplanamaz, aktarılamaz ve birlikte bozdurulamaz.'
      ]],
      ['4. Jeton nasıl kazanılır', [
        '**İzleme.** Bir videonun her görünümünde ilk izlemenin aktif oynatma süresi sayılır ve 3,5 ile 6,5 saniyelik aralıklarla eklenir. Duraklatmalar, arka planda çalışan uygulama, atlamalar ve otomatik tekrarlar sayılmaz.',
        '**Bonuslar ve oyunlar.** Her 2 ila 4 videoda isteğe bağlı bir bonus çıkabilir: sandıklar (her birinin olasılığı 3’te 1 olan üç olası ödül), jeton bonusu, hediye veya çarpan (×2 %55, ×3 %25, ×4 %12, ×5 %6, ×10 %1,8 ve ×20 %0,2). Ayrıca günlük bir ödül, her saat yenilenen beş görev ve her biri günde üç turluk dört oyun vardır; çark ve kazı kazanda eşit olasılıklı altı ödül bulunur.',
        'Her şey ücretsizdir: bahis, satın alma ya da ücretli katılım yoktur. Rastgele sonuçlar cihazında, cihazın kriptografik üreteciyle oluşturulur. Android uygulaması reklamlar ve isteğe bağlı ödüllü videolar içerir (16. bölüm); web sürümünde reklam yoktur.'
      ]],
      ['5. Jetonların değeri ve azalan ödüller', [
        'Jetonlar para, elektronik para veya mevduat değildir: faiz getirmez, aktarılamaz veya satılamaz ve yalnızca 6. bölüme göre bozdurulur. Bozdurma değerleri ikamet ettiğin ülkenin para birimine bağlıdır: ilk çekim, yani {c50} jeton, {goal} değerindedir; {c1} jeton ise {rate} eder. Uygulamada gösterilen tutar bu karşılıktır, banka bakiyesi değildir. Her para biriminde ilk çekimin değeri:',
        '{currencies}',
        '**Bakiyen arttıkça ödüller azalır:**',
        '{rules}',
        '**Tahmini süre.** Mevcut sisteme ilişkin simülasyonlarımıza göre, bonus ve oyunlarla ya da onlarsız, ilk çekime ulaşmak yaklaşık {range} saat aktif kullanım gerektirir. Yalnızca video izleyerek: hedefin yarısı {m25} dakikadan kısa sürede, %80’i yaklaşık {h40} saatte, %90’ı yaklaşık {h45} saatte, %98’i yaklaşık {h49} saatte ve hedefin tamamı yaklaşık {h50} saatte. Günde üç saatle bu, iki yıldan fazladır. Bunlar tahmindir, garanti değildir; WatchEarn bir iş ya da gelir kaynağı değildir.'
      ]],
      ['6. Para çekme', [
        'Bakiyen {amounts} tutarına ulaştığında bu tutarda çekim talep edebilirsin. Adına kayıtlı bir hesaba PayPal ile veya İspanya’da Bizum ile ödeme yaparız.',
        'Cüzdan’da çekimi onayladığında jetonlar düşülür ve e-postan talep ve kodu ile açılır. Talebi, ödeme hesabının bilgileri ve hesap sahibinin adıyla birlikte {email} adresine gönder. Gönderilmediyse Cüzdan’dan yeniden gönderebilir veya kopyalayabilirsin.',
        'Her talebi inceleriz ve kimliğini, yaşını, ikametini ve hesabın sahipliğini doğrulamak için makul bilgiler isteyebiliriz. Geçerli talepleri, eksiksiz talebi aldığımız tarihten itibaren en geç {payoutDays} takvim günü içinde öderiz. Komisyon almayız; ödeme sağlayıcın kendi ücretlerini alabilir.',
        'Bir talep bu koşulları ihlal ederse, nedenini belirterek e-postayla bildiririz ve yanıt verebilirsin. Sorun düzeltilebiliyorsa, tutarı kaybetmeden nasıl düzelteceğini açıklarız.',
        'Alınan tutarların vergisel sonuçları olabilir ve bunları beyan etmek senin sorumluluğundadır. Yasa bizi vergi kesintisi yapmaya veya vergi idaresine bildirimde bulunmaya zorunlu kılarsa, bunu yapar ve sana bildiririz.'
      ]],
      ['7. Doğru kullanım ve dolandırıcılığın önlenmesi', [
        'Jetonları bot, betik, emülatör veya herhangi bir otomasyonla elde etmek; uygulamanın depolamasını, kodunu, cihaz saatini veya isteklerini değiştirmek; hatalardan yararlanmak; ödülleri katlamak için birden fazla profil kullanmak; jeton veya profil satmak ya da devretmek yasaktır.',
        'Bu davranışları tespit edersek, haksız elde edilen jetonları iptal edebilir, ilgili çekimleri reddedebilir ve seni hizmetten çıkarabiliriz; bunu orantılı biçimde ve mümkünse nedenini bildirerek yaparız. Açık bir teknik hata nedeniyle eklenen tutarları da düzeltebiliriz.'
      ]],
      ['8. İçerik ve fikri mülkiyet', [
        'Videolar yaratıcılarına ve hak sahiplerine aittir; WatchEarn yaratıcının adını ve orijinale bağlantıyı gösterir. Bunlar üzerinde hiçbir hak elde etmezsin: yalnızca uygulama içinde, kişisel kullanım için izleyebilirsin. YouTube’a ve diğer sitelere giden bağlantılar, kendi koşulları olan üçüncü taraf hizmetlere yönlendirir.',
        'Hak sahibiysen ve bir içeriğin izinsiz kullanıldığını düşünüyorsan, içeriği, haklarını ve iletişim bilgilerini belirterek {email} adresine yaz. Hukuka aykırılığını fiilen öğrendiğimizde içeriği derhal kaldırırız.',
        'WatchEarn’ün adı, tasarımı ve kodu hizmet sağlayıcıya aittir; DM Sans ve Manrope yazı tipleri (SIL Open Font License) gibi kendi lisansı olan üçüncü taraf kaynaklar hariçtir.'
      ]],
      ['9. Değişiklikler ve hizmetin kapatılması', [
        'Hizmeti, ödülleri veya bu koşulları haklı nedenlerle (hukuki, teknik, güvenlik, dolandırıcılığın önlenmesi, sürdürülebilirlik veya hizmetin gelişimi) değiştirebiliriz; yasa veya güvenlik gereği acil değişiklikler dışında bunu uygulamada en az 15 gün önceden bildiririz. Uygulamayı kullanmaya devam etmek için yeni sürümü kabul etmen gerekir; kabul etmezsen kullanmayı bırakabilir ve zaten hak kazandığın çekimleri talep edebilirsin. Kazanılmış jetonlar bozdurma değerini korur.',
        'Hizmeti kapatırsak bunu en az {noticeDays} gün önceden duyururuz ve eşiğe ulaşan bakiyeler için kapanıştan sonra {claimDays} güne kadar çekim talep edebilirsin. **İlk çekimin altındaki bakiye bozdurulamaz ve hizmet kapandığında sona erer.**'
      ]],
      ['10. Sorumluluk', [
        'Kasıt veya ağır ihmalden doğan zararlardan ve sorumluluğu yasal olarak hariç tutulamayan zararlardan sorumluyuz. Kontrolümüz dışındaki kesintilerden veya tarayıcı verilerinin silinmesi, gizli gezinme ya da cihaz değişikliği nedeniyle bakiyenin kaybolmasından sorumlu değiliz. Bu koşullardaki hiçbir şey tüketici haklarını sınırlamaz.'
      ]],
      ['11. Süre, ayrılma ve cayma', [
        'Sözleşme, hizmeti kullandığın sürece ve en geç hizmetin kapanışına kadar sürer. WatchEarn’ü istediğin zaman ücretsiz olarak kullanmayı bırakabilir ve tüm verilerini Ayarlar → Verilerimi sil bölümünden silebilirsin. Ayrıca İspanya Tüketicileri ve Kullanıcıları Koruma Genel Kanunu’nun 102. maddesinde öngörülen 14 takvim günü içinde, gerekçe göstermeden sözleşmeden cayabilirsin: uygulamayı kullanmayı bırakman ve istersen bize bildirmen yeterlidir. Bu koşulları ihlal edersen nedenini bildirerek sözleşmeyi feshedebiliriz.'
      ]],
      ['12. Gizlilik', [
        'Verilerinin nasıl işlendiği [Gizlilik politikası](privacy.html) içinde açıklanmıştır.'
      ]],
      ['13. Kullanıcı hizmetleri ve şikâyetler', [
        'Soru ve şikâyetlerini {email} adresine gönderebilirsin. Mümkün olan en kısa sürede ve en geç bir ay içinde yanıt veririz. {adr} Ayrıca yaşadığın yerdeki tüketici yetkililerine başvurabilir veya her iki taraf için de isteğe bağlı olan tüketici tahkimi talep edebilirsin.'
      ]],
      ['14. Uygulanacak hukuk ve yetkili mahkeme', [
        'Bu koşullar İspanya hukukuna tabidir. Tüketiciysen ikametgâhındaki mahkemelere başvurabilirsin ve ikamet ettiğin ülkenin emredici kurallarının korumasından yararlanmaya devam edersin.'
      ]],
      ['15. Kısmi geçersizlik', [
        'Herhangi bir hüküm geçersiz sayılırsa diğerleri yürürlükte kalır ve ilgili hükmün yerini uygulanabilir yasal düzenleme alır.'
      ]],
      ['16. Android uygulaması ve reklamlar', [
        'WatchEarn aynı hizmet ve bu koşullarla bir Android uygulaması olarak da sunulur. Uygulamada tarayıcıya yapılan atıflar uygulamaya yapılmış sayılır: bakiyen uygulamada saklanır, verilerini silersen ya da uygulamayı kaldırırsan kaybolur ve bir cihazdaki her kurulum bir profil sayılır (3. bölüm).',
        'Uygulama, AppLovin ve aracılık ortaklarının sunduğu reklamları gösterir: videolar arasında, en fazla birkaç videoda bir çıkan ve jeton kazandırmayan **tam ekran reklamlar** ile Ödüller bölümünde ek jeton kazanmak (günde en fazla {adsPerDay}) veya bir sandık ödülünü ya da jeton bonusunu ikiye katlamak için izlemeyi kendin seçtiğin isteğe bağlı **ödüllü videolar**. İkiye katlanan bir ödül de {max} jetonu geçmez.',
        'Ödüllü bir videonun jetonları yalnızca AppLovin videoyu sonuna kadar izlediğini onaylarsa eklenir. Videoyu erken kapatırsan veya video başarısız olursa ödül yoktur ve bekleyen ödül ikiye katlanmadan korunur. Reklamların her zaman mevcut olacağını garanti etmeyiz. Bir reklama dokunmak isteğe bağlıdır ve jeton kazandırmaz; yapay görüntüleme veya tıklama üretmek yasaktır (7. bölüm). Reklamlardan ve reklamı yapılan ürünlerden reklamverenler sorumludur.',
        'Kişiselleştirilmiş reklamlar yalnızca Ayarlar’dan değiştirebileceğin onayınla gösterilir; verilerinin nasıl işlendiği [Gizlilik politikası](privacy.html) içinde açıklanır.'
      ]]
    ]
  },
  privacy: {
    title: 'Gizlilik politikası',
    summaryTitle: '**Özet**',
    intro: 'WatchEarn (“biz”) gizliliğini korumayı taahhüt eder. Bu politika, WatchEarn’ü kullandığında hangi bilgileri topladığımızı, bunları nasıl kullandığımızı ve nasıl koruduğumuzu, uygulamaya entegre edilen üçüncü taraf hizmetler dâhil açıklar.',
    summary: [
      'Kayıt veya hesap yok: ilerlemen cihazında saklanır ve biz almayız.',
      'Kişisel verileri yalnızca bize yazarsan veya çekim talep edersen işleriz.',
      'Web sitesinde reklam, analiz veya izleme çerezi yoktur. Android uygulaması, cihazından veri alan AppLovin’in reklamlarını gösterir; kişiselleştirilmiş reklamlar yalnızca onayınla gösterilir.',
      'Verilerini Ayarlar → Verilerimi sil bölümünden silebilir ve bize yazarak haklarını kullanabilirsin.'
    ],
    sections: [
      ['1. Topladığımız bilgiler', [
        '**1.1 Kişisel veriler.** Bize bir çekim talebi gönderirsen veya yazarsan e-posta adresini, adını, ödeme hesabı bilgilerini (Bizum numarası veya PayPal e-postası), ikamet ülkeni, talebin kodunu, tutarını ve tarihini ve mesajların içeriğini işleriz. Şartları kontrol etmek için gerekirse kimliğini, yaşını ve ikametini kanıtlayan bilgiler isteyebiliriz; yalnızca zorunlu olanları.',
        '**1.2 Kullanım verileri.** Uygulama tarayıcının yerel depolamasında bakiyeni, hareketlerini, görevleri, oyunları, kaydedilen videoları, akış sırasını, izleme süresini, bekleyen ödülleri, çekim taleplerini, ayarları ve dili, ayrıca kabul edilen koşulların sürümünü ve tarihini `watchearn-v1`, `watchearn-terms` ve `watchearn-language` kayıtlarında saklar. Bunlar sunucularımıza gönderilmez ve bunlara erişimimiz yoktur.',
        '**1.3 Cihaz verileri.** Android uygulamasında AppLovin’in reklam SDK’sı cihazından reklam kimliği, IP adresi, model ve işletim sistemi gibi teknik veriler toplar (3. bölüm). WatchEarn web sitesini ziyaret edersen barındırma sağlayıcısı ({hosting}) siteyi sunmak ve korumak için IP adresini, istenen sayfayı, tarih ve saati ve tarayıcıya ait teknik verileri alır. Para birimi ve dil, cihazının saat dilimi ve dillerine göre seçilir; bunlar kimseye gönderilmez ve konumun kullanılmaz.',
        '**1.4 Bağlantılar.** Orijinal bir videoyu açarsan YouTube’a gidersin; YouTube verilerini kendi politikasına göre işler. Paylaş özelliğini kullanırsan başlık ve bağlantı cihazının paylaşım işlevine iletilir.',
        'Etnik köken, dini inançlar, sağlık veya biyometrik veriler gibi hassas verileri toplamayız ve bunları bize göndermemeni rica ederiz.',
        '**Yerel depolama ve çerezler.** WatchEarn çerez kullanmaz. Yerel kayıtlar, talep ettiğin hizmeti sunmak için kesinlikle gereklidir; bu nedenle onay gerektirmez (LSSI madde 22.2). Web sitesinde analiz, reklam veya üçüncü taraf izlemesi yoktur. Android uygulamasında AppLovin SDK’sı reklam göstermek için cihazında bilgi saklar ve okur (3. bölüm).'
      ]],
      ['2. Bilgilerini nasıl kullanıyoruz', [
        [
          'Hizmeti sunmak (videolar, ödüller, ayarlar ve koşulların kabulü): sözleşmenin ifası (GDPR m. 6(1)(b)).',
          'Çekimleri işlemek, doğrulamak ve ödemek: sözleşmenin ifası (GDPR m. 6(1)(b)).',
          'Dolandırıcılığı önlemek: programı ve katılımcılarını korumaya yönelik meşru menfaat (GDPR m. 6(1)(f)).',
          'Sorulara, şikâyetlere ve hak taleplerine yanıt vermek: sözleşmenin ifası ve yasal yükümlülük (GDPR m. 6(1)(b) ve 6(1)(c)).',
          'Ödemelere ilişkin muhasebe ve vergi yükümlülüklerini yerine getirmek: yasal yükümlülük (GDPR m. 6(1)(c)).',
          'Siteyi güvenli şekilde sunmak: meşru menfaat (GDPR m. 6(1)(f)).'
        ],
        'Profil oluşturmayız ve yalnızca otomatik kararlar almayız: her para çekme işlemini bir kişi inceler. Android uygulamasında AppLovin ve ortakları reklamları yalnızca onay verirsen kişiselleştirir (3. bölüm).'
      ]],
      ['3. Üçüncü taraf hizmetler ve SDK’lar', [
        '**Kim.** Android uygulaması, AppLovin Corporation’ın AppLovin MAX SDK’sını içerir; bu SDK reklamları doğrudan veya aracılığındaki reklam ağları üzerinden sunar. AppLovin ve bu ağlar verileri kendi politikalarına göre bağımsız veri sorumlusu olarak işler ([AppLovin gizlilik politikası](https://legal.applovin.com/privacy/)). Bu verileri seni tanımlayacak biçimde almayız; yalnızca reklamlar ve gelirlerle ilgili toplu raporlar alırız.',
        '**Hangi veriler.** Cihazının reklam kimliği (Android ayarlarından silmediysen), IP adresi, model ve işletim sistemi, dil, saat dilimi, operatör ve bağlantı türü, uygulama ve gösterilen reklamlar ile bunlarla etkileşimlerin (görüntülemeler, tıklamalar ve ödüller).',
        '**Amaçlar ve hukuki dayanaklar.** Kişiselleştirilmemiş reklamlar göstermek, sıklıklarını sınırlamak, ölçmek, ödülleri eklemek ve reklam sahtekârlığını önlemek: ücretsiz hizmeti finanse etme ve koruma konusundaki meşru menfaat (GDPR md. 6.1.f). İlgi alanlarına göre kişiselleştirilmiş reklamlar göstermek ve ölçmek: yalnızca onayınla (GDPR md. 6.1.a).',
        '**Senin seçimin.** Uygulamayı ilk açtığında kişiselleştirilmiş reklamları kabul edip etmediğini sorarız; reddetmek de aynı kolaylıktadır ve uygulamayı kullanmana ya da ödül kazanmana engel olmaz. Onayını istediğin zaman Ayarlar → Kişiselleştirilmiş reklamlar bölümünden geri çekebilir veya verebilir, reklam kimliğini Android ayarlarından sıfırlayabilir ya da silebilirsin. Bize yazarak meşru menfaate dayalı işlemeye itiraz da edebilirsin.',
        '**Aktarımlar ve saklama.** AppLovin ve bazı ağlar verileri ABD’de ve Avrupa Ekonomik Alanı dışındaki diğer ülkelerde, GDPR’nin V. bölümündeki güvencelerle (AB-ABD Veri Gizliliği Çerçevesi veya standart sözleşme maddeleri gibi) işler. Verileri politikalarında belirtilen süreler boyunca saklarlar.',
        'Bu üçüncü tarafların gizlilik politikalarını okumanı öneririz:',
        [
          'AppLovin (reklam, AppLovin MAX SDK’sı): [gizlilik politikası](https://legal.applovin.com/privacy/)',
          'Google (uygulamayı indirdiğin Google Play ve Android reklam kimliği; orijinal bir videoyu açarsan YouTube): [gizlilik politikası](https://policies.google.com/privacy)',
          'GitHub (web sitesi barındırma): [gizlilik bildirimi](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement)'
        ],
        'Analiz, atıf veya reklam için başka bir SDK entegre etmiyoruz. Eklersek, etkinleştirmeden önce bu listeye ekleriz.'
      ]],
      ['4. Bilgilerini kimlerle paylaşıyoruz', [
        'Veri sorumlusunun barındırma ve e-posta sağlayıcıları, veri işleyen olarak; ödemeyi işleyen PayPal veya banka, bağımsız veri sorumlusu olarak; Android uygulamasında AppLovin ve aracılığındaki reklam ağları (3. bölüm); ve yasanın gerektirdiği durumlarda resmî makamlar. Verilerini satmayız.',
        'Ayrıca yasa, mahkeme kararı veya bir makam gerektirdiğinde; haklarımızı, kullanıcıları veya üçüncü kişileri dolandırıcılığa ya da hukuka aykırı faaliyetlere karşı korumak için; ve hizmet başka bir sahibe devredilirse, bu politikaya uymak zorunda olan yeni sahibe verileri açıklayabiliriz. Böyle bir devirden önce seni bilgilendiririz.',
        '**Uluslararası aktarımlar.** Bir sağlayıcı verileri Avrupa Ekonomik Alanı dışında işlerse, bunu GDPR’nin V. bölümündeki güvencelerle, örneğin bir yeterlilik kararı veya Avrupa Komisyonu’nun standart sözleşme hükümleriyle yapar.'
      ]],
      ['5. Güvenlik ve saklama', [
        'WatchEarn web sayfaları HTTPS üzerinden sunulur. Çekim talepleri ve ödeme bilgileri içeren e-postalar yalnızca hizmet sahibinin erişebildiği korumalı bir posta kutusunda saklanır ve yalnızca ödemeleri işlemek için kullanılır. Uygulama verileri cihazında şifrelenmez: cihazına erişimi olan biri bunları görebilir veya değiştirebilir. Hiçbir sistem mutlak güvenliği garanti etmez.',
        '**Saklama süreleri.** Her veriyi yalnızca gerektiği süre boyunca saklarız:',
        [
          'Cihazındaki veriler: sen silene kadar.',
          'Çekim talepleri ve ödemeler: işlenmeleri için gereken süre boyunca, ardından yasal süreler boyunca engellenmiş olarak (genellikle vergi için 4 yıl, muhasebe için 6 yıl).',
          'Sorular ve şikâyetler: çözülene kadar, ardından olası taleplerin süresi boyunca.',
          'Teknik kayıtlar: barındırma sağlayıcısının uyguladığı süre.'
        ]
      ]],
      ['6. Reşit olmayanlar', [
        'WatchEarn yalnızca {age} yaş ve üzeri kişiler içindir. Bir talebin reşit olmayan birinden geldiğini öğrenirsek talebi reddeder ve yasal olarak saklamamız gerekenler dışında verilerini sileriz.'
      ]],
      ['7. Hakların ve seçeneklerin', [
        'WatchEarn’ü bize hiçbir kişisel veri vermeden kullanabilirsin: bu verilere yalnızca bize yazarsan veya çekim talep edersen ihtiyaç duyarız.',
        'Erişim, düzeltme, silme, itiraz, kısıtlama ve taşınabilirlik haklarını {email} adresine yazarak kullanabilirsin. Bir ay içinde yanıt veririz; karmaşık durumlarda bu süre iki ay daha uzatılabilir. Cihazındaki verileri Ayarlar → Verilerimi sil bölümünden kendin silebilirsin. Ayrıca [İspanya Veri Koruma Ajansı’na (AEPD)](https://www.aepd.es/) veya ülkendeki veri koruma otoritesine şikâyette bulunabilirsin.'
      ]],
      ['8. Değişiklikler', [
        'Bu politikayı değiştirirsek sürümü ve tarihi günceller ve önemli değişiklikleri uygulamada bildiririz. Yeni bir işleme onayını gerektirirse, etkinleştirmeden önce onayını isteriz.'
      ]],
      ['9. İletişim', [
        '**Veri sorumlusu.** {name}, vergi numarası {taxId}, adresi {address}{registry}. İletişim ve gizlilik e-postası: {email}.',
        'Bu politika veya verilerinin işlenmesiyle ilgili soru, endişe ya da taleplerin için bize {email} adresinden yaz.'
      ]]
    ]
  }
});
