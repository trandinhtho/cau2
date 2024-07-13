// Tạo mảng chứa 400.000 phần tử từ 0 đến 399.999
const arr = Array.from({ length: 400000 }, (_, i) => i);

// Hàm xử lý các phần tử
function processChunk(chunk) {
  // Thực hiện xử lý trên mỗi phần tử của chunk
  chunk.forEach(item => {
    // Ở đây, chúng ta chỉ đơn giản là in ra giá trị của item
    console.log(item);
  });
}

// Hàm lặp qua tất cả các phần tử của mảng, mỗi lần 10.000 phần tử
function processArrayInChunks(array, chunkSize) {
  for (let i = 0; i < array.length; i += chunkSize) {
    // Lấy 10.000 phần tử từ vị trí i
    const chunk = array.slice(i, i + chunkSize);
    processChunk(chunk);
  }
}

// Gọi hàm với mảng và kích thước chunk là 10.000
processArrayInChunks(arr, 10000);
