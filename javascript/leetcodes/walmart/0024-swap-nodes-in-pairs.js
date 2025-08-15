/*24. Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)*/

var swapPairs = function quest(head) {
    let dungeon = new ListNode(0, null);
    dungeon.next = head
    let Hero = dungeon                  //this is the HERO to traverse the dungeon with
    while (Hero?.next?.next) {          //if there are two more nodes to switch...
        battle(Hero);                   // Call in the SWITCHER!!
        Hero = Hero?.next?.next;        // Whew, now that the bloodshed is over ONWARD!
    }
    return dungeon.next                 //Treasure!
};
function battle(Hero) {
    let Goblin = Hero.next;             //Hero's next opponent is a Goblin
    let Orc = Goblin.next;              //Hero's  oh no! his boss is a Orc!
    let Dragon = Orc.next               //Hero's Who knew the dragon was behind all of this?
    Hero.next = Orc                     //The Hero side steps the goblin
    Hero.next.next = Goblin             //Then backstabs it after defeating the orc
    Hero.next.next.next = Dragon        //Now the Hero face the Dragon!
}


 