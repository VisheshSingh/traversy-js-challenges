export function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
    const yourStrongest = Math.max(yourLeft, yourRight);
    const yourWeakest = Math.min(yourLeft, yourRight);
    const friendsStrongest = Math.max(friendsLeft, friendsRight);
    const friendsWeakest = Math.min(friendsLeft, friendsRight);
    console.log(yourStrongest)
    console.log(yourWeakest)
    console.log(friendsStrongest)
    console.log(friendsWeakest);

    return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
