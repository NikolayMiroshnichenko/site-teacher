const infoList = document.querySelector( '.informatica-nav' );
const infoContainer = document.querySelector( '.infprmatika-container' );



infoList.addEventListener( 'click', classOpen )

function classOpen( e ) {
    infoContainer.innerHTML = '';

    const btn = e.target.dataset.actions;
    classContent.map( item => {
        if ( item.id == btn ) {
            infoContainer.insertAdjacentHTML( 'afterbegin', item.template );
        }
    } )

}




const classContent = [
    {
        id: 1,
        template: `
            <div class="infprmatika-container__item">
                <div class="infprmatika-container__img">
                    <img src="img/5-class/information-systems/1.jpg" alt="">
                </div>
                <div class="infprmatika-container__content">
                    <a href="documents/information-systems/1.pptx">Інформація, повідомлення, дані</a>
                    <a href="documents/information-systems/2.pptx">Інформаційні технології та процеси</a>
                    <a href="documents/information-systems/3.pptx">Комп’ютери та їх різновиди.</a>
                    <a href="documents/information-systems/4.pptx">Складові комп’ютерів та їх призначення</a>
                    <a href="documents/information-systems/5.pptx">Операційна система</a>
                    <a href="documents/information-systems/6.pptx">Файли та папки.</a>
                    <a href="documents/information-systems/7.pptx">Дії з об’єктами файлової системи</a>
                </div>
            </div>
            <div class="infprmatika-container__item">
                <div class="infprmatika-container__img">
                    <img src="documents/digital-networks/1.jpg" alt="">
                </div>
                <div class="infprmatika-container__content">
                    <a href="documents/digital-networks/1.pptx">Комп’ютерні мережі. Локальна мережа. Використання мережевих
                        папок.</a>
                    <a href="documents/digital-networks/2.pptx">Безпечне користування Інтернетом. Критичне оцінювання
                        інформації, отриманої з Інтернету.</a>
                </div>
            </div>
            <div class="infprmatika-container__item">
                <div class="infprmatika-container__img">
                    <img src="documents/word-processor/1.jpg" alt="">
                </div>
                <div class="infprmatika-container__content">
                    <a href="documents/word-processor/1.pptx">Об’єкти та їхні властивості. Дії над об’єктами. Основні
                        об'єкти текстового документа.</a>
                    <a href="documents/word-processor/1.pptx">Програмне забезпечення для опрацювання текстів.</a>
                    <a href="documents/word-processor/1.pptx">Введення та редагування символів і абзаців</a>
                    <a href="documents/word-processor/1.pptx">Форматування символів і абзаців</a>
                    <a href="documents/word-processor/1.pptx">Додавання зображень із файлу та їх форматування. Сторінки
                        документа та їх форматування.</a>
                    <a href="documents/word-processor/1.pptx">Додавання, редагування та форматування таблиць</a>
                    <a href="documents/word-processor/1.pptx">Однорівневі списки. Підготовка документа до друку. Друк
                        документа
                    </a>
                </div>
            </div>
        `
    },
    {
        id: 2,
        template: `
        <div class="distance-item">

            <h1 class="page-title">6 класс</h1>
            <a href="https://miyklas.com.ua/" target="_blank" class="distance-item__linck">Сайт - Мій класс</a>
            <a href="http://itknyga.com.ua/" target="_blank" class="distance-item__linck">Сайт відкритий доступ (на
                час карантину)
                до ІТ-книги.</a>
            <div class="distance-video-list">
                <h1 class="page-title">Відеоуроки:</h1>
                <a href="https://www.youtube.com/watch?v=SzNBWtG6n-8&feature=youtu.be" target="_blank"
                    class="distance-video-list__link">Вкладені цикли.</a>
                <a href="https://www.youtube.com/watch?v=x5hasA5u9PI&feature=youtu.be" target="_blank"
                    class="distance-video-list__link">Практична робота № 5. Проекти з вкладеними циклами.</a>
                <a href="https://www.youtube.com/watch?v=m8anGNtkmjk&feature=youtu.be" target="_blank"
                    class="distance-video-list__link">Вкладені розгалуження.</a>
                <a href="https://www.youtube.com/watch?v=XfPpPgdvUq0&feature=youtu.be" target="_blank"
                    class="distance-video-list__link">Вкладені цикли та розгалуження.</a>
                <a href="https://www.youtube.com/watch?v=vaJgzg2Oqjg&feature=youtu.be" target="_blank"
                    class="distance-video-list__link">Практична робота № 6. Проекти з вкладеними циклами та
                    розгалуженнями.</a>
                <a href="https://docs.google.com/forms/d/1HqiZO89eabkEye_SPJVe0p5CY47sjLc_-vRVX-64Z7M/closedform"
                    target="_blank" class="distance-video-list__link">Підсумковий тест 6 клас</a>


            </div>
        </div>
        `
    },
    {
        id: 3,
        template: `
        <div class="distance-item">

            <h1 class="page-title">7 класс</h1>
            <div class="distance-video-list">
                <h1 class="page-title">Відеоуроки:</h1>
                <a href="https://www.youtube.com/watch?v=OBYbngMYwDQ&feature=youtu.be" target="_blank"
                    class="distance-video-list__link">Решение задачи на компьютере. Последовательное конструирование
                    алгоритма.
                </a>
                <a href="https://www.youtube.com/watch?v=kPK49mvbPXM&feature=youtu.be" target="_blank"
                    class="distance-video-list__link">Опис моделей в середовищі програмування
                </a>
            </div>
            <div class="distance-power">
                <h1 class="page-title">Презентації до уроків</h1>
                <a href="documents/prezentacija_7_klas_urok_25.pptx" target="_blank"
                    class="distance-power__link">Урок 25</a>
                <a href="documents/prezentacija_7_klas_urok_26.pptx" target="_blank"
                    class="distance-power__link">Урок 26</a>
                <a href="documents/prezentacija_7_klas_urok_27.pptx" target="_blank"
                    class="distance-power__link">Урок 27</a>
                <a href="documents/prezentacija_7_klas_urok_28.pptx" target="_blank"
                    class="distance-power__link">Урок 28</a>
                <a href="documents/prezentacija_7_klas_urok_30.ru.pptx" target="_blank"
                    class="distance-power__link">Урок 30</a>
            </div>
            <div class="distance-task">
                <h1 class="page-title">Виконайте завдання</h1>
                <a href="https://learningapps.org/view1277898" target="_blank"
                    class="distance-task__item">Моделі</a>
                <a href="https://learningapps.org/view4884931" target="_blank" class="distance-task__item">Алгоритми
                    та виконавці</a>
            </div>
        </div>
        `
    },
    {
        id: 4,
        template: `
            <div class="distance-item">

                <h1 class="page-title">8 класс</h1>
                <a href="https://www.lazarus-ide.org/" target="_blank" class="distance-item__linck">Скачать Lazarus по
                    ссылке бесплатно</a>
                <div class="distance-video-list">
                    <h1 class="page-title">Відеоуроки:</h1>
                    <a href="https://www.youtube.com/watch?v=MjyOZ2Z1xd4&feature=youtu.be" target="_blank"
                        class="distance-video-list__link">Вивчаємо Lazarus. Події. Обробники
                        подій</a>
                    <a href="https://www.youtube.com/watch?v=9ZutpE4QBjY&feature=youtu.be" target="_blank"
                        class="distance-video-list__link">Вивчаємо Lazarus. Властивості Caption. Width. Height. Left.
                        Top.</a>
                    <a href="https://www.youtube.com/watch?v=3WLNy-jZz_o&feature=youtu.be" target="_blank"
                        class="distance-video-list__link">Практична робота № 12. Складання проектів з повтореннями та
                        розгалуженнями.</a>
                    <a href="https://www.youtube.com/watch?v=qY9AgaFjYzA&feature=youtu.be" target="_blank"
                        class="distance-video-list__link">Lazarus. Урок "Поле".</a>
                    <a href="https://www.youtube.com/watch?v=OLt08fP6yg0&feature=youtu.be" target="_blank"
                        class="distance-video-list__link">Lazarus. Урок "Величины".</a>
                    <a href="https://www.youtube.com/watch?v=DEVOtp5y1G4&feature=youtu.be" target="_blank"
                        class="distance-video-list__link">Lazarus. Урок "Величины и поле".</a>
                    <a href="https://www.youtube.com/watch?v=x1L2E_lhYVM&feature=youtu.be" target="_blank"
                        class="distance-video-list__link">Lazarus. Урок (Часть 1). Работа с компонентом Memo.</a>
                    <a href="https://www.youtube.com/watch?v=uuz6_Wxp7DE&feature=youtu.be" target="_blank"
                        class="distance-video-list__link">Lazarus. Урок (Часть 2). Работа с компонентом Memo.</a>
                    <a href="https://www.youtube.com/watch?v=0H3MKqQi2AU&feature=youtu.be" target="_blank"
                        class="distance-video-list__link">Lazarus. Цикл з післяумовою.</a>
                    <a href="https://www.youtube.com/watch?v=iy1E9QakfAg&feature=youtu.be" target="_blank"
                        class="distance-video-list__link">Lazarus. Цикл з лічильником.</a>
                </div>
            </div>
        `
    },
    {
        id: 5,
        template: `
        <div class="distance-item">

            <h1 class="page-title">9 класс</h1>
            <div class="distance-task">
                <h1 class="page-title">Виконайте завдання</h1>
                <a href="https://learningapps.org/view2588295" target="_blank"
                    class="distance-task__item">Веб-сторінки та гіперпосилання</a>
                <a href="https://learningapps.org/view1927465" target="_blank" class="distance-task__item">Елементи
                    вікна браузера Google Chrom</a>
                <a href="https://learningapps.org/view4899324" target="_blank" class="distance-task__item">Хмарні
                    сервіси Google</a>

            </div>
        </div>
        `
    }
]

