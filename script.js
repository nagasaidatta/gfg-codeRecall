const CODE_SETS={
third:[
`class Main {
    public static void main(String[] args) {
        String s = "LEVEL";
        Stack<Character> st = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            st.push(s.charAt(i));
        }

        String rev = "";

        while (!st.isEmpty()) {
            rev = rev + st.pop();
        }

        System.out.println(s.equals(rev));
    }
}`,
`class Main {
    public static void main(String[] args) {
        int[] arr = {4, 2, 4, 3, 2, 4, 5};
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < arr.length; i++) {
            map.put(arr[i], map.getOrDefault(arr[i], 0) + 1);
        }

        int max = 0;
        int element = 0;

        for (int key : map.keySet()) {
            if (map.get(key) > max) {
                max = map.get(key);
                element = key;
            }
        }

        System.out.println(element);
    }
}`,
`class Counter {
    int value = 0;
    void run() {
        for (int i = 1; i <= 4; i++) {
            for (int j = 1; j <= 3; j++) {
                if ((i + j) % 2 == 0)
                    value++;
                else
                    value += 2;
            }
        }
    }
}
class Main {
    public static void main(String[] args) {
        Counter c = new Counter();
        c.run();
        int x = c.value;
        while (x > 5) {
            if (x % 3 == 0)
                x -= 3;
            else
                x--;
        }
        System.out.println(x);
    }
}`,
`class Student {
    byte marks = 80;
    class Result {
        void show() {
            System.out.println("Marks: " + marks);
        }
    }
}
class College {
    void display() {
        System.out.println("College Student");
    }
}
public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        Student.Result r = s.new Result();
        College c = new College();
    }
}`,
`class A {
    void show() {
        System.out.print("A");
    }
}
class B extends A {
    void show() {
        super.show();
        System.out.print("B");
    }
}
class C extends B {
    void show() {
        System.out.print("C");
        super.show();
    }
}
public class Main {
    public static void main(String[] args) {
        A ob = new C();
        ob.show();
    }
}`,
`Add code`,
`Add code`,
`Add code`,
`Add code`,
`Add code`
],
second:[
`#include <stdio.h>

struct Student {
    int roll;
    char name[20];
    float marks;
};
void display(struct Student s) {
    printf("%d %s %.1f \\n", s.roll, s.name, s.marks);
}
int main() {
    struct Student s[3] = {
        {101, "Ravi", 82.5},
        {102, "Anu", 91.0},
        {103, "Kiran", 76.5}
    };
    int i;
    float total = 0;
    for(i = 0; i < 3; i++) {
        total = total + s[i].marks;
    }
    printf("Average = %.2f \\n", total / 3);
    for(i = 0; i < 3; i++) {
        display(s[i]);
    }
    return 0;
}`,
`#include <stdio.h>

void reverse(char str[]) {
    int left = 0;
    int right = 0;
    char temp;
    while(str[right] != '\\0') {
        right++;
    }
    right--;
    while(left < right) {
        temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
}
int main() {
    char text[] = "PROGRAM";
    printf("Before: %s\\n", text);
    reverse(text);
    printf("After: %s\\n", text);
    return 0;
}`,
`#include <stdio.h>

struct Employee {
    int id;
    char name[20];
    int salary;
};
int bonus(struct Employee e) {
    if(e.salary >= 50000)
        return 5000;
    else
        return 3000;
}
int main() {
    struct Employee e1 = {101, "Arun", 55000};
    struct Employee e2 = {102, "Meena", 42000};
    int b1, b2;
    b1 = bonus(e1);
    b2 = bonus(e2);
    printf("%s : %d\\n", e1.name, e1.salary + b1);
    printf("%s : %d\\n", e2.name, e2.salary + b2);
    if(b1 > b2)
        printf("Employee 1 gets higher bonus\\n");
    else
        printf("Employee 2 gets higher bonus\\n");
    return 0;
}`,
`#include <stdio.h>
int countDigits(char str[]) {
    int i;
    int count = 0;
    for(i = 0; str[i] != '\\0'; i++) {
        if(str[i] >= '0' && str[i] <= '9')
            count++;
    }
    return count;
}
int main() {
    char data[] = "CSE2026Lab";
    int digits;
    digits = countDigits(data);
    printf("String = %s\\n", data);
    printf("Digits = %d\n", digits);
    if(digits == 4)
        printf("Expected count\\n");
    else
        printf("Unexpected count\\n");
    return 0;
}`,
`#include <stdio.h>
int length(char str[]) {
    int i = 0;
    while(str[i] != '\\0')
        i++;
    return i;
}
int countA(char str[]) {
    int i, count = 0;
    for(i = 0; str[i] != '\\0'; i++) {
        if(str[i] == 'a')
            count++;
    }
    return count;
}
void display(char str[]) {
    int i;
    for(i = 0; str[i] != '\\0'; i++) {
        printf("%c ", str[i]);
    }
    printf("\\n");
}
int main() {
    char word[] = "banana";
    int len, aCount;
    len = length(word);
    aCount = countA(word);
    printf("Length = %d\\n", len);
    printf("A count = %d\\n", aCount);
    display(word);
    if(len > aCount)
        printf("Length is greater\\n");
    return 0;
}`,
`Add code`,
`Add code`,
`Add code`,
`Add code`,
`Add code`
]};
const $=s=>document.querySelector(s),home=$('#homeScreen'),contest=$('#contestScreen'),select=$('#durationSelect'),panel=$('#codePanel'),content=$('#codeContent'),status=$('#stageStatus'),clock=$('#timer'),caption=$('#timerCaption'),list=$('#codeList'),prev=$('#previousButton'),next=$('#nextButton');
[15,20,30,45,60,90,120].forEach(n=>select.add(new Option(`${n} seconds`,n,n===30,n===30)));select.add(new Option('Custom duration…','custom'));
let group,index=0,remaining=30,timer,isShowing=false,finished=false,complete=new Set();
const escapeHtml=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function highlightJava(s){const token=/(\/\/.*$)|("(?:[^"\\]|\\.)*")|\b(public|private|protected|static|final|class|new|return|if|else|for|while|do|switch|case|break|continue|void|extends|implements|throws|try|catch|import|package)\b|\b(String|Integer|Long|Double|Boolean|Scanner|System|Arrays|ArrayList|HashMap|Map|List|Math)\b|\b(\d+)\b/gm;return escapeHtml(s).replace(token,(match,comment,string,keyword,type,number)=>`<span class="${comment?'syntax-comment':string?'syntax-string':keyword?'syntax-keyword':type?'syntax-type':'syntax-number'}">${match}</span>`)}
function fit(s){const lines=s.split('\n'),longest=Math.max(...lines.map(x=>x.length));document.documentElement.style.setProperty('--code-size',lines.length>22||longest>62?'clamp(18px,1.35vw,24px)':lines.length>17||longest>50?'clamp(20px,1.65vw,28px)':'clamp(22px,1.9vw,32px)')}
function renderList(){list.innerHTML='';CODE_SETS[group].forEach((_,i)=>{const b=document.createElement('button');b.textContent=`Code ${i+1}`;b.className=(i===index?'active ':'')+(complete.has(i)?'complete':'');b.onclick=()=>go(i);list.append(b)});prev.disabled=index===0;next.disabled=index===9}
function stop(){clearInterval(timer);timer=null}function reset(){stop();remaining=+select.value;clock.textContent=remaining;caption.textContent='READY'}
function hide(message='PRESS SPACE TO REVEAL'){stop();isShowing=false;panel.classList.remove('visible');setTimeout(()=>{if(!isShowing)content.innerHTML=''},180);status.textContent=message;status.classList.remove('hidden')}
function reveal(){if(isShowing||finished)return;const source=CODE_SETS[group][index];fit(source);content.innerHTML=highlightJava(source);panel.classList.add('visible');status.classList.add('hidden');isShowing=true;remaining=+select.value;clock.textContent=remaining;caption.textContent='RUNNING';timer=setInterval(()=>{clock.textContent=--remaining;if(remaining<=0){complete.add(index);const last=index===9;if(!last)index++;else finished=true;renderList();hide(last?'ALL CODES COMPLETE':'TIME UP — PRESS SPACE FOR NEXT CODE');caption.textContent='TIME UP'}},1000)}
function go(i){index=i;finished=false;reset();hide();renderList()}function start(year){group=year;index=0;finished=false;complete=new Set();home.classList.add('hidden');contest.classList.remove('hidden');reset();hide();renderList()}
select.onchange=()=>{if(select.value!=='custom')return;const value=Number(prompt('Enter timer duration in seconds:',30));if(Number.isFinite(value)&&value>0){const seconds=Math.round(value),option=new Option(`${seconds} seconds`,seconds,true,true);select.add(option,select.options.length-1)}else select.value='30'};document.querySelectorAll('.year-button').forEach(b=>b.onclick=()=>start(b.dataset.year));document.addEventListener('keydown',e=>{if(e.code!=='Space'||contest.classList.contains('hidden'))return;e.preventDefault();if(!isShowing)reveal()});prev.onclick=()=>index&&go(index-1);next.onclick=()=>index<9&&go(index+1);$('#homeButton').onclick=()=>{stop();contest.classList.add('hidden');home.classList.remove('hidden')};$('#fullscreenButton').onclick=async()=>document.fullscreenElement?document.exitFullscreen():contest.requestFullscreen();document.addEventListener('fullscreenchange',()=>$('#fullscreenButton').textContent=document.fullscreenElement?'Exit Fullscreen':'Fullscreen');
