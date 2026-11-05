'use strict';
Legal.add('pt', {
  note: 'Esta tradução é fornecida para tua comodidade. Se divergir da versão em espanhol, prevalece a versão em espanhol.',
  pending: 'pendente',
  fields: {name: 'nome ou denominação social', taxId: 'número fiscal', address: 'morada', email: 'e-mail de contacto', hosting: 'fornecedor de alojamento'},
  registry: ', registada em {registry}',
  adrYes: 'Aderimos a {adr}.',
  adrNo: 'Não aderimos a nenhum sistema de resolução alternativa de litígios de consumo.',
  version: 'Versão {version} · Última atualização: {date}',
  rules: {
    intro: 'Até {c25} moedas, o fator dos prémios desce de {f0} para {f25} do seu valor base; até {c30}, para {f30}; até {c40}, para {f40}; depois, a descida acelera. A partir de {c45} moedas, um segundo travão progressivo reduz todas as recompensas até as dividir por 300 ao chegar a {c50}. Nenhum prémio individual ultrapassa {max} moedas.',
    reference: 'A tua referência atual · 5 segundos de vídeo',
    coins: '{n} moedas',
    head: ['Saldo', 'Vídeo · 5 s', 'Maior baú'],
    rounding: 'Os valores são mostrados arredondados, mas os cálculos usam seis casas decimais. O levantamento só fica disponível quando o valor escolhido é realmente atingido.'
  },
  terms: {
    title: 'Condições de utilização',
    summaryTitle: '**O essencial** (este resumo não substitui o texto completo):',
    summary: [
      'O WatchEarn é gratuito. Apenas para maiores de {age} anos residentes em {countries}.',
      '{c1} moedas = {rate}. O primeiro levantamento é de {goal} e é revisto manualmente antes de ser pago.',
      '**As recompensas diminuem.** Chegar ao primeiro levantamento exige cerca de {range} horas de utilização ativa; só os últimos 10 % da meta, mais de {last} horas. Não é uma fonte de rendimento.',
      'O teu saldo fica guardado só neste dispositivo (no navegador ou na app). Se apagares os dados, desinstalares a app ou mudares de dispositivo, perde-se e não o podemos recuperar.',
      'Bots, batota ou vários perfis por pessoa anulam as moedas e os levantamentos.'
    ],
    sections: [
      ['1. Titular do serviço', [
        'O WatchEarn é um serviço prestado por {name}, com o número fiscal {taxId} e morada em {address}{registry}. E-mail de contacto: {email}. Informação prestada nos termos do artigo 10.º da Lei espanhola 34/2002, de serviços da sociedade da informação e de comércio eletrónico (LSSI).'
      ]],
      ['2. Objeto e aceitação', [
        'Estas condições regulam a utilização do WatchEarn: um serviço gratuito em que vês vídeos curtos, completas tarefas e jogos e acumulas moedas resgatáveis por dinheiro nos termos da secção 6. Não é necessária nenhuma compra, pagamento ou subscrição.',
        'O serviço pode ter erros e interrupções e mudar nos termos da secção 9. Não garantimos a sua disponibilidade contínua.',
        'Para aceitar estas condições, carrega em «Li e aceito». Ao aceitá-las, declaras que cumpres os requisitos da secção 3. Sem as aceitar, os vídeos não são reproduzidos nem se obtêm recompensas. Guardamos no teu navegador a versão aceite e a data.',
        'Não arquivamos uma cópia individual da tua aceitação: estas condições estão sempre disponíveis na página [Condições de utilização](terms.html), onde as podes guardar ou imprimir (artigo 27.º da LSSI). São oferecidas em vários idiomas; se uma tradução divergir, prevalece a versão em espanhol.'
      ]],
      ['3. Quem pode participar', [
        'Podes usar o WatchEarn se tiveres {age} anos ou mais, capacidade para contratar e residires em {countries}. Cada pessoa pode participar com um único perfil, ou seja, um navegador num dispositivo. Os saldos de navegadores ou dispositivos diferentes não podem ser somados, transferidos nem resgatados em conjunto.'
      ]],
      ['4. Como se obtêm moedas', [
        '**Visualização.** Conta o tempo de reprodução ativa da primeira visualização de cada aparição de um vídeo, creditado em intervalos de 3,5 a 6,5 segundos. Não contam as pausas, a app em segundo plano, os saltos nem as repetições automáticas.',
        '**Bónus e jogos.** A cada 2 a 4 vídeos pode aparecer um bónus opcional: baús (três prémios possíveis, cada um com probabilidade de 1 em 3), bónus de moedas, presente ou multiplicador (×2 55 %, ×3 25 %, ×4 12 %, ×5 6 %, ×10 1,8 % e ×20 0,2 %). Há ainda um prémio diário, cinco tarefas que se renovam a cada hora e quatro jogos com três jogadas diárias cada um; a roleta e a raspadinha têm seis prémios equiprováveis.',
        'Tudo é gratuito: não há apostas, compras nem participação paga. Os resultados aleatórios são gerados no teu dispositivo com o seu gerador criptográfico. A app para Android inclui publicidade e vídeos com recompensa opcionais (secção 16); a versão web não tem publicidade.'
      ]],
      ['5. Valor das moedas e recompensas decrescentes', [
        'As moedas não são dinheiro, moeda eletrónica nem um depósito: não geram juros, não podem ser transferidas nem vendidas e só se resgatam nos termos da secção 6. O seu valor de resgate depende da moeda do teu país de residência: o primeiro levantamento, {c50} moedas, equivale a {goal}, e {c1} moedas a {rate}. O valor que a app mostra é essa equivalência, não um saldo bancário. Valor do primeiro levantamento em cada moeda:',
        '{currencies}',
        '**As recompensas diminuem à medida que o teu saldo cresce:**',
        '{rules}',
        '**Tempo estimado.** Segundo as nossas simulações do sistema atual, chegar ao primeiro levantamento exige cerca de {range} horas de utilização ativa, com ou sem bónus e jogos. Vendo só vídeos: metade da meta em menos de {m25} minutos, 80 % em cerca de {h40} horas, 90 % em cerca de {h45} horas, 98 % em cerca de {h49} horas e a meta completa em cerca de {h50} horas. Com três horas por dia são mais de dois anos. São estimativas, não uma garantia, e o WatchEarn não é um emprego nem uma fonte de rendimento.'
      ]],
      ['6. Levantamentos', [
        'Podes pedir um levantamento de {amounts} quando o teu saldo atingir esse valor. Pagamos por PayPal ou, em Espanha, por Bizum, para uma conta em teu nome.',
        'Ao confirmar o levantamento na Carteira, as moedas são descontadas e abre-se o teu e-mail com o pedido e o respetivo código. Envia-o para {email} com os dados da tua conta de pagamento e o nome do titular. Se não chegar a ser enviado, podes reenviá-lo ou copiá-lo a partir da Carteira.',
        'Revemos cada pedido e podemos pedir-te informação razoável para confirmar a tua identidade, idade, residência e a titularidade da conta. Pagamos os pedidos válidos num prazo máximo de {payoutDays} dias seguidos a contar da receção do pedido completo. Não cobramos comissões; o teu fornecedor de pagamentos pode cobrar as suas.',
        'Se um pedido não cumprir estas condições, informar-te-emos por e-mail, com o motivo, e poderás responder. Se o problema puder ser corrigido, indicaremos como, sem perderes o valor.',
        'Os valores recebidos podem ter efeitos fiscais e és responsável por os declarar. Se a lei nos obrigar a efetuar retenções ou a informar a administração fiscal, fá-lo-emos e informar-te-emos.'
      ]],
      ['7. Utilização correta e prevenção de fraude', [
        'Não é permitido obter moedas através de bots, scripts, emuladores ou qualquer automatização; manipular o armazenamento, o código, o relógio do dispositivo ou os pedidos da app; aproveitar erros; usar vários perfis para multiplicar recompensas; nem vender ou ceder moedas ou perfis.',
        'Se detetarmos estas condutas, poderemos anular as moedas obtidas indevidamente, recusar os levantamentos afetados e excluir-te do serviço, de forma proporcionada e comunicando-te o motivo sempre que possível. Também podemos corrigir valores creditados por um erro técnico manifesto.'
      ]],
      ['8. Conteúdos e propriedade intelectual', [
        'Os vídeos pertencem aos seus criadores e titulares de direitos; o WatchEarn mostra o nome do criador e uma ligação para o original. Não recebes nenhum direito sobre eles: só os podes ver dentro da app, para uso pessoal. As ligações para o YouTube e outros sites levam a serviços de terceiros com as suas próprias condições.',
        'Se fores titular de direitos e considerares que um conteúdo é usado sem autorização, escreve-nos para {email} indicando o conteúdo, os teus direitos e os teus dados de contacto. Retirá-lo-emos com diligência quando tivermos conhecimento efetivo da sua ilicitude.',
        'O nome, o design e o código do WatchEarn pertencem ao titular, exceto os recursos de terceiros com licença própria, como as fontes DM Sans e Manrope (SIL Open Font License).'
      ]],
      ['9. Alterações e encerramento do serviço', [
        'Podemos alterar o serviço, as recompensas ou estas condições por motivos válidos (legais, técnicos, de segurança, prevenção de fraude, sustentabilidade ou evolução do serviço), avisando-te na app com pelo menos 15 dias de antecedência, salvo alterações urgentes exigidas pela lei ou pela segurança. Para continuares a usar a app terás de aceitar a nova versão; se não a aceitares, podes deixar de a usar e pedir os levantamentos a que já tinhas direito. As moedas já obtidas mantêm o seu valor de resgate.',
        'Se encerrarmos o serviço, avisaremos com pelo menos {noticeDays} dias de antecedência e poderás pedir levantamentos do saldo que atinja o limiar até {claimDays} dias após o encerramento. **O saldo inferior ao primeiro levantamento não é resgatável e extingue-se quando o serviço encerrar.**'
      ]],
      ['10. Responsabilidade', [
        'Respondemos pelos danos causados por dolo ou culpa grave e por aqueles cuja responsabilidade não possa ser excluída por lei. Não respondemos por interrupções alheias ao nosso controlo nem pela perda do saldo por apagares os dados do navegador, usares navegação privada ou mudares de dispositivo. Nada nestas condições limita os teus direitos enquanto consumidor.'
      ]],
      ['11. Duração, saída e livre resolução', [
        'O contrato dura enquanto usares o serviço e, no máximo, até ao encerramento do serviço. Podes deixar de usar o WatchEarn quando quiseres, sem custos, e apagar todos os seus dados em Definições → Apagar os meus dados. Também podes desistir do contrato durante os 14 dias seguidos previstos no artigo 102.º da Lei Geral espanhola de Defesa dos Consumidores e Utilizadores, sem indicar o motivo: basta deixares de usar a app e, se quiseres, comunicares-nos. Podemos resolver o contrato se não cumprires estas condições, comunicando-te o motivo.'
      ]],
      ['12. Privacidade', [
        'O tratamento dos teus dados está descrito na [Política de privacidade](privacy.html).'
      ]],
      ['13. Apoio ao utilizador e reclamações', [
        'Podes enviar-nos dúvidas e reclamações para {email}. Responderemos o mais depressa possível e, no máximo, no prazo de um mês. {adr} Também te podes dirigir às autoridades de consumo do teu local de residência ou pedir uma arbitragem de consumo, que é voluntária para ambas as partes.'
      ]],
      ['14. Lei aplicável e foro', [
        'Estas condições regem-se pela lei espanhola. Se fores consumidor, podes recorrer aos tribunais do teu domicílio e manténs a proteção das normas imperativas do teu país de residência.'
      ]],
      ['15. Nulidade parcial', [
        'Se alguma cláusula for declarada nula, as restantes manter-se-ão em vigor e a cláusula afetada será substituída pela regulamentação legal aplicável.'
      ]],
      ['16. App para Android e publicidade', [
        'O WatchEarn também é oferecido como app para Android, com o mesmo serviço e estas mesmas condições. Na app, as referências ao navegador entendem-se feitas à app: o teu saldo fica guardado nela e perde-se se apagares os seus dados ou a desinstalares, e cada instalação num dispositivo conta como um perfil (secção 3).',
        'A app mostra publicidade servida pela AppLovin e pelos seus parceiros de mediação: **anúncios em ecrã inteiro** entre vídeos, no máximo a cada poucos vídeos e sem moedas, e **vídeos com recompensa** opcionais, que escolhes ver para obter moedas extra em Recompensas (até {adsPerDay} por dia) ou para duplicar um prémio de baú ou um bónus de moedas. Um prémio duplicado também não ultrapassa {max} moedas.',
        'As moedas de um vídeo com recompensa só são creditadas se a AppLovin confirmar que o viste até ao fim. Se o fechares antes ou se falhar, não há recompensa e o prémio pendente mantém-se sem duplicar. Não garantimos que haja sempre anúncios disponíveis. Tocar num anúncio é voluntário e não dá moedas; gerar visualizações ou cliques artificiais é proibido (secção 7). Os anúncios e o que anunciam são da responsabilidade dos seus anunciantes.',
        'Os anúncios personalizados só são mostrados com o teu consentimento, que podes alterar nas Definições; o tratamento dos teus dados é explicado na [Política de privacidade](privacy.html).'
      ]]
    ]
  },
  privacy: {
    title: 'Política de privacidade',
    summaryTitle: '**O essencial**',
    intro: 'O WatchEarn («nós») compromete-se a proteger a tua privacidade. Esta política explica que informação recolhemos, como a usamos e como a protegemos quando usas o WatchEarn, incluindo os serviços de terceiros integrados na app.',
    summary: [
      'Não há registo nem contas: o teu progresso fica guardado no teu dispositivo e não o recebemos.',
      'Só tratamos dados pessoais se nos escreveres ou pedires um levantamento.',
      'O site não tem publicidade, análise nem cookies de rastreio. A app para Android mostra anúncios da AppLovin, que recebe dados do teu dispositivo; os personalizados, só com o teu consentimento.',
      'Podes apagar os teus dados em Definições → Apagar os meus dados e exercer os teus direitos escrevendo-nos.'
    ],
    sections: [
      ['1. Informação que recolhemos', [
        '**1.1 Dados pessoais.** Se nos enviares um pedido de levantamento ou nos escreveres, tratamos o teu e-mail, o teu nome, os dados da tua conta de pagamento (número Bizum ou e-mail do PayPal), o teu país de residência, o código, valor e data do pedido e o conteúdo das mensagens. Se for necessário para verificar os requisitos, podemos pedir-te informação que comprove a tua identidade, idade e residência, apenas a imprescindível.',
        '**1.2 Dados de utilização.** A app guarda no armazenamento local do teu navegador o saldo, movimentos, tarefas, jogos, vídeos guardados, ordem do feed, tempo de visualização, prémios pendentes, pedidos de levantamento, definições e idioma, e a versão e data das condições aceites, nos registos `watchearn-v1`, `watchearn-terms` e `watchearn-language`. Não são enviados para os nossos servidores nem temos acesso a eles.',
        '**1.3 Dados do dispositivo.** Na app para Android, o SDK de publicidade da AppLovin recolhe dados técnicos do dispositivo, como o identificador de publicidade, o endereço IP, o modelo e o sistema operativo (secção 3). Se visitares o site do WatchEarn, o fornecedor de alojamento ({hosting}) recebe o teu endereço IP, a página pedida, a data e hora e dados técnicos do navegador para o servir e proteger. A moeda e o idioma são escolhidos a partir do fuso horário e dos idiomas do teu dispositivo, sem os enviar a ninguém nem usar a tua localização.',
        '**1.4 Ligações externas.** Se abrires um vídeo original, irás para o YouTube, que trata os teus dados segundo a sua própria política. Se usares Partilhar, o título e a ligação são entregues à função de partilha do teu dispositivo.',
        'Não recolhemos dados sensíveis, como a origem étnica, as convicções religiosas, a saúde ou os dados biométricos, e pedimos-te que não no-los envies.',
        '**Armazenamento local e cookies.** O WatchEarn não usa cookies. Os registos locais são estritamente necessários para prestar o serviço que pedes, pelo que não exigem consentimento (artigo 22.2 da LSSI). O site não tem análise, publicidade nem rastreio de terceiros. Na app para Android, o SDK da AppLovin guarda e lê informação no teu dispositivo para mostrar anúncios (secção 3).'
      ]],
      ['2. Como usamos a tua informação', [
        [
          'Prestar o serviço (vídeos, recompensas, definições e aceitação das condições): execução do contrato (art. 6.º, n.º 1, alínea b), do RGPD).',
          'Tratar, verificar e pagar os levantamentos: execução do contrato (art. 6.º, n.º 1, alínea b), do RGPD).',
          'Prevenir a fraude: interesse legítimo em proteger o programa e os seus participantes (art. 6.º, n.º 1, alínea f), do RGPD).',
          'Responder a dúvidas, reclamações e ao exercício de direitos: execução do contrato e obrigação legal (art. 6.º, n.º 1, alíneas b) e c), do RGPD).',
          'Cumprir as obrigações contabilísticas e fiscais dos pagamentos: obrigação legal (art. 6.º, n.º 1, alínea c), do RGPD).',
          'Servir o site com segurança: interesse legítimo (art. 6.º, n.º 1, alínea f), do RGPD).'
        ],
        'Não elaboramos perfis nem tomamos decisões exclusivamente automatizadas: cada levantamento é revisto por uma pessoa. Na app para Android, a AppLovin e os seus parceiros só personalizam os anúncios se deres o teu consentimento (secção 3).'
      ]],
      ['3. Serviços e SDK de terceiros', [
        '**Quem.** A app para Android integra o SDK AppLovin MAX da AppLovin Corporation, que serve os anúncios diretamente ou através das redes publicitárias da sua mediação. A AppLovin e essas redes tratam os dados como responsáveis independentes, segundo as suas próprias políticas ([política de privacidade da AppLovin](https://legal.applovin.com/privacy/)). Não recebemos esses dados de forma que te identifique; apenas relatórios agregados de anúncios e receitas.',
        '**Que dados.** O identificador de publicidade do teu dispositivo (salvo se o tiveres eliminado nas definições do Android), o endereço IP, o modelo e o sistema operativo, o idioma, o fuso horário, o operador e o tipo de ligação, a app e os anúncios mostrados e as tuas interações com eles (visualizações, cliques e recompensas).',
        '**Finalidades e fundamentos jurídicos.** Mostrar anúncios não personalizados, limitar a sua frequência, medi-los, creditar as recompensas e prevenir a fraude publicitária: interesse legítimo em financiar o serviço gratuito e protegê-lo (art. 6.1.f RGPD). Mostrar anúncios personalizados de acordo com os teus interesses e medi-los: só com o teu consentimento (art. 6.1.a RGPD).',
        '**A tua escolha.** Na primeira vez que abres a app, perguntamos-te se aceitas anúncios personalizados; recusar é igualmente fácil e não te impede de usar a app nem de obter recompensas. Podes retirar ou dar o consentimento quando quiseres em Definições → Anúncios personalizados, e repor ou eliminar o teu identificador de publicidade nas definições do Android. Também te podes opor ao tratamento baseado no interesse legítimo escrevendo-nos.',
        '**Transferências e conservação.** A AppLovin e algumas redes tratam dados nos Estados Unidos e noutros países fora do Espaço Económico Europeu, com as garantias do capítulo V do RGPD (como o Quadro de Privacidade de Dados UE-EUA ou as cláusulas contratuais-tipo). Conservam-nos durante os prazos indicados nas suas políticas.',
        'Recomendamos que leias as políticas de privacidade destes terceiros:',
        [
          'AppLovin (publicidade, SDK AppLovin MAX): [política de privacidade](https://legal.applovin.com/privacy/)',
          'Google (Google Play, onde descarregas a app, e o identificador de publicidade do Android; YouTube, se abrires um vídeo original): [política de privacidade](https://policies.google.com/privacy)',
          'GitHub (alojamento do site): [declaração de privacidade](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement)'
        ],
        'Não integramos outros SDK de análise, atribuição ou publicidade. Se adicionarmos algum, incluí-lo-emos nesta lista antes de o ativar.'
      ]],
      ['4. Com quem partilhamos a tua informação', [
        'Os fornecedores de alojamento e de correio eletrónico do responsável, como subcontratantes; o PayPal ou o banco que processe o pagamento, como responsáveis independentes; na app para Android, a AppLovin e as redes publicitárias da sua mediação (secção 3); e as autoridades quando a lei o exigir. Não vendemos os teus dados.',
        'Também podemos comunicar dados quando a lei, uma ordem judicial ou uma autoridade o exijam; para proteger os nossos direitos, os utilizadores ou terceiros contra fraude ou atividades ilícitas; e, se o serviço for transmitido a outro titular, ao novo titular, que terá de respeitar esta política. Avisar-te-emos antes dessa transmissão.',
        '**Transferências internacionais.** Se algum fornecedor tratar dados fora do Espaço Económico Europeu, fá-lo-á com as garantias do capítulo V do RGPD, como uma decisão de adequação ou as cláusulas contratuais-tipo da Comissão Europeia.'
      ]],
      ['5. Segurança e conservação', [
        'As páginas web do WatchEarn são servidas por HTTPS. Os e-mails com pedidos de levantamento e dados de pagamento são guardados numa caixa de correio protegida, à qual só o titular acede, e só são usados para processar os pagamentos. Os dados da app não são cifrados no teu dispositivo: quem tiver acesso a ele pode vê-los ou alterá-los. Nenhum sistema garante uma segurança absoluta.',
        '**Conservação.** Conservamos cada dado apenas durante o tempo necessário:',
        [
          'Dados do teu dispositivo: até os apagares.',
          'Pedidos de levantamento e pagamentos: o tempo necessário para os tratar e, depois, bloqueados durante os prazos legais (em geral, 4 anos em matéria fiscal e 6 anos para a contabilidade).',
          'Dúvidas e reclamações: até estarem resolvidas e, depois, durante o prazo de eventuais reclamações.',
          'Registos técnicos: o prazo aplicado pelo fornecedor de alojamento.'
        ]
      ]],
      ['6. Menores', [
        'O WatchEarn destina-se apenas a maiores de {age} anos. Se soubermos que um pedido vem de um menor, recusá-lo-emos e apagaremos os seus dados, exceto os que tenhamos de conservar por lei.'
      ]],
      ['7. Os teus direitos e opções', [
        'Podes usar o WatchEarn sem nos dares nenhum dado pessoal: só precisamos deles se nos escreveres ou pedires um levantamento.',
        'Podes exercer os direitos de acesso, retificação, apagamento, oposição, limitação e portabilidade escrevendo para {email}. Respondemos no prazo de um mês, prorrogável por mais dois meses em casos complexos. Os dados do teu dispositivo podes apagá-los tu mesmo em Definições → Apagar os meus dados. Também podes reclamar junto da [Agência Espanhola de Proteção de Dados (AEPD)](https://www.aepd.es/) ou da autoridade de proteção de dados do teu país.'
      ]],
      ['8. Alterações', [
        'Se alterarmos esta política, atualizaremos a versão e a data e avisar-te-emos na app das alterações relevantes. Se um novo tratamento exigir o teu consentimento, pedi-lo-emos antes de o ativar.'
      ]],
      ['9. Contacto', [
        '**Responsável pelo tratamento.** {name}, com o número fiscal {taxId} e morada em {address}{registry}. E-mail de contacto e de privacidade: {email}.',
        'Se tiveres perguntas, dúvidas ou pedidos sobre esta política ou sobre o tratamento dos teus dados, escreve-nos para {email}.'
      ]]
    ]
  }
});
