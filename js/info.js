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
            <h2 class="page-title">5 клас</h2>
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
            <h2 class="page-title">6 клас</h2>

            <div class="infprmatika-container__item">
                <div class="infprmatika-container__img">
                    <img src="documents/algorithm/Algoritmi.jpg" alt="">
                </div>
                <div class="infprmatika-container__content">
                    <a href="documents/algorithm/1.pptx">Об’єкти та події. Планування в нашому житті. Команди і
                        виконавці</a>
                    <a href="documents/algorithm/2.pptx">Алгоритми</a>
                    <a href="documents/algorithm/3.pptx">Форми подання алгоритмів. Практична робота “Складання алгоритмів
                        для виконавців у словесній
                        формі і в графічному вигляді. Виконання алгоритмів”</a>
                    <a href="documents/algorithm/4.pptx">Середовище виконання алгоритму</a>
                    <a href="documents/algorithm/5.pptx">Виконавці і події в середовищі Скретч</a>
                    <a href="documents/algorithm/6.pptx">Складання та виконання алгоритмів</a>
                    <a href="documents/algorithm/7.docx" class="word-icon">Практична робота «Складання алгоритмів
                        опрацювання
                        подій з
                        використання структури слідування
                        та виконання їх у визначеному навчальному середовищі виконання алгоритмів»</a>
                </div>
            </div>
            <div class="infprmatika-container__item">
                <div class="infprmatika-container__img">
                    <img src="documents/os/os.jpg" alt="">
                </div>
                <div class="infprmatika-container__content">
                    <a href="documents/os/1.pptx">Операційна система. Графічний інтерфейс операційної системи</a>
                    <a href="documents/os/1.pptx">Файлова система та її об’єкти</a>
                    <a href="documents/os/1.pptx">Операції над об’єктами файлової системи</a>
                </div>
            </div>
            <div class="infprmatika-container__item">
                <div class="infprmatika-container__img">
                    <img src="documents/сomputer-network/1.jpg" alt="">
                </div>
                <div class="infprmatika-container__content">
                    <a href="documents/сomputer-network/1.pptx">Комп’ютерні мережі та їх призначення. Поняття про мережну
                        взаємодію. Типи комп’ютерних
                        мереж.</a>
                    <a href="documents/сomputer-network/1.pptx">Поняття користувача й сеансу користувача; вхід у локальну
                        мережу. Локальна мережа навчального
                        закладу. Робота з мережними папками.</a>
                    <a href="documents/сomputer-network/1.pptx">Поняття про глобальну мережу Інтернет. Основні служби
                        Інтернету. Поняття Всесвітнього
                        павутиння. Поняття веб-сайту, веб-сторінки, її адреси. Гіперпосилання.</a>
                    <a href="documents/сomputer-network/1.pptx">Робота з веб-браузером. Використання, створення та
                        редагування списку сайтів, обраних для
                        швидкого доступу. Аналіз інформаційних матеріалів, знайдених в Інтернеті.</a>
                    <a href="documents/сomputer-network/1.pptx">Алгоритм організації пошуку інформаційних матеріалів в
                        Інтернеті. Простий пошук. Правила
                        безпечного користування Інтернетом при пошуку інформаційних матеріалів.</a>
                </div>
            </div>
        `
    },
    {
        id: 3,
        template: `
        <div class="distance-item">

            <h1 class="page-title">7 класс</h1>
            <div class="infprmatika-container__item">
                <div class="infprmatika-container__img">
                    <img src="documents/os/os.jpg" alt="">
                </div>
                <div class="infprmatika-container__content">
                    <a href="documents/os/1.pptx">Операційна система. Графічний інтерфейс операційної системи</a>
                    <a href="documents/os/1.pptx">Файлова система та її об’єкти</a>
                    <a href="documents/os/1.pptx">Операції над об’єктами файлової системи</a>
                </div>
            </div>
            <div class="infprmatika-container__item">
                <div class="infprmatika-container__img">
                    <img src="documents/сomputer-network/1.jpg" alt="">
                </div>
                <div class="infprmatika-container__content">
                    <a href="documents/сomputer-network/1.pptx">Комп’ютерні мережі та їх призначення. Поняття про мережну
                        взаємодію. Типи комп’ютерних
                        мереж.</a>
                    <a href="documents/сomputer-network/1.pptx">Поняття користувача й сеансу користувача; вхід у локальну
                        мережу. Локальна мережа навчального
                        закладу. Робота з мережними папками.</a>
                    <a href="documents/сomputer-network/1.pptx">Поняття про глобальну мережу Інтернет. Основні служби
                        Інтернету. Поняття Всесвітнього
                        павутиння. Поняття веб-сайту, веб-сторінки, її адреси. Гіперпосилання.</a>
                    <a href="documents/сomputer-network/1.pptx">Робота з веб-браузером. Використання, створення та
                        редагування списку сайтів, обраних для
                        швидкого доступу. Аналіз інформаційних матеріалів, знайдених в Інтернеті.</a>
                    <a href="documents/сomputer-network/1.pptx">Алгоритм організації пошуку інформаційних матеріалів в
                        Інтернеті. Простий пошук. Правила
                        безпечного користування Інтернетом при пошуку інформаційних матеріалів.</a>
                </div>
            </div>
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

