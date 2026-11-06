'use strict';
Legal.add('vi', {
  note: 'Bản dịch này được cung cấp để bạn tiện theo dõi. Nếu có khác biệt với bản tiếng Tây Ban Nha, bản tiếng Tây Ban Nha sẽ được ưu tiên áp dụng.',
  pending: 'chưa điền',
  fields: {name: 'họ tên hoặc tên công ty', taxId: 'mã số thuế', address: 'địa chỉ', email: 'email liên hệ', hosting: 'nhà cung cấp lưu trữ'},
  registry: ', đăng ký tại {registry}',
  adrYes: 'Chúng tôi tham gia {adr}.',
  adrNo: 'Chúng tôi không tham gia bất kỳ cơ chế giải quyết tranh chấp tiêu dùng thay thế nào.',
  allCountries: 'bất kỳ quốc gia nào mà chúng tôi có thể thanh toán cho bạn qua PayPal và pháp luật cho phép tham gia (trừ {excluded})',
  version: 'Phiên bản {version} · Cập nhật lần cuối: {date}',
  rules: {
    intro: 'Đến {c25} xu, hệ số giải thưởng giảm từ {f0} xuống {f25} giá trị gốc; đến {c30}, xuống {f30}; đến {c40}, xuống {f40}; sau đó mức giảm nhanh hơn. Từ {c45} xu, một cơ chế phanh tăng dần thứ hai giảm mọi phần thưởng cho đến khi chia cho 300 lúc đạt {c50}. Không giải thưởng đơn lẻ nào vượt quá {max} xu.',
    reference: 'Mức tham chiếu hiện tại của bạn · 5 giây video',
    coins: '{n} xu',
    head: ['Số dư', 'Video · 5 giây', 'Rương lớn nhất'],
    rounding: 'Số tiền được hiển thị làm tròn, nhưng phép tính dùng sáu chữ số thập phân. Chỉ có thể rút khi thực sự đạt số tiền đã chọn.'
  },
  terms: {
    title: 'Điều khoản sử dụng',
    summaryTitle: '**Điều cốt lõi** (bản tóm tắt này không thay thế toàn văn):',
    summary: [
      'WatchEarn miễn phí. Chỉ dành cho người từ {age} tuổi trở lên cư trú tại {countries}.',
      '{c1} xu = {rate}. Lần rút đầu tiên là {goal} và được kiểm tra thủ công trước khi thanh toán.',
      '**Phần thưởng giảm dần.** Để đạt lần rút đầu tiên cần khoảng {range} giờ sử dụng thực tế; riêng 10% cuối của mục tiêu đã cần hơn {last} giờ. Đây không phải là nguồn thu nhập.',
      'Số dư của bạn chỉ được lưu trên thiết bị này (trong trình duyệt hoặc trong ứng dụng). Nếu bạn xóa dữ liệu, gỡ ứng dụng hoặc đổi thiết bị, số dư sẽ mất và chúng tôi không thể khôi phục.',
      'Bot, gian lận hoặc nhiều hồ sơ cho một người sẽ làm mất hiệu lực xu và các lần rút.'
    ],
    sections: [
      ['1. Nhà cung cấp dịch vụ', [
        'WatchEarn do {name} cung cấp, mã số thuế {taxId}, địa chỉ {address}{registry}. Email liên hệ: {email}. Thông tin này được cung cấp theo Điều 10 Luật 34/2002 của Tây Ban Nha về dịch vụ xã hội thông tin và thương mại điện tử (LSSI).'
      ]],
      ['2. Đối tượng và chấp nhận', [
        'Các điều khoản này điều chỉnh việc sử dụng WatchEarn: một dịch vụ miễn phí, nơi bạn xem video ngắn, hoàn thành nhiệm vụ và trò chơi, tích lũy xu có thể quy đổi thành tiền theo mục 6. Không cần mua hàng, thanh toán hay đăng ký.',
        'Dịch vụ có thể có lỗi, gián đoạn và thay đổi theo mục 9. Chúng tôi không đảm bảo dịch vụ luôn sẵn sàng.',
        'Để chấp nhận các điều khoản này, hãy nhấn «Tôi đã đọc và đồng ý». Khi chấp nhận, bạn xác nhận đáp ứng các yêu cầu tại mục 3. Nếu không chấp nhận, video sẽ không phát và bạn không nhận được phần thưởng. Chúng tôi lưu phiên bản đã chấp nhận và ngày chấp nhận trong trình duyệt của bạn.',
        'Chúng tôi không lưu trữ bản sao riêng về việc chấp nhận của bạn: các điều khoản này luôn có trên trang [Điều khoản sử dụng](terms.html), nơi bạn có thể lưu hoặc in (Điều 27 LSSI). Điều khoản có nhiều ngôn ngữ; nếu bản dịch có khác biệt, bản tiếng Tây Ban Nha được ưu tiên áp dụng.'
      ]],
      ['3. Ai có thể tham gia', [
        'Bạn có thể dùng WatchEarn nếu từ {age} tuổi trở lên, có năng lực giao kết hợp đồng và cư trú tại {countries}. Mỗi người chỉ được tham gia bằng một hồ sơ, tức là một trình duyệt trên một thiết bị. Số dư ở các trình duyệt hoặc thiết bị khác nhau không thể cộng dồn, chuyển nhượng hay quy đổi cùng nhau.'
      ]],
      ['4. Cách nhận xu', [
        '**Xem video.** Thời gian phát thực tế của lần xem đầu tiên ở mỗi lần video xuất hiện được tính, cộng theo các khoảng từ 3,5 đến 6,5 giây. Thời gian tạm dừng, ứng dụng chạy nền, tua và tự động phát lại không được tính.',
        '**Thưởng và trò chơi.** Cứ 2 đến 4 video có thể xuất hiện một phần thưởng tùy chọn: rương (ba giải có thể nhận, mỗi giải có xác suất 1 trên 3), thưởng xu, quà hoặc hệ số nhân (×2 55%, ×3 25%, ×4 12%, ×5 6%, ×10 1,8% và ×20 0,2%). Ngoài ra có thưởng hằng ngày, năm nhiệm vụ làm mới mỗi giờ và bốn trò chơi, mỗi trò ba lượt mỗi ngày; vòng quay và thẻ cào có sáu giải với xác suất như nhau.',
        'Mọi thứ đều miễn phí: không có cá cược, mua hàng hay tham gia trả phí. Kết quả ngẫu nhiên được tạo trên thiết bị của bạn bằng bộ tạo số ngẫu nhiên mật mã của thiết bị. Ứng dụng Android có quảng cáo và video có thưởng không bắt buộc (mục 16); phiên bản web không có quảng cáo.'
      ]],
      ['5. Giá trị của xu và phần thưởng giảm dần', [
        'Xu không phải là tiền, tiền điện tử hay khoản tiền gửi: không sinh lãi, không thể chuyển nhượng hay bán và chỉ được quy đổi theo mục 6. Giá trị quy đổi phụ thuộc vào đồng tiền của quốc gia bạn cư trú: lần rút đầu tiên, tức {c50} xu, tương đương {goal}, và {c1} xu tương đương {rate}. Số tiền hiển thị trong ứng dụng là giá trị tương đương đó, không phải số dư ngân hàng. Giá trị lần rút đầu tiên theo từng đồng tiền:',
        '{currencies}',
        '**Phần thưởng giảm dần khi số dư của bạn tăng:**',
        '{rules}',
        '**Thời gian ước tính.** Theo mô phỏng của chúng tôi về hệ thống hiện tại, để đạt lần rút đầu tiên cần khoảng {range} giờ sử dụng thực tế, dù có hay không có thưởng và trò chơi. Chỉ xem video: nửa mục tiêu trong chưa đến {m25} phút, 80% trong khoảng {h40} giờ, 90% trong khoảng {h45} giờ, 98% trong khoảng {h49} giờ và toàn bộ mục tiêu trong khoảng {h50} giờ. Với ba giờ mỗi ngày, mất hơn hai năm. Đây là ước tính, không phải cam kết, và WatchEarn không phải là việc làm hay nguồn thu nhập.'
      ]],
      ['6. Rút tiền', [
        'Bạn có thể yêu cầu rút {amounts} khi số dư đạt mức đó. Chúng tôi thanh toán qua PayPal hoặc, tại Tây Ban Nha, qua Bizum vào tài khoản đứng tên bạn.',
        'Khi bạn xác nhận rút tiền trong Ví, xu sẽ bị trừ và ứng dụng email mở ra với yêu cầu cùng mã của nó. Hãy gửi đến {email} kèm thông tin tài khoản nhận tiền và tên chủ tài khoản. Nếu chưa gửi được, bạn có thể gửi lại hoặc sao chép từ Ví.',
        'Chúng tôi kiểm tra từng yêu cầu và có thể đề nghị thông tin hợp lý để xác minh danh tính, tuổi, nơi cư trú và quyền sở hữu tài khoản. Yêu cầu hợp lệ được thanh toán trong tối đa {payoutDays} ngày theo lịch kể từ khi nhận đủ yêu cầu. Chúng tôi không thu phí; nhà cung cấp thanh toán của bạn có thể thu phí riêng.',
        'Nếu một yêu cầu vi phạm các điều khoản này, chúng tôi sẽ thông báo qua email kèm lý do và bạn có thể phản hồi. Nếu vấn đề có thể khắc phục, chúng tôi sẽ hướng dẫn cách làm mà bạn không mất số tiền.',
        'Số tiền nhận được có thể phát sinh nghĩa vụ thuế và bạn chịu trách nhiệm kê khai. Nếu luật buộc chúng tôi khấu trừ thuế hoặc báo cáo cho cơ quan thuế, chúng tôi sẽ thực hiện và thông báo cho bạn.'
      ]],
      ['7. Sử dụng đúng cách và phòng chống gian lận', [
        'Không được kiếm xu bằng bot, script, trình giả lập hay bất kỳ hình thức tự động hóa nào; can thiệp vào bộ nhớ, mã nguồn, đồng hồ thiết bị hoặc yêu cầu của ứng dụng; lợi dụng lỗi; dùng nhiều hồ sơ để nhân phần thưởng; hay bán hoặc chuyển nhượng xu hoặc hồ sơ.',
        'Nếu phát hiện các hành vi này, chúng tôi có thể hủy xu nhận được không chính đáng, từ chối các lần rút liên quan và loại bạn khỏi dịch vụ, một cách tương xứng và báo lý do khi có thể. Chúng tôi cũng có thể điều chỉnh số tiền được cộng do lỗi kỹ thuật rõ ràng.'
      ]],
      ['8. Nội dung và sở hữu trí tuệ', [
        'Video thuộc về người sáng tạo và chủ sở hữu quyền; WatchEarn hiển thị tên người sáng tạo và liên kết đến bản gốc. Bạn không nhận được quyền nào đối với chúng: bạn chỉ có thể xem trong ứng dụng, cho mục đích cá nhân. Liên kết đến YouTube và các trang khác dẫn tới dịch vụ của bên thứ ba có điều khoản riêng.',
        'Nếu bạn là chủ sở hữu quyền và cho rằng một nội dung bị sử dụng trái phép, hãy viết cho chúng tôi tại {email}, nêu rõ nội dung, quyền của bạn và thông tin liên hệ. Chúng tôi sẽ nhanh chóng gỡ bỏ khi thực sự biết việc sử dụng là trái pháp luật.',
        'Tên, thiết kế và mã nguồn của WatchEarn thuộc về nhà cung cấp, trừ tài nguyên của bên thứ ba có giấy phép riêng, như phông chữ DM Sans và Manrope (SIL Open Font License).'
      ]],
      ['9. Thay đổi và đóng dịch vụ', [
        'Chúng tôi có thể thay đổi dịch vụ, phần thưởng hoặc các điều khoản này vì lý do chính đáng (pháp lý, kỹ thuật, bảo mật, phòng chống gian lận, tính bền vững hoặc phát triển dịch vụ), thông báo trong ứng dụng ít nhất 15 ngày trước, trừ các thay đổi khẩn cấp do luật hoặc an ninh yêu cầu. Để tiếp tục dùng ứng dụng, bạn phải chấp nhận phiên bản mới; nếu không, bạn có thể ngừng sử dụng và yêu cầu các lần rút mà bạn đã có quyền. Xu đã nhận vẫn giữ giá trị quy đổi.',
        'Nếu đóng dịch vụ, chúng tôi sẽ thông báo ít nhất {noticeDays} ngày trước, và bạn có thể yêu cầu rút số dư đạt ngưỡng trong vòng {claimDays} ngày sau khi đóng. **Số dư dưới mức rút đầu tiên không thể quy đổi và sẽ hết hiệu lực khi dịch vụ đóng.**'
      ]],
      ['10. Trách nhiệm', [
        'Chúng tôi chịu trách nhiệm về thiệt hại do cố ý hoặc lỗi nghiêm trọng và những thiệt hại mà pháp luật không cho phép loại trừ trách nhiệm. Chúng tôi không chịu trách nhiệm về gián đoạn ngoài tầm kiểm soát hoặc việc mất số dư do xóa dữ liệu trình duyệt, duyệt web riêng tư hoặc đổi thiết bị. Không điều gì trong các điều khoản này hạn chế quyền của bạn với tư cách người tiêu dùng.'
      ]],
      ['11. Thời hạn, ngừng sử dụng và rút khỏi hợp đồng', [
        'Hợp đồng có hiệu lực khi bạn còn sử dụng dịch vụ và tối đa đến khi dịch vụ đóng. Bạn có thể ngừng dùng WatchEarn bất cứ lúc nào, miễn phí, và xóa toàn bộ dữ liệu tại Cài đặt → Xóa dữ liệu của tôi. Bạn cũng có thể rút khỏi hợp đồng trong 14 ngày theo lịch theo Điều 102 Luật chung của Tây Ban Nha về bảo vệ người tiêu dùng và người sử dụng mà không cần nêu lý do: chỉ cần ngừng dùng ứng dụng và, nếu muốn, báo cho chúng tôi. Chúng tôi có thể chấm dứt hợp đồng nếu bạn vi phạm các điều khoản này và sẽ nêu lý do.'
      ]],
      ['12. Quyền riêng tư', [
        'Việc xử lý dữ liệu của bạn được mô tả trong [Chính sách quyền riêng tư](privacy.html).'
      ]],
      ['13. Hỗ trợ người dùng và khiếu nại', [
        'Bạn có thể gửi câu hỏi và khiếu nại đến {email}. Chúng tôi sẽ trả lời sớm nhất có thể và chậm nhất trong một tháng. {adr} Bạn cũng có thể liên hệ cơ quan bảo vệ người tiêu dùng nơi bạn cư trú hoặc yêu cầu trọng tài tiêu dùng, vốn là tự nguyện với cả hai bên.'
      ]],
      ['14. Luật áp dụng và thẩm quyền xét xử', [
        'Các điều khoản này chịu sự điều chỉnh của pháp luật Tây Ban Nha. Nếu là người tiêu dùng, bạn có thể khởi kiện tại tòa án nơi bạn cư trú và vẫn được bảo vệ bởi các quy định bắt buộc của quốc gia bạn cư trú.'
      ]],
      ['15. Vô hiệu từng phần', [
        'Nếu một điều khoản bị tuyên vô hiệu, các điều khoản khác vẫn có hiệu lực và điều khoản đó được thay bằng quy định pháp luật áp dụng.'
      ]],
      ['16. Ứng dụng Android và quảng cáo', [
        'WatchEarn cũng được cung cấp dưới dạng ứng dụng Android, với cùng dịch vụ và cùng các điều khoản này. Trong ứng dụng, mọi đề cập đến trình duyệt được hiểu là đề cập đến ứng dụng: số dư của bạn được lưu trong ứng dụng và sẽ mất nếu bạn xóa dữ liệu hoặc gỡ ứng dụng, và mỗi lần cài đặt trên một thiết bị được tính là một hồ sơ (mục 3).',
        'Ứng dụng hiển thị quảng cáo do AppLovin và các đối tác dàn xếp của AppLovin cung cấp: **quảng cáo toàn màn hình** giữa các video, nhiều nhất là sau mỗi vài video và không có xu, và **video có thưởng** không bắt buộc mà bạn tự chọn xem để nhận thêm xu trong Phần thưởng (tối đa {adsPerDay} lần mỗi ngày) hoặc nhân đôi phần thưởng rương hay thưởng xu. Phần thưởng đã nhân đôi cũng không vượt quá {max} xu.',
        'Xu từ video có thưởng chỉ được cộng nếu AppLovin xác nhận bạn đã xem hết. Nếu bạn đóng sớm hoặc video bị lỗi, sẽ không có thưởng và phần thưởng đang chờ được giữ nguyên, không nhân đôi. Chúng tôi không bảo đảm lúc nào cũng có quảng cáo. Việc nhấn vào quảng cáo là tự nguyện và không mang lại xu; tạo lượt xem hoặc lượt nhấp giả bị cấm (mục 7). Quảng cáo và những gì được quảng cáo thuộc trách nhiệm của nhà quảng cáo.',
        'Quảng cáo cá nhân hóa chỉ được hiển thị khi có sự đồng ý của bạn, và bạn có thể thay đổi trong Cài đặt; cách xử lý dữ liệu của bạn được giải thích trong [Chính sách quyền riêng tư](privacy.html).'
      ]]
    ]
  },
  privacy: {
    title: 'Chính sách quyền riêng tư',
    summaryTitle: '**Điều cốt lõi**',
    intro: 'WatchEarn (“chúng tôi”) cam kết bảo vệ quyền riêng tư của bạn. Chính sách này giải thích chúng tôi thu thập thông tin gì, sử dụng và bảo vệ thông tin đó như thế nào khi bạn dùng WatchEarn, bao gồm các dịch vụ bên thứ ba được tích hợp trong ứng dụng.',
    summary: [
      'Không cần đăng ký hay tài khoản: tiến độ của bạn được lưu trên thiết bị của bạn và chúng tôi không nhận được.',
      'Chúng tôi chỉ xử lý dữ liệu cá nhân nếu bạn liên hệ hoặc yêu cầu rút tiền.',
      'Trang web không có quảng cáo, phân tích hay cookie theo dõi. Ứng dụng Android hiển thị quảng cáo của AppLovin, bên nhận dữ liệu từ thiết bị của bạn; quảng cáo cá nhân hóa chỉ khi bạn đồng ý.',
      'Bạn có thể xóa dữ liệu tại Cài đặt → Xóa dữ liệu của tôi và thực hiện các quyền của mình bằng cách viết cho chúng tôi.'
    ],
    sections: [
      ['1. Thông tin chúng tôi thu thập', [
        '**1.1 Dữ liệu cá nhân.** Nếu bạn gửi yêu cầu rút tiền hoặc viết cho chúng tôi, chúng tôi xử lý email, tên, thông tin tài khoản nhận tiền (số Bizum hoặc email PayPal), quốc gia cư trú, mã, số tiền và ngày của yêu cầu cùng nội dung tin nhắn. Khi cần kiểm tra điều kiện, chúng tôi có thể yêu cầu thông tin chứng minh danh tính, tuổi và nơi cư trú, chỉ ở mức cần thiết.',
        '**1.2 Dữ liệu sử dụng.** Ứng dụng lưu trong bộ nhớ cục bộ của trình duyệt số dư, giao dịch, nhiệm vụ, trò chơi, video đã lưu, thứ tự bảng tin, thời gian xem, giải thưởng đang chờ, yêu cầu rút tiền, cài đặt và ngôn ngữ, cùng phiên bản và ngày chấp nhận điều khoản, trong các bản ghi `watchearn-v1`, `watchearn-terms` và `watchearn-language`. Dữ liệu này không được gửi đến máy chủ của chúng tôi và chúng tôi không truy cập được.',
        '**1.3 Dữ liệu thiết bị.** Trong ứng dụng Android, SDK quảng cáo của AppLovin thu thập dữ liệu kỹ thuật từ thiết bị của bạn, như mã nhận dạng quảng cáo, địa chỉ IP, kiểu máy và hệ điều hành (mục 3). Nếu bạn truy cập trang web WatchEarn, nhà cung cấp dịch vụ lưu trữ ({hosting}) nhận địa chỉ IP, trang được yêu cầu, ngày giờ và dữ liệu kỹ thuật của trình duyệt để phục vụ và bảo vệ trang web. Tiền tệ và ngôn ngữ được chọn theo múi giờ và ngôn ngữ của thiết bị, không gửi cho ai và không dùng vị trí của bạn.',
        '**1.4 Liên kết.** Nếu mở video gốc, bạn sẽ đến YouTube, nơi dữ liệu được xử lý theo chính sách riêng của họ. Nếu dùng Chia sẻ, tiêu đề và liên kết được chuyển cho tính năng chia sẻ của thiết bị.',
        'Chúng tôi không thu thập dữ liệu nhạy cảm, như nguồn gốc dân tộc, niềm tin tôn giáo, sức khỏe hay dữ liệu sinh trắc học, và đề nghị bạn không gửi những dữ liệu đó cho chúng tôi.',
        '**Lưu trữ cục bộ và cookie.** WatchEarn không dùng cookie. Các bản ghi cục bộ là thực sự cần thiết để cung cấp dịch vụ bạn yêu cầu nên không cần sự đồng ý (điều 22.2 LSSI). Trang web không có phân tích, quảng cáo hay theo dõi của bên thứ ba. Trong ứng dụng Android, SDK của AppLovin lưu và đọc thông tin trên thiết bị của bạn để hiển thị quảng cáo (mục 3).'
      ]],
      ['2. Cách chúng tôi sử dụng thông tin của bạn', [
        [
          'Cung cấp dịch vụ (video, phần thưởng, cài đặt và chấp nhận điều khoản): thực hiện hợp đồng (Điều 6(1)(b) GDPR).',
          'Xử lý, xác minh và thanh toán các lần rút: thực hiện hợp đồng (Điều 6(1)(b) GDPR).',
          'Phòng chống gian lận: lợi ích hợp pháp trong việc bảo vệ chương trình và người tham gia (Điều 6(1)(f) GDPR).',
          'Trả lời câu hỏi, khiếu nại và yêu cầu thực hiện quyền: thực hiện hợp đồng và nghĩa vụ pháp lý (Điều 6(1)(b) và 6(1)(c) GDPR).',
          'Thực hiện nghĩa vụ kế toán và thuế đối với các khoản thanh toán: nghĩa vụ pháp lý (Điều 6(1)(c) GDPR).',
          'Vận hành trang web an toàn: lợi ích hợp pháp (Điều 6(1)(f) GDPR).'
        ],
        'Chúng tôi không lập hồ sơ người dùng hay đưa ra quyết định hoàn toàn tự động: mỗi yêu cầu rút tiền đều do một người xem xét. Trong ứng dụng Android, AppLovin và các đối tác chỉ cá nhân hóa quảng cáo khi bạn đồng ý (mục 3).'
      ]],
      ['3. Dịch vụ và SDK của bên thứ ba', [
        '**Ai.** Ứng dụng Android tích hợp SDK AppLovin MAX của AppLovin Corporation, phân phối quảng cáo trực tiếp hoặc qua các mạng quảng cáo trong hệ thống dàn xếp. AppLovin và các mạng này xử lý dữ liệu với tư cách bên kiểm soát độc lập theo chính sách riêng của họ ([chính sách quyền riêng tư của AppLovin](https://legal.applovin.com/privacy/)). Chúng tôi không nhận dữ liệu đó ở dạng có thể nhận diện bạn; chỉ nhận báo cáo tổng hợp về quảng cáo và doanh thu.',
        '**Dữ liệu nào.** Mã quảng cáo của thiết bị (trừ khi bạn đã xóa trong cài đặt Android), địa chỉ IP, kiểu máy và hệ điều hành, ngôn ngữ, múi giờ, nhà mạng và loại kết nối, ứng dụng và các quảng cáo được hiển thị, cùng tương tác của bạn với chúng (lượt xem, lượt nhấp và phần thưởng).',
        '**Mục đích và cơ sở pháp lý.** Hiển thị quảng cáo không cá nhân hóa, giới hạn tần suất, đo lường, cộng phần thưởng và ngăn gian lận quảng cáo: lợi ích hợp pháp trong việc tài trợ và bảo vệ dịch vụ miễn phí (điều 6.1.f GDPR). Hiển thị và đo lường quảng cáo cá nhân hóa theo sở thích của bạn: chỉ khi bạn đồng ý (điều 6.1.a GDPR).',
        '**Lựa chọn của bạn.** Lần đầu mở ứng dụng, chúng tôi hỏi bạn có đồng ý nhận quảng cáo cá nhân hóa không; từ chối cũng dễ như đồng ý và không ngăn bạn dùng ứng dụng hay nhận thưởng. Bạn có thể rút lại hoặc đưa ra sự đồng ý bất cứ lúc nào trong Cài đặt → Quảng cáo cá nhân hóa, và đặt lại hoặc xóa mã quảng cáo trong cài đặt Android. Bạn cũng có thể phản đối việc xử lý dựa trên lợi ích hợp pháp bằng cách viết thư cho chúng tôi.',
        '**Chuyển giao và lưu giữ.** AppLovin và một số mạng xử lý dữ liệu tại Hoa Kỳ và các quốc gia khác ngoài Khu vực Kinh tế Châu Âu, với các biện pháp bảo vệ theo chương V GDPR (như Khung bảo mật dữ liệu EU-Hoa Kỳ hoặc các điều khoản hợp đồng mẫu). Họ lưu giữ dữ liệu trong thời hạn nêu tại chính sách của mình.',
        'Chúng tôi khuyên bạn đọc chính sách quyền riêng tư của các bên thứ ba này:',
        [
          'AppLovin (quảng cáo, SDK AppLovin MAX): [chính sách quyền riêng tư](https://legal.applovin.com/privacy/)',
          'Google (Google Play, nơi bạn tải ứng dụng, và mã nhận dạng quảng cáo Android; YouTube, nếu bạn mở video gốc): [chính sách quyền riêng tư](https://policies.google.com/privacy)',
          'GitHub (lưu trữ trang web): [tuyên bố về quyền riêng tư](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement)'
        ],
        'Chúng tôi không tích hợp SDK phân tích, phân bổ hay quảng cáo nào khác. Nếu thêm, chúng tôi sẽ đưa vào danh sách này trước khi bật.'
      ]],
      ['4. Chúng tôi chia sẻ thông tin của bạn với ai', [
        'Nhà cung cấp dịch vụ lưu trữ và email của bên kiểm soát, với tư cách bên xử lý; PayPal hoặc ngân hàng xử lý thanh toán, với tư cách bên kiểm soát độc lập; trong ứng dụng Android, AppLovin và các mạng quảng cáo trong hệ thống dàn xếp của AppLovin (mục 3); và cơ quan chức năng khi pháp luật yêu cầu. Chúng tôi không bán dữ liệu của bạn.',
        'Chúng tôi cũng có thể tiết lộ dữ liệu khi pháp luật, lệnh của tòa án hoặc cơ quan có thẩm quyền yêu cầu; để bảo vệ quyền của chúng tôi, người dùng hoặc bên thứ ba trước gian lận hay hoạt động bất hợp pháp; và, nếu dịch vụ được chuyển cho chủ sở hữu khác, cho chủ sở hữu mới, người phải tuân thủ chính sách này. Chúng tôi sẽ báo cho bạn trước khi chuyển giao.',
        '**Chuyển dữ liệu quốc tế.** Nếu nhà cung cấp nào xử lý dữ liệu ngoài Khu vực Kinh tế Châu Âu, việc này sẽ có các biện pháp bảo vệ theo Chương V GDPR, như quyết định về mức độ bảo vệ tương xứng hoặc các điều khoản hợp đồng mẫu của Ủy ban Châu Âu.'
      ]],
      ['5. Bảo mật và thời gian lưu trữ', [
        'Các trang web của WatchEarn được phục vụ qua HTTPS. Email chứa yêu cầu rút tiền và thông tin thanh toán được lưu trong hộp thư được bảo vệ, chỉ chủ sở hữu dịch vụ truy cập được, và chỉ dùng để xử lý thanh toán. Dữ liệu ứng dụng không được mã hóa trên thiết bị của bạn: bất kỳ ai truy cập được thiết bị đều có thể xem hoặc sửa. Không hệ thống nào đảm bảo an toàn tuyệt đối.',
        '**Thời gian lưu trữ.** Chúng tôi chỉ lưu mỗi dữ liệu trong thời gian cần thiết:',
        [
          'Dữ liệu trên thiết bị: cho đến khi bạn xóa.',
          'Yêu cầu rút tiền và thanh toán: trong thời gian cần thiết để xử lý, sau đó bị khóa trong thời hạn luật định (thường là 4 năm về thuế và 6 năm về kế toán).',
          'Câu hỏi và khiếu nại: cho đến khi giải quyết xong, sau đó trong thời hạn có thể phát sinh khiếu kiện.',
          'Nhật ký kỹ thuật: thời hạn do nhà cung cấp lưu trữ áp dụng.'
        ]
      ]],
      ['6. Người chưa thành niên', [
        'WatchEarn chỉ dành cho người từ {age} tuổi trở lên. Nếu biết một yêu cầu đến từ người chưa thành niên, chúng tôi sẽ từ chối và xóa dữ liệu của họ, trừ dữ liệu phải lưu theo luật.'
      ]],
      ['7. Quyền và lựa chọn của bạn', [
        'Bạn có thể dùng WatchEarn mà không cung cấp bất kỳ dữ liệu cá nhân nào: chúng tôi chỉ cần khi bạn viết thư cho chúng tôi hoặc yêu cầu rút tiền.',
        'Bạn có thể thực hiện quyền truy cập, chỉnh sửa, xóa, phản đối, hạn chế xử lý và di chuyển dữ liệu bằng cách viết tới {email}. Chúng tôi trả lời trong một tháng, có thể gia hạn thêm hai tháng với trường hợp phức tạp. Bạn có thể tự xóa dữ liệu trên thiết bị tại Cài đặt → Xóa dữ liệu của tôi. Bạn cũng có thể khiếu nại với [Cơ quan Bảo vệ Dữ liệu Tây Ban Nha (AEPD)](https://www.aepd.es/) hoặc cơ quan bảo vệ dữ liệu tại quốc gia của bạn.'
      ]],
      ['8. Thay đổi', [
        'Nếu thay đổi chính sách này, chúng tôi sẽ cập nhật phiên bản và ngày, đồng thời thông báo các thay đổi quan trọng trong ứng dụng. Nếu một hoạt động xử lý mới cần sự đồng ý của bạn, chúng tôi sẽ xin trước khi kích hoạt.'
      ]],
      ['9. Liên hệ', [
        '**Bên kiểm soát dữ liệu.** {name}, mã số thuế {taxId}, địa chỉ {address}{registry}. Email liên hệ và quyền riêng tư: {email}.',
        'Nếu bạn có câu hỏi, thắc mắc hoặc yêu cầu về chính sách này hay việc xử lý dữ liệu của bạn, hãy viết cho chúng tôi tại {email}.'
      ]]
    ]
  }
});
