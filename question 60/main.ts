//  - Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

function user_Profile() {
  let username: string = "Haroon";
  let userage: number = 20;

  return {
    username: username,
    userage: userage,
    display: function () {
      console.log(`Name : ${this.username}, Age : ${this.userage}`);
    },
  };
}

let show = user_Profile();
show.display();
