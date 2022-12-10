import { readLines, printResult } from '../utils';

class treeNode {
  constructor(
    public name: string,
    public children = [],
    public isDir = true,
    public length = 0
  ) {}

  addChild(child: treeNode) {
    this.children.push(child);
  }

  getChildren() {
    return this.children;
  }

  hasChild(child: string) {
    return this.children.some((child) => child.name === child);
  }

  hasChildDir() {
    return this.children.some((child) => child.isDir);
  }
}
const tree = new treeNode('/');
let currentPath = '';
readLines('./input.txt', '$ ')
  .filter((row) => row !== '')
  .map((row) => {
    const [parent, ...children] = row.split('\n').filter((row) => row !== '');

    // console.log({ row, parent, children });

    if (parent.startsWith('cd')) {
      const path = parent.split(' ')[1];
      // console.log({ parent, path, currentPath });
      if (path === '..') {
        currentPath = currentPath.split('/').slice(0, -1).join('/');
        return;
      }

      if (path === '/') {
        currentPath = '';
        return;
      }

      currentPath = `${currentPath}/${path}`;
      // console.log({ post: 'post', parent, path, currentPath });
    }

    if (parent.startsWith('ls')) {
      const current = currentPath.split('/').filter((row) => row !== '');
      const currentLeaf = current.reduce(
        (acc, cur) => acc.getChildren().find((child) => child.name === cur),
        tree
      );
      children.map((child) => {
        const [name, path] = child.split(' ');
        if (name === 'dir') {
          return currentLeaf.addChild(new treeNode(path));
        }

        return currentLeaf.addChild(
          new treeNode(path, [], false, Number(name))
        );
      });
    }
  });

const result = [];
const getScore = (current: treeNode, prefix = '') => {
  // console.log(current.name, current.children);

  if (current.isDir) {
    prefix = `${prefix}/${current.name}`;
    const curScore = current.children.map((children) =>
      getScore(children, prefix)
    );

    const curSum = curScore.reduce((acc, cur) => acc + cur, 0);
    result.push(curSum);
    return curSum;
  } else {
    return current.length;
  }
};

// console.log(score);
const r = getScore(tree);
// console.log(r);

const res = Object.values(result).reduce((acc, cur) => {
  if (cur < 100000) {
    console.log({ cur, acc });
    acc = cur + acc;
    return acc;
  }

  return acc;
}, 0);

console.log(result);
printResult(res);
