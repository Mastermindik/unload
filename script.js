// let showCustomModal = false;

// window.addEventListener('unload', function (e) {
//     e.preventDefault();
//     if (showCustomModal) {
//         showCustomModal = true;
//         e.returnValue = '';
//     }
//     return ""
// });

// document.addEventListener('visibilitychange', function () {
//     if (document.visibilityState === 'hidden') {
//         showCustomModal = true;
//         document.getElementById('customModal').style.display = 'block';
//         document.querySelector('.modal-content').click()
//     }
// });

// function closeModal() {
//     document.getElementById('customModal').style.display = 'none';
//     showCustomModal = false;
// }

// function confirmExit() {
//     closeModal();
//     window.removeEventListener('beforeunload', beforeUnloadListener);
//     window.location.href = 'about:blank';
// }

// function beforeUnloadListener(e) {
//     e.preventDefault();
//     e.returnValue = '';
// }
// window.onbeforeunload = function() {
//     return false;
//   };
//   window.addEventListener("unload", function() {
//     return false;
//   });
// window.addEventListener("load", () => {
//     document.getElementById("btn").focus()
//     // document.getElementById("btn").onclick = () => alert(11111111)
//     // document.getElementById("btn").click()
//     // alert('Сторінка повністю завантажена і готова до використання.'); 
//     // alert(11111111)
// })
window.addEventListener('beforeunload', function (e) {
    // Стандартне повідомлення для більшості сучасних браузерів
    var confirmationMessage = 'Ви впевнені, що хочете залишити цю сторінку?';

    (e || window.event).returnValue = confirmationMessage; // Стандарт для старих браузерів
    return confirmationMessage; // Стандарт для сучасних браузерів
});

// document.addEventListener("visibilitychange", function() {
//     if (document.visibilityState === 'hidden') {
//         // Ваш код для показу повідомлення
//     }
// });

// window.addEventListener('touchstart', function() {
//     // this.window.alert("asdasdasd")
//     // Ваш код для показу повідомлення
// });

// window.addEventListener('pagehide', function() {
//     // Ваш код для показу повідомлення
// });

// window.addEventListener('unload', function (e) {
//     // Стандартне повідомлення для більшості сучасних браузерів
//     var confirmationMessage = 'Ви впевнені, що хочете залишити цю сторінку?';

//     (e || window.event).returnValue = confirmationMessage; // Стандарт для старих браузерів
//     return confirmationMessage; // Стандарт для сучасних браузерів
// });
