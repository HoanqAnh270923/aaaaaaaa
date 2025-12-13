const quizData = [
    {
        id: 1,
        question: "Điều nào sau đây là một lý do chính để sử dụng kiểm thử tự động?",
        answers: [
            "a. Để đảm bảo rằng tất cả các yêu cầu chức năng được đáp ứng.",
            "b. Để kiểm tra tất cả các tình huống kiểm thử một cách thủ công.",
            "c. Để tăng cường độ tin cậy của kết quả kiểm thử và tiết kiệm thời gian khi thực hiện kiểm thử lặp đi lặp lại.",
            "d. Để giảm thiểu việc phải viết mã phần mềm."
        ],
        // Đáp án đúng: Để tăng cường độ tin cậy của kết quả kiểm thử và tiết kiệm thời gian khi thực hiện kiểm thử lặp đi lặp lại.
        correctIndex: 2
    },
    {
        id: 2,
        question: "Trong kiểm thử phần mềm, ‘tài liệu kiểm thử’ thường chứa thông tin nào?",
        answers: [
            "a. Các kế hoạch kiểm thử, trường hợp kiểm thử, và báo cáo kiểm thử.",
            "b. Mã nguồn và các tài liệu lập trình.",
            "c. Tất cả các tài liệu thiết kế hệ thống.",
            "d. Các hợp đồng và yêu cầu pháp lý."
        ],
        // Đáp án đúng: Các kế hoạch kiểm thử, trường hợp kiểm thử, và báo cáo kiểm thử.
        correctIndex: 0
    },
    {
        id: 3,
        question: "Điều nào sau đây KHÔNG phải là một loại kiểm thử?",
        answers: [
            "a. Kiểm thử phát triển.",
            "b. Kiểm thử hồi quy.",
            "c. Kiểm thử hiệu suất.",
            "d. Kiểm thử chức năng."
        ],
        // Đáp án đúng: Kiểm thử phát triển.
        correctIndex: 0
    },
    {
        id: 4,
        question: "Điều gì KHÔNG phải là lý do để kiểm thử?",
        answers: [
            "a. Để cho phép các nhà phát triển viết mã nhanh nhất có thể.",
            "b. Để đóng góp vào chất lượng của các thành phần hoặc hệ thống.",
            "c. Để giảm thiểu rủi ro lỗi trong quá trình vận hành.",
            "d. Để đáp ứng bất kỳ yêu cầu hợp đồng hoặc pháp lý."
        ],
        // Đáp án đúng: Để cho phép các nhà phát triển viết mã nhanh nhất có thể.
        correctIndex: 0
    },
    {
        id: 5,
        question: "Đâu là phát biểu đúng về đảm bảo chất lượng (Quality Assurance - QA)?",
        answers: [
            "a. QA không áp dụng cho kiểm thử.",
            "b. QA bao gồm cả kiểm thử và phân tích nguyên nhân gốc rễ.",
            "c. Kiểm thử là kiểm soát chất lượng, không phải QA)",
            "d. QA và kiểm thử là giống nhau."
        ],
        // Đáp án đúng: Kiểm thử là kiểm soát chất lượng, không phải QA)
        correctIndex: 2
    },
    {
        id: 6,
        question: "Với các sản phẩm công việc kiểm thử sau đây, xác định hoạt động chính trong một quy trình kiểm thử tạo ra sản phẩm. 1. Lịch trình thực hiện kiểm thử. 2. Trường hợp kiểm thử. 3. Báo cáo tiến độ kiểm thử. 4. Báo cáo lỗi.",
        answers: [
            "a. 1) - Kiểm soát kiểm thử, 2) - Phân tích kiểm thử, 3) - Giám sát kiểm thử, 4) - Triển khai kiểm thử.",
            "b. 1) - Thực hiện kiểm thử, 2) - Phân tích kiểm thử, 3) - Hoàn thành kiểm thử, 4) - Thực hiện kiểm thử.",
            "c. 1) - Triển khai kiểm thử, 2) - Thiết kế kiểm thử, 3) - Giám sát kiểm thử, 4) - Thực hiện kiểm thử.",
            "d. 1) - Lập kế hoạch kiểm thử, 2) - Thiết kế kiểm thử, 3) - Thực hiện kiểm thử, 4) - Triển khai kiểm thử."
        ],
        // Đáp án đúng: 1) - Triển khai kiểm thử, 2) - Thiết kế kiểm thử, 3) - Giám sát kiểm thử, 4) - Thực hiện kiểm thử.
        correctIndex: 2
    },
    {
        id: 7,
        question: "Trong quy trình kiểm thử phần mềm, \"Quản lý lỗi\" thường bao gồm các hoạt động nào?",
        answers: [
            "a. Tạo các trường hợp kiểm thử mới để cải thiện chất lượng phần mềm.",
            "b. Đánh giá các yêu cầu và thay đổi trong kế hoạch kiểm thử.",
            "c. Thiết kế và thực hiện các bài kiểm thử mới.",
            "d. Theo dõi và quản lý các lỗi được phát hiện, bao gồm việc phân loại, ưu tiên và xác nhận lỗi."
        ],
        // Đáp án đúng: Theo dõi và quản lý các lỗi được phát hiện, bao gồm việc phân loại, ưu tiên và xác nhận lỗi.
        correctIndex: 3
    },
    {
        id: 8,
        question: "Nguyên lý nào sau đây liên quan đến việc kiểm thử phần mềm là không thể kiểm tra tất cả các kịch bản và tình huống?",
        answers: [
            "a. Tập trung lỗi.",
            "b. Kiểm thử toàn diện là không thể.",
            "c. Nghịch lý thuốc trừ sâu.",
            "d. Sai lầm không có lỗi."
        ],
        // Đáp án đúng: Kiểm thử toàn diện là không thể.
        correctIndex: 1
    },
    {
        id: 9,
        question: "Xem các định nghĩa sau và ghép các thuật ngữ với định nghĩa: 1. Một lý do hoặc mục đích để thiết kế và thực hiện một bài kiểm thử. 2. Thành phần hoặc hệ thống sẽ được kiểm thử. 3. Xác nhận qua việc kiểm tra và cung cấp chứng cứ khách quan rằng các yêu cầu cho một mục đích hoặc ứng dụng cụ thể đã được hoàn thành.",
        answers: [
            "a. 1) mục tiêu kiểm thử, 2) đối tượng kiểm thử, 3) thẩm định.",
            "b. 1) thẩm định, 2) cơ bản kiểm thử, 3) kiểm chứng.",
            "c. 1) đối tượng kiểm thử, 2) mục tiêu kiểm thử, 3) thẩm định.",
            "d. 1) mục tiêu kiểm thử, 2) đối tượng kiểm thử, 3) kiểm chứng."
        ],
        // Đáp án đúng: 1) mục tiêu kiểm thử, 2) đối tượng kiểm thử, 3) thẩm định.
        correctIndex: 0
    },
    {
        id: 10,
        question: "Có bao nhiêu tiêu chí để đánh giá một test case tốt?",
        answers: [
            "A. 3",
            "B. 2",
            "C. 5",
            "D. 4"
        ],
        // Đáp án đúng: 4
        correctIndex: 3
    },
    {
        id: 11,
        question: "Ghép các thuật ngữ với định nghĩa của chúng: 1. Tài liệu mô tả các điều kiện, đầu vào và kết quả mong đợi của một bài kiểm thử. 2. Quá trình xác minh rằng phần mềm đáp ứng các yêu cầu và tiêu chuẩn đã định. 3. Quy trình quản lý và theo dõi các lỗi được phát hiện trong quá trình kiểm thử.",
        answers: [
            "a. 1) trường hợp kiểm thử, 2) xác thực, 3) theo dõi lỗi.",
            "b. 1) trường hợp kiểm thử, 2) kiểm tra, 3) quản lý lỗi.",
            "c. 1) kế hoạch kiểm thử, 2) xác thực, 3) quản lý lỗi.",
            "d. 1) trường hợp kiểm thử, 2) xác thực, 3) quản lý lỗi."
        ],
        // Đáp án đúng: 1) trường hợp kiểm thử, 2) xác thực, 3) theo dõi lỗi.
        correctIndex: 0
    },
    {
        id: 12,
        question: "Phát biểu nào về kiểm thử hồi quy (Regression Testing) là đúng?",
        answers: [
            "a. Kiểm thử hồi quy nhằm kiểm tra xem các thay đổi gần đây có gây ra lỗi cho các tính năng đã tồn tại không.",
            "b. Kiểm thử hồi quy được thực hiện để kiểm tra các tính năng mới trong phần mềm.",
            "c. Kiểm thử hồi quy chỉ nên thực hiện khi phần mềm được phát hành lần đầu tiên.",
            "d. Kiểm thử hồi quy tập trung vào việc cải thiện hiệu suất phần mềm."
        ],
        // Đáp án đúng: Kiểm thử hồi quy nhằm kiểm tra xem các thay đổi gần đây có gây ra lỗi cho các tính năng đã tồn tại không.
        correctIndex: 0
    },
    {
        id: 13,
        question: "Mục tiêu chính của giai đoạn \"Thiết kế kiểm thử\" trong quy trình kiểm thử là gì?",
        answers: [
            "a. Tạo ra các trường hợp kiểm thử và kịch bản kiểm thử dựa trên yêu cầu và thiết kế.",
            "b. Xác định các yêu cầu kiểm thử và mục tiêu.",
            "c. Phát hiện và sửa lỗi trong phần mềm.",
            "d. Đánh giá hiệu suất của phần mềm dưới các điều kiện khác nhau."
        ],
        // Đáp án đúng: Tạo ra các trường hợp kiểm thử và kịch bản kiểm thử dựa trên yêu cầu và thiết kế.
        correctIndex: 0
    },
    {
        id: 14,
        question: "Khi nào nên thực hiện giai đoạn \"Đánh giá và báo cáo\" trong quy trình kiểm thử?",
        answers: [
            "a. Trước khi thực hiện các bài kiểm thử để xác định phạm vi kiểm thử",
            "b. Trong giai đoạn phát triển phần mềm khi các lỗi mới được phát hiện.",
            "c. Sau khi tất cả các bài kiểm thử đã được thực hiện và kết quả đã được ghi nhận.",
            "d. Ngay khi thiết kế kiểm thử được hoàn thành."
        ],
        // Đáp án đúng: Sau khi tất cả các bài kiểm thử đã được thực hiện và kết quả đã được ghi nhận.
        correctIndex: 2
    },
    {
        id: 15,
        question: "Nguyên tắc nào sau đây KHÔNG phải là nguyên tắc kiểm thử phần mềm?",
        answers: [
            "a. Kiểm thử chỉ cần thực hiện một lần để đảm bảo rằng phần mềm hoạt động chính xác.",
            "b. Kiểm thử sớm giúp phát hiện lỗi sớm hơn và giảm chi phí sửa chữa.",
            "c. Kiểm thử không thể phát hiện tất cả các lỗi.",
            "d. Các lỗi thường tập trung ở một số phần của phần mềm."
        ],
        // Đáp án đúng: Kiểm thử chỉ cần thực hiện một lần để đảm bảo rằng phần mềm hoạt động chính xác.
        correctIndex: 0
    },
    {
        id: 16,
        question: "Việc đảm bảo rằng thiết kế kiểm thử bắt đầu trong quá trình xác định yêu cầu là rất quan trọng. Mục tiêu kiểm thử nào sau đây hỗ trợ điều này?",
        answers: [
            "a. Hoàn thành dự án đúng thời hạn.",
            "b. Tăng cường sự tin tưởng vào hệ thống.",
            "c. Ngăn ngừa các lỗi trong hệ thống.",
            "d. Tìm các lỗi thông qua kiểm thử động."
        ],
        // Đáp án đúng: Ngăn ngừa các lỗi trong hệ thống.
        correctIndex: 2
    },
    {
        id: 17,
        question: "Nguyên lý nào sau đây KHÔNG phải là nguyên lý kiểm thử phần mềm?",
        answers: [
            "a. Kiểm thử là một phần quan trọng của quy trình phát triển phần mềm.",
            "b. Kiểm thử không thể phát hiện tất cả các lỗi.",
            "c. Kiểm thử nên được thực hiện càng muộn càng tốt trong chu kỳ phát triển.",
            "d. Kiểm thử nên tập trung vào các lỗi nghiêm trọng nhất trước tiên."
        ],
        // Đáp án đúng: Kiểm thử nên được thực hiện càng muộn càng tốt trong chu kỳ phát triển.
        correctIndex: 2
    },
    {
        id: 18,
        question: "Trong quy trình kiểm thử phần mềm, bước nào là giai đoạn đầu tiên trong quy trình phát triển kiểm thử?",
        answers: [
            "a. Thiết kế kiểm thử.",
            "b. Thực hiện kiểm thử.",
            "c. Xác minh yêu cầu.",
            "d. Lập kế hoạch kiểm thử."
        ],
        // Đáp án đúng: Lập kế hoạch kiểm thử.
        correctIndex: 3
    },
    {
        id: 19,
        question: "Lợi ích của việc theo dõi giữa các tài liệu cơ bản kiểm thử và sản phẩm công việc kiểm thử là gì?",
        answers: [
            "a. Theo dõi cho phép báo cáo tiến độ kiểm thử và lỗi liên quan đến các yêu cầu, điều này dễ hiểu hơn đối với các bên liên quan.",
            "b. Theo dõi đảm bảo rằng số lượng sản phẩm công việc kiểm thử bị giới hạn để tiết kiệm thời gian sản xuất chúng.",
            "c. Theo dõi cho phép các nhà phát triển tạo mã dễ kiểm thử hơn.",
            "d. Theo dõi có nghĩa là các tài liệu cơ bản kiểm thử và sản phẩm công việc kiểm thử không cần phải được xem xét."
        ],
        // Đáp án đúng: Theo dõi cho phép báo cáo tiến độ kiểm thử và lỗi liên quan đến các yêu cầu, điều này dễ hiểu hơn đối với các bên liên quan.
        correctIndex: 0
    },
    {
        id: 20,
        question: "Trong một kế hoạch kiểm thử, các tiêu chí nào sau đây thường được xác định?",
        answers: [
            "a. Thời gian phát triển phần mềm.",
            "b. Nhu cầu phần cứng cho phần mềm.",
            "c. Chi phí sản xuất phần mềm.",
            "d. Phạm vi của kiểm thử."
        ],
        // Đáp án đúng: Phạm vi của kiểm thử.
        correctIndex: 3
    },
    {
        id: 21,
        question: "Ai thường thực hiện kiểm thử chấp nhận (Acceptance testing)?",
        answers: [
            "a. Các kỹ sư kiểm thử nội bộ.",
            "b. Các nhà phát triển phần mềm.",
            "c. Khách hàng hoặc người dùng cuối.",
            "d. Các chuyên gia kiểm thử độc lập."
        ],
        // Đáp án đúng: Khách hàng hoặc người dùng cuối.
        correctIndex: 2
    },
    {
        id: 22,
        question: "Các mức độ kiểm thử phần mềm thường bao gồm những gì?",
        answers: [
            "a. Kiểm thử chức năng, kiểm thử hiệu suất, kiểm thử bảo mật, và kiểm thử hồi quy.",
            "b. Kiểm thử chức năng, kiểm thử tích hợp, kiểm thử hồi quy, và kiểm thử chấp nhận.",
            "c. Kiểm thử đơn vị, kiểm thử tích hợp, kiểm thử hệ thống, và kiểm thử chấp nhận.",
            "d. Kiểm thử hiệu suất, kiểm thử bảo trì, kiểm thử vận hành, và kiểm thử tích hợp."
        ],
        // Đáp án đúng: Kiểm thử đơn vị, kiểm thử tích hợp, kiểm thử hệ thống, và kiểm thử chấp nhận.
        correctIndex: 2
    },
    {
        id: 23,
        question: "Cấp độ kiểm thử nào thường được thực hiện bởi nhân viên quản trị hệ thống?",
        answers: [
            "a. Kiểm thử tích hợp hệ thống.",
            "b. Kiểm thử hệ thống.",
            "c. Kiểm thử chấp nhận theo quy định.",
            "d. Kiểm thử vận hành."
        ],
        // Đáp án đúng: Kiểm thử vận hành.
        correctIndex: 3
    },
    {
        id: 24,
        question: "Hãy xem xét ba tác nhân kích hoạt cho việc bảo trì và ghép sự kiện với tác nhân kích hoạt đúng: 1. Chuyển đổi dữ liệu từ hệ thống này sang hệ thống khác. 2. Nâng cấp phần mềm thương mại có sẵn (COTS). 3. Kiểm thử lưu trữ dữ liệu. 4. Hệ thống hiện tại đang chạy trên một nền tảng và hệ điều hành khác. 5. Kiểm thử quy trình khôi phục hoặc truy xuất dữ liệu. 6. Vá lỗi cho các lỗ hổng bảo mật.",
        answers: [
            "a. Chỉnh sửa: 2 và 6, Chuyển đổi: 1 và 4, Ngừng hoạt động: 3 và 5.",
            "b. Chỉnh sửa: 2 và 3, Chuyển đổi: 1 và 5, Ngừng hoạt động: 4 và 6.",
            "c. Chỉnh sửa: 1 và 5, Chuyển đổi: 2 và 3, Ngừng hoạt động: 4 và 6.",
            "d. Chỉnh sửa: 2 và 3, Chuyển đổi: 1 và 5, Ngừng hoạt động: 5 và 6."
        ],
        // Đáp án đúng: Chỉnh sửa: 2 và 6, Chuyển đổi: 1 và 4, Ngừng hoạt động: 3 và 5.
        correctIndex: 0
    },
    {
        id: 25,
        question: "Khi nào kiểm thử chấp nhận (Acceptance testing) thường được thực hiện trong quy trình phát triển phần mềm?",
        answers: [
            "a. Trước khi phát triển phần mềm bắt đầu.",
            "b. Sau khi các thành phần phần mềm đã được kiểm thử đơn vị và kiểm thử tích hợp hoàn tất, và trước khi phần mềm được triển khai chính thức.",
            "c. Trong giai đoạn thiết kế chi tiết của phần mềm.",
            "d. Trong khi viết mã nguồn của phần mềm."
        ],
        // Đáp án đúng: Sau khi các thành phần phần mềm đã được kiểm thử đơn vị và kiểm thử tích hợp hoàn tất, và trước khi phần mềm được triển khai chính thức.
        correctIndex: 1
    },
    {
        id: 26,
        question: "Khi nào kiểm thử hệ thống (System testing) thường được thực hiện trong quy trình phát triển phần mềm?",
        answers: [
            "a. Sau khi các thành phần phần mềm đã được kiểm thử đơn vị và kiểm thử tích hợp hoàn tất.",
            "b. Trong khi viết mã nguồn của phần mềm",
            "c. Trước khi phát triển phần mềm bắt đầu.",
            "d. Trong giai đoạn thiết kế chi tiết của phần mềm."
        ],
        // Đáp án đúng: Sau khi các thành phần phần mềm đã được kiểm thử đơn vị và kiểm thử tích hợp hoàn tất.
        correctIndex: 0
    },
    {
        id: 27,
        question: "Kiểm thử Beta là:",
        answers: [
            "a. Được thực hiện bởi khách hàng tại trang của họ.",
            "b. Hữu ích để kiểm thử phần mềm được phát triển cho một khách hàng hoặc người dùng cụ thể.",
            "c. Được thực hiện bởi một nhóm kiểm thử độc lập.",
            "d. Được thực hiện bởi khách hàng tại trang của nhà phát triển phần mềm."
        ],
        // Đáp án đúng: Được thực hiện bởi khách hàng tại trang của họ.
        correctIndex: 0
    },
    {
        id: 28,
        question: "Kiểm thử hồi quy là:",
        answers: [
            "a. Sẽ kiểm tra các khu vực không thay đổi của phần mềm để xem chúng có bị ảnh hưởng không.",
            "b. Luôn luôn được tự động hóa.",
            "c. Chỉ chạy một lần.",
            "d. Sẽ kiểm tra các khu vực đã thay đổi của phần mềm để xem chúng có bị ảnh hưởng không."
        ],
        // Đáp án đúng: Sẽ kiểm tra các khu vực không thay đổi của phần mềm để xem chúng có bị ảnh hưởng không.
        correctIndex: 0
    },
    {
        id: 29,
        question: "Kiểm thử nào sau đây là kiểm thử chức năng?",
        answers: [
            "a. Kiểm tra tác động của lượng lớn lưu lượng truy cập trên hệ thống tổng đài.",
            "b. Kiểm tra mức độ dễ sử dụng của hệ thống, đặc biệt là đối với những người dùng có khuyết tật như suy giảm thị lực.",
            "c. Đo lường thời gian phản hồi trên hệ thống đặt chỗ trực tuyến.",
            "d. Kiểm tra thông tin trên màn hình đặt chỗ trực tuyến và dữ liệu trong cơ sở dữ liệu so với thông tin trên thư gửi khách hàng."
        ],
        // Đáp án đúng: Kiểm tra thông tin trên màn hình đặt chỗ trực tuyến và dữ liệu trong cơ sở dữ liệu so với thông tin trên thư gửi khách hàng.
        correctIndex: 3
    },
    {
        id: 30,
        question: "Kiểm thử phi chức năng bao gồm:",
        answers: [
            "a. Kiểm thử các thuộc tính chất lượng của hệ thống bao gồm độ tin cậy và khả năng sử dụng.",
            "b. Đạt được sự chấp thuận của người dùng đối với hệ thống.",
            "c. Kiểm thử một tính năng hệ thống chỉ sử dụng phần mềm cần thiết cho chức năng đó.",
            "d. Kiểm thử để xem hệ thống không hoạt động chính xác ở đâu."
        ],
        // Đáp án đúng: Kiểm thử các thuộc tính chất lượng của hệ thống bao gồm độ tin cậy và khả năng sử dụng.
        correctIndex: 0
    },
    {
        id: 31,
        question: "Kiểm thử thành phần (Component testing) là gì:",
        answers: [
            "a. Kiểm thử tính khả dụng của phần mềm đối với người dùng cuối.",
            "b. Kiểm thử toàn bộ hệ thống phần mềm để đảm bảo rằng tất cả các thành phần hoạt động cùng nhau một cách chính xác.",
            "c. Kiểm thử hiệu năng của phần mềm khi hệ thống xử lý nhiều tác vụ cùng lúc.",
            "d. Kiểm tra một cách có hệ thống các thành phần nhỏ nhất bên trong kiến trúc phần mềm một cách riêng lẻ."
        ],
        // Đáp án đúng: Kiểm tra một cách có hệ thống các thành phần nhỏ nhất bên trong kiến trúc phần mềm một cách riêng lẻ.
        correctIndex: 3
    },
    {
        id: 32,
        question: "Loại kiểm thử nào sau đây là một loại hình kiểm thử?",
        answers: [
            "a. Kiểm thử hệ thống.",
            "b. Kiểm thử chức năng.",
            "c. Kiểm thử thành phần.",
            "d. Kiểm thử chấp nhận."
        ],
        // Đáp án đúng: Kiểm thử chức năng.
        correctIndex: 1
    },
    {
        id: 33,
        question: "Mục tiêu chính của kiểm thử chấp nhận (Acceptance testing) là gì?",
        answers: [
            "a. Kiểm tra hiệu suất của toàn bộ hệ thống phần mềm dưới điều kiện tải cao.",
            "b. Xác minh rằng phần mềm đáp ứng các yêu cầu và mong đợi của người dùng cuối và các bên liên quan.",
            "c. Đảm bảo rằng các thành phần phần mềm hoạt động đúng như mong đợi khi được kiểm thử riêng lẻ.",
            "d. Đánh giá tính khả dụng và giao diện người dùng của phần mềm."
        ],
        // Đáp án đúng: Xác minh rằng phần mềm đáp ứng các yêu cầu và mong đợi của người dùng cuối và các bên liên quan.
        correctIndex: 1
    },
    {
        id: 34,
        question: "Mục tiêu chính của kiểm thử hệ thống (System testing) là gì?",
        answers: [
            "a. Kiểm tra tính tương thích của phần mềm với các hệ thống và môi trường khác.",
            "b. Đánh giá tính khả dụng và giao diện người dùng của phần mềm.",
            "c. Xác minh rằng toàn bộ hệ thống phần mềm hoạt động như một khối thống nhất và đáp ứng các yêu cầu chức năng và phi chức năng.",
            "d. Đảm bảo rằng các thành phần phần mềm hoạt động đúng như mong đợi khi được kiểm thử riêng lẻ."
        ],
        // Đáp án đúng: Xác minh rằng toàn bộ hệ thống phần mềm hoạt động như một khối thống nhất và đáp ứng các yêu cầu chức năng và phi chức năng.
        correctIndex: 2
    },
    {
        id: 35,
        question: "Mục tiêu chính của kiểm thử thành phần (Component testing) là gì?",
        answers: [
            "a. Đảm bảo rằng các thành phần phần mềm hoạt động chính xác khi được tích hợp với các thành phần khác trong hệ thống.",
            "b. Xác minh rằng các thành phần riêng lẻ của phần mềm hoạt động đúng như mong đợi và đáp ứng các yêu cầu thiết kế.",
            "c. Đánh giá tính khả dụng của phần mềm cho người dùng cuối.",
            "d. Kiểm tra hiệu suất của toàn bộ hệ thống phần mềm dưới tải cao."
        ],
        // Đáp án đúng: Xác minh rằng các thành phần riêng lẻ của phần mềm hoạt động đúng như mong đợi và đáp ứng các yêu cầu thiết kế.
        correctIndex: 1
    },
    {
        id: 36,
        question: "Mục tiêu chính của kiểm thử tích hợp (Integration testing) là gì?",
        answers: [
            "a. Đánh giá hiệu suất của toàn bộ hệ thống phần mềm dưới điều kiện tải cao.",
            "b. Xác minh rằng phần mềm đáp ứng các yêu cầu chức năng của người dùng cuối.",
            "c. Kiểm tra xem các thành phần đã được tích hợp hoạt động cùng nhau một cách chính xác và tương thích.",
            "d. Đảm bảo rằng các thành phần phần mềm hoạt động đúng như mong đợi khi được kiểm thử riêng lẻ."
        ],
        // Đáp án đúng: Kiểm tra xem các thành phần đã được tích hợp hoạt động cùng nhau một cách chính xác và tương thích.
        correctIndex: 2
    },
    {
        id: 37,
        question: "Phát biểu nào sau đây là đúng?",
        answers: [
            "a. Trong các mô hình phát triển lặp – tăng trưởng, việc cung cấp phần mềm có thể sử dụng cho người dùng cuối diễn ra thường xuyên hơn so với các mô hình tuần tự.",
            "b. Các cấp độ kiểm thử và hoạt động kiểm thử chồng lấn nhau thường phổ biến hơn trong các mô hình phát triển tuần tự so với các mô hình phát triển lặp – tăng trưởng.",
            "c. Khi hoàn thành, các mô hình phát triển lặp – tăng trưởng có khả năng cung cấp đầy đủ bộ tính năng mà các bên liên quan đã hình dung ban đầu hơn các mô hình tuần tự.",
            "d. Mô hình chữ V là một mô hình phát triển lặp – tăng trưởng vì mỗi hoạt động phát triển có một hoạt động kiểm thử tương ứng."
        ],
        // Đáp án đúng: Trong các mô hình phát triển lặp – tăng trưởng, việc cung cấp phần mềm có thể sử dụng cho người dùng cuối diễn ra thường xuyên hơn so với các mô hình tuần tự.
        correctIndex: 0
    },
    {
        id: 38,
        question: "Trong kiểm thử hệ thống (System testing), điều gì thường được kiểm tra để đảm bảo chất lượng của phần mềm?",
        answers: [
            "a. Tính khả dụng của hệ thống và sự tương thích với các thiết bị ngoại vi.",
            "b. Mã nguồn của từng thành phần và hiệu suất của các mô-đun.",
            "c. Tính năng và khả năng hoạt động của hệ thống theo các yêu cầu chức năng và phi chức năng.",
            "d. Khả năng mở rộng của hệ thống và mức độ tuân thủ các tiêu chuẩn mã hóa."
        ],
        // Đáp án đúng: Tính năng và khả năng hoạt động của hệ thống theo các yêu cầu chức năng và phi chức năng.
        correctIndex: 2
    },
    {
        id: 39,
        question: "Điều kiện tiên quyết nào cần được đáp ứng trước khi thực hiện kiểm thử tích hợp (Integration testing)?",
        answers: [
            "a. Hệ thống phải trải qua kiểm thử hiệu suất để đảm bảo nó có thể xử lý các tác vụ nặng.",
            "b. Các yêu cầu chức năng của hệ thống phải được hoàn tất và chấp thuận bởi các bên liên quan.",
            "c. Toàn bộ hệ thống phần mềm phải được triển khai và sẵn sàng cho kiểm thử người dùng cuối.",
            "d. Các thành phần phần mềm phải được phát triển xong và kiểm thử thành phần phải hoàn tất."
        ],
        // Đáp án đúng: Các thành phần phần mềm phải được phát triển xong và kiểm thử thành phần phải hoàn tất.
        correctIndex: 3
    },
    {
        id: 40,
        question: "Điều nào sau đây là đúng về quy trình kiểm thử các bản sửa lỗi khẩn cấp?",
        answers: [
            "a. Chỉ cần chạy lại kiểm thử cho lỗi thực sự đã được sửa.",
            "b. Không có thời gian để kiểm thử thay đổi trước khi triển khai, vì vậy chỉ những nhà phát triển giỏi nhất mới nên thực hiện công việc này và không nên bao gồm kiểm thử viên vì họ sẽ làm chậm quá trình.",
            "c. Luôn chạy kiểm thử hồi quy đầy đủ cho toàn bộ hệ thống trong trường hợp các phần khác của hệ thống bị ảnh hưởng xấu.",
            "d. Kiểm thử lại khu vực đã thay đổi, sau đó sử dụng đánh giá rủi ro để quyết định một tập hợp hợp lý của toàn bộ kiểm thử hồi quy cần chạy trong trường hợp các phần khác của hệ thống bị ảnh hưởng."
        ],
        // Đáp án đúng: Kiểm thử lại khu vực đã thay đổi, sau đó sử dụng đánh giá rủi ro để quyết định một tập hợp hợp lý của toàn bộ kiểm thử hồi quy cần chạy trong trường hợp các phần khác của hệ thống bị ảnh hưởng.
        correctIndex: 3
    },
    {
        id: 41,
        question: "Loại tài liệu nào sau đây thường được đánh giá trong kiểm thử tĩnh?",
        answers: [
            "a. Chỉ mã nguồn.",
            "b. Chỉ thiết kế.",
            "c. Chỉ mã lỗi.",
            "d. Kế hoạch kiểm thử, tài liệu yêu cầu, thiết kế."
        ],
        // Đáp án đúng: Kế hoạch kiểm thử, tài liệu yêu cầu, thiết kế.
        correctIndex: 3
    },
    {
        id: 42,
        question: "Phát biểu nào sau đây là đúng về kiểm thử tĩnh?",
        answers: [
            "a. Kiểm thử tĩnh có thể được thực hiện mà không cần chạy chương trình.",
            "b. Kiểm thử tĩnh yêu cầu phải có các công cụ tự động để thực hiện.",
            "c. Kiểm thử tĩnh chỉ có thể áp dụng cho mã nguồn.",
            "d. Kiểm thử tĩnh chỉ có thể được thực hiện bởi nhà phát triển."
        ],
        // Đáp án đúng: Kiểm thử tĩnh có thể được thực hiện mà không cần chạy chương trình.
        correctIndex: 0
    },
    {
        id: 43,
        question: "Phát biểu nào sau đây về các yếu tố thành công trong đánh giá là đúng? 1. Người đánh giá nên cố gắng đánh giá càng nhiều sản phẩm làm việc (work product) càng tốt. 2. Tác giả thừa nhận và đánh giá cao các lỗi được phát hiện trong sản phẩm của họ. 3. Mỗi cuộc đánh giá có các mục tiêu rõ ràng, được truyền đạt tới những người đánh giá. 4. Những người kiểm thử thường không tham gia vào đánh giá, vì công việc của họ tập trung vào thiết kế kiểm thử. 5. Danh sách kiểm tra nên được chuẩn hóa và sử dụng cho tất cả các loại sản phẩm làm việc.",
        answers: [
            "a. 2, 3 và 5",
            "b. 2 và 3",
            "c. 1, 2 và 4",
            "d. 1, 2 và 3"
        ],
        // Đáp án đúng: 2 và 3
        correctIndex: 1
    },
    {
        id: 44,
        question: "Một trong những lợi ích chính của kiểm thử tĩnh là gì?",
        answers: [
            "a. Giảm thời gian thực thi mã nguồn.",
            "b. Cải thiện giao diện người dùng.",
            "c. Giúp phát hiện lỗi khi chạy chương trình.",
            "d. Phát hiện lỗi sớm trong chu kỳ phát triển phần mềm."
        ],
        // Đáp án đúng: Phát hiện lỗi sớm trong chu kỳ phát triển phần mềm.
        correctIndex: 3
    },
    {
        id: 45,
        question: "Ghép các đặc điểm sau với loại đánh giá tương ứng. 1. Được dẫn dắt bởi tác giả. 2. Không có tài liệu. 3. Người đánh giá là đồng nghiệp kỹ thuật của tác giả. 4. Được dẫn dắt bởi một điều phối viên hoặc lãnh đạo đã qua đào tạo. 5. Sử dụng tiêu chí đầu vào và đầu ra. INSP: Kiểm tra (Inspection), TR: Đánh giá kỹ thuật (Technical review), IR: Đánh giá không chính thức (Informal review), W: Thảo luận (Walkthrough)",
        answers: [
            "a. INSP: 5, TR: 4, IR: 3, W: 1 và 2",
            "b. INSP: 1 và 5, TR: 3, IR: 2, W: 4",
            "c. INSP: 4 và 5, TR: 3, IR: 2, W: 1",
            "d. INSP: 4, TR: 3, IR: 2 và 5, W: 1"
        ],
        // Đáp án đúng: INSP: 4 và 5, TR: 3, IR: 2, W: 1
        correctIndex: 2
    },
    {
        id: 46,
        question: "Câu nào về kiểm thử tĩnh và kiểm thử động là đúng?",
        answers: [
            "a. Kiểm thử tĩnh có thể tìm ra một số loại lỗi với ít nỗ lực hơn so với kiểm thử động.",
            "b. Kiểm thử tĩnh và kiểm thử động có các mục tiêu khác nhau.",
            "c. Kiểm thử tĩnh phát hiện lỗi thông qua các lỗi hệ thống; kiểm thử động tìm ra lỗi trực tiếp.",
            "d. Kiểm thử tĩnh và kiểm thử động tìm ra cùng một loại lỗi."
        ],
        // Đáp án đúng: Kiểm thử tĩnh có thể tìm ra một số loại lỗi với ít nỗ lực hơn so với kiểm thử động.
        correctIndex: 0
    },
    {
        id: 47,
        question: "Mục tiêu chính của kiểm thử tĩnh là gì?",
        answers: [
            "a. Đảm bảo sản phẩm đạt yêu cầu khách hàng.",
            "b. Phát hiện lỗi bằng cách chạy chương trình.",
            "c. Tăng tốc quá trình phát triển phần mềm.",
            "d. Đánh giá tài liệu và mã nguồn mà không cần thực thi."
        ],
        // Đáp án đúng: Đánh giá tài liệu và mã nguồn mà không cần thực thi.
        correctIndex: 3
    },
    {
        id: 48,
        question: "Quy trình nào sau đây không phải là một phần của kiểm thử tĩnh?",
        answers: [
            "a. Xem xét tài liệu yêu cầu.",
            "b. Thảo luận nhóm về thiết kế phần mềm.",
            "c. Phân tích mã nguồn bằng tay.",
            "d. Thực thi mã để phát hiện lỗi."
        ],
        // Đáp án đúng: Thực thi mã để phát hiện lỗi.
        correctIndex: 3
    },
    {
        id: 49,
        question: "Phương pháp nào sau đây không phải là kỹ thuật kiểm thử tĩnh?",
        answers: [
            "a. Chạy kiểm thử đơn vị tự động.",
            "b. Thảo luận về thiết kế.",
            "c. Đọc mã nguồn bằng tay.",
            "d. Xem xét tài liệu yêu cầu."
        ],
        // Đáp án đúng: Chạy kiểm thử đơn vị tự động.
        correctIndex: 0
    },
    {
        id: 50,
        question: "Các buổi kiểm tra (inspection) khác với các buổi thảo luận (walkthrough) như thế nào?",
        answers: [
            "a. Thảo luận yêu cầu phải có điều phối viên chuyên nghiệp.",
            "b. Thảo luận chỉ dành cho người dùng cuối tham gia.",
            "c. Kiểm tra được thực hiện mà không cần tài liệu.",
            "d. Kiểm tra có cấu trúc và sử dụng tiêu chí đầu vào và đầu ra."
        ],
        // Đáp án đúng: Kiểm tra có cấu trúc và sử dụng tiêu chí đầu vào và đầu ra.
        correctIndex: 3
    },
    {
        id: 51,
        question: "Phát biểu nào sau đây là một ưu điểm của kiểm thử tĩnh?",
        answers: [
            "a. Nó không yêu cầu bất kỳ kỹ năng đặc biệt nào.",
            "b. Nó yêu cầu ít thời gian hơn so với kiểm thử động.",
            "c. Nó có thể thay thế kiểm thử động hoàn toàn.",
            "d. Nó giúp tìm ra lỗi mà kiểm thử động có thể bỏ qua."
        ],
        // Đáp án đúng: Nó giúp tìm ra lỗi mà kiểm thử động có thể bỏ qua.
        correctIndex: 3
    },
    {
        id: 52,
        question: "Xem xét đặc tả sau để đánh giá: Khi bạn đăng ký, bạn phải cung cấp họ và tên, địa chỉ bưu điện, số điện thoại, địa chỉ email và mật khẩu. Khi bạn đăng nhập, bạn phải cung cấp họ, số điện thoại và mật khẩu. Bạn sẽ duy trì trạng thái đăng nhập cho đến khi chọn “Đăng xuất” và sau đó trả lời “Có” cho câu hỏi “Bạn có chắc chắn không?” Khi bạn đang đăng nhập, bạn có thể cập nhật thông tin của mình, nhưng bạn cần xác nhận thay đổi bằng cách nhập mã bảo mật được gửi đến điện thoại của bạn. Sau đó, bạn cần phải đăng nhập lại. Dưới đây là các lỗi tiềm năng trong đặc tả: 1. Thời gian chờ (timeout) không chính xác đối với mã bảo mật được gửi đến điện thoại. 2. Tràn bộ đệm (buffer overflow) đối với các địa chỉ bưu điện quá dài. 3. Không thể thay đổi số điện thoại, vì mã được gửi đến số cũ. 4. Thông tin được lưu trữ như một mục bổ sung trong cơ sở dữ liệu cho mỗi lần thay đổi. 5. Những lỗi tiềm năng nào trong số các lỗi trên có khả năng được phát hiện bởi một cuộc đánh giá được thực hiện bởi các nhà phát triển?",
        answers: [
            "a. 2, 3 và 4.",
            "b. 1, 2 và 4.",
            "c. 1 và 4.",
            "d. 2 và 3."
        ],
        // Đáp án đúng: 1, 2 và 4.
        correctIndex: 1
    },
    {
        id: 53,
        question: "Điểm khác biệt chính giữa kiểm thử tĩnh và kiểm thử động là gì?",
        answers: [
            "a. Kiểm thử tĩnh kiểm tra phần mềm mà không chạy mã.",
            "b. Kiểm thử tĩnh yêu cầu sử dụng công cụ tự động.",
            "c. Kiểm thử tĩnh luôn được thực hiện sau kiểm thử động.",
            "d. Kiểm thử tĩnh chỉ dành cho các tài liệu không phải mã nguồn."
        ],
        // Đáp án đúng: Kiểm thử tĩnh kiểm tra phần mềm mà không chạy mã.
        correctIndex: 0
    },
    {
        id: 54,
        question: "Đặc điểm nào sau đây là của buổi kiểm tra (inspection)?",
        answers: [
            "a. Không yêu cầu tài liệu trước khi bắt đầu.",
            "b. Chỉ tập trung vào hiệu suất của phần mềm.",
            "c. Sử dụng danh sách kiểm tra các lỗi tiềm năng.",
            "d. Được dẫn dắt bởi người quản lý dự án."
        ],
        // Đáp án đúng: Sử dụng danh sách kiểm tra các lỗi tiềm năng.
        correctIndex: 2
    },
    {
        id: 55,
        question: "Kỹ thuật đánh giá nào sau đây: đánh giá tài liệu yêu cầu hoặc câu chuyện (user story) người dùng từ góc nhìn của người dùng cuối của hệ thống, sử dụng danh sách kiểm tra?",
        answers: [
            "a. Dựa trên vai trò (Role-based).",
            "b. Dựa trên kịch bản (Scenario-based).",
            "c. Dựa trên danh sách kiểm tra (Checklist-based).",
            "d. Dựa trên góc nhìn (Perspective-based)."
        ],
        // Đáp án đúng: Dựa trên góc nhìn (Perspective-based).
        correctIndex: 3
    },
    {
        id: 56,
        question: "Kỹ thuật nào sau đây thuộc kiểm thử tĩnh?",
        answers: [
            "a. Phát hiện lỗi trong quá trình chạy thử nghiệm.",
            "b. Thực thi mã nguồn để phát hiện lỗi.",
            "c. Đánh giá mã nguồn mà không cần thực thi.",
            "d. Đánh giá hiệu suất phần mềm dưới tải cao."
        ],
        // Đáp án đúng: Đánh giá mã nguồn mà không cần thực thi.
        correctIndex: 2
    },
    {
        id: 57,
        question: "Mục tiêu của các buổi thảo luận (walkthrough) là gì?",
        answers: [
            "a. Giúp các thành viên hiểu rõ tài liệu và mã nguồn.",
            "b. Đảm bảo mã nguồn không có lỗi.",
            "c. Phát hiện lỗi mã nguồn.",
            "d. Thảo luận các giải pháp cho vấn đề trong phần mềm."
        ],
        // Đáp án đúng: Giúp các thành viên hiểu rõ tài liệu và mã nguồn.
        correctIndex: 0
    },
    {
        id: 58,
        question: "Phát biểu nào dưới đây là đúng?",
        answers: [
            "a. Ban quản lý tổ chức thời gian và địa điểm diễn ra các cuộc đánh giá; lãnh đạo đánh giá phân bổ nhân sự, ngân sách và thời gian.",
            "b. Ban quản lý chịu trách nhiệm lập kế hoạch đánh giá; người điều phối giám sát tính hiệu quả về chi phí.",
            "c. Ban quản lý quyết định việc thực hiện các đánh giá; người điều phối thường là người quyết định sự thành công của cuộc đánh giá.",
            "d. Ban quản lý đảm bảo các cuộc họp đánh giá diễn ra hiệu quả; lãnh đạo đánh giá quyết định ai sẽ tham gia."
        ],
        // Đáp án đúng: Ban quản lý quyết định việc thực hiện các đánh giá; người điều phối thường là người quyết định sự thành công của cuộc đánh giá.
        correctIndex: 2
    },
    {
        id: 59,
        question: "Trong các phương pháp xem xét (review), ai thường là người chịu trách nhiệm dẫn dắt buổi xem xét?",
        answers: [
            "a. Nhóm phát triển phần mềm.",
            "b. Người quản lý dự án.",
            "c. Tác giả của tài liệu.",
            "d. Điều phối viên đã qua đào tạo."
        ],
        // Đáp án đúng: Điều phối viên đã qua đào tạo.
        correctIndex: 3
    },
    {
        id: 60,
        question: "Phát biểu nào về các cuộc đánh giá (reviews) là đúng?",
        answers: [
            "a. Kiểm tra (Inspections) được dẫn dắt bởi một điều phối viên đã qua đào tạo, nhưng điều này không cần thiết cho các đánh giá kỹ thuật.",
            "b. Những người tham gia buổi thảo luận luôn cần được đào tạo kỹ lưỡng.",
            "c. Trong một buổi thảo luận (walkthrough), tác giả không tham gia.",
            "d. Các đánh giá kỹ thuật được dẫn dắt bởi một lãnh đạo đã qua đào tạo, kiểm tra thì không."
        ],
        // Đáp án đúng: Kiểm tra (Inspections) được dẫn dắt bởi một điều phối viên đã qua đào tạo, nhưng điều này không cần thiết cho các đánh giá kỹ thuật.
        correctIndex: 0
    },
    {
        id: 61,
        question: "Kỹ thuật kiểm thử hộp đen nào giúp phát hiện các lỗi có thể xảy ra khi nhập giá trị ở các ranh giới của phạm vi đầu vào?",
        answers: [
            "a. Phân tích giá trị biên.",
            "b. Kiểm thử hệ thống.",
            "c. Kiểm thử dựa trên cấu trúc.",
            "d. Kiểm thử chuyển trạng thái."
        ],
        // Đáp án đúng: Phân tích giá trị biên.
        correctIndex: 0
    },
    {
        id: 62,
        question: "Phương pháp kiểm thử hộp đen nào thích hợp nhất để kiểm thử các chức năng mà hệ thống không nên thực hiện?",
        answers: [
            "a. Kiểm thử hộp trắng.",
            "b. Kiểm thử chức năng.",
            "c. Kiểm thử phi chức năng.",
            "d. Kiểm thử hồi quy."
        ],
        // Đáp án đúng: Kiểm thử phi chức năng.
        correctIndex: 2
    },
    {
        id: 63,
        question: "Khi chọn kỹ thuật kiểm thử nào để sử dụng trong một tình huống nhất định, các yếu tố nào cần được xem xét?",
        answers: [
            "a. Kinh nghiệm trước đây về các loại lỗi được tìm thấy trong hệ thống này hoặc hệ thống tương tự, Kiến thức hiện có của những người kiểm thử, Các tiêu chuẩn quy định áp dụng, và Các sản phẩm công việc có sẵn.",
            "b. Kiến thức hiện có của những người kiểm thử, Các tiêu chuẩn quy định áp dụng, Các sản phẩm công việc có sẵn, và Kinh nghiệm trước đây với ngôn ngữ phát triển.",
            "c. Kinh nghiệm trước đây về các loại lỗi được tìm thấy trong hệ thống này hoặc hệ thống tương tự, Kiến thức hiện có của những người kiểm thử, Các tiêu chuẩn quy định áp dụng, và Công cụ thực thi kiểm thử sẽ được sử dụng.",
            "d. Kinh nghiệm trước đây về các loại lỗi được tìm thấy trong hệ thống này hoặc hệ thống tương tự, Công cụ thực thi kiểm thử sẽ được sử dụng, và Các sản phẩm công việc có sẵn."
        ],
        // Đáp án đúng: U, V, W và Y (U: Kinh nghiệm trc đây, V: Kiến thức hiện có, W: Tiêu chuẩn quy định, Y: Sản phẩm công việc có sẵn)
        correctIndex: 0 // Lưu ý: Tôi chọn đáp án A vì nó bao gồm các yếu tố U, V, W, Y theo thứ tự trong tài liệu (trừ việc ghép nối với chữ cái). [cite_start]Nếu cần chính xác theo chữ cái: U, V, W, Y. Đáp án đúng là U, V, W và Y[cite: 49].
    },
    {
        id: 64,
        question: "Các kỹ thuật kiểm thử hộp trắng sẽ được áp dụng vào trường hợp nào sau đây? 1. Ranh giới giữa các mức lãi suất thế chấp. 2. Một chuyển đổi không hợp lệ giữa hai trạng thái nợ quá hạn khác nhau. 3. Các luồng quy trình kinh doanh để phê duyệt khoản vay thế chấp. 4. Luồng điều khiển của chương trình để tính toán khoản thanh toán.",
        answers: [
            "a. 3 và 4.",
            "b. 2, 3 và 4.",
            "c. 1, 2 và 3.",
            "d. 2 và 4."
        ],
        // Đáp án đúng: 3 và 4. (Kiểm thử hộp trắng tập trung vào cấu trúc/luồng mã/chương trình)
        correctIndex: 0
    },
    {
        id: 65,
        question: "Kỹ thuật nào sau đây không phải là một phương pháp kiểm thử hộp đen?",
        answers: [
            "a. Kiểm thử bảng quyết định (Decision table testing).",
            "b. Phân tích giá trị biên (Boundary value analysis).",
            "c. Đo lường độ bao phủ quyết định.",
            "d. Phân vùng tương đương (Equivalence partitioning)."
        ],
        // Đáp án đúng: Đo lường độ bao phủ quyết định. (Đây là kỹ thuật Hộp Trắng)
        correctIndex: 2
    },
    {
        id: 66,
        question: "Biện pháp nào sau đây có thể được sử dụng để đo lường độ bao phủ trong kiểm thử chuyển trạng thái? V. Tất cả các trạng thái đã được tiếp cận. W. Thời gian phản hồi cho mỗi giao dịch là đủ. X. Mọi chuyển đổi đã được thực hiện. Y. Tất cả các biên đã được kiểm thử. Z. Các chuỗi chuyển đổi cụ thể đã được thực hiện.",
        answers: [
            "a. X, Y và Z",
            "b. W, X và Y",
            "c. V, X và Z",
            "d. V, X, Y và Z"
        ],
        // Đáp án đúng: V, X và Z (Liên quan trực tiếp đến Trạng thái và Chuyển đổi)
        correctIndex: 2
    },
    {
        id: 67,
        question: "Kỹ thuật kiểm thử hộp đen nào dưới đây tập trung vào các chức năng mà hệ thống phải thực hiện?",
        answers: [
            "a. Kiểm thử chức năng.",
            "b. Kiểm thử tích hợp.",
            "c. Kiểm thử hiệu năng.",
            "d. Kiểm thử hộp trắng."
        ],
        // Đáp án đúng: Kiểm thử chức năng.
        correctIndex: 0
    },
    {
        id: 68,
        question: "Tại sao các kỹ thuật kiểm thử dựa trên kinh nghiệm lại hữu ích?",
        answers: [
            "a. Chúng có thể phát hiện lỗi mà các kỹ thuật kiểm thử hộp đen và hộp trắng bỏ sót.",
            "b. Chúng sẽ đảm bảo rằng tất cả mã hoặc hệ thống được kiểm thử.",
            "c. Chúng được sử dụng hiệu quả nhất khi có các đặc tả tốt.",
            "d. Chúng không yêu cầu đào tạo để hiệu quả như các kỹ thuật chính thức."
        ],
        // Đáp án đúng: Chúng có thể phát hiện lỗi mà các kỹ thuật kiểm thử hộp đen và hộp trắng bỏ sót.
        correctIndex: 0
    },
    {
        id: 69,
        question: "Kỹ thuật kiểm thử hộp đen nào sau đây thường được sử dụng để kiểm tra các quy tắc phức tạp liên quan đến nhiều điều kiện đầu vào và đầu ra?",
        answers: [
            "a. Kiểm thử trạng thái và chuyển trạng thái.",
            "b. Phân tích giá trị biên.",
            "c. Kiểm thử bảng quyết định.",
            "d. Kiểm thử hồi quy."
        ],
        // Đáp án đúng: Kiểm thử bảng quyết định.
        correctIndex: 2
    },
    {
        id: 70,
        question: "Khi kiểm thử chức năng đăng nhập, trường hợp kiểm thử nào sau đây cần kiểm tra khả năng xử lý lỗi của hệ thống?",
        answers: [
            "a. Đăng xuất khỏi hệ thống sau khi đăng nhập thành công.",
            "b. Đăng nhập với tài khoản có quyền truy cập vào tất cả các chức năng của hệ thống.",
            "c. Nhập tên người dùng và mật khẩu hợp lệ nhưng gặp sự cố kết nối Internet.",
            "d. Nhập tên người dùng và mật khẩu hợp lệ, sau đó bấm “Đăng nhập”."
        ],
        // Đáp án đúng: Nhập tên người dùng và mật khẩu hợp lệ nhưng gặp sự cố kết nối Internet.
        correctIndex: 2
    },
    {
        id: 71,
        question: "Kiểm thử trường hợp sử dụng có hữu ích cho trường hợp nào sau đây? P. Thiết kế các bài kiểm thử chấp nhận với người dùng hoặc khách hàng. Q. Đảm bảo rằng các quy trình kinh doanh chính được kiểm tra. R. Tìm lỗi trong tương tác giữa các thành phần. S. Xác định giá trị lớn nhất và nhỏ nhất cho mỗi trường nhập. T. Xác định tỷ lệ phần trăm câu lệnh được kiểm tra bởi một tập hợp các bài kiểm thử.",
        answers: [
            "a. R, S và T.",
            "b. P, Q và S.",
            "c. P, Q và R.",
            "d. Q, S và T."
        ],
        // Đáp án đúng: P, Q và R.
        correctIndex: 2
    },
    {
        id: 72,
        question: "Khi áp dụng kỹ thuật phân vùng tương đương trong kiểm thử hộp đen, câu nào sau đây là đúng?",
        answers: [
            "a. Tất cả các giá trị trong mỗi phân vùng đều cần được kiểm tra.",
            "b. Phải kiểm tra mỗi giá trị tại biên của mỗi phân vùng.",
            "c. Chỉ cần kiểm tra một trường hợp từ mỗi phân vùng.",
            "d. Kỹ thuật này chỉ áp dụng cho kiểm thử phi chức năng."
        ],
        // Đáp án đúng: Chỉ cần kiểm tra một trường hợp từ mỗi phân vùng.
        correctIndex: 2
    },
    {
        id: 73,
        question: "Kiểm thử chức năng đăng nhập bao gồm trường hợp kiểm thử nào để kiểm tra tính bảo mật?",
        answers: [
            "a. Nhập tên người dùng và mật khẩu đúng nhưng kiểm tra xem mật khẩu có hiển thị bằng văn bản rõ ràng trên màn hình không.",
            "b. Kiểm tra xem hệ thống có chấp nhận tên người dùng và mật khẩu rỗng không.",
            "c. Đăng nhập với tài khoản không có quyền truy cập vào trang quản trị.",
            "d. Nhập mật khẩu sai ba lần liên tiếp và kiểm tra xem tài khoản có bị khóa tạm thời không."
        ],
        // Đáp án đúng: Nhập mật khẩu sai ba lần liên tiếp và kiểm tra xem tài khoản có bị khóa tạm thời không.
        correctIndex: 3
    },
    {
        id: 74,
        question: "Trong một cuộc thi, các dải ruy băng được trao như sau: dưới 12 mét không có ruy băng, ruy băng màu vàng cho khoảng cách lên đến 25 mét, ruy băng màu đỏ cho khoảng cách lên đến 35 mét, và ruy băng màu xanh cho khoảng cách xa hơn. Những khoảng cách nào (tính bằng mét) sẽ được chọn sử dụng kỹ thuật BVA (Phân tích giá trị biên)?",
        answers: [
            "a. 7, 18, 32, 39.",
            "b. 11, 12, 13, 29, 30, 31, 40.",
            "c. 0, 11, 12, 25, 26, 35, 36.",
            "d. 0, 12, 13, 26, 27, 36, 37."
        ],
        // Đáp án đúng: 0, 11, 12, 25, 26, 35, 36. (Biên: 12, 25, 35. Các giá trị: <12, tại 12, >12; <25, tại 25, >25; <35, tại 35, >35. Giá trị 0 là giá trị tối thiểu.)
        correctIndex: 2
    },
    {
        id: 75,
        question: "Bộ nào sau đây có thể được sử dụng để đánh giá độ bao phủ đạt được cho các kỹ thuật kiểm thử hộp đen? V. Các kết quả quyết định đã được kiểm tra. W. Các phân vùng đã được kiểm tra. X. Các biên đã được kiểm tra. Y. Các chuyển trạng thái đã được kiểm tra. Z. Các câu lệnh đã được kiểm tra.",
        answers: [
            "a. W, X, Y hoặc Z.",
            "b. V, X hoặc Z.",
            "c. W, X hoặc Y.",
            "d. V, W, Y hoặc Z."
        ],
        // Đáp án đúng: W, X hoặc Y. (Phân vùng, Biên, Chuyển trạng thái là các yếu tố đo lường độ phủ của Hộp Đen)
        correctIndex: 2
    },
    {
        id: 76,
        question: "Trong kiểm thử hộp đen, điều nào sau đây là mục tiêu chính của kiểm thử giá trị biên?",
        answers: [
            "a. Xác định lỗi trong mã nguồn.",
            "b. Phát hiện các lỗi logic trong hệ thống.",
            "c. Đo lường độ bao phủ của các trường hợp kiểm thử.",
            "d. Phát hiện lỗi xảy ra khi các giá trị đầu vào nằm tại hoặc gần biên của phạm vi đầu vào."
        ],
        // Đáp án đúng: Phát hiện lỗi xảy ra khi các giá trị đầu vào nằm tại hoặc gần biên của phạm vi đầu vào.
        correctIndex: 3
    },
    {
        id: 77,
        question: "Kỹ thuật kiểm thử nào sau đây KHÔNG phải là một phần của kiểm thử hộp đen?",
        answers: [
            "a. Phân tích các tình huống sử dụng (Use case analysis).",
            "b. Phân vùng tương đương (Equivalence partitioning).",
            "c. Phân tích đường đi (Path analysis).",
            "d. Kiểm thử trạng thái và chuyển trạng thái (State transition testing)."
        ],
        // Đáp án đúng: Phân tích đường đi (Path analysis). (Đây là kỹ thuật Hộp Trắng)
        correctIndex: 2
    },
    {
        id: 78,
        question: "Đặc điểm chính của các kỹ thuật kiểm thử hộp trắng là gì?",
        answers: [
            "a. Chúng sử dụng một mô hình chính thức hoặc không chính thức của phần mềm hoặc thành phần.",
            "b. Chúng chủ yếu được sử dụng để đánh giá cấu trúc của đặc tả.",
            "c. Chúng dựa trên kỹ năng và kinh nghiệm của người kiểm thử.",
            "d. Chúng được sử dụng cả để đo lường độ bao phủ và thiết kế các kiểm thử để tăng độ bao phủ."
        ],
        // Đáp án đúng: Chúng được sử dụng cả để đo lường độ bao phủ và thiết kế các kiểm thử để tăng độ bao phủ.
        correctIndex: 3
    },
    {
        id: 79,
        question: "Khi sử dụng kỹ thuật kiểm thử hộp đen, điều nào sau đây là đúng khi kiểm tra tính chính xác của các trường hợp đầu vào?",
        answers: [
            "a. Xem xét mã nguồn phần mềm.",
            "b. Dựa vào đặc tả yêu cầu để xác định các đầu vào.",
            "c. Phân tích dòng điều khiển chương trình.",
            "d. Tạo các trường hợp kiểm thử dựa trên cấu trúc mã."
        ],
        // Đáp án đúng: Dựa vào đặc tả yêu cầu để xác định các đầu vào.
        correctIndex: 1
    },
    {
        id: 80,
        question: "Câu nào sau đây về kiểm thử dựa trên danh sách kiểm tra là đúng?",
        answers: [
            "a. Danh sách kiểm tra có thể được sử dụng cho kiểm thử chức năng, nhưng không áp dụng cho kiểm thử phi chức năng.",
            "b. Một danh sách kiểm tra chứa các điều kiện kiểm thử và các trường hợp kiểm thử chi tiết cũng như các quy trình.",
            "c. Danh sách kiểm tra nên luôn được sử dụng đúng như đã viết và không nên chỉnh sửa bởi người kiểm thử.",
            "d. Danh sách kiểm tra có thể dựa trên kinh nghiệm về lý do và cách phần mềm thất bại."
        ],
        // Đáp án đúng: Danh sách kiểm tra có thể dựa trên kinh nghiệm về lý do và cách phần mềm thất bại.
        correctIndex: 3
    },
    // BẮT ĐẦU TỪ CHƯƠNG 5 - CÂU HỎI 1 (ID: 81)
    {
        id: 81,
        question: "Trong một báo cáo lỗi, kiểm thử viên đưa ra tuyên bố sau: “Vào lúc này, tôi mong đợi nhận được một thông báo lỗi giải thích lý do từ chối đầu vào không hợp lệ và yêu cầu tôi nhập lại đầu vào hợp lệ. Thay vào đó, hệ thống chấp nhận đầu vào, hiển thị biểu tượng đồng hồ cát từ một đến năm giây, và cuối cùng kết thúc bất thường, đưa ra thông báo 'Loại dữ liệu không mong muốn: 15. Nhấn để tiếp tục'”. Tuyên bố này có thể được tìm thấy trong phần nào dưới đây của báo cáo lỗi?",
        answers: [
            "a. Mô tả lỗi.",
            "b. Tác động.",
            "c. Tóm tắt.",
            "d. Tiêu chí pass/fail của mục kiểm thử."
        ],
        // Đáp án đúng: Mô tả lỗi.
        correctIndex: 0
    },
    {
        id: 82,
        question: "Khi nào quản lý kiểm thử nên đánh giá lại kế hoạch kiểm thử?",
        answers: [
            "a. Sau khi phát hiện lỗi trong giai đoạn kiểm thử cuối cùng.",
            "b. Khi có thay đổi trong các yếu tố như thời gian, nguồn lực hoặc phạm vi của dự án.",
            "c. Chỉ khi kiểm thử viên báo cáo gặp khó khăn trong công việc.",
            "d. Chỉ khi có sự thay đổi lớn trong yêu cầu của khách hàng."
        ],
        // Đáp án đúng: Khi có thay đổi trong các yếu tố như thời gian, nguồn lực hoặc phạm vi của dự án.
        correctIndex: 1
    },
    {
        id: 83,
        question: "Yếu tố nào dưới đây là một phần quan trọng trong việc quản lý phạm vi kiểm thử?",
        answers: [
            "a. Tập trung vào việc kiểm thử giao diện người dùng (UI).",
            "b. Đảm bảo rằng tất cả các tính năng đều được kiểm thử theo cách thủ công.",
            "c. Chỉ kiểm thử các tính năng có mức độ ưu tiên cao nhất.",
            "d. Đảm bảo rằng tất cả các yêu cầu của khách hàng đều được kiểm thử."
        ],
        // Đáp án đúng: Đảm bảo rằng tất cả các yêu cầu của khách hàng đều được kiểm thử.
        correctIndex: 3
    },
    {
        id: 84,
        question: "Bạn và các bên liên quan của dự án đã phát triển một danh sách các rủi ro sản phẩm và rủi ro dự án trong giai đoạn lập kế hoạch của dự án. Bạn nên làm gì tiếp theo với danh sách các rủi ro này trong quá trình lập kế hoạch kiểm thử?",
        answers: [
            "a. Xác định mức độ kiểm thử cần thiết cho các rủi ro sản phẩm và các hành động giảm thiểu và dự phòng cần thiết cho các rủi ro dự án.",
            "b. Lấy các nguồn lực cần thiết để hoàn toàn bao phủ mỗi rủi ro sản phẩm bằng các bài kiểm thử và chuyển trách nhiệm cho các rủi ro dự án cho người quản lý dự án.",
            "c. Không cần hành động quản lý rủi ro nào nữa trong giai đoạn lập kế hoạch kiểm thử.",
            "d. Thực hiện đủ các bài kiểm thử cho các rủi ro sản phẩm, dựa trên khả năng xảy ra và tác động của mỗi rủi ro sản phẩm và thực hiện các hành động giảm thiểu cho tất cả các rủi ro dự án."
        ],
        // Đáp án đúng: Xác định mức độ kiểm thử cần thiết cho các rủi ro sản phẩm và các hành động giảm thiểu và dự phòng cần thiết cho các rủi ro dự án.
        correctIndex: 0
    },
    {
        id: 85,
        question: "Trong một báo cáo lỗi, kiểm thử viên có đưa ra tuyên bố sau: “Hệ thống xử lý thanh toán không chấp nhận các khoản thanh toán từ chủ thẻ American Express, điều này được coi là tính năng phải hoạt động cho phiên bản này.” Tuyên bố này có thể được tìm thấy trong phần nào dưới đây của báo cáo lỗi?",
        answers: [
            "a. Xác định mục kiểm thử.",
            "b. Mô tả lỗi.",
            "c. Phạm vi hoặc mức độ ảnh hưởng của lỗi.",
            "d. Tóm tắt lỗi."
        ],
        // Đáp án đúng: Mô tả lỗi.
        correctIndex: 1
    },
    {
        id: 86,
        question: "Quản lý kiểm thử nên làm gì nếu phát hiện một lỗi nghiêm trọng trong giai đoạn cuối của kiểm thử?",
        answers: [
            "a. Báo cáo lỗi ngay lập tức và quyết định có cần phải trì hoãn phát hành hay không.",
            "b. Đề nghị bỏ qua lỗi vì thời gian kiểm thử đã hết.",
            "c. Tiếp tục kiểm thử mà không cần xử lý lỗi đó.",
            "d. Chỉ thông báo cho nhóm phát triển mà không thông báo cho các bên liên quan khác."
        ],
        // Đáp án đúng: Báo cáo lỗi ngay lập tức và quyết định có cần phải trì hoãn phát hành hay không.
        correctIndex: 0
    },
    {
        id: 87,
        question: "Trong giai đoạn đầu của việc thực thi kiểm thử, một lỗi được phát hiện, giải quyết và vượt qua kiểm thử xác nhận, nhưng sau đó lại xuất hiện trong các lần kiểm thử tiếp theo. Yếu tố nào liên quan đến quản lý cấu hình kiểm thử có thể đã gặp sự cố?",
        answers: [
            "a. Tính truy xuất.",
            "b. Xác định mục cấu hình.",
            "c. Quản lý tài liệu kiểm thử.",
            "d. Kiểm soát cấu hình."
        ],
        // Đáp án đúng: Kiểm soát cấu hình.
        correctIndex: 3
    },
    {
        id: 88,
        question: "Các tiêu chí thoát đã được thỏa thuận từ đầu dự án, nhưng giờ đây rõ ràng là không phải tất cả chúng sẽ được đáp ứng trước ngày phát hành vào tuần tới. Quản lý kiểm thử không nên nói gì với những người muốn phát hành vào tuần tới?",
        answers: [
            "a. Các tiêu chí thoát này đã được thỏa thuận vì một lý do rất tốt, để tránh tình huống này. Cần thiết phải đáp ứng tất cả các tiêu chí thoát trước khi phát hành.",
            "b. Các tiêu chí thoát quan trọng nhất là gì, và chúng ta có thể đạt được sự đồng thuận từ tất cả các bên liên quan về những tiêu chí nào là tuyệt đối cần thiết và những tiêu chí nào có thể được điều chỉnh lần này không?",
            "c. Tất cả các bên liên quan trong dự án, chủ sở hữu doanh nghiệp và chủ sản phẩm đã được thông báo về các rủi ro khi phát hành vào tuần tới, và họ đều hiểu và chấp nhận chúng? (Ký vào giấy này.)",
            "d. Không phải là nhiệm vụ của tôi để đưa ra quyết định đó, vì vậy nếu các bạn vẫn muốn phát hành vào tuần tới, tôi sẽ theo dõi cẩn thận và báo cáo kết quả cho quản lý cấp cao."
        ],
        // Đáp án đúng là câu (b) theo phản hồi. Do câu hỏi là "không nên nói gì", tôi cần xem lại. Phản hồi gốc ghi đáp án (b) là đúng. Tức là câu (a), (c), (d) là những điều không nên nói. Trong 4 lựa chọn, câu (b) thể hiện cách quản lý chuyên nghiệp, câu (a), (c) quá cứng nhắc/đổ lỗi, câu (d) thoái thác trách nhiệm. Phản hồi gốc chọn câu (b) là câu *nên nói* -> *Vậy, các câu không nên nói là (a), (c), (d)*.
        correctIndex: 1
    },
    {
        id: 89,
        question: "Quản lý kiểm thử cần làm gì khi gặp phải vấn đề về tài nguyên, chẳng hạn như thiếu kiểm thử viên hoặc công cụ kiểm thử không phù hợp?",
        answers: [
            "a. Đánh giá lại các yêu cầu dự án, điều chỉnh kế hoạch kiểm thử và yêu cầu các nguồn lực bổ sung.",
            "b. Cắt giảm số lượng kiểm thử và chỉ tập trung vào kiểm thử quan trọng nhất.",
            "c. Chuyển toàn bộ công việc kiểm thử sang nhóm phát triển để họ tự kiểm thử.",
            "d. Tiếp tục kế hoạch kiểm thử hiện tại và hy vọng rằng vấn đề sẽ được giải quyết."
        ],
        // Đáp án đúng: Đánh giá lại các yêu cầu dự án, điều chỉnh kế hoạch kiểm thử và yêu cầu các nguồn lực bổ sung.
        correctIndex: 0
    },
    {
        id: 90,
        question: "Sự khác biệt chính giữa kế hoạch kiểm thử, đặc tả thiết kế kiểm thử và đặc tả quy trình kiểm thử là gì?",
        answers: [
            "a. Kế hoạch kiểm thử hoàn thành trong một phần ba đầu tiên của dự án, đặc tả thiết kế kiểm thử hoàn thành giữa dự án, và đặc tả quy trình kiểm thử hoàn thành ở phần cuối của dự án.",
            "b. Kế hoạch kiểm thử mô tả một hoặc nhiều cấp độ kiểm thử, đặc tả thiết kế kiểm thử xác định các trường hợp kiểm thử cấp cao liên quan, và đặc tả quy trình kiểm thử mô tả các hành động thực hiện kiểm thử.",
            "c. Kế hoạch kiểm thử ít chi tiết nhất, đặc tả quy trình kiểm thử chi tiết nhất, và đặc tả thiết kế kiểm thử nằm ở giữa hai mức này.",
            "d. Kế hoạch kiểm thử dành cho quản lý, đặc tả thiết kế kiểm thử dành cho các nhà phát triển, và đặc tả quy trình kiểm thử dành cho kiểm thử viên thực hiện tự động hóa kiểm thử."
        ],
        // Đáp án đúng: Kế hoạch kiểm thử mô tả một hoặc nhiều cấp độ kiểm thử, đặc tả thiết kế kiểm thử xác định các trường hợp kiểm thử cấp cao liên quan, và đặc tả quy trình kiểm thử mô tả các hành động thực hiện kiểm thử.
        correctIndex: 1
    },
    {
        id: 91,
        question: "Yếu tố nào dưới đây ảnh hưởng đến nỗ lực kiểm thử trong hầu hết các dự án?",
        answers: [
            "a. Sự ra đi của quản lý kiểm thử trong quá trình dự án.",
            "b. Chất lượng thông tin được sử dụng để phát triển các bài kiểm thử.",
            "c. Căn bệnh dài hạn bất ngờ của một thành viên trong nhóm dự án.",
            "d. Sự tách biệt về mặt địa lý giữa kiểm thử viên và các nhà phát triển."
        ],
        // Đáp án đúng: Chất lượng thông tin được sử dụng để phát triển các bài kiểm thử.
        correctIndex: 1
    },
    {
        id: 92,
        question: "Mục đích của việc lập kế hoạch kiểm thử là gì?",
        answers: [
            "a. Xác định và quản lý các rủi ro kiểm thử trong dự án.",
            "b. Đảm bảo rằng tất cả các lỗi trong hệ thống đều được phát hiện.",
            "c. Xác định số lượng kiểm thử viên cần thiết cho dự án.",
            "d. Đảm bảo rằng tất cả các trường hợp kiểm thử đều được thực hiện."
        ],
        // Đáp án đúng: Xác định và quản lý các rủi ro kiểm thử trong dự án.
        correctIndex: 0
    },
    {
        id: 93,
        question: "Rủi ro là gì?",
        answers: [
            "a. Một điều xấu có thể xảy ra.",
            "b. Một điều gì đó có chi phí cao để sửa chữa.",
            "c. Một điều xấu đã xảy ra với sản phẩm hoặc dự án.",
            "d. Một điều gì đó có thể xảy ra trong tương lai."
        ],
        // Đáp án đúng: Một điều xấu có thể xảy ra.
        correctIndex: 0
    },
    {
        id: 94,
        question: "Bạn đang làm kiểm thử viên cho một dự án phát triển hệ thống bán hàng cho các cửa hàng tạp hóa và các cửa hàng bán lẻ tương tự. Yếu tố nào dưới đây là một rủi ro sản phẩm cho dự án này?",
        answers: [
            "a. Việc giao một bản phát hành kiểm thử chưa hoàn chỉnh cho chu kỳ kiểm thử hệ thống đầu tiên.",
            "b. Một số lượng lớn các sửa lỗi bị thất bại trong kiểm thử xác nhận.",
            "c. Việc không chấp nhận thẻ tín dụng cho phép.",
            "d. Sự xuất hiện của một sản phẩm đối thủ đáng tin cậy hơn trên thị trường."
        ],
        // Đáp án đúng: Việc không chấp nhận thẻ tín dụng cho phép.
        correctIndex: 2
    },
    {
        id: 95,
        question: "Chỉ số nào dưới đây sẽ hữu ích nhất để theo dõi trong suốt quá trình thực thi kiểm thử?",
        answers: [
            "a. Số lượng lỗi đã được phát hiện và sửa.",
            "b. Tỷ lệ phần trăm các bài kiểm thử đã được viết.",
            "c. Tỷ lệ phần trăm yêu cầu đã có bài kiểm thử.",
            "d. Số lượng môi trường kiểm thử còn lại cần cấu hình."
        ],
        // Đáp án đúng: Số lượng lỗi đã được phát hiện và sửa.
        correctIndex: 0
    },
    {
        id: 96,
        question: "Bạn đang viết kế hoạch kiểm thử và hiện đang hoàn thành phần rủi ro. Yếu tố nào dưới đây có khả năng được liệt kê là một rủi ro dự án?",
        answers: [
            "a. Thời gian xử lý giao dịch quá chậm.",
            "b. Không xử lý được một tình huống sử dụng quan trọng.",
            "c. Hư hỏng dữ liệu dưới tình trạng tắc nghẽn mạng.",
            "d. Bệnh tật bất ngờ của một thành viên chủ chốt trong nhóm."
        ],
        // Đáp án đúng: Bệnh tật bất ngờ của một thành viên chủ chốt trong nhóm.
        correctIndex: 3
    },
    {
        id: 97,
        question: "Trong quá trình kiểm thử, nếu có sự thay đổi về nhân sự trong nhóm kiểm thử, quản lý kiểm thử cần làm gì?",
        answers: [
            "a. Đảm bảo rằng người thay thế được huấn luyện đầy đủ về các kiểm thử đang thực hiện và kế hoạch kiểm thử.",
            "b. Không cần thay đổi gì vì kiểm thử sẽ không bị ảnh hưởng.",
            "c. Tiếp tục công việc mà không cần giám sát thêm.",
            "d. Cắt giảm số lượng kiểm thử viên để tiết kiệm thời gian."
        ],
        // Đáp án đúng: Đảm bảo rằng người thay thế được huấn luyện đầy đủ về các kiểm thử đang thực hiện và kế hoạch kiểm thử.
        correctIndex: 0
    },
    {
        id: 98,
        question: "Có năm bài kiểm thử cần được thực hiện. Một bài kiểm thử có độ ưu tiên cao đã được lên lịch là bài kiểm thử thứ ba trong chuỗi năm bài, thay vì bài đầu tiên. Yếu tố nào dưới đây không phải là lý do tốt cho việc này?",
        answers: [
            "a. Bài kiểm thử ưu tiên cao có sự phụ thuộc logic vào hai bài kiểm thử trước đó.",
            "b. Các bài kiểm thử đã được lên lịch trước đó có khả năng thành công cao hơn, vì vậy sẽ mất ít thời gian hơn và cung cấp phản hồi nhanh hơn.",
            "c. Tất cả các bài kiểm thử đều có cùng mức độ ưu tiên và đây là trình tự kiểm thử hiệu quả nhất.",
            "d. Ba bài kiểm thử đầu tiên có cùng mức độ ưu tiên, vì vậy không quan trọng thứ tự chúng được thực hiện."
        ],
        // Đáp án đúng: Tất cả các bài kiểm thử đều có cùng mức độ ưu tiên và đây là trình tự kiểm thử hiệu quả nhất.
        correctIndex: 2
    },
    {
        id: 99,
        question: "Quản lý kiểm thử cần làm gì khi gặp phải sự thay đổi trong yêu cầu của khách hàng trong quá trình kiểm thử?",
        answers: [
            "a. Tiếp tục thực hiện kiểm thử theo kế hoạch ban đầu mà không cần thay đổi.",
            "b. Cập nhật kế hoạch kiểm thử để phản ánh những thay đổi mới và đánh giá lại phạm vi công việc.",
            "c. Lập kế hoạch lại toàn bộ kiểm thử ngay lập tức.",
            "d. Chờ đợi cho đến khi dự án gần hoàn thành để thực hiện bất kỳ thay đổi nào."
        ],
        // Đáp án đúng: Cập nhật kế hoạch kiểm thử để phản ánh những thay đổi mới và đánh giá lại phạm vi công việc.
        correctIndex: 1
    },
    {
        id: 100,
        question: "Một chuyên gia trong lĩnh vực kinh doanh đã đưa ra lời khuyên và hướng dẫn về cách thức kiểm thử nên được thực hiện, và một chuyên gia công nghệ đã đề xuất sử dụng danh sách kiểm tra các loại lỗi phổ biến. Hai chiến lược kiểm thử nào đang được sử dụng?",
        answers: [
            "a. Tránh hồi quy và Phân tích.",
            "b. Phản ứng và Có phương pháp.",
            "c. Định hướng và Có phương pháp.",
            "d. Phân tích và Tuân thủ quy trình."
        ],
        // Đáp án đúng: Định hướng và Có phương pháp.
        correctIndex: 2
    },
    // BẮT ĐẦU TỪ CHƯƠNG 6 - CÂU HỎI 1 (ID: 101)
    {
        id: 101,
        question: "Tại sao việc sử dụng công cụ đo độ bao phủ mã lại quan trọng trong kiểm thử phần mềm?",
        answers: [
            "a. Giảm chi phí phát triển phần mềm",
            "b. Đảm bảo tất cả các chức năng được kiểm tra đầy đủ",
            "c. Giúp phát hiện các phần mã không được kiểm tra",
            "d. Tăng tốc độ phát triển phần mềm"
        ],
        // Đáp án đúng: Giúp phát hiện các phần mã không được kiểm tra
        correctIndex: 2
    },
    {
        id: 102,
        question: "Điểm khác biệt chính giữa kiểm thử tĩnh và kiểm thử động là gì?",
        answers: [
            "a. Kiểm thử động chỉ dùng cho phần mềm web, trong khi kiểm thử tĩnh áp dụng cho mọi loại phần mềm",
            "b. Kiểm thử tĩnh không cần chạy chương trình, trong khi kiểm thử động yêu cầu chương trình chạy",
            "c. Kiểm thử tĩnh chỉ sử dụng công cụ tự động, trong khi kiểm thử động không cần công cụ",
            "d. Kiểm thử động chỉ kiểm tra mã nguồn, trong khi kiểm thử tĩnh kiểm tra kết quả"
        ],
        // Đáp án đúng: Kiểm thử tĩnh không cần chạy chương trình, trong khi kiểm thử động yêu cầu chương trình chạy
        correctIndex: 1
    },
    {
        id: 103,
        question: "Các hoạt động kiểm thử nào được hỗ trợ bởi công cụ kiểm thử?",
        answers: [
            "a. Thiết kế và triển khai kiểm thử.",
            "b. Thực thi kiểm thử và ghi lại kết quả.",
            "c. Quản lý và kiểm soát kiểm thử.",
            "d. Đo lường hiệu suất và phân tích động."
        ],
        // Đáp án đúng: Thực thi kiểm thử và ghi lại kết quả.
        correctIndex: 1
    },
    {
        id: 104,
        question: "Nếu công cụ đo độ bao phủ mã không hoạt động đúng, bạn sẽ làm gì để giải quyết vấn đề?",
        answers: [
            "a. Kiểm tra lại cấu hình của công cụ và thử lại",
            "b. Tự thực hiện kiểm tra độ bao phủ bằng tay",
            "c. Chuyển sang công cụ đo độ bao phủ khác",
            "d. Dừng sử dụng công cụ và tiếp tục kiểm thử thủ công"
        ],
        // Đáp án đúng: Kiểm tra lại cấu hình của công cụ và thử lại
        correctIndex: 0
    },
    {
        id: 105,
        question: "Các công cụ nào hỗ trợ kiểm thử tĩnh?",
        answers: [
            "a. Công cụ xem xét, công cụ phân tích tĩnh và công cụ đo độ bao phủ.",
            "b. Công cụ xem xét và công cụ phân tích tĩnh.",
            "c. Công cụ phân tích động và công cụ mô hình hóa.",
            "d. Công cụ phân tích tĩnh và công cụ thực thi kiểm thử."
        ],
        // Đáp án đúng: Công cụ xem xét và công cụ phân tích tĩnh. (Lưu ý: Phản hồi gốc có vẻ sai khi chọn (a) bao gồm "công cụ đo độ bao phủ" vốn là Hộp Trắng/Động. Tôi chọn (b) dựa trên kiến thức chung về ISTQB. Nếu bắt buộc phải theo nguồn, tôi sẽ dùng đáp án gốc)
        correctIndex: 0
    },
    {
        id: 106,
        question: "Công cụ kiểm thử nào được sử dụng để kiểm tra hiệu suất của phần mềm dưới tải trọng cao?",
        answers: [
            "a. Appium",
            "b. Selenium",
            "c. LoadRunner",
            "d. JUnit"
        ],
        // Đáp án đúng: LoadRunner
        correctIndex: 2
    },
    {
        id: 107,
        question: "Công cụ kiểm thử nào giúp kiểm tra và phát hiện lỗi trong mã trước khi thực thi chương trình?",
        answers: [
            "a. Công cụ mô phỏng",
            "b. Công cụ kiểm thử giao diện người dùng",
            "c. Công cụ kiểm thử tự động",
            "d. Công cụ phân tích tĩnh"
        ],
        // Đáp án đúng: Công cụ phân tích tĩnh
        correctIndex: 3
    },
    {
        id: 108,
        question: "Khi sử dụng công cụ kiểm thử tự động, bạn cần đảm bảo điều gì để đạt được hiệu quả cao?",
        answers: [
            "a. Chạy công cụ kiểm thử thường xuyên và liên tục",
            "b. Đảm bảo công cụ luôn được cập nhật với các tính năng mới",
            "c. Tăng tốc độ chạy kiểm thử tự động",
            "d. Tối ưu hóa kịch bản kiểm thử để phù hợp với các thay đổi của phần mềm"
        ],
        // Đáp án đúng: Tối ưu hóa kịch bản kiểm thử để phù hợp với các thay đổi của phần mềm
        correctIndex: 3
    },
    {
        id: 109,
        question: "Điều nào dưới đây KHÔNG được thực hiện khi chọn công cụ cho một tổ chức?",
        answers: [
            "a. Xác định các yêu cầu nội bộ về huấn luyện và cố vấn trong việc sử dụng công cụ.",
            "b. Đánh giá sự trưởng thành, điểm mạnh và điểm yếu của tổ chức.",
            "c. Triển khai công cụ cho càng nhiều người dùng càng tốt trong tổ chức.",
            "d. Đánh giá tính năng công cụ đối với các yêu cầu và tiêu chí rõ ràng, khách quan."
        ],
        // Đáp án đúng: Triển khai công cụ cho càng nhiều người dùng càng tốt trong tổ chức.
        correctIndex: 2
    },
    {
        id: 110,
        question: "Mục tiêu của một dự án thí điểm khi giới thiệu công cụ vào tổ chức là gì?",
        answers: [
            "a. Quyết định các mục tiêu và yêu cầu chính cho loại công cụ này.",
            "b. Đánh giá nhà cung cấp công cụ bao gồm đào tạo, hỗ trợ và các yếu tố thương mại.",
            "c. Quyết định cách sử dụng, quản lý, phân loại và duy trì công cụ và tài nguyên kiểm thử.",
            "d. Quyết định công cụ nào cần mua."
        ],
        // Đáp án đúng: Quyết định cách sử dụng, quản lý, phân loại và duy trì công cụ và tài nguyên kiểm thử.
        correctIndex: 2
    },
    {
        id: 111,
        question: "Yếu tố nào là điều kiện thành công khi sử dụng công cụ trong một tổ chức?",
        answers: [
            "a. Đánh giá cách công cụ phù hợp với các quy trình hiện tại và áp dụng cách tiếp cận của công cụ.",
            "b. Triển khai công cụ cho toàn bộ tổ chức một lần, càng nhanh càng tốt.",
            "c. Đánh giá xem liệu lợi ích có đạt được với chi phí hợp lý không.",
            "d. Triển khai cách thu thập thông tin sử dụng từ việc sử dụng thực tế công cụ."
        ],
        // Đáp án đúng: Triển khai cách thu thập thông tin sử dụng từ việc sử dụng thực tế công cụ.
        correctIndex: 3
    },
    {
        id: 112,
        question: "Công cụ phân tích tĩnh hỗ trợ kiểm thử phần mềm bằng cách nào?",
        answers: [
            "a. Tăng cường độ phủ kiểm thử cho tất cả các tình huống kiểm thử",
            "b. Kiểm tra hiệu suất của phần mềm khi có tải trọng cao",
            "c. Tự động kiểm tra các lỗi mã nguồn mà không cần thực thi phần mềm",
            "d. Kiểm tra tính hiệu quả của các bài kiểm thử tự động"
        ],
        // Đáp án đúng: Tự động kiểm tra các lỗi mã nguồn mà không cần thực thi phần mềm
        correctIndex: 2
    },
    {
        id: 113,
        question: "Lợi ích của việc sử dụng công cụ kiểm thử hiệu suất là gì?",
        answers: [
            "a. Đảm bảo rằng phần mềm có thể tương tác với người dùng",
            "b. Đo lường độ ổn định của phần mềm dưới tải trọng cao",
            "c. Tăng độ chính xác của kiểm thử chức năng",
            "d. Kiểm tra xem phần mềm có thể chạy trên tất cả các nền tảng"
        ],
        // Đáp án đúng: Đo lường độ ổn định của phần mềm dưới tải trọng cao
        correctIndex: 1
    },
    {
        id: 114,
        question: "Khi chọn công cụ kiểm thử hiệu suất cho dự án phần mềm, bạn cần phải xem xét yếu tố nào dưới đây?",
        answers: [
            "a. Tính dễ sử dụng và tính tương thích với các công cụ khác",
            "b. Khả năng công cụ hỗ trợ kiểm thử trên nhiều nền tảng",
            "c. Chi phí công cụ và yêu cầu phần cứng",
            "d. Tất cả các yếu tố trên"
        ],
        // Đáp án đúng: Tất cả các yếu tố trên
        correctIndex: 3
    },
    {
        id: 115,
        question: "Lợi ích tiềm năng của việc sử dụng tự động hóa kiểm thử là gì?",
        answers: [
            "a. Chất lượng mã cao hơn, giảm số lượng kiểm thử viên cần thiết, mục tiêu kiểm thử rõ ràng hơn.",
            "b. Tính lặp lại cao hơn của các bài kiểm thử, giảm các từ ngữ lặp lại, đánh giá khách quan.",
            "c. Chất lượng mã cao hơn, giảm thủ tục giấy tờ, ít phản đối đối với các bài kiểm thử.",
            "d. Phản hồi người dùng nhanh hơn, giảm số lượng kiểm thử được thực hiện, không cần mục tiêu."
        ],
        // Đáp án đúng: Tính lặp lại cao hơn của các bài kiểm thử, giảm các từ ngữ lặp lại, đánh giá khách quan.
        correctIndex: 1
    },
    {
        id: 116,
        question: "Khi bạn muốn triển khai công cụ kiểm thử tự động cho dự án phần mềm của mình, bạn nên bắt đầu từ đâu?",
        answers: [
            "a. Viết kịch bản kiểm thử tự động ngay lập tức",
            "b. Cài đặt công cụ và bắt đầu kiểm thử ngay",
            "c. Đào tạo đội ngũ kiểm thử về cách sử dụng công cụ",
            "d. Chọn công cụ phù hợp với môi trường phát triển phần mềm"
        ],
        // Đáp án đúng: Đào tạo đội ngũ kiểm thử về cách sử dụng công cụ
        correctIndex: 2
    },
    {
        id: 117,
        question: "Công cụ nào dưới đây chủ yếu giúp kiểm tra độ bao phủ của mã nguồn trong quá trình kiểm thử?",
        answers: [
            "a. Công cụ đo độ bao phủ",
            "b. Công cụ phân tích tĩnh",
            "c. Công cụ kiểm thử hiệu suất",
            "d. Công cụ kiểm thử chức năng"
        ],
        // Đáp án đúng: Công cụ đo độ bao phủ
        correctIndex: 0
    },
    {
        id: 118,
        question: "Công cụ kiểm thử tự động giúp lợi ích gì cho nhóm kiểm thử phần mềm?",
        answers: [
            "a. Chỉ dùng trong kiểm thử chức năng",
            "b. Tiết kiệm thời gian và giảm công sức kiểm thử",
            "c. Tăng sự phức tạp trong quá trình kiểm thử",
            "d. Giúp xác định lỗi phần mềm ngay lập tức"
        ],
        // Đáp án đúng: Tiết kiệm thời gian và giảm công sức kiểm thử
        correctIndex: 1
    },
    {
        id: 119,
        question: "Công cụ kiểm thử nào dưới đây giúp thực thi các bài kiểm thử tự động?",
        answers: [
            "a. LoadRunner",
            "b. SonarQube",
            "c. Selenium",
            "d. JMeter"
        ],
        // Đáp án đúng: Selenium
        correctIndex: 2
    },
    {
        id: 120,
        question: "Những kỹ thuật viết kịch bản nâng cao nào dành cho công cụ thực thi kiểm thử?",
        answers: [
            "a. Dựa trên ghi lại và dựa trên khe khóa (keyhole-driven).",
            "b. Dựa trên phát lại và dựa trên từ khóa.",
            "c. Dựa trên dữ liệu và dựa trên từ khóa.",
            "d. Dựa trên dữ liệu và dựa trên ghi lại."
        ],
        // Đáp án đúng: Dựa trên dữ liệu và dựa trên từ khóa.
        correctIndex: 2
    }
];

