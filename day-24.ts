function isTreesSynchronized(
    tree1: { value: string; left?: any; right?: any } | undefined,
    tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
    // Code here

    if (tree1 === undefined) return [true, ''];

    if (tree1?.value !== tree2?.value) return [false, tree1.value];

    if (tree1.value === tree2.value) {
        const resultLeft = isTreesSynchronized(tree1.left, tree2.right);
        const resultRigth = isTreesSynchronized(tree1.right, tree2.left);

        return [resultLeft[0] && resultRigth[0], tree1.value];

    }

    return [false, '']
}



const tree1 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
}

const tree2 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '⭐' },
}

console.log(isTreesSynchronized(tree1, tree2)) // [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/