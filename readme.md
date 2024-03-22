# Выявление нежелательных IP адресов посетителей сайта

**Скрипт, который поможет выявлять нежелательные IP адреса посетителей/ботов и отображать их в Метрике для дальнейшей блокировки через файл .htaccess**

__Настройка:__

1. Необходимо в поле **IDmetrika:** ******* вместо ******* вставить номер счетчика из Яндекс Метрики.

2. Функция работает с помощью метода setTimeout(), то есть скрипт будет запускаться по истечению 1 секунды, вы можете указать свое значение, по умолчанию 1000.

3. Скрипт необходимо скопировать и разместить в коде шаблона сайта с помощью тегов <script></script>, если вы хотите считывать IP адрес по всем страница. (Делать этого не рекомендуется). Рекомендуется разместить данный скрипт **НА ВРЕМЯ** на ту страницу, где происходит атака **прямых заходов (ботов)** для определния их IP адреса.

4. В Метрике в разделе **ВебВизор** дополнительно настроить __столбцы__ _"Параметры посетителей"_ и _"Параметры визитов"_ (В них будут отображаться IP адреса посетителей).

5. Вам остается только отобрать нежелательные IP адреса и заблокировать их с помощью .**htaccess**, или различные сервисы, например, **Cloudflare**.

6. После устранения нежелательных IP адресов убрать скрипт из шаблона/страницы сайта.

# Identification of unwanted IP addresses of site visitors

**Script that helps identify unwanted IP addresses of visitors/bots and display them in Metrica for further blocking via the .htaccess file**

__Settings:__

1. It is necessary to insert the counter number from Yandex Metrica in the **IDmetrics field:** ******* instead of *******.

2. The function works using the setTimeout() method, that is, the script will be launched after 1 second, you can specify your value, the default is 1000.

3. The script must be copied and linked to the site code template using <script></script> tags if you want to read the IP address throughout the page. (This is not recommended.) Apply this script **TEMPORARILY** to the page where the **direct attacks (bots)** are attacking to determine their IP address.

4. In Metrica, in the **WebVisor** section, additionally configure __columns__ _"Visitor Parameters"_ and _"Visitor Parameters"_ (They will contain the IP addresses of visitors).

5. All you have to do is select unwanted IP addresses and block them using .**htaccess** or various services, for example, **Cloudflare**.

6. After limiting unwanted IP addresses, remove the website template/page script.