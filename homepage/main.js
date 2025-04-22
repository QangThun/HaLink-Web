// Khi click chuột vào nút (+)

function handleClickIcon(id) {
    // Lấy ra danh sách phần tử .question-item
    var plusItems = document.querySelectorAll(".question-item");

    // Tìm phần tử khi click dựa vào id (index)
    var plus = plusItems[id - 1];

    if (plus) {
        var questionText = plus.querySelector(".question-text");

        if (questionText.style.display === 'none' || questionText.style.display === "") {
            questionText.style.display = 'block';
        } else {
            questionText.style.display = 'none';
        }
    }
}
