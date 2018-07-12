 // 文件夹和文件之间的关系，非常适合用组合模式来描述。文件夹里既可以包含文件，又可以
        // 包含其他文件夹，最终可能组合成一棵树，组合模式在文件夹的应用中有以下两层好处。
        //  例如，我在同事的移动硬盘里找到了一些电子书，想把它们复制到 F 盘中的学习资料文
        // 件夹。在复制这些电子书的时候，我并不需要考虑这批文件的类型，不管它们是单独的
        // 电子书还是被放在了文件夹中。组合模式让 Ctrl+V、Ctrl+C 成为了一个统一的操作。
        //  当我用杀毒软件扫描该文件夹时，往往不会关心里面有多少文件和子文件夹，组合模式
        // 使得我们只需要操作最外层的文件夹进行扫描。
        // 现在我们来编写代码，首先分别定义好文件夹 Folder 和文件 File 这两个类。见如下代码：



        /*文件夹类，可以加文件到自己内部的files数组中。，可以扫描*/
        var Folder = function (name) {
            this.name = name;
            this.files = [];
        };

        Folder.prototype.add = function (file) {

            this.files.push(file);
        };
        Folder.prototype.scan = function () {
            console.log('开始扫描文件夹' + this.name);
            for (var i = 0, file, files = this.files; file = files[i++];) {
                file.scan();
            }
        };
        /******************************* File 文件类******************************/
        var File = function (name) {
            this.name = name;
        };

        File.prototype.add = function () {
            throw new Error('文件下面不能添加文件');
        };
        File.prototype.scan = function () {
            console.log('开始扫描文件夹' + this.name);
        };

        /*接下来创建一些文件夹和文件对象， 并且让它们组合成一棵树，这棵树就是我们 F 盘里的
现有文件目录结构：*/
        var folder = new Folder('学习资料');//这是顶部根节点
        var folder1 = new Folder('javascript');
        var folder2 = new Folder('jQuery');

        var file1 = new File('JavaScript 设计模式与开发实践');
        var file2 = new File('精通 jQuery');
        var file3 = new File('重构与模式')
        folder1.add(file1);
        folder2.add(file2);
        folder.add(folder1);
        folder.add(folder2);
        folder.add(file3);


        //         现在的需求是把移动硬盘里的文件和文件夹都复制到这棵树中，假设我们已经得到了这些文
        // 件对象：
        var folder3 = new Folder('Nodejs');
        var file4 = new File('深入浅出 Node.js');
        folder3.add(file4);
        var file5 = new File('JavaScript 语言精髓与编程实践');
        // 接下来就是把这些文件都添加到原有的树中：
        folder.add(folder3);
        folder.add(file5);


 
    /*    运用了组合模式之后，扫描整个文件夹的操作也是轻而易举的，我们只需要操作树的最顶端
对象： */
folder.scan(); 


/*小结*/

// 本章我们了解了组合模式在 JavaScript 开发中的应用。组合模式可以让我们使用树形方式创
// 建对象的结构。我们可以把相同的操作应用在组合对象和单个对象上。在大多数情况下，我们都
// 可以忽略掉组合对象和单个对象之间的差别，从而用一致的方式来处理它们。
// 然而，组合模式并不是完美的，它可能会产生一个这样的系统：系统中的每个对象看起来都
// 与其他对象差不多。它们的区别只有在运行的时候会才会显现出来，这会使代码难以理解。此外，
// 如果通过组合模式创建了太多的对象，那么这些对象可能会让系统负担不起。