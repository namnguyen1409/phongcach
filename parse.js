var srtData = `1
00:00:00,000 --> 00:00:02,879
•••
2
00:00:02,879 --> 00:00:04,790
<strong>Đứng ở dưới thì nhảy mạnh lên</strong>

3
00:00:04,790 --> 00:00:08,529
Ai sợ thì đi về

4
00:00:08,529 --> 00:00:09,849
Sao hôm nay lại 

5
00:00:09,849 --> 00:00:10,710
<strong>Phong cách</strong>

6
00:00:10,710 --> 00:00:12,140
Như thế này

7
00:00:12,140 --> 00:00:13,490
Sao mà bây giờ đây

8
00:00:13,490 --> 00:00:16,010
Vũ trụ em chỉ thấy anh thôi đấy

9
00:00:16,010 --> 00:00:17,410
<strong>ĐI VỀ ĐI</strong>

10
00:00:17,410 --> 00:00:19,539
Trả lại <strong>"phong cách"</strong> đây

11
00:00:19,539 --> 00:00:19,800
Meo

12
00:00:19,800 --> 00:00:20,039
meo 

13
00:00:20,039 --> 00:00:20,300
meo 

14
00:00:20,300 --> 00:00:21,309
meo 

15
00:00:21,309 --> 00:00:23,579
trả lại <strong>phong cách</strong> tôi đây

16
00:00:23,579 --> 00:00:25,440
Cứ như mèo con <strong>phong cách</strong>

17
00:00:25,440 --> 00:00:27,410
trong khu vườn nhà

18
00:00:27,410 --> 00:00:28,300
Rất <strong>đi về</strong>

19
00:00:28,300 --> 00:00:31,269
có ong lòng em có anh

20
00:00:31,269 --> 00:00:33,090
<strong>Ai - sợ thì đi về</strong>

21
00:00:33,090 --> 00:00:35,240
mỗi lúc ban chiều là 

22
00:00:35,240 --> 00:00:36,710
<strong>Phong cách</strong> quá chừng

23
00:00:36,710 --> 00:00:39,109
lòng em cứ tưng tứng tưng tưng

24
00:00:39,109 --> 00:00:43,109
<strong>Ai - sợ thì đi về</strong>

25
00:00:43,109 --> 00:00:46,939
<strong>Phong cách</strong>

26
00:00:46,939 --> 00:00:50,929
<strong>Ai - sợ thì đi về</strong>

27
00:00:50,929 --> 00:00:54,329
<strong>Phong cách</strong>

28
00:00:54,329 --> 00:00:54,622
<strong>Phong cách</strong>
`


const arlert_list = [
    'alert-primary',
    'alert-secondary',
    'alert-success',
    'alert-danger',
    'alert-warning',
    'alert-info',
    'alert-light',
    'alert-dark'
]
function randomAlert() {
    return arlert_list[Math.floor(Math.random() * arlert_list.length)]
}
function addPopup(line) {
    const body = document.querySelector('body');
    const popup = document.createElement('div');
    popup.classList.add('alert', 'alert-dismissible', 'fade', 'show', 'popup');
    popup.classList.add(randomAlert())
    popup.style.fontSize = '1.5rem';
    popup.setAttribute('role', 'alert');
    popup.innerHTML = line;
    body.insertBefore(popup, body.firstChild);
    
    let delay = 5000;
    setTimeout(() => {
        
        popup.classList.remove('show')
        popup.classList.add('hide')
    }, delay)
    setTimeout(() => {
        
        popup.remove()
    }, delay * 2)
    
}
function play() {
    
    const lines = srtData.split('\n');
    
    const filteredLines = lines.filter(line => line.trim() !== '');
    
    let delay = 0
    
    for(let i = 0; i < filteredLines.length; i++) {
        let textIndex = filteredLines[i]
        let textTime = filteredLines[i + 1]
        let textContent = filteredLines[i + 2]
        
        let time = textTime.split(' --> ')
        let startTime = time[0].split(':')
        let endTime = time[1].split(':')
        let start = parseInt(startTime[0]) * 3600 + parseInt(startTime[1]) * 60 + parseInt(startTime[2].split(',')[0]) + parseInt(startTime[2].split(',')[1]) / 1000
        let end = parseInt(endTime[0]) * 3600 + parseInt(endTime[1]) * 60 + parseInt(endTime[2].split(',')[0]) + parseInt(endTime[2].split(',')[1]) / 1000
        
        setTimeout(() => {
            addPopup(textContent)
        }, delay * 1000)
        i = i + 2
        delay += end - start
    }
}

const input = document.getElementById('input');
input.addEventListener('click', () => {
    input.classList.toggle('show');
    setTimeout(() => {
        input.remove()
    }, 2000)
    const audio = document.querySelector('#audio');
    audio.play();
    play();
});