const quizData = [
    {
        id: 1,
        question: "Mô tả nào về quá trình Site survey là sai?",
        answers: [
            "a. Khảo sát để tìm vị trí tối ưu đặt các Access Point và những máy trạm không dây",
            "b. Sau khi tìm ra vị trí tối ưu cho các Access Point, bước tiếp theo tiếp tục khảo sát để tìm vị trí đặt máy tính cho nhân viên và các thiết bị không dây khác",
            "c. Thử đặt Access Point tại các vị trí dự kiến, sau đó đo cường độ tín hiệu tại tất cả mọi nơi để tìm ra những điểm không có tín hiệu hoặc tín hiệu bị yếu",
            "d. Khảo sát để tìm vị trí tối ưu đặt Access Point"
        ],
        correctIndex: 1
    },
    {
        id: 2,
        image: "2.png",
        question: "Hình sau mô tả vấn đề nào của môi trường truyền không dây?",
        answers: [
            "a. Exposed station problem (Trạm lộ)",
            "b. Roaming (Chuyển vùng)",
            "c. Hidden station problem (Trạm ẩn)",
            "d. Vấn đề khi thực hiện Site survey"
        ],
        correctIndex: 0 
    },
    {
        id: 3,
        question: "Mệnh đề nào mô tả sai về họ chuẩn 802.11?",
        answers: [
            "a. Chuẩn 802.11n ra đời sau chuẩn 802.11g và có tốc độ truyền cao hơn",
            "b. Công nghệ SU-MIMO cho phép Access Point giao tiếp đồng thời với nhiều máy trạm",
            "c. Chuẩn 802.11n sử dụng tần số 2,4 GHz hoặc 5GHz",
            "d. Công nghệ MIMO cho phép dùng nhiều ăng ten thu và ăng ten phát để truyền đồng thời nhiều luồng dữ liệu"
        ],
        correctIndex: 1
    },
    {
        id: 4,
        image: "4.png",
        question: "Mô tả nào về giải pháp kết nối không dây đã được áp dụng trong hình (Customer Application Example) là sai?",
        answers: [
            "a. Là giải pháp hỗn hợp áp dụng cả kết nối hữu tuyến và vô tuyển. Vì vướng đường ô tô nên phải lắp thiết bị thu phát không dây EZ-Bridge LT2 cho tòa nhà A và H1, còn những tòa nhà còn lại (H2, B,C) được nối với tòa nhà chính H1 bằng cáp UTP Cat 5",
            "b. Vì vướng đường ô tô nên phải lắp thiết bị thu phát không dây EZ-Bridge LT2 cho tòa nhà A và H1",
            "c. Nhà H1 lắp hai loại thiết bị thu phát không dây: EZ-GO2 và EZ-Bridge LT2",
            "d. Lắp thiết bị thu phát không dây EZ-GO2 cho các tòa nhà H2, B, C để kết nối với H1"
        ],
        correctIndex: 0
    },
    {
        id: 5,
        question: "Những trường hợp thực tế nào không phù hợp để áp dụng môi trường truyền Bluetooth?",
        answers: [
            "a. Gửi các mẫu quảng cáo nhỏ từ các pa-nô quảng cáo tới các thiết bị cầm tay của người qua đường",
            "b. Giao tiếp giữa các thiết bị đo, thiết bị định vị dùng GPS, thiết bị y tế, máy quét mã vạch, và các thiết bị điều khiển giao thông",
            "c. Kết nối với các thiết bị điều khiển từ xa dành cho thiết bị điện tử gia dụng, ví dụ như thiết bị điều khiển từ xa của tivi",
            "d. Cung cấp Internet làm việc hàng ngày cho Desktop PC"
        ],
        correctIndex: 3
    },
    {
        id: 6,
        question: "Mô tả nào về chuẩn 802.11ax là sai?",
        answers: [
            "a. Áp dụng công nghệ MU-MIMO nâng cấp, cho phép 8 luồng cho cả chiều upload và download",
            "b. Ra đời sau 802.11ac",
            "c. Còn gọi là chuẩn WiFi 6 (Wifi thế hệ 6)",
            "d. Thông lượng tối đa 4Gbps"
        ],
        correctIndex: 3
    },
    {
        id: 7,
        question: "Mô tả nào về dải tần số ISM là sai?",
        answers: [
            "a. Thiết bị sử dụng tần số ISM phải chấp nhận có thể bị nhiễu từ thiết bị được cơ quan quản lý cho phép hoạt động",
            "b. Ví dụ về thiết bị sử dụng dải tần ISM là điện thoại cố định không dây sử dụng trong phạm vi gia đình",
            "c. Thiết bị sử dụng tần số ISM có quyền khởi kiện nếu bị nhiễu từ những thiết bị khác",
            "d. Người sử dụng không phải xin giấy phép sử dụng tần số do Cục tần số vô tuyến điện cấp"
        ],
        correctIndex: 2
    },
    {
        id: 8,
        question: "Mô tả nào về hình thức truyền qua vệ tinh địa tĩnh là sai?",
        answers: [
            "a. Thời gian truyền từ trạm phát tới trạm thu không phụ thuộc vào vị trí của hai trạm này",
            "b. Khoảng cách từ vệ tinh tới trạm phát và trạm thu là rất lớn so với khoảng cách giữa hai trạm",
            "c. Thời gian truyền từ trạm phát tới trạm thu là hằng số vì vị trí của trạm phát là không thay đổi",
            "d. Vệ tinh đứng yên so với mặt đất"
        ],
        correctIndex: 0
    },
    {
        id: 9,
        question: "Mệnh đề nào mô tả sai về họ chuẩn 802.11?",
        answers: [
            "a. Chuẩn 802.11g là sự kết hợp các thông số kỹ thuật của hai chuẩn a và b trước đó",
            "b. Công nghệ MIMO dùng nhiều ăng-ten thu phát làm tăng tính ổn định của đường truyền, giúp khả năng chịu nhiễu tốt hơn",
            "c. Tần số 5 GHz thường bị can nhiễu bởi các thiết bị điện tử gia dụng",
            "d. Công nghệ MIMO dùng nhiều ăng-ten thu phát giúp vùng phủ sóng rộng hơn, khắc phục các vật cản"
        ],
        correctIndex: 2
    },
    {
        id: 10,
        image: "10.png",
        question: "Mệnh đề nào mô tả sai về vấn đề Trạm lộ?",
        answers: [
            "a. Sóng vô tuyến của B không cản trở việc thu tín hiệu của D",
            "b. Vì hiểu nhầm là đường truyền bận nên C không phát tin tới D",
            "c. Việc B truyền tin cho A không ảnh hưởng tới việc C phát tin cho D",
            "d. Trong khi C đang phát tới D thì B bắt đầu muốn truyền cho A"
        ],
        correctIndex: 1
    },
    {
        id: 11,
        question: "Sau khi máy bay rơi, hộp đen phát tín hiệu bằng sóng tần số thấp vì lý do gì?",
        answers: [
            "a. Tín hiệu có khả năng vượt qua vật cản",
            "b. Người dân ở gần đó có thể thu được tín hiệu qua radio",
            "c. Đạt được thông lượng cao",
            "d. Đạt được băng thông rộng"
        ],
        correctIndex: 0
    },
    {
        id: 12,
        question: "Kiến trúc 802.11 tập trung vào 2 tầng nào của mô hình mạng OSI?",
        answers: [
            "a. Tầng Datalink và tầng Transport",
            "b. Tầng Vật lý và tầng Network",
            "c. Tầng Liên kết dữ liệu và tầng Giao vận",
            "d. Tầng Vật lý và tầng con Truy cập đường truyền (MAC) của tầng Datalink"
        ],
        correctIndex: 3
    },
    {
        id: 13,
        question: "Những tín hiệu hoặc ứng dụng nào sau đây không sử dụng sóng vô tuyến tần số thấp, dưới 30 MHz?",
        answers: [
            "a. Hệ thống mạng 4G",
            "b. Tín hiệu được phản xạ bởi tầng điện ly để vượt khoảng cách hàng ngàn km",
            "c. Tín hiệu phát đi từ hộp đen máy bay",
            "d. Truyền tín hiệu vì mục đích cấp cứu, tìm kiếm cứu nạn trên biển"
        ],
        correctIndex: 0
    },
    {
        id: 14,
        image: "14.png",
        question: "Hình sau mô tả vấn đề nào của môi trường truyền không dây?",
        answers: [
            "a. Trạm ẩn",
            "b. Trạm lộ",
            "c. Vấn đề khi thực hiện khảo sát mạng",
            "d. Chuyển vùng"
        ],
        correctIndex: 1
    },
    {
        id: 15,
        question: "Mệnh đề nào mô tả sai về họ chuẩn 802.11?",
        answers: [
            "a. Tín hiệu Infrared dễ dàng xuyên hoặc vòng qua các vật cản",
            "b. Công nghệ MIMO dùng nhiều ăng-ten thu phát làm tăng tính ổn định của đường truyền, giúp khả năng chịu nhiễu tốt hơn",
            "c. Chuẩn 802.11g là sự kết hợp các thông số kỹ thuật của hai chuẩn a và b trước đó",
            "d. Công nghệ MIMO dùng nhiều ăng-ten thu phát giúp vùng phủ sóng rộng hơn, khắc phục các vật cản"
        ],
        correctIndex: 0
    },
    {
        id: 16,
        question: "Mệnh đề nào mô tả sai về vấn đề Trạm ẩn?",
        answers: [
            "a. Việc C phát tin cho D, nếu diễn ra, sẽ không ảnh hưởng tới việc B truyền cho A",
            "b. Vùng phủ sóng của B không chứa D, vì vậy tín hiệu của B không thể gây ra xung đột tại D",
            "c. Sóng vô tuyến từ B cản trở việc thu tin hiệu của D, khiến cho tín hiệu từ C bị xung đột",
            "d. Tín hiệu của B sẽ không gây ra xung đột tại D"
        ],
        correctIndex: 2
    },
    {
        id: 17,
        question: "Chuẩn Wifi nào có thông lượng là 11Mbps, được ban hành gần như đồng thời với chuẩn 802.11a nhưng tốc độ truyền thấp hơn?",
        answers: [
            "a. 802.11 gốc",
            "b. 802.11a",
            "c. 802.11b",
            "d. 802.11g"
        ],
        correctIndex: 2
    },
    {
        id: 18,
        question: "Mô tả nào về những vấn đề của môi trường truyền không dây là sai?",
        answers: [
            "a. Tuy phạm vi phủ sóng Wifi là ba chiều nhưng khi triển khai trong tòa nhà văn phòng thì chỉ còn 2 chiều, hơn nữa tín hiệu bị che bởi các vật cản cố định và không cố định",
            "b. Dù đã được Site survey kỹ càng, khi vận hành hiệu năng thật sự của WLAN vẫn không ổn định vì tuy AP cố định nhưng vị trí và tình trạng hoạt động của các máy trạm và các thiết bị phát sóng gây nhiễu thì biến đổi",
            "c. Vùng phủ sóng của AP càng lớn thì số lượng máy trạm kết nối vào càng nhiều, dẫn đến băng thông dành cho mỗi máy trạm càng nhiều",
            "d. Các AP ở cạnh nhau có thể gây nhiễu lẫn nhau nếu hoạt động ở dải tần số gần nhau"
        ],
        correctIndex: 2
    },
    {
        id: 19,
        question: "Sóng radio thường không được sử dụng theo phương thức truyền nào?",
        answers: [
            "a. Broadcast",
            "b. Quảng bá",
            "c. Bao trùm",
            "d. Point to point"
        ],
        correctIndex: 3
    },
    {
        id: 20,
        question: "Mệnh đề nào mô tả sai về họ chuẩn 802.11?",
        answers: [
            "a. Công nghệ MIMO của chuẩn 802.11g cho phép dùng nhiều ăng ten để Access Point có thể giao tiếp cùng lúc với nhiều máy trạm, làm giảm thời gian chờ",
            "b. Chuẩn 802.11n sử dụng tần số 2,4 GHz hoặc 5GHz",
            "c. Công nghệ MIMO cho phép dùng nhiều ăng ten thu và ăng ten phát để truyền đồng thời nhiều luồng dữ liệu",
            "d. Công nghệ MIMO bắt đầu xuất hiện từ chuẩn 802.11n"
        ],
        correctIndex: 0
    },
    {
        id: 21,
        question: "Mô tả nào về công nghệ truyền Beamforming là sai?",
        answers: [
            "a. Công nghệ truyền Beamforming được triển khai bắt đầu từ chuẩn 802.11ac",
            "b. Công nghệ truyền Beamforming truyền dữ liệu với tốc độ không đổi, không phụ thuộc vào khoảng cách tới trạm thu",
            "c. Với Beamforming trạm thu phát (Access Point) có thể bám theo hưởng của trạm thu khi nó di chuyển",
            "d. Mục đích của beamforming là giảm nhiễu và hỗ trợ công nghệ truyền đa luồng MU-MIMO"
        ],
        correctIndex: 1
    },
    {
        id: 22,
        image: "22.png",
        question: "Sau khi lắp đặt mạng không dây ở trường hợp trong hình (Customer Application Example), cáp mạng sẽ được sử dụng ở đâu?",
        answers: [
            "a. Trong nội bộ các tòa nhà",
            "b. Không ở đâu cả",
            "c. Cáp mạng sẽ được dùng để kết nối H1 với các tòa nhà còn lại, trừ nhà A",
            "d. Cáp mạng sẽ được dùng kết nối H1 với H2"
        ],
        correctIndex: 0
    },
    {
        id: 23,
        image: "23.png",
        question: "Access Point trong hình (trên trang 6) hoạt động ở chế độ nào?",
        answers: [
            "a. Root mode",
            "b. Router mode",
            "c. Bridge mode",
            "d. Repeater mode"
        ],
        correctIndex: 0
    },
    {
        id: 24,
        question: "Trường hợp thực tế nào trong đó kết nối mạng bằng đường truyền hữu tuyến hiệu quả hơn so với đường truyền vô tuyến?",
        answers: [
            "a. Nối mạng cho người dùng đang ở trên các phương tiện giao thông",
            "b. Kết nối hai máy tính cách nhau bởi một xa lộ",
            "c. Cung cấp mạng cho các văn phòng, công sở với các vị trí đặt Desktop PC cố định",
            "d. Cung cấp mạng cho khu vực bị thiên tai, chiến tranh"
        ],
        correctIndex: 2
    },
    {
        id: 25,
        question: "Giao thức bảo mật Wifi tốt nhất và được sử dụng rộng rãi nhất trên các thiết bị Wifi hiện nay là ...",
        answers: [
            "a. AES",
            "b. Open WiFi network",
            "c. WEP",
            "d. WPA3"
        ],
        correctIndex: 3
    },
    {
        id: 26,
        image: "26.png",
        question: "Access Point 1 trong hình (trên trang 7) hoạt động ở chế độ nào?",
        answers: [
            "a. Access Point mode",
            "b. Repeater mode",
            "c. Bridge mode",
            "d. Root mode"
        ],
        correctIndex: 2
    },
    {
        id: 27,
        question: "Trường hợp thực tế nào trong đó kết nối mạng bằng đường truyền hữu tuyến hiệu quả hơn so với đường truyền vô tuyến?",
        answers: [
            "a. Khi lắp mạng LAN cho một công sở đặt tại vị trí gần nguồn nhiễu điện từ lớn, chẳng hạn như cột BTS",
            "b. Cung cấp mạng cho các công trình kiến trúc cổ, hạn chế sửa chữa động chạm",
            "c. Cung cấp mạng cho vùng núi non, hải đảo",
            "d. Cung cấp kết nối mạng tạm thời trong thời gian ngắn"
        ],
        correctIndex: 0
    },
    {
        id: 28,
        question: "Mô tả nào về việc quản lý và sử dụng các tần số vô tuyến là sai?",
        answers: [
            "a. Việc lắp đặt các hệ thống Viba vệ tinh luôn phải có giấy phép sử dụng vì tần số nằm trong miền tần số được quản lý",
            "b. Bất kỳ ai cũng có thể mua và sử dụng những thiết bị thu phát sóng vô tuyến hoạt động ngoài dải tần số ISM mà không cần làm thủ tục đăng ký sử dụng",
            "c. Tần số vô tuyến cũng là một tài nguyên quốc gia. Giấy phép sử dụng một tần số vô tuyến do Cục tần số vô tuyến điện cấp ghi rõ phạm vi địa lý được phép sử dụng dải tần số đó",
            "d. Dù đã trả tiền thuê trước đầy đủ nhưng nếu không sử dụng hoặc sử dụng không đúng mục đích đã đăng ký thì nhà cung cấp dịch vụ mạng vẫn sẽ bị thu hồi giấy phép sử dụng tần số vô tuyến"
        ],
        correctIndex: 1
    },
    {
        id: 29,
        question: "Mô tả nào về tên gọi, chức năng và hoạt động của Access Point là sai?",
        answers: [
            "a. Hoạt động ở chế độ song công (full-duplex) như switch",
            "b. Đôi khi AP còn được gọi một cách không chính xác là Điểm truy cập không dây hay Router không dây",
            "c. Số lượng và vị trí lắp đặt AP cần tính dựa trên số máy trạm đồng thời hòa mạng (số kết nối) và nhu cầu sử dụng mạng của người dùng trong cơ quan",
            "d. Loại AP hỗ trợ 2 băng tần (2,4GHz và 5 GHz) có thể phục vụ được nhiều máy trạm hơn so với loại chỉ hoạt động ở một băng tần (2,4GHz hoặc 5 GHz)"
        ],
        correctIndex: 0
    },
    {
        id: 30,
        question: "Mệnh đề nào mô tả sai về họ chuẩn 802.11?",
        answers: [
            "a. Tần số 5 GHz ít bị can nhiễu bởi các thiết bị điện tử gia dụng",
            "b. Tín hiệu Infrared dễ bị chặn bởi các vật cản",
            "c. Chuẩn 802.11g là sự kết hợp các thông số kỹ thuật của hai chuẩn a và b trước đó",
            "d. Chuẩn 802.11n không tương thích với chuẩn 802.11g trước đó"
        ],
        correctIndex: 3
    },
        {
        id: 31,
        question: "Mô tả nào về những vấn đề của môi trường truyền không dây là sai?",
        answers: [
            "a. Đặt cấu hình AP để vùng phủ sóng hẹp sẽ khắc phục tình trạng thiếu cổng kết nối để phục vụ máy trạm, đồng thời làm tăng băng thông dành cho máy trạm",
            "b. Khi các cell chồng lên nhau, các AP láng giềng không thể dùng cùng tần số nếu không sẽ gây nhiễu lẫn nhau",
            "c. Các mạng LAN không dây ở vị trí cạnh nhau, cùng thuộc một cơ quan nhưng phục vụ các bộ phận phòng ban khác nhau thì phải được gắn Tên SSID (Service Set Identifier) giống nhau",
            "d. Mỗi máy trạm chỉ kết nối với 1 Access Point tại mỗi thời điểm"
        ],
        correctIndex: 2
    },
    {
        id: 32,
        question: "Đâu không phải là mặt trái hay nhược điểm của mạng không dây?",
        answers: [
            "a. Trong một số trường hợp có thể gây hại cho sức khỏe người dùng",
            "b. Phù hợp với các triển lãm ngắn ngày, các khu vực vừa bị ảnh hưởng bởi thiên tai",
            "c. Cường độ tín hiệu bị hạn chế bởi tường, sàn nhà và các vật cản",
            "d. Tín hiệu bị gây nhiễu bởi các thiết bị điện tử gia dụng như lò vi sóng"
        ],
        correctIndex: 1
    },
    {
        id: 33,
        question: "So sánh nào giữa sóng tần số thấp và sóng tần số cao là sai?",
        answers: [
            "a. Sóng tần số thấp thường vượt qua các vật cản tốt hơn sóng tần số cao",
            "b. Sóng tần số thấp thường có tốc độ truyền dữ liệu thấp hơn sóng tần số cao",
            "c. Sóng tần số cao thường có độ suy hao trong không khí thấp hơn, do đó khoảng cách truyền xa hơn sóng tần số thấp",
            "d. Sóng radio có thể phát ngang trên mặt đất (LoS) mà không bị giới hạn bởi đường chân trời"
        ],
        correctIndex: 2
    },
    {
        id: 34,
        image: "34.png",
        question: "Hình vẽ sau đây mô tả về công nghệ wifi nào?",
        answers: [
            "a. OFDM",
            "b. Beamforming",
            "c. BSS Color",
            "d. MIMO"
        ],
        correctIndex: 3
    },
    {
        id: 35,
        question: "Mô tả nào chính xác về tia X?",
        answers: [
            "a. Thuộc loại sóng tần số cỡ THz",
            "b. Thuộc loại sóng tần số cỡ GHz (Viba), có ứng dụng trong mạng không dây",
            "c. Thuộc loại sóng tần số cỡ MHz (Radio), có ứng dụng trong mạng không dây",
            "d. Thuộc loại sóng tần số thấp, dưới 1MHz, không có ứng dụng trong mạng không dây"
        ],
        correctIndex: 0
    },
    {
        id: 36,
        image: "36.png",
        question: "Mệnh đề nào mô tả sai về vấn đề Trạm ẩn?",
        answers: [
            "a. A và C vẫn tiếp tục truyền mà không biết rằng B không thể thu được tín hiệu của chúng",
            "b. A và C vẫn tiếp tục truyền mà không biết rằng tín hiệu của chúng bị xung đột",
            "c. Hai trạm A và C bị ẩn lẫn nhau",
            "d. Khi thấy tín hiệu phát đi bị xung đột, A sẽ dừng lại không phát tiếp nữa và chờ một khoảng thời gian ngẫu nhiên"
        ],
        correctIndex: 3
    },
    {
        id: 37,
        image: "37.png",
        question: "Trước khi sử dụng kết nối không dây giữa hai tòa nhà, hiện trạng của hệ thống mạng trong hình là gì?",
        answers: [
            "a. Cả A và B đều có kết nối vào Internet, luồng thông tin giữa 2 tòa nhà được truyền qua Internet nên chất lượng đường truyền không ổn định",
            "b. Cả A và B đều có kết nối vào Internet, nhưng vướng đường quốc lộ xen giữa nên dữ liệu tử A không truyền được sang B và ngược lại",
            "c. Cước thuê bao Internet gấp hai lần, đồng thời không chuyển được thông tin từ A sang B",
            "d. Chỉ B có kết nối vào Internet, còn A không có"
        ],
        correctIndex: 0
    },
    {
        id: 38,
        question: "Mô tả nào về dải tần số ISM là sai?",
        answers: [
            "a. Viết tắt của Industrial - Scientific - Medical: Công nghiệp - Khoa học - Y tế",
            "b. Người sử dụng không phải xin giấy phép sử dụng tần số do Cục tần số vô tuyến điện cấp",
            "c. Thiết bị sử dụng tần số ISM phải chấp nhận có thể bị nhiễu từ thiết bị được cơ quan quản lý cho phép hoạt động",
            "d. Được sử dụng cho các hệ thống thông tin tầm xa"
        ],
        correctIndex: 3
    },
    {
        id: 39,
        question: "Kiến trúc 802.11 tập trung vào 2 tầng nào của mô hình mạng OSI?",
        answers: [
            "a. Tầng Vật lý và tầng Network",
            "b. Tầng Vật lý và tầng Datalink",
            "c. Tầng Vật lý và tầng Application",
            "d. Tầng Vật lý và tầng Transport"
        ],
        correctIndex: 1
    },
    {
        id: 40,
        question: "Mệnh đề nào mô tả sai về họ chuẩn 802.11?",
        answers: [
            "a. Chuẩn 802.11g là sự kết hợp các thông số kỹ thuật của hai chuẩn a và b trước đó",
            "b. Tần số 5 GHz ít bị can nhiễu bởi các thiết bị điện tử gia dụng",
            "c. Tín hiệu Infrared dễ bị chặn bởi các vật cản",
            "d. Chuẩn 802.11g ra đời sau chuẩn 802.11n và có tốc độ truyền cao hơn"
        ],
        correctIndex: 3
    },
    {
        id: 41,
        question: "Mô tả nào về những vấn đề của môi trường truyền không dây là sai?",
        answers: [
            "a. Khi các cell chồng lên nhau, các AP láng giềng không thể dùng cùng tần số nếu không sẽ gây nhiễu lẫn nhau",
            "b. Đặt cấu hình AP để vùng phủ sóng hẹp sẽ khắc phục tình trạng thiếu cổng kết nối để phục vụ máy trạm, đồng thời làm tăng băng thông dành cho máy trạm",
            "c. Để có thể roaming các máy trạm phải sử dụng cùng một địa chỉ mạng con (subnet IP)",
            "d. Khi giảm công suất phát của AP xuống, vùng phủ sóng bị thu hẹp dẫn tới số máy trạm có thể kết nối vào cũng giảm xuống, dẫn đến băng thông dành cho mỗi máy trạm cũng giảm"
        ],
        correctIndex: 1
    },
    {
        id: 42,
        question: "Mô tả nào về tên gọi, chức năng và hoạt động của Access Point là sai?",
        answers: [
            "a. Tủ tài liệu lớn bằng kim loại, những thiết bị điện gia dụng như lò vi sóng, tivi, thiết bị điều khiển từ xa đều là những vật cản hoặc gây nhiễu cho tín hiệu Wifi",
            "b. Hoạt động ở chế độ song công (full-duplex) như switch",
            "c. Trong khi các chuẩn Wifi tiên tiến như 802.11 ac, 802.11ax không ngừng cải thiện tốc độ truyền dữ liệu thì phạm vi vùng phủ sóng lại hầu như không thay đổi, chỉ vào khoảng 100 foot xung quanh Access Point",
            "d. Loại AP hỗ trợ 2 băng tần (2,4GHz và 5 GHz) có thể phục vụ được nhiều máy trạm hơn so với loại chỉ hoạt động ở một băng tần (2,4GHz hoặc 5 GHz)"
        ],
        correctIndex: 1
    },
    {
        id: 43,
        image: "43.png",
        question: "Access Point trong hình (trên trang 12) hoạt động ở chế độ nào?",
        answers: [
            "a. Router mode",
            "b. Root mode",
            "c. Repeater mode",
            "d. Bridge mode"
        ],
        correctIndex: 1
    },
    {
        id: 44,
        question: "Mô tả nào về dải tần số ISM là sai?",
        answers: [
            "a. Viết tắt của Industrial - Scientific - Medical: Công nghiệp - Khoa học - Y tế",
            "b. Người sử dụng không phải xin giấy phép sử dụng tần số do Cục tần số vô tuyến điện cấp",
            "c. Được sử dụng cho các hệ thống thông tin tầm ngắn",
            "d. Viết tắt của Information - Scientific - Media"
        ],
        correctIndex: 3
    },
    {
        id: 45,
        question: "Những tín hiệu hoặc ứng dụng nào sau đây không sử dụng sóng vô tuyến tần số thấp, dưới 30 MHz?",
        answers: [
            "a. Mạng WLAN",
            "b. Tín hiệu được phản xạ bởi tầng điện ly để vượt khoảng cách hàng ngàn km",
            "c. Truyền tín hiệu vì mục đích cấp cứu, tìm kiếm cứu nạn trên biển",
            "d. Tín hiệu phát đi từ hộp đen máy bay"
        ],
        correctIndex: 0
    },
        {
        id: 46,
        image: "46.png",
        question: "Access Point 2 trong hình (trên trang 13) hoạt động ở chế độ nào?",
        answers: [
            "a. Root mode",
            "b. Repeater mode",
            "c. Bridge mode",
            "d. Access Point mode"
        ],
        correctIndex: 1
    },
    {
        id: 47,
        image: "47.png",
        question: "Access Point 2 trong hình (trên trang 13, sơ đồ nhà) hoạt động ở chế độ nào?",
        answers: [
            "a. Repeater mode",
            "b. Access Point mode",
            "c. Root mode",
            "d. Bridge mode"
        ],
        correctIndex: 3
    },
    {
        id: 48,
        question: "Mệnh đề nào mô tả sai về vấn đề Trạm ẩn?",
        answers: [
            "a. Hai trạm A và C bị ẩn lẫn nhau",
            "b. B không thể thu được tín hiệu của A và C do hiện tượng collision",
            "c. Tín hiệu từ A và C bị xung đột tại B",
            "d. Khi thấy tín hiệu phát đi bị xung đột, C sẽ dừng lại không phát tiếp nữa và chờ một khoảng thời gian ngẫu nhiên"
        ],
        correctIndex: 3
    },
    {
        id: 49,
        question: "So sánh nào giữa sóng tần số thấp và sóng tần số cao là sai?",
        answers: [
            "a. Một số loại sóng tần số cao có thể phản xạ với tầng điện ly để vượt qua đường chân trời",
            "b. Một số loại sóng tần số thấp có khả năng xuyên qua lớp nước biển để liên lạc với tàu ngầm",
            "c. Sóng tần số thấp thường vượt qua các vật cản tốt hơn sóng tần số cao",
            "d. Sóng tần số thấp thường có tốc độ truyền dữ liệu thấp hơn sóng tần số cao"
        ],
        correctIndex: 0
    },
    {
        id: 50,
        question: "Đâu không phải là mặt trái hay nhược điểm của mạng không dây?",
        answers: [
            "a. Dễ dàng bị can thiệp từ xa",
            "b. Dễ dàng bị thu trộm từ xa",
            "c. Băng thông rộng như cáp quang",
            "d. Dễ dàng bị phá sóng từ xa"
        ],
        correctIndex: 2
    },
    {
        id: 51,
        question: "Ứng dụng Bluezone cảnh báo COVID-19 trên điện thoại sử dụng môi trường truyền Bluetooth vì",
        answers: [
            "a. Nếu phát hiện ra một người nhiễm bệnh COVID-19 (F0), dữ liệu của người nhiễm bệnh đó sẽ được Cơ quan Y tế nhập lên hệ thống, từ đó chuyển xuống tất cả các thiết bị",
            "b. Ứng dụng Bluezone trên máy sẽ so sánh dữ liệu của F0 với lịch sử tiếp xúc được ghi nhận từ trước. Nếu phát hiện đã từng tiếp xúc với F0 trong thời gian đủ dài, hệ thống sẽ báo cho người sử dụng về nguy cơ có thể lây nhiễm bệnh (F1)",
            "c. Khoảng cách truyền phù hợp với khoảng cách cảnh báo tiếp xúc gần của bệnh COVID-19",
            "d. Nguyên tắc của Bluezone là bảo mật, ẩn danh và minh bạch. Chỉ cơ quan y tế có thẩm quyền mới biết những người nhiễm và người nghi nhiễm do tiếp xúc gần với người nhiễm COVID-19"
        ],
        correctIndex: 2
    },
    {
        id: 52,
        question: "Mệnh đề nào mô tả sai về chuẩn 802.11b",
        answers: [
            "a. Thông lượng tối đa 11 Mbps",
            "b. Sử dụng tần số 2,4 GHz",
            "c. Không tương thích với chuẩn 802.11a",
            "d. Phạm vi tín hiệu kém hơn chuẩn 802.11a"
        ],
        correctIndex: 3
    },
    {
        id: 53,
        question: "Mô tả nào về các giao thức bảo mật của Access Point là sai?",
        answers: [
            "a. WPA là giao thức bảo mật được công bố để thay thế cho WEP",
            "b. Cho tới nay WPA3 chưa bị phát hiện có lỗ hổng bảo mật nào",
            "c. Cho tới nay WPA3 là giao thức bảo mật Wifi mới nhất và đang được áp dụng rộng rãi nhất",
            "d. WEP là giao thức bảo mật WiFi được áp dụng sớm nhất"
        ],
        correctIndex: 1
    },
    {
        id: 54,
        question: "Mô tả nào về những vấn đề của môi trường truyền không dây là sai?",
        answers: [
            "a. Vùng phủ sóng của AP càng lớn thì số lượng máy trạm kết nối vào càng nhiều, dẫn đến băng thông dành cho mỗi máy trạm càng nhiều",
            "b. Để có thể roaming các máy trạm phải sử dụng cùng một địa chỉ mạng con (subnet IP)",
            "c. Khi các cell chồng lên nhau, các AP láng giềng không thể dùng cùng tần số nếu không sẽ gây nhiễu lẫn nhau",
            "d. Đặt cấu hình AP để vùng phủ sóng hẹp sẽ khắc phục tình trạng thiếu cổng kết nối để phục vụ máy trạm, đồng thời làm tăng băng thông dành cho máy trạm"
        ],
        correctIndex: 0
    }
];

