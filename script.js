/* EDITABLE CONTEST DATA — replace these 20 Java strings before hosting. */
const CODE_SETS={
third:[
`class S {
    static long linearSearch(int[] arr, int key) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key) return i;
        }
        return -1;
    }
    static int binarySearch(int[] arr, int key) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = ( low + high ) / 2;
            if (arr[mid] == key) return mid;
            else if (arr[mid] < key) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}
public class M {
    public static void main(String[] args) {
        int[] a = {10, 20, 30, 40, 50, 70, 80, 90};
        short k = 30;
        int result = S.binarySearch(a, k);
    }
}`,
`import java.util.*;
public class Main {
    static boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; i * i <= n; i++)
            if (n % i == 0) return false;
        return true;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(isPrime(sc.nextInt()));
    }
}`,
`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word = sc.nextLine();
        String reverse = new StringBuilder(word)
                .reverse().toString();
        System.out.println(word.equals(reverse));
    }
}`,
`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] numbers = new int[n];
        for (int i = 0; i < n; i++) numbers[i] = sc.nextInt();
        Arrays.sort(numbers);
        System.out.println(numbers[n - 1]);
    }
}`,
`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        long a = 0, b = 1;
        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");
            long next = a + b;
            a = b; b = next;
        }
    }
}`,
`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] words = sc.nextLine().split(" ");
        Map<String, Integer> count = new HashMap<>();
        for (String word : words)
            count.put(word, count.getOrDefault(word, 0) + 1);
        System.out.println(count);
    }
}`,
`import java.util.*;
public class Main {
    static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(gcd(sc.nextInt(), sc.nextInt()));
    }
}`,
`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), sum = 0;
        int[][] matrix = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) {
                matrix[i][j] = sc.nextInt();
                if (i == j) sum += matrix[i][j];
            }
        System.out.println(sum);
    }
}`,
`import java.util.*;
public class Main {
    static int factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(factorial(sc.nextInt()));
    }
}`,
`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String text = sc.nextLine().toLowerCase();
        int vowels = 0;
        for (char ch : text.toCharArray())
            if ("aeiou".indexOf(ch) >= 0) vowels++;
        System.out.println(vowels);
    }
}`
],
second:[
`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int first = sc.nextInt();
        int second = sc.nextInt();
        System.out.println(first + second);
    }
}`,
`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        if (number % 2 == 0)
            System.out.println("Even");
        else
            System.out.println("Odd");
    }
}`,
`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            System.out.println(i);
        }
    }
}`,
`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        System.out.println(sum);
    }
}`,
`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), product = 1;
        for (int i = 1; i <= n; i++) {
            product *= i;
        }
        System.out.println(product);
    }
}`,
`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int largest = sc.nextInt();
        int number = sc.nextInt();
        while (number != 0) {
            if (number > largest) largest = number;
            number = sc.nextInt();
        }
        System.out.println(largest);
    }
}`,
`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name = sc.nextLine();
        System.out.println("Welcome, " + name);
    }
}`,
`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), reverse = 0;
        while (n > 0) {
            reverse = reverse * 10 + n % 10;
            n /= 10;
        }
        System.out.println(reverse);
    }
}`,
`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " = " + n * i);
        }
    }
}`
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
