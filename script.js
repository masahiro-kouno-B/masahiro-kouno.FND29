'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }

 
const switchKey = document.querySelector('.switch-key');

document.addEventListener('mousemove', (event) => {
    const rect = switchKey.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
        Math.pow(event.clientX - centerX, 2) +
        Math.pow(event.clientY - centerY, 2)
    );

    const hoverDistance = 100; // 近づく距離

    if (distance < hoverDistance) {  // ここを修正：距離がhoverDistanceより小さい場合
        switchKey.classList.add('enlarged');
    } else {
        switchKey.classList.remove('enlarged');
    }
});

  

  