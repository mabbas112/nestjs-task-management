
// class FriendList {

//     public friends: string[] = []

//     addFriend(name: string) {
//         this.announceFriendship(name)
//         this.friends.push(name)
//         this.announceFriendship(name)
//     }

//     announceFriendship(name) {
//         // console.log(`${name} is now a friend`)
//     }

//     removeFriend (name) {
//         const idx = this.friends.indexOf(name);
//         if (idx === -1) {
//             throw new Error("Friend not found")
//         }
//         this.friends.splice(idx, 1)
//     }
// }


// describe("friendList", () => {

//     let friendList;

//     beforeEach(() => {
//         friendList = new FriendList()
//     })

//     it('initializes frien list', () => {
//         expect(friendList.friends.length).toEqual(0)
//     })

//     it('add friend to a list', () => {
//         friendList.addFriend('Abbas');
//         expect(friendList.friends.length).toEqual(1)
//     })

//     it('announcing friend ship', () => {
//         friendList.announceFriendship = jest.fn()
//         expect(friendList.announceFriendship).not.toHaveBeenCalled();
//         friendList.addFriend('Abbas');
//         expect(friendList.announceFriendship).toHaveBeenCalled();
//     })

//     describe('remove friend', () => {
//         it("remove frined from list", () => {
//             friendList.addFriend('Abas')
//             expect(friendList.friends[0]).toEqual('Abas')
//             friendList.removeFriend('Abas')
//             expect(friendList.friends[0]).toBeUndefined()
//         })

//         it("throw an error", ()=> {
//             expect(()=> friendList.removeFriend("Abbas")).toThrow()
//         })
//     })
// })

