const quizData = [
    {
        id: 1,
        question: "Số lượng bài toán con trong thuật toán quy hoạch động giải bài toán nhân dãy n ma trận là",
        answers: [
            "a. n²",
            "b. log n",
            "c. n³",
            "d. n"
        ],
        // Đáp án: n² (bậc O(n²))
        correctIndex: 0 
    },
    {
        id: 2,
        question: "Ta tính tích M = ABCD của bốn ma trận với kích thước d = (17, 23, 5, 3, 46). m₁₃ bằng bao nhiêu?",
        answers: [
            "a. 1955",
            "b. 2210",
            "c. 345",
            "d. 1518"
        ],
        // Đáp án: min(1518, 2210) = 1518
        correctIndex: 3 
    },
    {
        id: 3,
        question: "Cho v có k con w₁,...,wₖ. Gọi big(v) là trọng lượng lớn nhất của tập độc lập của cây con có gốc tại v. bignotroot(v) là trọng lượng lớn nhất của tập độc lập không chứa v của cây con có gốc tại v. Công thức tính nào sau đây đúng?",
        answers: [
            "a. bignotroot(v) = Σᵢ₌₁ᵏ big(wᵢ)",
            "b. bignotroot(v) = max { big(v), c(v) + Σᵢ₌₁ᵏ bignotroot(wᵢ) }",
            "c. big(v) = max { bignotroot(v), c(v) + Σᵢ₌₁ᵏ bignotroot(wᵢ) }",
            "d. big(v) = Σᵢ₌₁ᵏ bignotroot(wᵢ)"
        ],
        // Đáp án: bignotroot(v) = Σ big(wᵢ)
        correctIndex: 0 
    },
    {
        id: 4,
        question: "Gọi mᵢⱼ là số phép nhân ít nhất cần thực hiện để tính tích ma trận MᵢMᵢ₊₁...Mⱼ. Khi i = j thì mᵢⱼ bằng bao nhiêu?",
        answers: [
            "a. mᵢⱼ = p * q * r",
            "b. mᵢⱼ = p * r (trong đó ma trận Mᵢ có kích thước p × q và ma trận Mⱼ có kích thước q × r)",
            "c. mᵢⱼ = 1",
            "d. mᵢⱼ = 0"
        ],
        // Đáp án: mᵢⱼ = 0 (tích của một ma trận)
        correctIndex: 3
    },
    {
        id: 5,
        question: "Cho cây G. Gọi bignotroot(v) là trọng lượng lớn nhất của tập độc lập của cây con không chứa v có gốc tại v. Bignotroot(C) = ? (Trọng lượng C=12, G=13, F=15)",
        // Câu hỏi 5 và 6 sử dụng cùng một hình ảnh cây.
        image: "image_e1f3f1.png",
        answers: [
            "a. 25",
            "b. 12",
            "c. 28",
            "d. 40"
        ],
        // Đáp án: big(G) + big(F) = 13 + 15 = 28
        correctIndex: 2
    },
    {
        id: 6,
        question: "Cho cây G. Gọi bigroot(v) là trọng lượng lớn nhất của tập độc lập của cây con chứa v có gốc tại v. Bigroot(E) = ? (Trọng lượng E=3, H=7, I=17)",
        image: "image_e1f394.png",
        answers: [
            "a. 27",
            "b. 3",
            "c. 10",
            "d. 20"
        ],
        // Đáp án: c(E) + bignotroot(H) + bignotroot(I) = 3 + 0 + 0 = 3
        correctIndex: 1
    },
    {
        id: 7,
        question: "Ta tính tích M = ABCD của bốn ma trận với kích thước d = (15, 7, 63, 4, 32). m₃₄ bằng bao nhiêu?",
        answers: [
            "a. 6615",
            "b. 1764",
            "c. 8064",
            "d. 1845"
        ],
        // Đáp án: 63 * 4 * 32 = 8064
        correctIndex: 2
    },
    {
        id: 8,
        question: "Lựa chọn công thức đệ quy trong thuật toán quy hoạch động giải bài toán nhân dãy ma trận",
        answers: [
            "a. m[i, j] = minᵢ ≤ ₖ < ⱼ { m[i, k] + m[k+1, j] + dᵢ₋₁dₖdⱼ } với i < j",
            "b. m[i, j] = minᵢ ≤ ₖ ≤ ⱼ { m[i, k] + m[k+1, j] + dᵢ₋₁dₖdⱼ } với i < j",
            "c. m[i, j] = minᵢ < ₖ < ⱼ { m[i, k] + m[k+1, j] + dᵢ₋₁dₖdⱼ } với i < j",
            "d. m[i, j] = minᵢ < ₖ ≤ ⱼ { m[i, k] + m[k+1, j] + dᵢ₋₁dₖdⱼ } với i < j"
        ],
        // Đáp án: min i ≤ k < j, sử dụng dᵢ₋₁
        correctIndex: 0
    },
    {
        id: 9,
        question: "hᵢⱼ = k là vị trí đặt dấu ngoặc đầu tiên trong phép nhân ma trận MᵢMᵢ₊₁...Mⱼ để số phép nhân ít nhất là mᵢⱼ. Giả sử đã tính được h₁₄ = 3 thì dấu ngoặc được đặt ở vị trí nào?",
        answers: [
            "a. Sau ma trận thứ 4",
            "b. Sau ma trận thứ 3",
            "c. Trước ma trận thứ 3",
            "d. Sau ma trận thứ 2"
        ],
        // Đáp án: k=3 nghĩa là (M₁M₂M₃) x (M₄)
        correctIndex: 1
    },
    {
        id: 10,
        question: "Phát biểu nào sau đây ĐÚNG VỀ Tập độc lập trên cây (Chọn 2) - Lựa chọn định nghĩa cơ bản.",
        answers: [
            "a. Tập U ⊆ V được gọi là tập độc lập nếu các đỉnh trong U là đôi một không kề nhau",
            "b. Tập U ⊆ V được gọi là tập độc lập nếu các đỉnh trong U là đôi một kề nhau",
            "c. Trọng số của tập độc lập là tổng trọng số của các đỉnh đôi một kề nhau trong tập đó",
            "d. Trọng số của tập độc lập là tổng trọng số của các đỉnh đôi một không kề nhau trong tập đó"
        ],
        // Đáp án: Định nghĩa cơ bản
        correctIndex: [0, 3]
    },
    {
        id: 11,
        question: "Khi xác định cận trên tiệm cận của T(n), chúng ta sử dụng ký pháp",
        answers: [
            "a. Ω",
            "b. ω",
            "c. O",
            "d. Θ"
        ],
        // Đáp án: Big O (O)
        correctIndex: 2
    },
    {
        id: 12,
        question: "Đâu là câu mô tả chính xác về tính đơn trị (Uniqueness) của thuật toán",
        answers: [
            "a. Thuật toán cần phải đưa ra đầu ra sau một số hữu hạn (có thể rất lớn) bước với mỗi đầu vào.",
            "b. Với mỗi tập dữ liệu đầu vào, thuật toán đưa ra các dữ liệu tương ứng với lời giải của bài toán",
            "c. Thuật toán có thể áp dụng để giải mọi bài toán có dạng đã cho",
            "d. Các kết quả trung gian của từng bước thực hiện thuật toán được xác định một cách đơn trị và chỉ phụ thuộc vào đầu vào và các kết quả của các bước trước"
        ],
        // Đáp án: Tính đơn trị (Determinism)
        correctIndex: 3
    },
    {
        id: 13,
        question: "Tiệm cận đúng của hàm T(n) = 6n² + n log n là",
        answers: [
            "a. T(n) = Θ(n²)",
            "b. T(n) = Θ(n)",
            "c. T(n) = Θ(n log n)",
            "d. T(n) = Θ(n³)"
        ],
        // Đáp án: Bậc cao nhất là n²
        correctIndex: 0
    },
    {
        id: 14,
        question: "Hàm nào sau đây là cận trên tiệm cận của hàm T(n) = 2n² + 3",
        answers: [
            "a. T(n) = O(n⁴)",
            "b. T(n) = O(2ⁿ)",
            "c. T(n) = O(n)",
            "d. T(n) = O(n log n)",
            "e. T(n) = O(n²)"
        ],
        // Đáp án: Cận chặt nhất O(n²)
        correctIndex: 4
    },
    {
        id: 15,
        question: "Tốc độ tăng của hàm T(n) = n! + 4ⁿ + 6 là",
        answers: [
            "a. T(n) = O(1)",
            "b. T(n) = O(4ⁿ)",
            "c. T(n) = O(n!)",
            "d. T(n) = O(n⁴)"
        ],
        // Đáp án: Bậc cao nhất là n!
        correctIndex: 2
    },
    {
        id: 16,
        question: "Trong sơ đồ khối, khối lựa chọn có nhiệm vụ gì?",
        answers: [
            "a. Nhập/Xuất dữ liệu",
            "b. Tùy điều kiện sẽ rẽ nhánh",
            "c. Chỉ thị bắt đầu và kết thúc",
            "d. Chỉ hướng thao tác tiếp theo"
        ],
        // Đáp án: Khối lựa chọn (hình thoi)
        correctIndex: 1
    },
    {
        id: 17,
        question: "Đâu là câu mô tả chính xác về tính tổng quát (Generality) của thuật toán",
        answers: [
            "a. Các kết quả trung gian của từng bước thực hiện thuật toán được xác định một cách đơn trị và chỉ phụ thuộc vào đầu vào và các kết quả của các bước trước",
            "b. Với mỗi tập dữ liệu đầu vào, thuật toán đưa ra các dữ liệu tương ứng với lời giải của bài toán",
            "c. Thuật toán có thể áp dụng để giải mọi bài toán có dạng đã cho",
            "d. Thuật toán cần phải đưa ra đầu ra sau một số hữu hạn (có thể rất lớn) bước với mỗi đầu vào."
        ],
        // Đáp án: Tính tổng quát
        correctIndex: 2
    },
    {
        id: 18,
        question: "Khi xác định cận dưới tiệm cận của T(n), chúng ta sử dụng ký pháp",
        answers: [
            "a. Θ",
            "b. Ω",
            "c. ω",
            "d. O"
        ],
        // Đáp án: Big Omega (Ω)
        correctIndex: 1
    },
    {
        id: 19,
        question: "Tốc độ tăng của hàm T(n) = 4ⁿ + 6n² là",
        answers: [
            "a. T(n) = O(1)",
            "b. T(n) = O(4ⁿ)",
            "c. T(n) = O(n!)",
            "d. T(n) = O(n²)"
        ],
        // Đáp án: Bậc cao nhất là 4ⁿ
        correctIndex: 1
    },
    {
        id: 20,
        question: "Giải công thức đệ quy T(n) = T(5n/8) + 1",
        answers: [
            "a. T(n) = O(n log n)",
            "b. T(n) = O(log n)",
            "c. T(n) = O(n)",
            "d. T(n) = O(n² log n)"
        ],
        // Áp dụng Master Theorem Case 2: a=1, b=8/5, f(n)=1. n^log_b(a) = n^0 = 1. f(n) = Theta(1). T(n) = Theta(n^0 * log n) = O(log n).
        correctIndex: 1
    },
    {
        id: 21,
        question: "Cho công thức đệ quy T(n) = aT(n/b) + c⋅nᵏ. Nếu a = bᵏ thì T(n) được xác định như thế nào?",
        answers: [
            "a. T(n) = Θ(nᵏ log n)",
            "b. T(n) = Θ(n)",
            "c. T(n) = Θ(n^log_b a)",
            "d. T(n) = Θ(nᵏ)"
        ],
        // Áp dụng Master Theorem Case 2: a = bᵏ => log_b(a) = k. f(n) = Θ(nᵏ). T(n) = Θ(nᵏ log n).
        correctIndex: 0
    },
    {
        id: 22,
        question: "Giải công thức đệ quy T(n) = 3T(n/4) + 2",
        answers: [
            "a. T(n) = O(log n)",
            "b. T(n) = O(n^log₄ 3)",
            "c. T(n) = O(n log n)",
            "d. T(n) = O(n²)"
        ],
        // Áp dụng Master Theorem Case 1: a=3, b=4, f(n)=2. n^log₄(3) ≈ n^0.79. f(n) = 2 = O(n^0.79 - ε). T(n) = O(n^log₄ 3).
        correctIndex: 1
    },
    {
        id: 23,
        question: "Cho công thức đệ quy T(n) = aT(n/b) + f(n). Nếu f(n) = O(n^log_b a - ε) với ε > 0 thì T(n) được xác định như thế nào?",
        answers: [
            "a. T(n) = Θ(n^log_b a ⋅ log n)",
            "b. T(n) = Θ(f(n))",
            "c. T(n) = Θ(n)",
            "d. T(n) = Θ(n^log_b a)"
        ],
        // Áp dụng Master Theorem Case 1: Chi phí đệ quy chi phối.
        correctIndex: 3
    },
    {
        id: 24,
        question: "Cho công thức đệ quy T(n) = aT(n/b) + f(n). Nếu f(n) = Θ(n^log_b a) thì T(n) được xác định như thế nào?",
        answers: [
            "a. T(n) = Θ(n)",
            "b. T(n) = Θ(f(n))",
            "c. T(n) = Θ(n^log_b a)",
            "d. T(n) = Θ(n^log_b a ⋅ log n)"
        ],
        // Áp dụng Master Theorem Case 2: Chi phí đệ quy và f(n) cân bằng.
        correctIndex: 3
    },
    {
        id: 25,
        question: "Giải công thức đệ quy T(n) = T(n - 2) + 1 nếu n > 0, T(0) = 1",
        answers: [
            "a. T(n) = O(log n)",
            "b. T(n) = O(n log n)",
            "c. T(n) = O(n²)",
            "d. T(n) = O(n)"
        ],
        // Áp dụng Phép thế lặp: T(n) = T(n - 2k) + k. Dừng khi k = n/2. T(n) = T(0) + n/2 = O(n).
        correctIndex: 3
    },
    {
        id: 26,
        question: "Những thông số cần xác định khi giải công thức đệ quy bằng phương pháp lặp (Chọn 2).",
        answers: [
            "a. Số lần lặp để đạt đến điều kiện đầu",
            "b. Số hạng phát sinh sau mỗi bước lặp",
            "c. Số lần thực hiện câu lệnh đặc trưng",
            "d. Số lần gọi đệ quy"
        ],
        // Đáp án: Cần cả hai để xây dựng công thức tổng quát T(n) = T(n₀) + Σ(chi phí_i).
        correctIndex: [0, 1] 
    },
    {
        id: 27,
        question: "Giải công thức đệ quy T(n) = 16T(n/4) + n²",
        answers: [
            "a. T(n) = O(n)",
            "b. T(n) = O(log n)",
            "c. T(n) = O(n log n)",
            "d. T(n) = O(n² log n)"
        ],
        // Áp dụng Master Theorem Case 2: a=16, b=4. n^log₄(16) = n². f(n) = n². T(n) = O(n² log n).
        correctIndex: 3
    },
    {
        id: 28,
        question: "Để giải công thức đệ quy bằng phương pháp lặp, ta cần xác định?",
        answers: [
            "a. Số lần lặp đạt đến điều kiện n=0",
            "b. Số lần lặp đạt đến điều kiện n=1",
            "c. Số lần lặp đạt đến điều kiện đầu tiên",
            "d. Số lần lặp đạt đến điều kiện n > 0"
        ],
        // Đáp án: Điều kiện đầu tiên (Base Case) là tổng quát nhất.
        correctIndex: 2
    },
    {
        id: 29,
        question: "Cho công thức đệ quy T(n) = aT(n/b) + f(n). Nếu f(n) = Ω(n^log_b a + ε) với ε > 0 và thỏa mãn điều kiện điều hòa thì T(n) được xác định như thế nào?",
        answers: [
            "a. T(n) = Θ(n)",
            "b. T(n) = Θ(f(n))",
            "c. T(n) = Θ(n^log_b a)",
            "d. T(n) = Θ(n^log_b a ⋅ log n)"
        ],
        // Áp dụng Master Theorem Case 3: Chi phí f(n) chi phối.
        correctIndex: 1
    },
{
        id: 30,
        question: "Giải công thức đệ quy $T(n) = T(n-2) + 1$ nếu $n > 0$, $T(0) = 1$",
        topic: "Phân tích Đệ quy (Phương pháp Lặp)",
        answers: [
            "a. T(n) = O(log n)",
            "b. T(n) = O(n log n)",
            "c. T(n) = O(n²)",
            "d. T(n) = O(n)"
        ],
        // Áp dụng Phép thế lặp: T(n) = T(n - 2k) + k. Dừng khi 2k = n (nếu n chẵn), k = n/2. T(n) = T(0) + n/2 = 1 + n/2 = O(n).
        correctIndex: 3
    },
    {
        id: 31,
        question: "Giải công thức đệ quy $T(n) = 3T(\\frac{n}{4}) + 2$",
        topic: "Định lý Thợ (Master Theorem)",
        answers: [
            "a. T(n) = O(log n)",
            "b. T(n) = O(n^2)",
            "c. T(n) = O(n \\log n)",
            "d. T(n) = O(n^{\\log_4 3})"
        ],
        // Định lý Thợ: a=3, b=4, f(n)=2. n^(log₄3) ≈ n^0.792. Vì f(n)=2=O(n^(log₄3 - ε)) nên là Trường hợp 1. T(n) = O(n^(log₄3)).
        correctIndex: 3
    },
    {
        id: 32,
        question: "Công thức đệ quy $T(n) = 3T(n-1) + (n+4) \\cdot 2^n$ có phương trình đặc trưng là gì?",
        topic: "Phương trình Đặc trưng (Không đồng nhất)",
        answers: [
            "a. (r-3)(r-4) = 0",
            "b. (r-3)(r-2) = 0",
            "c. (r-3)(r-2)² = 0",
            "d. (r-3)(r-4)² = 0"
        ],
        // Phần đồng nhất (r-3). Phần không đồng nhất f(n) = b^n P(n) với b=2, d=1. Thừa số (r-b)^(d+1) = (r-2)². PTĐTr: (r-3)(r-2)² = 0.
        correctIndex: 2
    },
    {
        id: 33,
        question: "Công thức đệ quy $T(n) = T(n-1) + 1$ có phương trình đặc trưng là gì?",
        topic: "Phương trình Đặc trưng (Không đồng nhất)",
        answers: [
            "a. r-1 = 0",
            "b. (r-1)(r-2) = 0",
            "c. (r-1)² = 0",
            "d. (r-1)³ = 0"
        ],
        // Phần đồng nhất (r-1). Phần không đồng nhất f(n) = 1 = 1^n * 1, có b=1, d=0. Thừa số (r-1)¹ = (r-1). PTĐTr: (r-1)² = 0.
        correctIndex: 2
    },
    {
        id: 34,
        question: "Công thức đệ quy với phương trình đặc trưng $(r+2)^2(r-1) = 0$ thì hàm $T(n)$ được xác định như thế nào?",
        topic: "Công thức Tổng quát",
        answers: [
            "a. T(n) = (\\alpha_1 + \\alpha_2 n) \\cdot (-2)^n + \\alpha_3 \\cdot 1^n",
            "b. T(n) = \\alpha_1 \\cdot (-2)^n + \\alpha_2 \\cdot 1^n",
            "c. T(n) = (\\alpha_1 + \\alpha_2 n) \\cdot 2^n + \\alpha_3 \\cdot (-1)^n",
            "d. T(n) = \\alpha_1 \\cdot 2^n + \\alpha_2 \\cdot (-1)^n"
        ],
        // Nghiệm r₁=-2 (bậc 2) -> (α₁ + α₂n)(-2)ⁿ. Nghiệm r₂=1 (bậc 1) -> α₃(1)ⁿ.
        correctIndex: 0
    },
    {
        id: 35,
        question: "Công thức đệ quy với phương trình đặc trưng $(r-1)(r-3) = 0$ thì hàm $T(n)$ được xác định như thế nào?",
        topic: "Công thức Tổng quát",
        answers: [
            "a. T(n) = \\alpha_1 \\cdot (1)^n + \\alpha_2 \\cdot (3)^n",
            "b. T(n) = \\alpha_1 \\cdot (-1)^n + \\alpha_2 \\cdot (3)^n",
            "c. T(n) = \\alpha_1 \\cdot (-1)^n + \\alpha_2 \\cdot (-3)^n",
            "d. T(n) = \\alpha_1 \\cdot (1)^n + \\alpha_2 \\cdot (-3)^n"
        ],
        // Hai nghiệm phân biệt r₁=1 và r₂=3 (bậc 1). Công thức: T(n) = α₁r₁ⁿ + α₂r₂ⁿ.
        correctIndex: 0
    },
    {
        id: 36,
        question: "Công thức đệ quy $T(n) = 2T(n-1) - 2T(n-3) + T(n-4)$ là công thức dạng nào sau đây?",
        topic: "Phân loại Đệ quy",
        answers: [
            "a. Bậc 3, tuyến tính, đồng nhất",
            "b. Bậc 4, tuyến tính, không đồng nhất",
            "c. Bậc 4, tuyến tính, đồng nhất",
            "d. Bậc 3, tuyến tính, không đồng nhất"
        ],
        // Bậc k=n-(n-4)=4. Tuyến tính (bậc 1 với T(.)). Đồng nhất (không có f(n)≠0).
        correctIndex: 2
    },
    {
        id: 37,
        question: "Công thức đệ quy $T(n) = T(n-1) + T(n-2) + 2^{n-2}$ là công thức dạng nào sau đây?",
        topic: "Phân loại Đệ quy",
        answers: [
            "a. Bậc 3, tuyến tính, đồng nhất",
            "b. Bậc 2, tuyến tính, đồng nhất",
            "c. Bậc 3, tuyến tính, không đồng nhất",
            "d. Bậc 2, tuyến tính, không đồng nhất"
        ],
        // Bậc k=n-(n-2)=2. Tuyến tính (bậc 1 với T(.)). Không đồng nhất (f(n)=2^(n-2)≠0).
        correctIndex: 3
    },
    {
        id: 38,
        question: "Công thức đệ quy $T(n) = T(n-1) + T(n-2)$ là công thức dạng nào sau đây?",
        topic: "Phân loại Đệ quy",
        answers: [
            "a. Bậc 1, không tuyến tính, đồng nhất",
            "b. Bậc 2, tuyến tính, không đồng nhất",
            "c. Bậc 1, tuyến tính, đồng nhất",
            "d. Bậc 2, tuyến tính, đồng nhất"
        ],
        // Bậc k=n-(n-2)=2. Tuyến tính (bậc 1 với T(.)). Đồng nhất (f(n)=0).
        correctIndex: 3
    },
    {
        id: 39,
        question: "Phương trình đặc trưng của công thức đệ quy dạng $T(n) = c_1 T(n-1) + c_2 T(n-2) + \\dots + c_k T(n-k)$ là gì?",
        topic: "Phương trình Đặc trưng (Đồng nhất)",
        answers: [
            "a. r^k + c_1 r^{k-1} + c_2 r^{k-2} + \\dots + c_k = 0",
            "b. r^k - c_1 r^{k-1} + c_2 r^{k-2} - \\dots + c_k = 0",
            "c. r^k + c_1 r^{k-1} - c_2 r^{k-2} + \\dots - c_k = 0",
            "d. r^k - c_1 r^{k-1} - c_2 r^{k-2} - \\dots - c_k = 0"
        ],
        correctIndex: 3
    },
    {
        id: 40,
        question: "Phương trình đặc trưng của công thức đệ quy dạng $T(n) = c_1 T(n-1) + \\dots + c_k T(n-k) + b^n p(n)$ là gì? ($d$ là bậc của $p(n)$)",
        topic: "Phương trình Đặc trưng (Không đồng nhất)",
        answers: [
            "a. (r^k - c_1 r^{k-1} - \\dots - c_k) (b - r)^{d+1} = 0",
            "b. (r^k - c_1 r^{k-1} - \\dots - c_k) (r - b)^d = 0",
            "c. (r^k - c_1 r^{k-1} - \\dots - c_k) (r - b)^{d+1} = 0",
            "d. (r^k - c_1 r^{k-1} - \\dots - c_k) (b - r)^d = 0"
        ],
        correctIndex: 2
    },
    {
        id: 41,
        question: "Cho mảng gồm các phần tử: $-4, 9, -10, 5$. Mảng con lớn nhất của dãy có giá trị là",
        topic: "Mảng con lớn nhất",
        answers: [
            "a. 14",
            "b. 0",
            "c. 5",
            "d. 9"
        ],
        // Mảng con lớn nhất là [9] có tổng 9.
        correctIndex: 3
    },
    {
        id: 42,
        question: "Cho mảng gồm các phần tử: $3, -2, 5, -6, -4, 9, -10, 5$. Mảng con lớn nhất đè lên điểm chia có giá trị là (Điểm chia là giữa $A[4]$ và $A[5]$).",
        topic: "Mảng con lớn nhất (Chia để trị)",
        answers: [
            "a. 3",
            "b. 6",
            "c. 5",
            "d. 0"
        ],
        // W_ML (kết thúc tại -6) = 0. W_MR (bắt đầu từ -4) = 5. W_M = 0 + 5 = 5.
        correctIndex: 2
    },
    {
        id: 43,
        question: "Thao tác chia trong chia để trị thực hiện chia bài toán thành",
        topic: "Chia để trị",
        answers: [
            "a. Các bài toán con có kích thước bằng nhau",
            "b. Các bài toán con độc lập",
            "c. Các bài toán con giống nhau",
            "d. Các bài toán con giao nhau"
        ],
        correctIndex: 1
    },
    {
        id: 44,
        question: "Đâu là câu mô tả chính xác về thao tác trị trong thuật toán chia để trị?",
        topic: "Chia để trị",
        answers: [
            "a. Thực hiện việc chia bài toán cần giải ra thành một loạt bài toán con độc lập",
            "b. Đòi hỏi việc giải các bài toán con thu được",
            "c. Thực hiện việc xây dựng lời giải của bài toán đặt ra từ các lời giải của bài toán con",
            "d. Tất cả đều sai"
        ],
        correctIndex: 1
    },
    {
        id: 45,
        question: "Chia để trị là gì?",
        topic: "Chia để trị",
        answers: [
            "a. Giải bài toán một cách trực tiếp",
            "b. Chia bài toán cần giải ra thành một loạt bài toán con với kích thước lớn hơn, tiếp đến các bài toán con sẽ được giải một cách độc lập để thu được lời giải của bài toán đặt ra",
            "c. Chia bài toán cần giải ra thành một loạt bài toán con với kích thước nhỏ hơn, tiếp đến các bài toán con sẽ được giải theo cách giống nhau để thu được lời giải của bài toán đặt ra",
            "d. Chia bài toán cần giải ra thành một loạt bài toán con với kích thước nhỏ hơn, tiếp đến các bài toán con sẽ được giải một cách độc lập, và cuối cùng tổng hợp các lời giải của bài toán con để thu được lời giải của bài toán đặt ra"
        ],
        correctIndex: 3
    },
    {
        id: 46,
        question: "Thuật toán chia để trị giải bài toán mảng con lớn nhất có độ phức tạp là",
        topic: "Độ phức tạp (Chia để trị)",
        answers: [
            "a. T(n) = O(n³)",
            "b. T(n) = O(n²)",
            "c. T(n) = O(n)",
            "d. T(n) = O(n log n)"
        ],
        // Công thức đệ quy: T(n) = 2T(n/2) + Θ(n). [cite_start]Theo Định lý Thợ: T(n) = Θ(n log n). [cite: 1382, 1383]
        correctIndex: 3
    },
    {
        id: 47,
        question: "Khi giải bài toán Mảng con lớn nhất bằng phương pháp chia để trị, nên chia bài toán mảng ban đầu thành các mảng con có đặc điểm như thế nào?",
        topic: "Chia để trị",
        answers: [
            "a. Hai mảng con có độ dài chênh lệch ít nhất",
            "b. Hai mảng con luôn có độ dài bằng nhau",
            "c. Mảng bên trái có độ dài gấp đôi mảng bên phải",
            "d. Mảng bên phải có độ dài gấp đôi mảng bên trái"
        ],
        correctIndex: 0
    },
    {
        id: 48,
        question: "Độ phức tạp của thuật toán Karatsuba là bao nhiêu?",
        topic: "Độ phức tạp (Chia để trị)",
        answers: [
            "a. O(n^2)",
            "b. O(n)",
            "c. O(n^{\\log_3 2})",
            "d. O(n^{\\log_2 3})"
        ],
        // Công thức đệ quy: T(n) = 3T(n/2) + Θ(n). [cite_start]Theo Định lý Thợ, T(n) = Θ(n^(log₂3)). [cite: 1032, 1082]
        correctIndex: 3
    },
    {
        id: 49,
        question: "Karatsuba đã làm như thế nào để nhân 2 số nguyên có n chữ số?",
        topic: "Chiến lược Karatsuba",
        answers: [
            "a. Thực hiện tính 4 phép nhân các số có n/2 chữ số",
            "b. Thực hiện tính 3 phép nhân các số có n/2 chữ số",
            "c. Thực hiện tính 4 phép nhân các số có n/3 chữ số",
            "d. Thực hiện tính 3 phép nhân các số có n/3 chữ số"
        ],
        correctIndex: 1
    },
    {
        id: 50,
        question: "Để thực hiện nhân hai số $2387 \\times 1596$ theo chiến lược chia để trị Karatsuba ($a=23, b=87, c=15, d=96$), khi đó $W = $?",
        topic: "Chiến lược Karatsuba (Tính toán)",
        answers: [
            "a. (23+87) \\times (15+96)",
            "b. (23+96) \\times (87+15)",
            "c. 23 \\times 15 + 87 \\times 96",
            "d. (23+87) \\times (87+15)"
        ],
        // Công thức tính W: W = (a+b) x (c+d).
        correctIndex: 0
    },
    {
        id: 51,
        question: "Trong các câu sau, câu nào là SAI trong chiến lược chia để trị giải bài toán nhân số nguyên lớn bằng thuật toán Karatsuba?",
        topic: "Karatsuba so với Chia để trị truyền thống",
        answers: [
            "a. Thuật toán Karatsuba có độ phức tạp là O(n^{\\log_2 3})",
            "b. Nếu n > 1 thì tích của 2 số nguyên có n chữ số có thể biểu diễn qua 3 tích của 4 số nguyên có n/2 chữ số",
            "c. Việc nhân hai số nguyên có 1 chữ số có thể thực hiện một cách trực tiếp",
            "d. Để tính kết quả z = x \\times y khi đã biết 4 tích của 4 số nguyên có n/2 chữ số chỉ cần thực hiện các phép cộng và nhân với luỹ thừa của 10"
        ],
        correctIndex: 1
    },
    {
        id: 52,
        question: "Khi thực hiện giải bài toán nhân hai ma trận kích thước $n \\times n$ bằng chiến lược chia để trị Strassen, số phép nhân ma trận kích thước $n/2 \\times n/2$ cần phải thực hiện là bao nhiêu?",
        topic: "Thuật toán Strassen",
        answers: [
            "a. 8",
            "b. 4",
            "c. 7",
            "d. 6"
        ],
        correctIndex: 2
    },
    {
        id: 53,
        question: "Độ phức tạp của thuật toán chia để trị phát triển theo công thức Strassen giải bài toán nhân ma trận là?",
        topic: "Độ phức tạp (Strassen)",
        answers: [
            "a. O(n^2)",
            "b. O(n)",
            "c. O(n^{\\log_2 3})",
            "d. O(n^{\\log_2 7})"
        ],
        // Công thức đệ quy: T(n) = 7T(n/2) + O(n²). [cite_start]Theo Định lý Thợ, T(n) = Θ(n^(log₂7)). [cite: 1179]
        correctIndex: 3
    },
    {
        id: 54,
        question: "Khi thực hiện nhân hai ma trận kích thước $n \\times n$ theo thuật toán chia để trị Strassen, mỗi ma trận ban đầu được chia thành mấy ma trận con?",
        topic: "Thuật toán Strassen (Chia)",
        answers: [
            "a. 4 ma trận con kích thước n/2",
            "b. 2 ma trận con kích thước n/2",
            "c. 4 ma trận con kích thước n/4",
            "d. 8 ma trận con kích thước n/2"
        ],
        correctIndex: 0
    },
    {
        id: 55,
        question: "Thao tác chia trong chiến lược chia để trị giải bài toán nhân số nguyên lớn bằng thuật toán Karatsuba là?",
        topic: "Karatsuba (Chia)",
        answers: [
            "a. Nếu n > 1 thì tích của 2 số nguyên có n chữ số có thể biểu diễn qua 4 tích của 4 số nguyên có n/2 chữ số",
            "b. Nếu n > 1 thì tích của 2 số nguyên có n chữ số có thể biểu diễn qua 3 tích của số nguyên có n/2 chữ số",
            "c. Nếu n > 1 thì tích của 2 số nguyên có n chữ số có thể biểu diễn qua 4 tích của 4 số nguyên có n/3 chữ số",
            "d. Nếu n > 1 thì tích của 2 số nguyên có n chữ số có thể biểu diễn qua 3 tích của số nguyên có n/3 chữ số"
        ],
        // Karatsuba giảm 4 phép nhân thành 3, với kích thước số là n/2.
        correctIndex: 1
    },{
        id: 56,
        question: "Điểm khác cơ bản của Quy hoạch động với phương pháp Chia để trị là",
        topic: "So sánh DP và Chia để trị",
        answers: [
            "a. Trong cả chia để trị và quy hoạch động, các bài toán con độc lập với nhau. Tuy nhiên kích thước bài toán trong chia để trị sẽ nhỏ hơn",
            "b. Trong quy hoạch động, các bài toán con độc lập với nhau, còn chia để trị thì không",
            "c. Trong cả chia để trị và quy hoạch động, các bài toán con độc lập với nhau. Tuy nhiên kích thước bài toán trong quy hoạch động sẽ nhỏ hơn",
            "d. Trong chia để trị, các bài toán con độc lập với nhau, còn quy hoạch động thì không"
        ],
        // Chia để trị: độc lập. Quy hoạch động: trùng lặp/phụ thuộc.
        correctIndex: 3
    },
    {
        id: 57,
        question: "Để áp dụng quy hoạch động hiệu quả, bài toán cần có tính chất nào?",
        topic: "Quy tắc áp dụng DP",
        answers: [
            "a. Bài toán lớn có thể chia được thành các bài toán con độc lập",
            "b. Số lượng các bài toán con phải không quá lớn",
            "c. Cấu trúc con tối ưu",
            "d. Số lượng các bài toán con càng lớn càng tốt"
        ],
        // Hai tính chất cốt lõi: Cấu trúc con tối ưu và Bài toán con trùng lặp.
        correctIndex: [1, 2]
    },
    {
        id: 58,
        question: "Phát biểu nào sau đây ĐÚNG trong thuật toán quy hoạch động (Chọn 3)",
        topic: "Nguyên tắc của DP",
        answers: [
            "a. Bài toán con kích thước nhỏ nhất có thể giải một cách trực tiếp",
            "b. Lời giải của những bài toán con thường được sử dụng lại rất nhiều lần",
            "c. Bài toán xuất phát có thể coi là bài toán con có kích thước nhỏ nhất",
            "d. Bài toán con nhỏ hơn có cùng dạng với bài toán ban đầu"
        ],
        // a: Base case. b: Overlapping subproblems. d: Optimal Substructure. c: Sai, bài toán xuất phát là bài toán lớn nhất.
        correctIndex: [0, 1, 3]
    },
    {
        id: 59,
        question: "Sơ đồ chung của thuật toán Quy hoạch động gồm những bước nào?",
        topic: "Quy trình DP",
        answers: [
            "a. Phần rã - Ghi nhận lời giải - Tổng hợp lời giải",
            "b. Chia - Trị - Tổng hợp",
            "c. Chia - Ghi nhận lời giải - Tổng hợp lời giải",
            "d. Phần rã - Trị - Tổng hợp"
        ],
        // DP: Chia/Phân rã (Divide) -> Ghi nhận (Memoization/Tabulation) -> Tổng hợp (Combine). (b là của Chia để trị).
        correctIndex: 0
    },
    {
        id: 60,
        question: "Thuật toán quy hoạch động giải bài toán cái túi (Knapsack Problem) có thời gian tính là",
        topic: "Độ phức tạp (DP)",
        answers: [
            "a. O(nL²)",
            "b. O(L)",
            "c. O(n²L)",
            "d. O(nL)"
        ],
        // Độ phức tạp của 0/1 Knapsack là O(n*L), nơi n là số vật phẩm, L là sức chứa.
        correctIndex: 3
    },
    {
        id: 61,
        question: "Khi giải bài toán mảng con lớn nhất bằng chiến lược quy hoạch động ($e_i$ là tổng của mảng con lớn nhất kết thúc tại $a_i$): Xét mảng: $[1, -2, 5, 4, -8, 9, 3]$. Giá trị $e_3$ là bao nhiêu?",
        topic: "DP (Tính toán mảng con lớn nhất)",
        answers: [
            "a. 5",
            "b. -1",
            "c. 4",
            "d. 3"
        ],
        // e₃ = a₃ + max(0, e₂). e₁=1. e₂=-2+max(0,1) = -1. e₃=5+max(0,-1) = 5.
        correctIndex: 0
    },
    {
        id: 62,
        question: "Giai đoạn Phân rã trong phát triển thuật toán dựa trên quy hoạch động là thực hiện việc gì?",
        topic: "Quy trình DP",
        answers: [
            "a. Chia nhỏ bài toán thành các bài toán con có cùng dạng với bài toán ban đầu",
            "b. Chia nhỏ bài toán thành các bài toán con giao nhau",
            "c. Chia nhỏ bài toán thành các bài toán con độc lập",
            "d. Chia nhỏ bài toán thành các bài toán con có kích thước gần bằng nhau"
        ],
        // Phân rã (chia) phải tạo ra các bài toán con có cùng cấu trúc (cùng dạng) để thiết lập công thức truy hồi (Cấu trúc con tối ưu).
        correctIndex: 0
    },
    {
        id: 63,
        question: "Cho cái túi có dung lượng $L = 5$. Số đồ vật trong túi $n = 4$. (Trọng lượng, Giá trị) của các đồ vật trong cái túi là $(2, 3), (3, 4), (4, 5), (5, 6)$. Ta cần chất những đồ vật nào vào túi để có giá trị lớn nhất?",
        topic: "Bài toán Cái túi (0/1 Knapsack)",
        answers: [
            "a. Vật 3 và Vật 4",
            "b. Vật 2 và Vật 3",
            "c. Vật 1 và Vật 4",
            "d. Vật 1 và Vật 2"
        ],
        // Tổ hợp: Vật 1(2, 3) + Vật 2(3, 4) = Trọng lượng 5, Giá trị 7 (Tối đa).
        correctIndex: 3
    }
];
