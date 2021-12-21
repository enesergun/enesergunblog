# Bootcamp Hızlandırma Programı Hafta-2

***

*19.12.21*

***

### 2.Haftada neler oldu?

Bu haftanın çok çabuk geçtiğini söyleyebilirim. Sanırım coderbyte challengelarının seviyesi ile ilgili olabilir. Çözmemiz için verilen 3 saatlik süre içerisinde geçen haftaya nazaran daha az terlediğim ve nabzımın daha düşük seviyelerde seyretmesi haftanın çabuk geçtiği kanısına varmamdaki etkenlerden birisidir. <br />

Hackkerrankte 30 Days Of Code'a başladım ve ilk yıldızı aldım. Hackkerrank'te önceden sonraki probleme geçmek için süre yoktu böylelikle örneğin 10 Days of Code başladığım gün bitirmiştim fakat bu değişmiş olduğu için 30 Days Of Code'taki tüm yıldızları toplamak için gerçekten 30 gün geçmesini bekleyeceğim. :/ <br />

Gönderilen coderbyte chellengelardan hard seviyesindeki problemi çözdüğümü sanmıştım. "Mıştım" diyorum çünkü editör içerisinde yer alan test caseler başarılı olmuştu fakat çözümü submit ettikten sonra tüm test caseler patlayıp 0 puan aldıktan sonra yanlış çözmüş olduğumu fark ettim. Aslında yazdığım algoritmanın mantığı doğruydu fakat inputlar değiştiğinde bazı girdileri kaçırıyordum. Bunu daha anlamlı açıklamak için öncelikle problemi vereyim.

<br />
<br />

### Problemler

Bu hafta graf teori problemlerinden en kısa yol bulma (shortest path) problemini vereceğim. Ve beraberinde sunmuş olduğum çözümü.

<br />

#### Shortest Path:

*Have the function ShortestPAth(strArr) take strArr which will be an arrary of strings which models a non-looping Graph. The structure of the arrar will be as follows: The first element in the arrar will be the number of nodes N(points) in the arrar as a string. The next N elements will be the nodes which can be anything (A, B, C, ..., Brick Street, Main Street, ...) Then after the Nth element, the rest of the elements in the array will be the connections between all of the nodes. They will lok like this: (A-B, B-C, ..., Brick Street-Main Street, ...) Although, there may exist no connections at all. An example of strArr may be: ["4", "A", "B", "C", "D", "A-B", "B-D", "B-C", "C-D"]. Your program should return the shortest path from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-D. Here is another example with strArr being ["7", "A", "B", "C", "D", "E", "F", "G", "A-B", "A-E", "B-C", "C-D", "D-F", "E-D", "F-G"]. The outout for this arrar should be A-E-D-F-G. There will only ever be one shortest path for the arrar. If no path between the first and last node exists, return -1. The array will at minimum have two nodes. Also, the connection A-B for example, means that A can get to B and B can get to A.* 

<br />

Çözüme geçmeden, 

~~~js
function ShortestPath(strArr) {
    let non = strArr[0];
    let firstNode = strArr[1];
    let lastNode = strArr[non];
    let newArr = strArr.slice(parseInt(non) + 1 );
    let paths = []
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i][0] === firstNode) {
            console.log("newarr[i]", newArr[i])
            let lastConnection = newArr[i][2];
            let path = [newArr[i][0], newArr[i][2]];
            let isim = "enes"
            for (let j = 0; j <= newArr.length; j++) {
                if (j === newArr.length && lastConnection != lastNode) {
                    j = 0;
                }
                else if (j === newArr.length && lastConnection === lastNode) {
                    break
                }
                else if (newArr[j][0] === lastConnection) {
                    lastConnection = newArr[j][2];
                    path.push(lastConnection);
                    console.log(path)
                }
            }
            paths.push(path.join("-"));
            }
        
    }
    const min = (left, right) => left.length <= right.length ? left : right;

    if (paths.reduce(min) === "") {
        return -1;
    }
    return paths.reduce(min)
}

~~~
